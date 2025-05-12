(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-e96e9bea"],
    {
        762815: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => l });
            var r,
                i,
                a,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "useIDVerificationProcessVendorQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: (r = [{ kind: "Literal", name: "s", value: "4721" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [(i = { alias: null, args: null, concreteType: "IdentityVerificationProcessInfo", kind: "LinkedField", name: "identity_verification_process_info", plural: !1, selections: [{ alias: null, args: null, concreteType: "IdentityVerificationVendor", kind: "LinkedField", name: "vendor", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "identifier", storageKey: null }], storageKey: null }], storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "useIDVerificationProcessVendorQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: r,
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
                                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [i, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], storageKey: null }, a], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            a,
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
            s.hash = "e2dfe548d137a744e29f47bdd00c2ff5";
            const l = s;
        },
        786033: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => u });
            var r,
                i,
                a,
                s,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: [(r = { defaultValue: null, kind: "LocalArgument", name: "error_url" }), (i = { defaultValue: null, kind: "LocalArgument", name: "success_url" }), (a = { defaultValue: null, kind: "LocalArgument", name: "verification_flow" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useIDVerificationSessionUrlMutation",
                        selections: (l = [
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
                                    { kind: "InlineFragment", selections: (s = [{ alias: null, args: null, kind: "ScalarField", name: "session_url", storageKey: null }]), type: "StartIdentityVerificationResultSuccessAu10tixSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: s, type: "StartIdentityVerificationResultSuccessSession", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "message", storageKey: null }], type: "StartIdentityVerificationResultFailure", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [i, r, a], kind: "Operation", name: "useIDVerificationSessionUrlMutation", selections: l },
                    params: { id: "EBjxezEpy-W30060X7_v6g", metadata: {}, name: "useIDVerificationSessionUrlMutation", operationKind: "mutation", text: null },
                };
            o.hash = "88a4b93bad19f92c67d5957375d338be";
            const u = o;
        },
        949874: (e) => {
            e.exports = function (e, t, n) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var r = [],
                    i = e.length,
                    a = 0,
                    s = 0;
                if (!n) for (; ~(a = e.lastIndexOf(" ", t + s)) && !(a <= s); ) e.slice(s).length > t ? (r.push((s ? " " : "") + e.slice(s, a)), (s = a + 1)) : (r.push((s ? " " : "") + e.slice(s)), (s = i));
                for (t++; s < i; ) r.push(e.slice(s, (s += t)));
                return r.join("\r\n ");
            };
        },
        819858: (e, t, n) => {
            var r = n(691925),
                i = n(21681);
            function a(e, t, n) {
                Array.isArray(e[t]) ? e[t].push(n) : null != e[t] ? (e[t] = [e[t], n]) : (e[t] = n);
            }
            function s(e, t) {
                var n = t.split("="),
                    i = r(n[0]),
                    s = n[1];
                return (
                    (null != s && "" !== s) || ((s = n[0]), (i = "type")),
                    "type" === i
                        ? (s
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  a(e, i, t);
                              }),
                          e)
                        : (a(e, i, s), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, n = null, l = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, o = e.length - 1, u = 1; u < o; u++) {
                    n = e[u];
                    var d = l.exec(n);
                    if (d) {
                        var c = d[1].split("."),
                            f = c.pop(),
                            p = c.pop(),
                            h = d[3],
                            y = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(s, p ? { group: p } : {}),
                            g = r(f);
                        a(t, g, new i(g, h, y));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, n, r) {
                if (!(this instanceof t)) return new t(n);
                null != r && Object.assign(this, r), (this._field = e), (this._data = n), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function n(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var n = e[0],
                    r = e[1];
                return /text/i.test(e[2]) || (r.value = e[2]), new t(n, Array.isArray(e[3]) ? e[3].join(";") : e[3], r);
            }),
                (t.prototype = {
                    constructor: t,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new t(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var t = (this.group ? this.group + "." : "") + n(this._field), r = Object.keys(this), i = [], a = 0; a < r.length; a++) "group" !== r[a] && i.push(n(r[a]) + "=" + this[r[a]]);
                        return t + (i.length ? ";" + i.join(";") : i) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var t = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                t.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                t.push(this._data.split(";"));
                        }
                        return t;
                    },
                }),
                (e.exports = t);
        },
        588960: (e, t, n) => {
            function r() {
                if (!(this instanceof r)) return new r();
                (this.version = r.versions[r.versions.length - 1]), (this.data = {});
            }
            (r.mimeType = "text/vcard"),
                (r.extension = ".vcf"),
                (r.versions = ["2.1", "3.0", "4.0"]),
                (r.foldLine = n(949874)),
                (r.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (r.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== r.versions.indexOf(e);
                }),
                (r.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), n = [], i = 0; i < t.length; i++) n.push(new r().parse(t[i]));
                    return n;
                }),
                (r.parseLines = n(819858)),
                (r.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new r();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new r();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(r.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (r.format = function (e, t) {
                    if (((t = t || e.version || r.versions[r.versions.length - 1]), !r.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var n = [];
                    n.push("BEGIN:VCARD"), n.push("VERSION:" + t);
                    for (var i = Object.keys(e.data), a = "", s = 0; s < i.length; s++)
                        if ("version" !== i[s])
                            if (((a = e.data[i[s]]), Array.isArray(a))) for (var l = 0; l < a.length; l++) a[l].isEmpty() || n.push(r.foldLine(a[l].toString(t), 75));
                            else a.isEmpty() || n.push(r.foldLine(a.toString(t), 75));
                    return n.push("END:VCARD"), n.join("\n");
                }),
                (r.Property = n(21681)),
                (r.prototype = {
                    constructor: r,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, t, n) {
                        return this.setProperty(new r.Property(e, t, n));
                    },
                    add: function (e, t, n) {
                        var i = new r.Property(e, t, n);
                        return this.addProperty(i), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var t = e._field;
                        return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? (this.data[t] = [this.data[t], e]) : (this.data[t] = e), this;
                    },
                    parse: function (e) {
                        var t = r.normalize(e).split(/\r?\n/g),
                            n = t[0],
                            i = t[1],
                            a = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + n + '"');
                        if (!/END:VCARD/i.test(a)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + a + '"');
                        if (!/VERSION:\d\.\d/i.test(i)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + i + '"');
                        if (((this.version = i.substring(8, 11)), !r.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = r.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), r.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), n = [["version", {}, "text", e]], r = null, i = 0; i < t.length; i++)
                            if ("version" !== t[i])
                                if (((r = this.data[t[i]]), Array.isArray(r))) for (var a = 0; a < r.length; a++) n.push(r[a].toJSON());
                                else n.push(r.toJSON());
                        return ["vcard", n];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = r);
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
                                for (var t = !1, n = 0; n < e.length; n++) {
                                    var r = e.charAt(n);
                                    t && /[a-zA-Z]/.test(r) && r.toUpperCase() === r ? ((e = e.substr(0, n) + "-" + e.substr(n)), (t = !1), n++) : (t = r.toLowerCase() === r);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                                    return t.toUpperCase();
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-e96e9bea.9384944a.js.map
