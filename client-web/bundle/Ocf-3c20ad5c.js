"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-3c20ad5c"],
    {
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(553093),
                i = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: s, requestParams: l, timeline: r } = o || {};
                return r?.id ? (0, i.R)(r.id) : (0, i.Z)({ timelineId: s || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: l || {} });
            };
        },
        588452: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            n(136728);
            var a = n(202784);
            class i extends a.Component {
                componentDidMount() {
                    const { code: e, error: t, scope: n, state: a } = this.props.location.query,
                        i = { callback_url: `https://${window.location.hostname}${window.location.pathname}`, code: e, error: t, scope: n, state: a },
                        o = window.opener;
                    o ? (o.postMessage(i, `https://${window.location.hostname}`), window.close(), o.focus()) : this.props.history.push("/");
                }
                render() {
                    return null;
                }
            }
        },
        699398: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(807896),
                i = n(202784),
                o = n(325686),
                s = n(779610),
                l = n(593866),
                r = n(731708),
                c = n(392237),
                d = n(804027),
                u = n(227991),
                p = n(663951),
                m = n(50439),
                k = n(280947),
                h = n(975364);
            const _ = "ActionListNextButton",
                b = "ActionListSkipButton";
            function g({ actionItem: e, link: t, onNavigate: n, subtaskId: o, subtaskInputs: l, updateFlow: r }) {
                const c = e.action_data.link_data,
                    d = i.useCallback(
                        (e) => {
                            e.preventDefault(), r(o, { link: t.link_id }), n(t);
                        },
                        [t, n, o, r],
                    );
                return i.createElement(s.Z, (0, a.Z)({ description: i.createElement(h.Z, (0, a.Z)({}, c.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: l })), label: i.createElement(h.Z, (0, a.Z)({}, c.text, { size: "headline2", subtaskInputs: l, text: c.text?.text ?? c.link.label })), link: "#", onPress: d, role: "link" }, Z(e.action_data.link_data.icon)));
            }
            function f({ actionItem: e, onNavigate: t, subtaskInputs: n }) {
                return i.createElement(s.Z, (0, a.Z)({ description: i.createElement(h.Z, (0, a.Z)({}, e.action_data.text_data.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: n })), label: i.createElement(h.Z, (0, a.Z)({}, e.action_data.text_data.text, { onNavigate: t, size: "headline2", subtaskInputs: n })), role: null }, Z(e.action_data.text_data.icon)));
            }
            function y({ actionItems: e, onNavigate: t, subtaskInputs: n }) {
                const o = e.map((e) => {
                    const o = "text" === e.action_type ? e.action_data.text_data : e.action_data.link_data;
                    return { label: i.createElement(h.Z, (0, a.Z)({}, o.text, { onNavigate: t, subtaskInputs: n, text: "text" === e.action_type ? e.action_data.text_data.text.text : (e.action_data.link_data.text?.text ?? e.action_data.link_data.link.label), weight: "bold" })), description: o.detail_text ? i.createElement(h.Z, (0, a.Z)({}, o.detail_text, { color: "gray700", style: w.bulletListDescription, subtaskInputs: n })) : null, decoration: o.icon ? i.createElement(m.Z, { icon: o.icon.icon, style: w.bulletIcon }) : null };
                });
                return i.createElement(l.Z, { items: o });
            }
            function Z(e) {
                return { thumbnail: e ? i.createElement(r.ZP, { size: "headline2", style: w.icon }, i.createElement(m.Z, { icon: e.icon })) : null, thumbnailSize: "medium" };
            }
            const w = c.default.create((e) => ({ icon: { display: "block", minWidth: e.spaces.space36, marginEnd: e.spaces.space20, textAlign: "center" }, bulletIcon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text, marginEnd: e.spaces.space24, justifyContent: "center", overflow: "hidden" }, bulletListDescription: { marginTop: e.spaces.space4 } })),
                C = function (e) {
                    const {
                        onNavigate: t,
                        passthroughOcfScreenProps: n,
                        subtask: { action_items: s, header: l, next_link: r, skip_link: c, style: m },
                        subtaskId: h,
                        subtaskInputs: Z,
                        updateFlow: w,
                    } = e;
                    return i.createElement(
                        k.Z,
                        (0, a.Z)({}, n, {
                            appBarPosition: "full_bleed_top" === l?.header_image?.image_type ? "absolute" : void 0,
                            appBarWithBackground: "full_bleed_top" !== l?.header_image?.image_type,
                            footer: i.createElement(u.ZP, {
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
                            header: i.createElement(p.Z, { header: l, onNavigate: t, subtaskInputs: Z, withHeaderImage: !0 }),
                            hideLogo: "full_bleed_top" === l?.header_image?.image_type,
                            providePadding: !0,
                        }),
                        m === d.R8.BulletList
                            ? i.createElement(y, (0, a.Z)({}, e, { actionItems: s }))
                            : i.createElement(
                                  o.Z,
                                  { role: "list" },
                                  s.map((t, n) => i.createElement(o.Z, { key: n, role: "listitem" }, "text" === t.action_type ? i.createElement(f, (0, a.Z)({}, e, { actionItem: t })) : i.createElement(g, (0, a.Z)({}, e, { actionItem: t, link: t.action_data.link_data.link })))),
                              ),
                    );
                };
        },
        110092: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                o = n(190286),
                s = n(555079),
                l = n(975364);
            class r extends i.Component {
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
                        r = t.primary_text ? i.createElement(l.Z, (0, a.Z)({}, t.primary_text, { id: s.Q_, onNavigate: e, subtaskInputs: n })) : void 0,
                        c = t.secondary_text ? i.createElement(l.Z, (0, a.Z)({}, t.secondary_text, { onNavigate: e, subtaskInputs: n })) : void 0,
                        { cancel_link: d, next_link: u } = t,
                        p = d && d.label;
                    return i.createElement(o.Z, { cancelButtonLabel: p, confirmButtonLabel: u && u.label, headline: r, onCancel: this._handleCancel, onConfirm: this._handleConfirm, onMaskClick: this._handleCancel, text: c, withCancelButton: !!p });
                }
            }
            const c = r;
        },
        125167: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var a = n(807896),
                i = n(202784),
                o = n(325686),
                s = n(530525),
                l = n(439592),
                r = n(946847),
                c = n(912021),
                d = n(516951),
                u = n(443781),
                p = n(555079),
                m = n(280947),
                k = n(975364),
                h = n(153925);
            class _ extends i.Component {
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
                            const r = e.primary_image_url ? i.createElement(s.Z, { "aria-label": "", aspectMode: l.Z.exact(1), image: e.primary_image_url || "" }) : null,
                                c = e.secondary_text ? i.createElement(k.Z, (0, a.Z)({}, e.secondary_text, { onNavigate: t, subtaskInputs: n })) : null;
                            return i.createElement(o.Z, null, r, c);
                        })),
                        (this.state = { downloadLinkClicked: !1 });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: n, subtaskInputs: o } = this.props,
                        { downloadLinkClicked: s } = this.state,
                        l = n.primary_text ? i.createElement(k.Z, (0, a.Z)({}, n.primary_text, { id: p.Q_, onNavigate: e, subtaskInputs: o })) : null,
                        c = !s || !n.primary_action_text_after_click,
                        u = (s && n.primary_action_text_after_click) || n.primary_action_link.label,
                        _ = n.detail_text ? i.createElement(k.Z, (0, a.Z)({}, n.detail_text, { onNavigate: e, subtaskInputs: o })) : null;
                    return i.createElement(m.Z, (0, a.Z)({ hideLogo: !0 }, t), i.createElement(r.Z, { actionLabel: u || "", actionType: (0, h.$1)(n.primary_action_style), footer: _, headline: l, onAction: c ? this._handlePrimaryActionClick : d.Z, onClose: d.Z, onSecondaryAction: this._handleSecondaryActionClick, secondaryActionLabel: (n.secondary_action_link || {}).label, secondaryActionType: n.secondary_action_style && (0, h.$1)(n.secondary_action_style), subtext: this._getSubText(n, e, o), withCloseButton: !1 }), this.props.errorDialog);
                }
            }
            _.contextType = u.rC;
        },
        85779: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                i = n(323265),
                o = n(51525),
                s = n(951790),
                l = n(711535),
                r = n(280947);
            function c(e) {
                const { onNavigate: t, passthroughOcfScreenProps: n, subtask: c, subtaskId: d, updateFlow: u } = e,
                    p = new URLSearchParams(c.url.split("?")[1]),
                    m = p.get("publicKey"),
                    k = p.get("webKey") || m,
                    h = p.get("mobileKey") || m,
                    _ = p.get("data") || void 0,
                    b = "true" === p.get("verifyOnChallengeCompleted"),
                    g = p.get("flowToken") || "",
                    f = (e) => {
                        i.ZP.isWebView() ? s.Z.openApp(e) : (u(d, { completion_deeplink: e, link: c.next_link.link_id }), t(c.next_link));
                    },
                    y = (e) => {
                        u(d, { completion_deeplink: e, link: c.fail_link.link_id }), t(c.fail_link);
                    };
                return k && h && !(b && "" === g) ? a.createElement(r.Z, n, a.createElement(l.default, { data: _, flowToken: g, mobileKey: h, onChallengeCompleted: f, onChallengeFailed: y, shouldVerifyAfterChallengeCompleted: b, webKey: k })) : ((0, o.vv)(), null);
            }
        },
        929378: (e, t, n) => {
            n.d(t, { Z: () => l, t: () => s });
            var a = n(323265);
            const i = "arkose-subtask",
                o = "arkose",
                s = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                l = {
                    loadIframe: (e, t, n, s) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: n, web: s } }] }, element: o, page: i });
                    },
                    loadIframeFailed: (e, t, n, s) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: n, web: s } }] }, element: o, page: i });
                    },
                    completeChallenge: (e, t, n, s, l) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: a.ZP.osString(), challenge_type: n, arkose_keys: { mobile: s, web: l } }] }, element: o, page: i });
                    },
                    suppressedChallenge: (e, t, n, l) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.passive, os: a.ZP.osString(), arkose_keys: { mobile: n, web: l } }] }, element: o, page: i });
                    },
                    shownChallenge: (e, t, n, l) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.interactive, os: a.ZP.osString(), arkose_keys: { mobile: n, web: l } }] }, element: o, page: i });
                    },
                };
        },
        711535: (e, t, n) => {
            n.r(t), n.d(t, { ArkoseSecurityChallenge: () => f, default: () => y });
            var a = n(202784),
                i = n(325686),
                o = n(392237),
                s = n(167630),
                l = n(323265),
                r = n(443781),
                c = n(51525),
                d = n(163889),
                u = n(951790),
                p = n(142253),
                m = n(725516),
                k = n(125363),
                h = n(390387),
                _ = n(929378),
                b = n(668214),
                g = n(118823);
            function f(e) {
                const { location: t, onChallengeFailed: n } = e,
                    [b, g] = a.useState(!0),
                    [f, y] = a.useState(!1),
                    { featureSwitches: A } = a.useContext(r.rC),
                    T = (0, m.z)(),
                    P = (0, k.v9)(h.OW),
                    $ = a.useRef(null),
                    N = a.useRef(null),
                    L = w(t, "publicKey") ?? "",
                    O = e.mobileKey || w(t, "mobileKey") || L,
                    B = e.webKey || w(t, "webKey") || L,
                    M = e.data || w(t, "data"),
                    z = O ? A.getStringValue(O) : "",
                    F = B ? A.getStringValue(B) : "",
                    W = e.shouldVerifyAfterChallengeCompleted || Boolean(t?.query?.verifyOnChallengeCompleted) || !1,
                    K = e.flowToken || w(t, "flowToken") || "",
                    R = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                    V = l.ZP.isWebView() || !("function" == typeof e.onChallengeCompleted),
                    D = V ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : R[o.default.theme.paletteName],
                    q = a.useMemo(() => V || window.innerWidth < E, [V]),
                    [j, H] = a.useState(q ? I : S),
                    [U, Q] = a.useState(q ? v : E),
                    [J, G] = a.useState(_.t.passive),
                    X = a.useMemo(() => (q ? Math.min(window.innerWidth / v, window.innerHeight / I) : 1), [q]),
                    Y = t?.query?.guestId,
                    ee = a.useMemo(() => (V && "string" == typeof Y ? Y : V ? "" : P || ""), [V, Y, P]);
                a.useEffect(() => {
                    $.current = (0, p.Z)({ name: "arkose-challenge-load" });
                }, []);
                const te = (t) => {
                        V ? u.Z.openApp(t) : e.onChallengeCompleted(t);
                    },
                    ne = a.useRef(() => {});
                (ne.current = function (t) {
                    if ("string" == typeof t.data)
                        try {
                            const n = JSON.parse(t.data);
                            switch (n.eventId) {
                                case "challenge-suppressed":
                                    _.Z.suppressedChallenge(T, ee, O, B), G(_.t.passive);
                                    break;
                                case "challenge-shown":
                                    _.Z.shownChallenge(T, ee, O, B), G(_.t.interactive), g(!1);
                                    break;
                                case "challenge-complete": {
                                    _.Z.completeChallenge(T, ee, J, O, B), N.current?.end({ endMessage: `mobile key:${O}, web key:${B}, challenge type: ${J}` }), (N.current = null);
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
                                    H(n.payload.frameHeight), Q(n.payload.frameWidth);
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
                    _.Z.loadIframeFailed(T, ee, O, B), V ? u.Z.openApp(x) : n(x);
                }),
                    a.useEffect(() => {
                        if (f) return;
                        const e = setTimeout(() => {
                            ae.current();
                        }, 1e4);
                        return () => {
                            clearTimeout(e);
                        };
                    }, [f]);
                const ie = !z || !F;
                a.useEffect(() => {
                    ie && (0, c.vv)();
                }, [ie]);
                let oe = null;
                return (
                    (b || ie) && (oe = a.createElement(s.Z, { style: Z.spinner })),
                    a.createElement(
                        i.Z,
                        { style: Z.wrapper },
                        oe,
                        a.createElement("iframe", {
                            height: j,
                            id: "arkoseFrame",
                            onLoad: () => {
                                y(!0), $.current?.end({ endMessage: `mobile key:${O}, web key:${B}` }), ($.current = null), (N.current = (0, p.Z)({ name: "arkose-challenge-complete" })), _.Z.loadIframe(T, ee, O, B);
                            },
                            src: [q ? `https://iframe.arkoselabs.com/${z}/index.html?theme=${D}` : `https://iframe.arkoselabs.com/${F}/index.html?theme=${D}`, M && `&data=${M}`].filter(Boolean).join(""),
                            style: { MozTransform: `scale(${X})`, OTransform: `scale(${X})`, WebkitTransform: `scale(${X})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" },
                            title: "arkoseFrame",
                            width: U,
                        }),
                    )
                );
            }
            const y = (0, b.Z)().propsFromActions(() => ({ verifyIdentifier: g.if }))(f),
                Z = o.default.create((e) => ({ wrapper: { backgroundColor: e.colors.white }, spinner: { alignSelf: "center", height: "100%" } }));
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
            n.r(t), n.d(t, { default: () => l });
            var a = n(807896),
                i = n(202784),
                o = n(114777),
                s = n(146361);
            const l = i.memo((e) => i.createElement(o.Z, (0, a.Z)({}, e, { ocfModule: s.Z })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-3c20ad5c.0fe4722a.js.map
