window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-63e37921"],
        {
            364615: (e, i, a) => {
                a.d(i, { Z: () => n });
                var l = { adjustable: "slider", button: "button", header: "heading", image: "img", imagebutton: null, keyboardkey: null, label: null, link: "link", none: "presentation", search: "search", summary: "region", text: null };
                const t = (e) => {
                    var i = e.accessibilityRole,
                        a = e.role || i;
                    if (a) {
                        var t = l[a];
                        if (null !== t) return t || a;
                    }
                };
                var s = { article: "article", banner: "header", blockquote: "blockquote", button: "button", code: "code", complementary: "aside", contentinfo: "footer", deletion: "del", emphasis: "em", figure: "figure", insertion: "ins", form: "form", list: "ul", listitem: "li", main: "main", navigation: "nav", paragraph: "p", region: "section", strong: "strong" },
                    c = {};
                const n = {
                    isDisabled: (e) => e.disabled || (Array.isArray(e.accessibilityStates) && e.accessibilityStates.indexOf("disabled") > -1),
                    propsToAccessibilityComponent: function (e) {
                        if ((void 0 === e && (e = c), "label" === (e.role || e.accessibilityRole))) return "label";
                        var i = t(e);
                        if (i) {
                            if ("heading" === i) {
                                var a = e.accessibilityLevel || e["aria-level"];
                                return null != a ? "h" + a : "h1";
                            }
                            return s[i];
                        }
                    },
                    propsToAriaRole: t,
                };
            },
            7971: (e, i, a) => {
                a.d(i, { W: () => t });
                var l = [];
                function t(e) {
                    return l[e - 1];
                }
            },
            144617: (e, i, a) => {
                a.d(i, { Z: () => r });
                var l = /^data:/;
                class t {
                    static has(e) {
                        var i = t._entries;
                        return l.test(e) || Boolean(i[e]);
                    }
                    static add(e) {
                        var i = t._entries,
                            a = Date.now();
                        i[e] ? ((i[e].lastUsedTimestamp = a), (i[e].refCount += 1)) : (i[e] = { lastUsedTimestamp: a, refCount: 1 });
                    }
                    static remove(e) {
                        var i = t._entries;
                        i[e] && (i[e].refCount -= 1), t._cleanUpIfNeeded();
                    }
                    static _cleanUpIfNeeded() {
                        var e,
                            i,
                            a = t._entries,
                            l = Object.keys(a);
                        l.length + 1 > t._maximumEntries &&
                            (l.forEach((l) => {
                                var t = a[l];
                                (!i || t.lastUsedTimestamp < i.lastUsedTimestamp) && 0 === t.refCount && ((e = l), (i = t));
                            }),
                            e && delete a[e]);
                    }
                }
                (t._maximumEntries = 256), (t._entries = {});
                var s = 0,
                    c = {},
                    n = {
                        abort(e) {
                            var i = c["" + e];
                            i && ((i.onerror = null), (i.onload = null), (i = null), delete c["" + e]);
                        },
                        getSize(e, i, a) {
                            var l = !1,
                                t = setInterval(r, 16),
                                s = n.load(e, r, function () {
                                    "function" == typeof a && a();
                                    n.abort(s), clearInterval(t);
                                });
                            function r() {
                                var e = c["" + s];
                                if (e) {
                                    var a = e.naturalHeight,
                                        r = e.naturalWidth;
                                    a && r && (i(r, a), (l = !0));
                                }
                                l && (n.abort(s), clearInterval(t));
                            }
                        },
                        has: (e) => t.has(e),
                        load(e, i, a) {
                            s += 1;
                            var l = new window.Image();
                            return (
                                (l.onerror = a),
                                (l.onload = (e) => {
                                    var a = () => i({ nativeEvent: e });
                                    "function" == typeof l.decode ? l.decode().then(a, a) : setTimeout(a, 0);
                                }),
                                (l.src = e),
                                (c["" + s] = l),
                                s
                            );
                        },
                        prefetch: (e) =>
                            new Promise((i, a) => {
                                n.load(
                                    e,
                                    () => {
                                        t.add(e), t.remove(e), i();
                                    },
                                    a,
                                );
                            }),
                        queryCache(e) {
                            var i = {};
                            return (
                                e.forEach((e) => {
                                    t.has(e) && (i[e] = "disk/memory");
                                }),
                                Promise.resolve(i)
                            );
                        },
                    };
                const r = n;
            },
            901736: (e, i, a) => {
                a.d(i, { Z: () => t });
                var l = a(386308);
                const t = {
                    _currentlyFocusedNode: null,
                    currentlyFocusedField() {
                        return document.activeElement !== this._currentlyFocusedNode && (this._currentlyFocusedNode = null), this._currentlyFocusedNode;
                    },
                    focusTextInput(e) {
                        null !== e && ((this._currentlyFocusedNode = e), document.activeElement !== e && l.Z.focus(e));
                    },
                    blurTextInput(e) {
                        null !== e && ((this._currentlyFocusedNode = null), document.activeElement === e && l.Z.blur(e));
                    },
                };
            },
            452869: (e, i, a) => {
                a.d(i, { O: () => r });
                var l = a(19017),
                    t = () => {};
                var s = (function () {
                    var e = !1;
                    if (l.Z)
                        try {
                            var i = {};
                            Object.defineProperty(i, "passive", { get: () => ((e = !0), !1) }), window.addEventListener("test", null, i), window.removeEventListener("test", null, i);
                        } catch (e) {}
                    return e;
                })();
                function c() {
                    return this.cancelBubble;
                }
                function n() {
                    return this.defaultPrevented;
                }
                function r(e, i, a, l) {
                    var r = (function (e) {
                            return null != e && (s ? e : Boolean(e.capture));
                        })(l),
                        o = (e) => {
                            return a((((i = e).nativeEvent = i), (i.persist = t), (i.isDefaultPrevented = n), (i.isPropagationStopped = c), i));
                            var i;
                        };
                    return (
                        e.addEventListener(i, o, r),
                        function () {
                            null != e && e.removeEventListener(i, o, r);
                        }
                    );
                }
            },
            19017: (e, i, a) => {
                a.d(i, { Z: () => l });
                const l = !("undefined" == typeof window || !window.document || !window.document.createElement);
            },
            645747: (e, i, a) => {
                a.d(i, { Z: () => m });
                var l = a(133028),
                    t = a(231461),
                    s = a(364615),
                    c = a(297689),
                    n = a(180612),
                    r = [
                        "aria-activedescendant",
                        "accessibilityActiveDescendant",
                        "aria-atomic",
                        "accessibilityAtomic",
                        "aria-autocomplete",
                        "accessibilityAutoComplete",
                        "aria-busy",
                        "accessibilityBusy",
                        "aria-checked",
                        "accessibilityChecked",
                        "aria-colcount",
                        "accessibilityColumnCount",
                        "aria-colindex",
                        "accessibilityColumnIndex",
                        "aria-colspan",
                        "accessibilityColumnSpan",
                        "aria-controls",
                        "accessibilityControls",
                        "aria-current",
                        "accessibilityCurrent",
                        "aria-describedby",
                        "accessibilityDescribedBy",
                        "aria-details",
                        "accessibilityDetails",
                        "aria-disabled",
                        "accessibilityDisabled",
                        "aria-errormessage",
                        "accessibilityErrorMessage",
                        "aria-expanded",
                        "accessibilityExpanded",
                        "aria-flowto",
                        "accessibilityFlowTo",
                        "aria-haspopup",
                        "accessibilityHasPopup",
                        "aria-hidden",
                        "accessibilityHidden",
                        "aria-invalid",
                        "accessibilityInvalid",
                        "aria-keyshortcuts",
                        "accessibilityKeyShortcuts",
                        "aria-label",
                        "accessibilityLabel",
                        "aria-labelledby",
                        "accessibilityLabelledBy",
                        "aria-level",
                        "accessibilityLevel",
                        "aria-live",
                        "accessibilityLiveRegion",
                        "aria-modal",
                        "accessibilityModal",
                        "aria-multiline",
                        "accessibilityMultiline",
                        "aria-multiselectable",
                        "accessibilityMultiSelectable",
                        "aria-orientation",
                        "accessibilityOrientation",
                        "aria-owns",
                        "accessibilityOwns",
                        "aria-placeholder",
                        "accessibilityPlaceholder",
                        "aria-posinset",
                        "accessibilityPosInSet",
                        "aria-pressed",
                        "accessibilityPressed",
                        "aria-readonly",
                        "accessibilityReadOnly",
                        "aria-required",
                        "accessibilityRequired",
                        "role",
                        "accessibilityRole",
                        "aria-roledescription",
                        "accessibilityRoleDescription",
                        "aria-rowcount",
                        "accessibilityRowCount",
                        "aria-rowindex",
                        "accessibilityRowIndex",
                        "aria-rowspan",
                        "accessibilityRowSpan",
                        "aria-selected",
                        "accessibilitySelected",
                        "aria-setsize",
                        "accessibilitySetSize",
                        "aria-sort",
                        "accessibilitySort",
                        "aria-valuemax",
                        "accessibilityValueMax",
                        "aria-valuemin",
                        "accessibilityValueMin",
                        "aria-valuenow",
                        "accessibilityValueNow",
                        "aria-valuetext",
                        "accessibilityValueText",
                        "dataSet",
                        "focusable",
                        "id",
                        "nativeID",
                        "pointerEvents",
                        "style",
                        "tabIndex",
                        "testID",
                    ],
                    o = {},
                    u = Object.prototype.hasOwnProperty,
                    d = Array.isArray,
                    b = /[A-Z]/g;
                function y(e) {
                    return "-" + e.toLowerCase();
                }
                function p(e) {
                    return d(e) ? e.join(" ") : e;
                }
                var v = c.Z.create({ auto: { pointerEvents: "auto" }, "box-none": { pointerEvents: "box-none" }, "box-only": { pointerEvents: "box-only" }, none: { pointerEvents: "none" } });
                const m = (e, i, a) => {
                    i || (i = o);
                    var d = i,
                        m = d["aria-activedescendant"],
                        w = d.accessibilityActiveDescendant,
                        h = d["aria-atomic"],
                        O = d.accessibilityAtomic,
                        f = d["aria-autocomplete"],
                        x = d.accessibilityAutoComplete,
                        C = d["aria-busy"],
                        S = d.accessibilityBusy,
                        U = d["aria-checked"],
                        g = d.accessibilityChecked,
                        R = d["aria-colcount"],
                        D = d.accessibilityColumnCount,
                        E = d["aria-colindex"],
                        I = d.accessibilityColumnIndex,
                        T = d["aria-colspan"],
                        M = d.accessibilityColumnSpan,
                        P = d["aria-controls"],
                        k = d.accessibilityControls,
                        _ = d["aria-current"],
                        L = d.accessibilityCurrent,
                        A = d["aria-describedby"],
                        Z = d.accessibilityDescribedBy,
                        B = d["aria-details"],
                        N = d.accessibilityDetails,
                        V = d["aria-disabled"],
                        F = d.accessibilityDisabled,
                        q = d["aria-errormessage"],
                        H = d.accessibilityErrorMessage,
                        K = d["aria-expanded"],
                        z = d.accessibilityExpanded,
                        j = d["aria-flowto"],
                        W = d.accessibilityFlowTo,
                        G = d["aria-haspopup"],
                        X = d.accessibilityHasPopup,
                        J = d["aria-hidden"],
                        Y = d.accessibilityHidden,
                        Q = d["aria-invalid"],
                        $ = d.accessibilityInvalid,
                        ee = d["aria-keyshortcuts"],
                        ie = d.accessibilityKeyShortcuts,
                        ae = d["aria-label"],
                        le = d.accessibilityLabel,
                        te = d["aria-labelledby"],
                        se = d.accessibilityLabelledBy,
                        ce = d["aria-level"],
                        ne = d.accessibilityLevel,
                        re = d["aria-live"],
                        oe = d.accessibilityLiveRegion,
                        ue = d["aria-modal"],
                        de = d.accessibilityModal,
                        be = d["aria-multiline"],
                        ye = d.accessibilityMultiline,
                        pe = d["aria-multiselectable"],
                        ve = d.accessibilityMultiSelectable,
                        me = d["aria-orientation"],
                        we = d.accessibilityOrientation,
                        he = d["aria-owns"],
                        Oe = d.accessibilityOwns,
                        fe = d["aria-placeholder"],
                        xe = d.accessibilityPlaceholder,
                        Ce = d["aria-posinset"],
                        Se = d.accessibilityPosInSet,
                        Ue = d["aria-pressed"],
                        ge = d.accessibilityPressed,
                        Re = d["aria-readonly"],
                        De = d.accessibilityReadOnly,
                        Ee = d["aria-required"],
                        Ie = d.accessibilityRequired,
                        Te = (d.role, d.accessibilityRole),
                        Me = d["aria-roledescription"],
                        Pe = d.accessibilityRoleDescription,
                        ke = d["aria-rowcount"],
                        _e = d.accessibilityRowCount,
                        Le = d["aria-rowindex"],
                        Ae = d.accessibilityRowIndex,
                        Ze = d["aria-rowspan"],
                        Be = d.accessibilityRowSpan,
                        Ne = d["aria-selected"],
                        Ve = d.accessibilitySelected,
                        Fe = d["aria-setsize"],
                        qe = d.accessibilitySetSize,
                        He = d["aria-sort"],
                        Ke = d.accessibilitySort,
                        ze = d["aria-valuemax"],
                        je = d.accessibilityValueMax,
                        We = d["aria-valuemin"],
                        Ge = d.accessibilityValueMin,
                        Xe = d["aria-valuenow"],
                        Je = d.accessibilityValueNow,
                        Ye = d["aria-valuetext"],
                        Qe = d.accessibilityValueText,
                        $e = d.dataSet,
                        ei = d.focusable,
                        ii = d.id,
                        ai = d.nativeID,
                        li = d.pointerEvents,
                        ti = d.style,
                        si = d.tabIndex,
                        ci = d.testID,
                        ni = (0, t.Z)(d, r);
                    null != F && (0, n.O)("accessibilityDisabled", "accessibilityDisabled is deprecated.");
                    var ri = V || F,
                        oi = s.Z.propsToAriaRole(i);
                    null != w && (0, n.O)("accessibilityActiveDescendant", "accessibilityActiveDescendant is deprecated. Use aria-activedescendant.");
                    var ui = null != m ? m : w;
                    null != ui && (ni["aria-activedescendant"] = ui), null != O && (0, n.O)("accessibilityAtomic", "accessibilityAtomic is deprecated. Use aria-atomic.");
                    var di = null != h ? m : O;
                    null != di && (ni["aria-atomic"] = di), null != x && (0, n.O)("accessibilityAutoComplete", "accessibilityAutoComplete is deprecated. Use aria-autocomplete.");
                    var bi = null != f ? f : x;
                    null != bi && (ni["aria-autocomplete"] = bi), null != S && (0, n.O)("accessibilityBusy", "accessibilityBusy is deprecated. Use aria-busy.");
                    var yi = null != C ? C : S;
                    null != yi && (ni["aria-busy"] = yi), null != g && (0, n.O)("accessibilityChecked", "accessibilityChecked is deprecated. Use aria-checked.");
                    var pi = null != U ? U : g;
                    null != pi && (ni["aria-checked"] = pi), null != D && (0, n.O)("accessibilityColumnCount", "accessibilityColumnCount is deprecated. Use aria-colcount.");
                    var vi = null != R ? R : D;
                    null != vi && (ni["aria-colcount"] = vi), null != I && (0, n.O)("accessibilityColumnIndex", "accessibilityColumnIndex is deprecated. Use aria-colindex.");
                    var mi = null != E ? E : I;
                    null != mi && (ni["aria-colindex"] = mi), null != M && (0, n.O)("accessibilityColumnSpan", "accessibilityColumnSpan is deprecated. Use aria-colspan.");
                    var wi = null != T ? T : M;
                    null != wi && (ni["aria-colspan"] = wi), null != k && (0, n.O)("accessibilityControls", "accessibilityControls is deprecated. Use aria-controls.");
                    var hi = null != P ? P : k;
                    null != hi && (ni["aria-controls"] = p(hi)), null != L && (0, n.O)("accessibilityCurrent", "accessibilityCurrent is deprecated. Use aria-current.");
                    var Oi = null != _ ? _ : L;
                    null != Oi && (ni["aria-current"] = Oi), null != Z && (0, n.O)("accessibilityDescribedBy", "accessibilityDescribedBy is deprecated. Use aria-describedby.");
                    var fi = null != A ? A : Z;
                    null != fi && (ni["aria-describedby"] = p(fi)), null != N && (0, n.O)("accessibilityDetails", "accessibilityDetails is deprecated. Use aria-details.");
                    var xi = null != B ? B : N;
                    null != xi && (ni["aria-details"] = xi), !0 === ri && ((ni["aria-disabled"] = !0), ("button" !== e && "form" !== e && "input" !== e && "select" !== e && "textarea" !== e) || (ni.disabled = !0)), null != H && (0, n.O)("accessibilityErrorMessage", "accessibilityErrorMessage is deprecated. Use aria-errormessage.");
                    var Ci = null != q ? q : H;
                    null != Ci && (ni["aria-errormessage"] = Ci), null != z && (0, n.O)("accessibilityExpanded", "accessibilityExpanded is deprecated. Use aria-expanded.");
                    var Si = null != K ? K : z;
                    null != Si && (ni["aria-expanded"] = Si), null != W && (0, n.O)("accessibilityFlowTo", "accessibilityFlowTo is deprecated. Use aria-flowto.");
                    var Ui = null != j ? j : W;
                    null != Ui && (ni["aria-flowto"] = p(Ui)), null != X && (0, n.O)("accessibilityHasPopup", "accessibilityHasPopup is deprecated. Use aria-haspopup.");
                    var gi = null != G ? G : X;
                    null != gi && (ni["aria-haspopup"] = gi), null != Y && (0, n.O)("accessibilityHidden", "accessibilityHidden is deprecated. Use aria-hidden.");
                    var Ri = null != J ? J : Y;
                    !0 === Ri && (ni["aria-hidden"] = Ri), null != $ && (0, n.O)("accessibilityInvalid", "accessibilityInvalid is deprecated. Use aria-invalid.");
                    var Di = null != Q ? Q : $;
                    null != Di && (ni["aria-invalid"] = Di), null != ie && (0, n.O)("accessibilityKeyShortcuts", "accessibilityKeyShortcuts is deprecated. Use aria-keyshortcuts.");
                    var Ei = null != ee ? ee : ie;
                    null != Ei && (ni["aria-keyshortcuts"] = p(Ei)), null != le && (0, n.O)("accessibilityLabel", "accessibilityLabel is deprecated. Use aria-label.");
                    var Ii = null != ae ? ae : le;
                    null != Ii && (ni["aria-label"] = Ii), null != se && (0, n.O)("accessibilityLabelledBy", "accessibilityLabelledBy is deprecated. Use aria-labelledby.");
                    var Ti = null != te ? te : se;
                    null != Ti && (ni["aria-labelledby"] = p(Ti)), null != ne && (0, n.O)("accessibilityLevel", "accessibilityLevel is deprecated. Use aria-level.");
                    var Mi = null != ce ? ce : ne;
                    null != Mi && (ni["aria-level"] = Mi), null != oe && (0, n.O)("accessibilityLiveRegion", "accessibilityLiveRegion is deprecated. Use aria-live.");
                    var Pi = null != re ? re : oe;
                    null != Pi && (ni["aria-live"] = "none" === Pi ? "off" : Pi), null != de && (0, n.O)("accessibilityModal", "accessibilityModal is deprecated. Use aria-modal.");
                    var ki = null != ue ? ue : de;
                    null != ki && (ni["aria-modal"] = ki), null != ye && (0, n.O)("accessibilityMultiline", "accessibilityMultiline is deprecated. Use aria-multiline.");
                    var _i = null != be ? be : ye;
                    null != _i && (ni["aria-multiline"] = _i), null != ve && (0, n.O)("accessibilityMultiSelectable", "accessibilityMultiSelectable is deprecated. Use aria-multiselectable.");
                    var Li = null != pe ? pe : ve;
                    null != Li && (ni["aria-multiselectable"] = Li), null != we && (0, n.O)("accessibilityOrientation", "accessibilityOrientation is deprecated. Use aria-orientation.");
                    var Ai = null != me ? me : we;
                    null != Ai && (ni["aria-orientation"] = Ai), null != Oe && (0, n.O)("accessibilityOwns", "accessibilityOwns is deprecated. Use aria-owns.");
                    var Zi = null != he ? he : Oe;
                    null != Zi && (ni["aria-owns"] = p(Zi)), null != xe && (0, n.O)("accessibilityPlaceholder", "accessibilityPlaceholder is deprecated. Use aria-placeholder.");
                    var Bi = null != fe ? fe : xe;
                    null != Bi && (ni["aria-placeholder"] = Bi), null != Se && (0, n.O)("accessibilityPosInSet", "accessibilityPosInSet is deprecated. Use aria-posinset.");
                    var Ni = null != Ce ? Ce : Se;
                    null != Ni && (ni["aria-posinset"] = Ni), null != ge && (0, n.O)("accessibilityPressed", "accessibilityPressed is deprecated. Use aria-pressed.");
                    var Vi = null != Ue ? Ue : ge;
                    null != Vi && (ni["aria-pressed"] = Vi), null != De && (0, n.O)("accessibilityReadOnly", "accessibilityReadOnly is deprecated. Use aria-readonly.");
                    var Fi = null != Re ? Re : De;
                    null != Fi && ((ni["aria-readonly"] = Fi), ("input" !== e && "select" !== e && "textarea" !== e) || (ni.readOnly = !0)), null != Ie && (0, n.O)("accessibilityRequired", "accessibilityRequired is deprecated. Use aria-required.");
                    var qi = null != Ee ? Ee : Ie;
                    null != qi && ((ni["aria-required"] = qi), ("input" !== e && "select" !== e && "textarea" !== e) || (ni.required = Ie)), null != Te && (0, n.O)("accessibilityRole", "accessibilityRole is deprecated. Use role."), null != oi && (ni.role = "none" === oi ? "presentation" : oi), null != Pe && (0, n.O)("accessibilityRoleDescription", "accessibilityRoleDescription is deprecated. Use aria-roledescription.");
                    var Hi = null != Me ? Me : Pe;
                    null != Hi && (ni["aria-roledescription"] = Hi), null != _e && (0, n.O)("accessibilityRowCount", "accessibilityRowCount is deprecated. Use aria-rowcount.");
                    var Ki = null != ke ? ke : _e;
                    null != Ki && (ni["aria-rowcount"] = Ki), null != Ae && (0, n.O)("accessibilityRowIndex", "accessibilityRowIndex is deprecated. Use aria-rowindex.");
                    var zi = null != Le ? Le : Ae;
                    null != zi && (ni["aria-rowindex"] = zi), null != Be && (0, n.O)("accessibilityRowSpan", "accessibilityRowSpan is deprecated. Use aria-rowspan.");
                    var ji = null != Ze ? Ze : Be;
                    null != ji && (ni["aria-rowspan"] = ji), null != Ve && (0, n.O)("accessibilitySelected", "accessibilitySelected is deprecated. Use aria-selected.");
                    var Wi = null != Ne ? Ne : Ve;
                    null != Wi && (ni["aria-selected"] = Wi), null != qe && (0, n.O)("accessibilitySetSize", "accessibilitySetSize is deprecated. Use aria-setsize.");
                    var Gi = null != Fe ? Fe : qe;
                    null != Gi && (ni["aria-setsize"] = Gi), null != Ke && (0, n.O)("accessibilitySort", "accessibilitySort is deprecated. Use aria-sort.");
                    var Xi = null != He ? He : Ke;
                    null != Xi && (ni["aria-sort"] = Xi), null != je && (0, n.O)("accessibilityValueMax", "accessibilityValueMax is deprecated. Use aria-valuemax.");
                    var Ji = null != ze ? ze : je;
                    null != Ji && (ni["aria-valuemax"] = Ji), null != Ge && (0, n.O)("accessibilityValueMin", "accessibilityValueMin is deprecated. Use aria-valuemin.");
                    var Yi = null != We ? We : Ge;
                    null != Yi && (ni["aria-valuemin"] = Yi), null != Je && (0, n.O)("accessibilityValueNow", "accessibilityValueNow is deprecated. Use aria-valuenow.");
                    var Qi = null != Xe ? Xe : Je;
                    null != Qi && (ni["aria-valuenow"] = Qi), null != Qe && (0, n.O)("accessibilityValueText", "accessibilityValueText is deprecated. Use aria-valuetext.");
                    var $i = null != Ye ? Ye : Qe;
                    if ((null != $i && (ni["aria-valuetext"] = $i), null != $e))
                        for (var ea in $e)
                            if (u.call($e, ea)) {
                                var ia = ea.replace(b, y),
                                    aa = $e[ea];
                                null != aa && (ni["data-" + ia] = aa);
                            }
                    0 === si || "0" === si || -1 === si || "-1" === si ? (ni.tabIndex = si) : (null != ei && (0, n.O)("focusable", "focusable is deprecated."), !1 === ei && (ni.tabIndex = "-1"), "a" === e || "button" === e || "input" === e || "select" === e || "textarea" === e ? (!1 !== ei && !0 !== F) || (ni.tabIndex = "-1") : "button" === oi || "checkbox" === oi || "link" === oi || "radio" === oi || "textbox" === oi || "switch" === oi ? !1 !== ei && (ni.tabIndex = "0") : !0 === ei && (ni.tabIndex = "0")), null != li && (0, n.O)("pointerEvents", "props.pointerEvents is deprecated. Use style.pointerEvents");
                    var la = (0, c.Z)([ti, li && v[li]], (0, l.Z)({ writingDirection: "ltr" }, a)),
                        ta = la[0],
                        sa = la[1];
                    ta && (ni.className = ta), sa && (ni.style = sa), null != ai && (0, n.O)("nativeID", "nativeID is deprecated. Use id.");
                    var ca = null != ii ? ii : ai;
                    return null != ca && (ni.id = ca), null != ci && (ni["data-testid"] = ci), null == ni.type && "button" === e && (ni.type = "button"), ni;
                };
            },
            209198: (e, i, a) => {
                a.d(i, { Z: () => t });
                var l = a(901736);
                const t = () => {
                    l.Z.blurTextInput(l.Z.currentlyFocusedField());
                };
            },
            730464: (e, i, a) => {
                a.d(i, { E5: () => o, LO: () => t, Uy: () => n, YB: () => c, _T: () => s, hJ: () => r, lG: () => l, vr: () => u });
                var l = { children: !0, dataSet: !0, dir: !0, id: !0, ref: !0, suppressHydrationWarning: !0, tabIndex: !0, testID: !0, focusable: !0, nativeID: !0 },
                    t = {
                        "aria-activedescendant": !0,
                        "aria-atomic": !0,
                        "aria-autocomplete": !0,
                        "aria-busy": !0,
                        "aria-checked": !0,
                        "aria-colcount": !0,
                        "aria-colindex": !0,
                        "aria-colspan": !0,
                        "aria-controls": !0,
                        "aria-current": !0,
                        "aria-describedby": !0,
                        "aria-details": !0,
                        "aria-disabled": !0,
                        "aria-errormessage": !0,
                        "aria-expanded": !0,
                        "aria-flowto": !0,
                        "aria-haspopup": !0,
                        "aria-hidden": !0,
                        "aria-invalid": !0,
                        "aria-keyshortcuts": !0,
                        "aria-label": !0,
                        "aria-labelledby": !0,
                        "aria-level": !0,
                        "aria-live": !0,
                        "aria-modal": !0,
                        "aria-multiline": !0,
                        "aria-multiselectable": !0,
                        "aria-orientation": !0,
                        "aria-owns": !0,
                        "aria-placeholder": !0,
                        "aria-posinset": !0,
                        "aria-pressed": !0,
                        "aria-readonly": !0,
                        "aria-required": !0,
                        role: !0,
                        "aria-roledescription": !0,
                        "aria-rowcount": !0,
                        "aria-rowindex": !0,
                        "aria-rowspan": !0,
                        "aria-selected": !0,
                        "aria-setsize": !0,
                        "aria-sort": !0,
                        "aria-valuemax": !0,
                        "aria-valuemin": !0,
                        "aria-valuenow": !0,
                        "aria-valuetext": !0,
                        accessibilityActiveDescendant: !0,
                        accessibilityAtomic: !0,
                        accessibilityAutoComplete: !0,
                        accessibilityBusy: !0,
                        accessibilityChecked: !0,
                        accessibilityColumnCount: !0,
                        accessibilityColumnIndex: !0,
                        accessibilityColumnSpan: !0,
                        accessibilityControls: !0,
                        accessibilityCurrent: !0,
                        accessibilityDescribedBy: !0,
                        accessibilityDetails: !0,
                        accessibilityDisabled: !0,
                        accessibilityErrorMessage: !0,
                        accessibilityExpanded: !0,
                        accessibilityFlowTo: !0,
                        accessibilityHasPopup: !0,
                        accessibilityHidden: !0,
                        accessibilityInvalid: !0,
                        accessibilityKeyShortcuts: !0,
                        accessibilityLabel: !0,
                        accessibilityLabelledBy: !0,
                        accessibilityLevel: !0,
                        accessibilityLiveRegion: !0,
                        accessibilityModal: !0,
                        accessibilityMultiline: !0,
                        accessibilityMultiSelectable: !0,
                        accessibilityOrientation: !0,
                        accessibilityOwns: !0,
                        accessibilityPlaceholder: !0,
                        accessibilityPosInSet: !0,
                        accessibilityPressed: !0,
                        accessibilityReadOnly: !0,
                        accessibilityRequired: !0,
                        accessibilityRole: !0,
                        accessibilityRoleDescription: !0,
                        accessibilityRowCount: !0,
                        accessibilityRowIndex: !0,
                        accessibilityRowSpan: !0,
                        accessibilitySelected: !0,
                        accessibilitySetSize: !0,
                        accessibilitySort: !0,
                        accessibilityValueMax: !0,
                        accessibilityValueMin: !0,
                        accessibilityValueNow: !0,
                        accessibilityValueText: !0,
                    },
                    s = { onClick: !0, onAuxClick: !0, onContextMenu: !0, onGotPointerCapture: !0, onLostPointerCapture: !0, onPointerCancel: !0, onPointerDown: !0, onPointerEnter: !0, onPointerMove: !0, onPointerLeave: !0, onPointerOut: !0, onPointerOver: !0, onPointerUp: !0 },
                    c = { onBlur: !0, onFocus: !0 },
                    n = { onKeyDown: !0, onKeyDownCapture: !0, onKeyUp: !0, onKeyUpCapture: !0 },
                    r = { onMouseDown: !0, onMouseEnter: !0, onMouseLeave: !0, onMouseMove: !0, onMouseOver: !0, onMouseOut: !0, onMouseUp: !0 },
                    o = { onTouchCancel: !0, onTouchCancelCapture: !0, onTouchEnd: !0, onTouchEndCapture: !0, onTouchMove: !0, onTouchMoveCapture: !0, onTouchStart: !0, onTouchStartCapture: !0 },
                    u = { style: !0 };
            },
            747351: (e, i, a) => {
                a.d(i, { Z: () => l });
                const l = (e) => {
                    if (null != e && 1 === e.nodeType && "function" == typeof e.getBoundingClientRect) return e.getBoundingClientRect();
                };
            },
            860944: (e, i, a) => {
                function l() {
                    var e = window.getSelection(),
                        i = e.toString(),
                        a = e.anchorNode,
                        l = e.focusNode,
                        t = (a && a.nodeType === window.Node.TEXT_NODE) || (l && l.nodeType === window.Node.TEXT_NODE);
                    return i.length >= 1 && "\n" !== i && t;
                }
                a.d(i, { Z: () => l });
            },
            389817: (e, i, a) => {
                a.d(i, { Z: () => l });
                const l = (e) => "currentcolor" === e || "currentColor" === e || "inherit" === e || 0 === e.indexOf("var(");
            },
            188212: (e, i, a) => {
                a.d(i, { Z: () => l });
                a(202784);
                function l() {
                    for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                    return function (e) {
                        i.forEach((i) => {
                            null != i && ("function" != typeof i ? "object" != typeof i || (i.current = e) : i(e));
                        });
                    };
                }
            },
            808094: (e, i, a) => {
                a.d(i, { CH: () => T });
                var l,
                    t,
                    s = a(452869),
                    c = a(19017),
                    n = "keyboard",
                    r = "keyboard",
                    o = !1,
                    u = new Set(),
                    d = "keyboard",
                    b = "mouse",
                    y = "touch",
                    p = "contextmenu",
                    v = "mousedown",
                    m = "mousemove",
                    w = "mouseup",
                    h = "pointerdown",
                    O = "pointermove",
                    f = "scroll",
                    x = "selectionchange",
                    C = "touchcancel",
                    S = "touchmove",
                    U = "touchstart",
                    g = { passive: !0 },
                    R = { capture: !0, passive: !0 };
                function D() {
                    (null == l && null == t) || (null != l && ((r = l), (l = null)), null != t && ((n = t), (t = null)), I());
                }
                function E(e) {
                    var i = e.type;
                    if ("undefined" != typeof window && null != window.PointerEvent) {
                        if (i === h) return void (n !== e.pointerType && ((r = e.pointerType), (n = e.pointerType), I()));
                        if (i === O) return void (r !== e.pointerType && ((r = e.pointerType), I()));
                    } else {
                        if ((o || (i === v && n !== b && ((r = b), (n = b), I()), i === m && r !== b && ((r = b), I())), i === U)) return (o = !0), e.touches && e.touches.length > 1 && (o = !1), void (n !== y && ((r = y), (n = y), I()));
                        (i !== p && i !== w && i !== x && i !== f && i !== C && i !== S) || (o = !1);
                    }
                }
                function I() {
                    var e = { activeModality: n, modality: r };
                    u.forEach((i) => {
                        i(e);
                    });
                }
                function T() {
                    return r;
                }
                c.Z &&
                    ((0, s.O)(
                        window,
                        "blur",
                        function () {
                            (l = r), (t = n), (n = d), (r = d), I(), (o = !1);
                        },
                        g,
                    ),
                    (0, s.O)(
                        window,
                        "focus",
                        function () {
                            D();
                        },
                        g,
                    ),
                    (0, s.O)(
                        document,
                        "keydown",
                        function (e) {
                            e.metaKey || e.altKey || e.ctrlKey || (r !== d && ((r = d), (n = d), I()));
                        },
                        R,
                    ),
                    (0, s.O)(
                        document,
                        "visibilitychange",
                        function () {
                            "hidden" !== document.visibilityState && D();
                        },
                        R,
                    ),
                    (0, s.O)(document, h, E, R),
                    (0, s.O)(document, O, E, R),
                    (0, s.O)(document, p, E, R),
                    (0, s.O)(document, v, E, R),
                    (0, s.O)(document, m, E, R),
                    (0, s.O)(document, w, E, R),
                    (0, s.O)(document, C, E, R),
                    (0, s.O)(document, S, E, R),
                    (0, s.O)(document, U, E, R),
                    (0, s.O)(document, x, E, R),
                    (0, s.O)(document, f, E, R));
            },
            389641: (e, i, a) => {
                function l(e, i) {
                    var a = {};
                    for (var l in e) e.hasOwnProperty(l) && !0 === i[l] && (a[l] = e[l]);
                    return a;
                }
                a.d(i, { Z: () => l });
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-63e37921.6309159a.js.map
