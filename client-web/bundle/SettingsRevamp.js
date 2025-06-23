(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp", "icons/IconDeviceNotification-js"],
    {
        200111: (e) => {
            e.exports = { queryId: "_ckHEj05gan2VfNHG6thBA", operationName: "DisableUserAccountLabel", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        661490: (e) => {
            e.exports = { queryId: "rD5gLxVmMvtdtYU1UHWlFQ", operationName: "UserAccountLabel", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => p });
            var a = n(807896),
                r = n(202784),
                o = n(182056),
                i = n(879113),
                s = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                m = ({ retryMessage: e, ...t }, n) => {
                    const s = o.Z.isOnline();
                    return r.createElement(i.Z, (0, a.Z)({}, t, { icon: s ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: s ? e : u }));
                },
                h = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(m);
        },
        534763: (e, t, n) => {
            "use strict";
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
        181617: (e, t, n) => {
            "use strict";
            n.d(t, { PP: () => P, cs: () => w, ET: () => A, MB: () => S, iR: () => Z });
            var a = n(424869),
                r = n.n(a),
                o = n(163889),
                i = n(414742),
                s = n(200111),
                l = n.n(s),
                c = n(661490),
                d = n.n(c),
                u = n(503768);
            const m = (e, t) => {
                    const n = t?.user?.result;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, u.dL)(e) }), (0, i.jB)(e);
                },
                h = (e, t) => {
                    const n = t?.disable_user_account_label;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, u.dL)(e) }), (0, i.jB)(e);
                },
                p = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(d(), { rest_id: t }, m), disableUserAccountLabel: () => e.graphQL(l(), {}, h) });
            var b = n(499627),
                g = n(917799),
                E = n(312771);
            const f = "accountTaxonomy",
                _ = r()({ account_label: { disableStatus: E.ZP.NONE, fetchStatus: E.ZP.NONE, managed_label: void 0 } }),
                y = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                C = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            b.Z.register({
                [f]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.LOADING } };
                        case y.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: E.ZP.LOADED } };
                        case y.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.FAILED } };
                        case C.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.LOADING } };
                        case C.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: E.ZP.LOADED, disableStatus: E.ZP.LOADED } };
                        case C.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const S = (e) => e[f]?.account_label?.managed_label?.owner_screen_name,
                Z = (e) => e[f]?.account_label?.fetchStatus || E.ZP.NONE,
                A = (e) => e[f]?.account_label?.disableStatus || E.ZP.NONE,
                w =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, g._O)(t, { request: a.withEndpoint(p).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: y, context: "FETCH_USER_ACCOUNT_LABEL" }),
                P =
                    () =>
                    (e, t, { api: n }) =>
                        (0, g._O)(e, { request: n.withEndpoint(p).disableUserAccountLabel, params: {} })({ actionTypes: C, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        576025: (e, t, n) => {
            "use strict";
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
        648651: (e, t, n) => {
            "use strict";
            n.d(t, { Ns: () => m, n$: () => u, fm: () => f, _d: () => E, VL: () => _, NK: () => p, UD: () => b, c: () => g });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, n) => e.get("account/user_twitter_data", t, n, ""), createDataDownload: (t, n) => e.post("account/user_twitter_data", t, {}, { ...n, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, n) => e.put("account/user_twitter_data", t, { ...n, "content-type": "application/json" }, "") });
            var r = n(499627),
                o = n(917799),
                i = n(312771);
            const s = "userData",
                l = `rweb/${s}`,
                c = (0, o.dg)(l, "FETCH_DOWNLOADS"),
                d = (0, o.dg)(l, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                m = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                h = { fetchStatus: i.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [s]: function (e = h, t) {
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
            const p = (e) => e[s].downloads,
                b = (e) => e[s].fetchStatus,
                g = (e) => 503 === e[s].error?.status,
                E =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a).fetchDownloads })({ actionTypes: c, context: "FETCH_DOWNLOADS" }),
                f =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a).createDataDownload })({ actionTypes: d, context: "CREATE_DOWNLOAD" }),
                _ =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o.Vg)(t, { params: e, request: r.withEndpoint(a).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        702091: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { AccountInformation: () => Qe, default: () => We });
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
                h = n(293115),
                p = n(725516),
                b = n(316325),
                g = n(688715),
                E = n(530525),
                f = n(439592),
                _ = n(154003),
                y = n(593866),
                C = n(138099),
                S = n(786998),
                Z = n(370006),
                A = n(520913),
                w = n(323265),
                P = n(668214);
            const L = (0, P.Z)().withAnalytics();
            var k = n(392237);
            const D = k.default.create((e) => ({ headerIcon: { color: e.colors.brandColor, height: e.spacesPx.space28, width: e.spacesPx.space28 }, curvedHeader: { clipPath: "ellipse(100% 100% at 38% 0%)", backgroundColor: e.colors.teal600, paddingBottom: e.spacesPx.space40, width: "100%" }, footer: { width: "100%", padding: e.spacesPx.space24 }, image1: { aspectRatio: "1.31", height: "100%", width: "100%", maxHeight: "249px", maxWidth: "327px" }, image2: { aspectRatio: "1.88", height: "100%", width: "100%", maxHeight: "175px", maxWidth: "329px" }, topContent: { paddingStart: e.spacesPx.space32, paddingEnd: e.spacesPx.space32 }, learnMoreContainer: { paddingTop: e.spacesPx.space8, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalContent: { paddingTop: e.spacesPx.space28, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalImageContainer: { alignItems: "center", backgroundColor: e.colors.teal0, height: "auto", justifyContent: "center", marginTop: e.spacesPx.space28 }, modalTitle: { paddingBottom: e.spacesPx.space8 }, numberCircle: { alignItems: "center", backgroundColor: e.colors.buttonBlack, borderRadius: e.borderRadii.infinite, height: e.spacesPx.space48, justifyContent: "center", marginEnd: e.spacesPx.space16, width: e.spacesPx.space48 }, scrollable: { flexGrow: 1, flexShrink: 1, overflowY: "auto" }, sheet: { height: "75%", maxHeight: "700px", minHeight: "480px", overflowY: "auto" }, stepListContainer: { paddingTop: e.spacesPx.space16, paddingEnd: e.spacesPx.space28 }, stepTitle: { paddingBottom: e.spacesPx.space2 } })),
                I = "https://abs.twimg.com/images/automation-onboard-1_s.png",
                x = "https://abs.twimg.com/images/automation-onboard-2_s.png",
                U = [
                    {
                        aspectRatio: 1.31,
                        default: I,
                        variants: [
                            { uri: I, height: 249, width: 327 },
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
                T = (0, g.ju)("https://help.x.com/rules-and-policies/twitter-automation"),
                v = (0, g.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                F = c().g2a9bd3e,
                N = c().dd9b3aae,
                O = c().b80bdc40,
                M = c().a01ac9b6,
                R = c().b989e1fe,
                B = a.createElement(c().I18NFormatMessage, { $i18n: "j31f2f97" }, a.createElement(o.ZP, { color: "text", link: T, weight: "bold", withUnderline: !0 }, c().a18d6a7d)),
                z = c().i2d599aa,
                H = [
                    { title: c().gd5bed72, description: c().g6d44432 },
                    { title: c().e20a69e8, description: c().d2f88358 },
                    { title: c().e427f632, description: c().a4d7cffa },
                ],
                V = c().j24c37b2;
            class G extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = () => a.createElement(r.Z, { style: D.curvedHeader }, a.createElement(r.Z, { style: [D.topContent, { paddingTop: w.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, F)))),
                        (this._renderAdaptiveImageFromSource = (e) => {
                            const t = U[e];
                            return a.createElement(E.Z, { "aria-label": "", aspectMode: f.Z.exact(t.aspectRatio), customVariants: t.variants, image: t.default });
                        }),
                        (this._renderContent = () => a.createElement(r.Z, null, a.createElement(r.Z, { style: D.modalContent }, a.createElement(o.ZP, { size: "title4", style: D.modalTitle, weight: "heavy" }, N), a.createElement(o.ZP, { color: "gray700", size: "body" }, O)), a.createElement(r.Z, { style: D.modalImageContainer }, a.createElement(r.Z, { style: D.image1 }, this._renderAdaptiveImageFromSource(0))), a.createElement(r.Z, { style: D.modalContent }, a.createElement(o.ZP, { color: "gray700", size: "body" }, M)), a.createElement(r.Z, { style: D.modalImageContainer }, a.createElement(r.Z, { style: D.image2 }, this._renderAdaptiveImageFromSource(1))), a.createElement(r.Z, { style: D.modalContent }, a.createElement(o.ZP, { size: "title4", style: D.modalTitle, weight: "heavy" }, R), a.createElement(o.ZP, { color: "gray700", size: "body" }, B)), a.createElement(r.Z, { style: D.modalContent }, a.createElement(o.ZP, { size: "title4", style: D.modalTitle, weight: "heavy" }, z)), a.createElement(r.Z, { style: D.stepListContainer }, this._renderSteps()), a.createElement(r.Z, { style: D.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, this._renderLearnMoreLabel())))),
                        (this._renderFooter = () => a.createElement(r.Z, { style: D.footer }, a.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: this.props.onConfirm, size: "xLarge" }, V))),
                        (this._renderLearnMoreLabel = () => a.createElement(c().I18NFormatMessage, { $i18n: "ed8f77d3" }, a.createElement(o.ZP, { color: "text", link: v, onClick: this.props.onFaqClick, weight: "bold", withUnderline: !0 }, c().e9965c14))),
                        (this._renderStepLabel = (e) => a.createElement(o.ZP, { size: "headline2", style: D.stepTitle, weight: "bold" }, e)),
                        (this._renderStepDecorationBadge = (e) => a.createElement(r.Z, { style: D.numberCircle }, a.createElement(o.ZP, { color: "buttonWhite", size: "headline1", weight: "bold" }, e))),
                        (this._renderSteps = () => {
                            const e = H.map((e, t) => ({ label: this._renderStepLabel(e.title), decoration: this._renderStepDecorationBadge(t + 1), description: e.description }));
                            return a.createElement(y.Z, { items: e });
                        });
                }
                render() {
                    return a.createElement(C.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: this.props.onClose, type: "full", withMask: !0 }, a.createElement(S.Z, { centeredLogo: a.createElement(A.default, { style: D.headerIcon }), leftControl: a.createElement(Z.Z, { backButtonType: "close", onClick: this.props.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: w.ZP.isMobileOS() ? null : D.sheet }, a.createElement(r.Z, { style: D.scrollable }, this._renderHeader(), this._renderContent()), this._renderFooter()));
                }
            }
            const j = L(G),
                q = c().a67dbd0a,
                K = [
                    { title: c().ee78c192, desc: c().c3f35e0c },
                    { title: c().d019b5fa, desc: c().dd04f24e },
                    { title: c().hb0f8bbc, desc: c().g69acc5c },
                ],
                $ = c().j24c37b2;
            function Q() {
                return a.createElement(r.Z, { style: D.curvedHeader }, a.createElement(r.Z, { style: [D.topContent, { paddingTop: w.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, q)));
            }
            function W() {
                return a.createElement(c().I18NFormatMessage, { $i18n: "dd040d67" }, a.createElement(o.ZP, { color: "text", link: "https://help.x.com/rules-and-policies/authenticity", weight: "bold", withUnderline: !0 }, c().d313d431));
            }
            function Y() {
                return a.createElement(
                    r.Z,
                    null,
                    K.map(({ desc: e, title: t }) => a.createElement(r.Z, { key: t, style: D.modalContent }, a.createElement(o.ZP, { size: "title4", style: D.modalTitle, weight: "heavy" }, t), a.createElement(o.ZP, { color: "gray700", size: "body" }, e))),
                    a.createElement(r.Z, { style: D.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, a.createElement(W, null))),
                );
            }
            function J({ onConfirm: e }) {
                return a.createElement(r.Z, { style: D.footer }, a.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: e, size: "xLarge" }, $));
            }
            const X = function (e) {
                return a.createElement(C.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: e.onClose, type: "full", withMask: !0 }, a.createElement(S.Z, { centeredLogo: a.createElement(A.default, { style: D.headerIcon }), leftControl: a.createElement(Z.Z, { backButtonType: "close", onClick: e.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: w.ZP.isMobileOS() ? null : D.sheet }, a.createElement(r.Z, { style: D.scrollable }, a.createElement(Q, null), a.createElement(Y, null)), a.createElement(J, { onConfirm: e.onConfirm })));
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
            const he = (e, t) => {
                    const n = ue.ZP.selectViewerUser(e),
                        a = (0, ne.Z)(n) ? me.ZP.LOADED : se.selectFetchStatus(e);
                    return (0, me.h1)(le.qu(e), le.I3(e), a);
                },
                pe = (e) => {
                    const t = (0, de.eV)(e);
                    return t && (0, ie._t)(e, t);
                },
                be = (0, P.Z)()
                    .propsFromState(() => ({ countryName: pe, email: se.selectFirstEmail, fetchStatus: he, viewerUser: ue.ZP.selectViewerUser, managingAccount: re.MB, phone: se.selectFirstPhoneNumber, ages: le.LJ, birthdate: le.ZS, gender: le.VU, languages: le.VT, languageCode: ce.VT, signupDetails: le.Hb, verificationAccess: oe.kD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ae.zr)("SETTINGS_ACCOUNT_INFORMATION_SCREEN"), fetchAccountVerificationAccess: oe.$J, fetchDevices: se.fetchDevices, fetchData: le.nJ, fetchPreferences: le.CP, fetchCountryNamesIfNeeded: ie.Po, fetchUserAccountLabel: re.cs })),
                ge = k.default.create((e) => ({ helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" } })),
                Ee = c().f15bfdb4,
                fe = c().d0a77c9b,
                _e = c().jade381b,
                ye = c().d1f6d336,
                Ce = c().a3841918,
                Se = c().f70cd5ee,
                Ze = c().ib6f1694,
                Ae = c().a8d0108e,
                we = c().de323650,
                Pe = c().b6ab31be,
                Le = c().c21037d0,
                ke = c().h3290872,
                De = c().d12d42dc,
                Ie = c().hbd12156,
                xe = c().b7ec04f4,
                Ue = c().f70d5780,
                Te = c().dc62d3c6,
                ve = c().ad31b476,
                Fe = c().a67dbd0a,
                Ne = c().a3db727e,
                Oe = c().i62a03aa,
                Me = c().c119dee8,
                Re = c().eacf1990,
                Be = c().a3bf1262,
                ze = c().bf96fda4,
                He = c().d495680e,
                Ve = c().h530db16,
                Ge = c().d6d80990,
                je = a.createElement(c().I18NFormatMessage, { $i18n: "ce6f73c7" }, a.createElement(o.ZP, { link: "/settings/account/personalization" }, c().i0d81ddb)),
                qe = c().i859a9d4,
                Ke = { page: "settings", section: "account_information" },
                $e = { page: "account_type_landing" };
            class Qe extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.combinedFetches = () => {
                            const { fetchAccountVerificationAccess: e, fetchCountryNamesIfNeeded: t, fetchData: n, fetchDevices: a, fetchPreferences: r, fetchUserAccountLabel: o, languageCode: i, viewerUser: s } = this.props,
                                l = [n(), r(), t(i || "")];
                            return s && (l.push(a()), this.context.featureSwitches.isTrue("identity_verification_intake_enabled") && l.push(e()), l.push(o(s.id_str))), Promise.all(l);
                        }),
                        (this._render = () => {
                            const { ages: e, birthdate: t, countryName: n, email: s, gender: l, languages: c, phone: d, signupDetails: u, viewerUser: m } = this.props,
                                { showAutomationOnboardingModal: h, showParodyOnboardingModal: p } = this.state,
                                b = e.map((e) => ("string" == typeof e ? e : e.display)).join(", "),
                                g = t && _e(new Date(`${t}T00:00:00`)),
                                E = c.map(({ display: e }) => e).join(", ");
                            return a.createElement(
                                r.Z,
                                null,
                                h && a.createElement(j, { onClose: this._handleCloseAutomationModal, onConfirm: this._handleConfirmAutomationModal, onFaqClick: this._handleFaqClick }),
                                p && a.createElement(X, { onClose: this._handleCloseParodyModal, onConfirm: this._handleConfirmParodyModal }),
                                m ? a.createElement(i.Z, { description: m.screen_name && a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, `@${m.screen_name}`), label: ye, link: "/settings/screen_name" }) : null,
                                m ? a.createElement(i.Z, { description: d, label: Se, link: "/settings/phone" }) : null,
                                m ? a.createElement(i.Z, { description: s, label: Ce, link: "/settings/email" }) : null,
                                m ? this._renderVerified() : null,
                                m ? a.createElement(i.Z, { description: m.protected ? xe : Oe, label: Ve, link: "/settings/audience_and_tagging" }) : null,
                                m ? a.createElement(r.Z, { style: [ge.infoItem, ge.bottomBorder], testID: "account-creation" }, a.createElement(o.ZP, null, Ze), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, fe(new Date(m.created_at))), u.creation_ip && u.country ? a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, `${u.creation_ip} (${u.country})`) : null) : null,
                                m ? a.createElement(i.Z, { description: n, label: Le, link: "/settings/country" }) : null,
                                a.createElement(i.Z, { description: E, label: He, link: "/settings/languages" }),
                                a.createElement(i.Z, { description: this._renderGender(l.value), label: Ae, link: "/settings/your_twitter_data/gender" }),
                                m ? a.createElement(i.Z, { description: a.createElement(a.Fragment, null, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, g), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, t ? Be : Re)), label: Me, link: "/settings/profile" }) : null,
                                a.createElement(i.Z, { description: b, label: ze, link: "/settings/your_twitter_data/age" }),
                                m ? this._renderAutomation() : null,
                                m ? this._renderParodyManage() : null,
                                m ? null : a.createElement(r.Z, { style: ge.infoItem, testID: "loggedOutHelp" }, a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, Ge), a.createElement("br", null), a.createElement(o.ZP, { color: "gray700", style: ge.helpText }, je)),
                            );
                        }),
                        (this._renderGender = (e) => {
                            switch (e) {
                                case "female":
                                    return we;
                                case "male":
                                    return Pe;
                                default:
                                    return e;
                            }
                        }),
                        (this._renderVerified = () => {
                            const e = a.createElement(s.Z, { label: ke, learnMoreLabel: qe, learnMoreLink: "https://help.x.com/managing-your-account/about-twitter-verified-accounts", subtext: this.props.viewerUser?.verified || this.props.viewerUser?.is_blue_verified ? Ue : Te });
                            if (this.context.featureSwitches.isTrue("identity_verification_intake_enabled")) {
                                let t, n;
                                switch (this.props.verificationAccess.status) {
                                    case b.pY.DISABLED:
                                    case b.pY.NOT_ELIGIBLE:
                                        return e;
                                    case b.pY.VERIFIED:
                                        n = Ue;
                                        break;
                                    default:
                                        (t = Ie), (n = Te);
                                }
                                return a.createElement(s.Z, { label: ke, learnMoreLabel: t, learnMoreLink: "/settings/account/request_verification", subtext: n });
                            }
                            return e;
                        }),
                        (this._handleAutomationOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...Ke, element: "automation", action: "click" }), this.props.managingAccount || (e.scribe({ ...$e, action: "impression" }), this.setState({ showAutomationOnboardingModal: !0 }));
                        }),
                        (this._handleParodyOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...Ke, element: "parody", action: "click" }), (this.props.viewerUser?.parody_commentary_fan_label && "None" !== this.props.viewerUser?.parody_commentary_fan_label) || (e.scribe({ ...$e, action: "impression" }), this.setState({ showParodyOnboardingModal: !0 }));
                        }),
                        (this._handleCloseAutomationModal = () => {
                            this.setState({ showAutomationOnboardingModal: !1 });
                        }),
                        (this._handleCloseParodyModal = () => {
                            this.setState({ showParodyOnboardingModal: !1 });
                        }),
                        (this._handleConfirmAutomationModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...$e, element: "call_to_action", action: "click" }), t.push("/settings/account/automation");
                        }),
                        (this._handleConfirmParodyModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...$e, element: "call_to_action", action: "click" }), t.push("/settings/account/parody");
                        }),
                        (this._handleFaqClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...$e, component: "link", element: "help_faqs", action: "click" });
                        }),
                        (this._renderAutomation = () => {
                            const { managingAccount: e } = this.props,
                                t = e ? "/settings/account/automation" : "/settings/your_twitter_data/account";
                            return a.createElement(i.Z, { description: ve, label: De, link: t, onPress: this._handleAutomationOnPress });
                        }),
                        (this._renderParodyManage = () => {
                            const { featureSwitches: e } = this.context;
                            if (!e.isTrue("profile_label_improvements_pcf_settings_enabled")) return null;
                            const t = this.props.viewerUser?.parody_commentary_fan_label,
                                n = t && "None" !== t,
                                r = n ? "/settings/account/parody" : "/settings/your_twitter_data/account";
                            return a.createElement(i.Z, { description: n ? (0, m.U)(t) : Ne, label: Fe, link: r, onPress: this._handleParodyOnPress });
                        }),
                        (this.state = { showAutomationOnboardingModal: !1, showParodyOnboardingModal: !1 });
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return a.createElement(h.nO, { namespace: Ke }, a.createElement(u.Z, null, a.createElement(te.Z, { location: t, title: Ee }, a.createElement(ee.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            Qe.contextType = d.rC;
            const We = (0, p.Z)(be(Qe));
        },
        450028: (e, t, n) => {
            "use strict";
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
                h = n(111677),
                p = n.n(h),
                b = n(516951),
                g = n(443781),
                E = n(652904),
                f = n(293115),
                _ = n(648651),
                y = n(264922),
                C = n(569291),
                S = n(71620),
                Z = n(668214),
                A = n(601576);
            const w = (0, Z.Z)()
                .propsFromState(() => ({ fetchStatus: _.UD, downloads: _.NK, isUserDataUnavailable: _.c }))
                .propsFromActions(() => ({ addToast: A.fz, createDataDownload: _.fm, createLocalApiErrorHandler: (0, S.zr)("DOWNLOAD_YOUR_DATA"), fetchDownloads: _._d }))
                .withAnalytics({ page: "settings", section: "account", component: "download_your_data" });
            const P = n(392237).default.create((e) => ({ description: { flexShrink: 1 }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, errorText: { marginEnd: e.spaces.space20 }, floatingLink: { paddingStart: e.spaces.space20 }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, noShrink: { flexShrink: 0 } })),
                L = "/settings/your_twitter_data/data",
                k = "https://pscp.tv/account/your-data",
                D = (0, o.ju)("https://help.x.com/managing-your-account/accessing-your-twitter-data"),
                I = (0, o.ju)("https://help.x.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true"),
                x = p().f56af9cc,
                U = p().cce24bf4,
                T = p().h3ed510e,
                v = p().c39b0e24,
                F = p().b708417c,
                N = p().jbf5843e,
                O = p().ea886c6e,
                M = p().cdcc2ad4,
                R = p().dbeff87a,
                B = p().ce5d2c46,
                z = p().b2ed92c4,
                H = p().gee8110e,
                V = p().f56af9cc,
                G = p().hb02ed28,
                j = p().c2254084,
                q = p().f62d1d9e,
                K = p().i859a9d4,
                $ = a.createElement(p().I18NFormatMessage, { $i18n: "efc1de65" }, a.createElement(i.ZP, { link: I }, p().db40dfcf)),
                Q = p().b221ca4c,
                W = { page: "settings", section: "account", component: "download_your_data" },
                Y = Object.freeze({ ..._.n$, UNAVAILABLE: "UNAVAILABLE" }),
                J = () => a.createElement(a.Fragment, null, a.createElement(s.Z, null), a.createElement(l.Z, { label: V, withBottomBorder: !0 }), a.createElement(c.Z, { description: G })),
                X = (e) => {
                    switch (e) {
                        case Y.NONE:
                            return R;
                        case Y.FAILED:
                            return M;
                        case Y.COMPLETE:
                            return H;
                        case Y.UNAVAILABLE:
                            return B;
                        default:
                            return z;
                    }
                },
                ee = (e) => {
                    switch (e) {
                        case Y.NONE:
                            return null;
                        case Y.FAILED:
                            return $;
                        case Y.COMPLETE:
                            return q;
                        case Y.UNAVAILABLE:
                            return G;
                        default:
                            return j;
                    }
                };
            function te(e) {
                const { viewerUserId: t } = a.useContext(g.rC),
                    { addToast: n, analytics: o, createDataDownload: l, createLocalApiErrorHandler: h, downloads: p, fetchDownloads: S, fetchStatus: Z, isUserDataUnavailable: A, location: w } = e,
                    I = !!t,
                    M = !I,
                    R = A,
                    B = !A && I;
                function z() {
                    o.scribe({ element: "request_button", action: "click" }),
                        l()
                            .then(() => n({ text: Q }))
                            .catch(h());
                }
                return a.createElement(
                    f.nO,
                    { namespace: W },
                    a.createElement(
                        E.Z,
                        null,
                        a.createElement(
                            y.Z,
                            { location: w, screenType: "secondaryDetail", title: x },
                            a.createElement(c.Z, { description: U }),
                            B
                                ? a.createElement(C.Z, {
                                      fetch: () => S(),
                                      fetchStatus: Z,
                                      renderChildren: () =>
                                          a.createElement(
                                              a.Fragment,
                                              null,
                                              a.createElement(
                                                  r.Z,
                                                  null,
                                                  a.createElement(u.Z, { text: T }),
                                                  a.createElement(c.Z, { description: F, learnMoreLabel: K, learnMoreLink: D }),
                                                  (() => {
                                                      const { all: e, nonFailed: t } = p,
                                                          n = t.length ? t[0].status : e.length ? _.n$.FAILED : _.n$.NONE,
                                                          o = !!t.length && void 0 !== t[0].urls,
                                                          s = _.Ns.indexOf(n) >= 0,
                                                          l = o && n === _.n$.COMPLETE,
                                                          c = n === _.n$.FAILED,
                                                          u = n === _.n$.COMPLETE && !o,
                                                          m = u ? Y.UNAVAILABLE : n,
                                                          h = n === _.n$.NONE ? z : b.Z,
                                                          g = () => a.createElement(d.ZP, { disabled: s || c || u, link: l ? L : void 0, onPress: h, size: "small", style: P.narrowButton, type: "brandFilled" }, X(m));
                                                      return a.createElement(r.Z, { style: [P.narrowButtonRow, P.labelContainer] }, a.createElement(r.Z, { style: P.description }, a.createElement(i.ZP, null, v), a.createElement(i.ZP, { color: "gray700", style: [P.errorText, P.helpText] }, ee(m))), a.createElement(r.Z, { style: P.noShrink }, a.createElement(g, null)));
                                                  })(),
                                              ),
                                              a.createElement(s.Z, null),
                                              a.createElement(r.Z, null, a.createElement(u.Z, { text: N }), a.createElement(m.Z, { label: O, link: { external: !0, pathname: k } })),
                                          ),
                                  })
                                : null,
                            M && a.createElement(m.Z, { label: H, link: "/settings/your_twitter_data/request_data" }),
                            R && a.createElement(J, null),
                        ),
                    ),
                );
            }
            const ne = w(te);
        },
        374989: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => k });
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
                h = n(652904),
                p = n(293115),
                b = n(264922);
            const g = "accountScreen",
                E = s().hc73f030,
                f = s().d3a2bde8,
                _ = s().f15bfdb4,
                y = s().idca4742,
                C = s().b6ded35e,
                S = s().ab1f7ee0,
                Z = s().f56af9cc,
                A = s().cce24bf4,
                w = s().hfb92b14,
                P = s().i203df96,
                L = { page: "settings", section: "account" },
                k = ({ location: e }) => {
                    const t = a.useMemo(
                        () => [
                            { description: y, label: _, link: "/settings/your_twitter_data/account", Icon: l.default },
                            { description: C, label: S, link: "/settings/password", Icon: c.default },
                            { description: A, label: Z, link: "/settings/download_your_data", Icon: d.default },
                            { description: P, label: w, link: "/settings/deactivate", Icon: u.default },
                        ],
                        [],
                    );
                    return a.createElement(
                        p.nO,
                        { namespace: L },
                        a.createElement(
                            h.Z,
                            null,
                            a.createElement(
                                b.Z,
                                { location: e, screenType: "primaryDetail", title: E },
                                a.createElement(
                                    r.Z,
                                    { testID: g },
                                    a.createElement(o.Z, { description: f }),
                                    t.map((e) => a.createElement(r.Z, { key: e.label }, a.createElement(m.H, e))),
                                ),
                            ),
                        ),
                    );
                };
        },
        82999: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { AccountAutomationScreen: () => $, changeManagingAccountLabel: () => T, default: () => W, setManagingAccountLabel: () => v });
            var a = n(202784),
                r = n(325686),
                o = n(688715),
                i = n(731708),
                s = n(834324),
                l = n(779610),
                c = n(88307),
                d = n(420412),
                u = n(242454),
                m = n(529356),
                h = n(943401),
                p = n(392237),
                b = n(111677),
                g = n.n(b),
                E = n(47086),
                f = n(293723),
                _ = n(290402),
                y = n(443781),
                C = n(652904),
                S = n(293115),
                Z = n(312771),
                A = n(264922),
                w = n(668214),
                P = n(181617),
                L = n(919022);
            const k = (0, w.Z)()
                    .propsFromState(() => ({ managingAccount: P.MB, managingAccountFetchStatus: P.iR, disableAccountLabelStatus: P.ET, user: L.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: P.PP, fetchUserAccountLabel: P.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                D = (0, o.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                I = g().d12d42dc,
                x = g().ad31b476,
                U = g().a2981062,
                T = g().aff4540e,
                v = g().b8b9d100,
                F = a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, a.createElement(g().I18NFormatMessage, { $i18n: "d79b6b7b" }, a.createElement(i.ZP, { link: D, size: "subtext2" }, g().f79acef3))),
                N = g().e0bc51f6,
                O = g().i9028824,
                M = g().b92190c2,
                R = g().fb03b39a,
                B = g().bd51ddfa,
                z = { page: "settings", section: "account_information", component: "automation" },
                H = { page: "system", section: "message" },
                V = g().e91c15f6,
                G = g().df035b80,
                j = g().bd12cf34,
                q = g().cfd2f35e,
                K = "/i/flow/enable_automated_account";
            class $ extends a.Component {
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
                                n = e ? E.default : f.default,
                                o = e ? "danger" : "success";
                            return a.createElement(r.Z, { style: Q.inlineCallout }, a.createElement(s.Z, { Icon: n, headline: t || "", onClose: this._handleHideCallout, type: o }));
                        }),
                        (this._handleFetchUserAccountLabel = () => {
                            const { fetchUserAccountLabel: e, user: t } = this.props,
                                n = t?.id_str;
                            n && e(n);
                        }),
                        (this._handleDisableUserAccountLabel = () => {
                            const { disableUserAccountLabel: e } = this.props;
                            e(), this._handleToggleDisableConfirmation();
                        }),
                        (this._handleToggleDisableConfirmation = () => {
                            this.setState({ showDisableConfirmation: !this.state.showDisableConfirmation });
                        }),
                        (this._renderUnassignedManagingAccountView = () => a.createElement(r.Z, null, a.createElement(l.Z, { description: F, label: v, link: K }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => a.createElement(r.Z, null, a.createElement(c.Z, { label: U, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), a.createElement(l.Z, { label: T, link: K }), this.state.showCallout && this._renderCallout(), a.createElement(d.Z, null), a.createElement(u.Z, { color: "red500", label: N, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => a.createElement(m.Z, { actionLabel: j, graphicDisplayMode: "none", headline: V, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: q, subtext: G, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return a.createElement(A.Z, { title: I }, t && this._renderDisconnectConfirmation(), a.createElement(h.Z, { description: x }), e);
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
                    const { disableAccountLabelStatus: n, managingAccount: a, managingAccountFetchStatus: r } = this.props,
                        { disableAccountLabelStatus: o, managingAccount: i, managingAccountFetchStatus: s } = e,
                        { hasExitedOCF: l } = this.state,
                        c = i && a !== i,
                        d = s === Z.ZP.LOADED || r === Z.ZP.LOADED;
                    if ((c && d && l && (this._handleShowCallout(M), this._scribe({ ...z, action: "enabled" })), n !== o))
                        switch (o) {
                            case Z.ZP.LOADED:
                                this._handleShowCallout(R), this._scribe({ ...z, action: "disabled" });
                                break;
                            case Z.ZP.FAILED:
                                this._handleShowCallout(B, !0), this._scribe({ ...H, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return a.createElement(S.nO, { namespace: z }, a.createElement(C.Z, null, a.createElement(_.Z, { "aria-label": O, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            $.contextType = y.rC;
            const Q = p.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                W = k($);
        },
        200083: (e, t, n) => {
            "use strict";
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
                h = n(190286),
                p = n(111677),
                b = n.n(p),
                g = n(143095),
                E = n(652904),
                f = n(952793),
                _ = n(71620),
                y = n(293115),
                C = n(125363),
                S = n(919022),
                Z = n(264922),
                A = {
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
            A.hash = "808e0b00a04d3c0255492c2f267b77e2";
            const w = A;
            var P = (function () {
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
            P.hash = "a39c6860aa951232fde54fef0202e66c";
            const L = P;
            n(585488);
            var k = n(101890),
                D = n(731708),
                I = n(88656),
                x = n(240666),
                U = n(601576),
                T = n(535338);
            const v = "https://help.x.com/rules-and-policies/authenticity",
                F = b().dbcf3a1a,
                N = b().hf019b20,
                O = b().ce62c8c2,
                M = b().a14080ce,
                R = b().db6796f6,
                B = b().c700b6be,
                z = b().e68b09b4,
                H = b().h3701ffe,
                V = b().i859a9d4,
                G = b().ff1739ae,
                j = b().h70c602c,
                q = "AccountParody",
                K = { page: "settings", section: "account_information", component: "parody" },
                $ = [
                    { label: (0, x.U)("None"), value: "None" },
                    { label: (0, x.U)("Parody"), value: "Parody" },
                    { label: (0, x.U)("Commentary"), value: "Commentary" },
                    { label: (0, x.U)("Fan"), value: "Fan" },
                ],
                Q = L,
                W = w;
            function Y({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    n = (0, C.I0)(),
                    a = (0, _.n7)(q),
                    r = (0, T.p)(Q, {}),
                    o = r.get_parody_label_settings?.is_label_update_disabled ?? !1,
                    i = r.get_parody_label_settings?.update_disabled_reason,
                    [s, c] = d()(W),
                    [m, p] = l.useState(),
                    b = (t) => {
                        n(S.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    g = (e) => {
                        if (c) return;
                        const n = ((e) => (t) => {
                            b(e), a({ 403: { customAction: (e) => (0, U.mf)({ text: e.message ?? j }) }, showToast: !0 })(t);
                        })(t);
                        s({
                            variables: { parodyProfileLabel: e },
                            onCompleted({ update_parody_label: e }) {
                                "PCFLabelSettings" === e?.__typename ? (p(void 0), location.reload()) : n(new I.Z("update_parody_label", 403, {}, [{ code: 403, message: e?.message ?? "" }]));
                            },
                            optimisticUpdater: () => b(e),
                            onError: n,
                        });
                    };
                return l.createElement(
                    y.nO,
                    { namespace: K },
                    l.createElement(
                        E.Z,
                        null,
                        l.createElement(
                            Z.Z,
                            { title: F },
                            l.createElement(u.Z, { description: N, learnMoreLabel: V, learnMoreLink: v }),
                            l.createElement(k.Z, {
                                disabled: o,
                                label: G,
                                name: "profile_label",
                                onChange: (e, t) => {
                                    const n = "None" !== t;
                                    p({
                                        confirmLabel: n ? H : z,
                                        onConfirm: () => {
                                            p(void 0), g(t);
                                        },
                                        title: n ? M : O,
                                        desc: n ? B : R,
                                    });
                                },
                                options: $,
                                value: t,
                            }),
                            o && l.createElement(u.Z, { description: l.createElement(D.ZP, { color: "red500" }, i) }),
                            m && l.createElement(h.Z, { confirmButtonLabel: m.confirmLabel, headline: m.title, learnMoreLink: v, learnMoreText: V, onCancel: () => p(void 0), onConfirm: m.onConfirm, text: m.desc, withCancelButton: !0 }),
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
                    n = (0, C.I0)(),
                    a = (0, _.n7)(ce),
                    [r, o] = d()(X),
                    [i, { toggle: s }] = (0, g.O)(!1),
                    c = (t) => {
                        n(S.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    p = (e) => {
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
                    y.nO,
                    { namespace: de },
                    l.createElement(
                        E.Z,
                        null,
                        l.createElement(
                            Z.Z,
                            { title: te },
                            l.createElement(u.Z, { description: ne }),
                            l.createElement(m.Z, {
                                checked: "None" !== t,
                                helpText: re,
                                label: ae,
                                learnMoreLink: ee,
                                name: "parody_label",
                                onChange: (e, t) => {
                                    t ? p(t) : s(!0);
                                },
                                testID: "parody_label_switch",
                            }),
                            i && l.createElement(h.Z, { confirmButtonLabel: se, headline: oe, learnMoreLink: ee, learnMoreText: le, onCancel: () => s(!1), onConfirm: () => p(!1), text: ie, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            function me() {
                const e = (0, C.v9)(S.ZP.selectViewerUser),
                    t = (0, f.hC)("profile_label_improvements_pcf_edit_profile_enabled");
                return null == e ? null : t ? l.createElement(Y, { user: e }) : l.createElement(ue, { user: e });
            }
        },
        780709: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => A });
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
                h = n(293115),
                p = n(264922);
            const b = "notificationsScreen",
                g = l().eb75875e,
                E = l().a3f22d8e,
                f = l().i647fb04,
                _ = l().ef1b5cbc,
                y = l().bcd81cac,
                C = l().da867c58,
                S = { page: "settings", section: "notification" },
                Z = [
                    { description: _, label: f, link: "/settings/notifications/filters", Icon: c.default, testID: "testIconFilter" },
                    { description: C, label: y, link: "/settings/notifications/preferences", Icon: d.default, testID: "testIconDeviceNotification" },
                ],
                A = ({ location: e }) =>
                    r.createElement(
                        h.nO,
                        { namespace: S },
                        r.createElement(
                            m.Z,
                            null,
                            r.createElement(
                                p.Z,
                                { location: e, screenType: "primaryDetail", title: g },
                                r.createElement(
                                    o.Z,
                                    { testID: b },
                                    r.createElement(i.Z, { description: E }),
                                    Z.map((e) => r.createElement(u.H, (0, a.Z)({}, e, { key: e.link }))),
                                ),
                            ),
                        ),
                    );
        },
        569291: (e, t, n) => {
            "use strict";
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
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                i = n(392237);
            class s extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? a.createElement(o.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: i, withBottomBorder: s } = this.props;
                    return a.createElement(r.Z, { style: [l.root, s && l.bottomBorder] }, a.createElement(o.ZP, null, e), i ? (t && n ? this._renderSubtextAndLink() : a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, i)) : null);
                }
            }
            s.defaultProps = { withBottomBorder: !0 };
            const l = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = s;
        },
        744649: (e, t, n) => {
            "use strict";
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
            "use strict";
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp.b6f6470a.js.map
