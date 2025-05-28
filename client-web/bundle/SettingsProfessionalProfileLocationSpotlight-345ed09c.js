"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileLocationSpotlight-345ed09c"],
    {
        133515: (e, t, n) => {
            n.r(t), n.d(t, { LocationSpotlightQueryRenderer: () => Pn, default: () => On, locationSpotlightQuery: () => Zn });
            n(571372);
            var a = n(837777),
                o = n(202784),
                c = (n(585488), n(535338)),
                i = n(262316),
                r = n(325686),
                l = n(107267),
                s = n(154003),
                u = n(682830),
                m = n(190286),
                d = n(954110),
                p = n(943401),
                b = n(731708),
                _ = n(779610),
                f = n(242454),
                g = n(392237),
                h = n(111677),
                C = n.n(h),
                E = n(187669),
                y = n(443781),
                v = n(725516),
                S = n(800536),
                k = n(478282),
                T = n(639766),
                Z = n(351743),
                P = n.n(Z),
                O = n(71620),
                L = n(125363),
                w = n(601576);
            function M(e) {
                return { address: B(e), contact: R(e), website: e.website ? { display_url: e.website, expanded_url: e.website } : void 0, open_times: A(e), timezone: e.open_times?.timezone ? { name: e.open_times.timezone } : void 0 };
            }
            function B(e) {
                const t = { address_line1: e.address_line1, city: e.city, country: e.country, formatted_address: e.formatted_address, postal_code: e.postal_code };
                return e.administrative_area && (t.administrative_area = e.administrative_area), t;
            }
            function R(e) {
                const t = { email: void 0, phone: void 0 };
                return e.email && (t.email = { email_address: e.email }), e.number && (t.phone = { country_code: e.country_code, country_iso_code: e.country_iso_code, number: e.number }), t;
            }
            function A(e) {
                const { open_times_type: t, regular: n } = e.open_times,
                    { ALWAYS_OPEN: a, NO_HOURS: o, REGULAR_HOURS: c } = S.openTimesTypes;
                switch (t) {
                    case a:
                        return { open_times_type: a, regular: void 0 };
                    case c:
                        return { open_times_type: c, regular: n.map(({ slots: e, weekday: t }) => ({ slots: e?.map(U) || [], weekday: t })) };
                    default:
                        return;
                }
            }
            function I(e) {
                const { open_times_type: t, regular: n } = e?.open_times || {};
                return { timezone: e?.timezone?.name || Intl.DateTimeFormat().resolvedOptions().timeZone, open_times_type: t ?? S.openTimesTypes.NO_HOURS, regular: N(n) };
            }
            function N(e) {
                return e
                    ? e.map(({ slots: e, weekday: t }) => {
                          if (!t) throw new Error("weekday should be defined");
                          return { slots: e?.map(U) || [], weekday: t };
                      })
                    : [];
            }
            function U({ close: e, open: t }) {
                return { open: { hour: t?.hour || 0, minute: t?.minute || 0 }, close: { hour: e?.hour || 0, minute: e?.minute || 0 } };
            }
            const z = T.Z,
                x = Object.freeze({ page: "about_module_main_settings", section: "api", component: "create" });
            const H = n(855413).Z,
                G = Object.freeze({ page: "about_module_main_settings", section: "api", component: "delete" });
            var D = n(212196),
                F = n(277660),
                W = n.n(F);
            const Y = D.Z;
            var V = n(908478);
            const K = ["address_line1", "city", "postal_code", "country"];
            var q = n(423433),
                j = n(437429),
                $ = n.n(j),
                J = n(10622),
                Q = n.n(J);
            const X = Object.freeze({ page: "about_module_main_settings", section: "api", component: "fetch_maps_url" }),
                ee = q.Z;
            const te = n(25138).Z,
                ne = Object.freeze({ page: "about_module_main_settings", section: "api", component: "update" });
            var ae = n(807896),
                oe = n(521110),
                ce = n(585356),
                ie = n(617041);
            n(543673), n(240753), n(128399);
            function re(e) {
                const t = e?.open_times_type;
                if (e && t !== S.openTimesTypes.REGULAR_HOURS) return { open_times_type: t, opens: void 0, closes: void 0, is_open: void 0 };
            }
            const le = /^https?:\/\//i;
            function se(e) {
                if (!e) return;
                const t = le.test(e) ? e : `http://${e.trim()}`;
                let n;
                try {
                    n = new URL(t).hostname;
                } catch (t) {
                    n = e;
                }
                return { display: n, url: t };
            }
            function ue(e) {
                const { currentOpenTimes: t, formValues: n, mapImageUrl: a, openTimesHasChanges: c, userRestId: i } = e,
                    r = o.useMemo(() => ({ rest_id: i }), [i]),
                    l = o.useMemo(
                        () =>
                            (function (e, t, n) {
                                const a = M(e);
                                return { config: { enable_dm: !0, enable_email: !0, enable_call: e.enable_call, enable_sms: e.enable_sms }, data: { address: { formatted_address: a.address?.formatted_address }, contact: { email: a.contact?.email, phone: { country_code: a.contact?.phone?.country_code, number: a.contact?.phone?.number } }, open_times: n ?? re(a.open_times), website: se(e.website), google_verification_data: e.enable_location_map && t ? { static_map_image_url: t } : void 0 } };
                            })(n, a, c ? void 0 : t),
                        [n, a, c, t],
                    ),
                    s = n.open_times.open_times_type === S.openTimesTypes.REGULAR_HOURS;
                return o.createElement(ce.Z, null, o.createElement(ie.Z, { location: l, showUpdatedHours: s && c, user: r }));
            }
            const me = oe.Z;
            function de(e) {
                const { previewRef: t, ...n } = e,
                    a = W()(me, t),
                    c = a.v1?.[0]?.profile_module.data?.open_times;
                return o.createElement(ue, (0, ae.Z)({ currentOpenTimes: c }, n));
            }
            var pe = n(576025),
                be = n(390387),
                _e = n(855488);
            const fe = "about_module_city_settings",
                ge = C().c6c16a52,
                he = C().b772cd66,
                Ce = C().aa8015be,
                Ee = C().ffc5590e;
            var ye = n(371344),
                ve = n(956272),
                Se = n(224504),
                ke = n(558369),
                Te = n(662678);
            function Ze(e, t) {
                const { compare: n } = Intl.Collator(t),
                    a = e.sort((e, t) => n(e.label, t.label)),
                    [o, c] = (0, Te.Z)(a, (e) => /^[A-Z]/i.test(e.label));
                return [...o, ...c];
            }
            const Pe = "about_module_country_address_settings",
                Oe = C().c21037d0,
                Le = C().a8fd64d8;
            const we = g.default.create((e) => ({ container: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16, marginTop: e.spaces.space16, paddingBottom: e.spaces.space64 } })),
                Me = "about_module_state_settings",
                Be = C().b688f53a,
                Re = C().b772cd66,
                Ae = C().a67f5bbc,
                Ie = C().a0abe108;
            const Ne = "about_module_street_address_settings",
                Ue = C().c16c9568,
                ze = C().b772cd66,
                xe = C().c7a4adb0,
                He = C().j163df8e;
            const Ge = "about_module_zipcode_settings",
                De = C().b772cd66,
                Fe = C().gc0df5a6,
                We = C().af9b9b78,
                Ye = C().cd39daf6;
            const Ve = "about_module_address_settings",
                Ke = C().c16c9568,
                qe = C().e0d47030,
                je = { cancel: C().cfd2f35e, done: C().b772cd66 },
                $e = Object.freeze({ ADDRESS: "address_line1", ZIPCODE: "postal_code", CITY: "city", STATE: "administrative_area", COUNTRY: "country" }),
                Je = [$e.ADDRESS, $e.CITY, $e.ZIPCODE, $e.COUNTRY],
                Qe = [
                    {
                        key: $e.ADDRESS,
                        label: C().c16c9568,
                        placeholder: C().c7a4adb0,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.address_line1),
                                c = o.useMemo(() => {
                                    if ("" !== e.values.address_line1) return n.length < 1 ? He : void 0;
                                }, [n, e.values.address_line1]);
                            function i() {
                                c || (t.scribe({ page: Ne, element: "done", action: "click" }), e.onChange(n));
                            }
                            (0, E.q)(() => {
                                t.scribe({ page: Ne, component: "text_field", action: "impression" });
                            });
                            const r = !!n && n === e.values.address_line1;
                            return o.createElement(
                                k.Z,
                                { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c || r, onPress: i }, ze), title: Ue },
                                o.createElement(_e.Z, {
                                    autoFocus: !0,
                                    errorText: c,
                                    invalid: !!c,
                                    label: xe,
                                    maxLength: 200,
                                    name: "address_line_one",
                                    onChange: function (e) {
                                        a(e.target.value);
                                    },
                                    onSubmitEditing: i,
                                    value: n,
                                }),
                            );
                        },
                        scribeComponent: "street_address",
                    },
                    {
                        key: $e.ZIPCODE,
                        label: C().cd39daf6,
                        placeholder: C().gc0df5a6,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.postal_code),
                                c = o.useMemo(() => {
                                    if ("" !== e.values.postal_code) return n.length < 3 || n.length > 32 ? We : void 0;
                                }, [n, e.values.postal_code]);
                            function i() {
                                c || (t.scribe({ page: Ge, element: "done", action: "click" }), e.onChange(n));
                            }
                            (0, E.q)(() => {
                                t.scribe({ page: Ge, component: "text_field", action: "impression" });
                            });
                            const r = !!n && n === e.values.postal_code;
                            return o.createElement(
                                k.Z,
                                { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c || r, onPress: i }, De), title: Ye },
                                o.createElement(_e.Z, {
                                    autoFocus: !0,
                                    errorText: c,
                                    invalid: !!c,
                                    label: Fe,
                                    maxLength: 32,
                                    name: "zipcode",
                                    onChange: function (e) {
                                        a(e.target.value);
                                    },
                                    onSubmitEditing: i,
                                    value: n,
                                }),
                            );
                        },
                        scribeComponent: "zipcode",
                    },
                    {
                        key: $e.CITY,
                        label: C().c6c16a52,
                        placeholder: C().aa8015be,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.city),
                                c = o.useMemo(() => {
                                    if ("" !== e.values.city) return n.length < 1 ? Ee : void 0;
                                }, [n, e.values.city]);
                            function i() {
                                c || (t.scribe({ page: fe, element: "done", action: "click" }), e.onChange(n));
                            }
                            (0, E.q)(() => {
                                t.scribe({ page: fe, component: "text_field", action: "impression" });
                            });
                            const r = !!n && n === e.values.city;
                            return o.createElement(
                                k.Z,
                                { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c || r, onPress: i }, he), title: ge },
                                o.createElement(_e.Z, {
                                    autoFocus: !0,
                                    errorText: c,
                                    invalid: !!c,
                                    label: Ce,
                                    maxLength: 200,
                                    name: "city",
                                    onChange: function (e) {
                                        a(e.target.value);
                                    },
                                    onSubmitEditing: i,
                                    value: n,
                                }),
                            );
                        },
                        scribeComponent: "city",
                    },
                    {
                        key: $e.STATE,
                        label: C().b688f53a,
                        placeholder: C().a67f5bbc,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.administrative_area),
                                c = o.useMemo(() => {
                                    if (n.length > 200) return Ie;
                                }, [n]);
                            function i() {
                                t.scribe({ page: Me, element: "done", action: "click" }), c || e.onChange(n);
                            }
                            (0, E.q)(() => {
                                t.scribe({ page: Me, component: "text_field", action: "impression" });
                            });
                            const r = n === e.values.administrative_area;
                            return o.createElement(
                                k.Z,
                                { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c || r, onPress: i }, Re), title: Be },
                                o.createElement(_e.Z, {
                                    autoFocus: !0,
                                    errorText: c,
                                    invalid: !!c,
                                    label: Ae,
                                    maxLength: 200,
                                    name: "state / province / region",
                                    onChange: function (e) {
                                        a(e.target.value);
                                    },
                                    onSubmitEditing: i,
                                    value: n,
                                }),
                            );
                        },
                        scribeComponent: "state",
                    },
                    {
                        key: $e.COUNTRY,
                        label: C().c21037d0,
                        placeholder: C().if92b1b4,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(""),
                                c = (0, L.v9)(be.VT),
                                i = (0, L.v9)((e) => (0, ke.FG)(e, "account_country_setting_countries_whitelist")),
                                l = (0, L.v9)(pe.Lf),
                                s = o.useMemo(() => {
                                    if (!Array.isArray(i)) return [];
                                    return Ze(
                                        (0, Se.t)(i, l)
                                            .map((e) => ({ label: e.label, value: e.value.toUpperCase() }))
                                            .filter((e) => {
                                                if (!n) return !0;
                                                const t = n.toLowerCase();
                                                return e.value.toLowerCase().includes(t) || e.label.toLowerCase().includes(t);
                                            }),
                                        c,
                                    );
                                }, [i, l, c, n]);
                            return (
                                (0, E.q)(() => {
                                    t.scribe({ page: Pe, component: "list", action: "impression" });
                                }),
                                o.createElement(
                                    k.Z,
                                    { onBackClick: e.onCancel, title: Oe },
                                    o.createElement(
                                        r.Z,
                                        { style: we.container },
                                        o.createElement(ye.Z, {
                                            Icon: ve.default,
                                            onChange: function (e) {
                                                a(e.target.value);
                                            },
                                            placeholder: Le,
                                            value: n,
                                        }),
                                        s.map((n) => {
                                            return o.createElement(f.Z, {
                                                align: "left",
                                                color: "primary",
                                                key: n.label,
                                                label: n.label,
                                                onPress:
                                                    ((a = n.value),
                                                    () => {
                                                        t.scribe({ page: Pe, element: "row", action: "click" }), e.onChange(a);
                                                    }),
                                            });
                                            var a;
                                        }),
                                    ),
                                )
                            );
                        },
                        scribeComponent: "country",
                    },
                ];
            var Xe = n(359870);
            const et = "about_module_email_settings",
                tt = C().a3841918,
                nt = C().i373e022,
                at = C().b772cd66,
                ot = C().f91751f8;
            var ct = n(879891),
                it = n(661810),
                rt = n(844685),
                lt = n(101890);
            const st = C().j11df0ca;
            function ut(e) {
                const t = e.map(({ close: e, open: t }) => [60 * t.hour + t.minute, 60 * e.hour + e.minute]).sort(([e], [t]) => e - t);
                for (let e = 0; e < t.length; e++) {
                    const [, n] = t[e];
                    if (e < t.length - 1) {
                        const [a] = t[e + 1];
                        if (n >= a) return st;
                    }
                }
            }
            const mt = Object.freeze({ Monday: "Monday", Tuesday: "Tuesday", Wednesday: "Wednesday", Thursday: "Thursday", Friday: "Friday", Saturday: "Saturday", Sunday: "Sunday" }),
                dt = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
            function pt(e) {
                return dt.reduce((t, n) => {
                    const a = ((t) => e?.find((e) => e.weekday === t)?.slots || [])(n),
                        o = a.length > 0;
                    return (t[n] = { enabled: o, slots: a, weekday: n }), t;
                }, {});
            }
            const bt = "about_module_timezone_settings",
                _t = C().f9f911f4,
                ft = C().c02e7e3c;
            function gt(e) {
                const t = (0, v.z)(),
                    [a, c] = o.useState(""),
                    [i, l] = o.useState(null),
                    s = o.useMemo(() => (i ? i.filter((e) => e.toLowerCase().includes(a)) : null), [i, a]);
                function m(n) {
                    return t.scribe({ page: bt, element: "row", action: "click" }), () => e.onChange(n);
                }
                return (
                    (0, E.q)(() => {
                        t.scribe({ page: bt, component: "list", action: "impression" }),
                            n
                                .e("bundle.TimezoneSelector.timezones")
                                .then(n.bind(n, 677301))
                                .then(({ timezoneNames: e }) => l(e));
                    }),
                    o.createElement(
                        r.Z,
                        { style: ht.container },
                        o.createElement(ye.Z, {
                            Icon: ve.default,
                            onChange: function (e) {
                                c(e.target.value.toLowerCase());
                            },
                            placeholder: _t,
                            value: a,
                        }),
                        o.createElement(r.Z, null, s ? s.map((e) => o.createElement(f.Z, { align: "left", color: "primary", key: e, label: e, onPress: m(e) })) : o.createElement(u.J, { "aria-label": ft, loadingMessage: ft })),
                    )
                );
            }
            const ht = g.default.create((e) => ({ container: { paddingBottom: e.spaces.space64, paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
            var Ct = n(564619),
                Et = n(837020),
                yt = n(184605);
            const vt = "about_module_hours_settings",
                St = C().d21a4252,
                kt = C().ac6ce1c0,
                Tt = C().c647aac8,
                Zt = C().e41a0dc2,
                Pt = o.createElement(Et.default, null);
            function Ot(e) {
                const { enabled: t, label: n, slots: a, weekday: c } = e,
                    i = a.length < 5,
                    l = (0, v.z)(),
                    u = o.useMemo(() => ut(a), [a]);
                function m(t, n) {
                    return ({ hour: o, minute: i }) => {
                        if (!(0, yt.Z)(o) || !(0, yt.Z)(i)) return;
                        const r = a.map((e) => (e !== t ? e : n ? { open: { hour: o, minute: i }, close: e.close } : { close: { hour: o, minute: i }, open: e.open })),
                            s = n ? "from" : "to";
                        l.scribe({ page: vt, section: "custom_hours", element: s, action: "click" }), e.onSlotsChange(c, r);
                    };
                }
                return o.createElement(
                    r.Z,
                    null,
                    o.createElement(it.Z, { spacing: "space2" }),
                    o.createElement(d.Z, {
                        checked: t,
                        helpText: t ? void 0 : Zt,
                        label: n,
                        name: c,
                        onChange: function () {
                            e.onWeekdaySwitch(c, !t);
                        },
                        type: "switch",
                    }),
                    t &&
                        o.createElement(
                            o.Fragment,
                            null,
                            u ? o.createElement(b.ZP, { color: "red500", size: "subtext1", style: Lt.errorText }, u) : void 0,
                            o.createElement(
                                r.Z,
                                { style: Lt.timeSlotsContainer },
                                a.map((t, n) => {
                                    return o.createElement(
                                        o.Fragment,
                                        { key: n },
                                        o.createElement(it.Z, { spacing: "space2" }),
                                        o.createElement(
                                            r.Z,
                                            { style: Lt.timeInputsContainer },
                                            o.createElement(Ct.Z, { hour: t.open.hour, label: kt, minute: t.open.minute, onChange: m(t, !0) }),
                                            n > 0 &&
                                                o.createElement(s.ZP, {
                                                    icon: Pt,
                                                    onPress:
                                                        ((i = t),
                                                        () => {
                                                            l.scribe({ page: vt, section: "custom_hours", element: "hours_deleted", action: "click" }),
                                                                e.onSlotsChange(
                                                                    c,
                                                                    a.filter((e) => e !== i),
                                                                );
                                                        }),
                                                    type: "primaryText",
                                                }),
                                        ),
                                        o.createElement(r.Z, { style: Lt.timeInputsContainer }, o.createElement(Ct.Z, { hour: t.close.hour, label: Tt, minute: t.close.minute, onChange: m(t, !1) })),
                                    );
                                    var i;
                                }),
                                i && o.createElement(it.Z, { spacing: "space2" }),
                            ),
                            i &&
                                o.createElement(f.Z, {
                                    align: "left",
                                    color: "primary",
                                    label: St,
                                    onPress: function () {
                                        l.scribe({ page: vt, section: "custom_hours", element: "add_more_hours", action: "click" }), e.onSlotsChange(c, [...a, { open: { hour: 9, minute: 0 }, close: { hour: 17, minute: 0 } }]);
                                    },
                                }),
                        ),
                );
            }
            const Lt = g.default.create((e) => ({ timeSlotsContainer: { marginStart: e.spaces.space16 }, timeInputsContainer: { alignItems: "center", display: "grid", gridGap: e.spaces.space12, gridTemplateColumns: `1fr ${e.spaces.space48}`, marginBottom: e.spaces.space12 }, errorText: { marginStart: e.spaces.space16, marginBottom: e.spaces.space12 } })),
                wt = "about_module_hours_settings",
                Mt = { [S.openTimesTypes.NO_HOURS]: "no_hours", [S.openTimesTypes.ALWAYS_OPEN]: "always_open", [S.openTimesTypes.REGULAR_HOURS]: "custom_hours" },
                Bt = C().ga71fbf4,
                Rt = C().b772cd66,
                At = C().ca2ba204,
                It = C().fddf24b4,
                Nt = [
                    { label: C().b5348efc, helpText: C().d7b7dbca, value: S.openTimesTypes.NO_HOURS },
                    { label: C().db285564, helpText: C().a460e770, value: S.openTimesTypes.ALWAYS_OPEN },
                    { label: C().g7993eee, helpText: C().ddc88bf0, value: S.openTimesTypes.REGULAR_HOURS },
                ],
                Ut = [
                    { weekday: mt.Monday, label: C().e9cf3af8 },
                    { weekday: mt.Tuesday, label: C().d5868a7e },
                    { weekday: mt.Wednesday, label: C().b5dfdb46 },
                    { weekday: mt.Thursday, label: C().ab8095a2 },
                    { weekday: mt.Friday, label: C().e298e6f2 },
                    { weekday: mt.Saturday, label: C().ef519654 },
                    { weekday: mt.Sunday, label: C().e9f55db8 },
                ];
            var zt = n(521219);
            const xt = "about_module_website_settings",
                Ht = C().d9d293b8,
                Gt = C().b926e64a,
                Dt = C().b772cd66,
                Ft = C().f91751f8;
            var Wt = n(88307),
                Yt = n(449479);
            const Vt = Object.freeze({ ADDRESS: "address", EMAIL: "email", OPEN_TIMES: "open_times", WEBSITE: "website", PHONE: "phone" }),
                Kt = Object.freeze({ COUNTRY_CODE: "country_code", PHONE_NUMBER: "number" });
            var qt = n(466818);
            const jt = {
                    AC: "247",
                    AD: "376",
                    AE: "971",
                    AF: "93",
                    AG: "1",
                    AI: "1",
                    AL: "355",
                    AM: "374",
                    AO: "244",
                    AR: "54",
                    AS: "1",
                    AT: "43",
                    AU: "61",
                    AW: "297",
                    AX: "358",
                    AZ: "994",
                    BA: "387",
                    BB: "1",
                    BD: "880",
                    BE: "32",
                    BF: "226",
                    BG: "359",
                    BH: "973",
                    BI: "257",
                    BJ: "229",
                    BL: "590",
                    BM: "1",
                    BN: "673",
                    BO: "591",
                    BQ: "599",
                    BR: "55",
                    BS: "1",
                    BT: "975",
                    BW: "267",
                    BY: "375",
                    BZ: "501",
                    CA: "1",
                    CC: "61",
                    CD: "243",
                    CF: "236",
                    CG: "242",
                    CH: "41",
                    CI: "225",
                    CK: "682",
                    CL: "56",
                    CM: "237",
                    CN: "86",
                    CO: "57",
                    CR: "506",
                    CU: "53",
                    CV: "238",
                    CW: "599",
                    CX: "61",
                    CY: "357",
                    CZ: "420",
                    DE: "49",
                    DJ: "253",
                    DK: "45",
                    DM: "1",
                    DO: "1",
                    DZ: "213",
                    EC: "593",
                    EE: "372",
                    EG: "20",
                    EH: "212",
                    ER: "291",
                    ES: "34",
                    ET: "251",
                    FI: "358",
                    FJ: "679",
                    FK: "500",
                    FM: "691",
                    FO: "298",
                    FR: "33",
                    GA: "241",
                    GB: "44",
                    GD: "1",
                    GE: "995",
                    GF: "594",
                    GG: "44",
                    GH: "233",
                    GI: "350",
                    GL: "299",
                    GM: "220",
                    GN: "224",
                    GP: "590",
                    GQ: "240",
                    GR: "30",
                    GT: "502",
                    GU: "1",
                    GW: "245",
                    GY: "592",
                    HK: "852",
                    HN: "504",
                    HR: "385",
                    HT: "509",
                    HU: "36",
                    ID: "62",
                    IE: "353",
                    IL: "972",
                    IM: "44",
                    IN: "91",
                    IO: "246",
                    IQ: "964",
                    IR: "98",
                    IS: "354",
                    IT: "39",
                    JE: "44",
                    JM: "1",
                    JO: "962",
                    JP: "81",
                    KE: "254",
                    KG: "996",
                    KH: "855",
                    KI: "686",
                    KM: "269",
                    KN: "1",
                    KP: "850",
                    KR: "82",
                    KW: "965",
                    KY: "1",
                    KZ: "7",
                    LA: "856",
                    LB: "961",
                    LC: "1",
                    LI: "423",
                    LK: "94",
                    LR: "231",
                    LS: "266",
                    LT: "370",
                    LU: "352",
                    LV: "371",
                    LY: "218",
                    MA: "212",
                    MC: "377",
                    MD: "373",
                    ME: "382",
                    MF: "590",
                    MG: "261",
                    MH: "692",
                    MK: "389",
                    ML: "223",
                    MM: "95",
                    MN: "976",
                    MO: "853",
                    MP: "1",
                    MQ: "596",
                    MR: "222",
                    MS: "1",
                    MT: "356",
                    MU: "230",
                    MV: "960",
                    MW: "265",
                    MX: "52",
                    MY: "60",
                    MZ: "258",
                    NA: "264",
                    NC: "687",
                    NE: "227",
                    NF: "672",
                    NG: "234",
                    NI: "505",
                    NL: "31",
                    NO: "47",
                    NP: "977",
                    NR: "674",
                    NU: "683",
                    NZ: "64",
                    OM: "968",
                    PA: "507",
                    PE: "51",
                    PF: "689",
                    PG: "675",
                    PH: "63",
                    PK: "92",
                    PL: "48",
                    PM: "508",
                    PR: "1",
                    PS: "970",
                    PT: "351",
                    PW: "680",
                    PY: "595",
                    QA: "974",
                    RE: "262",
                    RO: "40",
                    RS: "381",
                    RU: "7",
                    RW: "250",
                    SA: "966",
                    SB: "677",
                    SC: "248",
                    SD: "249",
                    SE: "46",
                    SG: "65",
                    SH: "290",
                    SI: "386",
                    SJ: "47",
                    SK: "421",
                    SL: "232",
                    SM: "378",
                    SN: "221",
                    SO: "252",
                    SR: "597",
                    SS: "211",
                    ST: "239",
                    SV: "503",
                    SX: "1",
                    SY: "963",
                    SZ: "268",
                    TA: "290",
                    TC: "1",
                    TD: "235",
                    TG: "228",
                    TH: "66",
                    TJ: "992",
                    TK: "690",
                    TL: "670",
                    TM: "993",
                    TN: "216",
                    TO: "676",
                    TR: "90",
                    TT: "1",
                    TV: "688",
                    TW: "886",
                    TZ: "255",
                    UA: "380",
                    UG: "256",
                    US: "1",
                    UY: "598",
                    UZ: "998",
                    VA: "379",
                    VC: "1",
                    VE: "58",
                    VG: "1",
                    VI: "1",
                    VN: "84",
                    VU: "678",
                    WF: "681",
                    WS: "685",
                    YE: "967",
                    YT: "262",
                    ZA: "27",
                    ZM: "260",
                    ZW: "263",
                },
                $t = C().b772cd66,
                Jt = C().gf8388fe,
                Qt = C().f7ff19ec;
            function Xt(e) {
                const { onCancel: t, onChange: n } = e,
                    [a, c] = o.useState(e.countryISOCode),
                    i = (0, L.I0)(),
                    l = (0, L.v9)(pe.Lf),
                    u = (0, L.v9)(be.VT),
                    m = o.useMemo(() => {
                        if (!l) return [];
                        const e = Object.entries(l)
                            .map(([e, t]) => [jt[e], e, String(t)])
                            .filter(([e]) => !!e)
                            .map(([e, t, n]) => ({ label: `${n} (+${e})`, value: t }));
                        return Ze(e, u);
                    }, [l, u]);
                function d() {
                    n(a, `+${jt[a]}`);
                }
                o.useEffect(() => {
                    i((0, pe.Po)(u));
                }, [u, i]);
                return o.createElement(
                    k.Z,
                    { onBackClick: t, rightControl: o.createElement(s.ZP, { onPress: d }, $t), title: Jt },
                    o.createElement(
                        r.Z,
                        { style: en.container },
                        o.createElement(qt.ZP, {
                            label: Qt,
                            onChange: function (e) {
                                c(e);
                            },
                            options: m,
                            value: a,
                        }),
                    ),
                );
            }
            const en = g.default.create((e) => ({ container: { margin: e.spaces.space16 } })),
                tn = C().bb7f177a;
            const nn = "about_module_phone_input_settings",
                an = C().b772cd66,
                on = C().c7d3629a,
                cn = C().ce37ea44;
            function rn(e) {
                const { onCancel: t, onChange: n, phoneNumber: a } = e,
                    c = (0, v.z)(),
                    [i, r] = o.useState(a),
                    l = o.useMemo(
                        () =>
                            "" === i
                                ? void 0
                                : (function (e) {
                                      if (!/^[0-9]{4,15}(;[0-9]{1,10})?$/.test(e)) return tn;
                                  })(i),
                        [i],
                    );
                function u() {
                    c.scribe({ page: nn, element: "done", action: "click" }), l || (n(i), t());
                }
                (0, E.q)(() => {
                    c.scribe({ page: nn, component: "text_field", action: "impression" });
                });
                return o.createElement(
                    k.Z,
                    { onBackClick: t, rightControl: o.createElement(s.ZP, { disabled: !!l, onPress: u }, an), title: on },
                    o.createElement(_e.Z, {
                        autoFocus: !0,
                        errorText: l,
                        inputMode: "tel",
                        invalid: !!l,
                        label: cn,
                        maxLength: 26,
                        name: Kt.PHONE_NUMBER,
                        onChange: function (e) {
                            r(e.target.value);
                        },
                        onSubmitEditing: u,
                        value: i,
                    }),
                );
            }
            const ln = "about_module_phone_settings",
                sn = "/settings/professional_profile/profile_spotlight/location",
                un = Object.freeze({ title: C().f70cd5ee, doneButtonLabel: C().b772cd66, reachOptionCall: C().i019c8b6, reachOptionSms: C().eabc6906, reachOptionBoth: C().h24d868c, countryCodeOptional: C().fa64f1fc, areaCodeLabel: C().gf8388fe, phoneNumberOptional: C().ce37ea44, phoneNumberLabel: C().c7d3629a, reachMessage: C().ce48a958, reachMessageHightlight: C().b97705ce }),
                mn = Object.freeze({ CALL: "call", SMS: "text", BOTH: "call_and_text" }),
                dn = [
                    { value: mn.CALL, label: un.reachOptionCall },
                    { value: mn.SMS, label: un.reachOptionSms },
                    { value: mn.BOTH, label: un.reachOptionBoth },
                ];
            const pn = g.default.create((e) => ({ reachOptionContainer: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                bn = "previewContainer",
                _n = "about_module_main_settings",
                fn = C().jaaa8984,
                gn = { clearAll: C().e047b8fa, save: C().i2209530, done: C().b772cd66 },
                hn = { cancelButtonLabel: C().a9b5e3aa, confirmButtonLabel: C().f0977f52, headline: C().ie85a7a8, text: C().i4112750 },
                Cn = { [S.openTimesTypes.NO_HOURS]: C().b5348efc, [S.openTimesTypes.ALWAYS_OPEN]: C().db285564, [S.openTimesTypes.REGULAR_HOURS]: C().g7993eee },
                En = C().c9ee902a,
                yn = C().j224a074,
                vn = { GOOGLE_MAPS_TERMS_URL: "https://maps.google.com/help/terms_maps.html", GOOGLE_PRIVACY_POLICY_URL: "https://policies.google.com/privacy" },
                Sn = [
                    {
                        key: Vt.WEBSITE,
                        label: C().d9d293b8,
                        placeholder: C().f448cbcc,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.website),
                                c = o.useMemo(() => ("" === n ? void 0 : (0, zt.Z)(n)), [n]);
                            function i() {
                                c || (t.scribe({ page: xt, element: "done", action: "click" }), e.onChange(n));
                            }
                            return (
                                (0, E.q)(() => {
                                    t.scribe({ page: xt, component: "text_field", action: "impression" });
                                }),
                                o.createElement(
                                    k.Z,
                                    { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c, onPress: i }, Dt), title: Ht },
                                    o.createElement(_e.Z, {
                                        autoFocus: !0,
                                        errorText: c,
                                        invalid: !!c,
                                        label: Gt,
                                        maxLength: zt.c,
                                        name: "website",
                                        onChange: function (e) {
                                            a(e.target.value);
                                        },
                                        onSubmitEditing: i,
                                        value: n,
                                    }),
                                    o.createElement(p.Z, { description: Ft }),
                                )
                            );
                        },
                        scribeComponent: "website",
                    },
                    {
                        key: Vt.ADDRESS,
                        label: C().c16c9568,
                        placeholder: C().f4f4dd60,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                n = e.values,
                                [a, c] = o.useState(!1),
                                [i, r] = o.useState(),
                                [l, u] = o.useState(e.values),
                                d = o.useMemo(() => !(0, V.Z)(l, n), [l, n]),
                                b = o.useMemo(() => Je.every((e) => !!l[e].trim()), [l]),
                                f = (0, L.I0)(),
                                g = (0, L.v9)(pe.Lf),
                                h = (0, L.v9)(be.VT);
                            function C() {
                                t.scribe({ page: Ve, element: "done", action: "click" }), e.onChange({ ...l, formatted_address: `${l.address_line1} ${l.city} ${l.administrative_area} ${l.postal_code}` });
                            }
                            function y(e) {
                                return (n) => {
                                    n.preventDefault(), t.scribe({ page: Ve, component: e.scribeComponent, action: "click" }), r(e);
                                };
                            }
                            function T() {
                                t.scribe({ page: Ve, component: "discard_confirmation", element: "cancel", action: "click" }), c(!1);
                            }
                            function Z() {
                                t.scribe({ page: Ve, component: "discard_confirmation", element: "confirm", action: "click" }), e.onCancel();
                            }
                            function P({ key: e, placeholder: t }) {
                                return e === $e.COUNTRY ? g[l.country] || t : l[e] || t;
                            }
                            if (
                                ((0, E.q)(() => {
                                    t.scribe({ page: Ve, action: "impression" }), f((0, pe.Po)(h));
                                }),
                                i)
                            ) {
                                const e = i.Component;
                                return o.createElement(e, {
                                    onCancel: function () {
                                        r(void 0);
                                    },
                                    onChange:
                                        ((O = i.key),
                                        (e) => {
                                            u({ ...l, [O]: e }), r(void 0);
                                        }),
                                    values: l,
                                });
                            }
                            var O;
                            return o.createElement(
                                k.Z,
                                {
                                    onBackClick: function () {
                                        d ? c(!0) : e.onCancel();
                                    },
                                    rightControl: o.createElement(s.ZP, { disabled: !b || !d, onPress: C }, je.done),
                                    title: Ke,
                                },
                                Qe.map((e) => o.createElement(_.Z, { description: P(e), key: e.key, label: e.label, link: "/settings/professional_profile/profile_spotlight/location", onPress: y(e) })),
                                o.createElement(p.Z, { description: qe }),
                                a ? o.createElement(m.Z, { cancelButtonLabel: S.Pl.cancelButtonLabel, confirmButtonLabel: S.Pl.confirmButtonLabel, headline: S.Pl.headline, onCancel: T, onConfirm: Z, text: S.Pl.text, withCancelButton: !0 }) : null,
                            );
                        },
                        scribeComponent: "address",
                    },
                    {
                        key: Vt.OPEN_TIMES,
                        label: C().d073b644,
                        placeholder: C().b5348efc,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                n = e.values.open_times,
                                { direction: a } = (0, ct.Z)(),
                                [c, i] = o.useState(n.open_times_type),
                                [l, u] = o.useState(!1),
                                [d, p] = o.useState(() => pt(n.regular)),
                                [f, g] = o.useState(n.timezone),
                                [h, C] = o.useState(!1),
                                y = o.useMemo(() => f !== n.timezone || c !== n.open_times_type || !(0, V.Z)(d, pt(n.regular)), [d, c, n, f]),
                                T = o.useMemo(() => {
                                    if (c === S.openTimesTypes.REGULAR_HOURS) {
                                        const e = Ut.filter(({ weekday: e }) => d?.[e].enabled);
                                        return 0 !== e.length && e.map(({ weekday: e }) => d[e].slots).every((e) => !ut(e));
                                    }
                                    return !0;
                                }, [c, d]);
                            function Z() {
                                t.scribe({ page: wt, element: "done", action: "click" });
                                const n = { timezone: f, open_times_type: c, regular: Ut.filter(({ weekday: e }) => d?.[e].enabled).map(({ weekday: e }) => ({ weekday: e, slots: d[e].slots })) };
                                e.onChange(n);
                            }
                            function P(e, n) {
                                const a = n ? "enabled" : "disabled";
                                t.scribe({ page: wt, section: "custom_hours", element: "switch", action: a });
                                const o = d[e],
                                    c = mt[e],
                                    i =
                                        0 === o.slots.length && n
                                            ? (function (e) {
                                                  const t = Ut.findIndex((t) => t.weekday === e),
                                                      n = (t > 0 ? t : Ut.length) - 1,
                                                      a = Ut[n].weekday,
                                                      o = d[a];
                                                  return o.enabled ? [...o.slots] : [{ open: { hour: 9, minute: 0 }, close: { hour: 17, minute: 0 } }];
                                              })(c)
                                            : o.slots;
                                p({ ...d, [c]: { ...o, slots: i, enabled: n } });
                            }
                            function O(e, t) {
                                const n = d[e],
                                    a = mt[e];
                                p({ ...d, [a]: { ...n, slots: t } });
                            }
                            function L(e) {
                                e.preventDefault(), t.scribe({ page: wt, section: "custom_hours", component: "timezone", action: "click" }), C(!0);
                            }
                            function w() {
                                t.scribe({ page: wt, component: "discard_confirmation", element: "cancel", action: "click" }), u(!1);
                            }
                            function M() {
                                t.scribe({ page: wt, component: "discard_confirmation", element: "confirm", action: "click" }), e.onCancel();
                            }
                            return (
                                (0, E.q)(() => {
                                    t.scribe({ page: wt, action: "impression" });
                                }),
                                h
                                    ? o.createElement(
                                          k.Z,
                                          {
                                              onBackClick: function () {
                                                  C(!1);
                                              },
                                              title: It,
                                          },
                                          o.createElement(gt, {
                                              onChange: function (e) {
                                                  g(e), C(!1);
                                              },
                                              value: f,
                                          }),
                                      )
                                    : o.createElement(
                                          k.Z,
                                          {
                                              onBackClick: function () {
                                                  y ? u(!0) : e.onCancel();
                                              },
                                              rightControl: o.createElement(s.ZP, { disabled: !T || !y, onPress: Z }, Rt),
                                              title: Bt,
                                          },
                                          o.createElement(lt.Z, {
                                              name: "open_times_type",
                                              onChange: function (e, n) {
                                                  const a = Mt[n];
                                                  t.scribe({ page: wt, component: a, element: "radio_button", action: "click" }), i(n);
                                              },
                                              options: Nt,
                                              value: c,
                                          }),
                                          (function () {
                                              if (c === S.openTimesTypes.REGULAR_HOURS)
                                                  return o.createElement(
                                                      r.Z,
                                                      null,
                                                      o.createElement(it.Z, { spacing: "space2" }),
                                                      o.createElement(rt.Z, { text: At }),
                                                      o.createElement(it.Z, { spacing: "space2" }),
                                                      o.createElement(_.Z, { description: o.createElement(b.ZP, { color: "gray700", dir: a, size: "subtext2" }, f?.replace("_", " ")), label: It, link: "/", onPress: L }),
                                                      Ut.map((e) => [e, d[e.weekday]]).map(([e, t]) => o.createElement(Ot, { enabled: t.enabled, key: e.weekday, label: e.label, onSlotsChange: O, onWeekdaySwitch: P, slots: t.slots, weekday: e.weekday })),
                                                  );
                                          })(),
                                          l ? o.createElement(m.Z, { cancelButtonLabel: S.Pl.cancelButtonLabel, confirmButtonLabel: S.Pl.confirmButtonLabel, headline: S.Pl.headline, onCancel: w, onConfirm: M, text: S.Pl.text, withCancelButton: !0 }) : null,
                                      )
                            );
                        },
                        scribeComponent: "hours",
                    },
                    {
                        key: Vt.EMAIL,
                        label: C().a3841918,
                        placeholder: C().f448cbcc,
                        Component: function (e) {
                            const t = (0, v.z)(),
                                [n, a] = o.useState(e.values.email),
                                c = o.useMemo(() => ("" === n ? void 0 : (0, Xe.Z)(n)), [n]);
                            function i() {
                                c || (t.scribe({ page: et, element: "done", action: "click" }), e.onChange(n));
                            }
                            return (
                                (0, E.q)(() => {
                                    t.scribe({ page: et, component: "text_field", action: "impression" });
                                }),
                                o.createElement(
                                    k.Z,
                                    { onBackClick: e.onCancel, rightControl: o.createElement(s.ZP, { disabled: !!c, onPress: i }, at), title: tt },
                                    o.createElement(_e.Z, {
                                        autoFocus: !0,
                                        errorText: c,
                                        invalid: !!c,
                                        label: nt,
                                        maxLength: Xe.b,
                                        name: "email",
                                        onChange: function (e) {
                                            a(e.target.value);
                                        },
                                        onSubmitEditing: i,
                                        value: n,
                                    }),
                                    o.createElement(p.Z, { description: ot }),
                                )
                            );
                        },
                        scribeComponent: "email",
                    },
                    {
                        key: Vt.PHONE,
                        label: C().f70cd5ee,
                        placeholder: C().f448cbcc,
                        Component: function (e) {
                            const { values: t } = e,
                                n = (0, L.I0)(),
                                a = (0, v.z)(),
                                [c, i] = o.useState(!1),
                                [l, u] = o.useState(t.number),
                                [d, b] = o.useState(t.country_code),
                                [f, g] = o.useState(t.country_iso_code),
                                [h, C] = o.useState(M),
                                [y, T] = o.useState(null),
                                Z = (0, L.v9)(pe.Lf),
                                P = (0, L.v9)(be.VT),
                                O = l !== t.number || d !== t.country_code || f !== t.country_iso_code || h !== M(),
                                w = l.includes(";");
                            function M() {
                                return !t.number || (t.enable_call && t.enable_sms) ? mn.BOTH : t.enable_call ? mn.CALL : t.enable_sms ? mn.SMS : mn.BOTH;
                            }
                            function B() {
                                a.scribe({ page: ln, element: "done", action: "click" }), e.onChange({ country_code: d, country_iso_code: f, enable_sms: R(), enable_call: A(), number: l });
                            }
                            function R() {
                                return !(!l || w) && [mn.BOTH, mn.SMS].includes(h);
                            }
                            function A() {
                                return !!l && (w || [mn.BOTH, mn.CALL].includes(h));
                            }
                            function I() {
                                T(null);
                            }
                            function N() {
                                a.scribe({ page: ln, component: "discard_confirmation", element: "cancel", action: "click" }), i(!1);
                            }
                            function U() {
                                a.scribe({ page: ln, component: "discard_confirmation", element: "confirm", action: "click" }), e.onCancel();
                            }
                            return (
                                (0, E.q)(() => {
                                    a.scribe({ page: ln, action: "impression" });
                                }),
                                o.useEffect(() => {
                                    n((0, pe.Po)(P));
                                }, [n, Z, P]),
                                y === Kt.PHONE_NUMBER
                                    ? o.createElement(rn, { onCancel: I, onChange: u, phoneNumber: l })
                                    : y === Kt.COUNTRY_CODE
                                      ? o.createElement(Xt, {
                                            countryISOCode: f,
                                            onCancel: I,
                                            onChange: function (e, t) {
                                                g(e), b(t), T(null);
                                            },
                                        })
                                      : o.createElement(
                                            k.Z,
                                            {
                                                onBackClick: function () {
                                                    O ? i(!0) : e.onCancel();
                                                },
                                                rightControl: o.createElement(s.ZP, { onPress: B }, un.doneButtonLabel),
                                                title: un.title,
                                            },
                                            o.createElement(_.Z, {
                                                description: d && f ? `${Z[f]} (${d})` : un.countryCodeOptional,
                                                label: un.areaCodeLabel,
                                                link: sn,
                                                onPress: function () {
                                                    a.scribe({ page: ln, component: "country_code", action: "click" }), T(Kt.COUNTRY_CODE);
                                                },
                                            }),
                                            o.createElement(_.Z, {
                                                description: l || un.phoneNumberOptional,
                                                label: un.phoneNumberLabel,
                                                link: sn,
                                                onPress: function () {
                                                    a.scribe({ page: ln, component: "phone_number", action: "click" }), T(Kt.PHONE_NUMBER);
                                                },
                                            }),
                                            d && l
                                                ? o.createElement(
                                                      o.Fragment,
                                                      null,
                                                      o.createElement(it.Z, { spacing: "space2" }),
                                                      o.createElement(Wt.Z, { label: un.reachMessage, withBottomBorder: !1 }),
                                                      o.createElement(
                                                          r.Z,
                                                          { style: pn.reachOptionContainer },
                                                          o.createElement(Yt.Z, {
                                                              disabled: w,
                                                              name: "reach-options",
                                                              onChange: function (e, t) {
                                                                  a.scribe({ page: ln, component: t, element: "radio_button", action: "click" }), C(t);
                                                              },
                                                              options: dn,
                                                              value: w ? mn.CALL : h,
                                                          }),
                                                      ),
                                                      o.createElement(p.Z, { description: un.reachMessageHightlight }),
                                                  )
                                                : null,
                                            c ? o.createElement(m.Z, { cancelButtonLabel: S.Pl.cancelButtonLabel, confirmButtonLabel: S.Pl.confirmButtonLabel, headline: S.Pl.headline, onCancel: N, onConfirm: U, text: S.Pl.text, withCancelButton: !0 }) : null,
                                        )
                            );
                        },
                        scribeComponent: "phone",
                    },
                ];
            function kn(e) {
                const { previewRef: t, profileModulesRef: n, viewerUserId: a } = e,
                    { featureSwitches: c } = o.useContext(y.rC),
                    i = (0, l.useHistory)(),
                    u = (0, v.z)(),
                    [g, h] = (function (e) {
                        const t = W()(Y, e),
                            n = t.configurable_modules_v1?.find((e) => "About" === e.module_type)?.module_data;
                        return [n?.profile_module, n?.module_id];
                    })(n),
                    T = (function (e) {
                        const { config: t, data: n } = e || {},
                            a = o.useMemo(() => ({ formatted_address: n?.address?.formatted_address ?? "", address_line1: n?.address?.address_line1 ?? "", city: n?.address?.city ?? "", administrative_area: n?.address?.administrative_area ?? "", postal_code: n?.address?.postal_code ?? "", country: n?.address?.country ?? "US", email: n?.contact?.email?.email_address ?? "", website: n?.website?.display ?? "", country_code: n?.contact?.phone?.country_code ?? "+1", country_iso_code: n?.contact?.phone?.country_iso_code ?? "US", number: n?.contact?.phone?.number ?? "", enable_sms: t?.enable_sms ?? !0, enable_call: t?.enable_call ?? !0, enable_location_map: t?.enable_location_map ?? !0, open_times: I(n) }), [n, t]),
                            [c, i] = o.useState(a),
                            r = o.useMemo(() => !(0, V.Z)(c, a), [c, a]);
                        return {
                            hasAllRequiredValues: o.useMemo(() => K.every((e) => !!c[e]), [c]),
                            isDirty: r,
                            openTimesIsDirty: o.useMemo(() => !(0, V.Z)(c.open_times, a.open_times), [c.open_times, a.open_times]),
                            updateAddress: function (e) {
                                i({ ...c, ...e });
                            },
                            updateEmail: function (e) {
                                i({ ...c, email: e });
                            },
                            updateWebsite: function (e) {
                                i({ ...c, website: e });
                            },
                            updatePhoneNumber: function (e) {
                                i({ ...c, ...e });
                            },
                            updateOpenTimes: function (e) {
                                i({ ...c, open_times: e });
                            },
                            updateDisplayToggle: function (e) {
                                i({ ...c, enable_location_map: e });
                            },
                            values: c,
                        };
                    })(g),
                    [Z, B] = (function () {
                        const e = (0, L.I0)(),
                            t = (0, v.z)(),
                            n = (0, O.po)(),
                            [a, c] = P()(z);
                        return [
                            o.useCallback(
                                (o) => {
                                    const c = M(o),
                                        i = { enable_call: !!o.number && o.enable_call, enable_sms: !!o.number && o.enable_sms, enable_location_map: o.enable_location_map };
                                    return (
                                        t.scribe({ ...x, action: "attempt" }),
                                        new Promise((o, r) => {
                                            a({
                                                variables: { venueData: c, config: i },
                                                onCompleted: (n) => {
                                                    const a = !n.user_create_about_module_from_venue?.reason,
                                                        c = a ? "success" : "failure";
                                                    a || e((0, w.fz)({ text: n.user_create_about_module_from_venue?.reason || "" })), t.scribe({ ...x, action: c }), o(a);
                                                },
                                                onError: (e) => {
                                                    t.scribe({ ...x, action: "error" }), n(e), r(e);
                                                },
                                            });
                                        })
                                    );
                                },
                                [t, a, n, e],
                            ),
                            c,
                        ];
                    })(),
                    [R, A] = (function () {
                        const e = (0, v.z)(),
                            t = (0, L.I0)(),
                            n = (0, O.po)(),
                            [a, c] = P()(H);
                        return [
                            o.useCallback(
                                (o) => (
                                    e.scribe({ ...G, action: "attempt" }),
                                    new Promise((c, i) => {
                                        a({
                                            variables: { moduleId: o },
                                            onCompleted: (n) => {
                                                const a = !n.user_delete_about_module_and_venue?.code,
                                                    o = a ? "success" : "failure";
                                                a || t((0, w.fz)({ text: n.user_delete_about_module_and_venue?.reason || "" })), e.scribe({ ...G, action: o }), c(a);
                                            },
                                            onError: (t) => {
                                                e.scribe({ ...G, action: "error" }), n(t), i(t);
                                            },
                                        });
                                    })
                                ),
                                [e, a, n, t],
                            ),
                            c,
                        ];
                    })(),
                    [N, U] = (function () {
                        const e = (0, L.I0)(),
                            t = (0, v.z)(),
                            n = (0, O.po)(),
                            [a, c] = P()(te);
                        return [
                            o.useCallback(
                                (o, c) => {
                                    const i = M(c),
                                        r = { enable_call: c.enable_call, enable_sms: c.enable_sms, enable_location_map: c.enable_location_map };
                                    return (
                                        t.scribe({ ...ne, action: "attempt" }),
                                        new Promise((c, l) => {
                                            a({
                                                variables: { moduleId: o, venueData: i, config: r },
                                                onCompleted: (n) => {
                                                    const a = !n.user_update_about_module_from_venue?.reason,
                                                        o = a ? "success" : "failure";
                                                    a || e((0, w.fz)({ text: n.user_update_about_module_from_venue?.reason || "" })), t.scribe({ ...ne, action: o }), c(a);
                                                },
                                                onError: (e) => {
                                                    t.scribe({ ...ne, action: "error" }), n(e), l(e);
                                                },
                                            });
                                        })
                                    );
                                },
                                [t, a, n, e],
                            ),
                            c,
                        ];
                    })(),
                    [D, F] = o.useState(),
                    [q, j] = o.useState(!1),
                    [J, ae] = o.useState(!1),
                    [oe, ce] = (function (e) {
                        const [t, n] = o.useState(e),
                            a = $()(),
                            c = (0, O.po)(),
                            i = (0, v.z)();
                        return [
                            t,
                            (e) => (
                                i.scribe({ ...X, action: "attempt" }),
                                Q()(a, ee, { address: e })
                                    .toPromise()
                                    .then((e) => {
                                        i.scribe({ ...X, action: "success" }), n(e?.generate_g_maps_url_from_address);
                                    })
                                    .catch((e) => {
                                        i.scribe({ ...X, action: "error" }), c(e);
                                    })
                            ),
                        ];
                    })(g?.data?.google_verification_data?.static_map_image_url);
                (0, E.q)(() => {
                    u.scribe({ page: _n, action: "impression" });
                }),
                    o.useEffect(() => {
                        q && u.scribe({ page: _n, component: "clear_data", action: "impression" });
                    }, [u, q]);
                const ie = c.isTrue("responsive_web_location_spotlight_display_map");
                function re(e) {
                    const { scribeComponent: t } = e;
                    return (n) => {
                        n.preventDefault(), u.scribe({ page: _n, component: t, action: "click" }), F(e);
                    };
                }
                function le() {
                    u.scribe({ page: _n, component: "clear_data", element: "cancel", action: "click" }), !A && j(!1);
                }
                function se() {
                    u.scribe({ page: _n, component: "clear_data", element: "confirm", action: "click" }), h ? !A && R(h).then((e) => e && pe()) : pe();
                }
                function ue() {
                    u.scribe({ page: _n, component: "discard_confirmation", element: "cancel", action: "click" }), ae(!1);
                }
                function me() {
                    u.scribe({ page: _n, component: "discard_confirmation", element: "confirm", action: "click" }), pe();
                }
                function pe() {
                    i.goBack({ backLocation: S.V5 });
                }
                function be() {
                    u.scribe({ page: _n, element: "save", action: "click" });
                    (h ? N(h, T.values) : Z(T.values)).then((e) => e && pe());
                }
                function _e(e, t) {
                    u.scribe({ page: _n, element: "display_map", action: "click" }), T.updateDisplayToggle(t), t && ce(T.values.formatted_address);
                }
                function fe(e) {
                    T.updateAddress(e), ce(e.formatted_address);
                }
                function ge({ key: e, placeholder: t }) {
                    const { country_code: n, formatted_address: a, number: o, open_times: c } = T.values;
                    switch (e) {
                        case Vt.ADDRESS:
                            return a || t;
                        case Vt.OPEN_TIMES:
                            return Cn[c.open_times_type];
                        case Vt.PHONE:
                            return n && o ? `${n} ${o}` : t;
                        case Vt.WEBSITE:
                            return T.values.website || t;
                        case Vt.EMAIL:
                            return T.values.email || t;
                        default:
                            return t;
                    }
                }
                if (D) {
                    const e = D.Component;
                    return o.createElement(e, {
                        onCancel: function () {
                            F(void 0);
                        },
                        onChange: (function (e) {
                            const t = { [Vt.ADDRESS]: fe, [Vt.EMAIL]: T.updateEmail, [Vt.PHONE]: T.updatePhoneNumber, [Vt.WEBSITE]: T.updateWebsite, [Vt.OPEN_TIMES]: T.updateOpenTimes }[e.key];
                            return (e) => {
                                t && t(e), F(void 0);
                            };
                        })(D),
                        style: Tn.container,
                        values: T.values,
                    });
                }
                return o.createElement(
                    k.Z,
                    {
                        onBackClick: function () {
                            T.isDirty ? ae(!0) : pe();
                        },
                        rightControl: (function () {
                            const e = !T.isDirty || !T.hasAllRequiredValues || B || U;
                            return o.createElement(s.ZP, { disabled: e, onPress: be }, gn.save);
                        })(),
                        title: fn,
                    },
                    (function () {
                        if (T.hasAllRequiredValues) return o.createElement(r.Z, { style: Tn.previewContainer, testID: bn }, o.createElement(de, { formValues: T.values, mapImageUrl: oe, openTimesHasChanges: T.openTimesIsDirty, previewRef: t, userRestId: a }));
                    })(),
                    Sn.map((e) => o.createElement(_.Z, { description: ge(e), key: e.key, label: e.label, link: S.V5, onPress: re(e) })),
                    (function () {
                        if (ie && T.hasAllRequiredValues) return o.createElement(d.Z, { checked: T.values.enable_location_map, label: En, name: "display_map", onChange: _e, type: "switch" });
                    })(),
                    o.createElement(o.Fragment, null, ie ? o.createElement(p.Z, { description: o.createElement(C().I18NFormatMessage, { $i18n: "eeb5fb11" }, o.createElement(b.ZP, { link: vn.GOOGLE_MAPS_TERMS_URL }, C().i3a38711), o.createElement(b.ZP, { link: vn.GOOGLE_PRIVACY_POLICY_URL }, C().beb66f50)) }) : null, o.createElement(p.Z, { description: yn })),
                    o.createElement(f.Z, {
                        color: "red500",
                        label: gn.clearAll,
                        onPress: function () {
                            u.scribe({ page: _n, component: "clear_data", action: "click" }), j(!0);
                        },
                    }),
                    q ? o.createElement(m.Z, { cancelButtonLabel: hn.cancelButtonLabel, confirmButtonLabel: hn.confirmButtonLabel, headline: hn.headline, onCancel: le, onConfirm: se, text: hn.text, withCancelButton: !0 }) : null,
                    J ? o.createElement(m.Z, { cancelButtonLabel: S.Pl.cancelButtonLabel, confirmButtonLabel: S.Pl.confirmButtonLabel, headline: S.Pl.headline, onCancel: ue, onConfirm: me, text: S.Pl.text, withCancelButton: !0 }) : null,
                );
            }
            kn.Fallback = () => o.createElement(k.Z, { rightControl: o.createElement(s.ZP, { disabled: !0 }, gn.save), title: fn }, o.createElement(u.J, null));
            const Tn = g.default.create((e) => ({ container: { paddingBottom: e.spaces.space24, maxHeight: "80vh", minHeight: "480px" }, previewContainer: { paddingHorizontal: e.spaces.space16 } })),
                Zn = a.Z;
            function Pn({ viewerUserId: e }) {
                const { user: t } = (0, c.p)(Zn, { rest_id: e }, { fetchPolicy: "network-only" }),
                    n = t.result?.editable_profilemodules;
                if (!n) throw new Error("user.result.editable_profilemodules is undefined");
                const a = t.result?.profilemodules;
                if (!a) throw new Error("user.result.profilemodules is undefined");
                return o.createElement(kn, { previewRef: a, profileModulesRef: n, viewerUserId: e });
            }
            const On = (0, i._)(Pn, { context: "LOCATION_SPOTLIGHT", options: { showToast: !0 } }, o.createElement(kn.Fallback, null));
        },
        521219: (e, t, n) => {
            n.d(t, { Z: () => r, c: () => o });
            var a = n(111677);
            const o = 385,
                c = n.n(a)().b679ff6a,
                i = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,385}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
            function r(e) {
                return e.length > o ? c : i.test(e) ? void 0 : c;
            }
        },
        262316: (e, t, n) => {
            n.d(t, { _: () => l });
            var a = n(202784),
                o = n(443781),
                c = n(736063),
                i = n(615027);
            function r(e) {
                const { WrappedComponent: t, errorConfig: n, suspenseFallback: r } = e,
                    { viewerUserId: l } = a.useContext(o.rC);
                return l ? a.createElement(c.H, { errorConfig: n, suspenseFallback: r }, a.createElement(t, { viewerUserId: l })) : a.createElement(i.Z, { to: "/login" });
            }
            function l(e, t, n) {
                return () => a.createElement(r, { WrappedComponent: e, errorConfig: t, suspenseFallback: n });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileLocationSpotlight-345ed09c.d3a65dda.js.map
