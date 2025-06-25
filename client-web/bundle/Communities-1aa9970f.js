"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-1aa9970f"],
    {
        992426: (e, t, a) => {
            a.d(t, { x: () => y });
            var n = a(202784),
                o = a(855488),
                c = a(111677),
                l = a.n(c),
                r = a(316118),
                i = a(338940),
                s = a(443781),
                m = a(870358);
            const u = l().h3e55b40,
                d = l().dd71d9c9,
                p = l().cf65e56b,
                b = l().d936eeca,
                y = (e) => {
                    const { autoFocus: t = !1, communityName: a, onChange: c } = e,
                        { featureSwitches: l } = n.useContext(s.rC),
                        [y, E] = n.useState(!1),
                        [g, h] = n.useState(void 0),
                        f = l.getNumberValue("c9s_max_community_name_length", 30),
                        C = n.useCallback(
                            (e) => {
                                const t = e.target.value;
                                let a = !1;
                                (0, m.CF)(t, 3, f) ? ((0, r.Z)(t).length > 0 || (0, i.Z)(t).length > 0) && ((a = !0), h(b)) : ((a = !0), h(p({ minCharacterCount: 3, maxCharacterCount: f }))), E(a), c(t, a);
                            },
                            [f, c, h],
                        ),
                        Z = d({ minCharacterCount: 3, maxCharacterCount: f });
                    return n.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, autoFocus: t, calculateLength: m.Z, errorText: g, helperText: Z, invalid: y, label: u, name: "typedCommunityName", onChange: C, spellCheck: "false", validLength: f, value: a });
                };
        },
        739658: (e, t, a) => {
            a.d(t, { G: () => d });
            var n = a(202784),
                o = a(855488),
                c = a(111677),
                l = a.n(c),
                r = a(443781),
                i = a(870358);
            const s = l().e2df7cf2,
                m = l().be9bb312,
                u = l().e988475f,
                d = (e) => {
                    const { autoFocus: t = !1, communityPurpose: a, onChange: c } = e,
                        [l, d] = n.useState(void 0),
                        [p, b] = n.useState(!1),
                        { featureSwitches: y } = n.useContext(r.rC),
                        E = y.getNumberValue("c9s_max_community_description_length", 160),
                        g = n.useCallback(
                            (e) => {
                                const t = e.target.value,
                                    a = !(0, i.CF)(t, 3, E);
                                a && d(u({ minCharacterCount: 3, maxCharacterCount: E })), b(a), c(t, a);
                            },
                            [E, d, c],
                        );
                    return n.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, autoFocus: t, calculateLength: i.Z, errorText: l, helperText: m, invalid: p, label: s, multiline: !0, name: "typedCommunityPurpose", numberOfLines: 3, onChange: g, spellCheck: "false", validLength: E, value: a });
                };
        },
        890605: (e, t, a) => {
            a.d(t, { W: () => d });
            var n = a(202784),
                o = a(855488),
                c = a(111677),
                l = a.n(c),
                r = a(443781),
                i = a(870358);
            const s = l().gcddfba8,
                m = l().hf86d862,
                u = l().i88b7305,
                d = (e) => {
                    const { communityQuestion: t, onChange: a } = e,
                        [c, l] = n.useState(void 0),
                        [d, p] = n.useState(!1),
                        { featureSwitches: b } = n.useContext(r.rC),
                        y = b.getNumberValue("c9s_max_community_question_length", 160),
                        E = n.useCallback(
                            (e) => {
                                const t = e.target.value,
                                    n = !(0, i.CF)(t, 0, y);
                                n && l(u({ maxCharacterCount: y })), p(n), a(t, n);
                            },
                            [y, l, a],
                        );
                    return n.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, calculateLength: i.Z, errorText: c, helperText: m, invalid: d, label: s, multiline: !0, name: "typedCommunityQuestion", numberOfLines: 3, onChange: E, spellCheck: "false", validLength: y, value: t });
                };
        },
        457061: (e, t, a) => {
            a.r(t), a.d(t, { CommunitySettingsRouter: () => nn, default: () => on });
            var n = a(791329),
                o = a(202784),
                c = (a(585488), a(351743)),
                l = a.n(c),
                r = a(107267),
                i = a(731708),
                s = a(844685),
                m = a(779610),
                u = a(420412),
                d = a(954110),
                p = a(111677),
                b = a.n(p),
                y = a(443781),
                E = a(652904),
                g = a(870358),
                h = a(725516),
                f = a(615027),
                C = a(82152),
                Z = a(485458),
                _ = a(629665),
                v = a(325686),
                x = a(855488),
                I = a(242454),
                k = a(190286),
                S = a(392237),
                w = a(143095),
                T = a(125363),
                R = a(491963),
                B = a(601576);
            const P = b().ab1069de,
                D = b().ab1069de,
                L = b().bbc91896,
                M = b().ab1069de,
                $ = b().cfd2f35e,
                H = b().h3e55b40,
                A = b().g61ed8a4,
                z = _.Z,
                N = o.memo(({ community: e }) => {
                    const { id_str: t, name: a } = e,
                        n = (0, T.I0)(),
                        c = (0, r.useHistory)(),
                        [s, m] = (0, w.O)(!1),
                        [u, d] = o.useState(""),
                        p = u !== a,
                        y = o.useCallback((e) => {
                            d(e.currentTarget.value);
                        }, []),
                        [E] = l()(z),
                        g = o.useCallback(() => {
                            E({
                                variables: { id: t, name: u },
                                onCompleted({ community_delete: e }) {
                                    let a;
                                    switch (e?.__typename) {
                                        case "CommunityDeleteSuccess":
                                            n(R.ZP.deleteOne(t)), c.replace(`/i/communities/${t}`);
                                            break;
                                        case "CommunityDeleteActionUnavailable":
                                        case "CommunityDeleteError":
                                            a = e.message;
                                        default:
                                            n((0, B.fz)({ text: a || A }));
                                    }
                                },
                                onError() {
                                    n((0, B.fz)({ text: A }));
                                },
                            });
                        }, [t, E, n, c, u]);
                    if ("CommunityDeleteAction" !== e.actions.delete_action_result.__typename) return null;
                    const h = o.createElement(v.Z, { style: O.container }, o.createElement(i.ZP, null, L), o.createElement(v.Z, { style: O.inputContainer }, o.createElement(i.ZP, { style: O.inputPrompt }, ((e) => o.createElement(b().I18NFormatMessage, { $i18n: "c2696cdf" }, o.createElement(i.ZP, { weight: "bold" }, b().i27eb0b7({ communityName: e }))))(a)), o.createElement(x.Z, { label: H, name: "communityName", onChange: y, style: O.input, value: u })));
                    return o.createElement(o.Fragment, null, o.createElement(I.Z, { color: "red500", label: P, onPress: m.toTrue }), s ? o.createElement(k.Z, { cancelButtonLabel: $, confirmButtonDisabled: p, confirmButtonLabel: M, confirmButtonType: "destructiveFilled", headline: D, onCancel: m.toFalse, onConfirm: g, text: h }) : null);
                }),
                O = S.default.create((e) => ({ container: { display: "flex", flexDirection: "column", marginBottom: `-${e.spaces.space24}` }, input: { paddingHorizontal: 0, paddingVertical: e.spaces.space8 }, inputPrompt: { paddingTop: e.spaces.space16 }, inputContainer: { color: e.colors.text } })),
                F = o.memo(N);
            var q = a(530525),
                j = a(439592),
                W = a(834324),
                V = a(500040),
                G = a(370111),
                J = a(753291),
                U = a(716233),
                Y = a(166677),
                Q = a(71620),
                K = a(668214),
                X = a(497294);
            const ee = (e, { localMediaId: t }) => {
                    const [a] = t && isFinite(t) ? X.m3(e, t) : [];
                    return a;
                },
                te = (0, K.Z)()
                    .propsFromState(() => ({ localMedia: ee }))
                    .propsFromActions(() => ({ addLocalMediaId: R.pX, removeLocalMediaId: R.rB, editCommunityBanner: R.O5, removeBanner: R.ZP.removeBannerMedia, createLocalApiErrorHandler: (0, Q.zr)("COMMUNITY_TOOLS_EDIT_BANNER") })),
                ae = b().a49f884e,
                ne = b().ea965b82,
                oe = b().gea6cc1a,
                ce = b().cfd2f35e,
                le = b().j35d3ad6,
                re = b().f1e8fb22,
                ie = b().fc2a5c92,
                se = b().e405ec22;
            const me = S.default.create((e) => ({ error: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                ue = te(function (e) {
                    const { addLocalMediaId: t, communityId: a, createLocalApiErrorHandler: n, editCommunityBanner: c, hasCustomMedia: l, localMedia: r, localMediaId: i, media: s, removeBanner: m, removeLocalMediaId: u } = e,
                        [d, p] = o.useState(!1),
                        [b, y] = o.useState(!1),
                        [E, g] = o.useState(!1),
                        [h, f] = o.useState(!1),
                        C = s?.image,
                        Z = S.default.theme.aspectRatios.communityBanner,
                        _ = n({ customErrorHandler: (e) => (y(se), []) }),
                        x = (e) => (g(!1), f(Boolean(e)), e ? t(a, e) : u(a)),
                        I = C ? o.createElement(q.Z, { "aria-label": ae, aspectMode: j.Z.exact(Z), image: C }) : null;
                    return o.createElement(
                        o.Fragment,
                        null,
                        b ? o.createElement(v.Z, { style: me.error }, o.createElement(W.Z, { Icon: V.default, headline: ie, text: b, type: "danger" })) : null,
                        o.createElement(J.Z, {
                            "aria-label": ne,
                            aspectRatio: Z,
                            currentContent: I,
                            location: U.vC.CommunityBanner,
                            mediaItem: E ? r : void 0,
                            onChange: ([e]) => {
                                y(!1), x(e);
                            },
                            onFailure: () => {
                                y(se), u(a);
                            },
                            onRemove:
                                l || E
                                    ? () => {
                                          x(), p(!0);
                                      }
                                    : void 0,
                        }),
                        h && r
                            ? o.createElement(G.Z, {
                                  aspectRatio: Z,
                                  media: r,
                                  onCancel: x,
                                  onCropDone: (e) => {
                                      f(!1),
                                          i
                                              ? (g(!0),
                                                c(a, { mediaId: i, cropData: e }).catch((e) => {
                                                    x();
                                                    (0, Y.$r)(e) ? y(se) : _(e);
                                                }))
                                              : y(se);
                                  },
                              })
                            : null,
                        d
                            ? o.createElement(k.Z, {
                                  cancelButtonLabel: ce,
                                  confirmButtonLabel: le,
                                  confirmButtonType: "destructiveFilled",
                                  headline: oe,
                                  onCancel: () => {
                                      p(!1);
                                  },
                                  onConfirm: () => {
                                      m(a).catch(_), p(!1);
                                  },
                                  text: re,
                              })
                            : null,
                    );
                });
            var de = a(807896),
                pe = a(331909),
                be = a(131155),
                ye = a(712696),
                Ee = a.n(ye),
                ge = a(736063),
                he = (a(136728), a(371344)),
                fe = a(721569),
                Ce = a(516951),
                Ze = a(445250),
                _e = a(716042),
                ve = a(154003),
                xe = a(952428),
                Ie = a(678773),
                ke = a(565421);
            const Se = b().d96cf7ce,
                we = { label: Se },
                Te = b().ab8089ea,
                Re = { label: Te },
                Be = o.createElement(Ie.default, null),
                Pe = o.createElement(ke.default, null),
                De = (0, _e.JV)(function () {
                    return o.createElement(ve.ZP, { "aria-label": Te, hoverLabel: Re, icon: Be, type: "primaryText" });
                });
            function Le({ communityId: e, hashtag: t, onDelete: a, position: n }) {
                const c = o.useCallback(
                        (e) => {
                            e.preventDefault(), a(n);
                        },
                        [n, a],
                    ),
                    l = `#${t}`;
                return o.createElement(xe.Z, { "aria-label": l, link: `/i/communities/${e}/hashtag/${t}`, style: Me.container }, o.createElement(v.Z, { style: Me.textContainer }, o.createElement(i.ZP, { weight: "bold" }, l)), o.createElement(ve.ZP, { "aria-label": Se, hoverLabel: we, icon: Pe, onPress: c, style: Me.deleteButton, type: "primaryText" }), o.createElement(De, null));
            }
            const Me = S.default.create((e) => ({ container: { alignItems: "center", display: "flex", flexDirection: "row", padding: e.spaces.space16 }, textContainer: { flexGrow: 1 }, deleteButton: { marginEnd: e.spaces.space8 } })),
                $e = (0, _e.W8)((e) => o.createElement(Le, e)),
                He = (0, _e.JN)(({ communityId: e, items: t, onDelete: a }) =>
                    o.createElement(
                        v.Z,
                        null,
                        t.map((t, n) => o.createElement($e, { communityId: e, hashtag: t, index: n, key: t, onDelete: a, position: n })),
                    ),
                ),
                Ae = b().i307a7ca,
                ze = b().dc6eca54,
                Ne = b().d27de326,
                Oe = b().d84cc77a,
                Fe = b().gf5e9ea6,
                qe = b().d22e4cba,
                je = b().ca72a540,
                We = b().bd96bf16,
                Ve = b().j27623d4,
                Ge = /^[\p{Letter}\p{Mark}\p{Number}]+$/u;
            function Je({ communityId: e, initialHashtags: t, onSubmit: a }) {
                const [n, c] = o.useState(() => ""),
                    [l, r] = o.useState(() => t),
                    s = (0, T.I0)(),
                    m = o.useMemo(() => {
                        const e = [],
                            t = n.toLowerCase();
                        return l.map((e) => e.toLowerCase()).includes(t) && e.push(qe), (0 === n.length || n.length > 30) && e.push(We), l.length >= 10 && e.push(je), n.length && !Ge.test(n) && e.push(Ve), e;
                    }, [n, l]),
                    u = o.useMemo(() => t.length === l.length && t.every((e, t) => e === l[t]), [l, t]),
                    d = o.useCallback((e) => {
                        c(e.target.value);
                    }, []),
                    p = o.useCallback(() => c(""), []),
                    b = o.useCallback(
                        (e) => {
                            const t = [...l.slice(0, e), ...l.slice(e + 1)];
                            r(t), s((0, B.fz)({ action: { label: Fe, onAction: () => r(l) }, text: ze }));
                        },
                        [s, l],
                    ),
                    y = o.useCallback(
                        ({ newIndex: e, oldIndex: t }) => {
                            const a = (0, Ze.Z)(l, t, e);
                            r(a);
                        },
                        [l],
                    ),
                    E = o.useCallback(() => a(l), [l, a]),
                    g = o.useCallback(() => {
                        m.length ? s((0, B.fz)({ text: m.join("\n") })) : (r([...l, n]), c(""));
                    }, [m, s, l, n]);
                return o.createElement(Z.Z, { communityId: e, onSubmit: E, submitDisabled: u, title: Ae }, o.createElement(v.Z, { style: Ue.container }, o.createElement(he.Z, { Icon: fe.default, invalid: !!n.length && !!m.length, leftAligned: !0, onChange: d, onClear: p, onSubmitEditing: g, placeholder: Oe, value: n, withClearButton: !0 })), o.createElement(v.Z, { style: Ue.container }, o.createElement(i.ZP, { color: "gray700" }, Ne)), o.createElement(v.Z, { style: Ue.container }, o.createElement(He, { communityId: e, items: l, onDelete: b, onSortEnd: y, shouldCancelStart: Ce.Z, useDragHandle: !0 })));
            }
            const Ue = S.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 } })),
                Ye = b().ef199198,
                Qe = b().ee10aa5a,
                Ke = be.Z,
                Xe = pe.Z;
            function et(e) {
                const { communityId: t } = e,
                    a = (0, T.I0)(),
                    n = Ee()(Ke, { communityId: t }),
                    [c] = l()(Xe),
                    r = (n.communityResults.result?.communityHashtags?.items ?? []).map((e) => e.hashtag.replace(/#/g, "")),
                    i = o.useCallback(
                        (e) => {
                            c({
                                onCompleted: () => {
                                    a((0, B.fz)({ text: Ye }));
                                },
                                onError: () => {
                                    a((0, B.fz)({ text: Qe }));
                                },
                                variables: { communityId: t, hashtags: e.map((e) => `#${e}`) },
                            });
                        },
                        [t, a, c],
                    );
                return o.createElement(Je, (0, de.Z)({}, e, { initialHashtags: r, onSubmit: i }));
            }
            const tt = { context: "ads_categories_container" };
            function at(e) {
                return o.createElement(E.Z, null, o.createElement(ge.H, { errorConfig: tt }, o.createElement(et, e)));
            }
            var nt = a(500172),
                ot = a(290402),
                ct = a(301410),
                lt = a(693736),
                rt = a(277660),
                it = a.n(rt),
                st = a(615656),
                mt = a(281598),
                ut = (a(571372), a(407535));
            const dt = Object.freeze({ Open: "Open", Disabled: "RestrictedJoinRequestsDisabled", RequireAdminApproval: "RestrictedJoinRequestsRequireAdminApproval", RequireModeratorApproval: "RestrictedJoinRequestsRequireModeratorApproval" }),
                pt = ut.Z;
            var bt = a(948714),
                yt = a(990242),
                Et = a.n(yt);
            const gt = bt.Z;
            const ht = b().f713fbd2,
                ft = b().c5d1634e,
                Ct = b().b983f9e0,
                Zt = b().fc2a5c92,
                _t = b().a1c93d74,
                vt = lt.Z,
                xt = (e) => {
                    const { community: t } = e,
                        a = it()(vt, t),
                        { rest_id: n } = a,
                        c = (function (e) {
                            const t = Et()(gt, e);
                            return "Open" === t.join_policy ? { access: mt.IN.Open, invitesPolicy: mt.ZC.Member } : { access: mt.IN.Restricted, invitesPolicy: t.invites_policy };
                        })(a),
                        [i, s] = o.useState(),
                        m = (() => {
                            const [e, t] = l()(pt),
                                a = (0, T.I0)();
                            return o.useCallback(
                                function (n, o) {
                                    return t
                                        ? Promise.reject(new Error("Already updating membership settings"))
                                        : new Promise((t, c) => {
                                              const { access: l, invitesPolicy: r } = o;
                                              e({
                                                  variables: { communityId: n, invitesPolicy: r, joinPolicy: l === mt.IN.Open ? dt.Open : dt.RequireModeratorApproval },
                                                  onCompleted(e) {
                                                      const n = ((e) => {
                                                          if (e && "Community" === e.__typename) return { id_str: e.id_str, join_policy: e.join_policy, invites_policy: e.invites_policy };
                                                      })(e.community_membership_settings_put);
                                                      n && a(R.ZP.updateOne(n.id_str, n)), t();
                                                  },
                                                  onError: c,
                                              });
                                          });
                                },
                                [e, a, t],
                            );
                        })(),
                        u = (0, r.useHistory)(),
                        [d, p] = o.useState(),
                        y = (0, Q.n7)("COMMUNITY_SETTINGS_EDIT_MEMBERSHIP_TYPE"),
                        [E, g] = (0, mt.L4)(c),
                        h = o.useCallback(() => {
                            const e = y({
                                customErrorHandler: (e) => {
                                    const [t] = e.errors,
                                        a = t.code === st.ZP.GenericBadRequest && t.message ? t.message : _t;
                                    return p(a), [];
                                },
                            });
                            m(n, E)
                                .then(() => {
                                    u.goBack({ backLocation: `/i/communities/${n}/tools/settings` });
                                })
                                .catch(e);
                        }, [n, y, u, E, m]),
                        f = o.useCallback(() => {
                            const e = (function (e, t) {
                                if (e.access === mt.IN.Restricted && t.access === mt.IN.Open) return b().daedd9fa;
                            })(c, E);
                            e ? s(e) : h();
                        }, [c, E, h]),
                        C = o.useCallback(() => s(void 0), []),
                        _ = !(function (e, t) {
                            const a = e.access !== t.access,
                                n = e.access === mt.IN.Restricted && e.invitesPolicy !== t.invitesPolicy;
                            return a || n;
                        })(c, E),
                        x = d ? o.createElement(v.Z, { style: It.error }, o.createElement(W.Z, { Icon: V.default, headline: Zt, text: d, type: "danger" })) : void 0;
                    return o.createElement(Z.Z, { communityId: n, onSubmit: f, submitDisabled: _, title: ht }, x, o.createElement(mt.ZP, { setters: g, state: E }), i && o.createElement(k.Z, { confirmButtonLabel: ft, confirmButtonType: "primary", headline: Ct, onCancel: C, onConfirm: h, text: i }));
                },
                It = S.default.create((e) => ({ error: { marginVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                kt = nt.Z,
                St = (0, ct.z)(kt, { errorConfig: { context: "COMMUNITY_EDIT_MEMBERSHIP_SCREEN" } }),
                wt = ({ communityId: e }) => {
                    const t = { communityId: e };
                    return o.createElement(St, {
                        render: ({ data: e, error: t, fetchStatus: a, retry: n }) => {
                            const c = e?.community;
                            return o.createElement(ot.Z, { fetchStatus: a, onRequestRetry: n, render: () => (c ? o.createElement(xt, { community: c }) : null), retryable: !0 });
                        },
                        variables: t,
                    });
                },
                Tt = (0, K.Z)()
                    .propsFromActions(() => ({ editName: R.ZP.editName, createLocalApiErrorHandler: (0, Q.zr)("COMMUNITY_TOOLS_EDIT_NAME_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "edit_name" });
            var Rt = a(992426);
            const Bt = b().h3c0f1a2,
                Pt = b().fc2a5c92,
                Dt = b().cb5e6510;
            const Lt = S.default.create((e) => ({ error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                Mt = Tt(function (e) {
                    const { community: t, createLocalApiErrorHandler: a, editName: n, history: c } = e,
                        { id_str: l, name: r } = t,
                        [i, s] = o.useState(r),
                        [m, u] = o.useState(!1),
                        [d, p] = o.useState(void 0),
                        b = o.useCallback(() => {
                            const e = a({
                                customErrorHandler: (e) => {
                                    const [t] = e.errors,
                                        a = t.code === st.ZP.GenericBadRequest && t.message ? t.message : Dt;
                                    return p(a), u(!0), [];
                                },
                            });
                            n(l, { name: i })
                                .then(() => {
                                    c.goBack({ backLocation: `/i/communities/${l}/tools/settings` });
                                })
                                .catch(e);
                        }, [l, i, n, c, a]);
                    return o.createElement(
                        E.Z,
                        null,
                        o.createElement(
                            Z.Z,
                            { communityId: l, onSubmit: b, submitDisabled: m, title: Bt },
                            d ? o.createElement(v.Z, { style: Lt.error }, o.createElement(W.Z, { Icon: V.default, headline: Pt, text: d, type: "danger" })) : void 0,
                            o.createElement(Rt.x, {
                                autoFocus: !0,
                                communityName: i,
                                onChange: (e, t) => {
                                    s(e), u(t);
                                },
                            }),
                        ),
                    );
                }),
                $t = (0, K.Z)()
                    .propsFromActions(() => ({ editPurpose: R.ZP.editPurpose, createLocalApiErrorHandler: (0, Q.zr)("COMMUNITY_TOOLS_EDIT_PURPOSE_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "edit_purpose" });
            var Ht = a(739658);
            const At = b().a8955490,
                zt = b().fc2a5c92,
                Nt = b().ced2292a;
            const Ot = S.default.create((e) => ({ error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                Ft = $t(function (e) {
                    const { community: t, createLocalApiErrorHandler: a, editPurpose: n, history: c } = e,
                        { description: l, id_str: r } = t,
                        [i, s] = o.useState(l || ""),
                        [m, u] = o.useState(!1),
                        [d, p] = o.useState(void 0),
                        b = o.useCallback(() => {
                            const e = a({
                                customErrorHandler: (e) => {
                                    const [t] = e.errors,
                                        a = t.code === st.ZP.GenericBadRequest && t.message ? t.message : Nt;
                                    return p(a), u(!0), [];
                                },
                            });
                            n(r, { purpose: i })
                                .then(() => {
                                    c.goBack({ backLocation: `/i/communities/${r}/tools/settings` });
                                })
                                .catch(e);
                        }, [r, i, n, c, a]);
                    return o.createElement(
                        E.Z,
                        null,
                        o.createElement(
                            Z.Z,
                            { communityId: r, onSubmit: b, submitDisabled: m, title: At },
                            d ? o.createElement(v.Z, { style: Ot.error }, o.createElement(W.Z, { Icon: V.default, headline: zt, text: d, type: "danger" })) : void 0,
                            o.createElement(Ht.G, {
                                autoFocus: !0,
                                communityPurpose: i,
                                onChange: (e, t) => {
                                    s(e), u(t);
                                },
                            }),
                        ),
                    );
                }),
                qt = (0, K.Z)()
                    .propsFromActions(() => ({ editQuestion: R.ZP.editQuestion, createLocalApiErrorHandler: (0, Q.zr)("COMMUNITY_TOOLS_EDIT_Question_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "edit_question" });
            var jt = a(890605);
            const Wt = b().ba74c098,
                Vt = b().fc2a5c92,
                Gt = b().bd3e0420;
            const Jt = S.default.create((e) => ({ error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                Ut = qt(function (e) {
                    const { community: t, createLocalApiErrorHandler: a, editQuestion: n, history: c } = e,
                        { id_str: l, question: r } = t,
                        [i, s] = o.useState(r || ""),
                        { featureSwitches: m } = o.useContext(y.rC),
                        u = m.isTrue("c9s_question_editing_box_enabled"),
                        [d, p] = o.useState(!1),
                        [b, g] = o.useState(void 0),
                        h = o.useCallback(() => {
                            const e = a({
                                customErrorHandler: (e) => {
                                    const [t] = e.errors,
                                        a = t.code === st.ZP.GenericBadRequest && t.message ? t.message : Gt;
                                    return g(a), p(!0), [];
                                },
                            });
                            n(l, { question: i })
                                .then(() => {
                                    c.goBack({ backLocation: `/i/communities/${l}/tools/settings` });
                                })
                                .catch(e);
                        }, [l, i, n, c, a]);
                    return o.createElement(
                        E.Z,
                        null,
                        u &&
                            o.createElement(
                                Z.Z,
                                { communityId: l, onSubmit: h, submitDisabled: d, title: Wt },
                                b ? o.createElement(v.Z, { style: Jt.error }, o.createElement(W.Z, { Icon: V.default, headline: Vt, text: b, type: "danger" })) : void 0,
                                o.createElement(jt.W, {
                                    communityQuestion: i,
                                    onChange: (e, t) => {
                                        s(e), p(t);
                                    },
                                }),
                            ),
                    );
                });
            var Yt = a(916183),
                Qt = a(956272);
            const Kt = b().d96cf7ce,
                Xt = { label: Kt },
                ea = b().ab8089ea,
                ta = { label: ea },
                aa = o.createElement(Ie.default, null),
                na = o.createElement(ke.default, null),
                oa = (0, _e.JV)(function () {
                    return o.createElement(ve.ZP, { "aria-label": ea, hoverLabel: ta, icon: aa, type: "primaryText" });
                });
            function ca({ communityId: e, onDelete: t, position: a, searchtag: n }) {
                const c = o.useCallback(
                        (e) => {
                            e.preventDefault(), t(a);
                        },
                        [a, t],
                    ),
                    l = `${n}`;
                return o.createElement(xe.Z, { "aria-label": l, style: la.container }, o.createElement(v.Z, { style: la.textContainer }, o.createElement(i.ZP, { weight: "bold" }, l)), o.createElement(ve.ZP, { "aria-label": Kt, hoverLabel: Xt, icon: na, onPress: c, style: la.deleteButton, type: "primaryText" }), o.createElement(oa, null));
            }
            const la = S.default.create((e) => ({ container: { alignItems: "center", display: "flex", flexDirection: "row", padding: e.spaces.space16 }, textContainer: { flexGrow: 1 }, deleteButton: { marginEnd: e.spaces.space8 } })),
                ra = (0, _e.W8)((e) => o.createElement(ca, e)),
                ia = (0, _e.JN)(({ communityId: e, items: t, onDelete: a }) =>
                    o.createElement(
                        v.Z,
                        null,
                        t.map((t, n) => o.createElement(ra, { communityId: e, index: n, key: t, onDelete: a, position: n, searchtag: t })),
                    ),
                ),
                sa = b().b57baa7a,
                ma = b().f8caab7a,
                ua = b().f35a667a,
                da = b().b057d5c6,
                pa = b().cc961258,
                ba = b().df4aca88,
                ya = b().ie58fa58,
                Ea = /^[\p{Letter}\p{Mark}\p{Number}]+$/u;
            function ga({ communityId: e, initialSearchtags: t, onSubmit: a }) {
                const [n, c] = o.useState(() => ""),
                    [l, r] = o.useState(() => t),
                    s = (0, T.I0)(),
                    m = o.useMemo(() => {
                        const e = [],
                            t = n.toLowerCase();
                        return l.map((e) => e.toLowerCase()).includes(t) && e.push(da), (0 === n.length || n.length > 30) && e.push(ba), l.length >= 10 && e.push(pa), n.length && !Ea.test(n) && e.push(ya), e;
                    }, [n, l]),
                    u = o.useMemo(() => t.length === l.length && t.every((e, t) => e === l[t]), [l, t]),
                    d = o.useCallback((e) => {
                        c(e.target.value);
                    }, []),
                    p = o.useCallback(() => c(""), []),
                    b = o.useCallback(
                        (e) => {
                            const t = [...l.slice(0, e), ...l.slice(e + 1)];
                            r(t);
                        },
                        [l],
                    ),
                    y = o.useCallback(
                        ({ newIndex: e, oldIndex: t }) => {
                            const a = (0, Ze.Z)(l, t, e);
                            r(a);
                        },
                        [l],
                    ),
                    E = o.useCallback(() => a(l), [l, a]),
                    g = o.useCallback(() => {
                        m.length ? s((0, B.fz)({ text: m.join("\n") })) : (r([...l, n]), c(""));
                    }, [m, s, l, n]);
                return o.createElement(Z.Z, { communityId: e, onSubmit: E, submitDisabled: u, title: sa }, o.createElement(v.Z, { style: ha.container }, o.createElement(he.Z, { Icon: Qt.default, invalid: !!n.length && !!m.length, leftAligned: !0, onChange: d, onClear: p, onSubmitEditing: g, placeholder: ua, value: n, withClearButton: !0 })), o.createElement(v.Z, { style: ha.container }, o.createElement(i.ZP, { color: "gray700" }, ma)), o.createElement(v.Z, { style: ha.container }, o.createElement(ia, { communityId: e, items: l, onDelete: b, onSortEnd: y, useDragHandle: !0 })));
            }
            const ha = S.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 } })),
                fa = b().ef199198,
                Ca = b().ee10aa5a,
                Za = Yt.Z;
            function _a(e) {
                const { community: t } = e,
                    { id_str: a, search_tags: n } = t,
                    c = (0, T.I0)(),
                    [r] = l()(Za),
                    i = o.useCallback(
                        (e) => {
                            r({
                                onCompleted: () => {
                                    c((0, B.fz)({ text: fa }));
                                },
                                onError: () => {
                                    c((0, B.fz)({ text: Ca }));
                                },
                                variables: { communityId: a, searchtags: e.map((e) => `${e}`) },
                            });
                        },
                        [a, c, r],
                    );
                return o.createElement(ga, { communityId: a, initialSearchtags: n || [], onSubmit: i });
            }
            const va = { context: "ads_categories_container" };
            function xa(e) {
                return o.createElement(E.Z, null, o.createElement(ge.H, { errorConfig: va }, o.createElement(_a, e)));
            }
            var Ia = a(570834),
                ka = a(492480),
                Sa = a(174326),
                wa = a(973014),
                Ta = a(535338);
            const Ra = b().hd176a01,
                Ba = b().i39a43cc,
                Pa = b().e81b196e,
                Da = b().c1f97ad4,
                La = b().g908eb0c,
                Ma = ka.Z,
                $a = Ia.Z;
            function Ha(e) {
                const { community: t } = e,
                    { id_str: a, primary_community_topic: n } = t,
                    c = (0, T.I0)(),
                    [r] = l()($a),
                    { communityTopicResults: m } = (0, Ta.p)(Ma, {}),
                    [d, p] = o.useState(() => n?.topic_id),
                    b = (e, t) => {
                        r({
                            onCompleted: () => {
                                c((0, B.RS)()), c((0, B.fz)({ text: t ? Ra({ newTopicName: t }) : Ba }));
                            },
                            onError: () => {
                                c((0, B.RS)()), c((0, B.fz)({ text: Pa }));
                            },
                            variables: { communityId: a, topicId: e },
                        });
                    },
                    y = (e, t, a) => {
                        d === t ? (p(null), b(void 0, void 0)) : (p(t), b(t, a));
                    };
                return o.createElement(
                    Z.Z,
                    { communityId: a, title: Da },
                    o.createElement(v.Z, { style: Na.container }, o.createElement(i.ZP, { color: "gray700" }, La)),
                    m?.community_topics.map((e) => o.createElement(v.Z, { key: `View-${e.topic_id}`, style: Na.container }, o.createElement(v.Z, null, o.createElement(s.Z, { key: `Header-${e.topic_id}`, text: e.topic_name }), o.createElement(Sa.Z, { childrenStyle: Na.pill, key: `Carousel-${e.topic_id}`, style: Na.container }, [o.createElement(wa.Z, { compact: !0, key: `Topic-upper-${e.topic_id}`, mode: e.topic_id === d ? "active" : void 0, onClick: (t) => y(0, e.topic_id, e.topic_name), selected: e.topic_id === d, text: e.topic_name })].concat(e.subtopics?.map((t) => o.createElement(wa.Z, { compact: !0, key: `Topic-${e.topic_id}-${t.topic_id}`, mode: t.topic_id === d ? "active" : void 0, onClick: (e) => y(0, t.topic_id, t.topic_name), selected: t.topic_id === d, text: t.topic_name })))), o.createElement(u.Z, { borderColor: "nestedBorderColor" })))),
                );
            }
            const Aa = { context: "ads_categories_container" };
            function za(e) {
                return o.createElement(E.Z, null, o.createElement(ge.H, { errorConfig: Aa }, o.createElement(Ha, e)));
            }
            const Na = S.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 }, pill: { margin: e.spaces.space2 } })),
                Oa = b().f5e0332a,
                Fa = b().d4e220b4,
                qa = b().e983404a,
                ja = b().j8af8eaa,
                Wa = b().d5f01116,
                Va = b().gcddfba8,
                Ga = b().c2ff3c9e,
                Ja = b().bb081ea2,
                Ua = b().a2a3824a,
                Ya = n.Z,
                Qa = b().f4a98e9e,
                Ka = b().f713fbd2,
                Xa = b().a43bed28,
                en = b().fd00a76a,
                tn = b().ce0523a8,
                an = ({ children: e }) => o.createElement(i.ZP, { color: "gray700", size: "subtext2" }, e),
                nn = (e) => {
                    const { featureSwitches: t } = o.useContext(y.rC),
                        a = t.isTrue("c9s_community_hashtags_enabled"),
                        n = t.isTrue("c9s_community_searchtags_enabled"),
                        c = t.isTrue("communities_adult_content_setting_enabled"),
                        i = t.isTrue("communities_topics_enabled"),
                        p = t.isTrue("c9s_question_editing_box_enabled"),
                        { community: b, history: g, match: h } = e,
                        { description: C, hasCustomMedia: _, id_str: v, is_nsfw: x, join_policy: I, localMediaId: k, media: S, name: w, primary_community_topic: T, question: R, search_tags: B } = b,
                        P = h.url,
                        D = o.useMemo(() => ("Open" === I ? en : tn), [I]),
                        [L] = l()(Ya),
                        [M, $] = o.useState(x || !1),
                        H = o.useCallback(
                            (e, t) => {
                                $(t),
                                    L({
                                        onCompleted: () => {
                                            window.location.reload();
                                        },
                                        onError: () => {},
                                        variables: { communityId: v, adultContentSetting: t },
                                    });
                            },
                            [v, L],
                        );
                    return o.createElement(
                        r.Switch,
                        null,
                        o.createElement(r.Route, { exact: !0, path: `${P}/name` }, o.createElement(Mt, { community: b, history: g })),
                        o.createElement(r.Route, { exact: !0, path: `${P}/purpose` }, o.createElement(Ft, { community: b, history: g })),
                        o.createElement(r.Route, { exact: !0, path: `${P}/question` }, o.createElement(Ut, { community: b, history: g })),
                        i && o.createElement(r.Route, { exact: !0, path: `${P}/topic` }, o.createElement(za, { community: b })),
                        n && o.createElement(r.Route, { exact: !0, path: `${P}/searchtags` }, o.createElement(xa, { community: b })),
                        a && o.createElement(r.Route, { exact: !0, path: `${P}/hashtags` }, o.createElement(at, { communityId: v })),
                        o.createElement(r.Route, { exact: !0, path: `${P}/membership` }, o.createElement(wt, { communityId: v })),
                        o.createElement(r.Route, { exact: !0, path: `${P}/` }, o.createElement(E.Z, null, o.createElement(Z.Z, { communityId: v, screenType: "primaryDetail", title: Ja }, o.createElement(ue, { communityId: v, hasCustomMedia: _, localMediaId: k, media: S }), o.createElement(s.Z, { text: Qa }), o.createElement(m.Z, { description: o.createElement(an, null, w), label: Fa, link: `${P}/name` }), o.createElement(m.Z, { description: C ? o.createElement(an, null, C) : void 0, label: Wa, link: `${P}/purpose` }), p && o.createElement(m.Z, { description: R ? o.createElement(an, null, R) : void 0, label: Va, link: `${P}/question` }), i && o.createElement(m.Z, { description: T ? o.createElement(an, null, T.topic_name) : void 0, label: Ua, link: `${P}/topic` }), n && o.createElement(m.Z, { description: B ? o.createElement(an, null, B.join(", ")) : void 0, label: Ga, link: `${P}/searchtags` }), a && o.createElement(m.Z, { label: qa, link: `${P}/hashtags` }), o.createElement(u.Z, null), o.createElement(s.Z, { text: Ka }), o.createElement(m.Z, { description: o.createElement(an, null, D), label: ja, link: `${P}/membership` }), c && o.createElement(d.Z, { checked: M, helpText: Xa, label: Oa, name: Oa, onChange: H }), o.createElement(u.Z, null), o.createElement(F, { community: b })))),
                        o.createElement(r.Route, null, o.createElement(f.Z, { to: `${P}/` })),
                    );
                },
                on = (0, C.ys)((0, h.Z)(nn, { page: "communities", section: "settings" }), { allowRoles: [g.WW.Admin] });
        },
        590636: (e, t, a) => {
            a.r(t), a.d(t, { CommunitySpamSettingsRouter: () => Pe, default: () => De });
            var n = a(514737),
                o = a(181810),
                c = a(496828),
                l = a(202784),
                r = (a(585488), a(351743)),
                i = a.n(r),
                s = a(107267),
                m = a(731708),
                u = a(844685),
                d = a(101890),
                p = a(420412),
                b = a(779610),
                y = a(954110),
                E = a(111677),
                g = a.n(E),
                h = a(295223),
                f = a(443781),
                C = a(652904),
                Z = a(870358),
                _ = a(725516),
                v = a(535338),
                x = a(615027),
                I = a(82152),
                k = a(485458),
                S = a(58690),
                w = a(699489),
                T = a(832271),
                R = a(736063),
                B = a(125363),
                P = a(601576),
                D = (a(136728), a(325686)),
                L = a(371344),
                M = a(392237),
                $ = a(956272),
                H = a(445250),
                A = a(716042),
                z = a(154003),
                N = a(952428),
                O = a(678773),
                F = a(565421);
            const q = g().d96cf7ce,
                j = { label: q },
                W = g().ab8089ea,
                V = { label: W },
                G = l.createElement(O.default, null),
                J = l.createElement(F.default, null),
                U = (0, A.JV)(function () {
                    return l.createElement(z.ZP, { "aria-label": W, hoverLabel: V, icon: G, type: "primaryText" });
                });
            function Y({ communityId: e, keyword: t, onDelete: a, position: n }) {
                const o = l.useCallback(
                        (e) => {
                            e.preventDefault(), a(n);
                        },
                        [n, a],
                    ),
                    c = `${t}`;
                return l.createElement(N.Z, { "aria-label": c, style: Q.container }, l.createElement(D.Z, { style: Q.textContainer }, l.createElement(m.ZP, { weight: "bold" }, c)), l.createElement(z.ZP, { "aria-label": q, hoverLabel: j, icon: J, onPress: o, style: Q.deleteButton, type: "primaryText" }), l.createElement(U, null));
            }
            const Q = M.default.create((e) => ({ container: { alignItems: "center", display: "flex", flexDirection: "row", padding: e.spaces.space16 }, textContainer: { flexGrow: 1 }, deleteButton: { marginEnd: e.spaces.space8 } })),
                K = (0, A.W8)((e) => l.createElement(Y, e)),
                X = (0, A.JN)(({ communityId: e, items: t, onDelete: a }) =>
                    l.createElement(
                        D.Z,
                        null,
                        t.map((t, n) => l.createElement(K, { communityId: e, index: n, key: t, keyword: t, onDelete: a, position: n })),
                    ),
                ),
                ee = g().j715cb38,
                te = g().b32ebbe8,
                ae = g().acde5366,
                ne = g().a5f66c34,
                oe = g().ea637914,
                ce = g().fede6d3c,
                le = g().cc06e200,
                re = /[ @\n]/;
            function ie({ communityId: e, initialKeywords: t, onSubmit: a }) {
                const [n, o] = l.useState(() => ""),
                    [c, r] = l.useState(() => t),
                    i = (0, B.I0)(),
                    s = l.useMemo(() => {
                        const e = [],
                            t = n.toLowerCase();
                        return c.map((e) => e.toLowerCase()).includes(t) && e.push(ne), (0 === n.length || n.length > 30) && e.push(ce), c.length >= 20 && e.push(oe), n.length && re.test(n) && e.push(le), e;
                    }, [n, c]),
                    u = l.useMemo(() => t.length === c.length && t.every((e, t) => e === c[t]), [c, t]),
                    d = l.useCallback((e) => {
                        o(e.target.value);
                    }, []),
                    p = l.useCallback(() => o(""), []),
                    b = l.useCallback(
                        (e) => {
                            const t = [...c.slice(0, e), ...c.slice(e + 1)];
                            r(t);
                        },
                        [c],
                    ),
                    y = l.useCallback(
                        ({ newIndex: e, oldIndex: t }) => {
                            const a = (0, H.Z)(c, t, e);
                            r(a);
                        },
                        [c],
                    ),
                    E = l.useCallback(() => a(c), [c, a]),
                    g = l.useCallback(() => {
                        s.length ? i((0, P.fz)({ text: s.join("\n") })) : (r([...c, n]), o(""));
                    }, [s, i, c, n]);
                return l.createElement(k.Z, { communityId: e, onSubmit: E, submitDisabled: u, title: ee }, l.createElement(D.Z, { style: se.container }, l.createElement(L.Z, { Icon: $.default, invalid: !!n.length && !!s.length, leftAligned: !0, onChange: d, onClear: p, onSubmitEditing: g, placeholder: ae, value: n, withClearButton: !0 })), l.createElement(D.Z, { style: se.container }, l.createElement(m.ZP, { color: "gray700" }, te)), l.createElement(D.Z, { style: se.container }, l.createElement(X, { communityId: e, items: c, onDelete: b, onSortEnd: y, useDragHandle: !0 })));
            }
            const se = M.default.create((e) => ({ container: { marginHorizontal: e.spaces.space16, marginBottom: e.spaces.space16 } })),
                me = g().ef199198,
                ue = g().ee10aa5a,
                de = w.Z,
                pe = S.Z;
            function be(e) {
                const { community: t } = e,
                    { id_str: a } = t,
                    n = (0, B.I0)(),
                    { communityResults: o } = (0, v.p)(de, { communityId: a }),
                    c = o.result?.automoderation_settings?.banned_keywords ?? [],
                    [r] = i()(pe),
                    s = l.useCallback(
                        (e) => {
                            r({
                                onCompleted: () => {
                                    n((0, P.fz)({ text: me }));
                                },
                                onError: () => {
                                    n((0, P.fz)({ text: ue }));
                                },
                                variables: { communityId: a, automoderationKeywordsSettingType: T.D.BannedKeywords, keywords: e.map((e) => `${e}`) },
                            });
                        },
                        [a, n, r],
                    );
                return l.createElement(ie, { communityId: a, initialKeywords: c, onSubmit: s });
            }
            const ye = { context: "ads_categories_container" };
            function Ee(e) {
                return l.createElement(C.Z, null, l.createElement(R.H, { errorConfig: ye }, l.createElement(be, e)));
            }
            const ge = g().f18a8ca0,
                he = g().c8bd5d42,
                fe = g().gfeb40a2,
                Ce = g().h766865c,
                Ze = g().fd1f413a,
                _e = g().b1ba5fb4,
                ve = g().ee195f28,
                xe = g().cf276a82,
                Ie = g().a8c4c3fe,
                ke = g().j8de95ec,
                Se = "Medium",
                we = c.Z,
                Te = o.Z,
                Re = n.Z,
                Be = ({ children: e }) => l.createElement(m.ZP, { color: "gray700", size: "subtext2" }, e),
                Pe = (e) => {
                    const { featureSwitches: t } = l.useContext(f.rC),
                        a = t.isTrue("communities_auto_report_setting_enabled"),
                        { community: n, match: o } = e,
                        c = o.url,
                        { id_str: r } = n,
                        { communityResults: m } = (0, v.p)(we, { communityId: r }),
                        E = m.result?.automoderation_settings,
                        Z = m.result?.spam_filter_setting,
                        _ = Z || "Medium",
                        I = [
                            { label: g().ie873142, value: "High" },
                            { label: g().ca1180a0, value: "Medium" },
                            { label: g().a977afa2, value: "Low" },
                        ],
                        [S] = i()(Te),
                        [w, T] = l.useState(_),
                        R = l.useCallback(
                            (e, t) => {
                                T(t);
                                S({
                                    onCompleted: () => {
                                        window.location.reload();
                                    },
                                    onError: () => {},
                                    variables: { communityId: r, communitySpamFilterSetting: "High" === t ? "High" : "Medium" === t ? Se : "Low" === t ? "Low" : Se },
                                });
                            },
                            [r, S],
                        ),
                        [B] = i()(Re),
                        [P, D] = l.useState(E?.auto_spam_detector_enabled || !1),
                        [L, M] = l.useState(E?.hide_until_review_enabled || !1),
                        $ = l.useCallback(
                            (e, t) => {
                                D(t),
                                    B({
                                        onCompleted: () => {
                                            window.location.reload();
                                        },
                                        onError: () => {},
                                        variables: { communityId: r, automoderationBooleanSettingType: h.n.AutoSpamDetectorEnabled, enabled: t },
                                    });
                            },
                            [r, B],
                        ),
                        H = l.useCallback(
                            (e, t) => {
                                M(t),
                                    B({
                                        onCompleted: () => {
                                            window.location.reload();
                                        },
                                        onError: () => {},
                                        variables: { communityId: r, automoderationBooleanSettingType: h.n.HideUntilReviewEnabled, enabled: t },
                                    });
                            },
                            [r, B],
                        );
                    return l.createElement(s.Switch, null, l.createElement(s.Route, { exact: !0, path: `${c}/keywords` }, l.createElement(Ee, { community: n })), l.createElement(s.Route, { exact: !0, path: `${c}/` }, l.createElement(C.Z, null, l.createElement(k.Z, { communityId: r, screenType: "primaryDetail", title: ge }, l.createElement(u.Z, { subtext: fe, text: he }), l.createElement(d.Z, { name: he, onChange: R, options: I, value: w }), l.createElement(p.Z, null), a && l.createElement(l.Fragment, null, l.createElement(u.Z, { subtext: Ze, text: Ce }), l.createElement(b.Z, { description: l.createElement(Be, null, ke), label: ve, link: `${c}/keywords` }), l.createElement(y.Z, { checked: P, helpText: Ie, label: _e, name: _e, onChange: $ }), l.createElement(y.Z, { checked: L, label: xe, name: xe, onChange: H }))))), l.createElement(s.Route, null, l.createElement(x.Z, { to: `${c}/` })));
                },
                De = (0, I.ys)((0, _.Z)(Pe, { page: "communities", section: "spam_settings" }), { allowRoles: [Z.WW.Admin] });
        },
        485458: (e, t, a) => {
            a.d(t, { Z: () => b });
            var n = a(202784),
                o = a(325686),
                c = a(107267),
                l = a(108362),
                r = a(420412),
                i = a(154003),
                s = a(392237),
                m = a(111677),
                u = a.n(m),
                d = a(496364);
            const p = u().i2209530;
            function b(e) {
                const { children: t, communityId: a, onSubmit: s, rightControl: m, screenType: u, submitDisabled: b, subtitle: E, title: g, withBottomBorder: h, withDetailOpen: f } = e,
                    C = (0, c.useHistory)(),
                    Z = "secondaryRoot" === u,
                    _ = `/i/communities/${a}`,
                    v = Z ? _ : `${_}/tools`,
                    x = n.useCallback(() => {
                        Z ? C.replace(v) : C.goBack({ backLocation: v });
                    }, [v, C, Z]);
                return n.createElement(d.Z, { backLocation: v, onBackClick: x, rightControl: m, screenType: u, showSubtitleOnWideDetail: !1, subtitle: E, title: g, withBottomBorder: h, withDetailOpen: f }, n.createElement(l.Z, { style: y.contentRoot }, n.createElement(o.Z, { style: y.chilrenRoot }, t), s ? n.createElement(n.Fragment, null, n.createElement(r.Z, null), n.createElement(l.Z, { style: y.buttonContainer }, n.createElement(i.ZP, { disabled: b, onPress: s, style: y.button, type: "brandFilled" }, p))) : null));
            }
            const y = s.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start", marginBottom: `calc(${e.spaces.space64} + ${s.default.iPhoneOffsetBottom})` }, chilrenRoot: { paddingBottom: e.spaces.space12 }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", paddingVertical: e.spaces.space12 }, button: { marginHorizontal: e.spaces.space12 } }));
        },
        947185: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(814551),
                o = a(202784),
                c = (a(585488), a(277660)),
                l = a.n(c),
                r = a(310088),
                i = a(392237),
                s = a(111677),
                m = a.n(s),
                u = a(705865),
                d = a(741049),
                p = a(243497),
                b = a(917164);
            const y = m().gfccba44,
                E = m().h6beb5fb,
                g = m().dde5f323,
                h = n.Z;
            function f(e) {
                const { community: t } = e,
                    a = l()(h, t),
                    n = (0, b.B)(a),
                    c = (0, p.i)(a),
                    { communityId: i } = a,
                    s = o.useCallback(() => (n > 0 ? o.createElement(r.Z, { count: n, standalone: !0, truncatedCountFormatter: E, unreadCountLabel: g, withBorder: !1 }) : null), [n]);
                return c ? o.createElement(d.Z, { label: y, link: `/i/communities/${i}/moderation/member_requests`, renderRightContent: s, thumbnail: _ }) : null;
            }
            const C = o.memo(f),
                Z = i.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } })),
                _ = o.createElement(u.default, { style: Z.thumbnail });
        },
        431433: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(668214),
                o = a(491963);
            const c = (0, n.Z)()
                .propsFromActions(() => ({ updateModeratorRole: o.ZP.updateRole }))
                .withAnalytics({ page: "communities", section: "tools" });
        },
        239772: (e, t, a) => {
            a.r(t), a.d(t, { EmptyToolsDetailScreen: () => p, default: () => b });
            var n = a(202784),
                o = a(108362),
                c = a(457311),
                l = a(392237),
                r = a(111677),
                i = a.n(r),
                s = a(870358),
                m = a(82152);
            const u = i().c2117be6,
                d = i().c2c4dad4;
            function p(e) {
                return n.createElement(o.Z, { style: y.root }, n.createElement(c.Z, { header: u, message: d }));
            }
            const b = (0, m.ys)(p, { allowRoles: [s.WW.Admin, s.WW.Moderator] }),
                y = l.default.create((e) => ({ root: { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: e.colors.cellBackground } }));
        },
        350074: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            const n = a(644631).ZP;
        },
        169263: (e, t, a) => {
            a.d(t, { Z: () => $ });
            var n = a(202784),
                o = a(443781),
                c = a(507102),
                l = a(752389),
                r = (a(585488), a(277660)),
                i = a.n(r),
                s = a(107267),
                m = a(174326),
                u = a(731708),
                d = a(661810),
                p = a(392237),
                b = a(791632);
            const y = l.Z,
                E = n.memo(({ community: e, communityId: t }) => {
                    const a = i()(y, e),
                        { items: o } = a.trending_hashtags_slice,
                        c = (0, s.useHistory)();
                    return o.length > 0
                        ? n.createElement(
                              n.Fragment,
                              null,
                              n.createElement(
                                  m.Z,
                                  { style: (0, b.HD)(c) ? g.carouselCompact : g.carousel },
                                  o.map((e) => n.createElement(u.ZP, { color: "blue500", key: e.hashtag, link: { pathname: `/i/communities/${t}/hashtag/${e.hashtag.replace(/#/g, "")}` }, size: "body", style: g.text, weight: "medium" }, e.hashtag)),
                              ),
                              n.createElement(d.Z, null),
                          )
                        : null;
                }),
                g = p.default.create((e) => ({ carousel: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space20 }, carouselCompact: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space12 }, text: { paddingHorizontal: e.spaces.space8 } })),
                h = E;
            var f = a(325686),
                C = a(439592),
                Z = a(530525),
                _ = a(111677),
                v = a.n(_),
                x = a(25704),
                I = a(175856);
            const k = a.p + "hashtag_education_image_web2.97bad87a.png",
                S = v().c22e8902,
                w = v().a3466e1c,
                T = v().a524bb7e,
                R = C.Z.exact(2.5),
                B = () => n.createElement(f.Z, { style: D.image }, n.createElement(Z.Z, { "aria-label": "", aspectMode: R, image: k })),
                P = () => n.createElement(x.Z, { actionLabel: S, flag: I.JT, graphic: B, graphicDisplayMode: "illustrationFullWidth", headline: w, subtext: T, withCloseButton: !1 }),
                D = p.default.create((e) => ({ image: { width: "100%" } })),
                L = n.memo(P),
                M = (e) => {
                    const { community: t, communityId: a, timelineModule: l } = e,
                        { featureSwitches: r } = n.useContext(o.rC),
                        i = r.isTrue("c9s_community_hashtags_carousel_enabled");
                    return n.createElement(n.Fragment, null, n.createElement(L, null), i && n.createElement(h, { community: t, communityId: a }), n.createElement(c.Z, { module: l, onAtTop: e.onAtTop }));
                },
                $ = n.memo(M);
        },
        180796: (e, t, a) => {
            a.d(t, { t: () => n });
            const n = Object.freeze({ ForYou: "ranked", Latest: "latest", Media: "media" });
        },
        158569: (e, t, a) => {
            e.exports = a.p + "spotlight_star.876205ca.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-1aa9970f.b29f38ca.js.map
