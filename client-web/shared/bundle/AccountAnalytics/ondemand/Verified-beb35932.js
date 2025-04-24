"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Verified-beb35932"],
    {
        31418: (t, e, n) => {
            n.d(e, { dP: () => r, jE: () => a, vh: () => i, yJ: () => o });
            Math.pow(10, 8);
            const a = 6048e5,
                r = 864e5,
                o = 6e4,
                i = 36e5;
        },
        595873: (t, e, n) => {
            function a(t, e) {
                return t instanceof Date ? new t.constructor(e) : new Date(e);
            }
            n.d(e, { L: () => a });
        },
        739219: (t, e, n) => {
            n.d(e, { w: () => i });
            var a = n(31418),
                r = n(808106),
                o = n(537796);
            function i(t, e) {
                const n = (0, r.b)(t),
                    i = (0, r.b)(e),
                    s = +n - (0, o.D)(n),
                    u = +i - (0, o.D)(i);
                return Math.round((s - u) / a.dP);
            }
        },
        596017: (t, e, n) => {
            n.d(e, { j: () => o });
            var a = n(739219),
                r = n(150729);
            function o(t, e) {
                const n = (0, r.Q)(t),
                    o = (0, r.Q)(e),
                    s = i(n, o),
                    u = Math.abs((0, a.w)(n, o));
                n.setDate(n.getDate() - s * u);
                const l = s * (u - Number(i(n, o) === -s));
                return 0 === l ? 0 : l;
            }
            function i(t, e) {
                const n = t.getFullYear() - e.getFullYear() || t.getMonth() - e.getMonth() || t.getDate() - e.getDate() || t.getHours() - e.getHours() || t.getMinutes() - e.getMinutes() || t.getSeconds() - e.getSeconds() || t.getMilliseconds() - e.getMilliseconds();
                return n < 0 ? -1 : n > 0 ? 1 : n;
            }
        },
        152935: (t, e, n) => {
            n.d(e, { WU: () => b });
            var a = n(554698),
                r = n(803066),
                o = n(674921),
                i = n(16468),
                s = n(398308),
                u = n(165890),
                l = n(150729);
            function d(t) {
                if (!(0, u.J)(t) && "number" != typeof t) return !1;
                const e = (0, l.Q)(t);
                return !isNaN(Number(e));
            }
            const c = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
                h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
                m = /^'([^]*?)'?$/,
                f = /''/g,
                g = /[a-zA-Z]/;
            function b(t, e, n) {
                const u = (0, r.j)(),
                    m = n?.locale ?? u.locale ?? a._,
                    f = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1,
                    b = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? u.weekStartsOn ?? u.locale?.options?.weekStartsOn ?? 0,
                    p = (0, l.Q)(t);
                if (!d(p)) throw new RangeError("Invalid time value");
                let y = e
                    .match(h)
                    .map((t) => {
                        const e = t[0];
                        if ("p" === e || "P" === e) {
                            return (0, i.G[e])(t, m.formatLong);
                        }
                        return t;
                    })
                    .join("")
                    .match(c)
                    .map((t) => {
                        if ("''" === t) return { isToken: !1, value: "'" };
                        const e = t[0];
                        if ("'" === e) return { isToken: !1, value: w(t) };
                        if (o.$[e]) return { isToken: !0, value: t };
                        if (e.match(g)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + e + "`");
                        return { isToken: !1, value: t };
                    });
                m.localize.preprocessor && (y = m.localize.preprocessor(p, y));
                const v = { firstWeekContainsDate: f, weekStartsOn: b, locale: m };
                return y
                    .map((a) => {
                        if (!a.isToken) return a.value;
                        const r = a.value;
                        ((!n?.useAdditionalWeekYearTokens && (0, s.Do)(r)) || (!n?.useAdditionalDayOfYearTokens && (0, s.Iu)(r))) && (0, s.DD)(r, e, String(t));
                        return (0, o.$[r[0]])(p, r, m.localize, v);
                    })
                    .join("");
            }
            function w(t) {
                const e = t.match(m);
                return e ? e[1].replace(f, "'") : t;
            }
        },
        898513: (t, e, n) => {
            n.d(e, { B: () => i });
            var a = n(739219),
                r = n(532978),
                o = n(150729);
            function i(t) {
                const e = (0, o.Q)(t);
                return (0, a.w)(e, (0, r.e)(e)) + 1;
            }
        },
        525668: (t, e, n) => {
            n.d(e, { l: () => l });
            var a = n(31418),
                r = n(859001),
                o = n(499449),
                i = n(595873);
            function s(t) {
                const e = (0, o.L)(t),
                    n = (0, i.L)(t, 0);
                return n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0), (0, r.T)(n);
            }
            var u = n(150729);
            function l(t) {
                const e = (0, u.Q)(t),
                    n = +(0, r.T)(e) - +s(e);
                return Math.round(n / a.jE) + 1;
            }
        },
        499449: (t, e, n) => {
            n.d(e, { L: () => i });
            var a = n(595873),
                r = n(859001),
                o = n(150729);
            function i(t) {
                const e = (0, o.Q)(t),
                    n = e.getFullYear(),
                    i = (0, a.L)(t, 0);
                i.setFullYear(n + 1, 0, 4), i.setHours(0, 0, 0, 0);
                const s = (0, r.T)(i),
                    u = (0, a.L)(t, 0);
                u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0);
                const l = (0, r.T)(u);
                return e.getTime() >= s.getTime() ? n + 1 : e.getTime() >= l.getTime() ? n : n - 1;
            }
        },
        480415: (t, e, n) => {
            n.d(e, { Q: () => d });
            var a = n(31418),
                r = n(262014),
                o = n(595873),
                i = n(793361),
                s = n(803066);
            function u(t, e) {
                const n = (0, s.j)(),
                    a = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1,
                    u = (0, i.c)(t, e),
                    l = (0, o.L)(t, 0);
                l.setFullYear(u, 0, a), l.setHours(0, 0, 0, 0);
                return (0, r.z)(l, e);
            }
            var l = n(150729);
            function d(t, e) {
                const n = (0, l.Q)(t),
                    o = +(0, r.z)(n, e) - +u(n, e);
                return Math.round(o / a.jE) + 1;
            }
        },
        793361: (t, e, n) => {
            n.d(e, { c: () => s });
            var a = n(595873),
                r = n(262014),
                o = n(150729),
                i = n(803066);
            function s(t, e) {
                const n = (0, o.Q)(t),
                    s = n.getFullYear(),
                    u = (0, i.j)(),
                    l = e?.firstWeekContainsDate ?? e?.locale?.options?.firstWeekContainsDate ?? u.firstWeekContainsDate ?? u.locale?.options?.firstWeekContainsDate ?? 1,
                    d = (0, a.L)(t, 0);
                d.setFullYear(s + 1, 0, l), d.setHours(0, 0, 0, 0);
                const c = (0, r.z)(d, e),
                    h = (0, a.L)(t, 0);
                h.setFullYear(s, 0, l), h.setHours(0, 0, 0, 0);
                const m = (0, r.z)(h, e);
                return n.getTime() >= c.getTime() ? s + 1 : n.getTime() >= m.getTime() ? s : s - 1;
            }
        },
        165890: (t, e, n) => {
            function a(t) {
                return t instanceof Date || ("object" == typeof t && "[object Date]" === Object.prototype.toString.call(t));
            }
            n.d(e, { J: () => a });
        },
        554698: (t, e, n) => {
            n.d(e, { _: () => d });
            const a = { lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" }, xSeconds: { one: "1 second", other: "{{count}} seconds" }, halfAMinute: "half a minute", lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" }, xMinutes: { one: "1 minute", other: "{{count}} minutes" }, aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" }, xHours: { one: "1 hour", other: "{{count}} hours" }, xDays: { one: "1 day", other: "{{count}} days" }, aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" }, xWeeks: { one: "1 week", other: "{{count}} weeks" }, aboutXMonths: { one: "about 1 month", other: "about {{count}} months" }, xMonths: { one: "1 month", other: "{{count}} months" }, aboutXYears: { one: "about 1 year", other: "about {{count}} years" }, xYears: { one: "1 year", other: "{{count}} years" }, overXYears: { one: "over 1 year", other: "over {{count}} years" }, almostXYears: { one: "almost 1 year", other: "almost {{count}} years" } };
            function r(t) {
                return (e = {}) => {
                    const n = e.width ? String(e.width) : t.defaultWidth;
                    return t.formats[n] || t.formats[t.defaultWidth];
                };
            }
            const o = { date: r({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }), time: r({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }), dateTime: r({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }) },
                i = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };
            function s(t) {
                return (e, n) => {
                    let a;
                    if ("formatting" === (n?.context ? String(n.context) : "standalone") && t.formattingValues) {
                        const e = t.defaultFormattingWidth || t.defaultWidth,
                            r = n?.width ? String(n.width) : e;
                        a = t.formattingValues[r] || t.formattingValues[e];
                    } else {
                        const e = t.defaultWidth,
                            r = n?.width ? String(n.width) : t.defaultWidth;
                        a = t.values[r] || t.values[e];
                    }
                    return a[t.argumentCallback ? t.argumentCallback(e) : e];
                };
            }
            function u(t) {
                return (e, n = {}) => {
                    const a = n.width,
                        r = (a && t.matchPatterns[a]) || t.matchPatterns[t.defaultMatchWidth],
                        o = e.match(r);
                    if (!o) return null;
                    const i = o[0],
                        s = (a && t.parsePatterns[a]) || t.parsePatterns[t.defaultParseWidth],
                        u = Array.isArray(s)
                            ? (function (t, e) {
                                  for (let n = 0; n < t.length; n++) if (e(t[n])) return n;
                                  return;
                              })(s, (t) => t.test(i))
                            : (function (t, e) {
                                  for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return n;
                                  return;
                              })(s, (t) => t.test(i));
                    let l;
                    (l = t.valueCallback ? t.valueCallback(u) : u), (l = n.valueCallback ? n.valueCallback(l) : l);
                    return { value: l, rest: e.slice(i.length) };
                };
            }
            var l;
            const d = {
                code: "en-US",
                formatDistance: (t, e, n) => {
                    let r;
                    const o = a[t];
                    return (r = "string" == typeof o ? o : 1 === e ? o.one : o.other.replace("{{count}}", e.toString())), n?.addSuffix ? (n.comparison && n.comparison > 0 ? "in " + r : r + " ago") : r;
                },
                formatLong: o,
                formatRelative: (t, e, n, a) => i[t],
                localize: {
                    ordinalNumber: (t, e) => {
                        const n = Number(t),
                            a = n % 100;
                        if (a > 20 || a < 10)
                            switch (a % 10) {
                                case 1:
                                    return n + "st";
                                case 2:
                                    return n + "nd";
                                case 3:
                                    return n + "rd";
                            }
                        return n + "th";
                    },
                    era: s({ values: { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, defaultWidth: "wide" }),
                    quarter: s({ values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] }, defaultWidth: "wide", argumentCallback: (t) => t - 1 }),
                    month: s({ values: { narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] }, defaultWidth: "wide" }),
                    day: s({ values: { narrow: ["S", "M", "T", "W", "T", "F", "S"], short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] }, defaultWidth: "wide" }),
                    dayPeriod: s({ values: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" } }, defaultWidth: "wide", formattingValues: { narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" }, wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" } }, defaultFormattingWidth: "wide" }),
                },
                match: {
                    ordinalNumber:
                        ((l = { matchPattern: /^(\d+)(th|st|nd|rd)?/i, parsePattern: /\d+/i, valueCallback: (t) => parseInt(t, 10) }),
                        (t, e = {}) => {
                            const n = t.match(l.matchPattern);
                            if (!n) return null;
                            const a = n[0],
                                r = t.match(l.parsePattern);
                            if (!r) return null;
                            let o = l.valueCallback ? l.valueCallback(r[0]) : r[0];
                            return (o = e.valueCallback ? e.valueCallback(o) : o), { value: o, rest: t.slice(a.length) };
                        }),
                    era: u({ matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/^b/i, /^(a|c)/i] }, defaultParseWidth: "any" }),
                    quarter: u({ matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i }, defaultMatchWidth: "wide", parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] }, defaultParseWidth: "any", valueCallback: (t) => t + 1 }),
                    month: u({ matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] }, defaultParseWidth: "any" }),
                    day: u({ matchPatterns: { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i }, defaultMatchWidth: "wide", parsePatterns: { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] }, defaultParseWidth: "any" }),
                    dayPeriod: u({ matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i }, defaultMatchWidth: "any", parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } }, defaultParseWidth: "any" }),
                },
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            };
        },
        808106: (t, e, n) => {
            n.d(e, { b: () => r });
            var a = n(150729);
            function r(t) {
                const e = (0, a.Q)(t);
                return e.setHours(0, 0, 0, 0), e;
            }
        },
        859001: (t, e, n) => {
            n.d(e, { T: () => r });
            var a = n(262014);
            function r(t) {
                return (0, a.z)(t, { weekStartsOn: 1 });
            }
        },
        262014: (t, e, n) => {
            n.d(e, { z: () => o });
            var a = n(150729),
                r = n(803066);
            function o(t, e) {
                const n = (0, r.j)(),
                    o = e?.weekStartsOn ?? e?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0,
                    i = (0, a.Q)(t),
                    s = i.getDay(),
                    u = (s < o ? 7 : 0) + s - o;
                return i.setDate(i.getDate() - u), i.setHours(0, 0, 0, 0), i;
            }
        },
        532978: (t, e, n) => {
            n.d(e, { e: () => o });
            var a = n(150729),
                r = n(595873);
            function o(t) {
                const e = (0, a.Q)(t),
                    n = (0, r.L)(t, 0);
                return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
            }
        },
        150729: (t, e, n) => {
            function a(t) {
                const e = Object.prototype.toString.call(t);
                return t instanceof Date || ("object" == typeof t && "[object Date]" === e) ? new t.constructor(+t) : "number" == typeof t || "[object Number]" === e || "string" == typeof t || "[object String]" === e ? new Date(t) : new Date(NaN);
            }
            n.d(e, { Q: () => a });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Verified-beb35932.c803c13a.js.map
