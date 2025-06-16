"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-0564e869"],
    {
        466441: (e, t, a) => {
            a.r(t), a.d(t, { NotFoundScreen: () => f, default: () => Z });
            a(571372);
            var n = a(202784),
                o = a(386802),
                i = a(108362),
                s = a(392237),
                l = a(111677),
                r = a.n(l),
                c = a(187669),
                d = a(449067),
                u = a(38293),
                p = a(56851),
                m = a(652904),
                k = a(952793),
                h = a(163889),
                _ = a(725516);
            const b = r().ba929da8,
                g = r().d203e242;
            function f(e) {
                const { splat: t } = e.match.params,
                    { isModal: a } = n.useContext(o.Z),
                    s = (0, k.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        s && t && (0, h.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    n.createElement(m.Z, null, n.createElement(d.Z.Configure, { backLocation: "/", documentTitle: b, title: g }), n.createElement(i.Z, { style: a && y.modal }, n.createElement(p.Z, null)), n.createElement(u.Z, { title: b, withMeta: !1 }))
                );
            }
            const y = s.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                Z = (0, _.Z)(f, { page: "not_found" });
        },
        588452: (e, t, a) => {
            a.r(t), a.d(t, { default: () => o });
            a(136728);
            var n = a(202784);
            class o extends n.Component {
                componentDidMount() {
                    const { code: e, error: t, scope: a, state: n } = this.props.location.query,
                        o = { callback_url: `https://${window.location.hostname}${window.location.pathname}`, code: e, error: t, scope: a, state: n },
                        i = window.opener;
                    i ? (i.postMessage(o, `https://${window.location.hostname}`), window.close(), i.focus()) : this.props.history.push("/");
                }
                render() {
                    return null;
                }
            }
        },
        699398: (e, t, a) => {
            a.d(t, { Z: () => C });
            var n = a(807896),
                o = a(202784),
                i = a(325686),
                s = a(779610),
                l = a(593866),
                r = a(731708),
                c = a(392237),
                d = a(804027),
                u = a(227991),
                p = a(663951),
                m = a(497625),
                k = a(280947),
                h = a(975364);
            const _ = "ActionListNextButton",
                b = "ActionListSkipButton";
            function g({ actionItem: e, link: t, onNavigate: a, subtaskId: i, subtaskInputs: l, updateFlow: r }) {
                const c = e.action_data.link_data,
                    d = o.useCallback(
                        (e) => {
                            e.preventDefault(), r(i, { link: t.link_id }), a(t);
                        },
                        [t, a, i, r],
                    );
                return o.createElement(s.Z, (0, n.Z)({ description: o.createElement(h.Z, (0, n.Z)({}, c.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: l })), label: o.createElement(h.Z, (0, n.Z)({}, c.text, { size: "headline2", subtaskInputs: l, text: c.text?.text ?? c.link.label })), link: "#", onPress: d, role: "link" }, Z(e.action_data.link_data.icon)));
            }
            function f({ actionItem: e, onNavigate: t, subtaskInputs: a }) {
                return o.createElement(s.Z, (0, n.Z)({ description: o.createElement(h.Z, (0, n.Z)({}, e.action_data.text_data.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: a })), label: o.createElement(h.Z, (0, n.Z)({}, e.action_data.text_data.text, { onNavigate: t, size: "headline2", subtaskInputs: a })), role: null }, Z(e.action_data.text_data.icon)));
            }
            function y({ actionItems: e, onNavigate: t, subtaskInputs: a }) {
                const i = e.map((e) => {
                    const i = "text" === e.action_type ? e.action_data.text_data : e.action_data.link_data;
                    return { label: o.createElement(h.Z, (0, n.Z)({}, i.text, { onNavigate: t, subtaskInputs: a, text: "text" === e.action_type ? e.action_data.text_data.text.text : (e.action_data.link_data.text?.text ?? e.action_data.link_data.link.label), weight: "bold" })), description: i.detail_text ? o.createElement(h.Z, (0, n.Z)({}, i.detail_text, { color: "gray700", style: w.bulletListDescription, subtaskInputs: a })) : null, decoration: i.icon ? o.createElement(m.Z, { icon: i.icon.icon, style: w.bulletIcon }) : null };
                });
                return o.createElement(l.Z, { items: i });
            }
            function Z(e) {
                return { thumbnail: e ? o.createElement(r.ZP, { size: "headline2", style: w.icon }, o.createElement(m.Z, { icon: e.icon })) : null, thumbnailSize: "medium" };
            }
            const w = c.default.create((e) => ({ icon: { display: "block", minWidth: e.spaces.space36, marginEnd: e.spaces.space20, textAlign: "center" }, bulletIcon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text, marginEnd: e.spaces.space24, justifyContent: "center", overflow: "hidden" }, bulletListDescription: { marginTop: e.spaces.space4 } })),
                C = function (e) {
                    const {
                        onNavigate: t,
                        passthroughOcfScreenProps: a,
                        subtask: { action_items: s, header: l, next_link: r, skip_link: c, style: m },
                        subtaskId: h,
                        subtaskInputs: Z,
                        updateFlow: w,
                    } = e;
                    return o.createElement(
                        k.Z,
                        (0, n.Z)({}, a, {
                            appBarPosition: "full_bleed_top" === l?.header_image?.image_type ? "absolute" : void 0,
                            appBarWithBackground: "full_bleed_top" !== l?.header_image?.image_type,
                            footer: o.createElement(u.ZP, {
                                actionLabel: r?.label,
                                actionTestID: _,
                                onAction: () => {
                                    r && (w(h, { link: r.link_id }), t(r));
                                },
                                onSecondaryAction: () => {
                                    c && (w(h, { link: c.link_id }), t(c));
                                },
                                secondaryActionLabel: c?.label,
                                secondaryActionTestID: b,
                            }),
                            header: o.createElement(p.Z, { header: l, onNavigate: t, subtaskInputs: Z, withHeaderImage: !0 }),
                            hideLogo: "full_bleed_top" === l?.header_image?.image_type,
                            providePadding: !0,
                        }),
                        m === d.R8.BulletList
                            ? o.createElement(y, (0, n.Z)({}, e, { actionItems: s }))
                            : o.createElement(
                                  i.Z,
                                  { role: "list" },
                                  s.map((t, a) => o.createElement(i.Z, { key: a, role: "listitem" }, "text" === t.action_type ? o.createElement(f, (0, n.Z)({}, e, { actionItem: t })) : o.createElement(g, (0, n.Z)({}, e, { actionItem: t, link: t.action_data.link_data.link })))),
                              ),
                    );
                };
        },
        110092: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(807896),
                o = a(202784),
                i = a(190286),
                s = a(555079),
                l = a(975364);
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
                            const { onNavigate: t, subtaskId: a, updateFlow: n } = this.props;
                            n(a, { link: e.link_id }), t(e);
                        });
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskInputs: a } = this.props,
                        r = t.primary_text ? o.createElement(l.Z, (0, n.Z)({}, t.primary_text, { id: s.Q_, onNavigate: e, subtaskInputs: a })) : void 0,
                        c = t.secondary_text ? o.createElement(l.Z, (0, n.Z)({}, t.secondary_text, { onNavigate: e, subtaskInputs: a })) : void 0,
                        { cancel_link: d, next_link: u } = t,
                        p = d && d.label;
                    return o.createElement(i.Z, { cancelButtonLabel: p, confirmButtonLabel: u && u.label, headline: r, onCancel: this._handleCancel, onConfirm: this._handleConfirm, onMaskClick: this._handleCancel, text: c, withCancelButton: !!p });
                }
            }
            const c = r;
        },
        125167: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var n = a(807896),
                o = a(202784),
                i = a(325686),
                s = a(530525),
                l = a(439592),
                r = a(946847),
                c = a(912021),
                d = a(516951),
                u = a(443781),
                p = a(555079),
                m = a(280947),
                k = a(975364),
                h = a(153925);
            class _ extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleCtaClick = (e) => {
                            const { onNavigate: t, subtaskId: a, updateFlow: n } = this.props;
                            n(a, { link: e.link_id }), t(e);
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
                        (this._getSubText = (0, c.Z)((e, t, a) => {
                            const r = e.primary_image_url ? o.createElement(s.Z, { "aria-label": "", aspectMode: l.Z.exact(1), image: e.primary_image_url || "" }) : null,
                                c = e.secondary_text ? o.createElement(k.Z, (0, n.Z)({}, e.secondary_text, { onNavigate: t, subtaskInputs: a })) : null;
                            return o.createElement(i.Z, null, r, c);
                        })),
                        (this.state = { downloadLinkClicked: !1 });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: a, subtaskInputs: i } = this.props,
                        { downloadLinkClicked: s } = this.state,
                        l = a.primary_text ? o.createElement(k.Z, (0, n.Z)({}, a.primary_text, { id: p.Q_, onNavigate: e, subtaskInputs: i })) : null,
                        c = !s || !a.primary_action_text_after_click,
                        u = (s && a.primary_action_text_after_click) || a.primary_action_link.label,
                        _ = a.detail_text ? o.createElement(k.Z, (0, n.Z)({}, a.detail_text, { onNavigate: e, subtaskInputs: i })) : null;
                    return o.createElement(m.Z, (0, n.Z)({ hideLogo: !0 }, t), o.createElement(r.Z, { actionLabel: u || "", actionType: (0, h.$1)(a.primary_action_style), footer: _, headline: l, onAction: c ? this._handlePrimaryActionClick : d.Z, onClose: d.Z, onSecondaryAction: this._handleSecondaryActionClick, secondaryActionLabel: (a.secondary_action_link || {}).label, secondaryActionType: a.secondary_action_style && (0, h.$1)(a.secondary_action_style), subtext: this._getSubText(a, e, i), withCloseButton: !1 }), this.props.errorDialog);
                }
            }
            _.contextType = u.rC;
        },
        85779: (e, t, a) => {
            a.d(t, { Z: () => c });
            a(543673), a(240753), a(128399);
            var n = a(202784),
                o = a(323265),
                i = a(51525),
                s = a(951790),
                l = a(711535),
                r = a(280947);
            function c(e) {
                const { onNavigate: t, passthroughOcfScreenProps: a, subtask: c, subtaskId: d, updateFlow: u } = e,
                    p = new URLSearchParams(c.url.split("?")[1]),
                    m = p.get("publicKey"),
                    k = p.get("webKey") || m,
                    h = p.get("mobileKey") || m,
                    _ = p.get("data") || void 0,
                    b = "true" === p.get("verifyOnChallengeCompleted"),
                    g = p.get("flowToken") || "",
                    f = (e) => {
                        o.ZP.isWebView() ? s.Z.openApp(e) : (u(d, { completion_deeplink: e, link: c.next_link.link_id }), t(c.next_link));
                    },
                    y = (e) => {
                        u(d, { completion_deeplink: e, link: c.fail_link.link_id }), t(c.fail_link);
                    };
                return k && h && !(b && "" === g) ? n.createElement(r.Z, a, n.createElement(l.default, { data: _, flowToken: g, mobileKey: h, onChallengeCompleted: f, onChallengeFailed: y, shouldVerifyAfterChallengeCompleted: b, webKey: k })) : ((0, i.vv)(), null);
            }
        },
        929378: (e, t, a) => {
            a.d(t, { Z: () => l, t: () => s });
            var n = a(323265);
            const o = "arkose-subtask",
                i = "arkose",
                s = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                l = {
                    loadIframe: (e, t, a, s) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: n.ZP.osString(), arkose_keys: { mobile: a, web: s } }] }, element: i, page: o });
                    },
                    loadIframeFailed: (e, t, a, s) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: n.ZP.osString(), arkose_keys: { mobile: a, web: s } }] }, element: i, page: o });
                    },
                    completeChallenge: (e, t, a, s, l) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: n.ZP.osString(), challenge_type: a, arkose_keys: { mobile: s, web: l } }] }, element: i, page: o });
                    },
                    suppressedChallenge: (e, t, a, l) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.passive, os: n.ZP.osString(), arkose_keys: { mobile: a, web: l } }] }, element: i, page: o });
                    },
                    shownChallenge: (e, t, a, l) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.interactive, os: n.ZP.osString(), arkose_keys: { mobile: a, web: l } }] }, element: i, page: o });
                    },
                };
        },
        711535: (e, t, a) => {
            a.r(t), a.d(t, { ArkoseSecurityChallenge: () => f, default: () => y });
            var n = a(202784),
                o = a(325686),
                i = a(392237),
                s = a(167630),
                l = a(323265),
                r = a(443781),
                c = a(51525),
                d = a(163889),
                u = a(951790),
                p = a(142253),
                m = a(725516),
                k = a(125363),
                h = a(390387),
                _ = a(929378),
                b = a(668214),
                g = a(118823);
            function f(e) {
                const { location: t, onChallengeFailed: a } = e,
                    [b, g] = n.useState(!0),
                    [f, y] = n.useState(!1),
                    { featureSwitches: A } = n.useContext(r.rC),
                    T = (0, m.z)(),
                    L = (0, k.v9)(h.OW),
                    N = n.useRef(null),
                    P = n.useRef(null),
                    $ = w(t, "publicKey") ?? "",
                    B = e.mobileKey || w(t, "mobileKey") || $,
                    M = e.webKey || w(t, "webKey") || $,
                    O = e.data || w(t, "data"),
                    F = B ? A.getStringValue(B) : "",
                    z = M ? A.getStringValue(M) : "",
                    W = e.shouldVerifyAfterChallengeCompleted || Boolean(t?.query?.verifyOnChallengeCompleted) || !1,
                    K = e.flowToken || w(t, "flowToken") || "",
                    R = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                    V = l.ZP.isWebView() || !("function" == typeof e.onChallengeCompleted),
                    D = V ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : R[i.default.theme.paletteName],
                    q = n.useMemo(() => V || window.innerWidth < E, [V]),
                    [j, H] = n.useState(q ? I : S),
                    [Q, J] = n.useState(q ? v : E),
                    [U, G] = n.useState(_.t.passive),
                    X = n.useMemo(() => (q ? Math.min(window.innerWidth / v, window.innerHeight / I) : 1), [q]),
                    Y = t?.query?.guestId,
                    ee = n.useMemo(() => (V && "string" == typeof Y ? Y : V ? "" : L || ""), [V, Y, L]);
                n.useEffect(() => {
                    N.current = (0, p.Z)({ name: "arkose-challenge-load" });
                }, []);
                const te = (t) => {
                        V ? u.Z.openApp(t) : e.onChallengeCompleted(t);
                    },
                    ae = n.useRef(() => {});
                (ae.current = function (t) {
                    if ("string" == typeof t.data)
                        try {
                            const a = JSON.parse(t.data);
                            switch (a.eventId) {
                                case "challenge-suppressed":
                                    _.Z.suppressedChallenge(T, ee, B, M), G(_.t.passive);
                                    break;
                                case "challenge-shown":
                                    _.Z.shownChallenge(T, ee, B, M), G(_.t.interactive), g(!1);
                                    break;
                                case "challenge-complete": {
                                    _.Z.completeChallenge(T, ee, U, B, M), P.current?.end({ endMessage: `mobile key:${B}, web key:${M}, challenge type: ${U}` }), (P.current = null);
                                    const t = `${C}?access_token=${a.payload.sessionToken}`,
                                        n = a.payload.sessionToken;
                                    W
                                        ? e
                                              .verifyIdentifier({ arkose_access_token: n, flow_token: K })
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
                                    H(a.payload.frameHeight), J(a.payload.frameWidth);
                            }
                        } catch (e) {
                            (0, d.ZP)(e);
                        }
                }),
                    n.useEffect(() => {
                        function e(...e) {
                            ae.current(...e);
                        }
                        return (
                            window.addEventListener("message", e, !1),
                            () => {
                                window.removeEventListener("message", e, !1);
                            }
                        );
                    }, []);
                const ne = n.useRef(() => {});
                (ne.current = function () {
                    _.Z.loadIframeFailed(T, ee, B, M), V ? u.Z.openApp(x) : a(x);
                }),
                    n.useEffect(() => {
                        if (f) return;
                        const e = setTimeout(() => {
                            ne.current();
                        }, 1e4);
                        return () => {
                            clearTimeout(e);
                        };
                    }, [f]);
                const oe = !F || !z;
                n.useEffect(() => {
                    oe && (0, c.vv)();
                }, [oe]);
                let ie = null;
                return (
                    (b || oe) && (ie = n.createElement(s.Z, { style: Z.spinner })),
                    n.createElement(
                        o.Z,
                        { style: Z.wrapper },
                        ie,
                        n.createElement("iframe", {
                            height: j,
                            id: "arkoseFrame",
                            onLoad: () => {
                                y(!0), N.current?.end({ endMessage: `mobile key:${B}, web key:${M}` }), (N.current = null), (P.current = (0, p.Z)({ name: "arkose-challenge-complete" })), _.Z.loadIframe(T, ee, B, M);
                            },
                            src: [q ? `https://iframe.arkoselabs.com/${F}/index.html?theme=${D}` : `https://iframe.arkoselabs.com/${z}/index.html?theme=${D}`, O && `&data=${O}`].filter(Boolean).join(""),
                            style: { MozTransform: `scale(${X})`, OTransform: `scale(${X})`, WebkitTransform: `scale(${X})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" },
                            title: "arkoseFrame",
                            width: Q,
                        }),
                    )
                );
            }
            const y = (0, b.Z)().propsFromActions(() => ({ verifyIdentifier: g.if }))(f),
                Z = i.default.create((e) => ({ wrapper: { backgroundColor: e.colors.white }, spinner: { alignSelf: "center", height: "100%" } }));
            function w(e, t) {
                const a = e?.query;
                if (a) {
                    const e = a[t];
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
        748604: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(807896),
                o = a(202784),
                i = a(114777),
                s = a(146361);
            const l = o.memo((e) => o.createElement(i.Z, (0, n.Z)({}, e, { ocfModule: s.Z })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-0564e869.6b3a450a.js.map
