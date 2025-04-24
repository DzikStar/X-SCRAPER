"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Verified-e96e9bea"],
    {
        951547: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(552322);
            const n = (e) => (0, r.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, r.jsx)("path", { d: "M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" }) });
        },
        286960: (e, t, a) => {
            a.d(t, { If: () => C });
            var r = a(202784),
                n = a(325686),
                o = a(731708),
                l = a(67369),
                i = a(738545),
                s = a(165822),
                c = a(392237),
                d = a(674132),
                u = a.n(d),
                m = a(97882),
                p = a(979673);
            const g = {
                    Engagements: { label: u().dbe9353e, popover: u().c23def7a },
                    Spend: { label: u().jc14a9e8, popover: u().d16b5a18, format: "currency" },
                    Impressions: { popover: u().b15df4b4, label: u().e5fe61e0 },
                    EngagementRate: {
                        label: u().e623137c,
                        popover: u().d9d34182,
                        calculate: (e, t) => {
                            const a = t("Engagements"),
                                r = t("Impressions");
                            return { current: (a.current ?? 0) / (r.current ?? 1), past: (a.past ?? 0) / (r.past ?? 1) };
                        },
                        format: "percent",
                    },
                    ProfileVisits: { label: u().aeee0182, popover: u().b2bde01a },
                    LinkClicks: { label: u().d5f1e554, popover: u().cf573986 },
                    Follows: { label: u().j761451e, popover: u().e1a87d14 },
                    Replies: { label: u().jdceda60, popover: u().j590577e },
                    Likes: { label: u().d7b8ebaa, popover: u().ia1da622 },
                    Retweets: { label: u().ja42739e, popover: u().ca6e8de0 },
                    VideoViews: { label: u().b1b4d57e, popover: u().bdaf100e },
                    MediaViews: { label: u().ca826772, popover: u().j43b8f52 },
                    CompletionRate: {
                        label: u().d3969c06,
                        popover: u().c58c3476,
                        calculate: (e, t) => {
                            const a = t("VideoCompletions"),
                                r = t("VideoViews");
                            return { current: (a.current ?? 0) / (r.current ?? 1), past: (a.past ?? 0) / (r.past ?? 1) };
                        },
                        format: "percent",
                    },
                },
                y = u().c778d80b,
                b = u().g01559c6;
            function f(e, t, a) {
                const r = t?.find((t) => t.metric_type === e),
                    n = a?.find((t) => t.metric_type === e),
                    o = r?.metric_value ?? 0,
                    l = n?.metric_value ?? 0;
                return { metric_type: e, organic_value: o, promoted_value: l, total_value: o + l, metadata: { currency_code: n?.currency_code } };
            }
            function D(e, t) {
                if (t && 0 !== t) return (e - t) / t;
            }
            const C = (e) => {
                    const { metrics: t, showTimeMessage: a = !0, showTrend: c = !0 } = e,
                        d = (0, l.LX)();
                    if (!t) return null;
                    const u = e.metricsKeysToRender ?? ["Impressions", "EngagementRate", "ProfileVisits", "LinkClicks"],
                        C = t.current_organic_metrics,
                        h = t.past_organic_metrics,
                        w = t.advertiser_accounts_by_primary_promotable_user?.items[0].current_promoted_metrics,
                        T = t.advertiser_accounts_by_primary_promotable_user?.items[0].past_promoted_metrics,
                        _ = (e) => {
                            const t = f(e, C, w ?? []),
                                a = f(e, h, T ?? []);
                            return { current: t.total_value, past: a.total_value, metadata: t.metadata };
                        };
                    function E(e) {
                        const a = g[e];
                        if (!a) return;
                        const { current: l, metadata: s, past: d } = a.calculate ? a.calculate(t, _) : _(e),
                            u = isFinite(l) && !isNaN(l),
                            b = u && isFinite(d) && !isNaN(d) && c,
                            f = "percent" === a.format ? y(l ?? 0) : "currency" === a.format && s?.currency_code ? (0, m.x)({ amount: l, currencyCode: s.currency_code, formatter: 1, removeTrailingZeros: !0 }) : (0, p.fV)(l, 1e4);
                        return r.createElement(i.ZP, { animated: !0, count: l ?? 0, key: e, label: a.label, popover: ((C = a.popover), r.createElement(n.Z, null, r.createElement(o.ZP, { color: "gray700", size: "body", weight: "normal" }, C))), size: "title2", trendValue: b ? (D(l, d) ?? void 0) : void 0, value: u ? f : "-" });
                        var C;
                    }
                    return r.createElement(
                        n.Z,
                        null,
                        r.createElement(
                            n.Z,
                            { style: d ? v.gridMobile : v.gridDesktop },
                            u.map((e) => r.createElement(s.Z, { "aria-label": e, key: e, upper: r.createElement(n.Z, { style: v.tile }, E(e)) })),
                        ),
                        a && r.createElement(o.ZP, { color: "gray700", size: "subtext3" }, b),
                    );
                },
                v = c.default.create((e) => {
                    const t = { display: "grid", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: e.spaces.space8, rowGap: e.spaces.space2 };
                    return { root: { padding: e.spaces.space16 }, gridDesktop: { ...t, gridTemplateColumns: "repeat(4, 1fr)" }, gridMobile: { ...t, gridTemplateColumns: "repeat(2, 1fr)" }, tile: { backgroundColor: e.colors.gray0, flexGrow: 1, justifyContent: "center", paddingStart: e.spaces.space16 } };
                });
        },
        508469: (e, t, a) => {
            a.d(t, { D: () => v });
            var r = a(202784),
                n = a(325686),
                o = a(157130),
                l = a(154003),
                i = a(731708),
                s = a(392237),
                c = a(97301),
                d = a(58399),
                u = a(97043),
                m = a(466792),
                p = a(665979);
            a(136728);
            const g = new Date(),
                y = ({ currentMonth: e, day: t, onClick: a, type: o }) => {
                    const l = "selectedEnd" === o || "selectedStart" === o;
                    return r.createElement(
                        n.Z,
                        { style: [f.dayContainer, "disabled" === o && f.dayContainerDisabled, "range" === o && f.dayContainerRange, "selectedStart" === o && f.dayContainerSelectedStart, "selectedEnd" === o && f.dayContainerSelectedEnd, "preview" === o && f.dayContainerPreview] },
                        r.createElement(m.Z, null, ({ isFocused: c, isFocusedWithin: d, isHovered: u }) => r.createElement(n.Z, { disabled: !e || "disabled" === o, onClick: () => a(t), style: [f.dayButton, l && f.dayButtonSelected, "disabled" !== o && e && f.pointer, ((u && e && "disabled" !== o) || "preview" === o) && f.dayButtonPreview] }, r.createElement(i.ZP, { size: "subtext3", style: { opacity: e ? ("disabled" === o ? 0.5 : 1) : 0.25, color: l ? s.default.theme.colors.buttonWhite : s.default.theme.colors.text }, weight: "bold" }, t.day))),
                    );
                },
                b = ({ displayDate: e, endDate: t, maxDays: a, onChange: o, startDate: l }) => {
                    const [i, s] = r.useState(l && (0, p.b7)(l)),
                        [c, d] = r.useState(t && (0, p.b7)(t)),
                        u = r.useMemo(
                            () =>
                                (({ maxDate: e, minDate: t, month: a, year: r }) => {
                                    const n = [],
                                        o = new Date(Date.UTC(r, a, 1)),
                                        l = new Date(Date.UTC(r, a + 1, 0)),
                                        i = o.getUTCDay(),
                                        s = l.getUTCDate(),
                                        c = 0 === a ? 11 : a - 1,
                                        d = 0 === a ? r - 1 : r,
                                        u = new Date(d, c + 1, 0).getDate(),
                                        m = (a) => !((t && a < t) || (e && a > e));
                                    for (let e = i - 1; e >= 0; e--) {
                                        const t = u - e,
                                            a = new Date(Date.UTC(d, c, t));
                                        n.push({ day: t, month: c, year: d, disabled: !m(a) });
                                    }
                                    for (let e = 1; e <= s; e++) {
                                        const t = new Date(Date.UTC(r, a, e));
                                        n.push({ day: e, month: a, year: r, disabled: !m(t) });
                                    }
                                    const p = 6 - l.getUTCDay();
                                    for (let e = 1; e <= p; e++) {
                                        const t = new Date(Date.UTC(r, a + 1, e));
                                        n.push({ day: e, month: a + 1, year: r, disabled: !m(t) });
                                    }
                                    return n;
                                })({ month: e.getUTCMonth(), year: e.getUTCFullYear(), maxDate: new Date(Date.UTC(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate())), minDate: new Date(Date.UTC(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate() - a)) }),
                            [e, a],
                        );
                    return r.createElement(
                        n.Z,
                        { style: f.dayGrid },
                        u.map((t, a) => {
                            const n = new Date(Date.UTC(t.year, t.month, t.day)),
                                l = !!(i && c && ((e, t, a) => e >= t && e <= a)(n, i, c));
                            let u;
                            return (
                                (u = t.disabled ? "disabled" : l && i && c ? (i.getTime() === c.getTime() ? "preview" : i.getTime() === n.getTime() ? "selectedStart" : c.getTime() === n.getTime() ? "selectedEnd" : "range") : "default"),
                                r.createElement(y, {
                                    currentMonth: t.month === e.getUTCMonth(),
                                    day: t,
                                    key: a,
                                    onClick: (e) => {
                                        if (e.disabled) return;
                                        const t = new Date(Date.UTC(e.year, e.month, e.day));
                                        return i && c && i.getTime() === c.getTime() ? (t > i ? (d(t), void o?.({ startDate: i, endDate: t })) : t < i ? (s(t), void o?.({ startDate: t, endDate: c })) : void 0) : (s(t), void d(t));
                                    },
                                    selected: l,
                                    type: u,
                                })
                            );
                        }),
                    );
                },
                f = s.default.create((e) => ({ dayGrid: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gridRowGap: e.spaces.space4, gap: "0", overflow: "hidden", borderRadius: e.spaces.space8 }, dayContainer: { backgroundColor: e.colors.cellBackground, width: s.default.theme.spaces.space28, aspectRatio: 1 }, dayContainerDisabled: { backgroundColor: e.colors.activeBlack }, dayContainerRange: { backgroundColor: e.colors.gray100 }, dayContainerSelectedStart: { backgroundColor: e.colors.gray100, borderTopStartRadius: e.borderRadii.infinite, borderBottomStartRadius: e.borderRadii.infinite }, dayContainerSelectedEnd: { backgroundColor: e.colors.gray100, borderTopEndRadius: e.borderRadii.infinite, borderBottomEndRadius: e.borderRadii.infinite }, dayContainerPreview: { backgroundColor: e.colors.gray100, borderRadius: e.borderRadii.infinite }, dayButton: { borderRadius: e.borderRadii.infinite, backgroundColor: "transparent", borderWidth: e.borderWidths.small, borderColor: "transparent", justifyContent: "center", alignItems: "center", padding: 0, display: "flex", height: "100%", width: "100%" }, dayButtonSelected: { backgroundColor: e.colors.buttonBlack }, dayButtonPreview: { borderColor: e.colors.buttonBlack, borderWidth: e.borderWidths.small }, pointer: { cursor: "pointer" } })),
                D = (e) => {
                    const t = e.getUTCDate();
                    return `${e.getUTCMonth() + 1}/${t}/${e.getUTCFullYear()}`;
                },
                C = ["S", "M", "T", "W", "T", "F", "S"],
                v = ({ endDate: e, maxDays: t, onChange: a, selected: s, startDate: m }) => {
                    const [p, g] = r.useState(e ? new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1)) : new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), 1))),
                        y = m && e && s ? `${D(m)} - ${D(e)}` : null,
                        f = (e) => g(new Date(Date.UTC(p.getUTCFullYear(), p.getUTCMonth() + e, 1)));
                    return r.createElement(
                        o.Z,
                        {
                            contentStyle: { maxWidth: "max-content", minWidth: "unset" },
                            renderContent: () =>
                                r.createElement(
                                    n.Z,
                                    { style: h.root },
                                    r.createElement(n.Z, { style: h.headerRow }, r.createElement(l.ZP, { icon: r.createElement(c.default, null), onMouseDown: () => f(-1), size: "xSmall", style: { width: "fit-content" } }), r.createElement(i.ZP, { size: "subtext2", weight: "bold" }, p.toLocaleString("default", { month: "long", year: "numeric", timeZone: "UTC" })), r.createElement(l.ZP, { icon: r.createElement(d.default, null), onMouseDown: () => f(1), size: "xSmall", style: { width: "fit-content" } })),
                                    r.createElement(
                                        n.Z,
                                        { style: h.dayLabels },
                                        C.map((e, t) => r.createElement(i.ZP, { color: "gray700", key: t, size: "subtext3", weight: "bold" }, e)),
                                    ),
                                    r.createElement(b, { displayDate: p, endDate: e, maxDays: t, onChange: a, startDate: m }),
                                ),
                        },
                        r.createElement(l.ZP, { icon: r.createElement(u.default, null), size: "small", type: s ? "primaryFilled" : "primaryOutlined" }, y),
                    );
                },
                h = s.default.create((e) => ({ root: { justifyContent: "center", padding: s.default.theme.spaces.space8, gap: s.default.theme.spaces.space8 }, headerRow: { justifyContent: "space-between", flexDirection: "row", alignItems: "center" }, dayLabels: { justifyContent: "space-around", flexDirection: "row" } }));
        },
        907357: (e, t, a) => {
            a.d(t, { Z: () => b });
            var r = a(202784),
                n = a(325686),
                o = a(67369),
                l = a(154003),
                i = a(392237),
                s = a(323265),
                c = a(655352),
                d = a(725405),
                u = a(508469),
                m = a(464703);
            const p = [
                    { label: "7D", value: 7 },
                    { label: "28D", value: 28 },
                    { label: "3M", value: 90 },
                    { label: "1Y", value: 365 },
                ],
                g = new Date(),
                y = (e) => (0, m.Hk)(g)(e),
                b = ({ defaultTimeFrame: e, defaultTimeRange: t, maxDays: a = 365, onChange: i, preventDefault: b }) => {
                    const D = e || (t ? null : { label: "7D", value: 7 }),
                        [C, v] = r.useState(D),
                        [h, w] = r.useState(t || { endDate: g, startDate: y(7), compareStartDate: y(14) }),
                        T = (0, o.Mv)(),
                        _ = !(0, c.ZP)() && T,
                        E = s.ZP.isTwitterApp() ? s.ZP.osString() : "web",
                        S = (0, d.Z)(),
                        k = p.filter((e) => e.value <= a);
                    return r.createElement(
                        n.Z,
                        { style: f.timeFrameRow },
                        !_ &&
                            r.createElement(u.D, {
                                endDate: null === C ? h.endDate : null,
                                maxDays: a,
                                onChange: ({ endDate: e, startDate: t }) => {
                                    const a = Math.floor((e.getTime() - t.getTime()) / 864e5),
                                        r = { endDate: e, startDate: t, compareStartDate: (0, m.Hk)(t)(a) };
                                    b || (S.scribe({ page: "account_analytics", section: E, component: "TimeRangePicker", action: "selected", data: { start_date: t.toISOString(), end_date: e.toISOString() } }), v(null), w(r)), i?.(r);
                                },
                                selected: null === C,
                                startDate: null === C ? h.startDate : null,
                            }),
                        k.map((e) =>
                            r.createElement(
                                l.ZP,
                                {
                                    key: e.label,
                                    onMouseDown: () =>
                                        ((e) => {
                                            const t = { endDate: g, startDate: y(e.value), compareStartDate: y(2 * e.value) };
                                            if (!b) {
                                                if ((S.scribe({ page: "account_analytics", section: E, component: "TimeFrameSelector", action: "click", data: { time_frame: e.label } }), C === e)) return;
                                                v(e), w(t);
                                            }
                                            i?.(t);
                                        })(e),
                                    size: "small",
                                    type: C?.label === e.label ? "primaryFilled" : "primaryOutlined",
                                },
                                e.label,
                            ),
                        ),
                    );
                },
                f = i.default.create((e) => ({ timeFrameRow: { display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center", width: "fit-content", gap: e.spaces.space8 } }));
        },
        979673: (e, t, a) => {
            a.d(t, { LU: () => i, Qy: () => u, fV: () => d, jf: () => c });
            var r = a(674132),
                n = a.n(r);
            const o = n().ja781451,
                l = n().cfa1a7b9,
                i = (e, t) => new Date(e).toISOString().substring(t ? 11 : 14, 19);
            function s(e) {
                return e || 0;
            }
            function c(e, t) {
                const a = s(t);
                return 0 === a ? 0 : s(e) / a;
            }
            function d(e, t = 1e5) {
                const a = s(e);
                return a >= t ? l(a) : o(a);
            }
            function u(e, t, a) {
                const r = t?.find((t) => t.metric_type === e),
                    n = a?.find((t) => t.metric_type === e),
                    o = r?.metric_value ?? 0,
                    l = n?.metric_value ?? 0;
                return { metric_type: e, organic_value: o, promoted_value: l, total_value: o + l };
            }
        },
        890022: (e, t, a) => {
            a.d(t, { D: () => n });
            var r = a(202784);
            function n(e) {
                const t = r.useRef({ value: e, previous: e });
                return r.useMemo(() => (t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous), [e]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Verified-e96e9bea.687cb9aa.js.map
