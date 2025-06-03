"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp", "icons/IconDeviceNotification-js"],
    {
        129270: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, n) => e.get("account/user_twitter_data", t, n, ""), createDataDownload: (t, n) => e.post("account/user_twitter_data", t, {}, { ...n, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, n) => e.put("account/user_twitter_data", t, { ...n, "content-type": "application/json" }, "") });
        },
        534763: (e, t, n) => {
            n.d(t, { H: () => c, b: () => d });
            var a = n(807896),
                r = n(202784),
                o = n(392237),
                i = n(779610);
            const s = (e) => {
                    const { Icon: t, iconColor: n, testID: a } = e;
                    return r.createElement(t, { style: n ? { color: o.default.theme.colors[n] } : l.thumbnail, testID: a });
                },
                l = o.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: o, ...l } = e;
                return r.createElement(i.Z, (0, a.Z)({}, l, { thumbnail: r.createElement(s, { Icon: t, iconColor: n, testID: o }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(i.Z, (0, a.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        576025: (e, t, n) => {
            n.d(t, { Lf: () => c, Po: () => u, _t: () => d });
            n(571372);
            var a = n(499627),
                r = n(312771);
            const o = "countryNames",
                i = { fetchStatus: r.ZP.NONE, countries: {} },
                s = { REQUEST: `${o}_REQUEST`, FAILURE: `${o}_FAILURE`, SUCCESS: `${o}_SUCCESS` },
                l = (e = i, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case s.REQUEST:
                            return { ...e, fetchStatus: r.ZP.LOADING };
                        case s.FAILURE:
                            return { ...e, fetchStatus: r.ZP.NONE };
                        case s.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: r.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            a.Z.register({ [o]: l });
            const c = (e) => e[o].countries,
                d = (e, t) => {
                    const n = t && t.toUpperCase();
                    return e[o].countries[n];
                },
                u = (e) => (t, a) =>
                    a()[o].fetchStatus === r.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: s.REQUEST }),
                          ((e) => {
                              switch (e) {
                                  case "ar":
                                      return n.e("ondemand.countries-ar").then(n.t.bind(n, 855927, 19));
                                  case "bg":
                                      return n.e("ondemand.countries-bg").then(n.t.bind(n, 725159, 19));
                                  case "bn":
                                      return n.e("ondemand.countries-bn").then(n.t.bind(n, 322302, 19));
                                  case "ca":
                                      return n.e("ondemand.countries-ca").then(n.t.bind(n, 520516, 19));
                                  case "cs":
                                      return n.e("ondemand.countries-cs").then(n.t.bind(n, 829454, 19));
                                  case "da":
                                      return n.e("ondemand.countries-da").then(n.t.bind(n, 150661, 19));
                                  case "de":
                                      return n.e("ondemand.countries-de").then(n.t.bind(n, 565614, 19));
                                  case "el":
                                      return n.e("ondemand.countries-el").then(n.t.bind(n, 295816, 19));
                                  case "en-GB":
                                      return n.e("ondemand.countries-en-GB").then(n.t.bind(n, 397465, 19));
                                  case "en":
                                      return n.e("ondemand.countries-en").then(n.t.bind(n, 219973, 19));
                                  case "es":
                                      return n.e("ondemand.countries-es").then(n.t.bind(n, 690515, 19));
                                  case "eu":
                                      return n.e("ondemand.countries-eu").then(n.t.bind(n, 594549, 19));
                                  case "fa":
                                      return n.e("ondemand.countries-fa").then(n.t.bind(n, 548404, 19));
                                  case "fi":
                                      return n.e("ondemand.countries-fi").then(n.t.bind(n, 526226, 19));
                                  case "fil":
                                      return n.e("ondemand.countries-fil").then(n.t.bind(n, 387630, 19));
                                  case "fr":
                                      return n.e("ondemand.countries-fr").then(n.t.bind(n, 580700, 19));
                                  case "ga":
                                      return n.e("ondemand.countries-ga").then(n.t.bind(n, 434359, 19));
                                  case "gl":
                                      return n.e("ondemand.countries-gl").then(n.t.bind(n, 765077, 19));
                                  case "gu":
                                      return n.e("ondemand.countries-gu").then(n.t.bind(n, 826129, 19));
                                  case "ha":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 712756, 19));
                                  case "he":
                                      return n.e("ondemand.countries-he").then(n.t.bind(n, 834185, 19));
                                  case "hi":
                                      return n.e("ondemand.countries-hi").then(n.t.bind(n, 555595, 19));
                                  case "hr":
                                      return n.e("ondemand.countries-hr").then(n.t.bind(n, 549581, 19));
                                  case "hu":
                                      return n.e("ondemand.countries-hu").then(n.t.bind(n, 624086, 19));
                                  case "id":
                                      return n.e("ondemand.countries-id").then(n.t.bind(n, 499075, 19));
                                  case "ig":
                                      return n.e("ondemand.countries-ig").then(n.t.bind(n, 424665, 19));
                                  case "it":
                                      return n.e("ondemand.countries-it").then(n.t.bind(n, 231383, 19));
                                  case "ja":
                                      return n.e("ondemand.countries-ja").then(n.t.bind(n, 848543, 19));
                                  case "kn":
                                      return n.e("ondemand.countries-kn").then(n.t.bind(n, 4504, 19));
                                  case "ko":
                                      return n.e("ondemand.countries-ko").then(n.t.bind(n, 496320, 19));
                                  case "mr":
                                      return n.e("ondemand.countries-mr").then(n.t.bind(n, 939202, 19));
                                  case "ms":
                                      return n.e("ondemand.countries-ms").then(n.t.bind(n, 655815, 19));
                                  case "nb":
                                      return n.e("ondemand.countries-nb").then(n.t.bind(n, 835579, 19));
                                  case "nl":
                                      return n.e("ondemand.countries-nl").then(n.t.bind(n, 572887, 19));
                                  case "pl":
                                      return n.e("ondemand.countries-pl").then(n.t.bind(n, 171124, 19));
                                  case "pt":
                                      return n.e("ondemand.countries-pt").then(n.t.bind(n, 64727, 19));
                                  case "ro":
                                      return n.e("ondemand.countries-ro").then(n.t.bind(n, 503059, 19));
                                  case "ru":
                                      return n.e("ondemand.countries-ru").then(n.t.bind(n, 948482, 19));
                                  case "sk":
                                      return n.e("ondemand.countries-sk").then(n.t.bind(n, 299502, 19));
                                  case "sr":
                                      return n.e("ondemand.countries-sr").then(n.t.bind(n, 360381, 19));
                                  case "sv":
                                      return n.e("ondemand.countries-sv").then(n.t.bind(n, 361571, 19));
                                  case "ta":
                                      return n.e("ondemand.countries-ta").then(n.t.bind(n, 393529, 19));
                                  case "th":
                                      return n.e("ondemand.countries-th").then(n.t.bind(n, 92457, 19));
                                  case "tr":
                                      return n.e("ondemand.countries-tr").then(n.t.bind(n, 798398, 19));
                                  case "uk":
                                      return n.e("ondemand.countries-uk").then(n.t.bind(n, 291715, 19));
                                  case "ur":
                                      return n.e("ondemand.countries-ur").then(n.t.bind(n, 768312, 19));
                                  case "yo":
                                      return n.e("ondemand.countries-yo").then(n.t.bind(n, 802732, 19));
                                  case "zh-Hant":
                                      return n.e("ondemand.countries-zh-Hant").then(n.t.bind(n, 39068, 19));
                                  case "zh":
                                      return n.e("ondemand.countries-zh").then(n.t.bind(n, 34845, 19));
                                  default:
                                      return Promise.reject(new Error(`Tried to import country names for unknown language key: ${e}`));
                              }
                          })(e)
                              .then((n) => {
                                  const a = n.main[e].localeDisplayNames.territories;
                                  t({ type: s.SUCCESS, payload: a });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: s.FAILURE } : u("en"));
                              }));
        },
        673110: (e, t, n) => {
            n.d(t, { Gv: () => p, UD: () => m });
            var a = n(226395),
                r = n(499627),
                o = n(917799),
                i = n(312771),
                s = n(291020);
            const l = "verifyPassword",
                c = `rweb/${s.Y}/${l}`,
                d = (0, o.dg)(c, "VERIFY_PASSWORD"),
                u = { fetchStatus: i.ZP.NONE };
            r.Z.register({
                [l]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: i.ZP.LOADING };
                        case d.SUCCESS:
                            return { ...e, fetchStatus: i.ZP.LOADED };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const m = (e) => e[l].fetchStatus,
                p =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o._O)(t, { params: { password: e }, request: r.withEndpoint(a.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        23478: (e, t, n) => {
            n.d(t, { NK: () => h, Ns: () => m, UD: () => b, VL: () => E, _d: () => f, c: () => g, fm: () => y, n$: () => u });
            var a = n(129270),
                r = n(499627),
                o = n(917799),
                i = n(312771);
            const s = "userData",
                l = `rweb/${s}`,
                c = (0, o.dg)(l, "FETCH_DOWNLOADS"),
                d = (0, o.dg)(l, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                m = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                p = { fetchStatus: i.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [s]: function (e = p, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.SUCCESS: {
                            const n = t.payload || [],
                                a = n.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: i.ZP.LOADED, downloads: { ...e.downloads, all: n, nonFailed: a } };
                        }
                        case c.REQUEST:
                            return { ...e, fetchStatus: i.ZP.LOADING };
                        case c.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                        case d.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case d.FAILURE:
                            return { ...e, fetchStatus: i.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[s].downloads,
                b = (e) => e[s].fetchStatus,
                g = (e) => 503 === e[s].error?.status,
                f =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a.Z).fetchDownloads })({ actionTypes: c, context: "FETCH_DOWNLOADS" }),
                y =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a.Z).createDataDownload })({ actionTypes: d, context: "CREATE_DOWNLOAD" }),
                E =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o.Vg)(t, { params: e, request: r.withEndpoint(a.Z).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        702091: (e, t, n) => {
            n.r(t), n.d(t, { AccountInformation: () => Ke, default: () => Ye });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                i = n(779610),
                s = n(88307),
                l = n(111677),
                c = n.n(l),
                d = n(443781),
                u = n(652904),
                m = n(240666),
                p = n(293115),
                h = n(725516),
                b = n(316325),
                g = n(688715),
                f = n(530525),
                y = n(439592),
                E = n(154003),
                _ = n(593866),
                Z = n(138099),
                w = n(786998),
                C = n(370006),
                P = n(520913),
                S = n(323265),
                k = n(668214);
            const v = (0, k.Z)().withAnalytics();
            var I = n(392237);
            const A = I.default.create((e) => ({ headerIcon: { color: e.colors.brandColor, height: e.spacesPx.space28, width: e.spacesPx.space28 }, curvedHeader: { clipPath: "ellipse(100% 100% at 38% 0%)", backgroundColor: e.colors.teal600, paddingBottom: e.spacesPx.space40, width: "100%" }, footer: { width: "100%", padding: e.spacesPx.space24 }, image1: { aspectRatio: "1.31", height: "100%", width: "100%", maxHeight: "249px", maxWidth: "327px" }, image2: { aspectRatio: "1.88", height: "100%", width: "100%", maxHeight: "175px", maxWidth: "329px" }, topContent: { paddingStart: e.spacesPx.space32, paddingEnd: e.spacesPx.space32 }, learnMoreContainer: { paddingTop: e.spacesPx.space8, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalContent: { paddingTop: e.spacesPx.space28, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalImageContainer: { alignItems: "center", backgroundColor: e.colors.teal0, height: "auto", justifyContent: "center", marginTop: e.spacesPx.space28 }, modalTitle: { paddingBottom: e.spacesPx.space8 }, numberCircle: { alignItems: "center", backgroundColor: e.colors.buttonBlack, borderRadius: e.borderRadii.infinite, height: e.spacesPx.space48, justifyContent: "center", marginEnd: e.spacesPx.space16, width: e.spacesPx.space48 }, scrollable: { flexGrow: 1, flexShrink: 1, overflowY: "auto" }, sheet: { height: "75%", maxHeight: "700px", minHeight: "480px", overflowY: "auto" }, stepListContainer: { paddingTop: e.spacesPx.space16, paddingEnd: e.spacesPx.space28 }, stepTitle: { paddingBottom: e.spacesPx.space2 } })),
                D = "https://abs.twimg.com/images/automation-onboard-1_s.png",
                x = "https://abs.twimg.com/images/automation-onboard-2_s.png",
                L = [
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
                        default: x,
                        variants: [
                            { uri: x, height: 175, width: 329 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_m.png", height: 350, width: 658 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_l.png", height: 525, width: 987 },
                        ],
                    },
                ],
                F = (0, g.ju)("https://help.x.com/rules-and-policies/twitter-automation"),
                N = (0, g.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                T = c().g2a9bd3e,
                O = c().dd9b3aae,
                R = c().b80bdc40,
                M = c().a01ac9b6,
                U = c().b989e1fe,
                z = a.createElement(c().I18NFormatMessage, { $i18n: "j31f2f97" }, a.createElement(o.ZP, { color: "text", link: F, weight: "bold", withUnderline: !0 }, c().a18d6a7d)),
                B = c().i2d599aa,
                H = [
                    { title: c().gd5bed72, description: c().g6d44432 },
                    { title: c().e20a69e8, description: c().d2f88358 },
                    { title: c().e427f632, description: c().a4d7cffa },
                ],
                V = c().j24c37b2;
            class G extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = () => a.createElement(r.Z, { style: A.curvedHeader }, a.createElement(r.Z, { style: [A.topContent, { paddingTop: S.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, T)))),
                        (this._renderAdaptiveImageFromSource = (e) => {
                            const t = L[e];
                            return a.createElement(f.Z, { "aria-label": "", aspectMode: y.Z.exact(t.aspectRatio), customVariants: t.variants, image: t.default });
                        }),
                        (this._renderContent = () => a.createElement(r.Z, null, a.createElement(r.Z, { style: A.modalContent }, a.createElement(o.ZP, { size: "title4", style: A.modalTitle, weight: "heavy" }, O), a.createElement(o.ZP, { color: "gray700", size: "body" }, R)), a.createElement(r.Z, { style: A.modalImageContainer }, a.createElement(r.Z, { style: A.image1 }, this._renderAdaptiveImageFromSource(0))), a.createElement(r.Z, { style: A.modalContent }, a.createElement(o.ZP, { color: "gray700", size: "body" }, M)), a.createElement(r.Z, { style: A.modalImageContainer }, a.createElement(r.Z, { style: A.image2 }, this._renderAdaptiveImageFromSource(1))), a.createElement(r.Z, { style: A.modalContent }, a.createElement(o.ZP, { size: "title4", style: A.modalTitle, weight: "heavy" }, U), a.createElement(o.ZP, { color: "gray700", size: "body" }, z)), a.createElement(r.Z, { style: A.modalContent }, a.createElement(o.ZP, { size: "title4", style: A.modalTitle, weight: "heavy" }, B)), a.createElement(r.Z, { style: A.stepListContainer }, this._renderSteps()), a.createElement(r.Z, { style: A.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, this._renderLearnMoreLabel())))),
                        (this._renderFooter = () => a.createElement(r.Z, { style: A.footer }, a.createElement(E.ZP, { backgroundColor: "teal600", color: "white", onClick: this.props.onConfirm, size: "xLarge" }, V))),
                        (this._renderLearnMoreLabel = () => a.createElement(c().I18NFormatMessage, { $i18n: "ed8f77d3" }, a.createElement(o.ZP, { color: "text", link: N, onClick: this.props.onFaqClick, weight: "bold", withUnderline: !0 }, c().e9965c14))),
                        (this._renderStepLabel = (e) => a.createElement(o.ZP, { size: "headline2", style: A.stepTitle, weight: "bold" }, e)),
                        (this._renderStepDecorationBadge = (e) => a.createElement(r.Z, { style: A.numberCircle }, a.createElement(o.ZP, { color: "buttonWhite", size: "headline1", weight: "bold" }, e))),
                        (this._renderSteps = () => {
                            const e = H.map((e, t) => ({ label: this._renderStepLabel(e.title), decoration: this._renderStepDecorationBadge(t + 1), description: e.description }));
                            return a.createElement(_.Z, { items: e });
                        });
                }
                render() {
                    return a.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: this.props.onClose, type: "full", withMask: !0 }, a.createElement(w.Z, { centeredLogo: a.createElement(P.default, { style: A.headerIcon }), leftControl: a.createElement(C.Z, { backButtonType: "close", onClick: this.props.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: S.ZP.isMobileOS() ? null : A.sheet }, a.createElement(r.Z, { style: A.scrollable }, this._renderHeader(), this._renderContent()), this._renderFooter()));
                }
            }
            const $ = v(G),
                q = c().a67dbd0a,
                W = [
                    { title: c().ee78c192, desc: c().c3f35e0c },
                    { title: c().d019b5fa, desc: c().dd04f24e },
                    { title: c().hb0f8bbc, desc: c().g69acc5c },
                ],
                j = c().j24c37b2;
            function K() {
                return a.createElement(r.Z, { style: A.curvedHeader }, a.createElement(r.Z, { style: [A.topContent, { paddingTop: S.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, q)));
            }
            function Y() {
                return a.createElement(c().I18NFormatMessage, { $i18n: "dd040d67" }, a.createElement(o.ZP, { color: "text", link: "https://help.x.com/rules-and-policies/authenticity", weight: "bold", withUnderline: !0 }, c().d313d431));
            }
            function Q() {
                return a.createElement(
                    r.Z,
                    null,
                    W.map(({ desc: e, title: t }) => a.createElement(r.Z, { key: t, style: A.modalContent }, a.createElement(o.ZP, { size: "title4", style: A.modalTitle, weight: "heavy" }, t), a.createElement(o.ZP, { color: "gray700", size: "body" }, e))),
                    a.createElement(r.Z, { style: A.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, a.createElement(Y, null))),
                );
            }
            function J({ onConfirm: e }) {
                return a.createElement(r.Z, { style: A.footer }, a.createElement(E.ZP, { backgroundColor: "teal600", color: "white", onClick: e, size: "xLarge" }, j));
            }
            const X = function (e) {
                return a.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: e.onClose, type: "full", withMask: !0 }, a.createElement(w.Z, { centeredLogo: a.createElement(P.default, { style: A.headerIcon }), leftControl: a.createElement(C.Z, { backButtonType: "close", onClick: e.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: S.ZP.isMobileOS() ? null : A.sheet }, a.createElement(r.Z, { style: A.scrollable }, a.createElement(K, null), a.createElement(Q, null)), a.createElement(J, { onConfirm: e.onConfirm })));
            };
            var ee = n(609848),
                te = n(264922),
                ne = n(401388),
                ae = n(71620),
                re = n(181617),
                oe = n(946194),
                ie = n(576025),
                se = n(257166),
                le = n(205253),
                ce = n(390387),
                de = n(38562),
                ue = n(919022),
                me = n(312771);
            const pe = (e, t) => {
                    const n = ue.ZP.selectViewerUser(e),
                        a = (0, ne.Z)(n) ? me.ZP.LOADED : se.selectFetchStatus(e);
                    return (0, me.h1)(le.qu(e), le.I3(e), a);
                },
                he = (e) => {
                    const t = (0, de.eV)(e);
                    return t && (0, ie._t)(e, t);
                },
                be = (0, k.Z)()
                    .propsFromState(() => ({ countryName: he, email: se.selectFirstEmail, fetchStatus: pe, viewerUser: ue.ZP.selectViewerUser, managingAccount: re.MB, phone: se.selectFirstPhoneNumber, ages: le.LJ, birthdate: le.ZS, gender: le.VU, languages: le.VT, languageCode: ce.VT, signupDetails: le.Hb, verificationAccess: oe.kD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ae.zr)("SETTINGS_ACCOUNT_INFORMATION_SCREEN"), fetchAccountVerificationAccess: oe.$J, fetchDevices: se.fetchDevices, fetchData: le.nJ, fetchPreferences: le.CP, fetchCountryNamesIfNeeded: ie.Po, fetchUserAccountLabel: re.cs })),
                ge = I.default.create((e) => ({ helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" } })),
                fe = c().f15bfdb4,
                ye = c().d0a77c9b,
                Ee = c().jade381b,
                _e = c().d1f6d336,
                Ze = c().a3841918,
                we = c().f70cd5ee,
                Ce = c().ib6f1694,
                Pe = c().a8d0108e,
                Se = c().de323650,
                ke = c().b6ab31be,
                ve = c().c21037d0,
                Ie = c().h3290872,
                Ae = c().d12d42dc,
                De = c().hbd12156,
                xe = c().b7ec04f4,
                Le = c().f70d5780,
                Fe = c().dc62d3c6,
                Ne = c().ad31b476,
                Te = c().a67dbd0a,
                Oe = c().a3db727e,
                Re = c().i62a03aa,
                Me = c().c119dee8,
                Ue = c().eacf1990,
                ze = c().a3bf1262,
                Be = c().bf96fda4,
                He = c().d495680e,
                Ve = c().h530db16,
                Ge = c().d6d80990,
                $e = a.createElement(c().I18NFormatMessage, { $i18n: "ce6f73c7" }, a.createElement(o.ZP, { link: "/settings/account/personalization" }, c().i0d81ddb)),
                qe = c().i859a9d4,
                We = { page: "settings", section: "account_information" },
                je = { page: "account_type_landing" };
            class Ke extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.combinedFetches = () => {
                            const { fetchAccountVerificationAccess: e, fetchCountryNamesIfNeeded: t, fetchData: n, fetchDevices: a, fetchPreferences: r, fetchUserAccountLabel: o, languageCode: i, viewerUser: s } = this.props,
                                l = [n(), r(), t(i || "")];
                            return s && (l.push(a()), this.context.featureSwitches.isTrue("identity_verification_intake_enabled") && l.push(e()), l.push(o(s.id_str))), Promise.all(l);
                        }),
                        (this._render = () => {
                            const { ages: e, birthdate: t, countryName: n, email: s, gender: l, languages: c, phone: d, signupDetails: u, viewerUser: m } = this.props,
                                { showAutomationOnboardingModal: p, showParodyOnboardingModal: h } = this.state,
                                b = e.map((e) => ("string" == typeof e ? e : e.display)).join(", "),
                                g = t && Ee(new Date(`${t}T00:00:00`)),
                                f = c.map(({ display: e }) => e).join(", ");
                            return a.createElement(
                                r.Z,
                                null,
                                p && a.createElement($, { onClose: this._handleCloseAutomationModal, onConfirm: this._handleConfirmAutomationModal, onFaqClick: this._handleFaqClick }),
                                h && a.createElement(X, { onClose: this._handleCloseParodyModal, onConfirm: this._handleConfirmParodyModal }),
                                m ? a.createElement(i.Z, { description: m.screen_name && a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, `@${m.screen_name}`), label: _e, link: "/settings/screen_name" }) : null,
                                m ? a.createElement(i.Z, { description: d, label: we, link: "/settings/phone" }) : null,
                                m ? a.createElement(i.Z, { description: s, label: Ze, link: "/settings/email" }) : null,
                                m ? this._renderVerified() : null,
                                m ? a.createElement(i.Z, { description: m.protected ? xe : Re, label: Ve, link: "/settings/audience_and_tagging" }) : null,
                                m ? a.createElement(r.Z, { style: [ge.infoItem, ge.bottomBorder], testID: "account-creation" }, a.createElement(o.ZP, null, Ce), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, ye(new Date(m.created_at))), u.creation_ip && u.country ? a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, `${u.creation_ip} (${u.country})`) : null) : null,
                                m ? a.createElement(i.Z, { description: n, label: ve, link: "/settings/country" }) : null,
                                a.createElement(i.Z, { description: f, label: He, link: "/settings/languages" }),
                                a.createElement(i.Z, { description: this._renderGender(l.value), label: Pe, link: "/settings/your_twitter_data/gender" }),
                                m ? a.createElement(i.Z, { description: a.createElement(a.Fragment, null, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, g), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, t ? ze : Ue)), label: Me, link: "/settings/profile" }) : null,
                                a.createElement(i.Z, { description: b, label: Be, link: "/settings/your_twitter_data/age" }),
                                m ? this._renderAutomation() : null,
                                m ? this._renderParodyManage() : null,
                                m ? null : a.createElement(r.Z, { style: ge.infoItem, testID: "loggedOutHelp" }, a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, Ge), a.createElement("br", null), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, $e)),
                            );
                        }),
                        (this._renderGender = (e) => {
                            switch (e) {
                                case "female":
                                    return Se;
                                case "male":
                                    return ke;
                                default:
                                    return e;
                            }
                        }),
                        (this._renderVerified = () => {
                            const e = a.createElement(s.Z, { label: Ie, learnMoreLabel: qe, learnMoreLink: "https://help.x.com/managing-your-account/about-twitter-verified-accounts", subtext: this.props.viewerUser?.verified || this.props.viewerUser?.is_blue_verified ? Le : Fe });
                            if (this.context.featureSwitches.isTrue("identity_verification_intake_enabled")) {
                                let t, n;
                                switch (this.props.verificationAccess.status) {
                                    case b.pY.DISABLED:
                                    case b.pY.NOT_ELIGIBLE:
                                        return e;
                                    case b.pY.VERIFIED:
                                        n = Le;
                                        break;
                                    default:
                                        (t = De), (n = Fe);
                                }
                                return a.createElement(s.Z, { label: Ie, learnMoreLabel: t, learnMoreLink: "/settings/account/request_verification", subtext: n });
                            }
                            return e;
                        }),
                        (this._handleAutomationOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...We, element: "automation", action: "click" }), this.props.managingAccount || (e.scribe({ ...je, action: "impression" }), this.setState({ showAutomationOnboardingModal: !0 }));
                        }),
                        (this._handleParodyOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...We, element: "parody", action: "click" }), (this.props.viewerUser?.parody_commentary_fan_label && "None" !== this.props.viewerUser?.parody_commentary_fan_label) || (e.scribe({ ...je, action: "impression" }), this.setState({ showParodyOnboardingModal: !0 }));
                        }),
                        (this._handleCloseAutomationModal = () => {
                            this.setState({ showAutomationOnboardingModal: !1 });
                        }),
                        (this._handleCloseParodyModal = () => {
                            this.setState({ showParodyOnboardingModal: !1 });
                        }),
                        (this._handleConfirmAutomationModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...je, element: "call_to_action", action: "click" }), t.push("/settings/account/automation");
                        }),
                        (this._handleConfirmParodyModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...je, element: "call_to_action", action: "click" }), t.push("/settings/account/parody");
                        }),
                        (this._handleFaqClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...je, component: "link", element: "help_faqs", action: "click" });
                        }),
                        (this._renderAutomation = () => {
                            const { managingAccount: e } = this.props,
                                t = e ? "/settings/account/automation" : "/settings/your_twitter_data/account";
                            return a.createElement(i.Z, { description: Ne, label: Ae, link: t, onPress: this._handleAutomationOnPress });
                        }),
                        (this._renderParodyManage = () => {
                            const { featureSwitches: e } = this.context;
                            if (!e.isTrue("profile_label_improvements_pcf_settings_enabled")) return null;
                            const t = this.props.viewerUser?.parody_commentary_fan_label,
                                n = t && "None" !== t,
                                r = n ? "/settings/account/parody" : "/settings/your_twitter_data/account";
                            return a.createElement(i.Z, { description: n ? (0, m.U)(t) : Oe, label: Te, link: r, onPress: this._handleParodyOnPress });
                        }),
                        (this.state = { showAutomationOnboardingModal: !1, showParodyOnboardingModal: !1 });
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return a.createElement(p.nO, { namespace: We }, a.createElement(u.Z, null, a.createElement(te.Z, { location: t, title: fe }, a.createElement(ee.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            Ke.contextType = d.rC;
            const Ye = (0, h.Z)(be(Ke));
        },
        450028: (e, t, n) => {
            n.r(t), n.d(t, { ArchiveUnavailable: () => J, YourTwitterData: () => te, default: () => ne });
            var a = n(202784),
                r = n(325686),
                o = n(688715),
                i = n(731708),
                s = n(420412),
                l = n(88307),
                c = n(943401),
                d = n(154003),
                u = n(844685),
                m = n(779610),
                p = n(111677),
                h = n.n(p),
                b = n(516951),
                g = n(443781),
                f = n(652904),
                y = n(293115),
                E = n(23478),
                _ = n(264922),
                Z = n(569291),
                w = n(71620),
                C = n(668214),
                P = n(601576);
            const S = (0, C.Z)()
                .propsFromState(() => ({ fetchStatus: E.UD, downloads: E.NK, isUserDataUnavailable: E.c }))
                .propsFromActions(() => ({ addToast: P.fz, createDataDownload: E.fm, createLocalApiErrorHandler: (0, w.zr)("DOWNLOAD_YOUR_DATA"), fetchDownloads: E._d }))
                .withAnalytics({ page: "settings", section: "account", component: "download_your_data" });
            const k = n(392237).default.create((e) => ({ description: { flexShrink: 1 }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, errorText: { marginEnd: e.spaces.space20 }, floatingLink: { paddingStart: e.spaces.space20 }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, noShrink: { flexShrink: 0 } })),
                v = "/settings/your_twitter_data/data",
                I = "https://pscp.tv/account/your-data",
                A = (0, o.ju)("https://help.x.com/managing-your-account/accessing-your-twitter-data"),
                D = (0, o.ju)("https://help.x.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true"),
                x = h().f56af9cc,
                L = h().cce24bf4,
                F = h().h3ed510e,
                N = h().c39b0e24,
                T = h().b708417c,
                O = h().jbf5843e,
                R = h().ea886c6e,
                M = h().cdcc2ad4,
                U = h().dbeff87a,
                z = h().ce5d2c46,
                B = h().b2ed92c4,
                H = h().gee8110e,
                V = h().f56af9cc,
                G = h().hb02ed28,
                $ = h().c2254084,
                q = h().f62d1d9e,
                W = h().i859a9d4,
                j = a.createElement(h().I18NFormatMessage, { $i18n: "efc1de65" }, a.createElement(i.ZP, { link: D }, h().db40dfcf)),
                K = h().b221ca4c,
                Y = { page: "settings", section: "account", component: "download_your_data" },
                Q = Object.freeze({ ...E.n$, UNAVAILABLE: "UNAVAILABLE" }),
                J = () => a.createElement(a.Fragment, null, a.createElement(s.Z, null), a.createElement(l.Z, { label: V, withBottomBorder: !0 }), a.createElement(c.Z, { description: G })),
                X = (e) => {
                    switch (e) {
                        case Q.NONE:
                            return U;
                        case Q.FAILED:
                            return M;
                        case Q.COMPLETE:
                            return H;
                        case Q.UNAVAILABLE:
                            return z;
                        default:
                            return B;
                    }
                },
                ee = (e) => {
                    switch (e) {
                        case Q.NONE:
                            return null;
                        case Q.FAILED:
                            return j;
                        case Q.COMPLETE:
                            return q;
                        case Q.UNAVAILABLE:
                            return G;
                        default:
                            return $;
                    }
                };
            function te(e) {
                const { viewerUserId: t } = a.useContext(g.rC),
                    { addToast: n, analytics: o, createDataDownload: l, createLocalApiErrorHandler: p, downloads: h, fetchDownloads: w, fetchStatus: C, isUserDataUnavailable: P, location: S } = e,
                    D = !!t,
                    M = !D,
                    U = P,
                    z = !P && D;
                function B() {
                    o.scribe({ element: "request_button", action: "click" }),
                        l()
                            .then(() => n({ text: K }))
                            .catch(p());
                }
                return a.createElement(
                    y.nO,
                    { namespace: Y },
                    a.createElement(
                        f.Z,
                        null,
                        a.createElement(
                            _.Z,
                            { location: S, screenType: "secondaryDetail", title: x },
                            a.createElement(c.Z, { description: L }),
                            z
                                ? a.createElement(Z.Z, {
                                      fetch: () => w(),
                                      fetchStatus: C,
                                      renderChildren: () =>
                                          a.createElement(
                                              a.Fragment,
                                              null,
                                              a.createElement(
                                                  r.Z,
                                                  null,
                                                  a.createElement(u.Z, { text: F }),
                                                  a.createElement(c.Z, { description: T, learnMoreLabel: W, learnMoreLink: A }),
                                                  (() => {
                                                      const { all: e, nonFailed: t } = h,
                                                          n = t.length ? t[0].status : e.length ? E.n$.FAILED : E.n$.NONE,
                                                          o = !!t.length && void 0 !== t[0].urls,
                                                          s = E.Ns.indexOf(n) >= 0,
                                                          l = o && n === E.n$.COMPLETE,
                                                          c = n === E.n$.FAILED,
                                                          u = n === E.n$.COMPLETE && !o,
                                                          m = u ? Q.UNAVAILABLE : n,
                                                          p = n === E.n$.NONE ? B : b.Z,
                                                          g = () => a.createElement(d.ZP, { disabled: s || c || u, link: l ? v : void 0, onPress: p, size: "small", style: k.narrowButton, type: "brandFilled" }, X(m));
                                                      return a.createElement(r.Z, { style: [k.narrowButtonRow, k.labelContainer] }, a.createElement(r.Z, { style: k.description }, a.createElement(i.ZP, null, N), a.createElement(i.ZP, { color: "gray700", style: [k.errorText, k.helpText] }, ee(m))), a.createElement(r.Z, { style: k.noShrink }, a.createElement(g, null)));
                                                  })(),
                                              ),
                                              a.createElement(s.Z, null),
                                              a.createElement(r.Z, null, a.createElement(u.Z, { text: O }), a.createElement(m.Z, { label: R, link: { external: !0, pathname: I } })),
                                          ),
                                  })
                                : null,
                            M && a.createElement(m.Z, { label: H, link: "/settings/your_twitter_data/request_data" }),
                            U && a.createElement(J, null),
                        ),
                    ),
                );
            }
            const ne = S(te);
        },
        374989: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var a = n(202784),
                r = n(325686),
                o = n(943401),
                i = n(111677),
                s = n.n(i),
                l = n(511323),
                c = n(581543),
                d = n(72591),
                u = n(247520),
                m = n(534763),
                p = n(652904),
                h = n(293115),
                b = n(264922);
            const g = "accountScreen",
                f = s().hc73f030,
                y = s().d3a2bde8,
                E = s().f15bfdb4,
                _ = s().idca4742,
                Z = s().b6ded35e,
                w = s().ab1f7ee0,
                C = s().f56af9cc,
                P = s().cce24bf4,
                S = s().hfb92b14,
                k = s().i203df96,
                v = { page: "settings", section: "account" },
                I = ({ location: e }) => {
                    const t = a.useMemo(
                        () => [
                            { description: _, label: E, link: "/settings/your_twitter_data/account", Icon: l.default },
                            { description: Z, label: w, link: "/settings/password", Icon: c.default },
                            { description: P, label: C, link: "/settings/download_your_data", Icon: d.default },
                            { description: k, label: S, link: "/settings/deactivate", Icon: u.default },
                        ],
                        [],
                    );
                    return a.createElement(
                        h.nO,
                        { namespace: v },
                        a.createElement(
                            p.Z,
                            null,
                            a.createElement(
                                b.Z,
                                { location: e, screenType: "primaryDetail", title: f },
                                a.createElement(
                                    r.Z,
                                    { testID: g },
                                    a.createElement(o.Z, { description: y }),
                                    t.map((e) => a.createElement(r.Z, { key: e.label }, a.createElement(m.H, e))),
                                ),
                            ),
                        ),
                    );
                };
        },
        200083: (e, t, n) => {
            n.r(t), n.d(t, { default: () => me });
            n(571372);
            var a,
                r,
                o,
                i,
                s,
                l = n(202784),
                c = n(351743),
                d = n.n(c),
                u = n(943401),
                m = n(954110),
                p = n(190286),
                h = n(111677),
                b = n.n(h),
                g = n(143095),
                f = n(652904),
                y = n(952793),
                E = n(71620),
                _ = n(293115),
                Z = n(125363),
                w = n(919022),
                C = n(264922),
                P = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "parodyProfileLabel" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "AccountParodyScreenImplV2ParodyLabelMutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "arg", variableName: "parodyProfileLabel" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "update_parody_label",
                                plural: !1,
                                selections: [
                                    { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (i = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null })], type: "PCFLabelUpdateError", abstractKey: null },
                                    { kind: "InlineFragment", selections: [o, (s = { alias: null, args: null, kind: "ScalarField", name: "parody_commentary_fan_label", storageKey: null })], type: "PCFLabelSettings", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelMutation", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "update_parody_label", plural: !1, selections: [o, { kind: "InlineFragment", selections: [i], type: "PCFLabelUpdateError", abstractKey: null }, { kind: "InlineFragment", selections: [s], type: "PCFLabelSettings", abstractKey: null }], storageKey: null }] },
                    params: { id: "73OvlPaHKjWcU21X1w9SKA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelMutation", operationKind: "mutation", text: null },
                };
            P.hash = "808e0b00a04d3c0255492c2f267b77e2";
            const S = P;
            var k = (function () {
                var e = [
                    {
                        alias: null,
                        args: [{ kind: "Literal", name: "s", value: "4721" }],
                        concreteType: "PCFLabelSettings",
                        kind: "LinkedField",
                        name: "get_parody_label_settings",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "disabled_duration_msec", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "is_label_update_disabled", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "parody_commentary_fan_label", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "update_disabled_reason", storageKey: null },
                        ],
                        storageKey: 'get_parody_label_settings(s:"4721")',
                    },
                ];
                return { fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", selections: e, type: "Query", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: [], kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", selections: e }, params: { id: "v5QRfeK5uuWULVGXyMLwyA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", operationKind: "query", text: null } };
            })();
            k.hash = "a39c6860aa951232fde54fef0202e66c";
            const v = k;
            n(585488);
            var I = n(101890),
                A = n(731708),
                D = n(88656),
                x = n(240666),
                L = n(601576),
                F = n(535338);
            const N = "https://help.x.com/rules-and-policies/authenticity",
                T = b().dbcf3a1a,
                O = b().hf019b20,
                R = b().ce62c8c2,
                M = b().a14080ce,
                U = b().db6796f6,
                z = b().c700b6be,
                B = b().e68b09b4,
                H = b().h3701ffe,
                V = b().i859a9d4,
                G = b().ff1739ae,
                $ = b().h70c602c,
                q = "AccountParody",
                W = { page: "settings", section: "account_information", component: "parody" },
                j = [
                    { label: (0, x.U)("None"), value: "None" },
                    { label: (0, x.U)("Parody"), value: "Parody" },
                    { label: (0, x.U)("Commentary"), value: "Commentary" },
                    { label: (0, x.U)("Fan"), value: "Fan" },
                ],
                K = v,
                Y = S;
            function Q({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    n = (0, Z.I0)(),
                    a = (0, E.n7)(q),
                    r = (0, F.p)(K, {}),
                    o = r.get_parody_label_settings?.is_label_update_disabled ?? !1,
                    i = r.get_parody_label_settings?.update_disabled_reason,
                    [s, c] = d()(Y),
                    [m, h] = l.useState(),
                    b = (t) => {
                        n(w.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    g = (e) => {
                        if (c) return;
                        const n = ((e) => (t) => {
                            b(e), a({ 403: { customAction: (e) => (0, L.mf)({ text: e.message ?? $ }) }, showToast: !0 })(t);
                        })(t);
                        s({
                            variables: { parodyProfileLabel: e },
                            onCompleted({ update_parody_label: e }) {
                                "PCFLabelSettings" === e?.__typename ? (h(void 0), location.reload()) : n(new D.Z("update_parody_label", 403, {}, [{ code: 403, message: e?.message ?? "" }]));
                            },
                            optimisticUpdater: () => b(e),
                            onError: n,
                        });
                    };
                return l.createElement(
                    _.nO,
                    { namespace: W },
                    l.createElement(
                        f.Z,
                        null,
                        l.createElement(
                            C.Z,
                            { title: T },
                            l.createElement(u.Z, { description: O, learnMoreLabel: V, learnMoreLink: N }),
                            l.createElement(I.Z, {
                                disabled: o,
                                label: G,
                                name: "profile_label",
                                onChange: (e, t) => {
                                    const n = "None" !== t;
                                    h({
                                        confirmLabel: n ? H : B,
                                        onConfirm: () => {
                                            h(void 0), g(t);
                                        },
                                        title: n ? M : R,
                                        desc: n ? z : U,
                                    });
                                },
                                options: j,
                                value: t,
                            }),
                            o && l.createElement(u.Z, { description: l.createElement(A.ZP, { color: "red500" }, i) }),
                            m && l.createElement(p.Z, { confirmButtonLabel: m.confirmLabel, headline: m.title, learnMoreLink: N, learnMoreText: V, onCancel: () => h(void 0), onConfirm: m.onConfirm, text: m.desc, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            var J = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "parodyProfileLabel" }],
                    t = [{ alias: null, args: [{ kind: "Variable", name: "parody_commentary_fan_label", variableName: "parodyProfileLabel" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "AccountParodyUserMutation", selections: t, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "AccountParodyUserMutation", selections: t }, params: { id: "bKOVxrOlLbA5udkJci7wcg", metadata: {}, name: "AccountParodyUserMutation", operationKind: "mutation", text: null } };
            })();
            J.hash = "b521e06ae2a7c6e9e57c2684320bf20b";
            const X = J,
                ee = "https://help.x.com/rules-and-policies/authenticity",
                te = b().dbcf3a1a,
                ne = b().cbb2367c,
                ae = b().ge48855c,
                re = b().hf019b20,
                oe = b().d048571e,
                ie = b().g905134c,
                se = b().e68b09b4,
                le = b().i859a9d4,
                ce = "AccountParody",
                de = { page: "settings", section: "account_information", component: "parody" };
            function ue({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    n = (0, Z.I0)(),
                    a = (0, E.n7)(ce),
                    [r, o] = d()(X),
                    [i, { toggle: s }] = (0, g.O)(!1),
                    c = (t) => {
                        n(w.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    h = (e) => {
                        if (o) return;
                        const n = e ? "Parody" : "None",
                            i = ((e) => (t) => {
                                c(e), a({ showToast: !0 })(t);
                            })(t);
                        r({
                            variables: { parodyProfileLabel: n },
                            onCompleted({ user_preferences_put: e }) {
                                "Done" === e ? (s(!1), location.reload()) : i(new Error(`unexpected result on toggling parody${String(e)}`));
                            },
                            optimisticUpdater: () => c(n),
                            onError: i,
                        });
                    };
                return l.createElement(
                    _.nO,
                    { namespace: de },
                    l.createElement(
                        f.Z,
                        null,
                        l.createElement(
                            C.Z,
                            { title: te },
                            l.createElement(u.Z, { description: ne }),
                            l.createElement(m.Z, {
                                checked: "None" !== t,
                                helpText: re,
                                label: ae,
                                learnMoreLink: ee,
                                name: "parody_label",
                                onChange: (e, t) => {
                                    t ? h(t) : s(!0);
                                },
                                testID: "parody_label_switch",
                            }),
                            i && l.createElement(p.Z, { confirmButtonLabel: se, headline: oe, learnMoreLink: ee, learnMoreText: le, onCancel: () => s(!1), onConfirm: () => h(!1), text: ie, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            function me() {
                const e = (0, Z.v9)(w.ZP.selectViewerUser),
                    t = (0, y.hC)("profile_label_improvements_pcf_edit_profile_enabled");
                return null == e ? null : t ? l.createElement(Q, { user: e }) : l.createElement(ue, { user: e });
            }
        },
        780709: (e, t, n) => {
            n.r(t), n.d(t, { default: () => P });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                i = n(943401),
                s = n(111677),
                l = n.n(s),
                c = n(517747),
                d = n(744649),
                u = n(534763),
                m = n(652904),
                p = n(293115),
                h = n(264922);
            const b = "notificationsScreen",
                g = l().eb75875e,
                f = l().a3f22d8e,
                y = l().i647fb04,
                E = l().ef1b5cbc,
                _ = l().bcd81cac,
                Z = l().da867c58,
                w = { page: "settings", section: "notification" },
                C = [
                    { description: E, label: y, link: "/settings/notifications/filters", Icon: c.default, testID: "testIconFilter" },
                    { description: Z, label: _, link: "/settings/notifications/preferences", Icon: d.default, testID: "testIconDeviceNotification" },
                ],
                P = ({ location: e }) =>
                    r.createElement(
                        p.nO,
                        { namespace: w },
                        r.createElement(
                            m.Z,
                            null,
                            r.createElement(
                                h.Z,
                                { location: e, screenType: "primaryDetail", title: g },
                                r.createElement(
                                    o.Z,
                                    { testID: b },
                                    r.createElement(i.Z, { description: f }),
                                    C.map((e) => r.createElement(u.H, (0, a.Z)({}, e, { key: e.link }))),
                                ),
                            ),
                        ),
                    );
        },
        609848: (e, t, n) => {
            n.d(t, { Z: () => N });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                i = n(688715),
                s = n(844685),
                l = n(855488),
                c = n(108362),
                d = n(154003),
                u = n(392237),
                m = n(111677),
                p = n.n(m),
                h = n(615656),
                b = n(290402),
                g = n(443781),
                f = n(500002),
                y = n(312771),
                E = n(615027),
                _ = n(267966),
                Z = n(71620),
                w = n(668214),
                C = n(673110);
            const P = (0, w.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: C.UD }))
                    .propsFromActions(() => ({ verifyPassword: C.Gv, createLocalApiErrorHandler: (0, Z.zr)("PASSWORD_GATEWAY") })),
                S = p().fe36fe10,
                k = p().dec3c9b8,
                v = p().hccd9dbe,
                I = p().d1091f50,
                A = p().g9677c6e,
                D = p().c8cb0b4c;
            class x extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { password: "" }),
                        (this._passwordlessSsoEnabled = this.context.featureSwitches.isTrue("responsive_web_passwordless_sso_enabled")),
                        (this._handlePasswordSubmit = () => {
                            const { createLocalApiErrorHandler: e, verifyPassword: t } = this.props,
                                { password: n } = this.state;
                            "" !== n &&
                                t(n)
                                    .then(() => {
                                        this.setState({ password: "", verificationRequired: !1 }), this._makeFetch();
                                    })
                                    .catch(e({ [h.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: D }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [h.ZP.PasswordVerificationRequired]: {
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
                    e.fetchStatus === y.ZP.LOADED && this.props.fetchStatus === y.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        n = a.createElement(o.ZP, { link: { pathname: (0, i.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, I);
                    return a.createElement(a.Fragment, null, e ? a.createElement(s.Z, { text: e }) : null, a.createElement(r.Z, { style: [_.Z.viewItem, _.Z.bottomBorder] }, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, v)), a.createElement(l.Z, { errorText: t, helperText: n, invalid: !!t, label: k, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), a.createElement(c.Z, { style: L.buttonContainer }, a.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: L.button, type: "brandFilled" }, A)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: n } = this.props,
                        { verificationRequired: r } = this.state,
                        o = e === y.ZP.FAILED && r;
                    return a.createElement(a.Fragment, null, o ? (this._passwordlessSsoEnabled ? a.createElement(E.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : a.createElement(b.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: n }));
                }
            }
            (x.contextType = g.rC), (x.defaultProps = { titleHeader: S });
            const L = u.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                F = P(x),
                N = (0, f.ZP)(F);
        },
        569291: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(615656),
                o = n(290402),
                i = n(312771),
                s = n(615027),
                l = n(71620),
                c = n(668214);
            const d = (0, c.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, l.zr)("TWO_FACTOR_AUTHENTICATION_GATEWAY") }));
            class u extends a.Component {
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
                                        [r.ZP.GenericForbidden]: {
                                            customAction: () => {
                                                this.setState({ verificationRequired: !0 });
                                            },
                                        },
                                        [r.ZP.PasswordVerificationRequired]: {
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
                        { verificationRequired: n } = this.state,
                        r = e === i.ZP.FAILED && n;
                    return a.createElement(a.Fragment, null, r ? a.createElement(s.Z, { to: "/i/flow/verify_account_ownership" }) : a.createElement(o.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: t }));
                }
            }
            const m = d.forwardRef(u);
        },
        267966: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(392237);
            const r = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                o = a.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...r(e) } }));
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                o = n(913973),
                i = n(731708),
                s = n(950822),
                l = n(466792),
                c = n(58881),
                d = n(530732),
                u = n(352924),
                m = n(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: p, label: b, name: g, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        E = c.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: m.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = n ? y : E;
                    return a.createElement(l.Z, { disabled: u }, (l) => a.createElement(r.Z, { role: "label", style: [h.root, !u && h.interactive], testID: f }, a.createElement(r.Z, { style: h.topContainer }, a.createElement(i.ZP, { id: this.labelId }, b), a.createElement(r.Z, { style: h.radioContainer }, a.createElement(d.Z, { interactiveStyles: _, interactivityState: l, style: h.radioBackground }, a.createElement(r.Z, { style: [h.circle, n && h.circleActive, u && h.circleDisabled, n && u && h.circleCheckedAndDisabled] }, n ? a.createElement(o.default, { style: h.checkMark }) : null)), (0, s.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), p ? a.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...m.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                g = "radioGroup";
            let f = 1;
            class y extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: o, name: s, options: l, value: c } = this.props;
                    return a.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "radiogroup", style: n && E.disabled, testID: `${g}${s}` },
                        o ? a.createElement(r.Z, { id: this._labelId, role: "label", style: E.header }, a.createElement(i.ZP, { style: E.label, weight: "bold" }, o), t ? a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => a.createElement(b, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: s, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const E = m.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                r = n(325686),
                o = n(449479),
                i = n(392237);
            const s = (e) => a.createElement(r.Z, { style: l.root }, a.createElement(o.Z, e)),
                l = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        744649: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 17h6v2H7v-2zm7.5-15C15.88 2 17 3.12 17 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C4.12 22 3 20.88 3 19.5v-15C3 3.12 4.12 2 5.5 2h9zM5 19.5c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9c-.28 0-.5.22-.5.5v15zm15.74-3.49l1.64 1.15C23.4 15.7 24 13.92 24 12s-.6-3.7-1.62-5.16l-1.64 1.15C21.53 9.13 22 10.51 22 12s-.47 2.87-1.26 4.01zm-.82-7.45l-1.64 1.15c.45.65.72 1.43.72 2.29 0 .85-.27 1.64-.72 2.29l1.64 1.15C20.6 14.47 21 13.28 21 12s-.4-2.47-1.08-3.44z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        143095: (e, t, n) => {
            n.d(t, { O: () => r });
            var a = n(202784);
            function r(e) {
                const [t, n] = a.useState(e);
                return [
                    t,
                    a.useMemo(() => {
                        const e = (e) => {
                            if ("boolean" == typeof e) return n(e);
                            n((e) => !e);
                        };
                        return (e.toTrue = n.bind(null, !0)), (e.toFalse = n.bind(null, !1)), (e.toggle = e), e;
                    }, []),
                ];
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp.17f197aa.js.map
