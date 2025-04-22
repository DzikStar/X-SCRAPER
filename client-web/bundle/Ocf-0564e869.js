"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-0564e869"],
    {
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => g, default: () => Z });
            n(571372);
            var a = n(202784),
                o = n(386802),
                i = n(108362),
                l = n(392237),
                s = n(674132),
                r = n.n(s),
                c = n(187669),
                d = n(449067),
                u = n(38293),
                p = n(231035),
                m = n(652904),
                h = n(952793),
                k = n(163889),
                _ = n(725516);
            const b = r().ba929da8,
                f = r().d203e242;
            function g(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = a.useContext(o.Z),
                    l = (0, h.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        l && t && (0, k.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    a.createElement(m.Z, null, a.createElement(d.Z.Configure, { backLocation: "/", documentTitle: b, title: f }), a.createElement(i.Z, { style: n && y.modal }, a.createElement(p.Z, null)), a.createElement(u.Z, { title: b, withMeta: !1 }))
                );
            }
            const y = l.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                Z = (0, _.Z)(g, { page: "not_found" });
        },
        588452: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            n(136728);
            var a = n(202784);
            class o extends a.Component {
                componentDidMount() {
                    const { code: e, error: t, scope: n, state: a } = this.props.location.query,
                        o = { callback_url: `https://${window.location.hostname}${window.location.pathname}`, code: e, error: t, scope: n, state: a },
                        i = window.opener;
                    i ? (i.postMessage(o, `https://${window.location.hostname}`), window.close(), i.focus()) : this.props.history.push("/");
                }
                render() {
                    return null;
                }
            }
        },
        699398: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(807896),
                o = n(202784),
                i = n(325686),
                l = n(779610),
                s = n(593866),
                r = n(731708),
                c = n(392237),
                d = n(804027),
                u = n(227991),
                p = n(663951),
                m = n(50439),
                h = n(280947),
                k = n(975364);
            const _ = "ActionListNextButton",
                b = "ActionListSkipButton";
            function f({ actionItem: e, link: t, onNavigate: n, subtaskId: i, subtaskInputs: s, updateFlow: r }) {
                const c = e.action_data.link_data,
                    d = o.useCallback(
                        (e) => {
                            e.preventDefault(), r(i, { link: t.link_id }), n(t);
                        },
                        [t, n, i, r],
                    );
                return o.createElement(l.Z, (0, a.Z)({ description: o.createElement(k.Z, (0, a.Z)({}, c.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: s })), label: o.createElement(k.Z, (0, a.Z)({}, c.text, { size: "headline2", subtaskInputs: s, text: c.text?.text ?? c.link.label })), link: "#", onPress: d, role: "link" }, Z(e.action_data.link_data.icon)));
            }
            function g({ actionItem: e, onNavigate: t, subtaskInputs: n }) {
                return o.createElement(l.Z, (0, a.Z)({ description: o.createElement(k.Z, (0, a.Z)({}, e.action_data.text_data.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: n })), label: o.createElement(k.Z, (0, a.Z)({}, e.action_data.text_data.text, { onNavigate: t, size: "headline2", subtaskInputs: n })), role: null }, Z(e.action_data.text_data.icon)));
            }
            function y({ actionItems: e, onNavigate: t, subtaskInputs: n }) {
                const i = e.map((e) => {
                    const i = "text" === e.action_type ? e.action_data.text_data : e.action_data.link_data;
                    return { label: o.createElement(k.Z, (0, a.Z)({}, i.text, { onNavigate: t, subtaskInputs: n, text: "text" === e.action_type ? e.action_data.text_data.text.text : (e.action_data.link_data.text?.text ?? e.action_data.link_data.link.label), weight: "bold" })), description: i.detail_text ? o.createElement(k.Z, (0, a.Z)({}, i.detail_text, { color: "gray700", style: w.bulletListDescription, subtaskInputs: n })) : null, decoration: i.icon ? o.createElement(m.Z, { icon: i.icon.icon, style: w.bulletIcon }) : null };
                });
                return o.createElement(s.Z, { items: i });
            }
            function Z(e) {
                return { thumbnail: e ? o.createElement(r.ZP, { size: "headline2", style: w.icon }, o.createElement(m.Z, { icon: e.icon })) : null, thumbnailSize: "medium" };
            }
            const w = c.default.create((e) => ({ icon: { display: "block", minWidth: e.spaces.space36, marginEnd: e.spaces.space20, textAlign: "center" }, bulletIcon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text, marginEnd: e.spaces.space24, justifyContent: "center", overflow: "hidden" }, bulletListDescription: { marginTop: e.spaces.space4 } })),
                C = function (e) {
                    const {
                        onNavigate: t,
                        passthroughOcfScreenProps: n,
                        subtask: { action_items: l, header: s, next_link: r, skip_link: c, style: m },
                        subtaskId: k,
                        subtaskInputs: Z,
                        updateFlow: w,
                    } = e;
                    return o.createElement(
                        h.Z,
                        (0, a.Z)({}, n, {
                            appBarPosition: "full_bleed_top" === s?.header_image?.image_type ? "absolute" : void 0,
                            appBarWithBackground: "full_bleed_top" !== s?.header_image?.image_type,
                            footer: o.createElement(u.ZP, {
                                actionLabel: r?.label,
                                actionTestID: _,
                                onAction: () => {
                                    r && (w(k, { link: r.link_id }), t(r));
                                },
                                onSecondaryAction: () => {
                                    c && (w(k, { link: c.link_id }), t(c));
                                },
                                secondaryActionLabel: c?.label,
                                secondaryActionTestID: b,
                            }),
                            header: o.createElement(p.Z, { header: s, onNavigate: t, subtaskInputs: Z, withHeaderImage: !0 }),
                            hideLogo: "full_bleed_top" === s?.header_image?.image_type,
                            providePadding: !0,
                        }),
                        m === d.R8.BulletList
                            ? o.createElement(y, (0, a.Z)({}, e, { actionItems: l }))
                            : o.createElement(
                                  i.Z,
                                  { role: "list" },
                                  l.map((t, n) => o.createElement(i.Z, { key: n, role: "listitem" }, "text" === t.action_type ? o.createElement(g, (0, a.Z)({}, e, { actionItem: t })) : o.createElement(f, (0, a.Z)({}, e, { actionItem: t, link: t.action_data.link_data.link })))),
                              ),
                    );
                };
        },
        110092: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                o = n(202784),
                i = n(190286),
                l = n(555079),
                s = n(975364);
            class r extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleConfirm = () => {
                            const { subtask: e } = this.props;
                            this._handleButtonClick(e.next_link);
                        }),
                        (this._handleCancel = () => {
                            const {
                                subtask: { cancel_link: e },
                            } = this.props;
                            e && this._handleButtonClick(e);
                        }),
                        (this._handleButtonClick = (e) => {
                            const { onNavigate: t, subtaskId: n, updateFlow: a } = this.props;
                            a(n, { link: e.link_id }), t(e);
                        });
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskInputs: n } = this.props,
                        r = t.primary_text ? o.createElement(s.Z, (0, a.Z)({}, t.primary_text, { id: l.Q_, onNavigate: e, subtaskInputs: n })) : void 0,
                        c = t.secondary_text ? o.createElement(s.Z, (0, a.Z)({}, t.secondary_text, { onNavigate: e, subtaskInputs: n })) : void 0,
                        { cancel_link: d, next_link: u } = t,
                        p = d && d.label;
                    return o.createElement(i.Z, { cancelButtonLabel: p, confirmButtonLabel: u && u.label, headline: r, onCancel: this._handleCancel, onConfirm: this._handleConfirm, onMaskClick: this._handleCancel, text: c, withCancelButton: !!p });
                }
            }
            const c = r;
        },
        125167: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(807896),
                o = n(202784),
                i = n(325686),
                l = n(530525),
                s = n(439592),
                r = n(946847),
                c = n(912021),
                d = n(516951),
                u = n(443781),
                p = n(555079),
                m = n(280947),
                h = n(975364),
                k = n(153925);
            class _ extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleCtaClick = (e) => {
                            const { onNavigate: t, subtaskId: n, updateFlow: a } = this.props;
                            a(n, { link: e.link_id }), t(e);
                        }),
                        (this._handlePrimaryActionClick = () => {
                            const { subtask: e } = this.props;
                            this.setState({ downloadLinkClicked: !0 }), this._handleCtaClick(e.primary_action_link);
                        }),
                        (this._handleSecondaryActionClick = () => {
                            const {
                                subtask: { secondary_action_link: e },
                            } = this.props;
                            e && this._handleCtaClick(e);
                        }),
                        (this._getSubText = (0, c.Z)((e, t, n) => {
                            const r = e.primary_image_url ? o.createElement(l.Z, { "aria-label": "", aspectMode: s.Z.exact(1), image: e.primary_image_url || "" }) : null,
                                c = e.secondary_text ? o.createElement(h.Z, (0, a.Z)({}, e.secondary_text, { onNavigate: t, subtaskInputs: n })) : null;
                            return o.createElement(i.Z, null, r, c);
                        })),
                        (this.state = { downloadLinkClicked: !1 });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: n, subtaskInputs: i } = this.props,
                        { downloadLinkClicked: l } = this.state,
                        s = n.primary_text ? o.createElement(h.Z, (0, a.Z)({}, n.primary_text, { id: p.Q_, onNavigate: e, subtaskInputs: i })) : null,
                        c = !l || !n.primary_action_text_after_click,
                        u = (l && n.primary_action_text_after_click) || n.primary_action_link.label,
                        _ = n.detail_text ? o.createElement(h.Z, (0, a.Z)({}, n.detail_text, { onNavigate: e, subtaskInputs: i })) : null;
                    return o.createElement(m.Z, (0, a.Z)({ hideLogo: !0 }, t), o.createElement(r.Z, { actionLabel: u || "", actionType: (0, k.$1)(n.primary_action_style), footer: _, headline: s, onAction: c ? this._handlePrimaryActionClick : d.Z, onClose: d.Z, onSecondaryAction: this._handleSecondaryActionClick, secondaryActionLabel: (n.secondary_action_link || {}).label, secondaryActionType: n.secondary_action_style && (0, k.$1)(n.secondary_action_style), subtext: this._getSubText(n, e, i), withCloseButton: !1 }), this.props.errorDialog);
                }
            }
            _.contextType = u.rC;
        },
        85779: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                o = n(323265),
                i = n(51525),
                l = n(951790),
                s = n(711535),
                r = n(280947);
            function c(e) {
                const { onNavigate: t, passthroughOcfScreenProps: n, subtask: c, subtaskId: d, updateFlow: u } = e,
                    p = new URLSearchParams(c.url.split("?")[1]),
                    m = p.get("publicKey"),
                    h = p.get("webKey") || m,
                    k = p.get("mobileKey") || m,
                    _ = p.get("data") || void 0,
                    b = "true" === p.get("verifyOnChallengeCompleted"),
                    f = p.get("flowToken") || "",
                    g = (e) => {
                        o.ZP.isWebView() ? l.Z.openApp(e) : (u(d, { completion_deeplink: e, link: c.next_link.link_id }), t(c.next_link));
                    },
                    y = (e) => {
                        u(d, { completion_deeplink: e, link: c.fail_link.link_id }), t(c.fail_link);
                    };
                return h && k && !(b && "" === f) ? a.createElement(r.Z, n, a.createElement(s.default, { data: _, flowToken: f, mobileKey: k, onChallengeCompleted: g, onChallengeFailed: y, shouldVerifyAfterChallengeCompleted: b, webKey: h })) : ((0, i.vv)(), null);
            }
        },
        711535: (e, t, n) => {
            n.r(t), n.d(t, { ArkoseSecurityChallenge: () => g, default: () => y });
            var a = n(202784),
                o = n(325686),
                i = n(392237),
                l = n(167630),
                s = n(323265),
                r = n(443781),
                c = n(51525),
                d = n(163889),
                u = n(951790),
                p = n(142253),
                m = n(725516),
                h = n(125363),
                k = n(390387),
                _ = n(929378),
                b = n(668214),
                f = n(118823);
            function g(e) {
                const { location: t, onChallengeFailed: n } = e,
                    [b, f] = a.useState(!0),
                    [g, y] = a.useState(!1),
                    { featureSwitches: A } = a.useContext(r.rC),
                    T = (0, m.z)(),
                    L = (0, h.v9)(k.OW),
                    N = a.useRef(null),
                    $ = a.useRef(null),
                    B = w(t, "publicKey") ?? "",
                    M = e.mobileKey || w(t, "mobileKey") || B,
                    P = e.webKey || w(t, "webKey") || B,
                    O = e.data || w(t, "data"),
                    F = M ? A.getStringValue(M) : "",
                    z = P ? A.getStringValue(P) : "",
                    W = e.shouldVerifyAfterChallengeCompleted || Boolean(t?.query?.verifyOnChallengeCompleted) || !1,
                    K = e.flowToken || w(t, "flowToken") || "",
                    R = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                    D = s.ZP.isWebView() || !("function" == typeof e.onChallengeCompleted),
                    V = D ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : R[i.default.theme.paletteName],
                    q = a.useMemo(() => D || window.innerWidth < E, [D]),
                    [j, H] = a.useState(q ? I : S),
                    [Q, J] = a.useState(q ? v : E),
                    [U, G] = a.useState(_.t.passive),
                    X = a.useMemo(() => (q ? Math.min(window.innerWidth / v, window.innerHeight / I) : 1), [q]),
                    Y = t?.query?.guestId,
                    ee = a.useMemo(() => (D && "string" == typeof Y ? Y : D ? "" : L || ""), [D, Y, L]);
                a.useEffect(() => {
                    N.current = (0, p.Z)({ name: "arkose-challenge-load" });
                }, []);
                const te = (t) => {
                        D ? u.Z.openApp(t) : e.onChallengeCompleted(t);
                    },
                    ne = a.useRef(() => {});
                (ne.current = function (t) {
                    if ("string" == typeof t.data)
                        try {
                            const n = JSON.parse(t.data);
                            switch (n.eventId) {
                                case "challenge-suppressed":
                                    _.Z.suppressedChallenge(T, ee, M, P), G(_.t.passive);
                                    break;
                                case "challenge-shown":
                                    _.Z.shownChallenge(T, ee, M, P), G(_.t.interactive), f(!1);
                                    break;
                                case "challenge-complete": {
                                    _.Z.completeChallenge(T, ee, U, M, P), $.current?.end({ endMessage: `mobile key:${M}, web key:${P}, challenge type: ${U}` }), ($.current = null);
                                    const t = `${C}?access_token=${n.payload.sessionToken}`,
                                        a = n.payload.sessionToken;
                                    W
                                        ? e
                                              .verifyIdentifier({ arkose_access_token: a, flow_token: K })
                                              .then((e) => {
                                                  te(t);
                                              })
                                              .catch((e) => {
                                                  te(t);
                                              })
                                        : te(t);
                                    break;
                                }
                                case "challenge-iframeSize":
                                    H(n.payload.frameHeight), J(n.payload.frameWidth);
                            }
                        } catch (e) {
                            (0, d.ZP)(e);
                        }
                }),
                    a.useEffect(() => {
                        function e(...e) {
                            ne.current(...e);
                        }
                        return (
                            window.addEventListener("message", e, !1),
                            () => {
                                window.removeEventListener("message", e, !1);
                            }
                        );
                    }, []);
                const ae = a.useRef(() => {});
                (ae.current = function () {
                    _.Z.loadIframeFailed(T, ee, M, P), D ? u.Z.openApp(x) : n(x);
                }),
                    a.useEffect(() => {
                        if (g) return;
                        const e = setTimeout(() => {
                            ae.current();
                        }, 1e4);
                        return () => {
                            clearTimeout(e);
                        };
                    }, [g]);
                const oe = !F || !z;
                a.useEffect(() => {
                    oe && (0, c.vv)();
                }, [oe]);
                let ie = null;
                return (
                    (b || oe) && (ie = a.createElement(l.Z, { style: Z.spinner })),
                    a.createElement(
                        o.Z,
                        { style: Z.wrapper },
                        ie,
                        a.createElement("iframe", {
                            height: j,
                            id: "arkoseFrame",
                            onLoad: () => {
                                y(!0), N.current?.end({ endMessage: `mobile key:${M}, web key:${P}` }), (N.current = null), ($.current = (0, p.Z)({ name: "arkose-challenge-complete" })), _.Z.loadIframe(T, ee, M, P);
                            },
                            src: [q ? `https://iframe.arkoselabs.com/${F}/index.html?theme=${V}` : `https://iframe.arkoselabs.com/${z}/index.html?theme=${V}`, O && `&data=${O}`].filter(Boolean).join(""),
                            style: { MozTransform: `scale(${X})`, OTransform: `scale(${X})`, WebkitTransform: `scale(${X})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" },
                            title: "arkoseFrame",
                            width: Q,
                        }),
                    )
                );
            }
            const y = (0, b.Z)().propsFromActions(() => ({ verifyIdentifier: f.if }))(g),
                Z = i.default.create((e) => ({ wrapper: { backgroundColor: e.colors.white }, spinner: { alignSelf: "center", height: "100%" } }));
            function w(e, t) {
                const n = e?.query;
                if (n) {
                    const e = n[t];
                    if (Array.isArray(e)) {
                        const [t] = e;
                        return t;
                    }
                    if (e) return e;
                }
            }
            const C = "twitter://onboarding/web_modal/next_link",
                x = "twitter://onboarding/web_modal/fail_link",
                v = 327,
                E = 558,
                I = 500,
                S = 523;
        },
        748604: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var a = n(807896),
                o = n(202784),
                i = n(114777),
                l = n(146361);
            const s = o.memo((e) => o.createElement(i.Z, (0, a.Z)({}, e, { ocfModule: l.Z })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-0564e869.20c692da.js.map
