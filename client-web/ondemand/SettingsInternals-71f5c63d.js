"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-71f5c63d"],
    {
        585481: (e, t, n) => {
            n.r(t), n.d(t, { default: () => y });
            var i = n(202784),
                a = n(264922),
                r = n(844685),
                o = n(928088),
                s = n(731708),
                c = n(101890),
                l = n(355335);
            function h() {
                return i.createElement(i.Fragment, null, i.createElement(r.Z, { text: "Jetfuel" }), i.createElement(d, null));
            }
            function d() {
                const { disableDev: e, enableDev: t, isDev: n } = (0, l.Z)(),
                    a = "Server Environment",
                    r = n ? "local" : "prod";
                return i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(o.Z, null, i.createElement(s.ZP, { size: "headline2", weight: "bold" }, a)),
                    i.createElement(c.Z, {
                        description: "Used by jetfuel pages to choose the JF server",
                        name: a,
                        onChange: (n, i) => {
                            "local" === i ? t() : e();
                        },
                        options: [
                            { label: "Production", value: "prod" },
                            { label: "Local", value: "local", helpText: "Remember to ensure your local jetfuel server is serving on port 3000" },
                        ],
                        value: r,
                    }),
                );
            }
            var m = n(741810),
                u = n(650556),
                p = n(239496),
                f = n(58255),
                _ = n(427266);
            function g() {
                return i.createElement(i.Fragment, null, i.createElement(r.Z, { text: "Spaces & Periscope" }), i.createElement(E, null));
            }
            function E() {
                const [, e] = i.useState({}),
                    t = "Proxsee API Environment";
                return i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(o.Z, null, i.createElement(s.ZP, { size: "headline2", weight: "bold" }, t)),
                    i.createElement(c.Z, {
                        description: "Used by Spaces and live broadcasts to request metadata related to broadcast",
                        name: t,
                        onChange: (t, n) => {
                            const i = (0, _.dW)(n);
                            m.E.setEnvironment(i), u.VI.setEnvironment(i), p.FH.setEnvironment(i), e({});
                        },
                        options: [
                            { label: "Production", value: "production" },
                            { label: "Development", value: "development", helpText: ["Remember to set your dtab to route api-proxy-thrift to develop Proxsee service", "%2Fs%2Fperiscope%2Fapi-proxy-thrift%3D%3E%2Fsrv%23%2Fdevel%2Fatla%2Fperiscope%2Fapi-proxy-thrift", "(/s/periscope/api-proxy-thrift=>/srv#/devel/atla/periscope/api-proxy-thrift)"].join("\n") },
                            { label: "Canary", value: "canary" },
                        ],
                        value: f.w.proxsee.environment,
                    }),
                );
            }
            function y(e) {
                return i.createElement(a.Z, { location: e.location, title: "Earlybird Settings" }, i.createElement(g, null), i.createElement(h, null));
            }
        },
        788325: (e, t, n) => {
            n.r(t), n.d(t, { EmailScreen: () => x, default: () => I });
            var i = n(202784),
                a = n(325686),
                r = n(855488),
                o = n(420412),
                s = n(242454),
                c = n(928088),
                l = n(731708),
                h = n(332920),
                d = n.n(h),
                m = n(662678),
                u = n(290402),
                p = n(652904),
                f = n(264922),
                _ = n(71620),
                g = n(668214),
                E = n(257166),
                y = n(38562),
                b = n(601576);
            const S = (0, g.Z)()
                    .propsFromState(() => ({ emails: E.selectEmails, fetchStatus: E.selectFetchStatus }))
                    .propsFromActions(() => ({ addToast: b.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_EMAIL_SCREEN"), fetchDevices: E.fetchDevices, fetchSettings: y.wv, resendConfirmationEmail: E.resendConfirmationEmail, updateEmail: E.updateEmail }))
                    .withAnalytics({ page: "settings", section: "email" }),
                C = d().i2209530,
                Z = d().ebeeac1a,
                v = d().dc013356,
                w = d().ea28c7ce,
                L = d().f3f66252,
                A = d().i5107de4,
                P = d().d19fd42a,
                T = d().g4da3246;
            class x extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = () => {
                            const { emails: e } = this.props,
                                [t, n] = (0, m.Z)(e, (e) => e.email_verified),
                                c = t[0]?.email,
                                l = n[0]?.email;
                            return i.createElement(a.Z, null, c ? i.createElement(r.Z, { defaultValue: c, editable: !1, label: v, name: "current_email", type: "email" }) : null, l ? this._renderUnverifiedEmailMessage(l) : null, i.createElement(o.Z, null), i.createElement(s.Z, { color: "primary", label: e.length ? A : L, link: "/i/flow/add_email" }));
                        }),
                        (this._renderUnverifiedEmailMessage = (e) => i.createElement(c.Z, null, i.createElement(l.ZP, { color: "gray700" }, i.createElement(d().I18NFormatMessage, { $i18n: "f3c4e2c5", unverifiedEmail: e }, i.createElement(l.ZP, { color: "link", onClick: this._handleResendVerification, role: "button" }, d().h021352f({ resendConfirmationLabel: P })))))),
                        (this._handleResendVerification = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, resendConfirmationEmail: n } = this.props;
                            n().then(() => e({ text: T }), t({ showToast: !0 }));
                        }),
                        (this._handleFetchDevices = () => {
                            const { createLocalApiErrorHandler: e, fetchDevices: t } = this.props;
                            t({ include_pending_email: !0 }).catch(e({ showToast: !0 }));
                        }),
                        (this.state = { email: void 0 }),
                        this._handleFetchDevices(),
                        (this._initialPath = this._previousPath = window.location.pathname);
                }
                shouldComponentUpdate(e, t) {
                    const { createLocalApiErrorHandler: n, fetchSettings: i } = this.props;
                    return this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchDevices(), i().catch(n())), (this._previousPath = location.pathname), e !== this.props || t !== this.state;
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return i.createElement(f.Z, { location: t, submitDisabled: !this.state.email, submitLabel: C, title: Z }, i.createElement(p.Z, null, i.createElement(u.Z, { "aria-label": w, fetchStatus: e, onRequestRetry: this._handleFetchDevices, render: this._render })));
                }
            }
            const I = S(x);
        },
        359477: (e, t, n) => {
            n.r(t), n.d(t, { FeatureSwitchesScreen: () => D, default: () => M });
            var i = n(202784),
                a = n(840590),
                r = n(382880),
                o = n(443781),
                s = n(652904),
                c = n(918621),
                l = n(264922),
                h = n(325686),
                d = n(954110),
                m = n(101890),
                u = n(731708),
                p = n(352924),
                f = n(844685),
                _ = n(154003),
                g = n(371344),
                E = n(420412),
                y = n(956272),
                b = n(595088),
                S = n(267966),
                C = n(855488),
                Z = n(392237);
            class v extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { disabled: t, name: n, onChange: i, type: a } = this.props;
                            if (!t) {
                                i(n, "number" === a ? parseInt(e.target.value, 10) : e.target.value);
                            }
                        });
                }
                render() {
                    const { disabled: e, helpText: t, label: n, type: a, value: r, withBottomBorder: o } = this.props,
                        s = !!e;
                    return i.createElement(h.Z, { style: [o && w.bottomBorder, s && w.disabled] }, i.createElement(C.Z, { editable: !s, helperText: t, label: n, maxLength: "number" === a ? 5 : void 0, name: n, onChange: this._handleChange, type: a, value: r }));
                }
            }
            v.defaultProps = { type: "text", withBottomBorder: !0 };
            const w = Z.default.create((e) => ({ bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, disabled: { opacity: 0.5 } })),
                L = i.memo((e) => {
                    const { enumerationValues: t, helpText: n, name: a, onChange: r, value: o } = e;
                    switch (e.type) {
                        case "boolean":
                            return i.createElement(d.Z, { checked: !!o, helpText: n, label: a, name: a, onChange: r });
                        case "experiment":
                            return i.createElement(m.Z, { description: n, label: a, name: a, onChange: r, options: t?.map((e) => ({ label: e, value: e })) ?? [], value: String(o) });
                        default:
                            return Array.isArray(o) ? i.createElement(h.Z, { style: [S.Z.viewItem, S.Z.bottomBorder] }, i.createElement(u.ZP, null, a), i.createElement(u.ZP, { color: "gray700" }, "Array value type editing not supported yet"), i.createElement("br", null), i.createElement(u.ZP, null, o.join(", "))) : i.createElement(v, { helpText: n, label: a, name: a, onChange: r, type: "number" === e.type ? "number" : "text", value: String(o) });
                    }
                });
            function A({ debugConfig: e, featureSwitches: t, onFeatureSwitchChange: n, onlyDDGs: a, overrides: r, search: o }) {
                return 0 === t.length
                    ? null
                    : i.createElement(
                          h.Z,
                          { role: "list" },
                          t.map(({ name: t, value: s }) => {
                              if (!e[t] || (o && -1 === t.indexOf(o.toLowerCase())) || (a && "experiment" !== e[t].type)) return null;
                              const { description: c, enumeration_values: l, owner: d, type: m } = e[t],
                                  u = r[t] ?? s,
                                  p =
                                      [c, d]
                                          .filter(Boolean)
                                          .map((e) => e.trim())
                                          .join("\n") || void 0;
                              return i.createElement(h.Z, { key: t, role: "listitem" }, i.createElement(L, { enumerationValues: l, helpText: p, name: t, onChange: n, type: m, value: u }));
                          }),
                      );
            }
            const P = i.memo(({ config: e, onClear: t, overrides: n }) => {
                    const a = p.b(),
                        r = (0, b.Z)(n);
                    return i.createElement(
                        h.Z,
                        { "aria-labelledby": a, role: "region" },
                        i.createElement(f.Z, { id: a, text: "Currently active overrides" }),
                        i.createElement(
                            h.Z,
                            { role: "list" },
                            r.map(([t, n]) => i.createElement(h.Z, { key: t, role: "listitem", style: [S.Z.viewItem, S.Z.bottomBorder] }, i.createElement(u.ZP, null, t, " "), i.createElement(u.ZP, { color: e[t] && e[t].value !== n ? "magenta500" : "gray700" }, Number.isNaN(n) ? "" : n.toString()))),
                        ),
                        i.createElement(h.Z, { style: S.Z.viewItem }, i.createElement(_.ZP, { onPress: t, type: "destructiveOutlined" }, "Clear all overrides")),
                    );
                }),
                T = i.memo(({ config: e, debugConfig: t, onClear: n, onFeatureSwitchChange: a, overrides: r }) => {
                    const [o, s] = i.useState(""),
                        [c, l] = i.useState(!1),
                        m = i.useCallback((e, t) => l(t), []),
                        u = i.useCallback((e) => s(e.target.value), []),
                        _ = i.useCallback(() => s(""), []),
                        C = p.b(),
                        Z = p.b(),
                        v = i.useMemo(() => (0, b.Z)(e).map(([e, { value: t }]) => ({ name: e, value: t })), [e]);
                    return i.createElement(h.Z, null, Object.keys(r).length > 0 ? i.createElement(P, { config: e, onClear: n, overrides: r }) : null, i.createElement(h.Z, { "aria-labelledby": C, role: "region" }, i.createElement(f.Z, { id: C, text: "Filters" }), i.createElement(d.Z, { checked: c, label: "Only DDGs", name: "onlyDDGs", onChange: m }), i.createElement(g.Z, { Icon: y.default, onChange: u, onClear: _, placeholder: "Search feature switches", style: S.Z.searchBox, withClearButton: !0 })), i.createElement(E.Z, null), i.createElement(h.Z, { "aria-labelledby": Z, role: "region" }, i.createElement(f.Z, { id: Z, text: "Feature switches" }), i.createElement(A, { debugConfig: t, featureSwitches: v, onFeatureSwitchChange: a, onlyDDGs: c, overrides: r, search: o })));
                });
            var x = n(668214),
                I = n(558369);
            const k = (0, x.Z)()
                    .propsFromState(() => ({ featureSwitches: I.RI }))
                    .adjustStateProps(({ featureSwitches: e }) => ({ allSwitches: e.debug, config: e.user.config }))
                    .withAnalytics({ page: "settings", section: "feature_switches" }),
                F = (e) => JSON.parse((0, c.ej)({ cookieName: "ab_decider", featureSwitches: e }) || "{}");
            class D extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleItemChanged = (e, t) => {
                            Array.isArray(t) ||
                                void 0 === t ||
                                (((e, t, n) => {
                                    (0, c.d8)("ab_decider", JSON.stringify({ ...F(n), [e]: t }), { featureSwitches: n });
                                })(e, t, this.context.featureSwitches),
                                this._listen(),
                                this.forceUpdate());
                        }),
                        (this._handleClearOverrides = () => {
                            var e;
                            (e = this.context.featureSwitches), (0, c.kT)("ab_decider", { featureSwitches: e }), this._listen(), this.forceUpdate();
                        }),
                        (this._listen = (0, r.Z)(() => {
                            a.default.listen(() => {
                                window.location.reload();
                            });
                        })),
                        0 === Object.keys(e.allSwitches).length && e.history.replace("/settings");
                }
                render() {
                    const { allSwitches: e, config: t, location: n } = this.props,
                        a = F(this.context.featureSwitches);
                    return i.createElement(s.Z, null, i.createElement(l.Z, { location: n, title: "Feature switches" }, i.createElement(T, { config: t, debugConfig: e, onClear: this._handleClearOverrides, onFeatureSwitchChange: this._handleItemChanged, overrides: a })));
                }
            }
            D.contextType = o.rC;
            const M = k(D);
        },
        777559: (e, t, n) => {
            n.r(t), n.d(t, { default: () => f, getFlowParam: () => p });
            var i = n(202784),
                a = n(529356),
                r = n(332920),
                o = n.n(r),
                s = n(725516),
                c = n(915566);
            const l = o().deaf5b16,
                h = o().g1a4a1b6,
                d = o().e24305e4,
                m = o().abfaa528,
                u = o().ia5e7488,
                p = (e) => {
                    const t = e.query?.flow;
                    if (t && !Array.isArray(t)) return c.MQ[t];
                };
            function f({ history: e, location: t }) {
                const n = p(t),
                    r = (0, s.z)(),
                    o = n ? c.Jb[n] : void 0,
                    f = i.useCallback(() => {
                        r.scribe({ page: "id_verification", section: "error", element: "retry", action: "click" }), e.replace("/settings/account/id_verification/start", o ? { redirectPath: o, flow: n } : void 0);
                    }, [r, n, o, e]),
                    _ = n === c.MQ.premiumSubscription,
                    g = i.useCallback(() => {
                        r.scribe({ page: "id_verification", section: "error", element: _ ? "skip" : "close", action: "click" }), e.replace(o ?? "/");
                    }, [r, o, e, _]);
                return (
                    i.useEffect(() => {
                        r.scribe({ page: "id_verification", section: "error", action: "impression" });
                    }, [r]),
                    i.createElement(a.Z, { actionLabel: l, headline: h, isFullHeightOnMobile: !1, onAction: f, onSecondaryAction: g, secondaryActionLabel: _ ? m : u, subtext: d })
                );
            }
        },
        18216: (e, t, n) => {
            n.r(t), n.d(t, { default: () => X });
            n(136728);
            var i = n(202784),
                a = n(360917),
                r = n.n(a),
                o = n(325686),
                s = n(107267),
                c = n(731708),
                l = n(96083),
                h = n(154003),
                d = n(167630),
                m = n(750410),
                u = n(530525),
                p = n(439592),
                f = n(392237),
                _ = n(332920),
                g = n.n(_),
                E = n(293723),
                y = n(323265),
                b = n(940289),
                S = n(130919),
                C = n(980407),
                Z = n(443781),
                v = n(782642),
                w = n(782826),
                L = n(725516),
                A = n(312771),
                P = n(615027),
                T = n(915566),
                x = n(762815),
                I = (n(585488), n(712696)),
                k = n.n(I);
            const F = x.Z,
                D = () => {
                    const e = k()(F, {});
                    return e.viewer.user_results.result.verification_info?.identity_verification_process_info?.vendor?.identifier;
                };
            var M = n(431890);
            const V = g().afe4a358,
                R = g().cdc65e89,
                N = g().h05c1f28,
                O = g().j8cfcc62,
                B = g().c4930cb6,
                H = Object.freeze({ Persona: i.createElement(g().I18NFormatMessage, { $i18n: "d3543217" }, i.createElement(c.ZP, { link: T.Jf, withInteractiveStyling: !0 }, g().e4fed511)), Au10tix: O }),
                U = [{ title: g().ac7bb0fe }, { title: g().c12ce69c }, { title: g().c5bfe94a }],
                K = g().e5b7dd84,
                z = g().cfd2f35e,
                G = g().abfaa528,
                j = g().ef4602ec,
                q = g().i859a9d4,
                $ = i.createElement(g().I18NFormatMessage, { $i18n: "j7963df1" }, i.createElement(c.ZP, { link: "https://legal.x.com/subscriptions-creator-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().def518fa), i.createElement(c.ZP, { link: "https://legal.x.com/creator-ads-revenue-sharing-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().f61cda83)),
                Y = i.createElement(g().I18NFormatMessage, { $i18n: "f8f20041" }, i.createElement(c.ZP, { link: "https://legal.x.com/subscriptions-creator-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().g1952008), i.createElement(c.ZP, { link: "https://legal.x.com/creator-revenue-sharing-terms", withInteractiveStyling: !0, withUnderline: !0 }, g().e5d0419c)),
                J = i.createElement(g().I18NFormatMessage, { $i18n: "dd49801f" }, i.createElement(c.ZP, { link: "https://legal.x.com/subscriptions-creator-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().g3723480), i.createElement(c.ZP, { link: "https://legal.x.com/creator-ads-revenue-sharing-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().c776f523)),
                Q = i.createElement(g().I18NFormatMessage, { $i18n: "c5cee667" }, i.createElement(c.ZP, { link: "https://legal.x.com/subscriptions-creator-terms.html", withInteractiveStyling: !0, withUnderline: !0 }, g().ab9f38f8), i.createElement(c.ZP, { link: "https://legal.x.com/creator-revenue-sharing-terms", withInteractiveStyling: !0, withUnderline: !0 }, g().d5cab8b0)),
                W = f.default.create((e) => ({ content: { paddingHorizontal: e.spaces.space40, paddingVertical: e.spaces.space16 }, subtext: { marginTop: e.spaces.space8, marginBottom: e.spaces.space16 }, footer: { marginHorizontal: e.spaces.space40, marginVertical: e.spaces.space16, gap: e.spaces.space12 }, learnMore: { marginStart: e.spaces.space4 }, disclaimer: { marginHorizontal: "auto", maxWidth: "484px" }, list: { gap: e.spaces.space24, marginTop: e.spaces.space24 }, row: { flexDirection: "row", gap: e.spaces.space16 }, iconCheck: { color: e.colors.text, minWidth: e.spaces.space20 } })),
                X = i.memo(
                    (0, L.Z)(
                        ({ analytics: e, history: t, location: n }) => {
                            const { featureSwitches: a } = i.useContext(Z.rC),
                                f = a.isTrue("identity_verification_consent_opt_in_by_default_enabled"),
                                _ = a.getStringValue("identity_verification_creator_processor"),
                                g = a.isTrue("identity_verification_vendor_idv_migration_enabled"),
                                L = a.isTrue("responsive_web_ad_revenue_sharing_url_update_enabled"),
                                x = D(),
                                I = i.useMemo(() => "id_verification" + (x ? `_${x}` : ""), [x]),
                                k = i.useMemo(() => {
                                    if (y.ZP.isWebView()) {
                                        const e = n.query?.flow;
                                        if (!e || Array.isArray(e)) return;
                                        return e;
                                    }
                                    return n.state?.flow;
                                }, [n.query?.flow, n.state?.flow]);
                            i.useEffect(() => {
                                e.scribe({ page: I, section: "consent-screen", component: k, action: "impression" });
                            }, [e, k, I]);
                            const F = n.state?.redirectPath,
                                O = k === T.MQ.premiumSubscription,
                                X = k === T.MQ.creator,
                                ee = i.useMemo(() => (x && x in H ? H[x] : H.Au10tix), [x]),
                                [te] = (0, M.Z)(),
                                ne = (0, v.p)(),
                                [ie, ae] = i.useState(!1),
                                [re, oe] = i.useState(f),
                                se = i.useCallback(
                                    (t) => {
                                        e.scribe({ page: I, section: "consent-screen", component: k, element: "consent_checkbox", action: t ? "accept" : "clear" }), oe(t);
                                    },
                                    [e, k, I],
                                ),
                                ce = i.useCallback(() => {
                                    e.scribe({ page: I, section: "consent-screen", component: k, element: O ? "skip" : "cancel", action: "click" }), F ? t.push(F) : t.goBack();
                                }, [e, k, t, O, F, I]),
                                le = i.useCallback(() => {
                                    ae(!0),
                                        e.scribe({ page: I, section: "consent-screen", component: k, element: "start", action: "click" }),
                                        te({ redirectPath: X ? T.zV : F || T.hJ, errorPath: "/settings/account/id_verification/error" + (O ? `?flow=${T.MQ.premiumSubscription}` : ""), verificationFlow: X ? "CreatorIdv" : void 0 })
                                            .then((t) => (e.scribe({ page: I, section: "consent-screen", component: k, element: "start", action: "success" }), w.ZP.navigateTo(t)))
                                            .catch(() => {
                                                e.scribe({ page: I, section: "consent-screen", component: k, element: "start", action: "error" }), ne({ text: j, withClearButton: !0, withAutoDismiss: !0 }), ae(!1);
                                            });
                                }, [e, k, te, F, I, O, ne, X]),
                                he = i.useMemo(() => (X && "Stripe" === (g ? x : _) ? (L ? Q : J) : L ? Y : $), [L, g, _, x, X]),
                                de = i.useMemo(() => i.createElement(o.Z, { style: W.footer }, i.createElement(o.Z, { style: W.row }, i.createElement(l.Z, { checked: re, onChange: se }), i.createElement(c.ZP, { color: "gray700", size: "subtext2", style: W.disclaimer }, X ? he : ee, i.createElement(c.ZP, { link: T.LT, style: W.learnMore }, q))), i.createElement(h.ZP, { disabled: ie || !re, onPress: le, type: "primaryFilled" }, ie ? i.createElement(d.Z, null) : K), i.createElement(h.ZP, { onPress: ce, type: "primaryOutlined" }, O ? G : z)), [re, se, ie, le, ce, O, he, X, ee]),
                                me = i.useCallback(
                                    ({ data: e, fetchStatus: n, retry: a }) => {
                                        if (n === A.ZP.FAILED) return i.createElement(m.Z, { onRequestRetry: a });
                                        if (n === A.ZP.LOADED && e) {
                                            const n = e.viewer.user_results.result.verification_info;
                                            if (!n) return i.createElement(m.Z, { onRequestRetry: a });
                                            return X || n.identity_verification_status === S.t.CanVerifyIdentity
                                                ? i.createElement(
                                                      C.Z,
                                                      { backButtonType: "close", bottomBar: de, history: t, onBackClick: ce },
                                                      i.createElement(u.Z, { "aria-label": V, aspectMode: p.Z.exact(3.5), image: "https://abs.twimg.com/responsive-web/client-web/ID_Verification_Illo.da61d80a.png" }),
                                                      i.createElement(
                                                          o.Z,
                                                          { style: W.content },
                                                          i.createElement(c.ZP, { size: "title4", weight: "bold" }, O ? R({ title: V }) : V),
                                                          i.createElement(c.ZP, { color: "gray700", size: "body", style: W.subtext }, N),
                                                          i.createElement(c.ZP, { weight: "bold" }, B),
                                                          i.createElement(
                                                              o.Z,
                                                              { role: "list", style: W.list },
                                                              U.map((e) => i.createElement(o.Z, { key: e.title, role: "listitem", style: W.row }, i.createElement(E.default, { style: W.iconCheck }), i.createElement(c.ZP, { weight: "medium" }, e.title))),
                                                          ),
                                                      ),
                                                  )
                                                : i.createElement(s.Switch, null, i.createElement(s.Route, null, i.createElement(P.Z, { to: F || T.NC })));
                                        }
                                        return i.createElement(d.Z, null);
                                    },
                                    [de, t, ce, O, F, X],
                                );
                            return i.createElement(b.IDVerificationQueryRenderer, { render: me, variables: r() });
                        },
                        { page: "id_verification", section: "settings" },
                    ),
                );
        },
        915566: (e, t, n) => {
            n.d(t, { Jb: () => o, Jf: () => d, LT: () => h, MQ: () => r, NC: () => l, hJ: () => s, zV: () => c });
            var i = n(688715),
                a = n(130919);
            const r = Object.freeze({ premiumSubscription: "premiumSubscription", premiumSettings: "premiumSettings", securitySettings: "securitySettings", creator: "creator" }),
                o = { [r.premiumSubscription]: "/i/flow/premium_signup_nux_flow", [r.premiumSettings]: "/settings/premium", [r.securitySettings]: "/settings/security", [r.creator]: "/settings/monetization" },
                s = `/settings/account/id_verification?status=${a.t.PendingResult}`,
                c = `/settings/monetization?status=${a.t.PendingResult}`,
                l = "/settings/account/id_verification",
                h = (0, i.ju)("https://help.x.com/rules-and-policies/verification-policy"),
                d = (0, i.ju)("https://help.x.com/using-x/x-premium");
        },
        940289: (e, t, n) => {
            n.r(t), n.d(t, { IDVerificationQueryRenderer: () => j, IDVerificationQueryRequest: () => z, default: () => Y, isPendingStatus: () => K });
            var i = n(993770),
                a = n(629928),
                r = n(202784),
                o = n(360917),
                s = n.n(o),
                c = n(614983),
                l = n.n(c),
                h = n(325686),
                d = (n(585488), n(351743)),
                m = n.n(d),
                u = n(107267),
                p = n(750410),
                f = n(943401),
                _ = n(954110),
                g = n(167630),
                E = n(392237),
                y = n(731708),
                b = n(332920),
                S = n.n(b),
                C = n(750442),
                Z = n(130919),
                v = n(727828),
                w = n(534763),
                L = n(443781),
                A = n(652904),
                P = n(301410),
                T = n(725516),
                x = n(312771),
                I = n(615027),
                k = n(466441),
                F = n(264922),
                D = n(915566);
            const M = S().afe4a358,
                V = S().g268fbb8,
                R = S().f66d24be,
                N = S().c8255462,
                O = S().c6e731ee,
                B = S().be582166,
                H = { [Z.t.PendingResult]: S().b496bc94, [Z.t.RequestLocked]: S().d8f5cce4, [Z.t.IdentityNonVerifiable]: S().i8427a1e, [Z.t.CanVerifyIdentity]: B },
                U = r.createElement(w.b, { label: R, link: D.LT }),
                K = (e) => {
                    const t = e.query?.status;
                    return !(!t || Array.isArray(t)) && t === Z.t.PendingResult;
                },
                z = a.Z,
                G = i.Z,
                j = (0, P.z)(z, { errorConfig: { context: "ID_VERIFICATION_CONTEXT" } }),
                q = E.default.create((e) => ({ layoutDimensions: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, iconTheme: { color: e.colors.text }, idLabel: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                $ = r.createElement(h.Z, { style: q.idLabel }, r.createElement(C.default, { style: q.iconTheme }), r.createElement(y.ZP, { color: "gray700" }, V)),
                Y = r.memo(
                    (0, T.Z)(
                        ({ analytics: e, ...t }) => {
                            const { featureSwitches: n } = r.useContext(L.rC),
                                i = n.isTrue("identity_verification_hide_verified_label_settings_enabled"),
                                a = (0, u.useLocation)(),
                                [o] = m()(G),
                                c = r.useCallback(
                                    (e, t) => (n, i) => {
                                        e &&
                                            t &&
                                            o({
                                                variables: { is_identity_verified_label_hidden: i, user_id: e },
                                                updater: (e, n) => {
                                                    const a = e.get(t);
                                                    l()(a, "userRecord must be specified"), a.setValue(i, "is_identity_verified_label_hidden");
                                                },
                                            });
                                    },
                                    [o],
                                ),
                                d = r.useCallback(
                                    ({ data: n, fetchStatus: o, retry: s }) => {
                                        if (o === x.ZP.FAILED) return r.createElement(p.Z, { onRequestRetry: s });
                                        if (o === x.ZP.LOADED && n) {
                                            const o = n.viewer.user_results.result,
                                                l = o.rest_id,
                                                d = o.verification_info;
                                            if (!d) return r.createElement(p.Z, { onRequestRetry: s });
                                            const m = !!d.is_identity_verified_label_hidden,
                                                g = d.identity_verification_status,
                                                E = g === Z.t.CanVerifyIdentity && K(a) ? Z.t.PendingResult : g,
                                                y = E === Z.t.UnavailableMissingBlueSubscription;
                                            switch ((e.scribe({ page: "identity_verification_settings", section: E, action: "impression" }), E)) {
                                                case Z.t.RequestLocked:
                                                case Z.t.PendingResult:
                                                case Z.t.IdentityNonVerifiable:
                                                    return r.createElement(r.Fragment, null, r.createElement(f.Z, { description: H[E] }), U);
                                                case Z.t.IdentityVerified:
                                                case Z.t.UnavailableMissingBlueSubscription:
                                                    return r.createElement(h.Z, null, r.createElement(f.Z, { description: B }), r.createElement(h.Z, { style: q.layoutDimensions }, y ? r.createElement(v.Z, { variant: "IdVerification", withColoredIcon: !0 }) : $), i ? r.createElement(h.Z, null, r.createElement(_.Z, { checked: m, disabled: y, helpText: O, label: N, name: "is_identity_verified_label_hidden", onChange: c(l, d.__id) })) : null, U);
                                                case Z.t.CanVerifyIdentity:
                                                    return r.createElement(h.Z, null, r.createElement(f.Z, { description: H[E] }), r.createElement(u.Switch, null, r.createElement(u.Route, null, r.createElement(I.Z, { to: "/settings/account/id_verification/start" }))));
                                                default:
                                                    return r.createElement(k.default, t);
                                            }
                                        }
                                        return r.createElement(g.Z, null);
                                    },
                                    [e, i, a, c, t],
                                );
                            return r.createElement(A.Z, null, r.createElement(F.Z, { location: a, title: M }, r.createElement(j, { render: d, variables: s() })));
                        },
                        { page: "id_verification", section: "settings" },
                    ),
                );
        },
        431890: (e, t, n) => {
            n.d(t, { Z: () => l });
            n(571372);
            var i = n(786033),
                a = n(202784),
                r = (n(585488), n(351743)),
                o = n.n(r),
                s = n(782826);
            const c = i.Z,
                l = () => {
                    const { origin: e } = s.ZP.get(),
                        [t, n] = o()(c);
                    return [
                        a.useCallback(
                            ({ errorPath: n, redirectPath: i, verificationFlow: a }) =>
                                new Promise((r, o) => {
                                    const s = `${e}${i}`;
                                    t({
                                        variables: { success_url: s, error_url: n ? `${e}${n}` : s, verification_flow: a || null },
                                        onCompleted: (e, t) => {
                                            if (e.start_identity_verification) {
                                                if (("StartIdentityVerificationResultSuccessAu10tixSession" !== e?.start_identity_verification?.__typename && "StartIdentityVerificationResultSuccessSession" !== e?.start_identity_verification?.__typename) || !e?.start_identity_verification.session_url) return o(new Error("Expected Session URL"));
                                                r(e?.start_identity_verification.session_url);
                                            }
                                        },
                                        onError: o,
                                    });
                                }),
                            [t, e],
                        ),
                        n,
                    ];
                };
        },
        407202: (e, t, n) => {
            n.r(t), n.d(t, { SettingsLocationScreen: () => T, default: () => x, locDisabledLabel: () => Z, locationLabel: () => b });
            var i = n(202784),
                a = n(325686),
                r = n(688715),
                o = n(731708),
                s = n(954110),
                c = n(332920),
                l = n.n(c),
                h = n(947135),
                d = n(341276),
                m = n(170069),
                u = n(264922),
                p = n(71620),
                f = n(668214),
                _ = n(704279),
                g = n(806528),
                E = n(38562);
            const y = (0, f.Z)()
                    .propsFromState(() => ({ permissionStatus: g.wM, settings: E.l4 }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, p.zr)("SETTINGS_LOCATION_SCREEN"), deleteLocationData: E.el, loadGeoLocation: g.iG, scribePageImpression: _.L, updateSettings: E.VP })),
                b = l().fcb6a5b8,
                S = l().fcb6a5b8,
                C = l().df1ddda4,
                Z = l().ed7fa034,
                v = l().e80e4288,
                w = l().b0ee8ab6,
                L = l().d96cf7ce,
                A = (0, r.ju)("https://help.x.com/safety-and-security/tweet-location-settings"),
                P = { page: "settings", section: "location" };
            function T({ createLocalApiErrorHandler: e, deleteLocationData: t, loadGeoLocation: n, location: r, permissionStatus: c, scribePageImpression: p, settings: f, updateSettings: _ }) {
                return (
                    i.useEffect(
                        function () {
                            p(P);
                        },
                        [p],
                    ),
                    i.createElement(
                        u.Z,
                        { location: r, title: b },
                        i.createElement(
                            a.Z,
                            null,
                            i.createElement(m.Z, null, i.createElement(l().I18NFormatMessage, { $i18n: "ffa48331" }, i.createElement(o.ZP, { link: A }, l().e23b2991))),
                            c === d.S.denied ? i.createElement(m.Z, null, Z) : null,
                            i.createElement(s.Z, {
                                checked: f.geo_enabled,
                                label: S,
                                name: "geo_enabled",
                                onChange: function (t, i) {
                                    !(function (t, n) {
                                        _({ [t]: n }).catch(e({ showToast: !0 }));
                                    })(t, i),
                                        i && n();
                                },
                            }),
                            i.createElement(h.Z, {
                                confirmationSheetConfirmButtonLabel: L,
                                confirmationSheetConfirmButtonType: "destructiveFilled",
                                confirmationSheetHeadline: w,
                                confirmationSheetText: C,
                                label: v,
                                onConfirmationSheetConfirm: function () {
                                    t().catch(e({ showToast: !0 }));
                                },
                                withBottomBorder: !1,
                            }),
                        ),
                    )
                );
            }
            const x = y(T);
        },
        544989: (e, t, n) => {
            n.r(t), n.d(t, { BackupCodeScreen: () => T, default: () => x });
            var i = n(202784),
                a = n(576648),
                r = n(325686),
                o = n(688715),
                s = n(731708),
                c = n(154003),
                l = n(928088),
                h = n(332920),
                d = n.n(h),
                m = n(290402),
                u = n(652904),
                p = n(264922),
                f = n(717391),
                _ = n(71620),
                g = n(668214),
                E = n(750238),
                y = n(601576);
            const b = (0, g.Z)()
                    .propsFromState(() => ({ backupCode: E.hW, fetchStatus: E.UD }))
                    .propsFromActions(() => ({ addToast: y.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_BACKUP_CODE_SCREEN"), fetchBackupCode: E.q5, fetchNewBackupCode: E.Iv }))
                    .withAnalytics({ page: "settings", section: "backup_code" }),
                S = d().i3bb3f78,
                C = d().ec6a76e0,
                Z = d().f2c3c31c,
                v = d().f88553c8,
                w = d().e8016b64,
                L = d().c4ca22bc,
                A = (0, o.ju)("https://help.x.com/managing-your-account/two-factor-authentication"),
                P = i.createElement(s.ZP, { link: A });
            class T extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { backupCode: e } = this.props;
                            return i.createElement(i.Fragment, null, i.createElement(r.Z, { style: f.Z.centeredContainer }, i.createElement(s.ZP, { align: "center", size: "title2", weight: "bold" }, e ? ((t = e).match(/.{1,4}/g) || [t]).join(" ") : null)), a.Z.isAvailable() ? i.createElement(r.Z, { style: f.Z.centeredContainer }, i.createElement(c.ZP, { alignContent: "center", onPress: this._handleCopy, type: "brandFilled" }, Z)) : null, i.createElement(r.Z, { style: f.Z.centeredContainer }, i.createElement(c.ZP, { alignContent: "center", onPress: this._handleGenerate, type: "brandText" }, C)));
                            var t;
                        }),
                        (this._handleCopy = () => {
                            const { addToast: e, backupCode: t } = this.props;
                            t && (a.Z.setString(t), e({ text: v }));
                        }),
                        (this._handleGenerate = () => {
                            const { createLocalApiErrorHandler: e, fetchNewBackupCode: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleRetry = () => {
                            const { createLocalApiErrorHandler: e, fetchBackupCode: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleRetry();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return i.createElement(u.Z, null, i.createElement(p.Z, { location: t, title: S }, i.createElement(l.Z, null, i.createElement(s.ZP, { color: "gray700" }, L)), i.createElement(l.Z, null, i.createElement(s.ZP, { color: "gray700" }, i.createElement(d().I18NFormatMessage, { $i18n: "a4455c05" }, i.cloneElement(P, null, d().f20ff69f)))), i.createElement(m.Z, { "aria-label": w, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._renderContent })));
                }
            }
            const x = b(T);
        },
        298575: (e, t, n) => {
            n.r(t), n.d(t, { EnrollmentScreen: () => E, bouncerEnrollmentUrl: () => _, default: () => b });
            n(543673), n(240753), n(128399);
            var i = n(202784),
                a = n(688715),
                r = n(362075),
                o = n(392237),
                s = n(980407),
                c = n(312771),
                l = n(71620),
                h = n(208115),
                d = n(668214),
                m = n(446418);
            const u = (e, t) => t.location && t.location.state && t.location.state.bounce_location,
                p = (0, d.Z)()
                    .propsFromState(() => ({ canGoBack: h.q, bounceLocation: u, fetchStatus: m.UD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, l.zr)("SETTINGS_LOGIN_VERIFICATION_ENROLLMENT_CONTEXT"), fetchLoginVerificationSettings: m.zl })),
                f = "/settings/account/login_verification",
                _ = (e, t = window.location) => {
                    const n = (0, a.ju)("https://x.com"),
                        i = new URL(`${n}${e}`),
                        r = i.search ? "&" : "?";
                    return (i.search = `${i.search}${r}initiated_in_iframe=true`), i.href;
                },
                g = (e, t, n) => e !== c.ZP.LOADED || !t || !n;
            class E extends i.Component {
                constructor(e) {
                    super(e),
                        (this._handleClose = () => {
                            const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t, history: n } = this.props;
                            t().catch(e());
                            const i = window.history.length;
                            n.go(Math.min(-1, this._initialHistoryLength - i - 1));
                        }),
                        (this._messageHandler = (e) => {
                            const { data: t, origin: n } = e;
                            if (n === (0, a.ju)("https://x.com") && t.bouncer)
                                switch (t.event) {
                                    case "2fa_complete": {
                                        const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t, history: n } = this.props;
                                        t().catch(e()), n.replace("/settings/account/login_verification/backup_code");
                                        break;
                                    }
                                    case "complete":
                                    case "cancel":
                                        this._handleClose();
                                }
                        });
                    const { bounceLocation: t, canGoBack: n, fetchStatus: i, history: r } = this.props;
                    g(i, n, t) && r.replace(f);
                }
                componentDidMount() {
                    var e;
                    (e = this._messageHandler), window.addEventListener("message", e), (this._initialHistoryLength = window.history.length);
                }
                componentWillUnmount() {
                    var e;
                    (e = this._messageHandler), window.removeEventListener("message", e);
                }
                render() {
                    const { bounceLocation: e, canGoBack: t, fetchStatus: n, history: a } = this.props;
                    return g(n, t, e) ? null : i.createElement(s.Z, { backButtonType: "close", backLocation: f, history: a, onBackClick: this._handleClose }, i.createElement(r.Z, { allowForms: !0, src: _(e), style: [o.default.absoluteFill, y.iframe] }));
                }
            }
            const y = o.default.create((e) => ({ iframe: { backgroundColor: e.colors.cellBackground, paddingStart: e.spaces.space16 } })),
                b = p(E);
        },
        386300: (e, t, n) => {
            n.r(t), n.d(t, { ManageSecurityKeyScreen: () => A, default: () => T });
            var i = n(202784),
                a = n(325686),
                r = n(855488),
                o = n(943401),
                s = n(420412),
                c = n(242454),
                l = n(392237),
                h = n(332920),
                d = n.n(h),
                m = n(290402),
                u = n(615027),
                p = n(264922),
                f = n(71620),
                _ = n(668214),
                g = n(446418);
            const E = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: g.UD, loginVerificationSettings: g.vi }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("SETTINGS_MANAGE_SECURITY_KEY_SCREEN"), fetchLoginVerificationSettings: g.zl })),
                y = d().d4e220b4,
                b = d().g6d0f0b6,
                S = d().b894f68a,
                C = d().g2601bb6,
                Z = d().b464b726,
                v = d().a4101e1b,
                w = d().a9f397f3,
                L = d().a8ef2b64;
            class A extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._initialPath = window.location.pathname),
                        (this._previousPath = this._initialPath),
                        (this._renderContent = () => {
                            const {
                                    location: e,
                                    loginVerificationSettings: {
                                        methods: { U2fSecurityKey: t },
                                    },
                                    match: {
                                        params: { securityKeyId: n },
                                    },
                                } = this.props,
                                l = Array.isArray(t) && t.find((e) => e.id === n),
                                h = l && this._getSecurityKeyAddedDate(l.createdAtMs);
                            return l ? i.createElement(p.Z, { location: e, title: b }, i.createElement(a.Z, null, i.createElement(r.Z, { defaultValue: l.name || `(${L})`, editable: !1, label: y, name: "current_security_key", style: P.formTextInput }), i.createElement(a.Z, { style: P.settingDescriptionCellContainer }, i.createElement(o.Z, { description: v({ securityKeyAddedDate: h }) })), i.createElement(s.Z, null), i.createElement(c.Z, { color: "primary", label: C, link: { pathname: "/i/flow/rename-security-key", query: { input_flow_data: JSON.stringify({ requested_variant: l.id }) } } }), i.createElement(c.Z, { color: "red500", label: Z, link: { pathname: "/i/flow/delete-security-key", query: { input_flow_data: JSON.stringify({ requested_variant: l.id }) } } }))) : i.createElement(u.Z, { to: "/settings/account/login_verification" });
                        }),
                        (this._fetchLoginVerificationSettings = () => {
                            const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t } = this.props;
                            t().catch(e());
                        }),
                        (this._getSecurityKeyAddedDate = (e) => {
                            if (e) {
                                const t = new Date(parseInt(e, 10));
                                return w(t);
                            }
                            return "";
                        }),
                        (this._handleFetchRetry = () => this._fetchLoginVerificationSettings());
                }
                componentDidMount() {
                    this._fetchLoginVerificationSettings();
                }
                componentDidUpdate() {
                    this._previousPath !== location.pathname && this._initialPath === location.pathname && this._fetchLoginVerificationSettings(), (this._previousPath = location.pathname);
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return i.createElement(m.Z, { "aria-label": S, fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._renderContent });
                }
            }
            const P = l.default.create((e) => ({ formTextInput: { paddingBottom: 0 }, settingDescriptionCellContainer: { paddingStart: e.spaces.space12 } })),
                T = E(A);
        },
        713391: (e, t, n) => {
            n.r(t), n.d(t, { SecurityKeysScreen: () => x, default: () => I });
            n(136728);
            var i = n(202784),
                a = n(943401),
                r = n(190286),
                o = n(779610),
                s = n(731708),
                c = n(242454),
                l = n(332920),
                h = n.n(l),
                d = n(615656),
                m = n(290402),
                u = n(443781),
                p = n(615027),
                f = n(264922),
                _ = n(40293),
                g = n(71620),
                E = n(668214),
                y = n(446418);
            const b = (0, E.Z)()
                    .propsFromState(() => ({ fetchStatus: y.UD, loginVerificationSettings: y.vi }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("SETTINGS_SECURITY_KEYS_SCREEN"), enrollIn2FA: y.DY, fetchLoginVerificationSettings: y.zl })),
                S = h().j24c37b2,
                C = h().c1d96d6a,
                Z = h().gf91694e,
                v = h().b1686800,
                w = h().f7954a0c,
                L = h().h69986c2,
                A = h().i5896ba2,
                P = h().a8ef2b64,
                T = "U2fSecurityKey";
            class x extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._initialPath = window.location.pathname),
                        (this._previousPath = this._initialPath),
                        (this._renderContent = () => {
                            const {
                                location: e,
                                loginVerificationSettings: { methods: t },
                            } = this.props;
                            return !(!t[T] || !t[T].length) ? i.createElement(f.Z, { location: e, title: v }, i.createElement(a.Z, { description: L }), this._renderU2fSecurityKeys(), this.state.showMaxKeyLimitConfirmation ? this._renderMaxKeyLimitConfirmation() : null) : i.createElement(p.Z, { to: "/settings/account/login_verification" });
                        }),
                        (this._renderMaxKeyLimitConfirmation = () => i.createElement(r.Z, { confirmButtonLabel: S, headline: C, onConfirm: this._handleCloseConfirmation, text: Z, withCancelButton: !1 })),
                        (this._fetchLoginVerificationSettings = () => {
                            const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleAddSecurityKey = () => {
                            const {
                                loginVerificationSettings: { methods: e },
                            } = this.props;
                            Array.isArray(e[T]) && e[T].length >= _.f ? this.setState({ showMaxKeyLimitConfirmation: !0 }) : this._handleKeyEnroll();
                        }),
                        (this._handleKeyEnroll = () => {
                            const { createLocalApiErrorHandler: e, enrollIn2FA: t, history: n } = this.props;
                            this._isOcf2faEnrollmentEnabled ? n.push({ pathname: "/i/flow/two-factor-security-key-enrollment" }) : t({ flow: "two_factor_auth_u2f_security_key" }).catch(e(this._enrollmentErrorHandlingMap));
                        }),
                        (this._handleCloseConfirmation = () => {
                            this.setState({ showMaxKeyLimitConfirmation: !1 });
                        }),
                        (this._handleFetchRetry = () => this._fetchLoginVerificationSettings()),
                        (this.state = { showMaxKeyLimitConfirmation: !1 }),
                        (this._enrollmentErrorHandlingMap = this._createEnrollmentErrorHandlingMap()),
                        (this._isOcf2faEnrollmentEnabled = this.context.featureSwitches.isTrue("ocf_2fa_enrollment_enabled"));
                }
                componentDidMount() {
                    this._fetchLoginVerificationSettings();
                }
                componentDidUpdate() {
                    this._previousPath !== location.pathname && this._initialPath === location.pathname && this._fetchLoginVerificationSettings(), (this._previousPath = location.pathname);
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return i.createElement(m.Z, { "aria-label": w, fetchStatus: e, onRequestRetry: this._handleFetchRetry, render: this._renderContent });
                }
                _renderU2fSecurityKeys() {
                    const {
                        loginVerificationSettings: { methods: e },
                    } = this.props;
                    return Array.isArray(e[T])
                        ? i.createElement(
                              i.Fragment,
                              null,
                              e[T].map((e) => i.createElement(o.Z, { key: e.id, label: i.createElement(s.ZP, null, e.name || `(${P})`), link: { pathname: `/settings/account/login_verification/security_keys/${e.id}` } })),
                              i.createElement(c.Z, { align: "left", color: "primary", label: A, onPress: this._handleAddSecurityKey }),
                          )
                        : null;
                }
                _createEnrollmentErrorHandlingMap() {
                    const { history: e } = this.props;
                    return {
                        [d.ZP.AccessDeniedByBouncer]: {
                            customAction: ({ bounce_location: t }) => {
                                t && e.push({ state: { bounce_location: t }, pathname: "/settings/account/login_verification/enrollment" });
                            },
                        },
                    };
                }
            }
            x.contextType = u.rC;
            const I = b(x);
        },
        123807: (e, t, n) => {
            n.r(t), n.d(t, { TemporaryPasswordScreen: () => P, default: () => T });
            var i = n(202784),
                a = n(576648),
                r = n(325686),
                o = n(731708),
                s = n(154003),
                c = n(928088),
                l = n(332920),
                h = n.n(l),
                d = n(290402),
                m = n(652904),
                u = n(264922),
                p = n(717391),
                f = n(40293),
                _ = n(71620),
                g = n(668214),
                E = n(618448),
                y = n(601576);
            const b = (0, g.Z)()
                    .propsFromState(() => ({ temporaryPassword: E.v$, fetchStatus: E.UD }))
                    .propsFromActions(() => ({ addToast: y.fz, createLocalApiErrorHandler: (0, _.zr)("SETTINGS_TEMPORARY_PASSWORD_SCREEN"), fetchTemporaryPassword: E.n8 }))
                    .withAnalytics({ page: "settings", section: "temporary_password" }),
                S = h().j2327f80,
                C = h().fbfeaf8e,
                Z = h().h4a8bd12,
                v = h().f88553c8,
                w = h().g247dc1c,
                L = h().h3a32f52,
                A = h().d70fceac;
            class P extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = () => {
                            const { temporaryPassword: e } = this.props;
                            return i.createElement(i.Fragment, null, i.createElement(r.Z, { style: p.Z.centeredContainer }, i.createElement(o.ZP, { align: "center", size: "title2", weight: "bold" }, e ? (0, f.X)(e) : null)), a.Z.isAvailable() ? i.createElement(r.Z, { style: p.Z.centeredContainer }, i.createElement(s.ZP, { alignContent: "center", onPress: this._handleCopy, type: "brandFilled" }, Z)) : null, i.createElement(r.Z, { style: p.Z.centeredContainer }, i.createElement(s.ZP, { alignContent: "center", onPress: this._handleGenerate, type: "brandText" }, C)));
                        }),
                        (this._handleCopy = () => {
                            const { addToast: e, temporaryPassword: t } = this.props;
                            t && (a.Z.setString(t), e({ text: v }));
                        }),
                        (this._handleGenerate = () => {
                            const { createLocalApiErrorHandler: e, fetchTemporaryPassword: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleGenerate();
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return i.createElement(m.Z, null, i.createElement(u.Z, { location: t, title: S }, i.createElement(c.Z, null, i.createElement(o.ZP, { color: "gray700" }, L)), i.createElement(c.Z, null, i.createElement(o.ZP, { color: "gray700" }, A)), i.createElement(d.Z, { "aria-label": w, fetchStatus: e, onRequestRetry: this._handleGenerate, render: this._renderContent })));
                }
            }
            const T = b(P);
        },
        196230: (e, t, n) => {
            n.r(t), n.d(t, { LoginVerificationScreen: () => _e, default: () => ge, disableLabel: () => P, disableLoginVerificationLabel: () => L, oldDisableMethodLabel: () => T });
            n(136728);
            var i = n(202784),
                a = n(688715),
                r = n(190286),
                o = n(844685),
                s = n(954110),
                c = n(242454),
                l = n(779610),
                h = n(420412),
                d = n(332920),
                m = n.n(d),
                u = n(615656),
                p = n(290402),
                f = n(443781),
                _ = n(652904),
                g = n(264922),
                E = n(71620),
                y = n(668214),
                b = n(446418);
            const S = (0, y.Z)()
                .propsFromState(() => ({ fetchStatus: b.UD, loginVerificationSettings: b.vi }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("SETTINGS_LOGIN_VERIFICATION_SCREEN"), deleteSecurityKey: b.J2, disableLoginVerification: b.DG, disableLoginVerificationMethod: b.aX, enrollIn2FA: b.DY, fetchLoginVerificationSettings: b.zl }))
                .withAnalytics({ page: "settings", section: "loginVerification" });
            var C = n(40293);
            const Z = m().bc262c2e,
                v = m().hc1a91da,
                w = m().e4fed8f0,
                L = m().b39c7b14,
                A = m().a923fce6,
                P = m().ff781e0a,
                T = m().c557ac30,
                x = m().d133464a,
                I = m().ee3a7bfa,
                k = m().aa9139cc,
                F = m().jc22dd42,
                D = m().a219e218,
                M = m().e0d79de8,
                V = m().ja6bbfa0,
                R = m().dd703318,
                N = (0, a.ju)("https://help.x.com/managing-your-account/two-factor-authentication"),
                O = m().i859a9d4,
                B = m().c2570922,
                H = m().fba9483c,
                U = m().ab61b41a,
                K = m().a67c7d68,
                z = m().h6d0d89c,
                G = m().b3e5c946,
                j = m().cd195528,
                q = m().b1686800,
                $ = m().a1860ee8,
                Y = m().j45a2856,
                J = m().d8612d9c,
                Q = m().e13d4468,
                W = m().j24c37b2,
                X = m().c1d96d6a,
                ee = m().gf91694e,
                te = m().a219e218,
                ne = (0, a.ju)("https://help.x.com/managing-your-account/cant-confirm-my-email-address"),
                ie = m().j265ddb6,
                ae = m().a7cfdf1c,
                re = m().fc2a5c92,
                oe = m().d7bfde1a,
                se = (0, a.ju)("https://help.x.com/managing-your-account/suspended-twitter-accounts"),
                ce = "two_factor",
                le = "Sms",
                he = "Totp",
                de = "U2fSecurityKey",
                me = { [ce]: "two_factor", [le]: "two_factor_auth_sms", [he]: "two_factor_auth_totp", [de]: "two_factor_auth_u2f_security_key" },
                ue = { [le]: "/i/flow/two-factor-sms-enrollment", [he]: "/i/flow/two-factor-auth-app-enrollment", [de]: "/i/flow/two-factor-security-key-enrollment" },
                pe = { [le]: "sms", [he]: "authenticationApp", [de]: "securityKey" },
                fe = Object.freeze({ NONE: "NONE", VERIFY_EMAIL: "verify_email", METHOD: "method", ROOT_SETTING: "root_setting", ENABLE_LOGIN_VERIFICATION: "enable_login_verification", MAX_SECURITY_KEY_LIMIT_REACHED: "max_security_key_limit_reached", STANDALONE_SECURITY_KEY: "standalone_security_key", SUSPENDED: "suspended" });
            class _e extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._initialPath = window.location.pathname),
                        (this._previousPath = this._initialPath),
                        (this._render = () => {
                            const {
                                loginVerificationSettings: { isOldPushUser: e },
                            } = this.props;
                            return i.createElement(i.Fragment, null, e ? this._renderLegacyPush2FASettings() : this._render2FASettings(), this.state.confirmationType !== fe.NONE ? this._renderConfirmationSheet() : null);
                        }),
                        (this._renderConfirmationSheet = () => {
                            const { confirmationType: e } = this.state;
                            switch (e) {
                                case fe.ROOT_SETTING:
                                    return i.createElement(r.Z, { confirmButtonLabel: I, headline: P, onCancel: this._handleCloseConfirmation, onConfirm: this._handleConfirmDisableLoginVerification, text: A });
                                case fe.METHOD:
                                    return i.createElement(r.Z, { confirmButtonLabel: I, headline: P, onCancel: this._handleCloseConfirmation, onConfirm: this._handleConfirmDisableMethod, text: x });
                                case fe.VERIFY_EMAIL:
                                    return i.createElement(r.Z, { cancelButtonLabel: O, cancelButtonLink: ne, confirmButtonLabel: te, headline: ie, onCancel: this._handleCloseConfirmation, onConfirm: this._handleCloseConfirmation, text: ae });
                                case fe.ENABLE_LOGIN_VERIFICATION:
                                    return i.createElement(r.Z, { confirmButtonLabel: W, headline: J, onConfirm: this._handleCloseConfirmation, text: Q, withCancelButton: !1 });
                                case fe.MAX_SECURITY_KEY_LIMIT_REACHED:
                                    return i.createElement(r.Z, { confirmButtonLabel: W, headline: X, onConfirm: this._handleCloseConfirmation, text: ee, withCancelButton: !1 });
                                case fe.STANDALONE_SECURITY_KEY:
                                    return i.createElement(r.Z, { confirmButtonLabel: D, onConfirm: this._handleCloseConfirmation, text: M, withCancelButton: !1 });
                                case fe.SUSPENDED:
                                    return i.createElement(r.Z, { confirmButtonLabel: W, headline: re, learnMoreLink: se, learnMoreText: O, onConfirm: this._handleCloseConfirmation, text: oe, withCancelButton: !1 });
                                default:
                                    return null;
                            }
                        }),
                        (this._handleRetry = () => {
                            this.props.fetchLoginVerificationSettings();
                        }),
                        (this._handleTwoFactorEnrollmentChange = (e, t) => {
                            if (t) {
                                const { createLocalApiErrorHandler: e, enrollIn2FA: t } = this.props;
                                t({ flow: ce }).catch(e(this._enrollmentErrorHandlingMap));
                            } else this._showDisableLoginVerificationConfirmation();
                        }),
                        (this._handleTwoFactorMethodsChange = (e, t) => {
                            const { createLocalApiErrorHandler: n } = this.props;
                            if (t)
                                if (this._isOcf2faEnrollmentEnabled) {
                                    const { history: t } = this.props;
                                    t.push({ pathname: ue[e] });
                                } else {
                                    const { enrollIn2FA: t } = this.props;
                                    t({ flow: me[e] }).catch(n(this._enrollmentErrorHandlingMap));
                                }
                            else if (this._isOcf2faUnenrollmentEnabled) {
                                const { history: t } = this.props;
                                t.push({ pathname: "/i/flow/two-factor-unenrollment", query: { input_flow_data: JSON.stringify({ requested_variant: JSON.stringify({ method: pe[e] }) }) } });
                            } else this._showDisableMethodConfirmation(e);
                        }),
                        (this._handleAddSecurityKey = () => {
                            const {
                                loginVerificationSettings: { methods: e },
                            } = this.props;
                            e[de] && e[de].length >= C.f ? this.setState({ confirmationType: fe.MAX_SECURITY_KEY_LIMIT_REACHED }) : this._handleTwoFactorMethodsChange(de, !0);
                        }),
                        (this._showDisableLoginVerificationConfirmation = () => {
                            this.setState({ confirmationType: fe.ROOT_SETTING });
                        }),
                        (this._handleConfirmDisableLoginVerification = () => {
                            const { createLocalApiErrorHandler: e, disableLoginVerification: t } = this.props;
                            this._handleCloseConfirmation(), t().catch(e());
                        }),
                        (this._showStandaloneSecurityKeyNotification = () => {
                            this.setState({ confirmationType: fe.STANDALONE_SECURITY_KEY });
                        }),
                        (this._showDisableMethodConfirmation = (e) => {
                            (e !== le && e !== he && e !== de) || this.setState({ confirmationType: fe.METHOD, method: e });
                        }),
                        (this._handleConfirmDisableMethod = () => {
                            const {
                                    createLocalApiErrorHandler: e,
                                    deleteSecurityKey: t,
                                    disableLoginVerificationMethod: n,
                                    loginVerificationSettings: { methods: i },
                                } = this.props,
                                { method: a } = this.state;
                            if ((this._handleCloseConfirmation(), a === de && Array.isArray(i[de]) && i[de].length)) Promise.all(i[de].map((e) => t({ securityKeyId: e.id }))).catch(e(this._disableMethodErrorHandlingMap));
                            else if (a) {
                                const t = a !== de && !(le in i && he in i) && Array.isArray(i[de]) && 1 === i[de].length;
                                n({ method: a })
                                    .then(() => {
                                        t && this._showStandaloneSecurityKeyNotification();
                                    })
                                    .catch(e(this._disableMethodErrorHandlingMap));
                            }
                        }),
                        (this._showVerifyEmailConfirmation = () => {
                            this.setState({ confirmationType: fe.VERIFY_EMAIL });
                        }),
                        (this._showEnableLoginVerificationConfirmation = () => {
                            this.setState({ confirmationType: fe.ENABLE_LOGIN_VERIFICATION });
                        }),
                        (this._showSuspendedConfirmation = () => {
                            this.setState({ confirmationType: fe.SUSPENDED });
                        }),
                        (this._handleCloseConfirmation = () => {
                            this.setState({ confirmationType: fe.NONE, method: void 0 });
                        }),
                        (this._isChecked = (e) => {
                            const {
                                    loginVerificationSettings: { methods: t },
                                } = this.props,
                                n = t[e];
                            return Array.isArray(n) ? n.length > 0 : !!n;
                        }),
                        (this._createEnrollmentErrorHandlingMap = () => {
                            const { history: e } = this.props;
                            return {
                                [u.ZP.AccessDeniedByBouncer]: {
                                    customAction: ({ bounce_location: t }) => {
                                        t && e.push({ state: { bounce_location: t }, pathname: "/settings/account/login_verification/enrollment" });
                                    },
                                },
                                [u.ZP.CannotEnableLoginVerificationUnconfirmedEmail]: {
                                    customAction: () => {
                                        this._showVerifyEmailConfirmation();
                                    },
                                },
                                [u.ZP.CannotEnrollLoginVerificationNotYetEnabled]: {
                                    customAction: () => {
                                        this._showEnableLoginVerificationConfirmation();
                                    },
                                },
                                [u.ZP.CurrentUserSuspended]: {
                                    customAction: () => {
                                        this._showSuspendedConfirmation();
                                    },
                                },
                            };
                        }),
                        (this.state = { confirmationType: fe.NONE, method: void 0 }),
                        (this._disableMethodErrorHandlingMap = {
                            [u.ZP.IneligibleFor2faAfterModification]: {
                                customAction: () => {
                                    this._showDisableLoginVerificationConfirmation();
                                },
                            },
                        }),
                        (this._enrollmentErrorHandlingMap = this._createEnrollmentErrorHandlingMap()),
                        (this._isOcf2faEnrollmentEnabled = this.context.featureSwitches.isTrue("ocf_2fa_enrollment_enabled")),
                        (this._isOcf2faUnenrollmentEnabled = this.context.featureSwitches.isTrue("ocf_2fa_unenrollment_enabled"));
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchLoginVerificationSettings: t } = this.props;
                    t().catch(e());
                }
                componentDidUpdate() {
                    this._previousPath !== location.pathname && this._initialPath === location.pathname && this.props.fetchLoginVerificationSettings(), (this._previousPath = location.pathname);
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return i.createElement(_.Z, null, i.createElement(g.Z, { location: t, title: R }, i.createElement(p.Z, { "aria-label": V, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render })));
                }
                _render2FASettings() {
                    const {
                        loginVerificationSettings: { twoFactorAuthEnabled: e },
                    } = this.props;
                    return i.createElement(i.Fragment, null, i.createElement(o.Z, { text: R }), i.createElement(s.Z, { checked: e && this._isChecked(le), helpText: H, label: B, name: le, onChange: this._handleTwoFactorMethodsChange }), i.createElement(s.Z, { checked: e && this._isChecked(he), helpText: K, label: U, name: he, onChange: this._handleTwoFactorMethodsChange }), i.createElement(s.Z, { checked: e && this._isChecked(de), helpText: G, label: z, learnMoreLink: N, name: de, onChange: this._handleTwoFactorMethodsChange }), e ? this._renderU2fSecurityKeyLinks() : null, e ? this._renderAdditionalMethods() : null);
                }
                _renderU2fSecurityKeyLinks() {
                    const {
                        loginVerificationSettings: { methods: e },
                    } = this.props;
                    return e[de]?.length ? (this._isOcf2faEnrollmentEnabled ? i.createElement(c.Z, { align: "left", color: "primary", label: q, link: { pathname: "/settings/account/login_verification/security_keys" } }) : i.createElement(i.Fragment, null, i.createElement(l.Z, { label: q, link: { pathname: "/settings/account/login_verification/security_keys" } }), i.createElement(c.Z, { align: "left", color: "primary", label: j, onPress: this._handleAddSecurityKey }))) : null;
                }
                _renderLegacyPush2FASettings() {
                    const {
                        loginVerificationSettings: { twoFactorAuthEnabled: e },
                    } = this.props;
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { checked: e, helpText: F, label: k, name: "legacy_push", onChange: this._handleTwoFactorEnrollmentChange }), this._renderAdditionalMethods());
                }
                _renderAdditionalMethods() {
                    return i.createElement(i.Fragment, null, i.createElement(h.Z, null), i.createElement(o.Z, { text: Z }), i.createElement(l.Z, { description: w, label: v, link: "/settings/account/login_verification/backup_code" }), this.context.featureSwitches.isTrue("2fa_temporary_password_enabled") && i.createElement(l.Z, { description: Y, label: $, link: "/settings/account/login_verification/temporary_password" }));
                }
            }
            _e.contextType = f.rC;
            const ge = S(_e);
        },
        717391: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = n(392237).default.create((e) => ({ centeredContainer: { padding: e.spaces.space12, flexDirection: "row", justifyContent: "center" } }));
        },
        40293: (e, t, n) => {
            n.d(t, { X: () => a, f: () => i });
            const i = 20,
                a = (e) => (e.match(/.{1,4}/g) || [e]).join(" ");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-71f5c63d.8f02f5ca.js.map
