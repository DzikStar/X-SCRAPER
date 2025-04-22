"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TV-b085b550"],
    {
        622333: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                a = n(325686),
                o = n(167630),
                l = n(392237),
                i = n(674132);
            const c = n.n(i)().ffde2fdc,
                s = l.default.create((e) => ({ spinner: { alignItems: "center", marginVertical: "30px" } })),
                d = () => r.createElement(a.Z, { style: s.spinner }, r.createElement(o.Z, { "aria-label": c }));
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => y, default: () => x });
            n(571372);
            var r = n(202784),
                a = n(386802),
                o = n(108362),
                l = n(392237),
                i = n(674132),
                c = n.n(i),
                s = n(187669),
                d = n(449067),
                u = n(38293),
                m = n(231035),
                p = n(652904),
                f = n(952793),
                g = n(163889),
                h = n(725516);
            const E = c().ba929da8,
                b = c().d203e242;
            function y(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = r.useContext(a.Z),
                    l = (0, f.hC)("responsive_web_report_page_not_found");
                return (
                    (0, s.q)(() => {
                        l && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(p.Z, null, r.createElement(d.Z.Configure, { backLocation: "/", documentTitle: E, title: b }), r.createElement(o.Z, { style: n && C.modal }, r.createElement(m.Z, null)), r.createElement(u.Z, { title: E, withMeta: !1 }))
                );
            }
            const C = l.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                x = (0, h.Z)(y, { page: "not_found" });
        },
        634278: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var r = n(202784),
                a = n(325686);
            const o = () => r.createElement(a.Z, null);
        },
        225287: (e, t, n) => {
            n.r(t), n.d(t, { TVCookieCompliance: () => h, default: () => b });
            var r = n(202784),
                a = n(392237),
                o = n(674132),
                l = n.n(o),
                i = n(602737),
                c = n(91946),
                s = n(686010),
                d = n(6116),
                u = n(952793),
                m = n(721645);
            const p = l().d8817e36,
                f = l().b9288ee6,
                g = l().i1390ec2,
                h = ({ history: e }) => {
                    const { acceptAllCookies: t, refuseNonEssentialCookies: n } = (0, d.O)(),
                        a = r.useCallback(
                            (t) => () => {
                                t(), e.goBack();
                            },
                            [e],
                        ),
                        o = (0, u.wW)("tv_app_samsung_exit_configuration"),
                        h = r.useCallback(() => {
                            (0, m.sN)({ samsungExitConfiguration: o });
                        }, [o]);
                    return r.createElement(s.Z, { "aria-label": void 0, name: "tv-cookie-compliance", onEscapeOrBack: h, role: "text", style: E.container }, r.createElement(c.Kh, { size: "title3", style: E.primaryText }, g), r.createElement(c.Kh, { size: "body", style: E.secondaryText }, r.createElement(l().I18NFormatMessage, { $i18n: "ffe014fd" }, r.createElement(c.Kh, { size: "body", style: E.linkText }, "https://x.com/rules-and-policies/x-cookies."))), r.createElement(i.K, { autoFocus: !0, name: "tv-cookie-compliance-accept-button", onPress: a(t) }, p), r.createElement(i.K, { name: "tv-cookie-compliance-refuse-button", onPress: a(n) }, f));
                },
                E = a.default.create((e) => ({ container: { margin: "auto", width: 600 * e.scaleMultiplier, maxHeight: 500 * e.scaleMultiplier, display: "flex", flexDirection: "column", gap: e.spaces.space16 }, primaryText: { width: "100%", textAlign: "center", color: e.colors.text }, secondaryText: { color: e.colors.gray700 }, linkText: { color: e.colors.link } })),
                b = h;
        },
        568024: (e, t, n) => {
            n.r(t), n.d(t, { TVHome: () => q, default: () => O });
            n(543673), n(240753), n(128399), n(136728);
            var r = n(202784),
                a = n(396342),
                o = n(325686),
                l = n(879891),
                i = n(392237),
                c = n(674132),
                s = n.n(c),
                d = n(2138),
                u = n(516951),
                m = n(187669),
                p = n(290402),
                f = n(363047),
                g = n(524483),
                h = n(902641),
                E = n(273413),
                b = n(944800),
                y = n(602737),
                C = n(91946),
                x = n(305332),
                v = n(721152),
                w = n(479890),
                Z = n(183822),
                k = n(575626),
                T = n(442128),
                B = n(873930),
                _ = n(952793),
                S = n(293115),
                P = n(87063),
                I = n(125363),
                $ = n(903558),
                V = n(682461),
                M = n(673932),
                F = n(721645);
            const A = s().g61ed8a4,
                L = s().deaf5b16,
                R = s().gea6cc1a,
                z = s().hafe83ec,
                N = s().b2ec74fe,
                D = s().cfd2f35e,
                W = (e) => {
                    const t = e.tv?.home;
                    return t;
                },
                q = ({ history: e }) => {
                    const t = Boolean(e.location.query?.refresh),
                        n = (0, _.hC)("responsive_web_messages_home_refresh_enabled"),
                        i = (0, I.v9)(W),
                        c = (0, I.I0)(),
                        { direction: s } = (0, l.Z)(),
                        q = "rtl" === s,
                        O = r.useMemo(() => (0, d.Z)(() => c((0, V.L8)()), 2e3, { leading: !0, trailing: !1 }), [c]);
                    (0, m.q)(() => {
                        if (!i?.content?.length || t || n) {
                            const t = new URLSearchParams(e.location.search);
                            t.delete("refresh"), e.replace(`${e.location.pathname}?${t.toString()}`), c($.eX.tvHomeReload()), O();
                        }
                    }),
                        r.useEffect(
                            () => (
                                document.addEventListener("android-on-resume", O),
                                document.addEventListener("resume", O),
                                function () {
                                    document.removeEventListener("android-on-resume", O), document.removeEventListener("resume", O);
                                }
                            ),
                            [O],
                        );
                    const K = r.useCallback(
                            (t, n) => {
                                c($.eX.playerOpen(t));
                                const r = n ? Math.floor(n / 1e3) : void 0;
                                e.push((0, M.X5)(t, r));
                            },
                            [c, e],
                        ),
                        U = r.useCallback(
                            (e) => {
                                let t = !1;
                                switch (e.key) {
                                    case "ArrowUp":
                                        (0, a.setFocus)(`${k.sN}.${M.rQ}.${w.U}`), (t = !0);
                                        break;
                                    case "ArrowLeft":
                                        q || ((0, a.setFocus)(`${k.sN}.${k.TZ}`), (t = !0));
                                        break;
                                    case "ArrowRight":
                                        q && ((0, a.setFocus)(`${k.sN}.${k.TZ}`), (t = !0));
                                }
                                return t;
                            },
                            [q],
                        ),
                        j = r.useCallback(() => {
                            e.push(f.sH);
                        }, [e]),
                        { closeModal: Q, openModal: X } = (0, g.N)(),
                        G = (0, T.Z)(),
                        J = r.useCallback(
                            (e) => {
                                X({ primaryText: R, secondaryText: z, primaryAction: { buttonText: N, onClick: e }, secondaryAction: { buttonText: D, onClick: Q } });
                            },
                            [Q, X],
                        ),
                        { isVizioTV: Y } = (0, b.y)(),
                        ee = Y,
                        te = (0, _.wW)("tv_app_samsung_exit_configuration"),
                        ne = r.useCallback(() => {
                            const e = () => (0, F.sN)({ unhandledCallback: G, samsungExitConfiguration: te });
                            ee ? J(e) : e();
                        }, [G, te, ee, J]),
                        { clearVoiceHandlers: re, registerVoiceHandlers: ae } = (0, h.B)();
                    r.useEffect(
                        () => (
                            ae({ onupdatestate: () => E.E.Home }),
                            function () {
                                re();
                            }
                        ),
                        [re, ae],
                    );
                    const oe = r.useCallback(() => (O(), !0), [O]),
                        le = r.useMemo(() => r.createElement(o.Z, { style: H.somethingWentWrongContainer }, r.createElement(C.Kh, { color: "white", size: "body", style: H.marginBottom12 }, A), r.createElement(y.K, { autoFocus: !0, name: "tv-home-retry-button", onPress: oe, style: H.retryButton }, L)), [oe]),
                        ie = r.useCallback(() => !1, []),
                        ce = (0, B.Z)(),
                        se = r.useCallback(() => r.createElement(x.Z, { autoFocus: !0, categories: i?.content || [], handleNoriginArrowPress: ie, name: "tv-home-content", onArrowPress: U, onSelectVideo: K, playVideoPreview: !ce, returnToFirstElementOnEscape: !0 }), [U, ie, K, i?.content, ce]);
                    return r.createElement(Z.Z, { autoFocus: !1, onEscapeOrBack: ne, preferredChildName: "tv-home-content" }, r.createElement(S.nO, { namespace: { page: "home" } }, r.createElement(o.Z, { style: H.root, testID: "tv-home-container" }, r.createElement(v.o, { onPress: j }), r.createElement(o.Z, { style: H.content }, i?.status === P.Z.FAILED ? le : r.createElement(p.Z, { fetchStatus: i.status, onRequestRetry: u.Z, render: se, retryable: !1 })))));
                },
                H = i.default.create((e) => ({ root: { height: "100%", paddingStart: e.spaces.space16, paddingTop: e.spaces.space24 }, content: { flex: 1, overflow: "hidden" }, somethingWentWrongContainer: { justifyContent: "center", alignItems: "center", height: "100%" }, marginBottom12: { marginBottom: e.spaces.space12 }, retryButton: { width: `calc(${e.spaces.space64} * 2)` } })),
                O = q;
        },
        456195: (e, t, n) => {
            n.r(t), n.d(t, { TVLogin: () => R, default: () => N });
            var r = n(202784),
                a = n(325686),
                o = n(468811),
                l = n.n(o),
                i = n(537392),
                c = n(392237),
                s = n(731708),
                d = n(154003),
                u = n(429371),
                m = n(721266),
                p = n(674132),
                f = n.n(p),
                g = n(520913),
                h = n(187669),
                E = n(834048),
                b = n(686010),
                y = n(467537),
                C = (n(442128), n(873930)),
                x = n(952793),
                v = n(673932),
                w = n(721645),
                Z = n(105788),
                k = n(668214),
                T = n(682461);
            const B = (e) => {
                    const t = e.tv?.login;
                    return t;
                },
                _ = (0, k.Z)()
                    .propsFromState(() => ({ tvLogin: B }))
                    .propsFromActions(() => ({ fetchTVPinCodeGraphQL: T.qU, fetchDeviceIsVerified: T.Qj }))
                    .withAnalytics({ page: "tv-login" }),
                S = f().f9fa40c8,
                P = f().gb6a7f62,
                I = f().ge19602a,
                $ = f().dd4ec2e8,
                V = f().f4d7084c,
                M = f().ebc1accc,
                F = f().a4742bc0,
                A = f().f260dea2,
                L = Z.X.getAndroidDeviceId() || l().v4(),
                R = ({ fetchDeviceIsVerified: e, fetchTVPinCodeGraphQL: t, history: n, tvLogin: o }) => {
                    const l = (0, i.Zx)(({ windowWidth: e }) => ((e) => (e >= 3840 ? "large" : e >= 1920 ? "normal" : e >= 1280 ? "small" : "xSmall"))(e));
                    r.useEffect(() => {
                        c.default.theme.scale !== l && c.default.setScale(l);
                    }, [l]);
                    const p = r.useRef(null),
                        Z = r.useRef(60),
                        k = (0, C.Z)(),
                        T = (0, x.hC)("tv_app_qrcode_login_enabled");
                    (0, h.q)(() => {
                        t?.({ deviceId: L });
                    }),
                        r.useEffect(() => {
                            o?.pinCode &&
                                !p.current &&
                                (p.current = setInterval(() => {
                                    Z.current < 1 ? clearInterval(p.current) : (e?.({ deviceId: L, pinCode: o?.pinCode }), (Z.current = Z.current - 1));
                                }, 1e4));
                        }, [e, n, o?.deviceIsVerified, o?.pinCode]),
                        r.useEffect(() => {
                            o?.pinCodeExpired && p.current && (clearInterval(p.current), (p.current = null));
                        }, [o?.pinCodeExpired]),
                        r.useEffect(() => {
                            o?.deviceIsVerified && (clearInterval(p.current), window?.location && (window.location.href = `${window.location.origin}${v.bb}`));
                        }, [o?.deviceIsVerified]),
                        r.useEffect(
                            () => () => {
                                p.current && (clearInterval(p.current), (p.current = null));
                            },
                            [],
                        );
                    const B = r.useCallback(() => {
                            p.current && (clearInterval(p.current), (p.current = null)), t?.({ deviceId: L });
                        }, [t]),
                        _ = (0, x.wW)("tv_app_samsung_exit_configuration"),
                        R = r.useCallback(() => {
                            (0, w.sN)({ samsungExitConfiguration: _ });
                        }, [_]),
                        N = r.useMemo(() => r.createElement(y.C, { "aria-label": o?.pinCode?.split("").join(". "), focusedStyle: z.focusedPinCode, name: "pinCode", role: "region", style: [z.pinCodeContainer, z.marginBottom16], withBorderStyle: !1 }, r.createElement(s.ZP, { size: "title2", style: z.pinCode }, r.createElement(E.D, { style: z.marginEnd12 }, o?.pinCode?.substring(0, 3)), r.createElement(E.D, { style: z.marginEnd12 }, o?.pinCode?.substring(3, 6)), r.createElement(E.D, null, o?.pinCode?.substring(6, 9)))), [o?.pinCode]),
                        D = T ? V : $;
                    return r.createElement(
                        b.Z,
                        { "aria-label": void 0, autoFocus: !0, name: "login", onEscapeOrBack: R, role: "group", style: z.container, trackChildren: !0 },
                        r.createElement(
                            a.Z,
                            { style: z.innerContainer },
                            r.createElement(g.default, { style: [z.icon, z.marginBottom16] }),
                            r.createElement(y.C, { "aria-label": `${S}. ${D}`, focusedStyle: !k && z.focusedText, name: "loginTitle", role: "region", style: [z.focusableText, z.marginBottom16], withBorderStyle: !1 }, r.createElement(s.ZP, { size: "title1", style: [z.title, z.marginBottom16] }, S), r.createElement(s.ZP, { size: "headline1", style: z.titleSubtext }, D)),
                            !T && r.createElement(y.C, { "aria-label": A, focusedStyle: !k && z.focusedText, name: "signInUrl", role: "region", style: [z.focusableText, z.marginBottom16], withBorderStyle: !1 }, r.createElement(s.ZP, { size: "title2", style: z.url }, A)),
                            o?.pinCodeExpired ? r.createElement(r.Fragment, null, r.createElement(y.C, { "aria-label": P, focusedStyle: !k && z.focusedText, name: "pinCodeExpired", role: "region", style: [z.focusableText, z.marginBottom16] }, r.createElement(s.ZP, { size: "headline2", style: z.pinCodeExpiredText }, P)), r.createElement(y.C, { "aria-label": I, name: "generate-pin", onPress: B, role: "button", style: [z.interactiveView, z.marginBottom16] }, r.createElement(d.ZP, null, I))) : null,
                            o?.pinCode ? (T ? r.createElement(a.Z, { style: z.authContainer }, r.createElement(y.C, { "aria-label": M, focusedStyle: k && z.hideBorder, name: "scanQrCode", role: "img", style: z.qrcode }, r.createElement(s.ZP, { size: "headline2", style: [z.titleSubtext, z.marginBottom16] }, M), r.createElement(u.Z, { dimension: 340 * c.default.theme.scaleMultiplier, link: ((W = o.pinCode), `${window.origin}/i/flow/device_login?value=${W}`) })), r.createElement(m.Z, { axis: "y", size: "space16", style: z.spacer }), r.createElement(a.Z, { style: z.enterPinCodeContainer }, r.createElement(y.C, { "aria-label": void 0, focusedStyle: !k && z.focusedText, name: "signInUrl", role: "region", style: [z.focusableText, z.marginBottom16], withBorderStyle: !1 }, r.createElement(s.ZP, { size: "headline2", style: [z.titleSubtext, z.marginBottom16] }, F), r.createElement(s.ZP, { size: "title2", style: z.url }, A)), N)) : N) : null,
                            r.createElement(a.Z, { style: z.marginBottom16 }, r.createElement(y.C, { "aria-label": void 0, focusedStyle: !k && z.focusedText, name: "privacyPolicy", role: "region", style: z.focusableText, withBorderStyle: !1 }, r.createElement(s.ZP, null, r.createElement(f().I18NFormatMessage, { $i18n: "baed64e7" }, r.createElement(s.ZP, { style: z.url }, f().h797e380({ url: "x.com/privacy" }))))), r.createElement(y.C, { "aria-label": void 0, focusedStyle: !k && z.focusedText, name: "termsOfService", role: "region", style: z.focusableText, withBorderStyle: !1 }, r.createElement(s.ZP, null, r.createElement(f().I18NFormatMessage, { $i18n: "a982261d" }, r.createElement(s.ZP, { style: z.url }, f().cf8eec84({ url: "x.com/tos" })))))),
                            null,
                        ),
                    );
                    var W;
                },
                z = c.default.create((e) => ({ container: { textAlign: "center", height: "100vh", width: "100vw" }, marginBottom16: { marginBottom: e.spaces.space16 }, marginEnd12: { marginEnd: e.spaces.space12 }, innerContainer: { padding: e.spaces.space16, margin: "auto", width: "100vw", maxWidth: 600 * e.scaleMultiplier, height: "100vh", maxHeight: 8e3 * e.scaleMultiplier, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }, icon: { color: e.colors.text, height: e.spaces.space64, width: e.spaces.space64 }, title: { color: e.colors.text }, titleSubtext: { color: e.colors.gray700 }, url: { color: e.colors.blue300 }, pinCodeContainer: { borderRadius: e.borderRadii.small, borderStyle: "solid", borderColor: e.colors.blue300, borderWidth: e.borderWidths.small, width: "fit-content" }, pinCodeExpiredText: { color: e.colors.red700 }, pinCode: { display: "flex", flexDirection: "row", margin: e.spaces.space16, letterSpacing: e.spaces.space8 }, interactiveView: { borderRadius: e.borderRadii.infinite }, authContainer: { display: "flex", flexDirection: "row", marginBottom: e.spaces.space32 }, hideBorder: { borderColor: "transparent", outlineColor: "transparent" }, qrcode: { marginEnd: e.spaces.space32, width: 340 * e.scaleMultiplier + "px" }, spacer: { backgroundColor: e.colors.white }, enterPinCodeContainer: { marginStart: e.spaces.space32, width: 330 * e.scaleMultiplier + "px", textAlign: "center", alignItems: "center", justifyContent: "center" }, focusableText: { borderRadius: e.borderRadii.small, padding: e.spaces.space8 }, focusedText: { backgroundColor: "rgba(255,255,255,0.15)", outlineStyle: "none" }, focusedPinCode: { boxShadow: `${e.colors.blue300} 0px 0 8px` } })),
                N = _(R);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TV-b085b550.9ca3826a.js.map
