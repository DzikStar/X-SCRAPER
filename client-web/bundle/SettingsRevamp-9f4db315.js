(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp-9f4db315"],
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
                s = n(879113),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                d = n(968478);
            const u = l().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const i = o.Z.isOnline();
                    return r.createElement(s.Z, (0, a.Z)({}, t, { icon: i ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: i ? e : u }));
                },
                m = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(h);
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => l, b: () => d });
            var a = n(807896),
                r = n(202784),
                o = n(392237),
                s = n(779610);
            const i = (e) => {
                    const { Icon: t, iconColor: n, testID: a } = e;
                    return r.createElement(t, { style: n ? { color: o.default.theme.colors[n] } : c.thumbnail, testID: a });
                },
                c = o.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function l(e) {
                const { Icon: t, iconColor: n, testID: o, ...c } = e;
                return r.createElement(s.Z, (0, a.Z)({}, c, { thumbnail: r.createElement(i, { Icon: t, iconColor: n, testID: o }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(s.Z, (0, a.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        181617: (e, t, n) => {
            "use strict";
            n.d(t, { PP: () => P, cs: () => A, ET: () => C, MB: () => w, iR: () => S });
            var a = n(424869),
                r = n.n(a),
                o = n(163889),
                s = n(414742),
                i = n(200111),
                c = n.n(i),
                l = n(661490),
                d = n.n(l),
                u = n(503768);
            const h = (e, t) => {
                    const n = t?.user?.result;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, u.dL)(e) }), (0, s.jB)(e);
                },
                m = (e, t) => {
                    const n = t?.disable_user_account_label;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, u.dL)(e) }), (0, s.jB)(e);
                },
                p = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(d(), { rest_id: t }, h), disableUserAccountLabel: () => e.graphQL(c(), {}, m) });
            var b = n(499627),
                E = n(917799),
                g = n(312771);
            const f = "accountTaxonomy",
                _ = r()({ account_label: { disableStatus: g.ZP.NONE, fetchStatus: g.ZP.NONE, managed_label: void 0 } }),
                y = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                Z = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            b.Z.register({
                [f]: function (e = _, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: g.ZP.LOADING } };
                        case y.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: g.ZP.LOADED } };
                        case y.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: g.ZP.FAILED } };
                        case Z.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: g.ZP.LOADING } };
                        case Z.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: g.ZP.LOADED, disableStatus: g.ZP.LOADED } };
                        case Z.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: g.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const w = (e) => e[f]?.account_label?.managed_label?.owner_screen_name,
                S = (e) => e[f]?.account_label?.fetchStatus || g.ZP.NONE,
                C = (e) => e[f]?.account_label?.disableStatus || g.ZP.NONE,
                A =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, E._O)(t, { request: a.withEndpoint(p).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: y, context: "FETCH_USER_ACCOUNT_LABEL" }),
                P =
                    () =>
                    (e, t, { api: n }) =>
                        (0, E._O)(e, { request: n.withEndpoint(p).disableUserAccountLabel, params: {} })({ actionTypes: Z, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        576025: (e, t, n) => {
            "use strict";
            n.d(t, { Lf: () => l, Po: () => u, _t: () => d });
            n(571372);
            var a = n(499627),
                r = n(312771);
            const o = "countryNames",
                s = { fetchStatus: r.ZP.NONE, countries: {} },
                i = { REQUEST: `${o}_REQUEST`, FAILURE: `${o}_FAILURE`, SUCCESS: `${o}_SUCCESS` },
                c = (e = s, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case i.REQUEST:
                            return { ...e, fetchStatus: r.ZP.LOADING };
                        case i.FAILURE:
                            return { ...e, fetchStatus: r.ZP.NONE };
                        case i.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: r.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            a.Z.register({ [o]: c });
            const l = (e) => e[o].countries,
                d = (e, t) => {
                    const n = t && t.toUpperCase();
                    return e[o].countries[n];
                },
                u = (e) => (t, a) =>
                    a()[o].fetchStatus === r.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: i.REQUEST }),
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
                                  t({ type: i.SUCCESS, payload: a });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: i.FAILURE } : u("en"));
                              }));
        },
        673110: (e, t, n) => {
            "use strict";
            n.d(t, { Gv: () => m, UD: () => h });
            var a = n(226395),
                r = n(499627),
                o = n(917799),
                s = n(312771),
                i = n(291020);
            const c = "verifyPassword",
                l = `rweb/${i.Y}/${c}`,
                d = (0, o.dg)(l, "VERIFY_PASSWORD"),
                u = { fetchStatus: s.ZP.NONE };
            r.Z.register({
                [c]: function (e = u, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case d.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case d.SUCCESS:
                            return { ...e, fetchStatus: s.ZP.LOADED };
                        case d.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[c].fetchStatus,
                m =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o._O)(t, { params: { password: e }, request: r.withEndpoint(a.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        648651: (e, t, n) => {
            "use strict";
            n.d(t, { Ns: () => h, n$: () => u, fm: () => f, _d: () => g, VL: () => _, NK: () => p, UD: () => b, c: () => E });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, n) => e.get("account/user_twitter_data", t, n, ""), createDataDownload: (t, n) => e.post("account/user_twitter_data", t, {}, { ...n, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, n) => e.put("account/user_twitter_data", t, { ...n, "content-type": "application/json" }, "") });
            var r = n(499627),
                o = n(917799),
                s = n(312771);
            const i = "userData",
                c = `rweb/${i}`,
                l = (0, o.dg)(c, "FETCH_DOWNLOADS"),
                d = (0, o.dg)(c, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                h = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                m = { fetchStatus: s.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [i]: function (e = m, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.SUCCESS: {
                            const n = t.payload || [],
                                a = n.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: s.ZP.LOADED, downloads: { ...e.downloads, all: n, nonFailed: a } };
                        }
                        case l.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case l.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: s.ZP.FAILED };
                        case d.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case d.FAILURE:
                            return { ...e, fetchStatus: s.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const p = (e) => e[i].downloads,
                b = (e) => e[i].fetchStatus,
                E = (e) => 503 === e[i].error?.status,
                g =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a).fetchDownloads })({ actionTypes: l, context: "FETCH_DOWNLOADS" }),
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
            n.r(t), n.d(t, { AccountInformation: () => Ye, default: () => Qe });
            n(136728);
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(779610),
                i = n(88307),
                c = n(111677),
                l = n.n(c),
                d = n(443781),
                u = n(652904),
                h = n(240666),
                m = n(293115),
                p = n(725516),
                b = n(316325),
                E = n(688715),
                g = n(530525),
                f = n(439592),
                _ = n(154003),
                y = n(593866),
                Z = n(138099),
                w = n(786998),
                S = n(370006),
                C = n(520913),
                A = n(323265),
                P = n(668214);
            const L = (0, P.Z)().withAnalytics();
            var D = n(392237);
            const I = D.default.create((e) => ({ headerIcon: { color: e.colors.brandColor, height: e.spacesPx.space28, width: e.spacesPx.space28 }, curvedHeader: { clipPath: "ellipse(100% 100% at 38% 0%)", backgroundColor: e.colors.teal600, paddingBottom: e.spacesPx.space40, width: "100%" }, footer: { width: "100%", padding: e.spacesPx.space24 }, image1: { aspectRatio: "1.31", height: "100%", width: "100%", maxHeight: "249px", maxWidth: "327px" }, image2: { aspectRatio: "1.88", height: "100%", width: "100%", maxHeight: "175px", maxWidth: "329px" }, topContent: { paddingStart: e.spacesPx.space32, paddingEnd: e.spacesPx.space32 }, learnMoreContainer: { paddingTop: e.spacesPx.space8, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalContent: { paddingTop: e.spacesPx.space28, paddingStart: e.spacesPx.space28, paddingEnd: e.spacesPx.space28 }, modalImageContainer: { alignItems: "center", backgroundColor: e.colors.teal0, height: "auto", justifyContent: "center", marginTop: e.spacesPx.space28 }, modalTitle: { paddingBottom: e.spacesPx.space8 }, numberCircle: { alignItems: "center", backgroundColor: e.colors.buttonBlack, borderRadius: e.borderRadii.infinite, height: e.spacesPx.space48, justifyContent: "center", marginEnd: e.spacesPx.space16, width: e.spacesPx.space48 }, scrollable: { flexGrow: 1, flexShrink: 1, overflowY: "auto" }, sheet: { height: "75%", maxHeight: "700px", minHeight: "480px", overflowY: "auto" }, stepListContainer: { paddingTop: e.spacesPx.space16, paddingEnd: e.spacesPx.space28 }, stepTitle: { paddingBottom: e.spacesPx.space2 } })),
                x = "https://abs.twimg.com/images/automation-onboard-1_s.png",
                T = "https://abs.twimg.com/images/automation-onboard-2_s.png",
                U = [
                    {
                        aspectRatio: 1.31,
                        default: x,
                        variants: [
                            { uri: x, height: 249, width: 327 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-1_m.png", height: 498, width: 653 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-1_l.png", height: 747, width: 980 },
                        ],
                    },
                    {
                        aspectRatio: 1.88,
                        default: T,
                        variants: [
                            { uri: T, height: 175, width: 329 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_m.png", height: 350, width: 658 },
                            { uri: "https://abs.twimg.com/images/automation-onboard-2_l.png", height: 525, width: 987 },
                        ],
                    },
                ],
                k = (0, E.ju)("https://help.x.com/rules-and-policies/twitter-automation"),
                N = (0, E.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                v = l().g2a9bd3e,
                O = l().dd9b3aae,
                F = l().b80bdc40,
                R = l().a01ac9b6,
                M = l().b989e1fe,
                B = a.createElement(l().I18NFormatMessage, { $i18n: "j31f2f97" }, a.createElement(o.ZP, { color: "text", link: k, weight: "bold", withUnderline: !0 }, l().a18d6a7d)),
                H = l().i2d599aa,
                z = [
                    { title: l().gd5bed72, description: l().g6d44432 },
                    { title: l().e20a69e8, description: l().d2f88358 },
                    { title: l().e427f632, description: l().a4d7cffa },
                ],
                V = l().j24c37b2;
            class G extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderHeader = () => a.createElement(r.Z, { style: I.curvedHeader }, a.createElement(r.Z, { style: [I.topContent, { paddingTop: A.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, v)))),
                        (this._renderAdaptiveImageFromSource = (e) => {
                            const t = U[e];
                            return a.createElement(g.Z, { "aria-label": "", aspectMode: f.Z.exact(t.aspectRatio), customVariants: t.variants, image: t.default });
                        }),
                        (this._renderContent = () => a.createElement(r.Z, null, a.createElement(r.Z, { style: I.modalContent }, a.createElement(o.ZP, { size: "title4", style: I.modalTitle, weight: "heavy" }, O), a.createElement(o.ZP, { color: "gray700", size: "body" }, F)), a.createElement(r.Z, { style: I.modalImageContainer }, a.createElement(r.Z, { style: I.image1 }, this._renderAdaptiveImageFromSource(0))), a.createElement(r.Z, { style: I.modalContent }, a.createElement(o.ZP, { color: "gray700", size: "body" }, R)), a.createElement(r.Z, { style: I.modalImageContainer }, a.createElement(r.Z, { style: I.image2 }, this._renderAdaptiveImageFromSource(1))), a.createElement(r.Z, { style: I.modalContent }, a.createElement(o.ZP, { size: "title4", style: I.modalTitle, weight: "heavy" }, M), a.createElement(o.ZP, { color: "gray700", size: "body" }, B)), a.createElement(r.Z, { style: I.modalContent }, a.createElement(o.ZP, { size: "title4", style: I.modalTitle, weight: "heavy" }, H)), a.createElement(r.Z, { style: I.stepListContainer }, this._renderSteps()), a.createElement(r.Z, { style: I.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, this._renderLearnMoreLabel())))),
                        (this._renderFooter = () => a.createElement(r.Z, { style: I.footer }, a.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: this.props.onConfirm, size: "xLarge" }, V))),
                        (this._renderLearnMoreLabel = () => a.createElement(l().I18NFormatMessage, { $i18n: "ed8f77d3" }, a.createElement(o.ZP, { color: "text", link: N, onClick: this.props.onFaqClick, weight: "bold", withUnderline: !0 }, l().e9965c14))),
                        (this._renderStepLabel = (e) => a.createElement(o.ZP, { size: "headline2", style: I.stepTitle, weight: "bold" }, e)),
                        (this._renderStepDecorationBadge = (e) => a.createElement(r.Z, { style: I.numberCircle }, a.createElement(o.ZP, { color: "buttonWhite", size: "headline1", weight: "bold" }, e))),
                        (this._renderSteps = () => {
                            const e = z.map((e, t) => ({ label: this._renderStepLabel(e.title), decoration: this._renderStepDecorationBadge(t + 1), description: e.description }));
                            return a.createElement(y.Z, { items: e });
                        });
                }
                render() {
                    return a.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: this.props.onClose, type: "full", withMask: !0 }, a.createElement(w.Z, { centeredLogo: a.createElement(C.default, { style: I.headerIcon }), leftControl: a.createElement(S.Z, { backButtonType: "close", onClick: this.props.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: A.ZP.isMobileOS() ? null : I.sheet }, a.createElement(r.Z, { style: I.scrollable }, this._renderHeader(), this._renderContent()), this._renderFooter()));
                }
            }
            const q = L(G),
                j = l().a67dbd0a,
                $ = [
                    { title: l().ee78c192, desc: l().c3f35e0c },
                    { title: l().d019b5fa, desc: l().dd04f24e },
                    { title: l().hb0f8bbc, desc: l().g69acc5c },
                ],
                W = l().j24c37b2;
            function Y() {
                return a.createElement(r.Z, { style: I.curvedHeader }, a.createElement(r.Z, { style: [I.topContent, { paddingTop: A.ZP.isMobileOS() ? "26px" : "36px" }] }, a.createElement(o.ZP, { color: "white", size: "title2", weight: "bold" }, j)));
            }
            function Q() {
                return a.createElement(l().I18NFormatMessage, { $i18n: "dd040d67" }, a.createElement(o.ZP, { color: "text", link: "https://help.x.com/rules-and-policies/authenticity", weight: "bold", withUnderline: !0 }, l().d313d431));
            }
            function J() {
                return a.createElement(
                    r.Z,
                    null,
                    $.map(({ desc: e, title: t }) => a.createElement(r.Z, { key: t, style: I.modalContent }, a.createElement(o.ZP, { size: "title4", style: I.modalTitle, weight: "heavy" }, t), a.createElement(o.ZP, { color: "gray700", size: "body" }, e))),
                    a.createElement(r.Z, { style: I.learnMoreContainer }, a.createElement(o.ZP, { color: "gray700", size: "body" }, a.createElement(Q, null))),
                );
            }
            function K({ onConfirm: e }) {
                return a.createElement(r.Z, { style: I.footer }, a.createElement(_.ZP, { backgroundColor: "teal600", color: "white", onClick: e, size: "xLarge" }, W));
            }
            const X = function (e) {
                return a.createElement(Z.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: e.onClose, type: "full", withMask: !0 }, a.createElement(w.Z, { centeredLogo: a.createElement(C.default, { style: I.headerIcon }), leftControl: a.createElement(S.Z, { backButtonType: "close", onClick: e.onClose }), withBackground: !0 }), a.createElement(r.Z, { style: A.ZP.isMobileOS() ? null : I.sheet }, a.createElement(r.Z, { style: I.scrollable }, a.createElement(Y, null), a.createElement(J, null)), a.createElement(K, { onConfirm: e.onConfirm })));
            };
            var ee = n(609848),
                te = n(264922),
                ne = n(401388),
                ae = n(71620),
                re = n(181617),
                oe = n(946194),
                se = n(576025),
                ie = n(257166),
                ce = n(205253),
                le = n(390387),
                de = n(38562),
                ue = n(919022),
                he = n(312771);
            const me = (e, t) => {
                    const n = ue.ZP.selectViewerUser(e),
                        a = (0, ne.Z)(n) ? he.ZP.LOADED : ie.selectFetchStatus(e);
                    return (0, he.h1)(ce.qu(e), ce.I3(e), a);
                },
                pe = (e) => {
                    const t = (0, de.eV)(e);
                    return t && (0, se._t)(e, t);
                },
                be = (0, P.Z)()
                    .propsFromState(() => ({ countryName: pe, email: ie.selectFirstEmail, fetchStatus: me, viewerUser: ue.ZP.selectViewerUser, managingAccount: re.MB, phone: ie.selectFirstPhoneNumber, ages: ce.LJ, birthdate: ce.ZS, gender: ce.VU, languages: ce.VT, languageCode: le.VT, signupDetails: ce.Hb, verificationAccess: oe.kD }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ae.zr)("SETTINGS_ACCOUNT_INFORMATION_SCREEN"), fetchAccountVerificationAccess: oe.$J, fetchDevices: ie.fetchDevices, fetchData: ce.nJ, fetchPreferences: ce.CP, fetchCountryNamesIfNeeded: se.Po, fetchUserAccountLabel: re.cs })),
                Ee = D.default.create((e) => ({ helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, infoItem: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" } })),
                ge = l().f15bfdb4,
                fe = l().d0a77c9b,
                _e = l().jade381b,
                ye = l().d1f6d336,
                Ze = l().a3841918,
                we = l().f70cd5ee,
                Se = l().ib6f1694,
                Ce = l().a8d0108e,
                Ae = l().de323650,
                Pe = l().b6ab31be,
                Le = l().c21037d0,
                De = l().h3290872,
                Ie = l().d12d42dc,
                xe = l().hbd12156,
                Te = l().b7ec04f4,
                Ue = l().f70d5780,
                ke = l().dc62d3c6,
                Ne = l().ad31b476,
                ve = l().a67dbd0a,
                Oe = l().a3db727e,
                Fe = l().i62a03aa,
                Re = l().c119dee8,
                Me = l().eacf1990,
                Be = l().a3bf1262,
                He = l().bf96fda4,
                ze = l().d495680e,
                Ve = l().h530db16,
                Ge = l().d6d80990,
                qe = a.createElement(l().I18NFormatMessage, { $i18n: "ce6f73c7" }, a.createElement(o.ZP, { link: "/settings/account/personalization" }, l().i0d81ddb)),
                je = l().i859a9d4,
                $e = { page: "settings", section: "account_information" },
                We = { page: "account_type_landing" };
            class Ye extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.combinedFetches = () => {
                            const { fetchAccountVerificationAccess: e, fetchCountryNamesIfNeeded: t, fetchData: n, fetchDevices: a, fetchPreferences: r, fetchUserAccountLabel: o, languageCode: s, viewerUser: i } = this.props,
                                c = [n(), r(), t(s || "")];
                            return i && (c.push(a()), this.context.featureSwitches.isTrue("identity_verification_intake_enabled") && c.push(e()), c.push(o(i.id_str))), Promise.all(c);
                        }),
                        (this._render = () => {
                            const { ages: e, birthdate: t, countryName: n, email: i, gender: c, languages: l, phone: d, signupDetails: u, viewerUser: h } = this.props,
                                { showAutomationOnboardingModal: m, showParodyOnboardingModal: p } = this.state,
                                b = e.map((e) => ("string" == typeof e ? e : e.display)).join(", "),
                                E = t && _e(new Date(`${t}T00:00:00`)),
                                g = l.map(({ display: e }) => e).join(", ");
                            return a.createElement(
                                r.Z,
                                null,
                                m && a.createElement(q, { onClose: this._handleCloseAutomationModal, onConfirm: this._handleConfirmAutomationModal, onFaqClick: this._handleFaqClick }),
                                p && a.createElement(X, { onClose: this._handleCloseParodyModal, onConfirm: this._handleConfirmParodyModal }),
                                h ? a.createElement(s.Z, { description: h.screen_name && a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, `@${h.screen_name}`), label: ye, link: "/settings/screen_name" }) : null,
                                h ? a.createElement(s.Z, { description: d, label: we, link: "/settings/phone" }) : null,
                                h ? a.createElement(s.Z, { description: i, label: Ze, link: "/settings/email" }) : null,
                                h ? this._renderVerified() : null,
                                h ? a.createElement(s.Z, { description: h.protected ? Te : Fe, label: Ve, link: "/settings/audience_and_tagging" }) : null,
                                h ? a.createElement(r.Z, { style: [Ee.infoItem, Ee.bottomBorder], testID: "account-creation" }, a.createElement(o.ZP, null, Se), a.createElement(o.ZP, { color: "gray700", style: Ee.helpText }, fe(new Date(h.created_at))), u.creation_ip && u.country ? a.createElement(o.ZP, { color: "gray700", style: Ee.helpText }, `${u.creation_ip} (${u.country})`) : null) : null,
                                h ? a.createElement(s.Z, { description: n, label: Le, link: "/settings/country" }) : null,
                                a.createElement(s.Z, { description: g, label: ze, link: "/settings/languages" }),
                                a.createElement(s.Z, { description: this._renderGender(c.value), label: Ce, link: "/settings/your_twitter_data/gender" }),
                                h ? a.createElement(s.Z, { description: a.createElement(a.Fragment, null, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, E), a.createElement(o.ZP, { color: "gray700", style: Ee.helpText }, t ? Be : Me)), label: Re, link: "/settings/profile" }) : null,
                                a.createElement(s.Z, { description: b, label: He, link: "/settings/your_twitter_data/age" }),
                                h ? this._renderAutomation() : null,
                                h ? this._renderParodyManage() : null,
                                h ? null : a.createElement(r.Z, { style: Ee.infoItem, testID: "loggedOutHelp" }, a.createElement(o.ZP, { color: "gray700", style: Ee.helpText }, Ge), a.createElement("br", null), a.createElement(o.ZP, { color: "gray700", style: Ee.helpText }, qe)),
                            );
                        }),
                        (this._renderGender = (e) => {
                            switch (e) {
                                case "female":
                                    return Ae;
                                case "male":
                                    return Pe;
                                default:
                                    return e;
                            }
                        }),
                        (this._renderVerified = () => {
                            const e = a.createElement(i.Z, { label: De, learnMoreLabel: je, learnMoreLink: "https://help.x.com/managing-your-account/about-twitter-verified-accounts", subtext: this.props.viewerUser?.verified || this.props.viewerUser?.is_blue_verified ? Ue : ke });
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
                                        (t = xe), (n = ke);
                                }
                                return a.createElement(i.Z, { label: De, learnMoreLabel: t, learnMoreLink: "/settings/account/request_verification", subtext: n });
                            }
                            return e;
                        }),
                        (this._handleAutomationOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...$e, element: "automation", action: "click" }), this.props.managingAccount || (e.scribe({ ...We, action: "impression" }), this.setState({ showAutomationOnboardingModal: !0 }));
                        }),
                        (this._handleParodyOnPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...$e, element: "parody", action: "click" }), (this.props.viewerUser?.parody_commentary_fan_label && "None" !== this.props.viewerUser?.parody_commentary_fan_label) || (e.scribe({ ...We, action: "impression" }), this.setState({ showParodyOnboardingModal: !0 }));
                        }),
                        (this._handleCloseAutomationModal = () => {
                            this.setState({ showAutomationOnboardingModal: !1 });
                        }),
                        (this._handleCloseParodyModal = () => {
                            this.setState({ showParodyOnboardingModal: !1 });
                        }),
                        (this._handleConfirmAutomationModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...We, element: "call_to_action", action: "click" }), t.push("/settings/account/automation");
                        }),
                        (this._handleConfirmParodyModal = () => {
                            const { analytics: e, history: t } = this.props;
                            e.scribe({ ...We, element: "call_to_action", action: "click" }), t.push("/settings/account/parody");
                        }),
                        (this._handleFaqClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ ...We, component: "link", element: "help_faqs", action: "click" });
                        }),
                        (this._renderAutomation = () => {
                            const { managingAccount: e } = this.props,
                                t = e ? "/settings/account/automation" : "/settings/your_twitter_data/account";
                            return a.createElement(s.Z, { description: Ne, label: Ie, link: t, onPress: this._handleAutomationOnPress });
                        }),
                        (this._renderParodyManage = () => {
                            const { featureSwitches: e } = this.context;
                            if (!e.isTrue("profile_label_improvements_pcf_settings_enabled")) return null;
                            const t = this.props.viewerUser?.parody_commentary_fan_label,
                                n = t && "None" !== t,
                                r = n ? "/settings/account/parody" : "/settings/your_twitter_data/account";
                            return a.createElement(s.Z, { description: n ? (0, h.U)(t) : Oe, label: ve, link: r, onPress: this._handleParodyOnPress });
                        }),
                        (this.state = { showAutomationOnboardingModal: !1, showParodyOnboardingModal: !1 });
                }
                render() {
                    const { fetchStatus: e, location: t } = this.props;
                    return a.createElement(m.nO, { namespace: $e }, a.createElement(u.Z, null, a.createElement(te.Z, { location: t, title: ge }, a.createElement(ee.Z, { fetch: this.combinedFetches, fetchStatus: e, render: () => this._render() }))));
                }
            }
            Ye.contextType = d.rC;
            const Qe = (0, p.Z)(be(Ye));
        },
        450028: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { ArchiveUnavailable: () => K, YourTwitterData: () => te, default: () => ne });
            var a = n(202784),
                r = n(325686),
                o = n(688715),
                s = n(731708),
                i = n(420412),
                c = n(88307),
                l = n(943401),
                d = n(154003),
                u = n(844685),
                h = n(779610),
                m = n(111677),
                p = n.n(m),
                b = n(516951),
                E = n(443781),
                g = n(652904),
                f = n(293115),
                _ = n(648651),
                y = n(264922),
                Z = n(569291),
                w = n(71620),
                S = n(668214),
                C = n(601576);
            const A = (0, S.Z)()
                .propsFromState(() => ({ fetchStatus: _.UD, downloads: _.NK, isUserDataUnavailable: _.c }))
                .propsFromActions(() => ({ addToast: C.fz, createDataDownload: _.fm, createLocalApiErrorHandler: (0, w.zr)("DOWNLOAD_YOUR_DATA"), fetchDownloads: _._d }))
                .withAnalytics({ page: "settings", section: "account", component: "download_your_data" });
            const P = n(392237).default.create((e) => ({ description: { flexShrink: 1 }, helpText: { display: "block", fontSize: e.fontSizes.subtext2, lineHeight: "1.55" }, errorText: { marginEnd: e.spaces.space20 }, floatingLink: { paddingStart: e.spaces.space20 }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", width: "100%" }, narrowButton: { alignSelf: "center", marginStart: e.spaces.space12, paddingStart: e.spaces.space20 }, narrowButtonRow: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, noShrink: { flexShrink: 0 } })),
                L = "/settings/your_twitter_data/data",
                D = "https://pscp.tv/account/your-data",
                I = (0, o.ju)("https://help.x.com/managing-your-account/accessing-your-twitter-data"),
                x = (0, o.ju)("https://help.x.com/forms/feature_report?feature=emails&subtopic=email_twitter_archive&was_redirect=true"),
                T = p().f56af9cc,
                U = p().cce24bf4,
                k = p().h3ed510e,
                N = p().c39b0e24,
                v = p().b708417c,
                O = p().jbf5843e,
                F = p().ea886c6e,
                R = p().cdcc2ad4,
                M = p().dbeff87a,
                B = p().ce5d2c46,
                H = p().b2ed92c4,
                z = p().gee8110e,
                V = p().f56af9cc,
                G = p().hb02ed28,
                q = p().c2254084,
                j = p().f62d1d9e,
                $ = p().i859a9d4,
                W = a.createElement(p().I18NFormatMessage, { $i18n: "efc1de65" }, a.createElement(s.ZP, { link: x }, p().db40dfcf)),
                Y = p().b221ca4c,
                Q = { page: "settings", section: "account", component: "download_your_data" },
                J = Object.freeze({ ..._.n$, UNAVAILABLE: "UNAVAILABLE" }),
                K = () => a.createElement(a.Fragment, null, a.createElement(i.Z, null), a.createElement(c.Z, { label: V, withBottomBorder: !0 }), a.createElement(l.Z, { description: G })),
                X = (e) => {
                    switch (e) {
                        case J.NONE:
                            return M;
                        case J.FAILED:
                            return R;
                        case J.COMPLETE:
                            return z;
                        case J.UNAVAILABLE:
                            return B;
                        default:
                            return H;
                    }
                },
                ee = (e) => {
                    switch (e) {
                        case J.NONE:
                            return null;
                        case J.FAILED:
                            return W;
                        case J.COMPLETE:
                            return j;
                        case J.UNAVAILABLE:
                            return G;
                        default:
                            return q;
                    }
                };
            function te(e) {
                const { viewerUserId: t } = a.useContext(E.rC),
                    { addToast: n, analytics: o, createDataDownload: c, createLocalApiErrorHandler: m, downloads: p, fetchDownloads: w, fetchStatus: S, isUserDataUnavailable: C, location: A } = e,
                    x = !!t,
                    R = !x,
                    M = C,
                    B = !C && x;
                function H() {
                    o.scribe({ element: "request_button", action: "click" }),
                        c()
                            .then(() => n({ text: Y }))
                            .catch(m());
                }
                return a.createElement(
                    f.nO,
                    { namespace: Q },
                    a.createElement(
                        g.Z,
                        null,
                        a.createElement(
                            y.Z,
                            { location: A, screenType: "secondaryDetail", title: T },
                            a.createElement(l.Z, { description: U }),
                            B
                                ? a.createElement(Z.Z, {
                                      fetch: () => w(),
                                      fetchStatus: S,
                                      renderChildren: () =>
                                          a.createElement(
                                              a.Fragment,
                                              null,
                                              a.createElement(
                                                  r.Z,
                                                  null,
                                                  a.createElement(u.Z, { text: k }),
                                                  a.createElement(l.Z, { description: v, learnMoreLabel: $, learnMoreLink: I }),
                                                  (() => {
                                                      const { all: e, nonFailed: t } = p,
                                                          n = t.length ? t[0].status : e.length ? _.n$.FAILED : _.n$.NONE,
                                                          o = !!t.length && void 0 !== t[0].urls,
                                                          i = _.Ns.indexOf(n) >= 0,
                                                          c = o && n === _.n$.COMPLETE,
                                                          l = n === _.n$.FAILED,
                                                          u = n === _.n$.COMPLETE && !o,
                                                          h = u ? J.UNAVAILABLE : n,
                                                          m = n === _.n$.NONE ? H : b.Z,
                                                          E = () => a.createElement(d.ZP, { disabled: i || l || u, link: c ? L : void 0, onPress: m, size: "small", style: P.narrowButton, type: "brandFilled" }, X(h));
                                                      return a.createElement(r.Z, { style: [P.narrowButtonRow, P.labelContainer] }, a.createElement(r.Z, { style: P.description }, a.createElement(s.ZP, null, N), a.createElement(s.ZP, { color: "gray700", style: [P.errorText, P.helpText] }, ee(h))), a.createElement(r.Z, { style: P.noShrink }, a.createElement(E, null)));
                                                  })(),
                                              ),
                                              a.createElement(i.Z, null),
                                              a.createElement(r.Z, null, a.createElement(u.Z, { text: O }), a.createElement(h.Z, { label: F, link: { external: !0, pathname: D } })),
                                          ),
                                  })
                                : null,
                            R && a.createElement(h.Z, { label: z, link: "/settings/your_twitter_data/request_data" }),
                            M && a.createElement(K, null),
                        ),
                    ),
                );
            }
            const ne = A(te);
        },
        374989: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => D });
            var a = n(202784),
                r = n(325686),
                o = n(943401),
                s = n(111677),
                i = n.n(s),
                c = n(511323),
                l = n(581543),
                d = n(72591),
                u = n(247520),
                h = n(534763),
                m = n(652904),
                p = n(293115),
                b = n(264922);
            const E = "accountScreen",
                g = i().hc73f030,
                f = i().d3a2bde8,
                _ = i().f15bfdb4,
                y = i().idca4742,
                Z = i().b6ded35e,
                w = i().ab1f7ee0,
                S = i().f56af9cc,
                C = i().cce24bf4,
                A = i().hfb92b14,
                P = i().i203df96,
                L = { page: "settings", section: "account" },
                D = ({ location: e }) => {
                    const t = a.useMemo(
                        () => [
                            { description: y, label: _, link: "/settings/your_twitter_data/account", Icon: c.default },
                            { description: Z, label: w, link: "/settings/password", Icon: l.default },
                            { description: C, label: S, link: "/settings/download_your_data", Icon: d.default },
                            { description: P, label: A, link: "/settings/deactivate", Icon: u.default },
                        ],
                        [],
                    );
                    return a.createElement(
                        p.nO,
                        { namespace: L },
                        a.createElement(
                            m.Z,
                            null,
                            a.createElement(
                                b.Z,
                                { location: e, screenType: "primaryDetail", title: g },
                                a.createElement(
                                    r.Z,
                                    { testID: E },
                                    a.createElement(o.Z, { description: f }),
                                    t.map((e) => a.createElement(r.Z, { key: e.label }, a.createElement(h.H, e))),
                                ),
                            ),
                        ),
                    );
                };
        },
        82999: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { AccountAutomationScreen: () => W, changeManagingAccountLabel: () => k, default: () => Q, setManagingAccountLabel: () => N });
            var a = n(202784),
                r = n(325686),
                o = n(688715),
                s = n(731708),
                i = n(834324),
                c = n(779610),
                l = n(88307),
                d = n(420412),
                u = n(242454),
                h = n(529356),
                m = n(943401),
                p = n(392237),
                b = n(111677),
                E = n.n(b),
                g = n(47086),
                f = n(293723),
                _ = n(290402),
                y = n(443781),
                Z = n(652904),
                w = n(293115),
                S = n(312771),
                C = n(264922),
                A = n(668214),
                P = n(181617),
                L = n(919022);
            const D = (0, A.Z)()
                    .propsFromState(() => ({ managingAccount: P.MB, managingAccountFetchStatus: P.iR, disableAccountLabelStatus: P.ET, user: L.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ disableUserAccountLabel: P.PP, fetchUserAccountLabel: P.cs }))
                    .withAnalytics({ page: "settings", section: "account_automation" }),
                I = (0, o.ju)("https://help.x.com/using-twitter/automated-account-labels"),
                x = E().d12d42dc,
                T = E().ad31b476,
                U = E().a2981062,
                k = E().aff4540e,
                N = E().b8b9d100,
                v = a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, a.createElement(E().I18NFormatMessage, { $i18n: "d79b6b7b" }, a.createElement(s.ZP, { link: I, size: "subtext2" }, E().f79acef3))),
                O = E().e0bc51f6,
                F = E().i9028824,
                R = E().b92190c2,
                M = E().fb03b39a,
                B = E().bd51ddfa,
                H = { page: "settings", section: "account_information", component: "automation" },
                z = { page: "system", section: "message" },
                V = E().e91c15f6,
                G = E().df035b80,
                q = E().bd12cf34,
                j = E().cfd2f35e,
                $ = "/i/flow/enable_automated_account";
            class W extends a.Component {
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
                                n = e ? g.default : f.default,
                                o = e ? "danger" : "success";
                            return a.createElement(r.Z, { style: Y.inlineCallout }, a.createElement(i.Z, { Icon: n, headline: t || "", onClose: this._handleHideCallout, type: o }));
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
                        (this._renderUnassignedManagingAccountView = () => a.createElement(r.Z, null, a.createElement(c.Z, { description: v, label: N, link: $ }), this.state.showCallout && this._renderCallout())),
                        (this._renderAssignedManagingAccountView = () => a.createElement(r.Z, null, a.createElement(l.Z, { label: U, subtext: this.props.managingAccount || "", withBottomBorder: !1 }), a.createElement(c.Z, { label: k, link: $ }), this.state.showCallout && this._renderCallout(), a.createElement(d.Z, null), a.createElement(u.Z, { color: "red500", label: O, onPress: this._handleToggleDisableConfirmation }))),
                        (this._renderDisconnectConfirmation = () => a.createElement(h.Z, { actionLabel: q, graphicDisplayMode: "none", headline: V, onAction: this._handleDisableUserAccountLabel, onClose: this._handleToggleDisableConfirmation, onSecondaryAction: this._handleToggleDisableConfirmation, secondaryActionLabel: j, subtext: G, useBrandedActionButtons: !0, withCloseButton: !0 })),
                        (this._render = () => {
                            const e = this.props.managingAccount ? this._renderAssignedManagingAccountView() : this._renderUnassignedManagingAccountView(),
                                { showDisableConfirmation: t } = this.state;
                            return a.createElement(C.Z, { title: x }, t && this._renderDisconnectConfirmation(), a.createElement(m.Z, { description: T }), e);
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
                        { disableAccountLabelStatus: o, managingAccount: s, managingAccountFetchStatus: i } = e,
                        { hasExitedOCF: c } = this.state,
                        l = s && a !== s,
                        d = i === S.ZP.LOADED || r === S.ZP.LOADED;
                    if ((l && d && c && (this._handleShowCallout(R), this._scribe({ ...H, action: "enabled" })), n !== o))
                        switch (o) {
                            case S.ZP.LOADED:
                                this._handleShowCallout(M), this._scribe({ ...H, action: "disabled" });
                                break;
                            case S.ZP.FAILED:
                                this._handleShowCallout(B, !0), this._scribe({ ...z, element: "automation_opt_out_error", action: "view" });
                        }
                    return e !== this.props || t !== this.state;
                }
                render() {
                    const { managingAccountFetchStatus: e } = this.props;
                    return a.createElement(w.nO, { namespace: H }, a.createElement(Z.Z, null, a.createElement(_.Z, { "aria-label": F, fetchStatus: e, onRequestRetry: this._handleFetchUserAccountLabel, render: this._render })));
                }
            }
            W.contextType = y.rC;
            const Y = p.default.create((e) => ({ inlineCallout: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                Q = D(W);
        },
        664049: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => re });
            n(571372);
            var a = n(202784),
                r = n(351743),
                o = n.n(r),
                s = n(943401),
                i = n(954110),
                c = n(190286),
                l = n(111677),
                d = n.n(l),
                u = n(143095),
                h = n(652904),
                m = n(952793),
                p = n(71620),
                b = n(293115),
                E = n(125363),
                g = n(919022),
                f = n(264922),
                _ = n(728055),
                y = n(455102),
                Z = (n(585488), n(101890)),
                w = n(731708),
                S = n(88656),
                C = n(240666),
                A = n(601576),
                P = n(535338);
            const L = "https://help.x.com/rules-and-policies/authenticity",
                D = d().dbcf3a1a,
                I = d().hf019b20,
                x = d().ce62c8c2,
                T = d().a14080ce,
                U = d().db6796f6,
                k = d().c700b6be,
                N = d().e68b09b4,
                v = d().h3701ffe,
                O = d().i859a9d4,
                F = d().ff1739ae,
                R = d().h70c602c,
                M = "AccountParody",
                B = { page: "settings", section: "account_information", component: "parody" },
                H = [
                    { label: (0, C.U)("None"), value: "None" },
                    { label: (0, C.U)("Parody"), value: "Parody" },
                    { label: (0, C.U)("Commentary"), value: "Commentary" },
                    { label: (0, C.U)("Fan"), value: "Fan" },
                ],
                z = y.Z,
                V = _.Z;
            function G({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    n = (0, E.I0)(),
                    r = (0, p.n7)(M),
                    i = (0, P.p)(z, {}),
                    l = i.get_parody_label_settings?.is_label_update_disabled ?? !1,
                    d = i.get_parody_label_settings?.update_disabled_reason,
                    [u, m] = o()(V),
                    [_, y] = a.useState(),
                    C = (t) => {
                        n(g.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    G = (e) => {
                        if (m) return;
                        const n = ((e) => (t) => {
                            C(e), r({ 403: { customAction: (e) => (0, A.mf)({ text: e.message ?? R }) }, showToast: !0 })(t);
                        })(t);
                        u({
                            variables: { parodyProfileLabel: e },
                            onCompleted({ update_parody_label: e }) {
                                "PCFLabelSettings" === e?.__typename ? (y(void 0), location.reload()) : n(new S.Z("update_parody_label", 403, {}, [{ code: 403, message: e?.message ?? "" }]));
                            },
                            optimisticUpdater: () => C(e),
                            onError: n,
                        });
                    };
                return a.createElement(
                    b.nO,
                    { namespace: B },
                    a.createElement(
                        h.Z,
                        null,
                        a.createElement(
                            f.Z,
                            { title: D },
                            a.createElement(s.Z, { description: I, learnMoreLabel: O, learnMoreLink: L }),
                            a.createElement(Z.Z, {
                                disabled: l,
                                label: F,
                                name: "profile_label",
                                onChange: (e, t) => {
                                    const n = "None" !== t;
                                    y({
                                        confirmLabel: n ? v : N,
                                        onConfirm: () => {
                                            y(void 0), G(t);
                                        },
                                        title: n ? T : x,
                                        desc: n ? k : U,
                                    });
                                },
                                options: H,
                                value: t,
                            }),
                            l && a.createElement(s.Z, { description: a.createElement(w.ZP, { color: "red500" }, d) }),
                            _ && a.createElement(c.Z, { confirmButtonLabel: _.confirmLabel, headline: _.title, learnMoreLink: L, learnMoreText: O, onCancel: () => y(void 0), onConfirm: _.onConfirm, text: _.desc, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            const q = n(207966).Z,
                j = "https://help.x.com/rules-and-policies/authenticity",
                $ = d().dbcf3a1a,
                W = d().cbb2367c,
                Y = d().ge48855c,
                Q = d().hf019b20,
                J = d().d048571e,
                K = d().g905134c,
                X = d().e68b09b4,
                ee = d().i859a9d4,
                te = "AccountParody",
                ne = { page: "settings", section: "account_information", component: "parody" };
            function ae({ user: e }) {
                const t = e.parody_commentary_fan_label ?? "None",
                    n = (0, E.I0)(),
                    r = (0, p.n7)(te),
                    [l, d] = o()(q),
                    [m, { toggle: _ }] = (0, u.O)(!1),
                    y = (t) => {
                        n(g.ZP.patchUser(e.id_str, { parody_commentary_fan_label: t }));
                    },
                    Z = (e) => {
                        if (d) return;
                        const n = e ? "Parody" : "None",
                            a = ((e) => (t) => {
                                y(e), r({ showToast: !0 })(t);
                            })(t);
                        l({
                            variables: { parodyProfileLabel: n },
                            onCompleted({ user_preferences_put: e }) {
                                "Done" === e ? (_(!1), location.reload()) : a(new Error(`unexpected result on toggling parody${String(e)}`));
                            },
                            optimisticUpdater: () => y(n),
                            onError: a,
                        });
                    };
                return a.createElement(
                    b.nO,
                    { namespace: ne },
                    a.createElement(
                        h.Z,
                        null,
                        a.createElement(
                            f.Z,
                            { title: $ },
                            a.createElement(s.Z, { description: W }),
                            a.createElement(i.Z, {
                                checked: "None" !== t,
                                helpText: Q,
                                label: Y,
                                learnMoreLink: j,
                                name: "parody_label",
                                onChange: (e, t) => {
                                    t ? Z(t) : _(!0);
                                },
                                testID: "parody_label_switch",
                            }),
                            m && a.createElement(c.Z, { confirmButtonLabel: X, headline: J, learnMoreLink: j, learnMoreText: ee, onCancel: () => _(!1), onConfirm: () => Z(!1), text: K, withCancelButton: !0 }),
                        ),
                    ),
                );
            }
            function re() {
                const e = (0, E.v9)(g.ZP.selectViewerUser),
                    t = (0, m.hC)("profile_label_improvements_pcf_edit_profile_enabled");
                return null == e ? null : t ? a.createElement(G, { user: e }) : a.createElement(ae, { user: e });
            }
        },
        780709: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => C });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                s = n(943401),
                i = n(111677),
                c = n.n(i),
                l = n(517747),
                d = n(744649),
                u = n(534763),
                h = n(652904),
                m = n(293115),
                p = n(264922);
            const b = "notificationsScreen",
                E = c().eb75875e,
                g = c().a3f22d8e,
                f = c().i647fb04,
                _ = c().ef1b5cbc,
                y = c().bcd81cac,
                Z = c().da867c58,
                w = { page: "settings", section: "notification" },
                S = [
                    { description: _, label: f, link: "/settings/notifications/filters", Icon: l.default, testID: "testIconFilter" },
                    { description: Z, label: y, link: "/settings/notifications/preferences", Icon: d.default, testID: "testIconDeviceNotification" },
                ],
                C = ({ location: e }) =>
                    r.createElement(
                        m.nO,
                        { namespace: w },
                        r.createElement(
                            h.Z,
                            null,
                            r.createElement(
                                p.Z,
                                { location: e, screenType: "primaryDetail", title: E },
                                r.createElement(
                                    o.Z,
                                    { testID: b },
                                    r.createElement(s.Z, { description: g }),
                                    S.map((e) => r.createElement(u.H, (0, a.Z)({}, e, { key: e.link }))),
                                ),
                            ),
                        ),
                    );
        },
        609848: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => N });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(688715),
                i = n(844685),
                c = n(855488),
                l = n(108362),
                d = n(154003),
                u = n(392237),
                h = n(111677),
                m = n.n(h),
                p = n(615656),
                b = n(290402),
                E = n(443781),
                g = n(500002),
                f = n(312771),
                _ = n(615027),
                y = n(267966),
                Z = n(71620),
                w = n(668214),
                S = n(673110);
            const C = (0, w.Z)()
                    .propsFromState(() => ({ verifyPasswordFetchStatus: S.UD }))
                    .propsFromActions(() => ({ verifyPassword: S.Gv, createLocalApiErrorHandler: (0, Z.zr)("PASSWORD_GATEWAY") })),
                A = m().fe36fe10,
                P = m().dec3c9b8,
                L = m().hccd9dbe,
                D = m().d1091f50,
                I = m().g9677c6e,
                x = m().c8cb0b4c;
            class T extends a.Component {
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
                                    .catch(e({ [p.ZP.InvalidCurrentPassword]: { customAction: () => this.setState({ passwordError: x }) }, showToast: !0 }));
                        }),
                        (this._makeFetch = () => {
                            const { createLocalApiErrorHandler: e, fetch: t } = this.props;
                            t()
                                .then(() => {
                                    this.setState({ verificationRequired: !1 });
                                })
                                .catch(
                                    e({
                                        [p.ZP.PasswordVerificationRequired]: {
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
                    e.fetchStatus === f.ZP.LOADED && this.props.fetchStatus === f.ZP.NONE && this._makeFetch();
                }
                _renderPasswordPrompt() {
                    const { titleHeader: e } = this.props,
                        { passwordError: t } = this.state,
                        n = a.createElement(o.ZP, { link: { pathname: (0, s.ju)("https://x.com/i/flow/password_reset"), external: !0, openInSameFrame: !0 } }, D);
                    return a.createElement(a.Fragment, null, e ? a.createElement(i.Z, { text: e }) : null, a.createElement(r.Z, { style: [y.Z.viewItem, y.Z.bottomBorder] }, a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, L)), a.createElement(c.Z, { errorText: t, helperText: n, invalid: !!t, label: P, name: "current_password", onChange: this._handleChange, onSubmitEditing: this._handlePasswordSubmit, type: "password", value: this.state.password }), a.createElement(l.Z, { style: U.buttonContainer }, a.createElement(d.ZP, { disabled: !1, onPress: this._handlePasswordSubmit, style: U.button, type: "brandFilled" }, I)));
                }
                render() {
                    const { fetchStatus: e, location: t, render: n } = this.props,
                        { verificationRequired: r } = this.state,
                        o = e === f.ZP.FAILED && r;
                    return a.createElement(a.Fragment, null, o ? (this._passwordlessSsoEnabled ? a.createElement(_.Z, { to: { pathname: "/i/flow/verify_account_ownership", state: { input: { requested_variant: t.pathname } } } }) : this._renderPasswordPrompt()) : a.createElement(b.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: n }));
                }
            }
            (T.contextType = E.rC), (T.defaultProps = { titleHeader: A });
            const U = u.default.create((e) => ({ buttonContainer: { flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingBottom: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.componentDimensions.gutterHorizontal } })),
                k = C(T),
                N = (0, g.ZP)(k);
        },
        569291: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(615656),
                o = n(290402),
                s = n(312771),
                i = n(615027),
                c = n(71620),
                l = n(668214);
            const d = (0, l.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, c.zr)("TWO_FACTOR_AUTHENTICATION_GATEWAY") }));
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
                        r = e === s.ZP.FAILED && n;
                    return a.createElement(a.Fragment, null, r ? a.createElement(i.Z, { to: "/i/flow/verify_account_ownership" }) : a.createElement(o.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: t }));
                }
            }
            const h = d.forwardRef(u);
        },
        267966: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var a = n(392237);
            const r = (e) => ({ borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: "1px" }),
                o = a.default.create((e) => ({ descriptionText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, searchBox: { margin: e.spaces.space4 }, infoText: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, linkItem: { padding: e.spaces.space12, backgroundColor: e.colors.cellBackground }, viewItem: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, backgroundColor: e.colors.cellBackground }, calloutTextBlock: { paddingVertical: e.spaces.space20, paddingHorizontal: e.componentDimensions.gutterHorizontal }, bottomBorder: { ...r(e) } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp-9f4db315.dc958c5a.js.map
