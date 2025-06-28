(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsRevamp-6107ac1a"],
    {
        200111: (e) => {
            e.exports = { queryId: "_ckHEj05gan2VfNHG6thBA", operationName: "DisableUserAccountLabel", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        661490: (e) => {
            e.exports = { queryId: "rD5gLxVmMvtdtYU1UHWlFQ", operationName: "UserAccountLabel", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        728055: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            var a,
                r,
                o,
                s,
                l,
                c = {
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
                                    { kind: "InlineFragment", selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null })], type: "PCFLabelUpdateError", abstractKey: null },
                                    { kind: "InlineFragment", selections: [o, (l = { alias: null, args: null, kind: "ScalarField", name: "parody_commentary_fan_label", storageKey: null })], type: "PCFLabelSettings", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelMutation", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "update_parody_label", plural: !1, selections: [o, { kind: "InlineFragment", selections: [s], type: "PCFLabelUpdateError", abstractKey: null }, { kind: "InlineFragment", selections: [l], type: "PCFLabelSettings", abstractKey: null }], storageKey: null }] },
                    params: { id: "73OvlPaHKjWcU21X1w9SKA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelMutation", operationKind: "mutation", text: null },
                };
            c.hash = "808e0b00a04d3c0255492c2f267b77e2";
            const i = c;
        },
        455102: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => o });
            var a,
                r = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AccountParodyScreenImplV2ParodyLabelSettingQuery",
                        selections: (a = [
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
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", selections: a },
                    params: { id: "v5QRfeK5uuWULVGXyMLwyA", metadata: {}, name: "AccountParodyScreenImplV2ParodyLabelSettingQuery", operationKind: "query", text: null },
                };
            r.hash = "a39c6860aa951232fde54fef0202e66c";
            const o = r;
        },
        207966: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => s });
            var a,
                r,
                o = { fragment: { argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "parodyProfileLabel" }]), kind: "Fragment", metadata: null, name: "AccountParodyUserMutation", selections: (r = [{ alias: null, args: [{ kind: "Variable", name: "parody_commentary_fan_label", variableName: "parodyProfileLabel" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: a, kind: "Operation", name: "AccountParodyUserMutation", selections: r }, params: { id: "bKOVxrOlLbA5udkJci7wcg", metadata: {}, name: "AccountParodyUserMutation", operationKind: "mutation", text: null } };
            o.hash = "b521e06ae2a7c6e9e57c2684320bf20b";
            const s = o;
        },
        290402: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => h });
            var a = n(807896),
                r = n(202784),
                o = n(182056),
                s = n(879113),
                l = n(392237),
                c = n(111677),
                i = n.n(c),
                d = n(968478);
            const u = i().aa6e3300,
                b = ({ retryMessage: e, ...t }, n) => {
                    const l = o.Z.isOnline();
                    return r.createElement(s.Z, (0, a.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: l ? e : u }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = r.forwardRef(b);
        },
        534763: (e, t, n) => {
            "use strict";
            n.d(t, { H: () => i, b: () => d });
            var a = n(807896),
                r = n(202784),
                o = n(392237),
                s = n(779610);
            const l = (e) => {
                    const { Icon: t, iconColor: n, testID: a } = e;
                    return r.createElement(t, { style: n ? { color: o.default.theme.colors[n] } : c.thumbnail, testID: a });
                },
                c = o.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function i(e) {
                const { Icon: t, iconColor: n, testID: o, ...c } = e;
                return r.createElement(s.Z, (0, a.Z)({}, c, { thumbnail: r.createElement(l, { Icon: t, iconColor: n, testID: o }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(s.Z, (0, a.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        181617: (e, t, n) => {
            "use strict";
            n.d(t, { PP: () => P, cs: () => I, ET: () => A, MB: () => C, iR: () => L });
            var a = n(424869),
                r = n.n(a),
                o = n(163889),
                s = n(414742),
                l = n(200111),
                c = n.n(l),
                i = n(661490),
                d = n.n(i),
                u = n(503768);
            const b = (e, t) => {
                    const n = t?.user?.result;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load User Account Label", { extra: (0, u.dL)(e) }), (0, s.jB)(e);
                },
                m = (e, t) => {
                    const n = t?.disable_user_account_label;
                    return n || (0, o.ZP)("GQL AccountTaxonomy: Failed to load Disable User Account Status", { extra: (0, u.dL)(e) }), (0, s.jB)(e);
                },
                h = ({ apiClient: e, featureSwitches: t }) => ({ fetchUserAccountLabel: ({ userId: t }) => e.graphQL(d(), { rest_id: t }, b), disableUserAccountLabel: () => e.graphQL(c(), {}, m) });
            var p = n(499627),
                g = n(917799),
                E = n(312771);
            const y = "accountTaxonomy",
                S = r()({ account_label: { disableStatus: E.ZP.NONE, fetchStatus: E.ZP.NONE, managed_label: void 0 } }),
                f = Object.freeze({ REQUEST: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/FETCH_USER_ACCOUNT_LABEL_FAILURE" }),
                _ = Object.freeze({ REQUEST: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_REQUEST", SUCCESS: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_SUCCESS", FAILURE: "rweb/accountTaxonomy/DISABLE_USER_ACCOUNT_LABEL_FAILURE" });
            p.Z.register({
                [y]: function (e = S, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case f.REQUEST:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.LOADING } };
                        case f.SUCCESS:
                            return { ...e, account_label: { ...t?.payload?.user?.result?.account_label, fetchStatus: E.ZP.LOADED } };
                        case f.FAILURE:
                            return { ...e, account_label: { ...e.account_label, fetchStatus: E.ZP.FAILED } };
                        case _.REQUEST:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.LOADING } };
                        case _.SUCCESS:
                            return { ...e, account_label: { managed_label: void 0, fetchStatus: E.ZP.LOADED, disableStatus: E.ZP.LOADED } };
                        case _.FAILURE:
                            return { ...e, account_label: { ...e.account_label, disableStatus: E.ZP.FAILED } };
                        default:
                            return e;
                    }
                },
            });
            const C = (e) => e[y]?.account_label?.managed_label?.owner_screen_name,
                L = (e) => e[y]?.account_label?.fetchStatus || E.ZP.NONE,
                A = (e) => e[y]?.account_label?.disableStatus || E.ZP.NONE,
                I =
                    (e) =>
                    (t, n, { api: a }) =>
                        (0, g._O)(t, { request: a.withEndpoint(h).fetchUserAccountLabel, params: { userId: e } })({ actionTypes: f, context: "FETCH_USER_ACCOUNT_LABEL" }),
                P =
                    () =>
                    (e, t, { api: n }) =>
                        (0, g._O)(e, { request: n.withEndpoint(h).disableUserAccountLabel, params: {} })({ actionTypes: _, context: "DISABLE_USER_ACCOUNT_LABEL" });
        },
        576025: (e, t, n) => {
            "use strict";
            n.d(t, { Lf: () => i, Po: () => u, _t: () => d });
            n(571372);
            var a = n(499627),
                r = n(312771);
            const o = "countryNames",
                s = { fetchStatus: r.ZP.NONE, countries: {} },
                l = { REQUEST: `${o}_REQUEST`, FAILURE: `${o}_FAILURE`, SUCCESS: `${o}_SUCCESS` },
                c = (e = s, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, fetchStatus: r.ZP.LOADING };
                        case l.FAILURE:
                            return { ...e, fetchStatus: r.ZP.NONE };
                        case l.SUCCESS:
                            return { ...e, countries: t.payload, fetchStatus: r.ZP.LOADED };
                        default:
                            return e;
                    }
                };
            a.Z.register({ [o]: c });
            const i = (e) => e[o].countries,
                d = (e, t) => {
                    const n = t && t.toUpperCase();
                    return e[o].countries[n];
                },
                u = (e) => (t, a) =>
                    a()[o].fetchStatus === r.ZP.LOADED
                        ? Promise.resolve()
                        : (t({ type: l.REQUEST }),
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
                                  t({ type: l.SUCCESS, payload: a });
                              })
                              .catch(() => {
                                  t("en" === e ? { type: l.FAILURE } : u("en"));
                              }));
        },
        673110: (e, t, n) => {
            "use strict";
            n.d(t, { Gv: () => m, UD: () => b });
            var a = n(226395),
                r = n(499627),
                o = n(917799),
                s = n(312771),
                l = n(291020);
            const c = "verifyPassword",
                i = `rweb/${l.Y}/${c}`,
                d = (0, o.dg)(i, "VERIFY_PASSWORD"),
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
            const b = (e) => e[c].fetchStatus,
                m =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o._O)(t, { params: { password: e }, request: r.withEndpoint(a.Z).verifyPassword })({ actionTypes: d, context: "VERIFY_PASSWORD" });
        },
        648651: (e, t, n) => {
            "use strict";
            n.d(t, { Ns: () => b, n$: () => u, fm: () => y, _d: () => E, VL: () => S, NK: () => h, UD: () => p, c: () => g });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, n) => e.get("account/user_twitter_data", t, n, ""), createDataDownload: (t, n) => e.post("account/user_twitter_data", t, {}, { ...n, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, n) => e.put("account/user_twitter_data", t, { ...n, "content-type": "application/json" }, "") });
            var r = n(499627),
                o = n(917799),
                s = n(312771);
            const l = "userData",
                c = `rweb/${l}`,
                i = (0, o.dg)(c, "FETCH_DOWNLOADS"),
                d = (0, o.dg)(c, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                b = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                m = { fetchStatus: s.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [l]: function (e = m, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case i.SUCCESS: {
                            const n = t.payload || [],
                                a = n.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: s.ZP.LOADED, downloads: { ...e.downloads, all: n, nonFailed: a } };
                        }
                        case i.REQUEST:
                            return { ...e, fetchStatus: s.ZP.LOADING };
                        case i.FAILURE:
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
            const h = (e) => e[l].downloads,
                p = (e) => e[l].fetchStatus,
                g = (e) => 503 === e[l].error?.status,
                E =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a).fetchDownloads })({ actionTypes: i, context: "FETCH_DOWNLOADS" }),
                y =
                    () =>
                    (e, t, { api: n }) =>
                        (0, o._O)(e, { request: n.withEndpoint(a).createDataDownload })({ actionTypes: d, context: "CREATE_DOWNLOAD" }),
                S =
                    (e) =>
                    (t, n, { api: r }) =>
                        (0, o.Vg)(t, { params: e, request: r.withEndpoint(a).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        242454: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var a = n(807896),
                r = n(202784),
                o = n(325686),
                s = n(731708),
                l = n(58881),
                c = n(530732),
                i = n(392237);
            const d = i.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const b = l.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(o.Z, { style: d.container }, r.createElement(c.Z, (0, a.Z)({}, u, { interactiveStyles: b, style: d.root }), r.createElement(s.ZP, { align: e, color: t }, n)));
                };
        },
        449479: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                o = n(913973),
                s = n(731708),
                l = n(950822),
                c = n(466792),
                i = n(58881),
                d = n(530732),
                u = n(352924),
                b = n(392237);
            class m extends a.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: u, helpText: m, label: p, name: g, testID: E } = this.props,
                        y = i.Z.generate({ backgroundColor: b.default.theme.colors.transparent, color: b.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        S = i.Z.generate({ backgroundColor: b.default.theme.colors.transparent, color: b.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        f = n ? y : S;
                    return a.createElement(c.Z, { disabled: u }, (c) => a.createElement(r.Z, { role: "label", style: [h.root, !u && h.interactive], testID: E }, a.createElement(r.Z, { style: h.topContainer }, a.createElement(s.ZP, { id: this.labelId }, p), a.createElement(r.Z, { style: h.radioContainer }, a.createElement(d.Z, { interactiveStyles: f, interactivityState: c, style: h.radioBackground }, a.createElement(r.Z, { style: [h.circle, n && h.circleActive, u && h.circleDisabled, n && u && h.circleCheckedAndDisabled] }, n ? a.createElement(o.default, { style: h.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: u, name: g, onChange: this._handleChange, ref: this._setRef, style: [h.nativeControl], type: "radio" }))), m ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: h.helpText }, m) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            m.defaultProps = { disabled: !1, checked: !1 };
            const h = b.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...b.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                p = m,
                g = "radioGroup";
            let E = 1;
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
                        (this._labelId = `RADIO_GROUP_${E}_LABEL`),
                        (E += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: o, name: l, options: c, value: i } = this.props;
                    return a.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": o && !e ? this._labelId : void 0, role: "radiogroup", style: n && S.disabled, testID: `${g}${l}` },
                        o ? a.createElement(r.Z, { id: this._labelId, role: "label", style: S.header }, a.createElement(s.ZP, { style: S.label, weight: "bold" }, o), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        c.map((e, t) => a.createElement(p, { "aria-posinset": t + 1, "aria-setsize": c.length, checked: e.value === i, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === i), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const S = b.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(325686),
                o = n(449479),
                s = n(392237);
            const l = (e) => a.createElement(r.Z, { style: c.root }, a.createElement(o.Z, e)),
                c = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        88307: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(325686),
                o = n(731708),
                s = n(392237);
            class l extends a.Component {
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
                    const { label: e, learnMoreLabel: t, learnMoreLink: n, subtext: s, withBottomBorder: l } = this.props;
                    return a.createElement(r.Z, { style: [c.root, l && c.bottomBorder] }, a.createElement(o.ZP, null, e), s ? (t && n ? this._renderSubtextAndLink() : a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, s)) : null);
                }
            }
            l.defaultProps = { withBottomBorder: !0 };
            const c = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                i = l;
        },
        183806: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            const a = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsRevamp-6107ac1a.949ce0fa.js.map
