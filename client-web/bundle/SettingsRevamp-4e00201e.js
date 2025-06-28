"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp-4e00201e"],
    {
        702091: (e, t, a) => {
            a.r(t), a.d(t, { AccountInformation: () => Ye, default: () => Je });
            a(136728);
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                i = a(779610),
                s = a(88307),
                l = a(111677),
                c = a.n(l),
                d = a(443781),
                m = a(652904),
                h = a(240666),
                p = a(293115),
                u = a(725516),
                b = a(316325),
                g = a(688715),
                f = a(530525),
                E = a(439592),
                _ = a(154003),
                y = a(593866),
                Z = a(138099),
                w = a(786998),
                C = a(370006),
                P = a(520913),
                A = a(323265),
                x = a(668214);
            const k = (0, x.Z)().withAnalytics();
            var v = a(392237);
            const S = v.default.create((e) => ({ headerIcon: { color: e.colors.brandColor, height: e.spacesPx.space28, width: e.spacesPx.space28 }, curvedHeader: { clipPath: "ellipse(100% 100% at 38% 0%)", backgroundColor: e.colors.teal600, paddingBottom: e.spacesPx.space40, width: "100%" }, footer: { width: "100%", padding: e.spacesPx.space24 }, image1: { aspectRatio: "1.31", height: "100%", width: "100%", maxHeight: "249px", maxWidth: "327px" }, image2: { aspectRatio: "1.88", height: "100%", width: "100%", maxHeight: "175px", maxWidth: "329px" }, topContent: { paddingStart: e.spacesPx.space32, paddingEnd: e.spacesPx.space32 }, learnMoreContainer: { paddingTop: e.spacesPx.space8, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalContent: { paddingTop: e.spacesPx.space28, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalImageContainer: { alignItems: "center", backgroundColor: e.colors.teal0, height: "auto", justifyContent: "center", marginTop: e.spacesPx.space28 }, modalTitle: { paddingBottom: e.spacesPx.space8 }, numberCircle: { alignItems: "center", backgroundColor: e.colors.buttonBlack, borderRadius: e.borderRadii.infinite, height: e.spacesPx.space48, justifyContent: "center", marginEnd: e.spacesPx.space16, width: e.spacesPx.space48 }, scrollable: { flexGrow: 1, flexShrink: 1, overflowY: "auto" }, sheet: { height: "75%", maxHeight: "700px", minHeight: "480px", overflowY: "auto" }, stepListContainer: { paddingTop: e.spacesPx.space16, paddingEnd: e.spacesPx.space28 }, stepTitle: { paddingBottom: e.spacesPx.space2 } })),
                D = "https://abs.twimg.com/images/automation-onboard-1_s.png",
                L = "https://abs.twimg.com/images/automation-onboard-2_s.png",
                F = [
                    {
                        aspectRatio: 1.31,
                        default: D,
                        variants: [
                            { uri: D, height: 249, width: 327 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-1_m.png", height: 498, width: 653 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-1_l.png", height: 747, width: 980 },
                        ],
                    },
                    {
                        aspectRatio: 1.88,
                        default: L,
                        variants: [
                            { uri: L, height: 175, width: 329 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_m.png", height: 350, width: 658 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_l.png", height: 525, width: 987 },
                        ],
                    },
                ],
                T = (0, g.ju)("https://help.x.com/rules-and-policies/twitter-automation"),
                I = (0, g.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                M = c().g2a9bd3e,
                U = c().dd9b3aae,
                O = c().b80bdc40,
                B = c().a01ac9b6,
                N = c().b989e1fe,
                z = n.createElement(c().I18NFormatMessage, { $i18n: "j31f2f97" }, n.createElement(r.ZP, { color: "text", link: T, weight: "bold", withUnderline: !0 }, c().a18d6a7d)),
                H = c().i2d599aa,
                V = [
                    { title: c().gd5bed72, description: c().g6d44432 },
                    { title: c().e20a69e8, description: c().d2f88358 },
                    { title: c().e427f632, description: c().a4d7cffa },
                ],
                R = c().j24c37b2;
            class q extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = () => n.createElement(o.Z, { style: S.curvedHeader }, n.createElement(o.Z, { style: [S.topContent, { paddingTop: A.ZP.isMobileOS() ? "26px" : "36px" }] }, n.createElement(r.ZP, { color: "white", size: "title2", weight: "bold" }, M)))),
                        (this._renderAdaptiveImageFromSource = (e) => {
                            const t = F[e];
                            return n.createElement(f.Z, { "aria-label": "", aspectMode: E.Z.exact(t.aspectRatio), customVariants: t.variants, image: t.default });
                        }),
                        (this._renderContent = () => n.createElement(o.Z, null, n.createElement(o.Z, { style: S.modalContent }, n.createElement(r.ZP, { size: "title4", style: S.modalTitle, weight: "heavy" }, U), n.createElement(r.ZP, { color: "gray700", size: "body" }, O)), n.createElement(o.Z, { style: S.modalImageContainer }, n.createElement(o.Z, { style: S.image1 }, this._renderAdaptiveImageFromSource(0))), n.createElement(o.Z, { style: S.modalContent }, n.createElement(r.ZP, { color: "gray700", size: "body" }, B)), n.createElement(o.Z, { style: S.modalImageContainer }, n.createElement(o.Z, { style: S.image2 }, this._renderAdaptiveImageFromSource(1))), n.createElement(o.Z, { style: S.modalContent }, n.createElement(r.ZP, { size: "title4", style: S.modalTitle, weight: "heavy" }, N), n.createElement(r.ZP, { color: "gray700", size: "body" }, z)), n.createElement(o.Z, { style: S.modalContent }, n.createElement(r.ZP, { size: "title4", style: S.modalTitle, weight: "heavy" }, H)), n.createElement(o.Z, { style: S.stepListContainer }, this._renderSteps()), n.createElement(o.Z, { style: S.learnMoreContainer }, n.createElement(r.ZP, { color: "gray700", size: "body" }, this._renderLearnMoreLabel())))),
                        (this._renderFooter = () => n.createElement(o.Z, { style: S.footer }, n.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: this.props.onConfirm, size: "xLarge" }, R))),
                        (this._renderLearnMoreLabel = () => n.createElement(c().I18NFormatMessage, { $i18n: "ed8f77d3" }, n.createElement(r.ZP, { color: "text", link: I, onClick: this.props.onFaqClick, weight: "bold", withUnderline: !0 }, c().e9965c14))),
                        (this._renderStepLabel = (e) => n.createElement(r.ZP, { size: "headline2", style: S.stepTitle, weight: "bold" }, e)),
                        (this._renderStepDecorationBadge = (e) => n.createElement(o.Z, { style: S.numberCircle }, n.createElement(r.ZP, { color: "buttonWhite", size: "headline1", weight: "bold" }, e))),
                        (this._renderSteps = () => {
                            const e = V.map((e, t) => ({ label: this._renderStepLabel(e.title), decoration: this._renderStepDecorationBadge(t + 1), description: e.description }));
                            return n.createElement(y.Z, { items: e });
                        });
                }
                render() {
                    return n.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: this.props.onClose, type: "full", withMask: !0 }, n.createElement(w.Z, { centeredLogo: n.createElement(P.default, { style: S.headerIcon }), leftControl: n.createElement(C.Z, { backButtonType: "close", onClick: this.props.onClose }), withBackground: !0 }), n.createElement(o.Z, { style: A.ZP.isMobileOS() ? null : S.sheet }, n.createElement(o.Z, { style: S.scrollable }, this._renderHeader(), this._renderContent()), this._renderFooter()));
                }
            }
            const $ = k(q),
                j = c().a67dbd0a,
                W = [
                    { title: c().ee78c192, desc: c().c3f35e0c },
                    { title: c().d019b5fa, desc: c().dd04f24e },
                    { title: c().hb0f8bbc, desc: c().g69acc5c },
                ],
                G = c().j24c37b2;
            function Y() {
                return n.createElement(o.Z, { style: S.curvedHeader }, n.createElement(o.Z, { style: [S.topContent, { paddingTop: A.ZP.isMobileOS() ? "26px" : "36px" }] }, n.createElement(r.ZP, { color: "white", size: "title2", weight: "bold" }, j)));
            }
            function J() {
                return n.createElement(c().I18NFormatMessage, { $i18n: "dd040d67" }, n.createElement(r.ZP, { color: "text", link: "https://help.x.com/rules-and-policies/authenticity", weight: "bold", withUnderline: !0 }, c().d313d431));
            }
            function K() {
                return n.createElement(
                    o.Z,
                    null,
                    W.map(({ desc: e, title: t }) => n.createElement(o.Z, { key: t, style: S.modalContent }, n.createElement(r.ZP, { size: "title4", style: S.modalTitle, weight: "heavy" }, t), n.createElement(r.ZP, { color: "gray700", size: "body" }, e))),
                    n.createElement(o.Z, { style: S.learnMoreContainer }, n.createElement(r.ZP, { color: "gray700", size: "body" }, n.createElement(J, null))),
                );
            }
            function Q({ onConfirm: e }) {
                return n.createElement(o.Z, { style: S.footer }, n.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: e, size: "xLarge" }, G));
            }
            const X = function (e) {
                return n.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: e.onClose, type: "full", withMask: !0 }, n.createElement(w.Z, { centeredLogo: n.createElement(P.default, { style: S.headerIcon }), leftControl: n.createElement(C.Z, { backButtonType: "close", onClick: e.onClose }), withBackground: !0 }), n.createElement(o.Z, { style: A.ZP.isMobileOS() ? null : S.sheet }, n.createElement(o.Z, { style: S.scrollable }, n.createElement(Y, null), n.createElement(K, null)), n.createElement(Q, { onConfirm: e.onConfirm })));
            };
            var ee = a(609848),
                te = a(264922),
                ae = a(401388),
                ne = a(71620),
                oe = a(181617),
                re = a(946194),
                ie = a(576025),
                se = a(257166),
                le = a(205253),
                ce = a(390387),
                de = a(38562),
                me = a(919022),
                he = a(312771);
            const pe = (e, t) => {
                    const a = me.ZP.selectViewerUser(e),
                        n = (0, ae.Z)(a) ? he.ZP.LOADED : se.selectFetchStatus(e);
                    return (0, he.h1)(le.qu(e), le.I3(e), n);
                },
                ue = (e) => {
                    const t = (0, de.eV)(e);
                    return t && (0, ie._t)(e, t);
                },
                be = (0, x.Z)()
                    .propsFromState(() => ({ countryName: ue, email: se.selectFirstEmail, fetchStatus: pe, viewerUser: me.ZP.selectViewerUser, managingAccount: oe.MB, phone: se.selectFirstPhoneNumber, ages: le.LJ, birthdate: le.ZS, gender: le.VU, languages: le.VT, languageCode: ce.VT, signupDetails: le.Hb, verificationAccess: re.kD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ne.zr)("SETTINGS_ACCOUNT_INFORMATION_SCREEN"), fetchAccountVerificationAccess: re.$J, fetchDevices: se.fetchDevices, fetchData: le.nJ, fetchPreferences: le.CP, fetchCountryNamesIfNeeded: ie.Po, fetchUserAccountLabel: oe.cs })),
                ge = v.default.create((e) => ({ helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" } })),
                fe = c().f15bfdb4,
                Ee = c().d0a77c9b,
                _e = c().jade381b,
                ye = c().d1f6d336,
                Ze = c().a3841918,
                we = c().f70cd5ee,
                Ce = c().ib6f1694,
                Pe = c().a8d0108e,
                Ae = c().de323650,
                xe = c().b6ab31be,
                ke = c().c21037d0,
                ve = c().h3290872,
                Se = c().d12d42dc,
                De = c().hbd12156,
                Le = c().b7ec04f4,
                Fe = c().f70d5780,
                Te = c().dc62d3c6,
                Ie = c().ad31b476,
                Me = c().a67dbd0a,
                Ue = c().a3db727e,
                Oe = c().i62a03aa,
                Be = c().c119dee8,
                Ne = c().eacf1990,
                ze = c().a3bf1262,
                He = c().bf96fda4,
                Ve = c().d495680e,
                Re = c().h530db16,
                qe = c().d6d80990,
                $e = n.createElement(c().I18NFormatMessage, { $i18n: "ce6f73c7" }, n.createElement(r.ZP, { link: "/settings/account/personalization" }, c().i0d81ddb)),
                je = c().i859a9d4,
                We = { page: "settings", section: "account_information" },
                Ge = { page: "account_type_landing" };
            class Ye extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.combinedFetches = () => {
                            const { fetchAccountVerificationAccess: e, fetchCountryNamesIfNeeded: t, fetchData: a, fetchDevices: n, fetchPreferences: o, fetchUserAccountLabel: r, languageCode: i, viewerUser: s } = this.props,
                                l = [a(), o(), t(i || "")];
                            return s && (l.push(n()), this.context.featureSwitches.isTrue("identity_verification_intake_enabled") && l.push(e()), l.push(r(s.id_str))), Promise.all(l);
                        }),
                        (this._render = () => {
                            const { ages: e, birthdate: t, countryName: a, email: s, gender: l, languages: c, phone: d, signupDetails: m, viewerUser: h } = this.props,
                                { showAutomationOnboardingModal: p, showParodyOnboardingModal: u } = this.state,
                                b = e.map((e) => ("string" == typeof e ? e : e.display)).join(", "),
                                g = t && _e(new Date(`${t}T00:00:00`)),
                                f = c.map(({ display: e }) => e).join(", ");
                            return n.createElement(
                                o.Z,
                                null,
                                p && n.createElement($, { onClose: this._handleCloseAutomationModal, onConfirm: this._handleConfirmAutomationModal, onFaqClick: this._handleFaqClick }),
                                u && n.createElement(X, { onClose: this._handleCloseParodyModal, onConfirm: this._handleConfirmParodyModal }),
                                h ? n.createElement(i.Z, { description: h.screen_name && n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, `@${h.screen_name}`), label: ye, link: "/settings/screen_name" }) : null,
                                h ? n.createElement(i.Z, { description: d, label: we, link: "/settings/phone" }) : null,
                                h ? n.createElement(i.Z, { description: s, label: Ze, link: "/settings/email" }) : null,
                                h ? this._renderVerified() : null,
                                h ? n.createElement(i.Z, { description: h.protected ? Le : Oe, label: Re, link: "/settings/audience_and_tagging" }) : null,
                                h ? n.createElement(o.Z, { style: [ge.infoItem, ge.bottomBorder], testID: "account-creation" }, n.createElement(r.ZP, null, Ce), n.createElement(r.ZP, { color: "gray700", style: ge.helpText }, Ee(new Date(h.created_at))), m.creation_ip && m.country ? n.createElement(r.ZP, { color: "gray700", style: ge.helpText }, `${m.creation_ip} (${m.country})`) : null) : null,
                                h ? n.createElement(i.Z, { description: a, label: ke, link: "/settings/country" }) : null,
                                n.createElement(i.Z, { description: f, label: Ve, link: "/settings/languages" }),
                                n.createElement(i.Z, { description: this._renderGender(l.value), label: Pe, link: "/settings/your_twitter_data/gender" }),
                                h ? n.createElement(i.Z, { description: n.createElement(n.Fragment, null, n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, g), n.createElement(r.ZP, { color: "gray700", style: ge.helpText }, t ? ze : Ne)), label: Be, link: "/settings/profile" }) : null,
                                n.createElement(i.Z, { description: b, label: He, link: "/settings/your_twitter_data/age" }),
                                h ? this._renderAutomation() : null,
                                h ? this._renderParodyManage() : null,
                                h ? null : n.createElement(o.Z, { style: ge.infoItem, testID: "loggedOutHelp" }, n.createElement(r.ZP, { color: "gray700", style: ge.helpText }, qe), n.createElement("br", null), n.createElement(r.ZP, { color: "gray700", style: ge.helpText }, $e)),
                            );
                        }),
                        (this._renderGender = (e) => {
                            switch (e) {
                                case "female":
                                    return Ae;
                                case "male":
                                    return xe;
                                default:
                                    return e;
                            }
                        }),
                        (this._renderVerified = () => {
                            const e = n.createElement(s.Z, { label: ve, learnMoreLabel: je, learnMoreLink: "https://help.x.com/managing-your-account/about-twitter-verified-accounts", subtext: this.props.viewerUser?.verified || this.props.viewerUser?.is_blue_verified ? Fe : Te });
                            if (this.context.featureSwitches.isTrue("identity_verification_intake_enabled")) {
                                let t, a;
                                switch (this.props.verificationAccess.status) {
                                    case b.pY.DISABLED:
                                    case b.pY.NOT_ELIGIBLE:
                                        return e;
                                    case b.pY.VERIFIED:
                                        a = Fe;
                                        break;
                                    default:
                                        (t = De), (a = Te);
                                }
                                return n.createElement(s.Z, { label: ve, learnMoreLabel: t, learnMoreLink: "/settings/account/request_verification", subtext: a });
                            }
                            return e;
                        }),
                        (this._handleAutomationOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...We, element: "automation", action: "click" }), this.props.managingAccount || (e.scribe({ ...Ge, action: "impression" }), this.setState({ showAutomationOnboardingModal: !0 }));
                        }),
                        (this._handleParodyOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...We, element: "parody", action: "click" }), (this.props.viewerUser?.parody_commentary_fan_label && "None" !== this.props.viewerUser?.parody_commentary_fan_label) || (e.scribe({ ...Ge, action: "impression" }), this.setState({ showParodyOnboardingModal: !0 }));
                        }),
                        (this._handleCloseAutomationModal = () => {
                            this.setState({ showAutomationOnboardingModal: !1 });
                        }),
                        (this._handleCloseParodyModal = () => {
                            this.setState({ showParodyOnboardingModal: !1 });
                        }),
                        (this._handleConfirmAutomationModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...Ge, element: "call_to_action", action: "click" }), t.push("/settings/account/automation");
                        }),
                        (this._handleConfirmParodyModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...Ge, element: "call_to_action", action: "click" }), t.push("/settings/account/parody");
                        }),
                        (this._handleFaqClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...Ge, component: "link", element: "help_faqs", action: "click" });
                        }),
                        (this._renderAutomation = () => {
                            const { managingAccount: e } = this.props,
                                t = e ? "/settings/account/automation" : "/settings/your_twitter_data/account";
                            return n.createElement(i.Z, { description: Ie, label: Se, link: t, onPress: this._handleAutomationOnPress });
                        }),
                        (this._renderParodyManage = () => {
                            const { featureSwitches: e } = this.context;
                            if (!e.isTrue("profile_label_improvements_pcf_settings_enabled")) return null;
                            const t = this.props.viewerUser?.parody_commentary_fan_label,
                                a = t && "None" !== t,
                                o = a ? "/settings/account/parody" : "/settings/your_twitter_data/account";
                            return n.createElement(i.Z, { description: a ? (0, h.U)(t) : Ue, label: Me, link: o, onPress: this._handleParodyOnPress });
                        }),
                        (this.state = { showAutomationOnboardingModal: !1, showParodyOnboardingModal: !1 });
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return n.createElement(p.nO, { namespace: We }, n.createElement(m.Z, null, n.createElement(te.Z, { location: t, title: fe }, n.createElement(ee.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            Ye.contextType = d.rC;
            const Je = (0, u.Z)(be(Ye));
        },
        450028: (e, t, a) => {
            a.r(t), a.d(t, { ArchiveUnavailable: () => Q, YourTwitterData: () => te, default: () => ae });
            var n = a(202784),
                o = a(325686),
                r = a(688715),
                i = a(731708),
                s = a(420412),
                l = a(88307),
                c = a(943401),
                d = a(154003),
                m = a(844685),
                h = a(779610),
                p = a(111677),
                u = a.n(p),
                b = a(516951),
                g = a(443781),
                f = a(652904),
                E = a(293115),
                _ = a(648651),
                y = a(264922),
                Z = a(569291),
                w = a(71620),
                C = a(668214),
                P = a(601576);
            const A = (0, C.Z)()
                .propsFromState(() => ({ fetchStatus: _.UD, downloads: _.NK, isUserDataUnavailable: _.c }))
                .propsFromActions(() => ({ addToast: P.fz, createDataDownload: _.fm, createLocalApiErrorHandler: (0, w.zr)("DOWNLOAD_YOUR_DATA"), fetchDownloads: _._d }))
                .withAnalytics({ page: "settings", section: "account", component: "download_your_data" });
            const x = a(392237).default.create((e) => ({ description: { flexShrink: 1 }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, errorText: { marginEnd: e.spaces.space20 }, floatingLink: { paddingStart: e.spaces.space20 }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, noShrink: { flexShrink: 0 } })),
                k = "/settings/your_twitter_data/data",
                v = "https://pscp.tv/account/your-data",
                S = (0, r.ju)("https://help.x.com/managing-your-account/accessing-your-twitter-data"),
                D = (0, r.ju)("https://help.x.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true"),
                L = u().f56af9cc,
                F = u().cce24bf4,
                T = u().h3ed510e,
                I = u().c39b0e24,
                M = u().b708417c,
                U = u().jbf5843e,
                O = u().ea886c6e,
                B = u().cdcc2ad4,
                N = u().dbeff87a,
                z = u().ce5d2c46,
                H = u().b2ed92c4,
                V = u().gee8110e,
                R = u().f56af9cc,
                q = u().hb02ed28,
                $ = u().c2254084,
                j = u().f62d1d9e,
                W = u().i859a9d4,
                G = n.createElement(u().I18NFormatMessage, { $i18n: "efc1de65" }, n.createElement(i.ZP, { link: D }, u().db40dfcf)),
                Y = u().b221ca4c,
                J = { page: "settings", section: "account", component: "download_your_data" },
                K = Object.freeze({ ..._.n$, UNAVAILABLE: "UNAVAILABLE" }),
                Q = () => n.createElement(n.Fragment, null, n.createElement(s.Z, null), n.createElement(l.Z, { label: R, withBottomBorder: !0 }), n.createElement(c.Z, { description: q })),
                X = (e) => {
                    switch (e) {
                        case K.NONE:
                            return N;
                        case K.FAILED:
                            return B;
                        case K.COMPLETE:
                            return V;
                        case K.UNAVAILABLE:
                            return z;
                        default:
                            return H;
                    }
                },
                ee = (e) => {
                    switch (e) {
                        case K.NONE:
                            return null;
                        case K.FAILED:
                            return G;
                        case K.COMPLETE:
                            return j;
                        case K.UNAVAILABLE:
                            return q;
                        default:
                            return $;
                    }
                };
            function te(e) {
                const { viewerUserId: t } = n.useContext(g.rC),
                    { addToast: a, analytics: r, createDataDownload: l, createLocalApiErrorHandler: p, downloads: u, fetchDownloads: w, fetchStatus: C, isUserDataUnavailable: P, location: A } = e,
                    D = !!t,
                    B = !D,
                    N = P,
                    z = !P && D;
                function H() {
                    r.scribe({ element: "request_button", action: "click" }),
                        l()
                            .then(() => a({ text: Y }))
                            .catch(p());
                }
                return n.createElement(
                    E.nO,
                    { namespace: J },
                    n.createElement(
                        f.Z,
                        null,
                        n.createElement(
                            y.Z,
                            { location: A, screenType: "secondaryDetail", title: L },
                            n.createElement(c.Z, { description: F }),
                            z
                                ? n.createElement(Z.Z, {
                                      fetch: () => w(),
                                      fetchStatus: C,
                                      renderChildren: () =>
                                          n.createElement(
                                              n.Fragment,
                                              null,
                                              n.createElement(
                                                  o.Z,
                                                  null,
                                                  n.createElement(m.Z, { text: T }),
                                                  n.createElement(c.Z, { description: M, learnMoreLabel: W, learnMoreLink: S }),
                                                  (() => {
                                                      const { all: e, nonFailed: t } = u,
                                                          a = t.length ? t[0].status : e.length ? _.n$.FAILED : _.n$.NONE,
                                                          r = !!t.length && void 0 !== t[0].urls,
                                                          s = _.Ns.indexOf(a) >= 0,
                                                          l = r && a === _.n$.COMPLETE,
                                                          c = a === _.n$.FAILED,
                                                          m = a === _.n$.COMPLETE && !r,
                                                          h = m ? K.UNAVAILABLE : a,
                                                          p = a === _.n$.NONE ? H : b.Z,
                                                          g = () => n.createElement(d.ZP, { disabled: s || c || m, link: l ? k : void 0, onPress: p, size: "small", style: x.narrowButton, type: "brandFilled" }, X(h));
                                                      return n.createElement(o.Z, { style: [x.narrowButtonRow, x.labelContainer] }, n.createElement(o.Z, { style: x.description }, n.createElement(i.ZP, null, I), n.createElement(i.ZP, { color: "gray700", style: [x.errorText, x.helpText] }, ee(h))), n.createElement(o.Z, { style: x.noShrink }, n.createElement(g, null)));
                                                  })(),
                                              ),
                                              n.createElement(s.Z, null),
                                              n.createElement(o.Z, null, n.createElement(m.Z, { text: U }), n.createElement(h.Z, { label: O, link: { external: !0, pathname: v } })),
                                          ),
                                  })
                                : null,
                            B && n.createElement(h.Z, { label: V, link: "/settings/your_twitter_data/request_data" }),
                            N && n.createElement(Q, null),
                        ),
                    ),
                );
            }
            const ae = A(te);
        },
        374989: (e, t, a) => {
            a.r(t), a.d(t, { default: () => v });
            var n = a(202784),
                o = a(325686),
                r = a(943401),
                i = a(111677),
                s = a.n(i),
                l = a(511323),
                c = a(581543),
                d = a(72591),
                m = a(247520),
                h = a(534763),
                p = a(652904),
                u = a(293115),
                b = a(264922);
            const g = "accountScreen",
                f = s().hc73f030,
                E = s().d3a2bde8,
                _ = s().f15bfdb4,
                y = s().idca4742,
                Z = s().b6ded35e,
                w = s().ab1f7ee0,
                C = s().f56af9cc,
                P = s().cce24bf4,
                A = s().hfb92b14,
                x = s().i203df96,
                k = { page: "settings", section: "account" },
                v = ({ location: e }) => {
                    const t = n.useMemo(
                        () => [
                            { description: y, label: _, link: "/settings/your_twitter_data/account", Icon: l.default },
                            { description: Z, label: w, link: "/settings/password", Icon: c.default },
                            { description: P, label: C, link: "/settings/download_your_data", Icon: d.default },
                            { description: x, label: A, link: "/settings/deactivate", Icon: m.default },
                        ],
                        [],
                    );
                    return n.createElement(
                        u.nO,
                        { namespace: k },
                        n.createElement(
                            p.Z,
                            null,
                            n.createElement(
                                b.Z,
                                { location: e, screenType: "primaryDetail", title: f },
                                n.createElement(
                                    o.Z,
                                    { testID: g },
                                    n.createElement(r.Z, { description: E }),
                                    t.map((e) => n.createElement(o.Z, { key: e.label }, n.createElement(h.H, e))),
                                ),
                            ),
                        ),
                    );
                };
        },
        82999: (e, t, a) => {
            a.r(t), a.d(t, { AccountAutomationScreen: () => G, changeManagingAccountLabel: () => T, default: () => J, setManagingAccountLabel: () => I });
            var n = a(202784),
                o = a(325686),
                r = a(688715),
                i = a(731708),
                s = a(834324),
                l = a(779610),
                c = a(88307),
                d = a(420412),
                m = a(242454),
                h = a(529356),
                p = a(943401),
                u = a(392237),
                b = a(111677),
                g = a.n(b),
                f = a(47086),
                E = a(293723),
                _ = a(290402),
                y = a(443781),
                Z = a(652904),
                w = a(293115),
                C = a(312771),
                P = a(264922),
                A = a(668214),
                x = a(181617),
                k = a(919022);
            const v = (0, A.Z)()
                    .propsFromState(() => ({ managingAccount: x.MB, managingAccountFetchStatus: x.iR, disableAccountLabelStatus: x.ET, user: k.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: x.PP, fetchUserAccountLabel: x.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                S = (0, r.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                D = g().d12d42dc,
                L = g().ad31b476,
                F = g().a2981062,
                T = g().aff4540e,
                I = g().b8b9d100,
                M = n.createElement(i.ZP, { color: "gray700", size: "subtext2" }, n.createElement(g().I18NFormatMessage, { $i18n: "d79b6b7b" }, n.createElement(i.ZP, { link: S, size: "subtext2" }, g().f79acef3))),
                U = g().e0bc51f6,
                O = g().i9028824,
                B = g().b92190c2,
                N = g().fb03b39a,
                z = g().bd51ddfa,
                H = { page: "settings", section: "account_information", component: "automation" },
                V = { page: "system", section: "message" },
                R = g().e91c15f6,
                q = g().df035b80,
                $ = g().bd12cf34,
                j = g().cfd2f35e,
                W = "/i/flow/enable_automated_account";
            class G extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleHideCallout = () => {
                            this.setState({ showCallout: !1 });
                        }),
                        (this._handleShowCallout = (e, t = !1) => {
                            this.setState({ showCallout: !0, calloutIsError: t, calloutLabel: e });
                        }),
                        (this._renderCallout = () => {
                            const { calloutIsError: e, calloutLabel: t } = this.state,
                                a = e ? f.default : E.default,
                                r = e ? "danger" : "success";
                            return n.createElement(o.Z, { style: Y.inlineCallout }, n.createElement(s.Z, { Icon: a, headline: t || "", onClose: this._handleHideCallout, type: r }));
                        }),
                        (this._handleFetchUserAccountLabel = () => {
                            const { fetchUserAccountLabel: e, user: t } = this.props,
                                a = t?.id_str;
                            a && e(a);
                        }),
                        (this._handleDisableUserAccountLabel = () => {
                            const { disableUserAccountLabel: e } = this.props;
                            e(), this._handleToggleDisableConfirmation();
                        }),
                        (this._handleToggleDisableConfirmation = () => {
                            this.setState({ showDisableConfirmation: !this.state.showDisableConfirmation });
                        }),
                        (this._renderUnassignedManagingAccountView = () => n.createElement(o.Z, null, n.createElement(l.Z, { description: M, label: I, link: W }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => n.createElement(o.Z, null, n.createElement(c.Z, { label: F, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), n.createElement(l.Z, { label: T, link: W }), this.state.showCallout && this._renderCallout(), n.createElement(d.Z, null), n.createElement(m.Z, { color: "red500", label: U, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => n.createElement(h.Z, { actionLabel: $, graphicDisplayMode: "none", headline: R, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: j, subtext: q, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return n.createElement(P.Z, { title: D }, t && this._renderDisconnectConfirmation(), n.createElement(p.Z, { description: L }), e);
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        }),
                        (this._initialPath = this._previousPath = window.location.pathname),
                        (this.state = { hasExitedOCF: !1, showCallout: !1, showDisableConfirmation: !1, calloutIsError: !1, calloutLabel: void 0 });
                }
                componentDidMount() {
                    this._handleFetchUserAccountLabel();
                }
                shouldComponentUpdate(e, t) {
                    this._previousPath !== location.pathname && this._initialPath === location.pathname && (this._handleFetchUserAccountLabel(), this.setState({ hasExitedOCF: !0 })), (this._previousPath = location.pathname);
                    const { disableAccountLabelStatus: a, managingAccount: n, managingAccountFetchStatus: o } = this.props,
                        { disableAccountLabelStatus: r, managingAccount: i, managingAccountFetchStatus: s } = e,
                        { hasExitedOCF: l } = this.state,
                        c = i && n !== i,
                        d = s === C.ZP.LOADED || o === C.ZP.LOADED;
                    if ((c && d && l && (this._handleShowCallout(B), this._scribe({ ...H, action: "enabled" })), a !== r))
                        switch (r) {
                            case C.ZP.LOADED:
                                this._handleShowCallout(N), this._scribe({ ...H, action: "disabled" });
                                break;
                            case C.ZP.FAILED:
                                this._handleShowCallout(z, !0), this._scribe({ ...V, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return n.createElement(w.nO, { namespace: H }, n.createElement(Z.Z, null, n.createElement(_.Z, { "aria-label": O, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            G.contextType = y.rC;
            const Y = u.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                J = v(G);
        },
        664049: (e, t, a) => {
            a.r(t), a.d(t, { default: () => oe });
            a(571372);
            var n = a(202784),
                o = a(351743),
                r = a.n(o),
                i = a(943401),
                s = a(954110),
                l = a(190286),
                c = a(111677),
                d = a.n(c),
                m = a(143095),
                h = a(652904),
                p = a(952793),
                u = a(71620),
                b = a(293115),
                g = a(125363),
                f = a(919022),
                E = a(264922),
                _ = a(728055),
                y = a(455102),
                Z = (a(585488), a(101890)),
                w = a(731708),
                C = a(88656),
                P = a(240666),
                A = a(601576),
                x = a(535338);
            const k = "https://help.x.com/rules-and-policies/authenticity",
                v = d().dbcf3a1a,
                S = d().hf019b20,
                D = d().ce62c8c2,
                L = d().a14080ce,
                F = d().db6796f6,
                T = d().c700b6be,
                I = d().e68b09b4,
                M = d().h3701ffe,
                U = d().i859a9d4,
                O = d().ff1739ae,
                B = d().h70c602c,
                N = "AccountParody",
                z = { page: "settings", section: "account_information", component: "parody" },
                H = [
                    { label: (0, P.U)("None"), value: "None" },
                    { label: (0, P.U)("Parody"), value: "Parody" },
                    { label: (0, P.U)("Commentary"), value: "Commentary" },
                    { label: (0, P.U)("Fan"), value: "Fan" },
                ],
                V = y.Z,
                R = _.Z;
            function q({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    a = (0, g.I0)(),
                    o = (0, u.n7)(N),
                    s = (0, x.p)(V, {}),
                    c = s.get_parody_label_settings?.is_label_update_disabled ?? !1,
                    d = s.get_parody_label_settings?.update_disabled_reason,
                    [m, p] = r()(R),
                    [_, y] = n.useState(),
                    P = (t) => {
                        a(f.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    q = (e) => {
                        if (p) return;
                        const a = ((e) => (t) => {
                            P(e), o({ 403: { customAction: (e) => (0, A.mf)({ text: e.message ?? B }) }, showToast: !0 })(t);
                        })(t);
                        m({
                            variables: { parodyProfileLabel: e },
                            onCompleted({ update_parody_label: e }) {
                                "PCFLabelSettings" === e?.__typename ? (y(void 0), location.reload()) : a(new C.Z("update_parody_label", 403, {}, [{ code: 403, message: e?.message ?? "" }]));
                            },
                            optimisticUpdater: () => P(e),
                            onError: a,
                        });
                    };
                return n.createElement(
                    b.nO,
                    { namespace: z },
                    n.createElement(
                        h.Z,
                        null,
                        n.createElement(
                            E.Z,
                            { title: v },
                            n.createElement(i.Z, { description: S, learnMoreLabel: U, learnMoreLink: k }),
                            n.createElement(Z.Z, {
                                disabled: c,
                                label: O,
                                name: "profile_label",
                                onChange: (e, t) => {
                                    const a = "None" !== t;
                                    y({
                                        confirmLabel: a ? M : I,
                                        onConfirm: () => {
                                            y(void 0), q(t);
                                        },
                                        title: a ? L : D,
                                        desc: a ? T : F,
                                    });
                                },
                                options: H,
                                value: t,
                            }),
                            c && n.createElement(i.Z, { description: n.createElement(w.ZP, { color: "red500" }, d) }),
                            _ && n.createElement(l.Z, { confirmButtonLabel: _.confirmLabel, headline: _.title, learnMoreLink: k, learnMoreText: U, onCancel: () => y(void 0), onConfirm: _.onConfirm, text: _.desc, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            const $ = a(207966).Z,
                j = "https://help.x.com/rules-and-policies/authenticity",
                W = d().dbcf3a1a,
                G = d().cbb2367c,
                Y = d().ge48855c,
                J = d().hf019b20,
                K = d().d048571e,
                Q = d().g905134c,
                X = d().e68b09b4,
                ee = d().i859a9d4,
                te = "AccountParody",
                ae = { page: "settings", section: "account_information", component: "parody" };
            function ne({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    a = (0, g.I0)(),
                    o = (0, u.n7)(te),
                    [c, d] = r()($),
                    [p, { toggle: _ }] = (0, m.O)(!1),
                    y = (t) => {
                        a(f.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    Z = (e) => {
                        if (d) return;
                        const a = e ? "Parody" : "None",
                            n = ((e) => (t) => {
                                y(e), o({ showToast: !0 })(t);
                            })(t);
                        c({
                            variables: { parodyProfileLabel: a },
                            onCompleted({ user_preferences_put: e }) {
                                "Done" === e ? (_(!1), location.reload()) : n(new Error(`unexpected result on toggling parody${String(e)}`));
                            },
                            optimisticUpdater: () => y(a),
                            onError: n,
                        });
                    };
                return n.createElement(
                    b.nO,
                    { namespace: ae },
                    n.createElement(
                        h.Z,
                        null,
                        n.createElement(
                            E.Z,
                            { title: W },
                            n.createElement(i.Z, { description: G }),
                            n.createElement(s.Z, {
                                checked: "None" !== t,
                                helpText: J,
                                label: Y,
                                learnMoreLink: j,
                                name: "parody_label",
                                onChange: (e, t) => {
                                    t ? Z(t) : _(!0);
                                },
                                testID: "parody_label_switch",
                            }),
                            p && n.createElement(l.Z, { confirmButtonLabel: X, headline: K, learnMoreLink: j, learnMoreText: ee, onCancel: () => _(!1), onConfirm: () => Z(!1), text: Q, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            function oe() {
                const e = (0, g.v9)(f.ZP.selectViewerUser),
                    t = (0, p.hC)("profile_label_improvements_pcf_edit_profile_enabled");
                return null == e ? null : t ? n.createElement(q, { user: e }) : n.createElement(ne, { user: e });
            }
        },
        780709: (e, t, a) => {
            a.r(t), a.d(t, { default: () => P });
            var n = a(807896),
                o = a(202784),
                r = a(325686),
                i = a(943401),
                s = a(111677),
                l = a.n(s),
                c = a(517747),
                d = a(744649),
                m = a(534763),
                h = a(652904),
                p = a(293115),
                u = a(264922);
            const b = "notificationsScreen",
                g = l().eb75875e,
                f = l().a3f22d8e,
                E = l().i647fb04,
                _ = l().ef1b5cbc,
                y = l().bcd81cac,
                Z = l().da867c58,
                w = { page: "settings", section: "notification" },
                C = [
                    { description: _, label: E, link: "/settings/notifications/filters", Icon: c.default, testID: "testIconFilter" },
                    { description: Z, label: y, link: "/settings/notifications/preferences", Icon: d.default, testID: "testIconDeviceNotification" },
                ],
                P = ({ location: e }) =>
                    o.createElement(
                        p.nO,
                        { namespace: w },
                        o.createElement(
                            h.Z,
                            null,
                            o.createElement(
                                u.Z,
                                { location: e, screenType: "primaryDetail", title: g },
                                o.createElement(
                                    r.Z,
                                    { testID: b },
                                    o.createElement(i.Z, { description: f }),
                                    C.map((e) => o.createElement(m.H, (0, n.Z)({}, e, { key: e.link }))),
                                ),
                            ),
                        ),
                    );
        },
        609848: (e, t, a) => {
            a.d(t, { Z: () => I });
            var n = a(202784),
                o = a(325686),
                r = a(731708),
                i = a(688715),
                s = a(844685),
                l = a(855488),
                c = a(108362),
                d = a(154003),
                m = a(392237),
                h = a(111677),
                p = a.n(h),
                u = a(615656),
                b = a(290402),
                g = a(443781),
                f = a(500002),
                E = a(312771),
                _ = a(615027),
                y = a(267966),
                Z = a(71620),
                w = a(668214),
                C = a(673110);
            const P = (0, w.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: C.UD }))
                    .propsFromActions(() => ({ verifyPassword: C.Gv, createLocalApiErrorHandler: (0, Z.zr)("PASSWORD_GATEWAY") })),
                A = p().fe36fe10,
                x = p().dec3c9b8,
                k = p().hccd9dbe,
                v = p().d1091f50,
                S = p().g9677c6e,
                D = p().c8cb0b4c;
            class L extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { password: "" }),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this._handlePasswordSubmit = () => {
                            const { createLocalApiErrorHandler: e, verifyPassword: t } = this.props,
                                { password: a } = this.state;
                            "" !== a &&
                                t(a)
                                    .then(() => {
                                        this.setState({ password: "", verificationRequired: !1 }), this._makeFetch();
                                    })
                                    .catch(e({ [u.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: D }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [u.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        }),
                        (this._handleFetch = this._makeFetch),
                        (this._handleChange = (e) => {
                            this.setState({ passwordError: void 0, password: e.target.value });
                        });
                }
                componentDidMount() {
                    this._makeFetch();
                }
                componentDidUpdate(e) {
                    e.fetchStatus === E.ZP.LOADED && this.props.fetchStatus === E.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        a = n.createElement(r.ZP, { link: { pathname: (0, i.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, v);
                    return n.createElement(n.Fragment, null, e ? n.createElement(s.Z, { text: e }) : null, n.createElement(o.Z, { style: [y.Z.viewItem, y.Z.bottomBorder] }, n.createElement(r.ZP, { color: "gray700", size: "subtext2" }, k)), n.createElement(l.Z, { errorText: t, helperText: a, invalid: !!t, label: x, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), n.createElement(c.Z, { style: F.buttonContainer }, n.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: F.button, type: "brandFilled" }, S)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: a } = this.props,
                        { verificationRequired: o } = this.state,
                        r = e === E.ZP.FAILED && o;
                    return n.createElement(n.Fragment, null, r ? (this._passwordlessSsoEnabled ? n.createElement(_.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : n.createElement(b.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: a }));
                }
            }
            (L.contextType = g.rC), (L.defaultProps = { titleHeader: A });
            const F = m.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                T = P(L),
                I = (0, f.ZP)(T);
        },
        569291: (e, t, a) => {
            a.d(t, { Z: () => h });
            var n = a(202784),
                o = a(615656),
                r = a(290402),
                i = a(312771),
                s = a(615027),
                l = a(71620),
                c = a(668214);
            const d = (0, c.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, l.zr)("TWO_FACTOR_AUTHENTICATION_GATEWAY") }));
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { verificationRequired: !1 }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [o.ZP.GenericForbidden]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        [o.ZP.PasswordVerificationRequired]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        showToast: !1,
                                    }),
                                );
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                render() {
                    const { fetchStatus: e, renderChildren: t } = this.props,
                        { verificationRequired: a } = this.state,
                        o = e === i.ZP.FAILED && a;
                    return n.createElement(n.Fragment, null, o ? n.createElement(s.Z, { to: "/i/flow/verify_account_ownership" }) : n.createElement(r.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: t }));
                }
            }
            const h = d.forwardRef(m);
        },
        267966: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(392237);
            const o = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                r = n.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...o(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp-4e00201e.fedee34a.js.map
