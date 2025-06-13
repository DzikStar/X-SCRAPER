"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-c58e35e0"],
    {
        950530: (e, n, t) => {
            t.d(n, { _W: () => sn });
            var o = t(552322),
                r = t(202784),
                a = t(152935),
                i = t(200210),
                l = t(242359),
                s = t(808106),
                d = t(513371),
                u = t(663233),
                c = t(876346),
                f = t(532978),
                v = t(513761),
                p = t(777617),
                h = t(964971),
                m = t(871502),
                y = t(859001),
                b = t(262014),
                x = t(178016),
                w = t(251418),
                _ = t(251461),
                g = t(733936),
                j = t(739219),
                N = t(165890),
                M = t(991809),
                k = t(112385),
                D = t(428332),
                C = t(560307),
                P = t(460556),
                O = t(346365),
                W = t(323568),
                E = t(525668),
                S = t(480415),
                L = t(242268),
                I = t(554698),
                B = function () {
                    return (
                        (B =
                            Object.assign ||
                            function (e) {
                                for (var n, t = 1, o = arguments.length; t < o; t++) for (var r in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                return e;
                            }),
                        B.apply(this, arguments)
                    );
                };
            function T(e, n, t) {
                if (t || 2 === arguments.length) for (var o, r = 0, a = n.length; r < a; r++) (!o && r in n) || (o || (o = Array.prototype.slice.call(n, 0, r)), (o[r] = n[r]));
                return e.concat(o || Array.prototype.slice.call(n));
            }
            function F(e) {
                return "multiple" === e.mode;
            }
            function A(e) {
                return "range" === e.mode;
            }
            function K(e) {
                return "single" === e.mode;
            }
            "function" == typeof SuppressedError && SuppressedError;
            var R = { root: "rdp", multiple_months: "rdp-multiple_months", with_weeknumber: "rdp-with_weeknumber", vhidden: "rdp-vhidden", button_reset: "rdp-button_reset", button: "rdp-button", caption: "rdp-caption", caption_start: "rdp-caption_start", caption_end: "rdp-caption_end", caption_between: "rdp-caption_between", caption_label: "rdp-caption_label", caption_dropdowns: "rdp-caption_dropdowns", dropdown: "rdp-dropdown", dropdown_month: "rdp-dropdown_month", dropdown_year: "rdp-dropdown_year", dropdown_icon: "rdp-dropdown_icon", months: "rdp-months", month: "rdp-month", table: "rdp-table", tbody: "rdp-tbody", tfoot: "rdp-tfoot", head: "rdp-head", head_row: "rdp-head_row", head_cell: "rdp-head_cell", nav: "rdp-nav", nav_button: "rdp-nav_button", nav_button_previous: "rdp-nav_button_previous", nav_button_next: "rdp-nav_button_next", nav_icon: "rdp-nav_icon", row: "rdp-row", weeknumber: "rdp-weeknumber", cell: "rdp-cell", day: "rdp-day", day_today: "rdp-day_today", day_outside: "rdp-day_outside", day_selected: "rdp-day_selected", day_disabled: "rdp-day_disabled", day_hidden: "rdp-day_hidden", day_range_start: "rdp-day_range_start", day_range_end: "rdp-day_range_end", day_range_middle: "rdp-day_range_middle" };
            var z = Object.freeze({
                    __proto__: null,
                    formatCaption: function (e, n) {
                        return (0, a.WU)(e, "LLLL y", n);
                    },
                    formatDay: function (e, n) {
                        return (0, a.WU)(e, "d", n);
                    },
                    formatMonthCaption: function (e, n) {
                        return (0, a.WU)(e, "LLLL", n);
                    },
                    formatWeekNumber: function (e) {
                        return "".concat(e);
                    },
                    formatWeekdayName: function (e, n) {
                        return (0, a.WU)(e, "cccccc", n);
                    },
                    formatYearCaption: function (e, n) {
                        return (0, a.WU)(e, "yyyy", n);
                    },
                }),
                Y = Object.freeze({
                    __proto__: null,
                    labelDay: function (e, n, t) {
                        return (0, a.WU)(e, "do MMMM (EEEE)", t);
                    },
                    labelMonthDropdown: function () {
                        return "Month: ";
                    },
                    labelNext: function () {
                        return "Go to next month";
                    },
                    labelPrevious: function () {
                        return "Go to previous month";
                    },
                    labelWeekNumber: function (e) {
                        return "Week n. ".concat(e);
                    },
                    labelWeekday: function (e, n) {
                        return (0, a.WU)(e, "cccc", n);
                    },
                    labelYearDropdown: function () {
                        return "Year: ";
                    },
                });
            function U(e) {
                var n = e.fromYear,
                    t = e.toYear,
                    o = e.fromMonth,
                    r = e.toMonth,
                    a = e.fromDate,
                    d = e.toDate;
                return o ? (a = (0, i.N)(o)) : n && (a = new Date(n, 0, 1)), r ? (d = (0, l.V)(r)) : t && (d = new Date(t, 11, 31)), { fromDate: a ? (0, s.b)(a) : void 0, toDate: d ? (0, s.b)(d) : void 0 };
            }
            var H = (0, r.createContext)(void 0);
            function q(e) {
                var n,
                    t,
                    r,
                    a,
                    i,
                    l = e.initialProps,
                    s = ((t = R), (r = I._), (a = new Date()), { captionLayout: "buttons", classNames: t, formatters: z, labels: Y, locale: r, modifiersClassNames: {}, modifiers: {}, numberOfMonths: 1, styles: {}, today: a, mode: "default" }),
                    d = U(l),
                    u = d.fromDate,
                    c = d.toDate,
                    f = null !== (n = l.captionLayout) && void 0 !== n ? n : s.captionLayout;
                "buttons" === f || (u && c) || (f = "buttons"), (K(l) || F(l) || A(l)) && (i = l.onSelect);
                var v = B(B(B({}, s), l), { captionLayout: f, classNames: B(B({}, s.classNames), l.classNames), components: B({}, l.components), formatters: B(B({}, s.formatters), l.formatters), fromDate: u, labels: B(B({}, s.labels), l.labels), mode: l.mode || s.mode, modifiers: B(B({}, s.modifiers), l.modifiers), modifiersClassNames: B(B({}, s.modifiersClassNames), l.modifiersClassNames), onSelect: i, styles: B(B({}, s.styles), l.styles), toDate: c });
                return (0, o.jsx)(H.Provider, { value: v, children: e.children });
            }
            function V() {
                var e = (0, r.useContext)(H);
                if (!e) throw new Error("useDayPicker must be used within a DayPickerProvider.");
                return e;
            }
            function Z(e) {
                var n = V(),
                    t = n.locale,
                    r = n.classNames,
                    a = n.styles,
                    i = n.formatters.formatCaption;
                return (0, o.jsx)("div", { className: r.caption_label, style: a.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: i(e.displayMonth, { locale: t }) });
            }
            function G(e) {
                return (0, o.jsx)("svg", B({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: (0, o.jsx)("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
            }
            function J(e) {
                var n,
                    t,
                    r = e.onChange,
                    a = e.value,
                    i = e.children,
                    l = e.caption,
                    s = e.className,
                    d = e.style,
                    u = V(),
                    c = null !== (t = null === (n = u.components) || void 0 === n ? void 0 : n.IconDropdown) && void 0 !== t ? t : G;
                return (0, o.jsxs)("div", { className: s, style: d, children: [(0, o.jsx)("span", { className: u.classNames.vhidden, children: e["aria-label"] }), (0, o.jsx)("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: a, onChange: r, children: i }), (0, o.jsxs)("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [l, (0, o.jsx)(c, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
            }
            function Q(e) {
                var n,
                    t = V(),
                    r = t.fromDate,
                    a = t.toDate,
                    l = t.styles,
                    s = t.locale,
                    c = t.formatters.formatMonthCaption,
                    f = t.classNames,
                    v = t.components,
                    p = t.labels.labelMonthDropdown;
                if (!r) return (0, o.jsx)(o.Fragment, {});
                if (!a) return (0, o.jsx)(o.Fragment, {});
                var h = [];
                if ((0, d.F)(r, a)) for (var m = (0, i.N)(r), y = r.getMonth(); y <= a.getMonth(); y++) h.push((0, u.q)(m, y));
                else for (m = (0, i.N)(new Date()), y = 0; y <= 11; y++) h.push((0, u.q)(m, y));
                var b = null !== (n = null == v ? void 0 : v.Dropdown) && void 0 !== n ? n : J;
                return (0, o.jsx)(b, {
                    name: "months",
                    "aria-label": p(),
                    className: f.dropdown_month,
                    style: l.dropdown_month,
                    onChange: function (n) {
                        var t = Number(n.target.value),
                            o = (0, u.q)((0, i.N)(e.displayMonth), t);
                        e.onChange(o);
                    },
                    value: e.displayMonth.getMonth(),
                    caption: c(e.displayMonth, { locale: s }),
                    children: h.map(function (e) {
                        return (0, o.jsx)("option", { value: e.getMonth(), children: c(e, { locale: s }) }, e.getMonth());
                    }),
                });
            }
            function X(e) {
                var n,
                    t = e.displayMonth,
                    r = V(),
                    a = r.fromDate,
                    l = r.toDate,
                    s = r.locale,
                    d = r.styles,
                    u = r.classNames,
                    v = r.components,
                    p = r.formatters.formatYearCaption,
                    h = r.labels.labelYearDropdown,
                    m = [];
                if (!a) return (0, o.jsx)(o.Fragment, {});
                if (!l) return (0, o.jsx)(o.Fragment, {});
                for (var y = a.getFullYear(), b = l.getFullYear(), x = y; x <= b; x++) m.push((0, c.M)((0, f.e)(new Date()), x));
                var w = null !== (n = null == v ? void 0 : v.Dropdown) && void 0 !== n ? n : J;
                return (0, o.jsx)(w, {
                    name: "years",
                    "aria-label": h(),
                    className: u.dropdown_year,
                    style: d.dropdown_year,
                    onChange: function (n) {
                        var o = (0, c.M)((0, i.N)(t), Number(n.target.value));
                        e.onChange(o);
                    },
                    value: t.getFullYear(),
                    caption: p(t, { locale: s }),
                    children: m.map(function (e) {
                        return (0, o.jsx)("option", { value: e.getFullYear(), children: p(e, { locale: s }) }, e.getFullYear());
                    }),
                });
            }
            function $() {
                var e = V(),
                    n = (function (e) {
                        var n = e.month,
                            t = e.defaultMonth,
                            o = e.today,
                            r = n || t || o || new Date(),
                            a = e.toDate,
                            l = e.fromDate,
                            s = e.numberOfMonths,
                            d = void 0 === s ? 1 : s;
                        if (a && (0, v.T)(a, r) < 0) {
                            var u = -1 * (d - 1);
                            r = (0, p.z)(a, u);
                        }
                        return l && (0, v.T)(r, l) < 0 && (r = l), (0, i.N)(r);
                    })(e),
                    t = (function (e, n) {
                        var t = (0, r.useState)(e),
                            o = t[0];
                        return [void 0 === n ? o : n, t[1]];
                    })(n, e.month),
                    o = t[0],
                    a = t[1];
                return [
                    o,
                    function (n) {
                        var t;
                        if (!e.disableNavigation) {
                            var o = (0, i.N)(n);
                            a(o), null === (t = e.onMonthChange) || void 0 === t || t.call(e, o);
                        }
                    },
                ];
            }
            var ee = (0, r.createContext)(void 0);
            function ne(e) {
                var n = V(),
                    t = $(),
                    r = t[0],
                    a = t[1],
                    l = (function (e, n) {
                        for (var t = n.reverseMonths, o = n.numberOfMonths, r = (0, i.N)(e), a = (0, i.N)((0, p.z)(r, o)), l = (0, v.T)(a, r), s = [], d = 0; d < l; d++) {
                            var u = (0, p.z)(r, d);
                            s.push(u);
                        }
                        return t && (s = s.reverse()), s;
                    })(r, n),
                    s = (function (e, n) {
                        if (!n.disableNavigation) {
                            var t = n.toDate,
                                o = n.pagedNavigation,
                                r = n.numberOfMonths,
                                a = void 0 === r ? 1 : r,
                                l = o ? a : 1,
                                s = (0, i.N)(e);
                            if (!t) return (0, p.z)(s, l);
                            if (!((0, v.T)(t, e) < a)) return (0, p.z)(s, l);
                        }
                    })(r, n),
                    d = (function (e, n) {
                        if (!n.disableNavigation) {
                            var t = n.fromDate,
                                o = n.pagedNavigation,
                                r = n.numberOfMonths,
                                a = o ? (void 0 === r ? 1 : r) : 1,
                                l = (0, i.N)(e);
                            if (!t) return (0, p.z)(l, -a);
                            if (!((0, v.T)(l, t) <= 0)) return (0, p.z)(l, -a);
                        }
                    })(r, n),
                    u = function (e) {
                        return l.some(function (n) {
                            return (0, h.x)(e, n);
                        });
                    },
                    c = {
                        currentMonth: r,
                        displayMonths: l,
                        goToMonth: a,
                        goToDate: function (e, t) {
                            u(e) || (t && (0, m.R)(e, t) ? a((0, p.z)(e, 1 + -1 * n.numberOfMonths)) : a(e));
                        },
                        previousMonth: d,
                        nextMonth: s,
                        isDateDisplayed: u,
                    };
                return (0, o.jsx)(ee.Provider, { value: c, children: e.children });
            }
            function te() {
                var e = (0, r.useContext)(ee);
                if (!e) throw new Error("useNavigation must be used within a NavigationProvider");
                return e;
            }
            function oe(e) {
                var n,
                    t = V(),
                    r = t.classNames,
                    a = t.styles,
                    i = t.components,
                    l = te().goToMonth,
                    s = function (n) {
                        l((0, p.z)(n, e.displayIndex ? -e.displayIndex : 0));
                    },
                    d = null !== (n = null == i ? void 0 : i.CaptionLabel) && void 0 !== n ? n : Z,
                    u = (0, o.jsx)(d, { id: e.id, displayMonth: e.displayMonth });
                return (0, o.jsxs)("div", { className: r.caption_dropdowns, style: a.caption_dropdowns, children: [(0, o.jsx)("div", { className: r.vhidden, children: u }), (0, o.jsx)(Q, { onChange: s, displayMonth: e.displayMonth }), (0, o.jsx)(X, { onChange: s, displayMonth: e.displayMonth })] });
            }
            function re(e) {
                return (0, o.jsx)("svg", B({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: (0, o.jsx)("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
            }
            function ae(e) {
                return (0, o.jsx)("svg", B({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: (0, o.jsx)("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
            }
            var ie = (0, r.forwardRef)(function (e, n) {
                var t = V(),
                    r = t.classNames,
                    a = t.styles,
                    i = [r.button_reset, r.button];
                e.className && i.push(e.className);
                var l = i.join(" "),
                    s = B(B({}, a.button_reset), a.button);
                return e.style && Object.assign(s, e.style), (0, o.jsx)("button", B({}, e, { ref: n, type: "button", className: l, style: s }));
            });
            function le(e) {
                var n,
                    t,
                    r = V(),
                    a = r.dir,
                    i = r.locale,
                    l = r.classNames,
                    s = r.styles,
                    d = r.labels,
                    u = d.labelPrevious,
                    c = d.labelNext,
                    f = r.components;
                if (!e.nextMonth && !e.previousMonth) return (0, o.jsx)(o.Fragment, {});
                var v = u(e.previousMonth, { locale: i }),
                    p = [l.nav_button, l.nav_button_previous].join(" "),
                    h = c(e.nextMonth, { locale: i }),
                    m = [l.nav_button, l.nav_button_next].join(" "),
                    y = null !== (n = null == f ? void 0 : f.IconRight) && void 0 !== n ? n : ae,
                    b = null !== (t = null == f ? void 0 : f.IconLeft) && void 0 !== t ? t : re;
                return (0, o.jsxs)("div", { className: l.nav, style: s.nav, children: [!e.hidePrevious && (0, o.jsx)(ie, { name: "previous-month", "aria-label": v, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: "rtl" === a ? (0, o.jsx)(y, { className: l.nav_icon, style: s.nav_icon }) : (0, o.jsx)(b, { className: l.nav_icon, style: s.nav_icon }) }), !e.hideNext && (0, o.jsx)(ie, { name: "next-month", "aria-label": h, className: m, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: "rtl" === a ? (0, o.jsx)(b, { className: l.nav_icon, style: s.nav_icon }) : (0, o.jsx)(y, { className: l.nav_icon, style: s.nav_icon }) })] });
            }
            function se(e) {
                var n = V().numberOfMonths,
                    t = te(),
                    r = t.previousMonth,
                    a = t.nextMonth,
                    i = t.goToMonth,
                    l = t.displayMonths,
                    s = l.findIndex(function (n) {
                        return (0, h.x)(e.displayMonth, n);
                    }),
                    d = 0 === s,
                    u = s === l.length - 1,
                    c = n > 1 && (d || !u),
                    f = n > 1 && (u || !d);
                return (0, o.jsx)(le, {
                    displayMonth: e.displayMonth,
                    hideNext: c,
                    hidePrevious: f,
                    nextMonth: a,
                    previousMonth: r,
                    onPreviousClick: function () {
                        r && i(r);
                    },
                    onNextClick: function () {
                        a && i(a);
                    },
                });
            }
            function de(e) {
                var n,
                    t,
                    r = V(),
                    a = r.classNames,
                    i = r.disableNavigation,
                    l = r.styles,
                    s = r.captionLayout,
                    d = r.components,
                    u = null !== (n = null == d ? void 0 : d.CaptionLabel) && void 0 !== n ? n : Z;
                return (t = i ? (0, o.jsx)(u, { id: e.id, displayMonth: e.displayMonth }) : "dropdown" === s ? (0, o.jsx)(oe, { displayMonth: e.displayMonth, id: e.id }) : "dropdown-buttons" === s ? (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(oe, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), (0, o.jsx)(se, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : (0, o.jsxs)(o.Fragment, { children: [(0, o.jsx)(u, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), (0, o.jsx)(se, { displayMonth: e.displayMonth, id: e.id })] })), (0, o.jsx)("div", { className: a.caption, style: l.caption, children: t });
            }
            function ue(e) {
                var n = V(),
                    t = n.footer,
                    r = n.styles,
                    a = n.classNames.tfoot;
                return t ? (0, o.jsx)("tfoot", { className: a, style: r.tfoot, children: (0, o.jsx)("tr", { children: (0, o.jsx)("td", { colSpan: 8, children: t }) }) }) : (0, o.jsx)(o.Fragment, {});
            }
            function ce() {
                var e = V(),
                    n = e.classNames,
                    t = e.styles,
                    r = e.showWeekNumber,
                    a = e.locale,
                    i = e.weekStartsOn,
                    l = e.ISOWeek,
                    s = e.formatters.formatWeekdayName,
                    d = e.labels.labelWeekday,
                    u = (function (e, n, t) {
                        for (var o = t ? (0, y.T)(new Date()) : (0, b.z)(new Date(), { locale: e, weekStartsOn: n }), r = [], a = 0; a < 7; a++) {
                            var i = (0, x.E)(o, a);
                            r.push(i);
                        }
                        return r;
                    })(a, i, l);
                return (0, o.jsxs)("tr", {
                    style: t.head_row,
                    className: n.head_row,
                    children: [
                        r && (0, o.jsx)("td", { style: t.head_cell, className: n.head_cell }),
                        u.map(function (e, r) {
                            return (0, o.jsx)("th", { scope: "col", className: n.head_cell, style: t.head_cell, "aria-label": d(e, { locale: a }), children: s(e, { locale: a }) }, r);
                        }),
                    ],
                });
            }
            function fe() {
                var e,
                    n = V(),
                    t = n.classNames,
                    r = n.styles,
                    a = n.components,
                    i = null !== (e = null == a ? void 0 : a.HeadRow) && void 0 !== e ? e : ce;
                return (0, o.jsx)("thead", { style: r.head, className: t.head, children: (0, o.jsx)(i, {}) });
            }
            function ve(e) {
                var n = V(),
                    t = n.locale,
                    r = n.formatters.formatDay;
                return (0, o.jsx)(o.Fragment, { children: r(e.date, { locale: t }) });
            }
            var pe = (0, r.createContext)(void 0);
            function he(e) {
                if (!F(e.initialProps)) {
                    var n = { selected: void 0, modifiers: { disabled: [] } };
                    return (0, o.jsx)(pe.Provider, { value: n, children: e.children });
                }
                return (0, o.jsx)(me, { initialProps: e.initialProps, children: e.children });
            }
            function me(e) {
                var n = e.initialProps,
                    t = e.children,
                    r = n.selected,
                    a = n.min,
                    i = n.max,
                    l = { disabled: [] };
                r &&
                    l.disabled.push(function (e) {
                        var n = i && r.length > i - 1,
                            t = r.some(function (n) {
                                return (0, w.K)(n, e);
                            });
                        return Boolean(n && !t);
                    });
                var s = {
                    selected: r,
                    onDayClick: function (e, t, o) {
                        var l, s;
                        if ((null === (l = n.onDayClick) || void 0 === l || l.call(n, e, t, o), !Boolean(t.selected && a && (null == r ? void 0 : r.length) === a)) && !Boolean(!t.selected && i && (null == r ? void 0 : r.length) === i)) {
                            var d = r ? T([], r, !0) : [];
                            if (t.selected) {
                                var u = d.findIndex(function (n) {
                                    return (0, w.K)(e, n);
                                });
                                d.splice(u, 1);
                            } else d.push(e);
                            null === (s = n.onSelect) || void 0 === s || s.call(n, d, e, t, o);
                        }
                    },
                    modifiers: l,
                };
                return (0, o.jsx)(pe.Provider, { value: s, children: t });
            }
            function ye() {
                var e = (0, r.useContext)(pe);
                if (!e) throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
                return e;
            }
            var be,
                xe = (0, r.createContext)(void 0);
            function we(e) {
                if (!A(e.initialProps)) {
                    var n = { selected: void 0, modifiers: { range_start: [], range_end: [], range_middle: [], disabled: [] } };
                    return (0, o.jsx)(xe.Provider, { value: n, children: e.children });
                }
                return (0, o.jsx)(_e, { initialProps: e.initialProps, children: e.children });
            }
            function _e(e) {
                var n = e.initialProps,
                    t = e.children,
                    r = n.selected,
                    a = r || {},
                    i = a.from,
                    l = a.to,
                    s = n.min,
                    d = n.max,
                    u = { range_start: [], range_end: [], range_middle: [], disabled: [] };
                if ((i ? ((u.range_start = [i]), l ? ((u.range_end = [l]), (0, w.K)(i, l) || (u.range_middle = [{ after: i, before: l }])) : (u.range_end = [i])) : l && ((u.range_start = [l]), (u.range_end = [l])), s && (i && !l && u.disabled.push({ after: (0, g.k)(i, s - 1), before: (0, x.E)(i, s - 1) }), i && l && u.disabled.push({ after: i, before: (0, x.E)(i, s - 1) }), !i && l && u.disabled.push({ after: (0, g.k)(l, s - 1), before: (0, x.E)(l, s - 1) })), d)) {
                    if ((i && !l && (u.disabled.push({ before: (0, x.E)(i, 1 - d) }), u.disabled.push({ after: (0, x.E)(i, d - 1) })), i && l)) {
                        var c = d - ((0, j.w)(l, i) + 1);
                        u.disabled.push({ before: (0, g.k)(i, c) }), u.disabled.push({ after: (0, x.E)(l, c) });
                    }
                    !i && l && (u.disabled.push({ before: (0, x.E)(l, 1 - d) }), u.disabled.push({ after: (0, x.E)(l, d - 1) }));
                }
                return (0, o.jsx)(xe.Provider, {
                    value: {
                        selected: r,
                        onDayClick: function (e, t, o) {
                            var a, i;
                            null === (a = n.onDayClick) || void 0 === a || a.call(n, e, t, o);
                            var l = (function (e, n) {
                                var t = n || {},
                                    o = t.from,
                                    r = t.to;
                                if (o && r) {
                                    if ((0, w.K)(r, e) && (0, w.K)(o, e)) return;
                                    if ((0, w.K)(r, e)) return { from: r, to: void 0 };
                                    if ((0, w.K)(o, e)) return;
                                    return (0, _.A)(o, e) ? { from: e, to: r } : { from: o, to: e };
                                }
                                return r ? ((0, _.A)(e, r) ? { from: r, to: e } : { from: e, to: r }) : o ? ((0, m.R)(e, o) ? { from: e, to: o } : { from: o, to: e }) : { from: e, to: void 0 };
                            })(e, r);
                            null === (i = n.onSelect) || void 0 === i || i.call(n, l, e, t, o);
                        },
                        modifiers: u,
                    },
                    children: t,
                });
            }
            function ge() {
                var e = (0, r.useContext)(xe);
                if (!e) throw new Error("useSelectRange must be used within a SelectRangeProvider");
                return e;
            }
            function je(e) {
                return Array.isArray(e) ? T([], e, !0) : void 0 !== e ? [e] : [];
            }
            !(function (e) {
                (e.Outside = "outside"), (e.Disabled = "disabled"), (e.Selected = "selected"), (e.Hidden = "hidden"), (e.Today = "today"), (e.RangeStart = "range_start"), (e.RangeEnd = "range_end"), (e.RangeMiddle = "range_middle");
            })(be || (be = {}));
            var Ne = be.Selected,
                Me = be.Disabled,
                ke = be.Hidden,
                De = be.Today,
                Ce = be.RangeEnd,
                Pe = be.RangeMiddle,
                Oe = be.RangeStart,
                We = be.Outside;
            var Ee = (0, r.createContext)(void 0);
            function Se(e) {
                var n = V(),
                    t = (function (e, n, t) {
                        var o,
                            r = (((o = {})[Ne] = je(e.selected)), (o[Me] = je(e.disabled)), (o[ke] = je(e.hidden)), (o[De] = [e.today]), (o[Ce] = []), (o[Pe] = []), (o[Oe] = []), (o[We] = []), o);
                        return e.fromDate && r[Me].push({ before: e.fromDate }), e.toDate && r[Me].push({ after: e.toDate }), F(e) ? (r[Me] = r[Me].concat(n.modifiers[Me])) : A(e) && ((r[Me] = r[Me].concat(t.modifiers[Me])), (r[Oe] = t.modifiers[Oe]), (r[Pe] = t.modifiers[Pe]), (r[Ce] = t.modifiers[Ce])), r;
                    })(n, ye(), ge()),
                    r = (function (e) {
                        var n = {};
                        return (
                            Object.entries(e).forEach(function (e) {
                                var t = e[0],
                                    o = e[1];
                                n[t] = je(o);
                            }),
                            n
                        );
                    })(n.modifiers),
                    a = B(B({}, t), r);
                return (0, o.jsx)(Ee.Provider, { value: a, children: e.children });
            }
            function Le() {
                var e = (0, r.useContext)(Ee);
                if (!e) throw new Error("useModifiers must be used within a ModifiersProvider");
                return e;
            }
            function Ie(e, n) {
                return n.some(function (n) {
                    if ("boolean" == typeof n) return n;
                    if (((t = n), (0, N.J)(t))) return (0, w.K)(e, n);
                    var t, o, r, a, i, l;
                    if (
                        (function (e) {
                            return Array.isArray(e) && e.every(N.J);
                        })(n)
                    )
                        return n.includes(e);
                    if (
                        (function (e) {
                            return Boolean(e && "object" == typeof e && "from" in e);
                        })(n)
                    )
                        return (o = e), (i = (r = n).from), (l = r.to), i && l ? ((0, j.w)(l, i) < 0 && ((i = (a = [l, i])[0]), (l = a[1])), (0, j.w)(o, i) >= 0 && (0, j.w)(l, o) >= 0) : l ? (0, w.K)(l, o) : !!i && (0, w.K)(i, o);
                    if (
                        (function (e) {
                            return Boolean(e && "object" == typeof e && "dayOfWeek" in e);
                        })(n)
                    )
                        return n.dayOfWeek.includes(e.getDay());
                    if (
                        (function (e) {
                            return Boolean(e && "object" == typeof e && "before" in e && "after" in e);
                        })(n)
                    ) {
                        var s = (0, j.w)(n.before, e) > 0,
                            d = (0, j.w)(n.after, e) < 0;
                        return (0, _.A)(n.before, n.after) ? d && s : s || d;
                    }
                    return (function (e) {
                        return Boolean(e && "object" == typeof e && "after" in e);
                    })(n)
                        ? (0, j.w)(e, n.after) > 0
                        : (function (e) {
                                return Boolean(e && "object" == typeof e && "before" in e);
                            })(n)
                          ? (0, j.w)(n.before, e) > 0
                          : "function" == typeof n && n(e);
                });
            }
            function Be(e, n, t) {
                var o = Object.keys(n).reduce(function (t, o) {
                        var r = n[o];
                        return Ie(e, r) && t.push(o), t;
                    }, []),
                    r = {};
                return (
                    o.forEach(function (e) {
                        return (r[e] = !0);
                    }),
                    t && !(0, h.x)(e, t) && (r.outside = !0),
                    r
                );
            }
            var Te = 365;
            function Fe(e, n) {
                var t = n.moveBy,
                    o = n.direction,
                    r = n.context,
                    a = n.modifiers,
                    i = n.retry,
                    l = void 0 === i ? { count: 0, lastFocused: e } : i,
                    s = r.weekStartsOn,
                    d = r.fromDate,
                    u = r.toDate,
                    c = r.locale,
                    f = {
                        day: x.E,
                        week: M.j,
                        month: p.z,
                        year: k.B,
                        startOfWeek: function (e) {
                            return r.ISOWeek ? (0, y.T)(e) : (0, b.z)(e, { locale: c, weekStartsOn: s });
                        },
                        endOfWeek: function (e) {
                            return r.ISOWeek ? (0, D.g)(e) : (0, C.v)(e, { locale: c, weekStartsOn: s });
                        },
                    }[t](e, "after" === o ? 1 : -1);
                "before" === o && d ? (f = (0, P.F)([d, f])) : "after" === o && u && (f = (0, O.V)([u, f]));
                var v = !0;
                if (a) {
                    var h = Be(f, a);
                    v = !h.disabled && !h.hidden;
                }
                return v ? f : l.count > Te ? l.lastFocused : Fe(f, { moveBy: t, direction: o, context: r, modifiers: a, retry: B(B({}, l), { count: l.count + 1 }) });
            }
            var Ae = (0, r.createContext)(void 0);
            function Ke(e) {
                var n = te(),
                    t = Le(),
                    a = (0, r.useState)(),
                    s = a[0],
                    d = a[1],
                    u = (0, r.useState)(),
                    c = u[0],
                    f = u[1],
                    v = (function (e, n) {
                        for (var t, o, r = (0, i.N)(e[0]), a = (0, l.V)(e[e.length - 1]), s = r; s <= a; ) {
                            var d = Be(s, n);
                            if (d.disabled || d.hidden) s = (0, x.E)(s, 1);
                            else {
                                if (d.selected) return s;
                                d.today && !o && (o = s), t || (t = s), (s = (0, x.E)(s, 1));
                            }
                        }
                        return o || t;
                    })(n.displayMonths, t),
                    p = (null != s ? s : c && n.isDateDisplayed(c)) ? c : v,
                    h = function (e) {
                        d(e);
                    },
                    m = V(),
                    y = function (e, o) {
                        if (s) {
                            var r = Fe(s, { moveBy: e, direction: o, context: m, modifiers: t });
                            (0, w.K)(s, r) || (n.goToDate(r, s), h(r));
                        }
                    },
                    b = {
                        focusedDay: s,
                        focusTarget: p,
                        blur: function () {
                            f(s), d(void 0);
                        },
                        focus: h,
                        focusDayAfter: function () {
                            return y("day", "after");
                        },
                        focusDayBefore: function () {
                            return y("day", "before");
                        },
                        focusWeekAfter: function () {
                            return y("week", "after");
                        },
                        focusWeekBefore: function () {
                            return y("week", "before");
                        },
                        focusMonthBefore: function () {
                            return y("month", "before");
                        },
                        focusMonthAfter: function () {
                            return y("month", "after");
                        },
                        focusYearBefore: function () {
                            return y("year", "before");
                        },
                        focusYearAfter: function () {
                            return y("year", "after");
                        },
                        focusStartOfWeek: function () {
                            return y("startOfWeek", "before");
                        },
                        focusEndOfWeek: function () {
                            return y("endOfWeek", "after");
                        },
                    };
                return (0, o.jsx)(Ae.Provider, { value: b, children: e.children });
            }
            function Re() {
                var e = (0, r.useContext)(Ae);
                if (!e) throw new Error("useFocusContext must be used within a FocusProvider");
                return e;
            }
            var ze = (0, r.createContext)(void 0);
            function Ye(e) {
                if (!K(e.initialProps)) {
                    var n = { selected: void 0 };
                    return (0, o.jsx)(ze.Provider, { value: n, children: e.children });
                }
                return (0, o.jsx)(Ue, { initialProps: e.initialProps, children: e.children });
            }
            function Ue(e) {
                var n = e.initialProps,
                    t = e.children,
                    r = {
                        selected: n.selected,
                        onDayClick: function (e, t, o) {
                            var r, a, i;
                            null === (r = n.onDayClick) || void 0 === r || r.call(n, e, t, o), !t.selected || n.required ? null === (i = n.onSelect) || void 0 === i || i.call(n, e, e, t, o) : null === (a = n.onSelect) || void 0 === a || a.call(n, void 0, e, t, o);
                        },
                    };
                return (0, o.jsx)(ze.Provider, { value: r, children: t });
            }
            function He() {
                var e = (0, r.useContext)(ze);
                if (!e) throw new Error("useSelectSingle must be used within a SelectSingleProvider");
                return e;
            }
            function qe(e, n) {
                var t = [e.classNames.day];
                return (
                    Object.keys(n).forEach(function (n) {
                        var o = e.modifiersClassNames[n];
                        if (o) t.push(o);
                        else if (
                            (function (e) {
                                return Object.values(be).includes(e);
                            })(n)
                        ) {
                            var r = e.classNames["day_".concat(n)];
                            r && t.push(r);
                        }
                    }),
                    t
                );
            }
            function Ve(e, n, t) {
                var a,
                    i,
                    l,
                    s = V(),
                    d = Re(),
                    u = (function (e, n) {
                        return Be(e, Le(), n);
                    })(e, n),
                    c = (function (e, n) {
                        var t = V(),
                            o = He(),
                            r = ye(),
                            a = ge(),
                            i = Re(),
                            l = i.focusDayAfter,
                            s = i.focusDayBefore,
                            d = i.focusWeekAfter,
                            u = i.focusWeekBefore,
                            c = i.blur,
                            f = i.focus,
                            v = i.focusMonthBefore,
                            p = i.focusMonthAfter,
                            h = i.focusYearBefore,
                            m = i.focusYearAfter,
                            y = i.focusStartOfWeek,
                            b = i.focusEndOfWeek,
                            x = {
                                onClick: function (i) {
                                    var l, s, d, u;
                                    K(t) ? null === (l = o.onDayClick) || void 0 === l || l.call(o, e, n, i) : F(t) ? null === (s = r.onDayClick) || void 0 === s || s.call(r, e, n, i) : A(t) ? null === (d = a.onDayClick) || void 0 === d || d.call(a, e, n, i) : null === (u = t.onDayClick) || void 0 === u || u.call(t, e, n, i);
                                },
                                onFocus: function (o) {
                                    var r;
                                    f(e), null === (r = t.onDayFocus) || void 0 === r || r.call(t, e, n, o);
                                },
                                onBlur: function (o) {
                                    var r;
                                    c(), null === (r = t.onDayBlur) || void 0 === r || r.call(t, e, n, o);
                                },
                                onKeyDown: function (o) {
                                    var r;
                                    switch (o.key) {
                                        case "ArrowLeft":
                                            o.preventDefault(), o.stopPropagation(), "rtl" === t.dir ? l() : s();
                                            break;
                                        case "ArrowRight":
                                            o.preventDefault(), o.stopPropagation(), "rtl" === t.dir ? s() : l();
                                            break;
                                        case "ArrowDown":
                                            o.preventDefault(), o.stopPropagation(), d();
                                            break;
                                        case "ArrowUp":
                                            o.preventDefault(), o.stopPropagation(), u();
                                            break;
                                        case "PageUp":
                                            o.preventDefault(), o.stopPropagation(), o.shiftKey ? h() : v();
                                            break;
                                        case "PageDown":
                                            o.preventDefault(), o.stopPropagation(), o.shiftKey ? m() : p();
                                            break;
                                        case "Home":
                                            o.preventDefault(), o.stopPropagation(), y();
                                            break;
                                        case "End":
                                            o.preventDefault(), o.stopPropagation(), b();
                                    }
                                    null === (r = t.onDayKeyDown) || void 0 === r || r.call(t, e, n, o);
                                },
                                onKeyUp: function (o) {
                                    var r;
                                    null === (r = t.onDayKeyUp) || void 0 === r || r.call(t, e, n, o);
                                },
                                onMouseEnter: function (o) {
                                    var r;
                                    null === (r = t.onDayMouseEnter) || void 0 === r || r.call(t, e, n, o);
                                },
                                onMouseLeave: function (o) {
                                    var r;
                                    null === (r = t.onDayMouseLeave) || void 0 === r || r.call(t, e, n, o);
                                },
                                onPointerEnter: function (o) {
                                    var r;
                                    null === (r = t.onDayPointerEnter) || void 0 === r || r.call(t, e, n, o);
                                },
                                onPointerLeave: function (o) {
                                    var r;
                                    null === (r = t.onDayPointerLeave) || void 0 === r || r.call(t, e, n, o);
                                },
                                onTouchCancel: function (o) {
                                    var r;
                                    null === (r = t.onDayTouchCancel) || void 0 === r || r.call(t, e, n, o);
                                },
                                onTouchEnd: function (o) {
                                    var r;
                                    null === (r = t.onDayTouchEnd) || void 0 === r || r.call(t, e, n, o);
                                },
                                onTouchMove: function (o) {
                                    var r;
                                    null === (r = t.onDayTouchMove) || void 0 === r || r.call(t, e, n, o);
                                },
                                onTouchStart: function (o) {
                                    var r;
                                    null === (r = t.onDayTouchStart) || void 0 === r || r.call(t, e, n, o);
                                },
                            };
                        return x;
                    })(e, u),
                    f = (function () {
                        var e = V(),
                            n = He(),
                            t = ye(),
                            o = ge();
                        return K(e) ? n.selected : F(e) ? t.selected : A(e) ? o.selected : void 0;
                    })(),
                    v = Boolean(s.onDayClick || "default" !== s.mode);
                (0, r.useEffect)(
                    function () {
                        var n;
                        u.outside || (d.focusedDay && v && (0, w.K)(d.focusedDay, e) && (null === (n = t.current) || void 0 === n || n.focus()));
                    },
                    [d.focusedDay, e, t, v, u.outside],
                );
                var p = qe(s, u).join(" "),
                    h = (function (e, n) {
                        var t = B({}, e.styles.day);
                        return (
                            Object.keys(n).forEach(function (n) {
                                var o;
                                t = B(B({}, t), null === (o = e.modifiersStyles) || void 0 === o ? void 0 : o[n]);
                            }),
                            t
                        );
                    })(s, u),
                    m = Boolean((u.outside && !s.showOutsideDays) || u.hidden),
                    y = null !== (l = null === (i = s.components) || void 0 === i ? void 0 : i.DayContent) && void 0 !== l ? l : ve,
                    b = { style: h, className: p, children: (0, o.jsx)(y, { date: e, displayMonth: n, activeModifiers: u }), role: "gridcell" },
                    x = d.focusTarget && (0, w.K)(d.focusTarget, e) && !u.outside,
                    _ = d.focusedDay && (0, w.K)(d.focusedDay, e),
                    g = B(B(B({}, b), (((a = { disabled: u.disabled, role: "gridcell" })["aria-selected"] = u.selected), (a.tabIndex = _ || x ? 0 : -1), a)), c);
                return { isButton: v, isHidden: m, activeModifiers: u, selectedDays: f, buttonProps: g, divProps: b };
            }
            function Ze(e) {
                var n = (0, r.useRef)(null),
                    t = Ve(e.date, e.displayMonth, n);
                return t.isHidden ? (0, o.jsx)("div", { role: "gridcell" }) : t.isButton ? (0, o.jsx)(ie, B({ name: "day", ref: n }, t.buttonProps)) : (0, o.jsx)("div", B({}, t.divProps));
            }
            function Ge(e) {
                var n = e.number,
                    t = e.dates,
                    r = V(),
                    a = r.onWeekNumberClick,
                    i = r.styles,
                    l = r.classNames,
                    s = r.locale,
                    d = r.labels.labelWeekNumber,
                    u = (0, r.formatters.formatWeekNumber)(Number(n), { locale: s });
                if (!a) return (0, o.jsx)("span", { className: l.weeknumber, style: i.weeknumber, children: u });
                var c = d(Number(n), { locale: s });
                return (0, o.jsx)(ie, {
                    name: "week-number",
                    "aria-label": c,
                    className: l.weeknumber,
                    style: i.weeknumber,
                    onClick: function (e) {
                        a(n, t, e);
                    },
                    children: u,
                });
            }
            function Je(e) {
                var n,
                    t,
                    r,
                    a = V(),
                    i = a.styles,
                    l = a.classNames,
                    s = a.showWeekNumber,
                    d = a.components,
                    u = null !== (n = null == d ? void 0 : d.Day) && void 0 !== n ? n : Ze,
                    c = null !== (t = null == d ? void 0 : d.WeekNumber) && void 0 !== t ? t : Ge;
                return (
                    s && (r = (0, o.jsx)("td", { className: l.cell, style: i.cell, children: (0, o.jsx)(c, { number: e.weekNumber, dates: e.dates }) })),
                    (0, o.jsxs)("tr", {
                        className: l.row,
                        style: i.row,
                        children: [
                            r,
                            e.dates.map(function (n) {
                                return (0, o.jsx)("td", { className: l.cell, style: i.cell, role: "presentation", children: (0, o.jsx)(u, { displayMonth: e.displayMonth, date: n }) }, (0, W.Q)(n));
                            }),
                        ],
                    })
                );
            }
            function Qe(e, n, t) {
                for (var o = (null == t ? void 0 : t.ISOWeek) ? (0, D.g)(n) : (0, C.v)(n, t), r = (null == t ? void 0 : t.ISOWeek) ? (0, y.T)(e) : (0, b.z)(e, t), a = (0, j.w)(o, r), i = [], l = 0; l <= a; l++) i.push((0, x.E)(r, l));
                return i.reduce(function (e, n) {
                    var o = (null == t ? void 0 : t.ISOWeek) ? (0, E.l)(n) : (0, S.Q)(n, t),
                        r = e.find(function (e) {
                            return e.weekNumber === o;
                        });
                    return r ? (r.dates.push(n), e) : (e.push({ weekNumber: o, dates: [n] }), e);
                }, []);
            }
            function Xe(e) {
                var n,
                    t,
                    r,
                    a = V(),
                    s = a.locale,
                    d = a.classNames,
                    u = a.styles,
                    c = a.hideHead,
                    f = a.fixedWeeks,
                    v = a.components,
                    p = a.weekStartsOn,
                    h = a.firstWeekContainsDate,
                    m = a.ISOWeek,
                    y = (function (e, n) {
                        var t = Qe((0, i.N)(e), (0, l.V)(e), n);
                        if (null == n ? void 0 : n.useFixedWeeks) {
                            var o = (0, L.R)(e, n);
                            if (o < 6) {
                                var r = t[t.length - 1],
                                    a = r.dates[r.dates.length - 1],
                                    s = (0, M.j)(a, 6 - o),
                                    d = Qe((0, M.j)(a, 1), s, n);
                                t.push.apply(t, d);
                            }
                        }
                        return t;
                    })(e.displayMonth, { useFixedWeeks: Boolean(f), ISOWeek: m, locale: s, weekStartsOn: p, firstWeekContainsDate: h }),
                    b = null !== (n = null == v ? void 0 : v.Head) && void 0 !== n ? n : fe,
                    x = null !== (t = null == v ? void 0 : v.Row) && void 0 !== t ? t : Je,
                    w = null !== (r = null == v ? void 0 : v.Footer) && void 0 !== r ? r : ue;
                return (0, o.jsxs)("table", {
                    id: e.id,
                    className: d.table,
                    style: u.table,
                    role: "grid",
                    "aria-labelledby": e["aria-labelledby"],
                    children: [
                        !c && (0, o.jsx)(b, {}),
                        (0, o.jsx)("tbody", {
                            className: d.tbody,
                            style: u.tbody,
                            children: y.map(function (n) {
                                return (0, o.jsx)(x, { displayMonth: e.displayMonth, dates: n.dates, weekNumber: n.weekNumber }, n.weekNumber);
                            }),
                        }),
                        (0, o.jsx)(w, { displayMonth: e.displayMonth }),
                    ],
                });
            }
            var $e = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                en = !1,
                nn = 0;
            function tn() {
                return "react-day-picker-".concat(++nn);
            }
            function on(e) {
                var n,
                    t,
                    a = V(),
                    i = a.dir,
                    l = a.classNames,
                    s = a.styles,
                    d = a.components,
                    u = te().displayMonths,
                    c = (function (e) {
                        var n,
                            t = null != e ? e : en ? tn() : null,
                            o = (0, r.useState)(t),
                            a = o[0],
                            i = o[1];
                        return (
                            $e(function () {
                                null === a && i(tn());
                            }, []),
                            (0, r.useEffect)(function () {
                                !1 === en && (en = !0);
                            }, []),
                            null !== (n = null != e ? e : a) && void 0 !== n ? n : void 0
                        );
                    })(a.id ? "".concat(a.id, "-").concat(e.displayIndex) : void 0),
                    f = a.id ? "".concat(a.id, "-grid-").concat(e.displayIndex) : void 0,
                    v = [l.month],
                    p = s.month,
                    h = 0 === e.displayIndex,
                    m = e.displayIndex === u.length - 1,
                    y = !h && !m;
                "rtl" === i && ((m = (n = [h, m])[0]), (h = n[1])), h && (v.push(l.caption_start), (p = B(B({}, p), s.caption_start))), m && (v.push(l.caption_end), (p = B(B({}, p), s.caption_end))), y && (v.push(l.caption_between), (p = B(B({}, p), s.caption_between)));
                var b = null !== (t = null == d ? void 0 : d.Caption) && void 0 !== t ? t : de;
                return (0, o.jsxs)("div", { className: v.join(" "), style: p, children: [(0, o.jsx)(b, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), (0, o.jsx)(Xe, { id: f, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
            }
            function rn(e) {
                var n = V(),
                    t = n.classNames,
                    r = n.styles;
                return (0, o.jsx)("div", { className: t.months, style: r.months, children: e.children });
            }
            function an(e) {
                var n,
                    t,
                    a = e.initialProps,
                    i = V(),
                    l = Re(),
                    s = te(),
                    d = (0, r.useState)(!1),
                    u = d[0],
                    c = d[1];
                (0, r.useEffect)(
                    function () {
                        i.initialFocus && l.focusTarget && (u || (l.focus(l.focusTarget), c(!0)));
                    },
                    [i.initialFocus, u, l.focus, l.focusTarget, l],
                );
                var f = [i.classNames.root, i.className];
                i.numberOfMonths > 1 && f.push(i.classNames.multiple_months), i.showWeekNumber && f.push(i.classNames.with_weeknumber);
                var v = B(B({}, i.styles.root), i.style),
                    p = Object.keys(a)
                        .filter(function (e) {
                            return e.startsWith("data-");
                        })
                        .reduce(function (e, n) {
                            var t;
                            return B(B({}, e), (((t = {})[n] = a[n]), t));
                        }, {}),
                    h = null !== (t = null === (n = a.components) || void 0 === n ? void 0 : n.Months) && void 0 !== t ? t : rn;
                return (0, o.jsx)(
                    "div",
                    B({ className: f.join(" "), style: v, dir: i.dir, id: i.id, nonce: a.nonce, title: a.title, lang: a.lang }, p, {
                        children: (0, o.jsx)(h, {
                            children: s.displayMonths.map(function (e, n) {
                                return (0, o.jsx)(on, { displayIndex: n, displayMonth: e }, n);
                            }),
                        }),
                    }),
                );
            }
            function ln(e) {
                var n = e.children,
                    t = (function (e, n) {
                        var t = {};
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var r = 0;
                            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
                        }
                        return t;
                    })(e, ["children"]);
                return (0, o.jsx)(q, { initialProps: t, children: (0, o.jsx)(ne, { children: (0, o.jsx)(Ye, { initialProps: t, children: (0, o.jsx)(he, { initialProps: t, children: (0, o.jsx)(we, { initialProps: t, children: (0, o.jsx)(Se, { children: (0, o.jsx)(Ke, { children: n }) }) }) }) }) }) });
            }
            function sn(e) {
                return (0, o.jsx)(ln, B({}, e, { children: (0, o.jsx)(an, { initialProps: e }) }));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-c58e35e0.a7e5944a.js.map
