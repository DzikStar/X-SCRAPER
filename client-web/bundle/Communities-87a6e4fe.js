"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-87a6e4fe"],
    {
        634792: (e, t, a) => {
            a.r(t), a.d(t, { AddRuleScreen: () => L, default: () => T });
            var r = a(202784),
                n = a(154003),
                l = a(190286),
                o = a(674132),
                c = a.n(o),
                s = a(615656),
                i = a(980407),
                u = a(443781),
                d = a(870358),
                m = a(82152),
                p = a(757897),
                C = a(726314),
                h = a(71620),
                g = a(668214),
                E = a(491963),
                y = a(175856);
            const b = (e, t) => (0, y.t5)(e, y.PG),
                f = (0, g.Z)()
                    .propsFromState(() => ({ shouldShowRuleInformEducation: b }))
                    .propsFromActions(() => ({ addRuleInformEducationFlag: () => (0, y.pj)(y.PG), createRule: E.ZP.createRule, createLocalApiErrorHandler: (0, h.zr)("COMMUNITY_TOOLS_ADD_RULE_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "add_rule" }),
                S = c().j560c8ea,
                R = c().i2209530,
                Z = c().gaa3239a,
                v = c().a67445d6,
                _ = c().fcbe0993,
                k = c().j24c37b2,
                x = 10;
            function L(e) {
                const { featureSwitches: t } = r.useContext(u.rC),
                    a = t.getNumberValue("c9s_max_rule_count", x),
                    { addRuleInformEducationFlag: o, community: c, createLocalApiErrorHandler: d, createRule: m, history: h, shouldShowRuleInformEducation: g } = e,
                    { id_str: E, rules: y } = c,
                    [b, f] = r.useState(""),
                    [L, T] = r.useState(""),
                    [P, w] = r.useState(!1),
                    [I, A] = r.useState(!1),
                    [B, F] = r.useState(""),
                    [z, $] = r.useState(!1),
                    H = r.useCallback(
                        (e) => {
                            const { description: t, name: a, valid: r } = e;
                            F(""), f(a), T(t), w(r);
                        },
                        [f, T, w],
                    ),
                    O = r.useCallback(() => {
                        A(!0);
                        const e = d({
                            customErrorHandler: (e) => {
                                const [t] = e.errors,
                                    a = t.code === s.ZP.GenericBadRequest && t.message ? t.message : Z;
                                return F(a), w(!1), [];
                            },
                        });
                        m(E, { name: b, description: L })
                            .then(() => {
                                h.goBack({ backLocation: `/i/communities/${E}/tools/rules` });
                            })
                            .catch(e);
                    }, [E, b, L, m, h, d]),
                    N = r.useCallback(() => {
                        g ? $(!0) : O();
                    }, [O, g]),
                    D = r.createElement(n.ZP, { disabled: !P, onPress: N, size: "small", type: "brandFilled" }, R),
                    W = y.length >= a,
                    M = r.createElement(l.Z, {
                        confirmButtonLabel: k,
                        headline: v,
                        onConfirm: () => {
                            h.goBack({ backLocation: `/i/communities/${E}/tools/rules` });
                        },
                        text: _({ maxRuleCount: a }),
                        withCancelButton: !1,
                    }),
                    G = z
                        ? r.createElement(C.a, {
                              onCancel: () => {
                                  $(!1);
                              },
                              onConfirm: () => {
                                  o(), O(), $(!1);
                              },
                          })
                        : void 0;
                return W && !I ? M : r.createElement(i.Z, { history: h, rightControl: D, title: S }, r.createElement(p.z, { description: "", errorText: B, name: "", onChange: H }), G);
            }
            const T = (0, m.ys)(f(L), { allowRoles: [d.WW.Admin] });
        },
        890569: (e, t, a) => {
            a.r(t), a.d(t, { EditRuleScreen: () => F, default: () => z });
            var r = a(202784),
                n = a(325686),
                l = a(154003),
                o = a(242454),
                c = a(834324),
                s = a(190286),
                i = a(392237),
                u = a(674132),
                d = a.n(u),
                m = a(615656),
                p = a(980407),
                C = a(870358),
                h = a(615027),
                g = a(82152),
                E = a(757897),
                y = a(726314),
                b = a(71620),
                f = a(668214),
                S = a(491963),
                R = a(175856),
                Z = a(182846);
            const v = (e, t) => (0, R.t5)(e, R.PG),
                _ = (0, f.Z)()
                    .propsFromState(() => ({ ruleId: Z.sq, rule: Z.Dt, shouldShowRuleInformEducation: v }))
                    .propsFromActions(() => ({ addRuleInformEducationFlag: () => (0, R.pj)(R.PG), editRule: S.ZP.editRule, removeRule: S.ZP.removeRule, createLocalApiErrorHandler: (0, b.zr)("COMMUNITY_TOOLS_EDIT_RULE_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "edit_rule" }),
                k = d().h99020e0,
                x = d().i2209530,
                L = d().a1c93d74,
                T = d().f74a5adc,
                P = d().fbb0ed92,
                w = d().gea6cc1a,
                I = d().hed35472,
                A = d().c8677446,
                B = d().c3a0d44e;
            function F(e) {
                const { addRuleInformEducationFlag: t, community: a, createLocalApiErrorHandler: i, editRule: u, history: d, removeRule: C, rule: g, ruleId: b, shouldShowRuleInformEducation: f } = e,
                    { id_str: S, rules: R } = a,
                    [Z, v] = r.useState(""),
                    [_, F] = r.useState(""),
                    [z, H] = r.useState(!1),
                    [O, N] = r.useState(""),
                    [D, W] = r.useState(!1),
                    [M, G] = r.useState(!1),
                    j = r.useCallback(
                        (e) => {
                            const { description: t, name: a, valid: r } = e;
                            v(a), F(t), H(r);
                        },
                        [v, F, H],
                    ),
                    U = r.useCallback(() => {
                        const e = i({
                            customErrorHandler: (e) => {
                                const [t] = e.errors,
                                    a = t.code === m.ZP.GenericBadRequest && t.message ? t.message : L;
                                return N(a), H(!1), [];
                            },
                        });
                        "string" == typeof b &&
                            u(S, { ruleId: b, name: Z, description: _ })
                                .then(() => {
                                    d.goBack({ backLocation: `/i/communities/${S}/tools/rules` });
                                })
                                .catch(e);
                    }, [S, Z, _, b, u, d, i]),
                    q = r.useCallback(() => {
                        const e = i({
                            customErrorHandler: (e) => {
                                const [t] = e.errors,
                                    a = t.code === m.ZP.GenericBadRequest && t.message ? t.message : L;
                                return N(a), W(!1), [];
                            },
                        });
                        "string" == typeof b &&
                            C(S, { ruleId: b })
                                .then(() => {
                                    d.goBack({ backLocation: `/i/communities/${S}/tools/rules` });
                                })
                                .catch(e);
                    }, [S, b, C, d, i]);
                if (!b || !g) return r.createElement(h.Z, { to: `/i/communities/${S}/tools/rules` });
                const { description: V, name: Y } = g,
                    J = r.createElement(
                        l.ZP,
                        {
                            disabled: !z,
                            onPress: () => {
                                f ? G(!0) : U();
                            },
                            size: "small",
                            type: "brandFilled",
                        },
                        x,
                    ),
                    K = 1 === R.length,
                    Q = r.createElement(
                        n.Z,
                        { style: $.delete },
                        r.createElement(o.Z, {
                            color: "red500",
                            disabled: K,
                            label: P,
                            onPress: () => {
                                W(!0);
                            },
                        }),
                    ),
                    X = K ? r.createElement(n.Z, { style: $.callout }, r.createElement(c.Z, { text: T })) : void 0,
                    ee = D
                        ? r.createElement(s.Z, {
                              cancelButtonLabel: B,
                              confirmButtonLabel: A,
                              confirmButtonType: "destructiveFilled",
                              headline: w,
                              onCancel: () => {
                                  W(!1);
                              },
                              onConfirm: q,
                              text: I,
                          })
                        : void 0,
                    te = M
                        ? r.createElement(y.a, {
                              onCancel: () => {
                                  G(!1);
                              },
                              onConfirm: () => {
                                  t(), U(), G(!1);
                              },
                          })
                        : void 0;
                return r.createElement(p.Z, { history: d, rightControl: J, title: k }, X, r.createElement(E.z, { description: V || "", errorText: O, name: Y, onChange: j }), Q, ee, te);
            }
            const z = (0, g.ys)(_(F), { allowRoles: [C.WW.Admin] }),
                $ = i.default.create((e) => ({ delete: { marginTop: e.spaces.space12 }, callout: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        757897: (e, t, a) => {
            a.d(t, { z: () => f });
            var r = a(202784),
                n = a(325686),
                l = a(834324),
                o = a(855488),
                c = a(392237),
                s = a(674132),
                i = a.n(s),
                u = a(500040),
                d = a(443781),
                m = a(870358);
            const p = i().c66769a4,
                C = i().ef02695b,
                h = i().ef02695b,
                g = i().c8242020,
                E = i().d32cf5e7,
                y = i().f8fa00c7,
                b = i().fc2a5c92,
                f = (e) => {
                    const { featureSwitches: t } = r.useContext(d.rC),
                        a = t.getNumberValue("c9s_max_rule_name_length", 50),
                        c = t.getNumberValue("c9s_max_rule_description_length", 160),
                        { description: s, errorText: i, name: f, onChange: R } = e,
                        Z = r.useCallback((e) => !(0, m.CF)(e, 3, a), [a]),
                        v = r.useCallback((e) => !(0, m.CF)(e, 0, c), [c]),
                        [_, k] = r.useState(f),
                        [x, L] = r.useState(Z(f)),
                        [T, P] = r.useState(void 0),
                        [w, I] = r.useState(s),
                        [A, B] = r.useState(v(s)),
                        [F, z] = r.useState(void 0),
                        [$, H] = r.useState("" !== f),
                        O = r.useCallback(
                            (e) => {
                                let t = !1;
                                const r = e.target.value;
                                Z(r) && ((t = !0), P(h({ minCharacterCount: 3, maxCharacterCount: a }))), H(!0), L(t), k(r), R({ description: w, name: r, valid: !t && !A });
                            },
                            [a, w, R, A, Z],
                        ),
                        N = r.useCallback(
                            (e) => {
                                let t = !1;
                                const a = e.target.value;
                                v(a) && ((t = !0), z(y({ maxCharacterCount: c }))), B(t), I(a), R({ name: _, description: a, valid: !t && !x });
                            },
                            [c, _, R, x, v],
                        ),
                        D = x && T ? void 0 : C({ minCharacterCount: 3, maxCharacterCount: a }),
                        W = A ? void 0 : E({ maxCharacterCount: c }),
                        M = i ? r.createElement(n.Z, { style: S.error }, r.createElement(l.Z, { Icon: u.default, headline: b, text: i, type: "danger" })) : void 0;
                    return r.createElement(r.Fragment, null, M, r.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, autoFocus: !0, calculateLength: m.Z, errorText: T, helperText: D, invalid: x && $, label: p, name: "typedRuleName", onChange: O, spellCheck: "false", validLength: a, value: _ }), r.createElement(o.Z, { autoComplete: "off", autoCorrect: !1, calculateLength: m.Z, errorText: F, helperText: W, invalid: A, label: g, maxNumberOfLines: 10, multiline: !0, name: "typedRuleDescription", onChange: N, spellCheck: "false", validLength: c, value: w }));
                },
                S = c.default.create((e) => ({ error: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space16 } }));
        },
        726314: (e, t, a) => {
            a.d(t, { a: () => d });
            var r = a(202784),
                n = a(190286),
                l = a(674132),
                o = a.n(l);
            const c = o().d45ae5e0,
                s = o().c1631260,
                i = o().d3190bde,
                u = o().ifd6e91c,
                d = (e) => {
                    const { onCancel: t, onConfirm: a } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: i, headline: c, onCancel: t, onConfirm: a, text: s });
                };
        },
        598880: (e, t, a) => {
            a.r(t), a.d(t, { CommunityRulesRouter: () => U, default: () => V });
            var r = a(807896),
                n = a(202784),
                l = a(325686),
                o = a(107267),
                c = a(154003),
                s = a(811176),
                i = a(392237),
                u = a(674132),
                d = a.n(u),
                m = a(379327),
                p = a(149170),
                C = a(699910),
                h = a(652904),
                g = a(870358),
                E = a(725516),
                y = a(615027),
                b = a(82152),
                f = a(485458),
                S = a(731708),
                R = a(25704),
                Z = a(175856);
            const v = d().a9ba79c0,
                _ = [d().h5482c7a, d().d5033a7a, d().ee8c43a0],
                k = d().j24c37b2,
                x = () =>
                    n.createElement(
                        l.Z,
                        { style: T.content },
                        _.map((e) => n.createElement(S.ZP, { color: "gray700", key: e, size: "body", style: T.item }, e)),
                    ),
                L = () => n.createElement(R.Z, { Content: x, actionLabel: k, flag: Z.iM, headline: v, subtext: "" }),
                T = i.default.create((e) => ({ content: { marginTop: `-${e.spaces.space48}`, marginBottom: e.spaces.space32 }, item: { paddingTop: e.spaces.space16 } })),
                P = n.memo(L),
                w = i.default.create((e) => ({ ruleContainerStyle: { paddingHorizontal: e.spaces.space32 }, badgeStyle: { marginEnd: e.spaces.space20 }, headerContainerStyle: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 } }));
            var I = a(71620),
                A = a(668214),
                B = a(491963);
            const F = (0, A.Z)()
                    .propsFromActions(() => ({ reorderRules: B.ZP.reorderRules, createLocalApiErrorHandler: (0, I.zr)("COMMUNITY_TOOLS_REORDER_RULES_SCREEN") }))
                    .withAnalytics({ page: "communities", section: "reorder_rules" }),
                z = d().b772cd66,
                $ = d().gfca5254;
            const H = F(function (e) {
                    const { community: t, createLocalApiErrorHandler: a, explanation: r, history: l, reorderRules: o } = e,
                        { id_str: s, rules: i } = t,
                        [u, d] = n.useState(i),
                        m = n.useCallback(
                            (e) => {
                                d(e);
                            },
                            [d],
                        ),
                        p = n.useCallback(() => {
                            const e = a({}),
                                t = u.map((e) => e.rest_id);
                            o(s, { ruleIds: t })
                                .then(() => {
                                    l.goBack({ backLocation: `/i/communities/${s}/tools/rules` });
                                })
                                .catch(e);
                        }, [s, u, o, l, a]),
                        g = n.createElement(c.ZP, { onPress: p, size: "small", type: "brandFilled" }, z);
                    return n.createElement(h.Z, null, n.createElement(f.Z, { communityId: s, rightControl: g, screenType: "primaryDetail", title: $ }, n.createElement(C.Z, { badgeStyle: w.badgeStyle, displayType: C.L.Reorder, explanation: r, headerContainerStyle: w.headerContainerStyle, onReorder: m, ruleContainerStyle: w.ruleContainerStyle, rules: u })));
                }),
                O = d().gfca5254,
                N = d().d94edeb4,
                D = d().j560c8ea,
                W = d().ab8089ea,
                M = d().h63a5c3c,
                G = n.createElement(m.default, null),
                j = n.createElement(p.default, null),
                U = (e) => {
                    const { community: t, history: a, match: i } = e,
                        { id_str: u, role: d, rules: m } = t,
                        p = i.url,
                        E = d === g.WW.Admin,
                        b = E,
                        S = b ? n.createElement(c.ZP, { "aria-label": D, icon: G, link: `/i/communities/${u}/tools/rules/add`, pullRight: !0, type: "primaryText" }) : void 0,
                        R = m.length > 1,
                        Z =
                            b && R
                                ? n.createElement(c.ZP, {
                                      "aria-label": M,
                                      icon: j,
                                      pullRight: !0,
                                      renderMenu: (e) => {
                                          const t = [{ text: W, link: `/i/communities/${u}/tools/rules/reorder` }];
                                          return n.createElement(s.Z, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 });
                                      },
                                      style: q.actionsButton,
                                      type: "primaryText",
                                  })
                                : void 0,
                        v = n.createElement(l.Z, { style: q.rightControlStyle }, S, Z),
                        _ = { displayType: C.L.Default, getPivotLink: void 0 };
                    return E && ((_.displayType = C.L.Pivot), (_.getPivotLink = (e) => `/i/communities/${u}/tools/rules/${e.rest_id}/edit`)), n.createElement(o.Switch, null, n.createElement(o.Route, { exact: !0, path: `${p}/` }, n.createElement(h.Z, null, n.createElement(f.Z, { communityId: u, rightControl: v, screenType: "primaryDetail", title: O }, E ? n.createElement(P, null) : null, n.createElement(C.Z, (0, r.Z)({ badgeStyle: w.badgeStyle, explanation: N, headerContainerStyle: w.headerContainerStyle, ruleContainerStyle: w.ruleContainerStyle, rules: m }, _))))), n.createElement(o.Route, { exact: !0, path: `${p}/reorder` }, n.createElement(H, { community: t, explanation: N, history: a })), n.createElement(o.Route, null, n.createElement(y.Z, { to: `${p}/` })));
                },
                q = i.default.create((e) => ({ actionsButton: { marginStart: e.spaces.space12 }, rightControlStyle: { flexDirection: "row" } })),
                V = (0, b.ys)((0, E.Z)(U, { page: "communities", section: "rules" }), { allowRoles: [g.WW.Admin, g.WW.Moderator] });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-87a6e4fe.3bd1a08a.js.map
