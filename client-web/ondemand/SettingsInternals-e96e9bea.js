(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e96e9bea"],
    {
        629928: (e, n, i) => {
            "use strict";
            i.d(n, { Z: () => c });
            var t,
                a,
                r,
                l,
                s,
                o,
                u,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null }), (l = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null }), { kind: "RequiredField", field: (s = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null }), action: "THROW" }, (o = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: t,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [a, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [r, l, s, (u = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), o], storageKey: null }, u], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            u,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            d.hash = "6269adea05f11011ee2eec87df25951d";
            const c = d;
        },
        993770: (e, n, i) => {
            "use strict";
            i.d(n, { Z: () => l });
            var t,
                a,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (a = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: a },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6b62958a6368974d13a27b8fe59103e0";
            const l = r;
        },
        130919: (e, n, i) => {
            "use strict";
            i.d(n, { t: () => t });
            const t = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        762815: (e, n, i) => {
            "use strict";
            i.d(n, { Z: () => s });
            var t,
                a,
                r,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (t = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(a = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: t,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [a, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, r], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "_1MJNdYH_NfG1HVMWvOISA", metadata: {}, name: "useIDVerificationProcessVendorQuery", operationKind: "query", text: null },
                };
            l.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const s = l;
        },
        786033: (e, n, i) => {
            "use strict";
            i.d(n, { Z: () => u });
            var t,
                a,
                r,
                l,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (r = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (s = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "error_url", variableName: "error_url" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "success_url", variableName: "success_url" },
                                    { kind: "Variable", name: "verification_flow", variableName: "verification_flow" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "start_identity_verification",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: (l = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: l, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [a, t, r], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: s },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const u = o;
        },
        949874: (e) => {
            e.exports = function (e, n, i) {
                if (((e = e.replace(/\r?\n/g, "")), null != n && n < 5)) throw new Error("Maximum length must not be less than 5");
                if (((n = null != n ? n : 78), e.length <= n)) return e;
                n -= 4;
                var t = [],
                    a = e.length,
                    r = 0,
                    l = 0;
                if (!i) for (; ~(r = e.lastIndexOf(" ", n + l)) && !(r <= l); ) e.slice(l).length > n ? (t.push((l ? " " : "") + e.slice(l, r)), (l = r + 1)) : (t.push((l ? " " : "") + e.slice(l)), (l = a));
                for (n++; l < a; ) t.push(e.slice(l, (l += n)));
                return t.join("\r\n ");
            };
        },
        819858: (e, n, i) => {
            var t = i(691925),
                a = i(21681);
            function r(e, n, i) {
                Array.isArray(e[n]) ? e[n].push(i) : null != e[n] ? (e[n] = [e[n], i]) : (e[n] = i);
            }
            function l(e, n) {
                var i = n.split("="),
                    a = t(i[0]),
                    l = i[1];
                return (
                    (null != l && "" !== l) || ((l = i[0]), (a = "type")),
                    "type" === a
                        ? (l
                              .toLowerCase()
                              .split(",")
                              .forEach(function (n) {
                                  r(e, a, n);
                              }),
                          e)
                        : (r(e, a, l), e)
                );
            }
            e.exports = function (e) {
                for (var n = {}, i = null, s = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, o = e.length - 1, u = 1; u < o; u++) {
                    i = e[u];
                    var d = s.exec(i);
                    if (d) {
                        var c = d[1].split("."),
                            f = c.pop(),
                            p = c.pop(),
                            y = d[3],
                            g = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(l, p ? { group: p } : {}),
                            m = t(f);
                        r(n, m, new a(m, y, g));
                    }
                }
                return n;
            };
        },
        21681: (e) => {
            function n(e, i, t) {
                if (!(this instanceof n)) return new n(i);
                null != t && Object.assign(this, t), (this._field = e), (this._data = i), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function i(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (n.fromJSON = function (e) {
                var i = e[0],
                    t = e[1];
                return /text/i.test(e[2]) || (t.value = e[2]), new n(i, Array.isArray(e[3]) ? e[3].join(";") : e[3], t);
            }),
                (n.prototype = {
                    constructor: n,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new n(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var n = (this.group ? this.group + "." : "") + i(this._field), t = Object.keys(this), a = [], r = 0; r < t.length; r++) "group" !== t[r] && a.push(i(t[r]) + "=" + this[t[r]]);
                        return n + (a.length ? ";" + a.join(";") : a) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var n = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                n.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                n.push(this._data.split(";"));
                        }
                        return n;
                    },
                }),
                (e.exports = n);
        },
        588960: (e, n, i) => {
            function t() {
                if (!(this instanceof t)) return new t();
                (this.version = t.versions[t.versions.length - 1]), (this.data = {});
            }
            (t.mimeType = "text/vcard"),
                (t.extension = ".vcf"),
                (t.versions = ["2.1", "3.0", "4.0"]),
                (t.foldLine = i(949874)),
                (t.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (t.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== t.versions.indexOf(e);
                }),
                (t.parse = function (e) {
                    for (var n = (e + "").split(/(?=BEGIN\:VCARD)/gi), i = [], a = 0; a < n.length; a++) i.push(new t().parse(n[a]));
                    return i;
                }),
                (t.parseLines = i(819858)),
                (t.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new t();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var n = new t();
                    return (
                        e[1].forEach(function (e) {
                            n.addProperty(t.Property.fromJSON(e));
                        }),
                        n
                    );
                }),
                (t.format = function (e, n) {
                    if (((n = n || e.version || t.versions[t.versions.length - 1]), !t.isSupported(n))) throw new Error('Unsupported vCard version "' + n + '"');
                    var i = [];
                    i.push("BEGIN:VCARD"), i.push("VERSION:" + n);
                    for (var a = Object.keys(e.data), r = "", l = 0; l < a.length; l++)
                        if ("version" !== a[l])
                            if (((r = e.data[a[l]]), Array.isArray(r))) for (var s = 0; s < r.length; s++) r[s].isEmpty() || i.push(t.foldLine(r[s].toString(n), 75));
                            else r.isEmpty() || i.push(t.foldLine(r.toString(n), 75));
                    return i.push("END:VCARD"), i.join("\n");
                }),
                (t.Property = i(21681)),
                (t.prototype = {
                    constructor: t,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, n, i) {
                        return this.setProperty(new t.Property(e, n, i));
                    },
                    add: function (e, n, i) {
                        var a = new t.Property(e, n, i);
                        return this.addProperty(a), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var n = e._field;
                        return Array.isArray(this.data[n]) ? this.data[n].push(e) : null != this.data[n] ? (this.data[n] = [this.data[n], e]) : (this.data[n] = e), this;
                    },
                    parse: function (e) {
                        var n = t.normalize(e).split(/\r?\n/g),
                            i = n[0],
                            a = n[1],
                            r = n[n.length - 1];
                        if (!/BEGIN:VCARD/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + i + '"');
                        if (!/END:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + r + '"');
                        if (!/VERSION:\d\.\d/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + a + '"');
                        if (((this.version = a.substring(8, 11)), !t.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = t.parseLines(n)), this;
                    },
                    toString: function (e, n) {
                        return (e = e || this.version), t.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var n = Object.keys(this.data), i = [["version", {}, "text", e]], t = null, a = 0; a < n.length; a++)
                            if ("version" !== n[a])
                                if (((t = this.data[n[a]]), Array.isArray(t))) for (var r = 0; r < t.length; r++) i.push(t[r].toJSON());
                                else i.push(t.toJSON());
                        return ["vcard", i];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = t);
        },
        691925: (e) => {
            "use strict";
            e.exports = function () {
                var e = [].map
                    .call(arguments, function (e) {
                        return e.trim();
                    })
                    .filter(function (e) {
                        return e.length;
                    })
                    .join("-");
                return e.length
                    ? 1 === e.length
                        ? e.toLowerCase()
                        : /[_.\- ]+/.test(e)
                          ? (e = (function (e) {
                                for (var n = !1, i = 0; i < e.length; i++) {
                                    var t = e.charAt(i);
                                    n && /[a-zA-Z]/.test(t) && t.toUpperCase() === t ? ((e = e.substr(0, i) + "-" + e.substr(i)), (n = !1), i++) : (n = t.toLowerCase() === t);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, n) {
                                    return n.toUpperCase();
                                })
                          : e === e.toUpperCase()
                            ? e.toLowerCase()
                            : e[0] !== e[0].toLowerCase()
                              ? e[0].toLowerCase() + e.slice(1)
                              : e
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e96e9bea.c6142a8a.js.map
