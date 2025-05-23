"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-9c6da171"],
    {
        294945: (t, e, n) => {
            //! @version @js-joda/core - 3.2.0
            //! @copyright (c) 2015-present, Philipp Thürwächter, Pattrick Hüper & js-joda contributors
            //! @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
            //! @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            function i(t, e, n) {
                function i(t) {
                    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
                        (this.message = t),
                        e && e.apply(this, arguments),
                        (this.toString = function () {
                            return this.name + ": " + this.message;
                        });
                }
                return void 0 === n && (n = Error), (i.prototype = Object.create(n.prototype)), (i.prototype.name = t), (i.prototype.constructor = i), i;
            }
            n.r(e), n.d(e, { ArithmeticException: () => a, ChronoField: () => g, ChronoLocalDate: () => z, ChronoLocalDateTime: () => he, ChronoUnit: () => y, ChronoZonedDateTime: () => ie, Clock: () => de, DateTimeException: () => r, DateTimeFormatter: () => qt, DateTimeFormatterBuilder: () => Ht, DateTimeParseException: () => s, DayOfWeek: () => U, DecimalStyle: () => Et, Duration: () => v, IllegalArgumentException: () => u, IllegalStateException: () => h, Instant: () => _e, IsoChronology: () => ee, IsoFields: () => rt, LocalDate: () => ue, LocalDateTime: () => fe, LocalTime: () => ce, Month: () => V, MonthDay: () => zt, NullPointerException: () => f, OffsetDateTime: () => se, OffsetTime: () => ne, Period: () => H, ResolverStyle: () => k, SignStyle: () => St, Temporal: () => q, TemporalAccessor: () => F, TemporalAdjuster: () => B, TemporalAdjusters: () => Jt, TemporalAmount: () => A, TemporalField: () => M, TemporalQueries: () => I, TemporalQuery: () => Y, TemporalUnit: () => T, TextStyle: () => Nt, UnsupportedTemporalTypeException: () => o, ValueRange: () => R, Year: () => Xt, YearConstants: () => w, YearMonth: () => jt, ZoneId: () => j, ZoneOffset: () => $, ZoneOffsetTransition: () => Ee, ZoneRegion: () => Ct, ZoneRules: () => G, ZoneRulesProvider: () => Yt, ZonedDateTime: () => re, _: () => Ie, convert: () => we, nativeJs: () => Me, use: () => Ye });
            var r = i("DateTimeException", function (t, e) {
                    void 0 === e && (e = null);
                    var n = t || this.name;
                    null !== e && e instanceof Error && (n += "\n-------\nCaused by: " + e.stack + "\n-------\n");
                    this.message = n;
                }),
                s = i("DateTimeParseException", function (t, e, n, i) {
                    void 0 === e && (e = "");
                    void 0 === n && (n = 0);
                    void 0 === i && (i = null);
                    var r = t || this.name;
                    (r += ": " + e + ", at index: " + n), null !== i && i instanceof Error && (r += "\n-------\nCaused by: " + i.stack + "\n-------\n");
                    (this.message = r),
                        (this.parsedString = function () {
                            return e;
                        }),
                        (this.errorIndex = function () {
                            return n;
                        });
                }),
                o = i("UnsupportedTemporalTypeException", null, r),
                a = i("ArithmeticException"),
                u = i("IllegalArgumentException"),
                h = i("IllegalStateException"),
                f = i("NullPointerException");
            function c(t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
            }
            function l(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ function _(t, e, n) {
                if (!t) throw n ? new n(e) : new Error(e);
            }
            function d(t, e) {
                if (null == t) throw new f(e + " must not be null");
                return t;
            }
            function p(t, e, n) {
                if (!(t instanceof e)) throw new u(n + " must be an instance of " + (e.name ? e.name : e) + (t && t.constructor && t.constructor.name ? ", but is " + t.constructor.name : ""));
                return t;
            }
            function m(t) {
                throw new TypeError('abstract method "' + t + '" is not implemented');
            }
            var O = Object.freeze({ __proto__: null, assert: _, requireNonNull: d, requireInstance: p, abstractMethodFail: m }),
                E = 9007199254740991,
                S = -9007199254740991,
                N = (function () {
                    function t() {}
                    return (
                        (t.intDiv = function (e, n) {
                            var i = e / n;
                            return (i = t.roundDown(i)), t.safeZero(i);
                        }),
                        (t.intMod = function (e, n) {
                            var i = e - t.intDiv(e, n) * n;
                            return (i = t.roundDown(i)), t.safeZero(i);
                        }),
                        (t.roundDown = function (t) {
                            return t < 0 ? Math.ceil(t) : Math.floor(t);
                        }),
                        (t.floorDiv = function (e, n) {
                            var i = Math.floor(e / n);
                            return t.safeZero(i);
                        }),
                        (t.floorMod = function (e, n) {
                            var i = e - t.floorDiv(e, n) * n;
                            return t.safeZero(i);
                        }),
                        (t.safeAdd = function (e, n) {
                            if ((t.verifyInt(e), t.verifyInt(n), 0 === e)) return t.safeZero(n);
                            if (0 === n) return t.safeZero(e);
                            var i = t.safeToInt(e + n);
                            if (i === e || i === n) throw new a("Invalid addition beyond MAX_SAFE_INTEGER!");
                            return i;
                        }),
                        (t.safeSubtract = function (e, n) {
                            return t.verifyInt(e), t.verifyInt(n), 0 === e && 0 === n ? 0 : 0 === e ? t.safeZero(-1 * n) : 0 === n ? t.safeZero(e) : t.safeToInt(e - n);
                        }),
                        (t.safeMultiply = function (e, n) {
                            if ((t.verifyInt(e), t.verifyInt(n), 1 === e)) return t.safeZero(n);
                            if (1 === n) return t.safeZero(e);
                            if (0 === e || 0 === n) return 0;
                            var i = t.safeToInt(e * n);
                            if (i / n !== e || (e === S && -1 === n) || (n === S && -1 === e)) throw new a("Multiplication overflows: " + e + " * " + n);
                            return i;
                        }),
                        (t.parseInt = (function (t) {
                            function e(e) {
                                return t.apply(this, arguments);
                            }
                            return (
                                (e.toString = function () {
                                    return t.toString();
                                }),
                                e
                            );
                        })(function (e) {
                            var n = parseInt(e);
                            return t.safeToInt(n);
                        })),
                        (t.safeToInt = function (e) {
                            return t.verifyInt(e), t.safeZero(e);
                        }),
                        (t.verifyInt = function (t) {
                            if (null == t) throw new a("Invalid value: '" + t + "', using null or undefined as argument");
                            if (isNaN(t)) throw new a("Invalid int value, using NaN as argument");
                            if (t % 1 != 0) throw new a("Invalid value: '" + t + "' is a float");
                            if (t > E || t < S) throw new a("Calculation overflows an int: " + t);
                        }),
                        (t.safeZero = function (t) {
                            return 0 === t ? 0 : +t;
                        }),
                        (t.compareNumbers = function (t, e) {
                            return t < e ? -1 : t > e ? 1 : 0;
                        }),
                        (t.smi = function (t) {
                            return ((t >>> 1) & 1073741824) | (3221225471 & t);
                        }),
                        (t.hash = function (e) {
                            if (e != e || e === 1 / 0) return 0;
                            for (var n = e; e > 4294967295; ) n ^= e /= 4294967295;
                            return t.smi(n);
                        }),
                        (t.hashCode = function () {
                            for (var e = 17, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            for (var s = 0, o = i; s < o.length; s++) {
                                var a = o[s];
                                e = (e << 5) - e + t.hash(a);
                            }
                            return t.hash(e);
                        }),
                        t
                    );
                })();
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ (N.MAX_SAFE_INTEGER = E), (N.MIN_SAFE_INTEGER = S);
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var D = (function () {
                    function t(t) {
                        this._name = t;
                    }
                    var e = t.prototype;
                    return (
                        (e.equals = function (t) {
                            return this === t;
                        }),
                        (e.toString = function () {
                            return this._name;
                        }),
                        (e.toJSON = function () {
                            return this.toString();
                        }),
                        t
                    );
                })(),
                A = (function () {
                    function t() {}
                    var e = t.prototype;
                    return (
                        (e.get = function (t) {
                            m("get");
                        }),
                        (e.units = function () {
                            m("units");
                        }),
                        (e.addTo = function (t) {
                            m("addTo");
                        }),
                        (e.subtractFrom = function (t) {
                            m("subtractFrom");
                        }),
                        t
                    );
                })(),
                T = (function () {
                    function t() {}
                    var e = t.prototype;
                    return (
                        (e.duration = function () {
                            m("duration");
                        }),
                        (e.isDurationEstimated = function () {
                            m("isDurationEstimated");
                        }),
                        (e.isDateBased = function () {
                            m("isDateBased");
                        }),
                        (e.isTimeBased = function () {
                            m("isTimeBased");
                        }),
                        (e.isSupportedBy = function (t) {
                            m("isSupportedBy");
                        }),
                        (e.addTo = function (t, e) {
                            m("addTo");
                        }),
                        (e.between = function (t, e) {
                            m("between");
                        }),
                        t
                    );
                })(),
                v = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._seconds = N.safeToInt(e)), (i._nanos = N.safeToInt(n)), i;
                    }
                    c(e, t),
                        (e.ofDays = function (t) {
                            return e._create(N.safeMultiply(t, ce.SECONDS_PER_DAY), 0);
                        }),
                        (e.ofHours = function (t) {
                            return e._create(N.safeMultiply(t, ce.SECONDS_PER_HOUR), 0);
                        }),
                        (e.ofMinutes = function (t) {
                            return e._create(N.safeMultiply(t, ce.SECONDS_PER_MINUTE), 0);
                        }),
                        (e.ofSeconds = function (t, n) {
                            void 0 === n && (n = 0);
                            var i = N.safeAdd(t, N.floorDiv(n, ce.NANOS_PER_SECOND)),
                                r = N.floorMod(n, ce.NANOS_PER_SECOND);
                            return e._create(i, r);
                        }),
                        (e.ofMillis = function (t) {
                            var n = N.intDiv(t, 1e3),
                                i = N.intMod(t, 1e3);
                            return i < 0 && ((i += 1e3), n--), e._create(n, 1e6 * i);
                        }),
                        (e.ofNanos = function (t) {
                            var e = N.intDiv(t, ce.NANOS_PER_SECOND),
                                n = N.intMod(t, ce.NANOS_PER_SECOND);
                            return n < 0 && ((n += ce.NANOS_PER_SECOND), e--), this._create(e, n);
                        }),
                        (e.of = function (t, n) {
                            return e.ZERO.plus(t, n);
                        }),
                        (e.from = function (t) {
                            d(t, "amount"), p(t, A);
                            var n = e.ZERO;
                            return (
                                t.units().forEach(function (e) {
                                    n = n.plus(t.get(e), e);
                                }),
                                n
                            );
                        }),
                        (e.between = function (t, e) {
                            d(t, "startInclusive"), d(e, "endExclusive");
                            var n = t.until(e, y.SECONDS),
                                i = 0;
                            if (t.isSupported(g.NANO_OF_SECOND) && e.isSupported(g.NANO_OF_SECOND))
                                try {
                                    var r = t.getLong(g.NANO_OF_SECOND);
                                    if (((i = e.getLong(g.NANO_OF_SECOND) - r), n > 0 && i < 0)) i += ce.NANOS_PER_SECOND;
                                    else if (n < 0 && i > 0) i -= ce.NANOS_PER_SECOND;
                                    else if (0 === n && 0 !== i) {
                                        var s = e.with(g.NANO_OF_SECOND, r);
                                        n = t.until(s, y.SECONDS);
                                    }
                                } catch (t) {}
                            return this.ofSeconds(n, i);
                        }),
                        (e.parse = function (t) {
                            d(t, "text");
                            var n = new RegExp("([-+]?)P(?:([-+]?[0-9]+)D)?(T(?:([-+]?[0-9]+)H)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)(?:[.,]([0-9]{0,9}))?S)?)?", "i").exec(t);
                            if (null !== n && ("T" === n[3]) == !1) {
                                var i = "-" === n[1],
                                    r = n[2],
                                    o = n[4],
                                    a = n[5],
                                    u = n[6],
                                    h = n[7];
                                if (null != r || null != o || null != a || null != u) {
                                    var f = e._parseNumber(t, r, ce.SECONDS_PER_DAY, "days"),
                                        c = e._parseNumber(t, o, ce.SECONDS_PER_HOUR, "hours"),
                                        l = e._parseNumber(t, a, ce.SECONDS_PER_MINUTE, "minutes"),
                                        _ = e._parseNumber(t, u, 1, "seconds"),
                                        p = null != u && "-" === u.charAt(0),
                                        m = e._parseFraction(t, h, p ? -1 : 1);
                                    try {
                                        return e._create(i, f, c, l, _, m);
                                    } catch (e) {
                                        throw new s("Text cannot be parsed to a Duration: overflow", t, 0, e);
                                    }
                                }
                            }
                            throw new s("Text cannot be parsed to a Duration", t, 0);
                        }),
                        (e._parseNumber = function (t, e, n, i) {
                            if (null == e) return 0;
                            try {
                                return "+" === e[0] && (e = e.substring(1)), N.safeMultiply(parseFloat(e), n);
                            } catch (e) {
                                throw new s("Text cannot be parsed to a Duration: " + i, t, 0, e);
                            }
                        }),
                        (e._parseFraction = function (t, e, n) {
                            return null == e || 0 === e.length ? 0 : ((e = (e + "000000000").substring(0, 9)), parseFloat(e) * n);
                        }),
                        (e._create = function () {
                            return arguments.length <= 2 ? e._createSecondsNanos(arguments[0], arguments[1]) : e._createNegateDaysHoursMinutesSecondsNanos(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        }),
                        (e._createNegateDaysHoursMinutesSecondsNanos = function (t, n, i, r, s, o) {
                            var a = N.safeAdd(n, N.safeAdd(i, N.safeAdd(r, s)));
                            return t ? e.ofSeconds(a, o).negated() : e.ofSeconds(a, o);
                        }),
                        (e._createSecondsNanos = function (t, n) {
                            return void 0 === t && (t = 0), void 0 === n && (n = 0), 0 === t && 0 === n ? e.ZERO : new e(t, n);
                        });
                    var n = e.prototype;
                    return (
                        (n.get = function (t) {
                            if (t === y.SECONDS) return this._seconds;
                            if (t === y.NANOS) return this._nanos;
                            throw new o("Unsupported unit: " + t);
                        }),
                        (n.units = function () {
                            return [y.SECONDS, y.NANOS];
                        }),
                        (n.isZero = function () {
                            return 0 === this._seconds && 0 === this._nanos;
                        }),
                        (n.isNegative = function () {
                            return this._seconds < 0;
                        }),
                        (n.seconds = function () {
                            return this._seconds;
                        }),
                        (n.nano = function () {
                            return this._nanos;
                        }),
                        (n.withSeconds = function (t) {
                            return e._create(t, this._nanos);
                        }),
                        (n.withNanos = function (t) {
                            return g.NANO_OF_SECOND.checkValidIntValue(t), e._create(this._seconds, t);
                        }),
                        (n.plusDuration = function (t) {
                            return d(t, "duration"), this.plus(t.seconds(), t.nano());
                        }),
                        (n.plus = function (t, e) {
                            return 1 === arguments.length ? this.plusDuration(t) : 2 === arguments.length && e instanceof T ? this.plusAmountUnit(t, e) : this.plusSecondsNanos(t, e);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(t, "amountToAdd"), d(e, "unit"), e === y.DAYS)) return this.plusSecondsNanos(N.safeMultiply(t, ce.SECONDS_PER_DAY), 0);
                            if (e.isDurationEstimated()) throw new o("Unit must not have an estimated duration");
                            if (0 === t) return this;
                            if (e instanceof y) {
                                switch (e) {
                                    case y.NANOS:
                                        return this.plusNanos(t);
                                    case y.MICROS:
                                        return this.plusSecondsNanos(1e3 * N.intDiv(t, 1e9), 1e3 * N.intMod(t, 1e9));
                                    case y.MILLIS:
                                        return this.plusMillis(t);
                                    case y.SECONDS:
                                        return this.plusSeconds(t);
                                }
                                return this.plusSecondsNanos(N.safeMultiply(e.duration().seconds(), t), 0);
                            }
                            var n = e.duration().multipliedBy(t);
                            return this.plusSecondsNanos(n.seconds(), n.nano());
                        }),
                        (n.plusDays = function (t) {
                            return this.plusSecondsNanos(N.safeMultiply(t, ce.SECONDS_PER_DAY), 0);
                        }),
                        (n.plusHours = function (t) {
                            return this.plusSecondsNanos(N.safeMultiply(t, ce.SECONDS_PER_HOUR), 0);
                        }),
                        (n.plusMinutes = function (t) {
                            return this.plusSecondsNanos(N.safeMultiply(t, ce.SECONDS_PER_MINUTE), 0);
                        }),
                        (n.plusSeconds = function (t) {
                            return this.plusSecondsNanos(t, 0);
                        }),
                        (n.plusMillis = function (t) {
                            return this.plusSecondsNanos(N.intDiv(t, 1e3), 1e6 * N.intMod(t, 1e3));
                        }),
                        (n.plusNanos = function (t) {
                            return this.plusSecondsNanos(0, t);
                        }),
                        (n.plusSecondsNanos = function (t, n) {
                            if ((d(t, "secondsToAdd"), d(n, "nanosToAdd"), 0 === t && 0 === n)) return this;
                            var i = N.safeAdd(this._seconds, t);
                            (i = N.safeAdd(i, N.intDiv(n, ce.NANOS_PER_SECOND))), (n = N.intMod(n, ce.NANOS_PER_SECOND));
                            var r = N.safeAdd(this._nanos, n);
                            return e.ofSeconds(i, r);
                        }),
                        (n.minus = function (t, e) {
                            return 1 === arguments.length ? this.minusDuration(t) : this.minusAmountUnit(t, e);
                        }),
                        (n.minusDuration = function (t) {
                            d(t, "duration");
                            var e = t.seconds(),
                                n = t.nano();
                            return e === S ? this.plus(E, -n) : this.plus(-e, -n);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return d(t, "amountToSubtract"), d(e, "unit"), t === S ? this.plusAmountUnit(E, e) : this.plusAmountUnit(-t, e);
                        }),
                        (n.minusDays = function (t) {
                            return t === S ? this.plusDays(E) : this.plusDays(-t);
                        }),
                        (n.minusHours = function (t) {
                            return t === S ? this.plusHours(E) : this.plusHours(-t);
                        }),
                        (n.minusMinutes = function (t) {
                            return t === S ? this.plusMinutes(E) : this.plusMinutes(-t);
                        }),
                        (n.minusSeconds = function (t) {
                            return t === S ? this.plusSeconds(E) : this.plusSeconds(-t);
                        }),
                        (n.minusMillis = function (t) {
                            return t === S ? this.plusMillis(E) : this.plusMillis(-t);
                        }),
                        (n.minusNanos = function (t) {
                            return t === S ? this.plusNanos(E) : this.plusNanos(-t);
                        }),
                        (n.multipliedBy = function (t) {
                            if (0 === t) return e.ZERO;
                            if (1 === t) return this;
                            var n = N.safeMultiply(this._seconds, t),
                                i = N.safeMultiply(this._nanos, t);
                            return (n += N.intDiv(i, ce.NANOS_PER_SECOND)), (i = N.intMod(i, ce.NANOS_PER_SECOND)), e.ofSeconds(n, i);
                        }),
                        (n.dividedBy = function (t) {
                            if (0 === t) throw new a("Cannot divide by zero");
                            if (1 === t) return this;
                            var n = N.intDiv(this._seconds, t),
                                i = N.roundDown((this._seconds / t - n) * ce.NANOS_PER_SECOND),
                                r = N.intDiv(this._nanos, t);
                            return (r = i + r), e.ofSeconds(n, r);
                        }),
                        (n.negated = function () {
                            return this.multipliedBy(-1);
                        }),
                        (n.abs = function () {
                            return this.isNegative() ? this.negated() : this;
                        }),
                        (n.addTo = function (t) {
                            return d(t, "temporal"), 0 !== this._seconds && (t = t.plus(this._seconds, y.SECONDS)), 0 !== this._nanos && (t = t.plus(this._nanos, y.NANOS)), t;
                        }),
                        (n.subtractFrom = function (t) {
                            return d(t, "temporal"), 0 !== this._seconds && (t = t.minus(this._seconds, y.SECONDS)), 0 !== this._nanos && (t = t.minus(this._nanos, y.NANOS)), t;
                        }),
                        (n.toDays = function () {
                            return N.intDiv(this._seconds, ce.SECONDS_PER_DAY);
                        }),
                        (n.toHours = function () {
                            return N.intDiv(this._seconds, ce.SECONDS_PER_HOUR);
                        }),
                        (n.toMinutes = function () {
                            return N.intDiv(this._seconds, ce.SECONDS_PER_MINUTE);
                        }),
                        (n.toMillis = function () {
                            var t = Math.round(N.safeMultiply(this._seconds, 1e3));
                            return (t = N.safeAdd(t, N.intDiv(this._nanos, 1e6)));
                        }),
                        (n.toNanos = function () {
                            var t = N.safeMultiply(this._seconds, ce.NANOS_PER_SECOND);
                            return (t = N.safeAdd(t, this._nanos));
                        }),
                        (n.compareTo = function (t) {
                            d(t, "otherDuration"), p(t, e, "otherDuration");
                            var n = N.compareNumbers(this._seconds, t.seconds());
                            return 0 !== n ? n : this._nanos - t.nano();
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this.seconds() === t.seconds() && this.nano() === t.nano());
                        }),
                        (n.toString = function () {
                            if (this === e.ZERO) return "PT0S";
                            var t,
                                n = N.intDiv(this._seconds, ce.SECONDS_PER_HOUR),
                                i = N.intDiv(N.intMod(this._seconds, ce.SECONDS_PER_HOUR), ce.SECONDS_PER_MINUTE),
                                r = N.intMod(this._seconds, ce.SECONDS_PER_MINUTE),
                                s = "PT";
                            if ((0 !== n && (s += n + "H"), 0 !== i && (s += i + "M"), 0 === r && 0 === this._nanos && s.length > 2)) return s;
                            if ((r < 0 && this._nanos > 0 ? (s += -1 === r ? "-0" : r + 1) : (s += r), this._nanos > 0)) for (s += ".", s += t = (t = r < 0 ? "" + (2 * ce.NANOS_PER_SECOND - this._nanos) : "" + (ce.NANOS_PER_SECOND + this._nanos)).slice(1, t.length); "0" === s.charAt(s.length - 1); ) s = s.slice(0, s.length - 1);
                            return (s += "S");
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        e
                    );
                })(A);
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE.md in the root directory of this source tree)
             */
            var w = function () {};
            var y = (function (t) {
                function e(e, n) {
                    var i;
                    return ((i = t.call(this) || this)._name = e), (i._duration = n), i;
                }
                c(e, t);
                var n = e.prototype;
                return (
                    (n.duration = function () {
                        return this._duration;
                    }),
                    (n.isDurationEstimated = function () {
                        return this.isDateBased() || this === e.FOREVER;
                    }),
                    (n.isDateBased = function () {
                        return this.compareTo(e.DAYS) >= 0 && this !== e.FOREVER;
                    }),
                    (n.isTimeBased = function () {
                        return this.compareTo(e.DAYS) < 0;
                    }),
                    (n.isSupportedBy = function (t) {
                        if (this === e.FOREVER) return !1;
                        try {
                            return t.plus(1, this), !0;
                        } catch (e) {
                            try {
                                return t.plus(-1, this), !0;
                            } catch (t) {
                                return !1;
                            }
                        }
                    }),
                    (n.addTo = function (t, e) {
                        return t.plus(e, this);
                    }),
                    (n.between = function (t, e) {
                        return t.until(e, this);
                    }),
                    (n.toString = function () {
                        return this._name;
                    }),
                    (n.compareTo = function (t) {
                        return this.duration().compareTo(t.duration());
                    }),
                    e
                );
            })(T);
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var M = (function () {
                    function t() {}
                    var e = t.prototype;
                    return (
                        (e.isDateBased = function () {
                            m("isDateBased");
                        }),
                        (e.isTimeBased = function () {
                            m("isTimeBased");
                        }),
                        (e.baseUnit = function () {
                            m("baseUnit");
                        }),
                        (e.rangeUnit = function () {
                            m("rangeUnit");
                        }),
                        (e.range = function () {
                            m("range");
                        }),
                        (e.rangeRefinedBy = function (t) {
                            m("rangeRefinedBy");
                        }),
                        (e.getFrom = function (t) {
                            m("getFrom");
                        }),
                        (e.adjustInto = function (t, e) {
                            m("adjustInto");
                        }),
                        (e.isSupportedBy = function (t) {
                            m("isSupportedBy");
                        }),
                        (e.displayName = function () {
                            m("displayName");
                        }),
                        (e.equals = function (t) {
                            m("equals");
                        }),
                        (e.name = function () {
                            m("name");
                        }),
                        t
                    );
                })(),
                R = (function () {
                    function t(t, e, n, i) {
                        _(!(t > e), "Smallest minimum value '" + t + "' must be less than largest minimum value '" + e + "'", u), _(!(n > i), "Smallest maximum value '" + n + "' must be less than largest maximum value '" + i + "'", u), _(!(e > i), "Minimum value '" + e + "' must be less than maximum value '" + i + "'", u), (this._minSmallest = t), (this._minLargest = e), (this._maxLargest = i), (this._maxSmallest = n);
                    }
                    var e = t.prototype;
                    return (
                        (e.isFixed = function () {
                            return this._minSmallest === this._minLargest && this._maxSmallest === this._maxLargest;
                        }),
                        (e.minimum = function () {
                            return this._minSmallest;
                        }),
                        (e.largestMinimum = function () {
                            return this._minLargest;
                        }),
                        (e.maximum = function () {
                            return this._maxLargest;
                        }),
                        (e.smallestMaximum = function () {
                            return this._maxSmallest;
                        }),
                        (e.isValidValue = function (t) {
                            return this.minimum() <= t && t <= this.maximum();
                        }),
                        (e.checkValidValue = function (t, e) {
                            return this.isValidValue(t) ? t : _(!1, null != e ? "Invalid value for " + e + " (valid values " + this.toString() + "): " + t : "Invalid value (valid values " + this.toString() + "): " + t, r);
                        }),
                        (e.checkValidIntValue = function (t, e) {
                            if (!1 === this.isValidIntValue(t)) throw new r("Invalid int value for " + e + ": " + t);
                            return t;
                        }),
                        (e.isValidIntValue = function (t) {
                            return this.isIntValue() && this.isValidValue(t);
                        }),
                        (e.isIntValue = function () {
                            return this.minimum() >= N.MIN_SAFE_INTEGER && this.maximum() <= N.MAX_SAFE_INTEGER;
                        }),
                        (e.equals = function (e) {
                            return e === this || (e instanceof t && this._minSmallest === e._minSmallest && this._minLargest === e._minLargest && this._maxSmallest === e._maxSmallest && this._maxLargest === e._maxLargest);
                        }),
                        (e.hashCode = function () {
                            return N.hashCode(this._minSmallest, this._minLargest, this._maxSmallest, this._maxLargest);
                        }),
                        (e.toString = function () {
                            var t = this.minimum() + (this.minimum() !== this.largestMinimum() ? "/" + this.largestMinimum() : "");
                            return (t += " - "), (t += this.smallestMaximum() + (this.smallestMaximum() !== this.maximum() ? "/" + this.maximum() : ""));
                        }),
                        (t.of = function () {
                            return 2 === arguments.length ? new t(arguments[0], arguments[0], arguments[1], arguments[1]) : 3 === arguments.length ? new t(arguments[0], arguments[0], arguments[1], arguments[2]) : 4 === arguments.length ? new t(arguments[0], arguments[1], arguments[2], arguments[3]) : _(!1, "Invalid number of arguments " + arguments.length, u);
                        }),
                        t
                    );
                })(),
                g = (function (t) {
                    function e(e, n, i, r) {
                        var s;
                        return ((s = t.call(this) || this)._name = e), (s._baseUnit = n), (s._rangeUnit = i), (s._range = r), s;
                    }
                    c(e, t),
                        (e.byName = function (t) {
                            for (var n in e) if (e[n] && e[n] instanceof e && e[n].name() === t) return e[n];
                        });
                    var n = e.prototype;
                    return (
                        (n.name = function () {
                            return this._name;
                        }),
                        (n.baseUnit = function () {
                            return this._baseUnit;
                        }),
                        (n.rangeUnit = function () {
                            return this._rangeUnit;
                        }),
                        (n.range = function () {
                            return this._range;
                        }),
                        (n.displayName = function () {
                            return this.toString();
                        }),
                        (n.checkValidValue = function (t) {
                            return this.range().checkValidValue(t, this);
                        }),
                        (n.checkValidIntValue = function (t) {
                            return this.range().checkValidIntValue(t, this);
                        }),
                        (n.isDateBased = function () {
                            return this === e.DAY_OF_WEEK || this === e.ALIGNED_DAY_OF_WEEK_IN_MONTH || this === e.ALIGNED_DAY_OF_WEEK_IN_YEAR || this === e.DAY_OF_MONTH || this === e.DAY_OF_YEAR || this === e.EPOCH_DAY || this === e.ALIGNED_WEEK_OF_MONTH || this === e.ALIGNED_WEEK_OF_YEAR || this === e.MONTH_OF_YEAR || this === e.YEAR_OF_ERA || this === e.YEAR || this === e.ERA;
                        }),
                        (n.isTimeBased = function () {
                            return this === e.NANO_OF_SECOND || this === e.NANO_OF_DAY || this === e.MICRO_OF_SECOND || this === e.MICRO_OF_DAY || this === e.MILLI_OF_SECOND || this === e.MILLI_OF_DAY || this === e.SECOND_OF_MINUTE || this === e.SECOND_OF_DAY || this === e.MINUTE_OF_HOUR || this === e.MINUTE_OF_DAY || this === e.HOUR_OF_AMPM || this === e.CLOCK_HOUR_OF_AMPM || this === e.HOUR_OF_DAY || this === e.CLOCK_HOUR_OF_DAY || this === e.AMPM_OF_DAY;
                        }),
                        (n.rangeRefinedBy = function (t) {
                            return t.range(this);
                        }),
                        (n.getFrom = function (t) {
                            return t.getLong(this);
                        }),
                        (n.toString = function () {
                            return this.name();
                        }),
                        (n.equals = function (t) {
                            return this === t;
                        }),
                        (n.adjustInto = function (t, e) {
                            return t.with(this, e);
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(this);
                        }),
                        e
                    );
                })(M);
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var I = (function () {
                    function t() {}
                    return (
                        (t.zoneId = function () {
                            return t.ZONE_ID;
                        }),
                        (t.chronology = function () {
                            return t.CHRONO;
                        }),
                        (t.precision = function () {
                            return t.PRECISION;
                        }),
                        (t.zone = function () {
                            return t.ZONE;
                        }),
                        (t.offset = function () {
                            return t.OFFSET;
                        }),
                        (t.localDate = function () {
                            return t.LOCAL_DATE;
                        }),
                        (t.localTime = function () {
                            return t.LOCAL_TIME;
                        }),
                        t
                    );
                })(),
                F = (function () {
                    function t() {}
                    var e = t.prototype;
                    return (
                        (e.query = function (t) {
                            return t === I.zoneId() || t === I.chronology() || t === I.precision() ? null : t.queryFrom(this);
                        }),
                        (e.get = function (t) {
                            return this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (e.range = function (t) {
                            if (t instanceof g) {
                                if (this.isSupported(t)) return t.range();
                                throw new o("Unsupported field: " + t);
                            }
                            return t.rangeRefinedBy(this);
                        }),
                        t
                    );
                })(),
                Y = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return (
                        c(e, t),
                        (e.prototype.queryFrom = function (t) {
                            m("queryFrom");
                        }),
                        e
                    );
                })(D);
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ function C(t, e) {
                var n = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return c(e, t), e;
                })(Y);
                return (n.prototype.queryFrom = e), new n(t);
            }
            var L,
                U = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._ordinal = e), (i._name = n), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.ordinal = function () {
                            return this._ordinal;
                        }),
                        (n.name = function () {
                            return this._name;
                        }),
                        (e.values = function () {
                            return L.slice();
                        }),
                        (e.valueOf = function (t) {
                            for (var n = 0; n < L.length && L[n].name() !== t; n++);
                            return e.of(n + 1);
                        }),
                        (e.of = function (t) {
                            if (t < 1 || t > 7) throw new r("Invalid value for DayOfWeek: " + t);
                            return L[t - 1];
                        }),
                        (e.from = function (t) {
                            if ((_(null != t, "temporal", f), t instanceof e)) return t;
                            try {
                                return e.of(t.get(g.DAY_OF_WEEK));
                            } catch (e) {
                                throw e instanceof r ? new r("Unable to obtain DayOfWeek from TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""), e) : e;
                            }
                        }),
                        (n.value = function () {
                            return this._ordinal + 1;
                        }),
                        (n.displayName = function (t, e) {
                            throw new u("Pattern using (localized) text not implemented yet!");
                        }),
                        (n.isSupported = function (t) {
                            return t instanceof g ? t === g.DAY_OF_WEEK : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (t) {
                            if (t === g.DAY_OF_WEEK) return t.range();
                            if (t instanceof g) throw new o("Unsupported field: " + t);
                            return t.rangeRefinedBy(this);
                        }),
                        (n.get = function (t) {
                            return t === g.DAY_OF_WEEK ? this.value() : this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (n.getLong = function (t) {
                            if (t === g.DAY_OF_WEEK) return this.value();
                            if (t instanceof g) throw new o("Unsupported field: " + t);
                            return t.getFrom(this);
                        }),
                        (n.plus = function (t) {
                            var e = N.floorMod(t, 7);
                            return L[N.floorMod(this._ordinal + (e + 7), 7)];
                        }),
                        (n.minus = function (t) {
                            return this.plus(-1 * N.floorMod(t, 7));
                        }),
                        (n.query = function (t) {
                            return t === I.precision() ? y.DAYS : t === I.localDate() || t === I.localTime() || t === I.chronology() || t === I.zone() || t === I.zoneId() || t === I.offset() ? null : (_(null != t, "query", f), t.queryFrom(this));
                        }),
                        (n.adjustInto = function (t) {
                            return d(t, "temporal"), t.with(g.DAY_OF_WEEK, this.value());
                        }),
                        (n.equals = function (t) {
                            return this === t;
                        }),
                        (n.toString = function () {
                            return this._name;
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._ordinal - t._ordinal;
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        e
                    );
                })(F);
            var P,
                V = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._value = N.safeToInt(e)), (i._name = n), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.value = function () {
                            return this._value;
                        }),
                        (n.ordinal = function () {
                            return this._value - 1;
                        }),
                        (n.name = function () {
                            return this._name;
                        }),
                        (n.displayName = function (t, e) {
                            throw new u("Pattern using (localized) text not implemented yet!");
                        }),
                        (n.isSupported = function (t) {
                            return null !== t && (t instanceof g ? t === g.MONTH_OF_YEAR : null != t && t.isSupportedBy(this));
                        }),
                        (n.get = function (t) {
                            return t === g.MONTH_OF_YEAR ? this.value() : this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (n.getLong = function (t) {
                            if (t === g.MONTH_OF_YEAR) return this.value();
                            if (t instanceof g) throw new o("Unsupported field: " + t);
                            return t.getFrom(this);
                        }),
                        (n.plus = function (t) {
                            var n = N.intMod(t, 12) + 12,
                                i = N.intMod(this.value() + n, 12);
                            return (i = 0 === i ? 12 : i), e.of(i);
                        }),
                        (n.minus = function (t) {
                            return this.plus(-1 * N.intMod(t, 12));
                        }),
                        (n.length = function (t) {
                            switch (this) {
                                case e.FEBRUARY:
                                    return t ? 29 : 28;
                                case e.APRIL:
                                case e.JUNE:
                                case e.SEPTEMBER:
                                case e.NOVEMBER:
                                    return 30;
                                default:
                                    return 31;
                            }
                        }),
                        (n.minLength = function () {
                            switch (this) {
                                case e.FEBRUARY:
                                    return 28;
                                case e.APRIL:
                                case e.JUNE:
                                case e.SEPTEMBER:
                                case e.NOVEMBER:
                                    return 30;
                                default:
                                    return 31;
                            }
                        }),
                        (n.maxLength = function () {
                            switch (this) {
                                case e.FEBRUARY:
                                    return 29;
                                case e.APRIL:
                                case e.JUNE:
                                case e.SEPTEMBER:
                                case e.NOVEMBER:
                                    return 30;
                                default:
                                    return 31;
                            }
                        }),
                        (n.firstDayOfYear = function (t) {
                            var n = t ? 1 : 0;
                            switch (this) {
                                case e.JANUARY:
                                    return 1;
                                case e.FEBRUARY:
                                    return 32;
                                case e.MARCH:
                                    return 60 + n;
                                case e.APRIL:
                                    return 91 + n;
                                case e.MAY:
                                    return 121 + n;
                                case e.JUNE:
                                    return 152 + n;
                                case e.JULY:
                                    return 182 + n;
                                case e.AUGUST:
                                    return 213 + n;
                                case e.SEPTEMBER:
                                    return 244 + n;
                                case e.OCTOBER:
                                    return 274 + n;
                                case e.NOVEMBER:
                                    return 305 + n;
                                case e.DECEMBER:
                                default:
                                    return 335 + n;
                            }
                        }),
                        (n.firstMonthOfQuarter = function () {
                            switch (this) {
                                case e.JANUARY:
                                case e.FEBRUARY:
                                case e.MARCH:
                                    return e.JANUARY;
                                case e.APRIL:
                                case e.MAY:
                                case e.JUNE:
                                    return e.APRIL;
                                case e.JULY:
                                case e.AUGUST:
                                case e.SEPTEMBER:
                                    return e.JULY;
                                case e.OCTOBER:
                                case e.NOVEMBER:
                                case e.DECEMBER:
                                default:
                                    return e.OCTOBER;
                            }
                        }),
                        (n.query = function (e) {
                            return _(null != e, "query() parameter must not be null", r), e === I.chronology() ? ee.INSTANCE : e === I.precision() ? y.MONTHS : t.prototype.query.call(this, e);
                        }),
                        (n.toString = function () {
                            switch (this) {
                                case e.JANUARY:
                                    return "JANUARY";
                                case e.FEBRUARY:
                                    return "FEBRUARY";
                                case e.MARCH:
                                    return "MARCH";
                                case e.APRIL:
                                    return "APRIL";
                                case e.MAY:
                                    return "MAY";
                                case e.JUNE:
                                    return "JUNE";
                                case e.JULY:
                                    return "JULY";
                                case e.AUGUST:
                                    return "AUGUST";
                                case e.SEPTEMBER:
                                    return "SEPTEMBER";
                                case e.OCTOBER:
                                    return "OCTOBER";
                                case e.NOVEMBER:
                                    return "NOVEMBER";
                                case e.DECEMBER:
                                    return "DECEMBER";
                                default:
                                    return "unknown Month, value: " + this.value();
                            }
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.adjustInto = function (t) {
                            return t.with(g.MONTH_OF_YEAR, this.value());
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._value - t._value;
                        }),
                        (n.equals = function (t) {
                            return this === t;
                        }),
                        (e.valueOf = function (t) {
                            for (var n = 0; n < P.length && P[n].name() !== t; n++);
                            return e.of(n + 1);
                        }),
                        (e.values = function () {
                            return P.slice();
                        }),
                        (e.of = function (t) {
                            return (t < 1 || t > 12) && _(!1, "Invalid value for MonthOfYear: " + t, r), P[t - 1];
                        }),
                        (e.from = function (t) {
                            if (t instanceof e) return t;
                            try {
                                return e.of(t.get(g.MONTH_OF_YEAR));
                            } catch (e) {
                                throw new r("Unable to obtain Month from TemporalAccessor: " + t + " of type " + (t && null != t.constructor ? t.constructor.name : ""), e);
                            }
                        }),
                        e
                    );
                })(F);
            var b = /([-+]?)P(?:([-+]?[0-9]+)Y)?(?:([-+]?[0-9]+)M)?(?:([-+]?[0-9]+)W)?(?:([-+]?[0-9]+)D)?/,
                H = (function (t) {
                    function e(n, i, r) {
                        var s;
                        s = t.call(this) || this;
                        var o = N.safeToInt(n),
                            a = N.safeToInt(i),
                            u = N.safeToInt(r);
                        return 0 === o && 0 === a && 0 === u ? (e.ZERO || ((s._years = o), (s._months = a), (s._days = u), (e.ZERO = l(s))), e.ZERO || l(s)) : ((s._years = o), (s._months = a), (s._days = u), s);
                    }
                    c(e, t),
                        (e.ofYears = function (t) {
                            return e.create(t, 0, 0);
                        }),
                        (e.ofMonths = function (t) {
                            return e.create(0, t, 0);
                        }),
                        (e.ofWeeks = function (t) {
                            return e.create(0, 0, N.safeMultiply(t, 7));
                        }),
                        (e.ofDays = function (t) {
                            return e.create(0, 0, t);
                        }),
                        (e.of = function (t, n, i) {
                            return e.create(t, n, i);
                        }),
                        (e.from = function (t) {
                            if (t instanceof e) return t;
                            d(t, "amount");
                            for (var n = 0, i = 0, s = 0, o = t.units(), a = 0; a < o.length; a++) {
                                var u = o[a],
                                    h = t.get(u);
                                if (u === y.YEARS) n = N.safeToInt(h);
                                else if (u === y.MONTHS) i = N.safeToInt(h);
                                else {
                                    if (u !== y.DAYS) throw new r("Unit must be Years, Months or Days, but was " + u);
                                    s = N.safeToInt(h);
                                }
                            }
                            return e.create(n, i, s);
                        }),
                        (e.between = function (t, e) {
                            return d(t, "startDate"), d(e, "endDate"), p(t, ue, "startDate"), p(e, ue, "endDate"), t.until(e);
                        }),
                        (e.parse = function (t) {
                            d(t, "text");
                            try {
                                return e._parse(t);
                            } catch (e) {
                                throw e instanceof a ? new s("Text cannot be parsed to a Period", t, 0, e) : e;
                            }
                        }),
                        (e._parse = function (t) {
                            var n = b.exec(t);
                            if (null != n) {
                                var i = "-" === n[1] ? -1 : 1,
                                    r = n[2],
                                    o = n[3],
                                    a = n[4],
                                    u = n[5];
                                if (null != r || null != o || null != a || null != u) {
                                    var h = e._parseNumber(t, r, i),
                                        f = e._parseNumber(t, o, i),
                                        c = e._parseNumber(t, a, i),
                                        l = e._parseNumber(t, u, i);
                                    return (l = N.safeAdd(l, N.safeMultiply(c, 7))), e.create(h, f, l);
                                }
                            }
                            throw new s("Text cannot be parsed to a Period", t, 0);
                        }),
                        (e._parseNumber = function (t, e, n) {
                            if (null == e) return 0;
                            var i = N.parseInt(e);
                            return N.safeMultiply(i, n);
                        }),
                        (e.create = function (t, n, i) {
                            return new e(t, n, i);
                        });
                    var n = e.prototype;
                    return (
                        (n.units = function () {
                            return [y.YEARS, y.MONTHS, y.DAYS];
                        }),
                        (n.chronology = function () {
                            return ee.INSTANCE;
                        }),
                        (n.get = function (t) {
                            if (t === y.YEARS) return this._years;
                            if (t === y.MONTHS) return this._months;
                            if (t === y.DAYS) return this._days;
                            throw new o("Unsupported unit: " + t);
                        }),
                        (n.isZero = function () {
                            return this === e.ZERO;
                        }),
                        (n.isNegative = function () {
                            return this._years < 0 || this._months < 0 || this._days < 0;
                        }),
                        (n.years = function () {
                            return this._years;
                        }),
                        (n.months = function () {
                            return this._months;
                        }),
                        (n.days = function () {
                            return this._days;
                        }),
                        (n.withYears = function (t) {
                            return t === this._years ? this : e.create(t, this._months, this._days);
                        }),
                        (n.withMonths = function (t) {
                            return t === this._months ? this : e.create(this._years, t, this._days);
                        }),
                        (n.withDays = function (t) {
                            return t === this._days ? this : e.create(this._years, this._months, t);
                        }),
                        (n.plus = function (t) {
                            var n = e.from(t);
                            return e.create(N.safeAdd(this._years, n._years), N.safeAdd(this._months, n._months), N.safeAdd(this._days, n._days));
                        }),
                        (n.plusYears = function (t) {
                            return 0 === t ? this : e.create(N.safeToInt(N.safeAdd(this._years, t)), this._months, this._days);
                        }),
                        (n.plusMonths = function (t) {
                            return 0 === t ? this : e.create(this._years, N.safeToInt(N.safeAdd(this._months, t)), this._days);
                        }),
                        (n.plusDays = function (t) {
                            return 0 === t ? this : e.create(this._years, this._months, N.safeToInt(N.safeAdd(this._days, t)));
                        }),
                        (n.minus = function (t) {
                            var n = e.from(t);
                            return e.create(N.safeSubtract(this._years, n._years), N.safeSubtract(this._months, n._months), N.safeSubtract(this._days, n._days));
                        }),
                        (n.minusYears = function (t) {
                            return this.plusYears(-1 * t);
                        }),
                        (n.minusMonths = function (t) {
                            return this.plusMonths(-1 * t);
                        }),
                        (n.minusDays = function (t) {
                            return this.plusDays(-1 * t);
                        }),
                        (n.multipliedBy = function (t) {
                            return this === e.ZERO || 1 === t ? this : e.create(N.safeMultiply(this._years, t), N.safeMultiply(this._months, t), N.safeMultiply(this._days, t));
                        }),
                        (n.negated = function () {
                            return this.multipliedBy(-1);
                        }),
                        (n.normalized = function () {
                            var t = this.toTotalMonths(),
                                n = N.intDiv(t, 12),
                                i = N.intMod(t, 12);
                            return n === this._years && i === this._months ? this : e.create(N.safeToInt(n), i, this._days);
                        }),
                        (n.toTotalMonths = function () {
                            return 12 * this._years + this._months;
                        }),
                        (n.addTo = function (t) {
                            return d(t, "temporal"), 0 !== this._years ? (t = 0 !== this._months ? t.plus(this.toTotalMonths(), y.MONTHS) : t.plus(this._years, y.YEARS)) : 0 !== this._months && (t = t.plus(this._months, y.MONTHS)), 0 !== this._days && (t = t.plus(this._days, y.DAYS)), t;
                        }),
                        (n.subtractFrom = function (t) {
                            return d(t, "temporal"), 0 !== this._years ? (t = 0 !== this._months ? t.minus(this.toTotalMonths(), y.MONTHS) : t.minus(this._years, y.YEARS)) : 0 !== this._months && (t = t.minus(this._months, y.MONTHS)), 0 !== this._days && (t = t.minus(this._days, y.DAYS)), t;
                        }),
                        (n.equals = function (t) {
                            if (this === t) return !0;
                            if (t instanceof e) {
                                var n = t;
                                return this._years === n._years && this._months === n._months && this._days === n._days;
                            }
                            return !1;
                        }),
                        (n.hashCode = function () {
                            return N.hashCode(this._years, this._months, this._days);
                        }),
                        (n.toString = function () {
                            if (this === e.ZERO) return "P0D";
                            var t = "P";
                            return 0 !== this._years && (t += this._years + "Y"), 0 !== this._months && (t += this._months + "M"), 0 !== this._days && (t += this._days + "D"), t;
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        e
                    );
                })(A);
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var W = (function () {
                    function t(t) {
                        (this._index = t), (this._errorIndex = -1);
                    }
                    var e = t.prototype;
                    return (
                        (e.getIndex = function () {
                            return this._index;
                        }),
                        (e.setIndex = function (t) {
                            this._index = t;
                        }),
                        (e.getErrorIndex = function () {
                            return this._errorIndex;
                        }),
                        (e.setErrorIndex = function (t) {
                            this._errorIndex = t;
                        }),
                        t
                    );
                })(),
                x = (function () {
                    function t() {
                        this._map = {};
                    }
                    var e = t.prototype;
                    return (
                        (e.putAll = function (t) {
                            for (var e in t._map) this._map[e] = t._map[e];
                            return this;
                        }),
                        (e.containsKey = function (t) {
                            return this._map.hasOwnProperty(t.name()) && void 0 !== this.get(t);
                        }),
                        (e.get = function (t) {
                            return this._map[t.name()];
                        }),
                        (e.put = function (t, e) {
                            return this.set(t, e);
                        }),
                        (e.set = function (t, e) {
                            return (this._map[t.name()] = e), this;
                        }),
                        (e.retainAll = function (t) {
                            for (var e = {}, n = 0; n < t.length; n++) {
                                var i = t[n].name();
                                e[i] = this._map[i];
                            }
                            return (this._map = e), this;
                        }),
                        (e.remove = function (t) {
                            var e = t.name(),
                                n = this._map[e];
                            return (this._map[e] = void 0), n;
                        }),
                        (e.keySet = function () {
                            return this._map;
                        }),
                        (e.clear = function () {
                            this._map = {};
                        }),
                        t
                    );
                })(),
                k = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return c(e, t), e;
                })(D);
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ (k.STRICT = new k("STRICT")), (k.SMART = new k("SMART")), (k.LENIENT = new k("LENIENT"));
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var B = (function () {
                    function t() {}
                    return (
                        (t.prototype.adjustInto = function (t) {
                            m("adjustInto");
                        }),
                        t
                    );
                })(),
                q = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.isSupported = function (t) {
                            m("isSupported");
                        }),
                        (n.minus = function (t, e) {
                            return arguments.length < 2 ? this.minusAmount(t) : this.minusAmountUnit(t, e);
                        }),
                        (n.minusAmount = function (t) {
                            m("minusAmount");
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            m("minusAmountUnit");
                        }),
                        (n.plus = function (t, e) {
                            return arguments.length < 2 ? this.plusAmount(t) : this.plusAmountUnit(t, e);
                        }),
                        (n.plusAmount = function (t) {
                            m("plusAmount");
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            m("plusAmountUnit");
                        }),
                        (n.until = function (t, e) {
                            m("until");
                        }),
                        (n.with = function (t, e) {
                            return arguments.length < 2 ? this.withAdjuster(t) : this.withFieldValue(t, e);
                        }),
                        (n.withAdjuster = function (t) {
                            m("withAdjuster");
                        }),
                        (n.withFieldValue = function (t, e) {
                            m("withFieldValue");
                        }),
                        e
                    );
                })(F),
                Z = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), p(t, B, "adjuster"), t.adjustInto(this);
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), p(t, A, "amount"), t.addTo(this);
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), p(t, A, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return d(t, "amountToSubtract"), d(e, "unit"), p(e, T, "unit"), t === S ? this.plusAmountUnit(E, e).plusAmountUnit(1, e) : this.plusAmount(-t, e);
                        }),
                        e
                    );
                })(q),
                z = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.isSupported = function (t) {
                            return t instanceof g || t instanceof y ? t.isDateBased() : null != t && t.isSupportedBy(this);
                        }),
                        (n.query = function (e) {
                            return e === I.chronology() ? this.chronology() : e === I.precision() ? y.DAYS : e === I.localDate() ? ue.ofEpochDay(this.toEpochDay()) : e === I.localTime() || e === I.zone() || e === I.zoneId() || e === I.offset() ? null : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (t) {
                            return t.with(g.EPOCH_DAY, this.toEpochDay());
                        }),
                        (n.format = function (t) {
                            return d(t, "formatter"), p(t, qt, "formatter"), t.format(this);
                        }),
                        e
                    );
                })(Z),
                K = (function () {
                    function t() {}
                    return (
                        (t.startsWith = function (t, e) {
                            return 0 === t.indexOf(e);
                        }),
                        (t.hashCode = function (t) {
                            var e = t.length;
                            if (0 === e) return 0;
                            for (var n = 0, i = 0; i < e; i++) {
                                (n = (n << 5) - n + t.charCodeAt(i)), (n |= 0);
                            }
                            return N.smi(n);
                        }),
                        t
                    );
                })(),
                j = (function () {
                    function t() {}
                    (t.systemDefault = function () {
                        throw new r("not supported operation");
                    }),
                        (t.getAvailableZoneIds = function () {
                            throw new r("not supported operation");
                        }),
                        (t.of = function (t) {
                            throw new r("not supported operation" + t);
                        }),
                        (t.ofOffset = function (t, e) {
                            throw new r("not supported operation" + t + e);
                        }),
                        (t.from = function (t) {
                            throw new r("not supported operation" + t);
                        });
                    var e = t.prototype;
                    return (
                        (e.id = function () {
                            m("ZoneId.id");
                        }),
                        (e.rules = function () {
                            m("ZoneId.rules");
                        }),
                        (e.normalized = function () {
                            var t = this.rules();
                            return t.isFixedOffset() ? t.offset(_e.EPOCH) : this;
                        }),
                        (e.equals = function (e) {
                            return this === e || (e instanceof t && this.id() === e.id());
                        }),
                        (e.hashCode = function () {
                            return K.hashCode(this.id());
                        }),
                        (e.toString = function () {
                            return this.id();
                        }),
                        (e.toJSON = function () {
                            return this.toString();
                        }),
                        t
                    );
                })(),
                G = (function () {
                    function t() {}
                    t.of = function (t) {
                        return d(t, "offset"), new X(t);
                    };
                    var e = t.prototype;
                    return (
                        (e.isFixedOffset = function () {
                            m("ZoneRules.isFixedOffset");
                        }),
                        (e.offset = function (t) {
                            return t instanceof _e ? this.offsetOfInstant(t) : this.offsetOfLocalDateTime(t);
                        }),
                        (e.offsetOfInstant = function (t) {
                            m("ZoneRules.offsetInstant");
                        }),
                        (e.offsetOfEpochMilli = function (t) {
                            m("ZoneRules.offsetOfEpochMilli");
                        }),
                        (e.offsetOfLocalDateTime = function (t) {
                            m("ZoneRules.offsetLocalDateTime");
                        }),
                        (e.validOffsets = function (t) {
                            m("ZoneRules.validOffsets");
                        }),
                        (e.transition = function (t) {
                            m("ZoneRules.transition");
                        }),
                        (e.standardOffset = function (t) {
                            m("ZoneRules.standardOffset");
                        }),
                        (e.daylightSavings = function (t) {
                            m("ZoneRules.daylightSavings");
                        }),
                        (e.isDaylightSavings = function (t) {
                            m("ZoneRules.isDaylightSavings");
                        }),
                        (e.isValidOffset = function (t, e) {
                            m("ZoneRules.isValidOffset");
                        }),
                        (e.nextTransition = function (t) {
                            m("ZoneRules.nextTransition");
                        }),
                        (e.previousTransition = function (t) {
                            m("ZoneRules.previousTransition");
                        }),
                        (e.transitions = function () {
                            m("ZoneRules.transitions");
                        }),
                        (e.transitionRules = function () {
                            m("ZoneRules.transitionRules");
                        }),
                        (e.toString = function () {
                            m("ZoneRules.toString");
                        }),
                        (e.toJSON = function () {
                            return this.toString();
                        }),
                        t
                    );
                })(),
                X = (function (t) {
                    function e(e) {
                        var n;
                        return ((n = t.call(this) || this)._offset = e), n;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.isFixedOffset = function () {
                            return !0;
                        }),
                        (n.offsetOfInstant = function () {
                            return this._offset;
                        }),
                        (n.offsetOfEpochMilli = function () {
                            return this._offset;
                        }),
                        (n.offsetOfLocalDateTime = function () {
                            return this._offset;
                        }),
                        (n.validOffsets = function () {
                            return [this._offset];
                        }),
                        (n.transition = function () {
                            return null;
                        }),
                        (n.standardOffset = function () {
                            return this._offset;
                        }),
                        (n.daylightSavings = function () {
                            return v.ZERO;
                        }),
                        (n.isDaylightSavings = function () {
                            return !1;
                        }),
                        (n.isValidOffset = function (t, e) {
                            return this._offset.equals(e);
                        }),
                        (n.nextTransition = function () {
                            return null;
                        }),
                        (n.previousTransition = function () {
                            return null;
                        }),
                        (n.transitions = function () {
                            return [];
                        }),
                        (n.transitionRules = function () {
                            return [];
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this._offset.equals(t._offset));
                        }),
                        (n.toString = function () {
                            return "FixedRules:" + this._offset.toString();
                        }),
                        e
                    );
                })(G),
                J = {},
                Q = {},
                $ = (function (t) {
                    function e(n) {
                        var i;
                        return (i = t.call(this) || this), e._validateTotalSeconds(n), (i._totalSeconds = N.safeToInt(n)), (i._rules = G.of(l(i))), (i._id = e._buildId(n)), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.totalSeconds = function () {
                            return this._totalSeconds;
                        }),
                        (n.id = function () {
                            return this._id;
                        }),
                        (e._buildId = function (t) {
                            if (0 === t) return "Z";
                            var e = Math.abs(t),
                                n = N.intDiv(e, ce.SECONDS_PER_HOUR),
                                i = N.intMod(N.intDiv(e, ce.SECONDS_PER_MINUTE), ce.MINUTES_PER_HOUR),
                                r = (t < 0 ? "-" : "+") + (n < 10 ? "0" : "") + n + (i < 10 ? ":0" : ":") + i,
                                s = N.intMod(e, ce.SECONDS_PER_MINUTE);
                            return 0 !== s && (r += (s < 10 ? ":0" : ":") + s), r;
                        }),
                        (e._validateTotalSeconds = function (t) {
                            if (Math.abs(t) > e.MAX_SECONDS) throw new r("Zone offset not in valid range: -18:00 to +18:00");
                        }),
                        (e._validate = function (t, e, n) {
                            if (t < -18 || t > 18) throw new r("Zone offset hours not in valid range: value " + t + " is not in the range -18 to 18");
                            if (t > 0) {
                                if (e < 0 || n < 0) throw new r("Zone offset minutes and seconds must be positive because hours is positive");
                            } else if (t < 0) {
                                if (e > 0 || n > 0) throw new r("Zone offset minutes and seconds must be negative because hours is negative");
                            } else if ((e > 0 && n < 0) || (e < 0 && n > 0)) throw new r("Zone offset minutes and seconds must have the same sign");
                            if (Math.abs(e) > 59) throw new r("Zone offset minutes not in valid range: abs(value) " + Math.abs(e) + " is not in the range 0 to 59");
                            if (Math.abs(n) > 59) throw new r("Zone offset seconds not in valid range: abs(value) " + Math.abs(n) + " is not in the range 0 to 59");
                            if (18 === Math.abs(t) && (Math.abs(e) > 0 || Math.abs(n) > 0)) throw new r("Zone offset not in valid range: -18:00 to +18:00");
                        }),
                        (e.of = function (t) {
                            d(t, "offsetId");
                            var n,
                                i,
                                s,
                                o = Q[t];
                            if (null != o) return o;
                            switch (t.length) {
                                case 2:
                                    t = t[0] + "0" + t[1];
                                case 3:
                                    (n = e._parseNumber(t, 1, !1)), (i = 0), (s = 0);
                                    break;
                                case 5:
                                    (n = e._parseNumber(t, 1, !1)), (i = e._parseNumber(t, 3, !1)), (s = 0);
                                    break;
                                case 6:
                                    (n = e._parseNumber(t, 1, !1)), (i = e._parseNumber(t, 4, !0)), (s = 0);
                                    break;
                                case 7:
                                    (n = e._parseNumber(t, 1, !1)), (i = e._parseNumber(t, 3, !1)), (s = e._parseNumber(t, 5, !1));
                                    break;
                                case 9:
                                    (n = e._parseNumber(t, 1, !1)), (i = e._parseNumber(t, 4, !0)), (s = e._parseNumber(t, 7, !0));
                                    break;
                                default:
                                    throw new r("Invalid ID for ZoneOffset, invalid format: " + t);
                            }
                            var a = t[0];
                            if ("+" !== a && "-" !== a) throw new r("Invalid ID for ZoneOffset, plus/minus not found when expected: " + t);
                            return "-" === a ? e.ofHoursMinutesSeconds(-n, -i, -s) : e.ofHoursMinutesSeconds(n, i, s);
                        }),
                        (e._parseNumber = function (t, e, n) {
                            if (n && ":" !== t[e - 1]) throw new r("Invalid ID for ZoneOffset, colon not found when expected: " + t);
                            var i = t[e],
                                s = t[e + 1];
                            if (i < "0" || i > "9" || s < "0" || s > "9") throw new r("Invalid ID for ZoneOffset, non numeric characters found: " + t);
                            return 10 * (i.charCodeAt(0) - 48) + (s.charCodeAt(0) - 48);
                        }),
                        (e.ofHours = function (t) {
                            return e.ofHoursMinutesSeconds(t, 0, 0);
                        }),
                        (e.ofHoursMinutes = function (t, n) {
                            return e.ofHoursMinutesSeconds(t, n, 0);
                        }),
                        (e.ofHoursMinutesSeconds = function (t, n, i) {
                            e._validate(t, n, i);
                            var r = t * ce.SECONDS_PER_HOUR + n * ce.SECONDS_PER_MINUTE + i;
                            return e.ofTotalSeconds(r);
                        }),
                        (e.ofTotalMinutes = function (t) {
                            var n = t * ce.SECONDS_PER_MINUTE;
                            return e.ofTotalSeconds(n);
                        }),
                        (e.ofTotalSeconds = function (t) {
                            if (t % (15 * ce.SECONDS_PER_MINUTE) == 0) {
                                var n = t,
                                    i = J[n];
                                return null == i && ((i = new e(t)), (J[n] = i), (Q[i.id()] = i)), i;
                            }
                            return new e(t);
                        }),
                        (n.rules = function () {
                            return this._rules;
                        }),
                        (n.get = function (t) {
                            return this.getLong(t);
                        }),
                        (n.getLong = function (t) {
                            if (t === g.OFFSET_SECONDS) return this._totalSeconds;
                            if (t instanceof g) throw new r("Unsupported field: " + t);
                            return t.getFrom(this);
                        }),
                        (n.query = function (t) {
                            return d(t, "query"), t === I.offset() || t === I.zone() ? this : t === I.localDate() || t === I.localTime() || t === I.precision() || t === I.chronology() || t === I.zoneId() ? null : t.queryFrom(this);
                        }),
                        (n.adjustInto = function (t) {
                            return t.with(g.OFFSET_SECONDS, this._totalSeconds);
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), t._totalSeconds - this._totalSeconds;
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this._totalSeconds === t._totalSeconds);
                        }),
                        (n.hashCode = function () {
                            return this._totalSeconds;
                        }),
                        (n.toString = function () {
                            return this._id;
                        }),
                        e
                    );
                })(j);
            var tt = (function (t) {
                    function e() {
                        var e;
                        return ((e = t.call(this) || this).fieldValues = new x()), (e.chrono = null), (e.zone = null), (e.date = null), (e.time = null), (e.leapSecond = !1), (e.excessDays = null), e;
                    }
                    c(e, t),
                        (e.create = function (t, n) {
                            var i = new e();
                            return i._addFieldValue(t, n), i;
                        });
                    var n = e.prototype;
                    return (
                        (n.getFieldValue0 = function (t) {
                            return this.fieldValues.get(t);
                        }),
                        (n._addFieldValue = function (t, e) {
                            d(t, "field");
                            var n = this.getFieldValue0(t);
                            if (null != n && n !== e) throw new r("Conflict found: " + t + " " + n + " differs from " + t + " " + e + ": " + this);
                            return this._putFieldValue0(t, e);
                        }),
                        (n._putFieldValue0 = function (t, e) {
                            return this.fieldValues.put(t, e), this;
                        }),
                        (n.resolve = function (t, e) {
                            return null != e && this.fieldValues.retainAll(e), this._mergeDate(t), this._mergeTime(t), this._resolveTimeInferZeroes(t), null != this.excessDays && !1 === this.excessDays.isZero() && null != this.date && null != this.time && ((this.date = this.date.plus(this.excessDays)), (this.excessDays = H.ZERO)), this._resolveInstant(), this;
                        }),
                        (n._mergeDate = function (t) {
                            this._checkDate(ee.INSTANCE.resolveDate(this.fieldValues, t));
                        }),
                        (n._checkDate = function (t) {
                            if (null != t)
                                for (var e in (this._addObject(t), this.fieldValues.keySet())) {
                                    var n = g.byName(e);
                                    if (n && void 0 !== this.fieldValues.get(n) && n.isDateBased()) {
                                        var i = void 0;
                                        try {
                                            i = t.getLong(n);
                                        } catch (t) {
                                            if (t instanceof r) continue;
                                            throw t;
                                        }
                                        var s = this.fieldValues.get(n);
                                        if (i !== s) throw new r("Conflict found: Field " + n + " " + i + " differs from " + n + " " + s + " derived from " + t);
                                    }
                                }
                        }),
                        (n._mergeTime = function (t) {
                            if (this.fieldValues.containsKey(g.CLOCK_HOUR_OF_DAY)) {
                                var e = this.fieldValues.remove(g.CLOCK_HOUR_OF_DAY);
                                t !== k.LENIENT && ((t === k.SMART && 0 === e) || g.CLOCK_HOUR_OF_DAY.checkValidValue(e)), this._addFieldValue(g.HOUR_OF_DAY, 24 === e ? 0 : e);
                            }
                            if (this.fieldValues.containsKey(g.CLOCK_HOUR_OF_AMPM)) {
                                var n = this.fieldValues.remove(g.CLOCK_HOUR_OF_AMPM);
                                t !== k.LENIENT && ((t === k.SMART && 0 === n) || g.CLOCK_HOUR_OF_AMPM.checkValidValue(n)), this._addFieldValue(g.HOUR_OF_AMPM, 12 === n ? 0 : n);
                            }
                            if ((t !== k.LENIENT && (this.fieldValues.containsKey(g.AMPM_OF_DAY) && g.AMPM_OF_DAY.checkValidValue(this.fieldValues.get(g.AMPM_OF_DAY)), this.fieldValues.containsKey(g.HOUR_OF_AMPM) && g.HOUR_OF_AMPM.checkValidValue(this.fieldValues.get(g.HOUR_OF_AMPM))), this.fieldValues.containsKey(g.AMPM_OF_DAY) && this.fieldValues.containsKey(g.HOUR_OF_AMPM))) {
                                var i = this.fieldValues.remove(g.AMPM_OF_DAY),
                                    r = this.fieldValues.remove(g.HOUR_OF_AMPM);
                                this._addFieldValue(g.HOUR_OF_DAY, 12 * i + r);
                            }
                            if (this.fieldValues.containsKey(g.NANO_OF_DAY)) {
                                var s = this.fieldValues.remove(g.NANO_OF_DAY);
                                t !== k.LENIENT && g.NANO_OF_DAY.checkValidValue(s), this._addFieldValue(g.SECOND_OF_DAY, N.intDiv(s, 1e9)), this._addFieldValue(g.NANO_OF_SECOND, N.intMod(s, 1e9));
                            }
                            if (this.fieldValues.containsKey(g.MICRO_OF_DAY)) {
                                var o = this.fieldValues.remove(g.MICRO_OF_DAY);
                                t !== k.LENIENT && g.MICRO_OF_DAY.checkValidValue(o), this._addFieldValue(g.SECOND_OF_DAY, N.intDiv(o, 1e6)), this._addFieldValue(g.MICRO_OF_SECOND, N.intMod(o, 1e6));
                            }
                            if (this.fieldValues.containsKey(g.MILLI_OF_DAY)) {
                                var a = this.fieldValues.remove(g.MILLI_OF_DAY);
                                t !== k.LENIENT && g.MILLI_OF_DAY.checkValidValue(a), this._addFieldValue(g.SECOND_OF_DAY, N.intDiv(a, 1e3)), this._addFieldValue(g.MILLI_OF_SECOND, N.intMod(a, 1e3));
                            }
                            if (this.fieldValues.containsKey(g.SECOND_OF_DAY)) {
                                var u = this.fieldValues.remove(g.SECOND_OF_DAY);
                                t !== k.LENIENT && g.SECOND_OF_DAY.checkValidValue(u), this._addFieldValue(g.HOUR_OF_DAY, N.intDiv(u, 3600)), this._addFieldValue(g.MINUTE_OF_HOUR, N.intMod(N.intDiv(u, 60), 60)), this._addFieldValue(g.SECOND_OF_MINUTE, N.intMod(u, 60));
                            }
                            if (this.fieldValues.containsKey(g.MINUTE_OF_DAY)) {
                                var h = this.fieldValues.remove(g.MINUTE_OF_DAY);
                                t !== k.LENIENT && g.MINUTE_OF_DAY.checkValidValue(h), this._addFieldValue(g.HOUR_OF_DAY, N.intDiv(h, 60)), this._addFieldValue(g.MINUTE_OF_HOUR, N.intMod(h, 60));
                            }
                            if ((t !== k.LENIENT && (this.fieldValues.containsKey(g.MILLI_OF_SECOND) && g.MILLI_OF_SECOND.checkValidValue(this.fieldValues.get(g.MILLI_OF_SECOND)), this.fieldValues.containsKey(g.MICRO_OF_SECOND) && g.MICRO_OF_SECOND.checkValidValue(this.fieldValues.get(g.MICRO_OF_SECOND))), this.fieldValues.containsKey(g.MILLI_OF_SECOND) && this.fieldValues.containsKey(g.MICRO_OF_SECOND))) {
                                var f = this.fieldValues.remove(g.MILLI_OF_SECOND),
                                    c = this.fieldValues.get(g.MICRO_OF_SECOND);
                                this._putFieldValue0(g.MICRO_OF_SECOND, 1e3 * f + N.intMod(c, 1e3));
                            }
                            if (this.fieldValues.containsKey(g.MICRO_OF_SECOND) && this.fieldValues.containsKey(g.NANO_OF_SECOND)) {
                                var l = this.fieldValues.get(g.NANO_OF_SECOND);
                                this._putFieldValue0(g.MICRO_OF_SECOND, N.intDiv(l, 1e3)), this.fieldValues.remove(g.MICRO_OF_SECOND);
                            }
                            if (this.fieldValues.containsKey(g.MILLI_OF_SECOND) && this.fieldValues.containsKey(g.NANO_OF_SECOND)) {
                                var _ = this.fieldValues.get(g.NANO_OF_SECOND);
                                this._putFieldValue0(g.MILLI_OF_SECOND, N.intDiv(_, 1e6)), this.fieldValues.remove(g.MILLI_OF_SECOND);
                            }
                            if (this.fieldValues.containsKey(g.MICRO_OF_SECOND)) {
                                var d = this.fieldValues.remove(g.MICRO_OF_SECOND);
                                this._putFieldValue0(g.NANO_OF_SECOND, 1e3 * d);
                            } else if (this.fieldValues.containsKey(g.MILLI_OF_SECOND)) {
                                var p = this.fieldValues.remove(g.MILLI_OF_SECOND);
                                this._putFieldValue0(g.NANO_OF_SECOND, 1e6 * p);
                            }
                        }),
                        (n._resolveTimeInferZeroes = function (t) {
                            var e = this.fieldValues.get(g.HOUR_OF_DAY),
                                n = this.fieldValues.get(g.MINUTE_OF_HOUR),
                                i = this.fieldValues.get(g.SECOND_OF_MINUTE),
                                r = this.fieldValues.get(g.NANO_OF_SECOND);
                            if (null != e && (null != n || (null == i && null == r)) && (null == n || null != i || null == r)) {
                                if (t !== k.LENIENT) {
                                    if (null != e) {
                                        t !== k.SMART || 24 !== e || (null != n && 0 !== n) || (null != i && 0 !== i) || (null != r && 0 !== r) || ((e = 0), (this.excessDays = H.ofDays(1)));
                                        var s = g.HOUR_OF_DAY.checkValidIntValue(e);
                                        if (null != n) {
                                            var o = g.MINUTE_OF_HOUR.checkValidIntValue(n);
                                            if (null != i) {
                                                var a = g.SECOND_OF_MINUTE.checkValidIntValue(i);
                                                if (null != r) {
                                                    var u = g.NANO_OF_SECOND.checkValidIntValue(r);
                                                    this._addObject(ce.of(s, o, a, u));
                                                } else this._addObject(ce.of(s, o, a));
                                            } else null == r && this._addObject(ce.of(s, o));
                                        } else null == i && null == r && this._addObject(ce.of(s, 0));
                                    }
                                } else if (null != e) {
                                    var h = e;
                                    if (null != n)
                                        if (null != i) {
                                            null == r && (r = 0);
                                            var f = N.safeMultiply(h, 36e11);
                                            (f = N.safeAdd(f, N.safeMultiply(n, 6e10))), (f = N.safeAdd(f, N.safeMultiply(i, 1e9))), (f = N.safeAdd(f, r));
                                            var c = N.floorDiv(f, 864e11),
                                                l = N.floorMod(f, 864e11);
                                            this._addObject(ce.ofNanoOfDay(l)), (this.excessDays = H.ofDays(c));
                                        } else {
                                            var _ = N.safeMultiply(h, 3600);
                                            _ = N.safeAdd(_, N.safeMultiply(n, 60));
                                            var d = N.floorDiv(_, 86400),
                                                p = N.floorMod(_, 86400);
                                            this._addObject(ce.ofSecondOfDay(p)), (this.excessDays = H.ofDays(d));
                                        }
                                    else {
                                        var m = N.safeToInt(N.floorDiv(h, 24));
                                        (h = N.floorMod(h, 24)), this._addObject(ce.of(h, 0)), (this.excessDays = H.ofDays(m));
                                    }
                                }
                                this.fieldValues.remove(g.HOUR_OF_DAY), this.fieldValues.remove(g.MINUTE_OF_HOUR), this.fieldValues.remove(g.SECOND_OF_MINUTE), this.fieldValues.remove(g.NANO_OF_SECOND);
                            }
                        }),
                        (n._addObject = function (t) {
                            t instanceof z ? (this.date = t) : t instanceof ce && (this.time = t);
                        }),
                        (n._resolveInstant = function () {
                            if (null != this.date && null != this.time) {
                                var t = this.fieldValues.get(g.OFFSET_SECONDS);
                                if (null != t) {
                                    var e = $.ofTotalSeconds(t),
                                        n = this.date.atTime(this.time).atZone(e).getLong(g.INSTANT_SECONDS);
                                    this.fieldValues.put(g.INSTANT_SECONDS, n);
                                } else if (null != this.zone) {
                                    var i = this.date.atTime(this.time).atZone(this.zone).getLong(g.INSTANT_SECONDS);
                                    this.fieldValues.put(g.INSTANT_SECONDS, i);
                                }
                            }
                        }),
                        (n.build = function (t) {
                            return t.queryFrom(this);
                        }),
                        (n.isSupported = function (t) {
                            return null != t && ((this.fieldValues.containsKey(t) && void 0 !== this.fieldValues.get(t)) || (null != this.date && this.date.isSupported(t)) || (null != this.time && this.time.isSupported(t)));
                        }),
                        (n.getLong = function (t) {
                            d(t, "field");
                            var e = this.getFieldValue0(t);
                            if (null == e) {
                                if (null != this.date && this.date.isSupported(t)) return this.date.getLong(t);
                                if (null != this.time && this.time.isSupported(t)) return this.time.getLong(t);
                                throw new r("Field not found: " + t);
                            }
                            return e;
                        }),
                        (n.query = function (t) {
                            return t === I.zoneId() ? this.zone : t === I.chronology() ? this.chrono : t === I.localDate() ? (null != this.date ? ue.from(this.date) : null) : t === I.localTime() ? this.time : t === I.zone() || t === I.offset() ? t.queryFrom(this) : t === I.precision() ? null : t.queryFrom(this);
                        }),
                        e
                    );
                })(F),
                et = (function () {
                    function t() {
                        if (1 === arguments.length) {
                            if (arguments[0] instanceof t) return void this._constructorSelf.apply(this, arguments);
                            this._constructorFormatter.apply(this, arguments);
                        } else this._constructorParam.apply(this, arguments);
                        (this._caseSensitive = !0), (this._strict = !0), (this._parsed = [new nt(this)]);
                    }
                    var e = t.prototype;
                    return (
                        (e._constructorParam = function (t, e, n) {
                            (this._locale = t), (this._symbols = e), (this._overrideChronology = n);
                        }),
                        (e._constructorFormatter = function (t) {
                            (this._locale = t.locale()), (this._symbols = t.decimalStyle()), (this._overrideChronology = t.chronology());
                        }),
                        (e._constructorSelf = function (t) {
                            (this._locale = t._locale), (this._symbols = t._symbols), (this._overrideChronology = t._overrideChronology), (this._overrideZone = t._overrideZone), (this._caseSensitive = t._caseSensitive), (this._strict = t._strict), (this._parsed = [new nt(this)]);
                        }),
                        (e.copy = function () {
                            return new t(this);
                        }),
                        (e.symbols = function () {
                            return this._symbols;
                        }),
                        (e.isStrict = function () {
                            return this._strict;
                        }),
                        (e.setStrict = function (t) {
                            this._strict = t;
                        }),
                        (e.locale = function () {
                            return this._locale;
                        }),
                        (e.setLocale = function (t) {
                            this._locale = t;
                        }),
                        (e.startOptional = function () {
                            this._parsed.push(this.currentParsed().copy());
                        }),
                        (e.endOptional = function (t) {
                            t ? this._parsed.splice(this._parsed.length - 2, 1) : this._parsed.splice(this._parsed.length - 1, 1);
                        }),
                        (e.isCaseSensitive = function () {
                            return this._caseSensitive;
                        }),
                        (e.setCaseSensitive = function (t) {
                            this._caseSensitive = t;
                        }),
                        (e.subSequenceEquals = function (t, e, n, i, r) {
                            if (e + r > t.length || i + r > n.length) return !1;
                            this.isCaseSensitive() || ((t = t.toLowerCase()), (n = n.toLowerCase()));
                            for (var s = 0; s < r; s++) {
                                if (t[e + s] !== n[i + s]) return !1;
                            }
                            return !0;
                        }),
                        (e.charEquals = function (t, e) {
                            return this.isCaseSensitive() ? t === e : this.charEqualsIgnoreCase(t, e);
                        }),
                        (e.charEqualsIgnoreCase = function (t, e) {
                            return t === e || t.toLowerCase() === e.toLowerCase();
                        }),
                        (e.setParsedField = function (t, e, n, i) {
                            var r = this.currentParsed().fieldValues,
                                s = r.get(t);
                            return r.set(t, e), null != s && s !== e ? ~n : i;
                        }),
                        (e.setParsedZone = function (t) {
                            d(t, "zone"), (this.currentParsed().zone = t);
                        }),
                        (e.getParsed = function (t) {
                            return this.currentParsed().fieldValues.get(t);
                        }),
                        (e.toParsed = function () {
                            return this.currentParsed();
                        }),
                        (e.currentParsed = function () {
                            return this._parsed[this._parsed.length - 1];
                        }),
                        (e.setParsedLeapSecond = function () {
                            this.currentParsed().leapSecond = !0;
                        }),
                        (e.getEffectiveChronology = function () {
                            var t = this.currentParsed().chrono;
                            return null == t && null == (t = this._overrideChronology) && (t = ee.INSTANCE), t;
                        }),
                        t
                    );
                })(),
                nt = (function (t) {
                    function e(e) {
                        var n;
                        return ((n = t.call(this) || this).chrono = null), (n.zone = null), (n.fieldValues = new x()), (n.leapSecond = !1), (n.dateTimeParseContext = e), n;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.copy = function () {
                            var t = new e();
                            return (t.chrono = this.chrono), (t.zone = this.zone), t.fieldValues.putAll(this.fieldValues), (t.leapSecond = this.leapSecond), (t.dateTimeParseContext = this.dateTimeParseContext), t;
                        }),
                        (n.toString = function () {
                            return this.fieldValues + ", " + this.chrono + ", " + this.zone;
                        }),
                        (n.isSupported = function (t) {
                            return this.fieldValues.containsKey(t);
                        }),
                        (n.get = function (t) {
                            var e = this.fieldValues.get(t);
                            return _(null != e), e;
                        }),
                        (n.query = function (e) {
                            return e === I.chronology() ? this.chrono : e === I.zoneId() || e === I.zone() ? this.zone : t.prototype.query.call(this, e);
                        }),
                        (n.toBuilder = function () {
                            var t = new tt();
                            return t.fieldValues.putAll(this.fieldValues), (t.chrono = this.dateTimeParseContext.getEffectiveChronology()), null != this.zone ? (t.zone = this.zone) : (t.zone = this.overrideZone), (t.leapSecond = this.leapSecond), (t.excessDays = this.excessDays), t;
                        }),
                        e
                    );
                })(q),
                it = (function () {
                    function t(e, n, i) {
                        2 === arguments.length && arguments[1] instanceof qt ? ((this._temporal = t.adjust(e, n)), (this._locale = n.locale()), (this._symbols = n.decimalStyle())) : ((this._temporal = e), (this._locale = n), (this._symbols = i)), (this._optional = 0);
                    }
                    t.adjust = function (t, e) {
                        return t;
                    };
                    var e = t.prototype;
                    return (
                        (e.symbols = function () {
                            return this._symbols;
                        }),
                        (e.startOptional = function () {
                            this._optional++;
                        }),
                        (e.endOptional = function () {
                            this._optional--;
                        }),
                        (e.getValueQuery = function (t) {
                            var e = this._temporal.query(t);
                            if (null == e && 0 === this._optional) throw new r("Unable to extract value: " + this._temporal);
                            return e;
                        }),
                        (e.getValue = function (t) {
                            try {
                                return this._temporal.getLong(t);
                            } catch (t) {
                                if (t instanceof r && this._optional > 0) return null;
                                throw t;
                            }
                        }),
                        (e.temporal = function () {
                            return this._temporal;
                        }),
                        (e.locale = function () {
                            return this._locale;
                        }),
                        (e.setDateTime = function (t) {
                            this._temporal = t;
                        }),
                        (e.setLocale = function (t) {
                            this._locale = t;
                        }),
                        t
                    );
                })(),
                rt = {},
                st = [0, 90, 181, 273, 0, 91, 182, 274],
                ot = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.isDateBased = function () {
                            return !0;
                        }),
                        (n.isTimeBased = function () {
                            return !1;
                        }),
                        (n._isIso = function () {
                            return !0;
                        }),
                        (e._getWeekRangeByLocalDate = function (t) {
                            var n = e._getWeekBasedYear(t);
                            return R.of(1, e._getWeekRangeByYear(n));
                        }),
                        (e._getWeekRangeByYear = function (t) {
                            var e = ue.of(t, 1, 1);
                            return e.dayOfWeek() === U.THURSDAY || (e.dayOfWeek() === U.WEDNESDAY && e.isLeapYear()) ? 53 : 52;
                        }),
                        (e._getWeek = function (t) {
                            var n = t.dayOfWeek().ordinal(),
                                i = t.dayOfYear() - 1,
                                r = i + (3 - n),
                                s = r - 7 * N.intDiv(r, 7) - 3;
                            if ((s < -3 && (s += 7), i < s)) return e._getWeekRangeByLocalDate(t.withDayOfYear(180).minusYears(1)).maximum();
                            var o = N.intDiv(i - s, 7) + 1;
                            return 53 === o && !1 === (-3 === s || (-2 === s && t.isLeapYear())) && (o = 1), o;
                        }),
                        (e._getWeekBasedYear = function (t) {
                            var e = t.year(),
                                n = t.dayOfYear();
                            if (n <= 3) n - t.dayOfWeek().ordinal() < -2 && e--;
                            else if (n >= 363) {
                                var i = t.dayOfWeek().ordinal();
                                (n = n - 363 - (t.isLeapYear() ? 1 : 0)) - i >= 0 && e++;
                            }
                            return e;
                        }),
                        (n.displayName = function () {
                            return this.toString();
                        }),
                        (n.resolve = function () {
                            return null;
                        }),
                        (n.name = function () {
                            return this.toString();
                        }),
                        e
                    );
                })(M),
                at = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.toString = function () {
                            return "DayOfQuarter";
                        }),
                        (n.baseUnit = function () {
                            return y.DAYS;
                        }),
                        (n.rangeUnit = function () {
                            return Ot;
                        }),
                        (n.range = function () {
                            return R.of(1, 90, 92);
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(g.DAY_OF_YEAR) && t.isSupported(g.MONTH_OF_YEAR) && t.isSupported(g.YEAR) && this._isIso(t);
                        }),
                        (n.rangeRefinedBy = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: DayOfQuarter");
                            var e = t.getLong(_t);
                            if (1 === e) {
                                var n = t.getLong(g.YEAR);
                                return ee.isLeapYear(n) ? R.of(1, 91) : R.of(1, 90);
                            }
                            return 2 === e ? R.of(1, 91) : 3 === e || 4 === e ? R.of(1, 92) : this.range();
                        }),
                        (n.getFrom = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: DayOfQuarter");
                            var e = t.get(g.DAY_OF_YEAR),
                                n = t.get(g.MONTH_OF_YEAR),
                                i = t.getLong(g.YEAR);
                            return e - st[N.intDiv(n - 1, 3) + (ee.isLeapYear(i) ? 4 : 0)];
                        }),
                        (n.adjustInto = function (t, e) {
                            var n = this.getFrom(t);
                            return this.range().checkValidValue(e, this), t.with(g.DAY_OF_YEAR, t.getLong(g.DAY_OF_YEAR) + (e - n));
                        }),
                        (n.resolve = function (t, e, n) {
                            var i = t.get(g.YEAR),
                                r = t.get(_t);
                            if (null == i || null == r) return null;
                            var s,
                                o = g.YEAR.checkValidIntValue(i),
                                a = t.get(lt);
                            if (n === k.LENIENT) {
                                var u = r;
                                s = (s = (s = ue.of(o, 1, 1)).plusMonths(N.safeMultiply(N.safeSubtract(u, 1), 3))).plusDays(N.safeSubtract(a, 1));
                            } else {
                                var h = _t.range().checkValidIntValue(r, _t);
                                if (n === k.STRICT) {
                                    var f = 92;
                                    1 === h ? (f = ee.isLeapYear(o) ? 91 : 90) : 2 === h && (f = 91), R.of(1, f).checkValidValue(a, this);
                                } else this.range().checkValidValue(a, this);
                                s = ue.of(o, 3 * (h - 1) + 1, 1).plusDays(a - 1);
                            }
                            return t.remove(this), t.remove(g.YEAR), t.remove(_t), s;
                        }),
                        e
                    );
                })(ot),
                ut = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.toString = function () {
                            return "QuarterOfYear";
                        }),
                        (n.baseUnit = function () {
                            return Ot;
                        }),
                        (n.rangeUnit = function () {
                            return y.YEARS;
                        }),
                        (n.range = function () {
                            return R.of(1, 4);
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(g.MONTH_OF_YEAR) && this._isIso(t);
                        }),
                        (n.rangeRefinedBy = function (t) {
                            return this.range();
                        }),
                        (n.getFrom = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: QuarterOfYear");
                            var e = t.getLong(g.MONTH_OF_YEAR);
                            return N.intDiv(e + 2, 3);
                        }),
                        (n.adjustInto = function (t, e) {
                            var n = this.getFrom(t);
                            return this.range().checkValidValue(e, this), t.with(g.MONTH_OF_YEAR, t.getLong(g.MONTH_OF_YEAR) + 3 * (e - n));
                        }),
                        e
                    );
                })(ot),
                ht = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.toString = function () {
                            return "WeekOfWeekBasedYear";
                        }),
                        (n.baseUnit = function () {
                            return y.WEEKS;
                        }),
                        (n.rangeUnit = function () {
                            return mt;
                        }),
                        (n.range = function () {
                            return R.of(1, 52, 53);
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(g.EPOCH_DAY) && this._isIso(t);
                        }),
                        (n.rangeRefinedBy = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: WeekOfWeekBasedYear");
                            return ot._getWeekRangeByLocalDate(ue.from(t));
                        }),
                        (n.getFrom = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: WeekOfWeekBasedYear");
                            return ot._getWeek(ue.from(t));
                        }),
                        (n.adjustInto = function (t, e) {
                            return this.range().checkValidValue(e, this), t.plus(N.safeSubtract(e, this.getFrom(t)), y.WEEKS);
                        }),
                        (n.resolve = function (t, e, n) {
                            var i = t.get(pt),
                                r = t.get(g.DAY_OF_WEEK);
                            if (null == i || null == r) return null;
                            var s,
                                o = pt.range().checkValidIntValue(i, pt),
                                a = t.get(dt);
                            if (n === k.LENIENT) {
                                var u = r,
                                    h = 0;
                                u > 7 ? ((h = N.intDiv(u - 1, 7)), (u = N.intMod(u - 1, 7) + 1)) : u < 1 && ((h = N.intDiv(u, 7) - 1), (u = N.intMod(u, 7) + 7)),
                                    (s = ue
                                        .of(o, 1, 4)
                                        .plusWeeks(a - 1)
                                        .plusWeeks(h)
                                        .with(g.DAY_OF_WEEK, u));
                            } else {
                                var f = g.DAY_OF_WEEK.checkValidIntValue(r);
                                if (n === k.STRICT) {
                                    var c = ue.of(o, 1, 4);
                                    ot._getWeekRangeByLocalDate(c).checkValidValue(a, this);
                                } else this.range().checkValidValue(a, this);
                                s = ue
                                    .of(o, 1, 4)
                                    .plusWeeks(a - 1)
                                    .with(g.DAY_OF_WEEK, f);
                            }
                            return t.remove(this), t.remove(pt), t.remove(g.DAY_OF_WEEK), s;
                        }),
                        (n.displayName = function () {
                            return "Week";
                        }),
                        e
                    );
                })(ot),
                ft = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.toString = function () {
                            return "WeekBasedYear";
                        }),
                        (n.baseUnit = function () {
                            return mt;
                        }),
                        (n.rangeUnit = function () {
                            return y.FOREVER;
                        }),
                        (n.range = function () {
                            return g.YEAR.range();
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(g.EPOCH_DAY) && this._isIso(t);
                        }),
                        (n.rangeRefinedBy = function (t) {
                            return g.YEAR.range();
                        }),
                        (n.getFrom = function (t) {
                            if (!1 === t.isSupported(this)) throw new o("Unsupported field: WeekBasedYear");
                            return ot._getWeekBasedYear(ue.from(t));
                        }),
                        (n.adjustInto = function (t, e) {
                            if (!1 === this.isSupportedBy(t)) throw new o("Unsupported field: WeekBasedYear");
                            var n = this.range().checkValidIntValue(e, pt),
                                i = ue.from(t),
                                r = i.get(g.DAY_OF_WEEK),
                                s = ot._getWeek(i);
                            53 === s && 52 === ot._getWeekRangeByYear(n) && (s = 52);
                            var a = ue.of(n, 1, 4),
                                u = r - a.get(g.DAY_OF_WEEK) + 7 * (s - 1);
                            return (a = a.plusDays(u)), t.with(a);
                        }),
                        e
                    );
                })(ot),
                ct = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._name = e), (i._duration = n), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.duration = function () {
                            return this._duration;
                        }),
                        (n.isDurationEstimated = function () {
                            return !0;
                        }),
                        (n.isDateBased = function () {
                            return !0;
                        }),
                        (n.isTimeBased = function () {
                            return !1;
                        }),
                        (n.isSupportedBy = function (t) {
                            return t.isSupported(g.EPOCH_DAY);
                        }),
                        (n.addTo = function (t, e) {
                            switch (this) {
                                case mt:
                                    var n = N.safeAdd(t.get(pt), e);
                                    return t.with(pt, n);
                                case Ot:
                                    return t.plus(N.intDiv(e, 256), y.YEARS).plus(3 * N.intMod(e, 256), y.MONTHS);
                                default:
                                    throw new h("Unreachable");
                            }
                        }),
                        (n.between = function (t, e) {
                            switch (this) {
                                case mt:
                                    return N.safeSubtract(e.getLong(pt), t.getLong(pt));
                                case Ot:
                                    return N.intDiv(t.until(e, y.MONTHS), 3);
                                default:
                                    throw new h("Unreachable");
                            }
                        }),
                        (n.toString = function () {
                            return name;
                        }),
                        e
                    );
                })(T),
                lt = null,
                _t = null,
                dt = null,
                pt = null,
                mt = null,
                Ot = null;
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Et = (function () {
                function t(t, e, n, i) {
                    (this._zeroDigit = t), (this._zeroDigitCharCode = t.charCodeAt(0)), (this._positiveSign = e), (this._negativeSign = n), (this._decimalSeparator = i);
                }
                var e = t.prototype;
                return (
                    (e.positiveSign = function () {
                        return this._positiveSign;
                    }),
                    (e.withPositiveSign = function (e) {
                        return e === this._positiveSign ? this : new t(this._zeroDigit, e, this._negativeSign, this._decimalSeparator);
                    }),
                    (e.negativeSign = function () {
                        return this._negativeSign;
                    }),
                    (e.withNegativeSign = function (e) {
                        return e === this._negativeSign ? this : new t(this._zeroDigit, this._positiveSign, e, this._decimalSeparator);
                    }),
                    (e.zeroDigit = function () {
                        return this._zeroDigit;
                    }),
                    (e.withZeroDigit = function (e) {
                        return e === this._zeroDigit ? this : new t(e, this._positiveSign, this._negativeSign, this._decimalSeparator);
                    }),
                    (e.decimalSeparator = function () {
                        return this._decimalSeparator;
                    }),
                    (e.withDecimalSeparator = function (e) {
                        return e === this._decimalSeparator ? this : new t(this._zeroDigit, this._positiveSign, this._negativeSign, e);
                    }),
                    (e.convertToDigit = function (t) {
                        var e = t.charCodeAt(0) - this._zeroDigitCharCode;
                        return e >= 0 && e <= 9 ? e : -1;
                    }),
                    (e.convertNumberToI18N = function (t) {
                        if ("0" === this._zeroDigit) return t;
                        for (var e = this._zeroDigitCharCode - "0".charCodeAt(0), n = "", i = 0; i < t.length; i++) n += String.fromCharCode(t.charCodeAt(i) + e);
                        return n;
                    }),
                    (e.equals = function (e) {
                        return this === e || (e instanceof t && this._zeroDigit === e._zeroDigit && this._positiveSign === e._positiveSign && this._negativeSign === e._negativeSign && this._decimalSeparator === e._decimalSeparator);
                    }),
                    (e.hashCode = function () {
                        return this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator;
                    }),
                    (e.toString = function () {
                        return "DecimalStyle[" + this._zeroDigit + this._positiveSign + this._negativeSign + this._decimalSeparator + "]";
                    }),
                    (t.of = function () {
                        throw new Error("not yet supported");
                    }),
                    (t.availableLocales = function () {
                        throw new Error("not yet supported");
                    }),
                    t
                );
            })();
            Et.STANDARD = new Et("0", "+", "-", ".");
            var St = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (
                    c(e, t),
                    (e.prototype.parse = function (t, n, i) {
                        switch (this) {
                            case e.NORMAL:
                                return !t || !n;
                            case e.ALWAYS:
                            case e.EXCEEDS_PAD:
                                return !0;
                            default:
                                return !n && !i;
                        }
                    }),
                    e
                );
            })(D);
            (St.NORMAL = new St("NORMAL")), (St.NEVER = new St("NEVER")), (St.ALWAYS = new St("ALWAYS")), (St.EXCEEDS_PAD = new St("EXCEEDS_PAD")), (St.NOT_NEGATIVE = new St("NOT_NEGATIVE"));
            var Nt = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                c(e, t);
                var n = e.prototype;
                return (
                    (n.isStandalone = function () {
                        switch (this) {
                            case e.FULL_STANDALONE:
                            case e.SHORT_STANDALONE:
                            case e.NARROW_STANDALONE:
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                    (n.asStandalone = function () {
                        switch (this) {
                            case e.FULL:
                                return e.FULL_STANDALONE;
                            case e.SHORT:
                                return e.SHORT_STANDALONE;
                            case e.NARROW:
                                return e.NARROW_STANDALONE;
                            default:
                                return this;
                        }
                    }),
                    (n.asNormal = function () {
                        switch (this) {
                            case e.FULL_STANDALONE:
                                return e.FULL;
                            case e.SHORT_STANDALONE:
                                return e.SHORT;
                            case e.NARROW_STANDALONE:
                                return e.NARROW;
                            default:
                                return this;
                        }
                    }),
                    e
                );
            })(D);
            (Nt.FULL = new Nt("FULL")), (Nt.FULL_STANDALONE = new Nt("FULL_STANDALONE")), (Nt.SHORT = new Nt("SHORT")), (Nt.SHORT_STANDALONE = new Nt("SHORT_STANDALONE")), (Nt.NARROW = new Nt("NARROW")), (Nt.NARROW_STANDALONE = new Nt("NARROW_STANDALONE"));
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Dt = (function () {
                    function t(t) {
                        if (t.length > 1) throw new u('invalid literal, too long: "' + t + '"');
                        this._literal = t;
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            return e.append(this._literal), !0;
                        }),
                        (e.parse = function (t, e, n) {
                            if (n === e.length) return ~n;
                            var i = e.charAt(n);
                            return !1 === t.charEquals(this._literal, i) ? ~n : n + this._literal.length;
                        }),
                        (e.toString = function () {
                            return "'" === this._literal ? "''" : "'" + this._literal + "'";
                        }),
                        t
                    );
                })(),
                At = (function () {
                    function t(t, e) {
                        (this._printerParsers = t), (this._optional = e);
                    }
                    var e = t.prototype;
                    return (
                        (e.withOptional = function (e) {
                            return e === this._optional ? this : new t(this._printerParsers, e);
                        }),
                        (e.print = function (t, e) {
                            var n = e.length();
                            this._optional && t.startOptional();
                            try {
                                for (var i = 0; i < this._printerParsers.length; i++) {
                                    if (!1 === this._printerParsers[i].print(t, e)) return e.setLength(n), !0;
                                }
                            } finally {
                                this._optional && t.endOptional();
                            }
                            return !0;
                        }),
                        (e.parse = function (t, e, n) {
                            if (this._optional) {
                                t.startOptional();
                                for (var i = n, r = 0; r < this._printerParsers.length; r++) {
                                    if ((i = this._printerParsers[r].parse(t, e, i)) < 0) return t.endOptional(!1), n;
                                }
                                return t.endOptional(!0), i;
                            }
                            for (var s = 0; s < this._printerParsers.length; s++) {
                                if ((n = this._printerParsers[s].parse(t, e, n)) < 0) break;
                            }
                            return n;
                        }),
                        (e.toString = function () {
                            var t = "";
                            if (null != this._printerParsers) {
                                t += this._optional ? "[" : "(";
                                for (var e = 0; e < this._printerParsers.length; e++) {
                                    t += this._printerParsers[e].toString();
                                }
                                t += this._optional ? "]" : ")";
                            }
                            return t;
                        }),
                        t
                    );
                })(),
                Tt = (function () {
                    function t(t, e, n, i) {
                        if ((d(t, "field"), !1 === t.range().isFixed())) throw new u("Field must have a fixed set of values: " + t);
                        if (e < 0 || e > 9) throw new u("Minimum width must be from 0 to 9 inclusive but was " + e);
                        if (n < 1 || n > 9) throw new u("Maximum width must be from 1 to 9 inclusive but was " + n);
                        if (n < e) throw new u("Maximum width must exceed or equal the minimum width but " + n + " < " + e);
                        (this.field = t), (this.minWidth = e), (this.maxWidth = n), (this.decimalPoint = i);
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            var n = t.getValue(this.field);
                            if (null === n) return !1;
                            var i = t.symbols();
                            if (0 === n) {
                                if (this.minWidth > 0) {
                                    this.decimalPoint && e.append(i.decimalSeparator());
                                    for (var r = 0; r < this.minWidth; r++) e.append(i.zeroDigit());
                                }
                            } else {
                                var s = this.convertToFraction(n, i.zeroDigit()),
                                    o = Math.min(Math.max(s.length, this.minWidth), this.maxWidth);
                                if (1 * (s = s.substr(0, o)) > 0) for (; s.length > this.minWidth && "0" === s[s.length - 1]; ) s = s.substr(0, s.length - 1);
                                var a = s;
                                (a = i.convertNumberToI18N(a)), this.decimalPoint && e.append(i.decimalSeparator()), e.append(a);
                            }
                            return !0;
                        }),
                        (e.parse = function (t, e, n) {
                            var i = t.isStrict() ? this.minWidth : 0,
                                r = t.isStrict() ? this.maxWidth : 9,
                                s = e.length;
                            if (n === s) return i > 0 ? ~n : n;
                            if (this.decimalPoint) {
                                if (e[n] !== t.symbols().decimalSeparator()) return i > 0 ? ~n : n;
                                n++;
                            }
                            var o = n + i;
                            if (o > s) return ~n;
                            for (var a = Math.min(n + r, s), u = 0, h = n; h < a; ) {
                                var f = e.charAt(h++),
                                    c = t.symbols().convertToDigit(f);
                                if (c < 0) {
                                    if (h < o) return ~n;
                                    h--;
                                    break;
                                }
                                u = 10 * u + c;
                            }
                            var l = h - n,
                                _ = Math.pow(10, l),
                                d = this.convertFromFraction(u, _);
                            return t.setParsedField(this.field, d, n, h);
                        }),
                        (e.convertToFraction = function (t, e) {
                            var n = this.field.range();
                            n.checkValidValue(t, this.field);
                            for (var i = n.minimum(), r = n.maximum() - i + 1, s = t - i, o = "" + N.intDiv(1e9 * s, r); o.length < 9; ) o = e + o;
                            return o;
                        }),
                        (e.convertFromFraction = function (t, e) {
                            var n = this.field.range(),
                                i = n.minimum(),
                                r = n.maximum() - i + 1;
                            return N.intDiv(t * r, e);
                        }),
                        (e.toString = function () {
                            var t = this.decimalPoint ? ",DecimalPoint" : "";
                            return "Fraction(" + this.field + "," + this.minWidth + "," + this.maxWidth + t + ")";
                        }),
                        t
                    );
                })(),
                vt = [0, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9],
                wt = (function () {
                    function t(t, e, n, i, r) {
                        void 0 === r && (r = 0), (this._field = t), (this._minWidth = e), (this._maxWidth = n), (this._signStyle = i), (this._subsequentWidth = r);
                    }
                    var e = t.prototype;
                    return (
                        (e.field = function () {
                            return this._field;
                        }),
                        (e.minWidth = function () {
                            return this._minWidth;
                        }),
                        (e.maxWidth = function () {
                            return this._maxWidth;
                        }),
                        (e.signStyle = function () {
                            return this._signStyle;
                        }),
                        (e.withFixedWidth = function () {
                            return -1 === this._subsequentWidth ? this : new t(this._field, this._minWidth, this._maxWidth, this._signStyle, -1);
                        }),
                        (e.withSubsequentWidth = function (e) {
                            return new t(this._field, this._minWidth, this._maxWidth, this._signStyle, this._subsequentWidth + e);
                        }),
                        (e._isFixedWidth = function () {
                            return -1 === this._subsequentWidth || (this._subsequentWidth > 0 && this._minWidth === this._maxWidth && this._signStyle === St.NOT_NEGATIVE);
                        }),
                        (e.print = function (t, e) {
                            var n = t.getValue(this._field);
                            if (null == n) return !1;
                            var i = this._getValue(t, n),
                                s = t.symbols(),
                                o = "" + Math.abs(i);
                            if (o.length > this._maxWidth) throw new r("Field " + this._field + " cannot be printed as the value " + i + " exceeds the maximum print width of " + this._maxWidth);
                            if (((o = s.convertNumberToI18N(o)), i >= 0))
                                switch (this._signStyle) {
                                    case St.EXCEEDS_PAD:
                                        this._minWidth < 15 && i >= vt[this._minWidth] && e.append(s.positiveSign());
                                        break;
                                    case St.ALWAYS:
                                        e.append(s.positiveSign());
                                }
                            else
                                switch (this._signStyle) {
                                    case St.NORMAL:
                                    case St.EXCEEDS_PAD:
                                    case St.ALWAYS:
                                        e.append(s.negativeSign());
                                        break;
                                    case St.NOT_NEGATIVE:
                                        throw new r("Field " + this._field + " cannot be printed as the value " + i + " cannot be negative according to the SignStyle");
                                }
                            for (var a = 0; a < this._minWidth - o.length; a++) e.append(s.zeroDigit());
                            return e.append(o), !0;
                        }),
                        (e.parse = function (t, e, n) {
                            var i = e.length;
                            if (n === i) return ~n;
                            _(n >= 0 && n < i);
                            var r = e.charAt(n),
                                s = !1,
                                o = !1;
                            if (r === t.symbols().positiveSign()) {
                                if (!1 === this._signStyle.parse(!0, t.isStrict(), this._minWidth === this._maxWidth)) return ~n;
                                (o = !0), n++;
                            } else if (r === t.symbols().negativeSign()) {
                                if (!1 === this._signStyle.parse(!1, t.isStrict(), this._minWidth === this._maxWidth)) return ~n;
                                (s = !0), n++;
                            } else if (this._signStyle === St.ALWAYS && t.isStrict()) return ~n;
                            var u = t.isStrict() || this._isFixedWidth() ? this._minWidth : 1,
                                h = n + u;
                            if (h > i) return ~n;
                            for (var f = (t.isStrict() || this._isFixedWidth() ? this._maxWidth : 9) + Math.max(this._subsequentWidth, 0), c = 0, l = n, d = 0; d < 2; d++) {
                                for (var p = Math.min(l + f, i); l < p; ) {
                                    var m = e.charAt(l++),
                                        O = t.symbols().convertToDigit(m);
                                    if (O < 0) {
                                        if (--l < h) return ~n;
                                        break;
                                    }
                                    if (l - n > 15) throw new a("number text exceeds length");
                                    c = 10 * c + O;
                                }
                                if (!(this._subsequentWidth > 0 && 0 === d)) break;
                                var E = l - n;
                                (f = Math.max(u, E - this._subsequentWidth)), (l = n), (c = 0);
                            }
                            if (s) {
                                if (0 === c && t.isStrict()) return ~(n - 1);
                                0 !== c && (c = -c);
                            } else if (this._signStyle === St.EXCEEDS_PAD && t.isStrict()) {
                                var S = l - n;
                                if (o) {
                                    if (S <= this._minWidth) return ~(n - 1);
                                } else if (S > this._minWidth) return ~n;
                            }
                            return this._setValue(t, c, n, l);
                        }),
                        (e._getValue = function (t, e) {
                            return e;
                        }),
                        (e._setValue = function (t, e, n, i) {
                            return t.setParsedField(this._field, e, n, i);
                        }),
                        (e.toString = function () {
                            return 1 === this._minWidth && 15 === this._maxWidth && this._signStyle === St.NORMAL ? "Value(" + this._field + ")" : this._minWidth === this._maxWidth && this._signStyle === St.NOT_NEGATIVE ? "Value(" + this._field + "," + this._minWidth + ")" : "Value(" + this._field + "," + this._minWidth + "," + this._maxWidth + "," + this._signStyle + ")";
                        }),
                        t
                    );
                })(),
                yt = (function (t) {
                    function e(e, n, i, s, o) {
                        var a;
                        if (((a = t.call(this, e, n, i, St.NOT_NEGATIVE) || this), n < 1 || n > 10)) throw new u("The width must be from 1 to 10 inclusive but was " + n);
                        if (i < 1 || i > 10) throw new u("The maxWidth must be from 1 to 10 inclusive but was " + i);
                        if (i < n) throw new u("The maxWidth must be greater than the width");
                        if (null === o) {
                            if (!1 === e.range().isValidValue(s)) throw new u("The base value must be within the range of the field");
                            if (s + vt[n] > N.MAX_SAFE_INTEGER) throw new r("Unable to add printer-parser as the range exceeds the capacity of an int");
                        }
                        return (a._baseValue = s), (a._baseDate = o), a;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n._getValue = function (t, e) {
                            var n = Math.abs(e),
                                i = this._baseValue;
                            null !== this._baseDate && (t.temporal(), (i = ee.INSTANCE.date(this._baseDate).get(this._field)));
                            return e >= i && e < i + vt[this._minWidth] ? n % vt[this._minWidth] : n % vt[this._maxWidth];
                        }),
                        (n._setValue = function (t, e, n, i) {
                            var r = this._baseValue;
                            null != this._baseDate && (r = t.getEffectiveChronology().date(this._baseDate).get(this._field));
                            if (i - n === this._minWidth && e >= 0) {
                                var s = vt[this._minWidth],
                                    o = r - (r % s);
                                (e = r > 0 ? o + e : o - e) < r && (e += s);
                            }
                            return t.setParsedField(this._field, e, n, i);
                        }),
                        (n.withFixedWidth = function () {
                            return -1 === this._subsequentWidth ? this : new e(this._field, this._minWidth, this._maxWidth, this._baseValue, this._baseDate, -1);
                        }),
                        (n.withSubsequentWidth = function (t) {
                            return new e(this._field, this._minWidth, this._maxWidth, this._baseValue, this._baseDate, this._subsequentWidth + t);
                        }),
                        (n.isFixedWidth = function (e) {
                            return !1 !== e.isStrict() && t.prototype.isFixedWidth.call(this, e);
                        }),
                        (n.toString = function () {
                            return "ReducedValue(" + this._field + "," + this._minWidth + "," + this._maxWidth + "," + (null != this._baseDate ? this._baseDate : this._baseValue) + ")";
                        }),
                        e
                    );
                })(wt),
                Mt = ["+HH", "+HHmm", "+HH:mm", "+HHMM", "+HH:MM", "+HHMMss", "+HH:MM:ss", "+HHMMSS", "+HH:MM:SS"],
                Rt = (function () {
                    function t(t, e) {
                        d(t, "noOffsetText"), d(e, "pattern"), (this.noOffsetText = t), (this.type = this._checkPattern(e));
                    }
                    var e = t.prototype;
                    return (
                        (e._checkPattern = function (t) {
                            for (var e = 0; e < Mt.length; e++) if (Mt[e] === t) return e;
                            throw new u("Invalid zone offset pattern: " + t);
                        }),
                        (e.print = function (t, e) {
                            var n = t.getValue(g.OFFSET_SECONDS);
                            if (null == n) return !1;
                            var i = N.safeToInt(n);
                            if (0 === i) e.append(this.noOffsetText);
                            else {
                                var r = Math.abs(N.intMod(N.intDiv(i, 3600), 100)),
                                    s = Math.abs(N.intMod(N.intDiv(i, 60), 60)),
                                    o = Math.abs(N.intMod(i, 60)),
                                    a = e.length(),
                                    u = r;
                                e
                                    .append(i < 0 ? "-" : "+")
                                    .appendChar(N.intDiv(r, 10) + "0")
                                    .appendChar(N.intMod(r, 10) + "0"),
                                    (this.type >= 3 || (this.type >= 1 && s > 0)) &&
                                        (e
                                            .append(this.type % 2 == 0 ? ":" : "")
                                            .appendChar(N.intDiv(s, 10) + "0")
                                            .appendChar((s % 10) + "0"),
                                        (u += s),
                                        (this.type >= 7 || (this.type >= 5 && o > 0)) &&
                                            (e
                                                .append(this.type % 2 == 0 ? ":" : "")
                                                .appendChar(N.intDiv(o, 10) + "0")
                                                .appendChar((o % 10) + "0"),
                                            (u += o))),
                                    0 === u && (e.setLength(a), e.append(this.noOffsetText));
                            }
                            return !0;
                        }),
                        (e.parse = function (t, e, n) {
                            var i = e.length,
                                r = this.noOffsetText.length;
                            if (0 === r) {
                                if (n === i) return t.setParsedField(g.OFFSET_SECONDS, 0, n, n);
                            } else {
                                if (n === i) return ~n;
                                if (t.subSequenceEquals(e, n, this.noOffsetText, 0, r)) return t.setParsedField(g.OFFSET_SECONDS, 0, n, n + r);
                            }
                            var s = e[n];
                            if ("+" === s || "-" === s) {
                                var o = "-" === s ? -1 : 1,
                                    a = [0, 0, 0, 0];
                                if (((a[0] = n + 1), !1 === (this._parseNumber(a, 1, e, !0) || this._parseNumber(a, 2, e, this.type >= 3) || this._parseNumber(a, 3, e, !1)))) {
                                    var u = N.safeZero(o * (3600 * a[1] + 60 * a[2] + a[3]));
                                    return t.setParsedField(g.OFFSET_SECONDS, u, n, a[0]);
                                }
                            }
                            return 0 === r ? t.setParsedField(g.OFFSET_SECONDS, 0, n, n + r) : ~n;
                        }),
                        (e._parseNumber = function (t, e, n, i) {
                            if ((this.type + 3) / 2 < e) return !1;
                            var r = t[0];
                            if (this.type % 2 == 0 && e > 1) {
                                if (r + 1 > n.length || ":" !== n[r]) return i;
                                r++;
                            }
                            if (r + 2 > n.length) return i;
                            var s = n[r++],
                                o = n[r++];
                            if (s < "0" || s > "9" || o < "0" || o > "9") return i;
                            var a = 10 * (s.charCodeAt(0) - 48) + (o.charCodeAt(0) - 48);
                            return a < 0 || a > 59 ? i : ((t[e] = a), (t[0] = r), !1);
                        }),
                        (e.toString = function () {
                            var t = this.noOffsetText.replace("'", "''");
                            return "Offset(" + Mt[this.type] + ",'" + t + "')";
                        }),
                        t
                    );
                })();
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ (Rt.INSTANCE_ID = new Rt("Z", "+HH:MM:ss")), (Rt.PATTERNS = Mt);
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var gt = (function () {
                    function t(t, e, n) {
                        (this._printerParser = t), (this._padWidth = e), (this._padChar = n);
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            var n = e.length();
                            if (!1 === this._printerParser.print(t, e)) return !1;
                            var i = e.length() - n;
                            if (i > this._padWidth) throw new r("Cannot print as output of " + i + " characters exceeds pad width of " + this._padWidth);
                            for (var s = 0; s < this._padWidth - i; s++) e.insert(n, this._padChar);
                            return !0;
                        }),
                        (e.parse = function (t, e, n) {
                            var i = t.isStrict(),
                                r = t.isCaseSensitive();
                            if ((_(!(n > e.length)), _(n >= 0), n === e.length)) return ~n;
                            var s = n + this._padWidth;
                            if (s > e.length) {
                                if (i) return ~n;
                                s = e.length;
                            }
                            for (var o = n; o < s && (r ? e[o] === this._padChar : t.charEquals(e[o], this._padChar)); ) o++;
                            e = e.substring(0, s);
                            var a = this._printerParser.parse(t, e, o);
                            return a !== s && i ? ~(n + o) : a;
                        }),
                        (e.toString = function () {
                            return "Pad(" + this._printerParser + "," + this._padWidth + (" " === this._padChar ? ")" : ",'" + this._padChar + "')");
                        }),
                        t
                    );
                })(),
                It = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.print = function () {
                            return !0;
                        }),
                        (n.parse = function (t, n, i) {
                            switch (this) {
                                case e.SENSITIVE:
                                    t.setCaseSensitive(!0);
                                    break;
                                case e.INSENSITIVE:
                                    t.setCaseSensitive(!1);
                                    break;
                                case e.STRICT:
                                    t.setStrict(!0);
                                    break;
                                case e.LENIENT:
                                    t.setStrict(!1);
                            }
                            return i;
                        }),
                        (n.toString = function () {
                            switch (this) {
                                case e.SENSITIVE:
                                    return "ParseCaseSensitive(true)";
                                case e.INSENSITIVE:
                                    return "ParseCaseSensitive(false)";
                                case e.STRICT:
                                    return "ParseStrict(true)";
                                case e.LENIENT:
                                    return "ParseStrict(false)";
                            }
                        }),
                        e
                    );
                })(D);
            (It.SENSITIVE = new It("SENSITIVE")), (It.INSENSITIVE = new It("INSENSITIVE")), (It.STRICT = new It("STRICT")), (It.LENIENT = new It("LENIENT"));
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Ft = (function () {
                    function t(t) {
                        this._literal = t;
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            return e.append(this._literal), !0;
                        }),
                        (e.parse = function (t, e, n) {
                            return _(!(n > e.length || n < 0)), !1 === t.subSequenceEquals(e, n, this._literal, 0, this._literal.length) ? ~n : n + this._literal.length;
                        }),
                        (e.toString = function () {
                            return "'" + this._literal.replace("'", "''") + "'";
                        }),
                        t
                    );
                })(),
                Yt = (function () {
                    function t() {}
                    return (
                        (t.getRules = function (t) {
                            throw new r("unsupported ZoneId:" + t);
                        }),
                        (t.getAvailableZoneIds = function () {
                            return [];
                        }),
                        t
                    );
                })(),
                Ct = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._id = e), (i._rules = n), i;
                    }
                    c(e, t),
                        (e.ofId = function (t) {
                            return new e(t, Yt.getRules(t));
                        });
                    var n = e.prototype;
                    return (
                        (n.id = function () {
                            return this._id;
                        }),
                        (n.rules = function () {
                            return this._rules;
                        }),
                        e
                    );
                })(j),
                Lt = (function () {
                    function t(t, e) {
                        (this.query = t), (this.description = e);
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            var n = t.getValueQuery(this.query);
                            return null != n && (e.append(n.id()), !0);
                        }),
                        (e.parse = function (t, e, n) {
                            var i = e.length;
                            if (n > i) return ~n;
                            if (n === i) return ~n;
                            var r = e.charAt(n);
                            if ("+" === r || "-" === r) {
                                var s = t.copy(),
                                    o = Rt.INSTANCE_ID.parse(s, e, n);
                                if (o < 0) return o;
                                var a = s.getParsed(g.OFFSET_SECONDS),
                                    u = $.ofTotalSeconds(a);
                                return t.setParsedZone(u), o;
                            }
                            if (i >= n + 2) {
                                var h = e.charAt(n + 1);
                                if (t.charEquals(r, "U") && t.charEquals(h, "T")) return i >= n + 3 && t.charEquals(e.charAt(n + 2), "C") ? this._parsePrefixedOffset(t, e, n, n + 3) : this._parsePrefixedOffset(t, e, n, n + 2);
                                if (t.charEquals(r, "G") && i >= n + 3 && t.charEquals(h, "M") && t.charEquals(e.charAt(n + 2), "T")) return this._parsePrefixedOffset(t, e, n, n + 3);
                            }
                            if ("SYSTEM" === e.substr(n, 6)) return t.setParsedZone(j.systemDefault()), n + 6;
                            if (t.charEquals(r, "Z")) return t.setParsedZone($.UTC), n + 1;
                            var f = Yt.getAvailableZoneIds();
                            Vt.size !== f.length && (Vt = Ut.createTreeMap(f));
                            for (var c = i - n, l = Vt.treeMap, _ = null, d = 0; null != l; ) {
                                var p = e.substr(n, Math.min(l.length, c));
                                null != (l = l.get(p)) && l.isLeaf && ((_ = p), (d = l.length));
                            }
                            return null != _ ? (t.setParsedZone(Ct.ofId(_)), n + d) : ~n;
                        }),
                        (e._parsePrefixedOffset = function (t, e, n, i) {
                            var r = e.substring(n, i).toUpperCase(),
                                s = t.copy();
                            if (i < e.length && t.charEquals(e.charAt(i), "Z")) return t.setParsedZone(j.ofOffset(r, $.UTC)), i;
                            var o = Rt.INSTANCE_ID.parse(s, e, i);
                            if (o < 0) return t.setParsedZone(j.ofOffset(r, $.UTC)), i;
                            var a = s.getParsed(g.OFFSET_SECONDS),
                                u = $.ofTotalSeconds(a);
                            return t.setParsedZone(j.ofOffset(r, u)), o;
                        }),
                        (e.toString = function () {
                            return this.description;
                        }),
                        t
                    );
                })(),
                Ut = (function () {
                    function t(t, e) {
                        (this.size = t), (this.treeMap = e);
                    }
                    return (
                        (t.createTreeMap = function (e) {
                            for (
                                var n = e.sort(function (t, e) {
                                        return t.length - e.length;
                                    }),
                                    i = new Pt(n[0].length, !1),
                                    r = 0;
                                r < n.length;
                                r++
                            )
                                i.add(n[r]);
                            return new t(n.length, i);
                        }),
                        t
                    );
                })(),
                Pt = (function () {
                    function t(t, e) {
                        void 0 === t && (t = 0), void 0 === e && (e = !1), (this.length = t), (this.isLeaf = e), (this._treeMap = {});
                    }
                    var e = t.prototype;
                    return (
                        (e.add = function (e) {
                            var n = e.length;
                            if (n === this.length) this._treeMap[e] = new t(n, !0);
                            else if (n > this.length) {
                                var i = e.substr(0, this.length),
                                    r = this._treeMap[i];
                                null == r && ((r = new t(n, !1)), (this._treeMap[i] = r)), r.add(e);
                            }
                        }),
                        (e.get = function (t) {
                            return this._treeMap[t];
                        }),
                        t
                    );
                })(),
                Vt = new Ut([]),
                bt = 15,
                Ht = (function () {
                    function t() {
                        (this._active = this), (this._parent = null), (this._printerParsers = []), (this._optional = !1), (this._padNextWidth = 0), (this._padNextChar = null), (this._valueParserIndex = -1);
                    }
                    t._of = function (e, n) {
                        d(e, "parent"), d(n, "optional");
                        var i = new t();
                        return (i._parent = e), (i._optional = n), i;
                    };
                    var e = t.prototype;
                    return (
                        (e.parseCaseSensitive = function () {
                            return this._appendInternalPrinterParser(It.SENSITIVE), this;
                        }),
                        (e.parseCaseInsensitive = function () {
                            return this._appendInternalPrinterParser(It.INSENSITIVE), this;
                        }),
                        (e.parseStrict = function () {
                            return this._appendInternalPrinterParser(It.STRICT), this;
                        }),
                        (e.parseLenient = function () {
                            return this._appendInternalPrinterParser(It.LENIENT), this;
                        }),
                        (e.appendValue = function () {
                            return 1 === arguments.length ? this._appendValue1.apply(this, arguments) : 2 === arguments.length ? this._appendValue2.apply(this, arguments) : this._appendValue4.apply(this, arguments);
                        }),
                        (e._appendValue1 = function (t) {
                            return d(t), this._appendValuePrinterParser(new wt(t, 1, bt, St.NORMAL)), this;
                        }),
                        (e._appendValue2 = function (t, e) {
                            if ((d(t), e < 1 || e > bt)) throw new u("The width must be from 1 to 15 inclusive but was " + e);
                            var n = new wt(t, e, e, St.NOT_NEGATIVE);
                            return this._appendValuePrinterParser(n), this;
                        }),
                        (e._appendValue4 = function (t, e, n, i) {
                            if ((d(t), d(i), e === n && i === St.NOT_NEGATIVE)) return this._appendValue2(t, n);
                            if (e < 1 || e > bt) throw new u("The minimum width must be from 1 to 15 inclusive but was " + e);
                            if (n < 1 || n > bt) throw new u("The minimum width must be from 1 to 15 inclusive but was " + n);
                            if (n < e) throw new u("The maximum width must exceed or equal the minimum width but " + n + " < " + e);
                            var r = new wt(t, e, n, i);
                            return this._appendValuePrinterParser(r), this;
                        }),
                        (e.appendValueReduced = function () {
                            return 4 === arguments.length && arguments[3] instanceof z ? this._appendValueReducedFieldWidthMaxWidthBaseDate.apply(this, arguments) : this._appendValueReducedFieldWidthMaxWidthBaseValue.apply(this, arguments);
                        }),
                        (e._appendValueReducedFieldWidthMaxWidthBaseValue = function (t, e, n, i) {
                            d(t, "field");
                            var r = new yt(t, e, n, i, null);
                            return this._appendValuePrinterParser(r), this;
                        }),
                        (e._appendValueReducedFieldWidthMaxWidthBaseDate = function (t, e, n, i) {
                            d(t, "field"), d(i, "baseDate"), p(i, z, "baseDate");
                            var r = new yt(t, e, n, 0, i);
                            return this._appendValuePrinterParser(r), this;
                        }),
                        (e._appendValuePrinterParser = function (t) {
                            if ((_(null != t), this._active._valueParserIndex >= 0 && this._active._printerParsers[this._active._valueParserIndex] instanceof wt)) {
                                var e = this._active._valueParserIndex,
                                    n = this._active._printerParsers[e];
                                t.minWidth() === t.maxWidth() && t.signStyle() === St.NOT_NEGATIVE ? ((n = n.withSubsequentWidth(t.maxWidth())), this._appendInternal(t.withFixedWidth()), (this._active._valueParserIndex = e)) : ((n = n.withFixedWidth()), (this._active._valueParserIndex = this._appendInternal(t))), (this._active._printerParsers[e] = n);
                            } else this._active._valueParserIndex = this._appendInternal(t);
                            return this;
                        }),
                        (e.appendFraction = function (t, e, n, i) {
                            return this._appendInternal(new Tt(t, e, n, i)), this;
                        }),
                        (e.appendInstant = function (t) {
                            if ((void 0 === t && (t = -2), t < -2 || t > 9)) throw new u("Invalid fractional digits: " + t);
                            return this._appendInternal(new kt(t)), this;
                        }),
                        (e.appendOffsetId = function () {
                            return this._appendInternal(Rt.INSTANCE_ID), this;
                        }),
                        (e.appendOffset = function (t, e) {
                            return this._appendInternalPrinterParser(new Rt(e, t)), this;
                        }),
                        (e.appendZoneId = function () {
                            return this._appendInternal(new Lt(I.zoneId(), "ZoneId()")), this;
                        }),
                        (e.appendPattern = function (t) {
                            return d(t, "pattern"), this._parsePattern(t), this;
                        }),
                        (e.appendZoneText = function () {
                            throw new u("Pattern using (localized) text not implemented, use js-joda-locale plugin!");
                        }),
                        (e.appendText = function () {
                            throw new u("Pattern using (localized) text not implemented, use js-joda-locale plugin!");
                        }),
                        (e.appendLocalizedOffset = function () {
                            throw new u("Pattern using (localized) text not implemented, use js-joda-locale plugin!");
                        }),
                        (e.appendWeekField = function () {
                            throw new u("Pattern using (localized) text not implemented, use js-joda-locale plugin!");
                        }),
                        (e._parsePattern = function (t) {
                            for (var e = { G: g.ERA, y: g.YEAR_OF_ERA, u: g.YEAR, Q: rt.QUARTER_OF_YEAR, q: rt.QUARTER_OF_YEAR, M: g.MONTH_OF_YEAR, L: g.MONTH_OF_YEAR, D: g.DAY_OF_YEAR, d: g.DAY_OF_MONTH, F: g.ALIGNED_DAY_OF_WEEK_IN_MONTH, E: g.DAY_OF_WEEK, c: g.DAY_OF_WEEK, e: g.DAY_OF_WEEK, a: g.AMPM_OF_DAY, H: g.HOUR_OF_DAY, k: g.CLOCK_HOUR_OF_DAY, K: g.HOUR_OF_AMPM, h: g.CLOCK_HOUR_OF_AMPM, m: g.MINUTE_OF_HOUR, s: g.SECOND_OF_MINUTE, S: g.NANO_OF_SECOND, A: g.MILLI_OF_DAY, n: g.NANO_OF_SECOND, N: g.NANO_OF_DAY }, n = 0; n < t.length; n++) {
                                var i = t.charAt(n);
                                if ((i >= "A" && i <= "Z") || (i >= "a" && i <= "z")) {
                                    for (var r = n++; n < t.length && t.charAt(n) === i; n++);
                                    var s = n - r;
                                    if ("p" === i) {
                                        var o = 0;
                                        if (n < t.length && (((i = t.charAt(n)) >= "A" && i <= "Z") || (i >= "a" && i <= "z"))) {
                                            for (o = s, r = n++; n < t.length && t.charAt(n) === i; n++);
                                            s = n - r;
                                        }
                                        if (0 === o) throw new u("Pad letter 'p' must be followed by valid pad pattern: " + t);
                                        this.padNext(o);
                                    }
                                    var a = e[i];
                                    if (null != a) this._parseField(i, s, a);
                                    else if ("z" === i) {
                                        if (s > 4) throw new u("Too many pattern letters: " + i);
                                        4 === s ? this.appendZoneText(Nt.FULL) : this.appendZoneText(Nt.SHORT);
                                    } else if ("V" === i) {
                                        if (2 !== s) throw new u("Pattern letter count must be 2: " + i);
                                        this.appendZoneId();
                                    } else if ("Z" === i)
                                        if (s < 4) this.appendOffset("+HHMM", "+0000");
                                        else if (4 === s) this.appendLocalizedOffset(Nt.FULL);
                                        else {
                                            if (5 !== s) throw new u("Too many pattern letters: " + i);
                                            this.appendOffset("+HH:MM:ss", "Z");
                                        }
                                    else if ("O" === i)
                                        if (1 === s) this.appendLocalizedOffset(Nt.SHORT);
                                        else {
                                            if (4 !== s) throw new u("Pattern letter count must be 1 or 4: " + i);
                                            this.appendLocalizedOffset(Nt.FULL);
                                        }
                                    else if ("X" === i) {
                                        if (s > 5) throw new u("Too many pattern letters: " + i);
                                        this.appendOffset(Rt.PATTERNS[s + (1 === s ? 0 : 1)], "Z");
                                    } else if ("x" === i) {
                                        if (s > 5) throw new u("Too many pattern letters: " + i);
                                        var h = 1 === s ? "+00" : s % 2 == 0 ? "+0000" : "+00:00";
                                        this.appendOffset(Rt.PATTERNS[s + (1 === s ? 0 : 1)], h);
                                    } else if ("W" === i) {
                                        if (s > 1) throw new u("Too many pattern letters: " + i);
                                        this.appendWeekField("W", s);
                                    } else if ("w" === i) {
                                        if (s > 2) throw new u("Too many pattern letters: " + i);
                                        this.appendWeekField("w", s);
                                    } else {
                                        if ("Y" !== i) throw new u("Unknown pattern letter: " + i);
                                        this.appendWeekField("Y", s);
                                    }
                                    n--;
                                } else if ("'" === i) {
                                    for (var f = n++; n < t.length; n++)
                                        if ("'" === t.charAt(n)) {
                                            if (!(n + 1 < t.length && "'" === t.charAt(n + 1))) break;
                                            n++;
                                        }
                                    if (n >= t.length) throw new u("Pattern ends with an incomplete string literal: " + t);
                                    var c = t.substring(f + 1, n);
                                    0 === c.length ? this.appendLiteral("'") : this.appendLiteral(c.replace("''", "'"));
                                } else if ("[" === i) this.optionalStart();
                                else if ("]" === i) {
                                    if (null === this._active._parent) throw new u("Pattern invalid as it contains ] without previous [");
                                    this.optionalEnd();
                                } else {
                                    if ("{" === i || "}" === i || "#" === i) throw new u("Pattern includes reserved character: '" + i + "'");
                                    this.appendLiteral(i);
                                }
                            }
                        }),
                        (e._parseField = function (t, e, n) {
                            switch (t) {
                                case "u":
                                case "y":
                                    2 === e ? this.appendValueReduced(n, 2, 2, yt.BASE_DATE) : e < 4 ? this.appendValue(n, e, bt, St.NORMAL) : this.appendValue(n, e, bt, St.EXCEEDS_PAD);
                                    break;
                                case "M":
                                case "Q":
                                    switch (e) {
                                        case 1:
                                            this.appendValue(n);
                                            break;
                                        case 2:
                                            this.appendValue(n, 2);
                                            break;
                                        case 3:
                                            this.appendText(n, Nt.SHORT);
                                            break;
                                        case 4:
                                            this.appendText(n, Nt.FULL);
                                            break;
                                        case 5:
                                            this.appendText(n, Nt.NARROW);
                                            break;
                                        default:
                                            throw new u("Too many pattern letters: " + t);
                                    }
                                    break;
                                case "L":
                                case "q":
                                    switch (e) {
                                        case 1:
                                            this.appendValue(n);
                                            break;
                                        case 2:
                                            this.appendValue(n, 2);
                                            break;
                                        case 3:
                                            this.appendText(n, Nt.SHORT_STANDALONE);
                                            break;
                                        case 4:
                                            this.appendText(n, Nt.FULL_STANDALONE);
                                            break;
                                        case 5:
                                            this.appendText(n, Nt.NARROW_STANDALONE);
                                            break;
                                        default:
                                            throw new u("Too many pattern letters: " + t);
                                    }
                                    break;
                                case "e":
                                    switch (e) {
                                        case 1:
                                        case 2:
                                            this.appendWeekField("e", e);
                                            break;
                                        case 3:
                                            this.appendText(n, Nt.SHORT);
                                            break;
                                        case 4:
                                            this.appendText(n, Nt.FULL);
                                            break;
                                        case 5:
                                            this.appendText(n, Nt.NARROW);
                                            break;
                                        default:
                                            throw new u("Too many pattern letters: " + t);
                                    }
                                    break;
                                case "c":
                                    switch (e) {
                                        case 1:
                                            this.appendWeekField("c", e);
                                            break;
                                        case 2:
                                            throw new u("Invalid number of pattern letters: " + t);
                                        case 3:
                                            this.appendText(n, Nt.SHORT_STANDALONE);
                                            break;
                                        case 4:
                                            this.appendText(n, Nt.FULL_STANDALONE);
                                            break;
                                        case 5:
                                            this.appendText(n, Nt.NARROW_STANDALONE);
                                            break;
                                        default:
                                            throw new u("Too many pattern letters: " + t);
                                    }
                                    break;
                                case "a":
                                    if (1 !== e) throw new u("Too many pattern letters: " + t);
                                    this.appendText(n, Nt.SHORT);
                                    break;
                                case "E":
                                case "G":
                                    switch (e) {
                                        case 1:
                                        case 2:
                                        case 3:
                                            this.appendText(n, Nt.SHORT);
                                            break;
                                        case 4:
                                            this.appendText(n, Nt.FULL);
                                            break;
                                        case 5:
                                            this.appendText(n, Nt.NARROW);
                                            break;
                                        default:
                                            throw new u("Too many pattern letters: " + t);
                                    }
                                    break;
                                case "S":
                                    this.appendFraction(g.NANO_OF_SECOND, e, e, !1);
                                    break;
                                case "F":
                                    if (1 !== e) throw new u("Too many pattern letters: " + t);
                                    this.appendValue(n);
                                    break;
                                case "d":
                                case "h":
                                case "H":
                                case "k":
                                case "K":
                                case "m":
                                case "s":
                                    if (1 === e) this.appendValue(n);
                                    else {
                                        if (2 !== e) throw new u("Too many pattern letters: " + t);
                                        this.appendValue(n, e);
                                    }
                                    break;
                                case "D":
                                    if (1 === e) this.appendValue(n);
                                    else {
                                        if (!(e <= 3)) throw new u("Too many pattern letters: " + t);
                                        this.appendValue(n, e);
                                    }
                                    break;
                                default:
                                    1 === e ? this.appendValue(n) : this.appendValue(n, e);
                            }
                        }),
                        (e.padNext = function () {
                            return 1 === arguments.length ? this._padNext1.apply(this, arguments) : this._padNext2.apply(this, arguments);
                        }),
                        (e._padNext1 = function (t) {
                            return this._padNext2(t, " ");
                        }),
                        (e._padNext2 = function (t, e) {
                            if (t < 1) throw new u("The pad width must be at least one but was " + t);
                            return (this._active._padNextWidth = t), (this._active._padNextChar = e), (this._active._valueParserIndex = -1), this;
                        }),
                        (e.optionalStart = function () {
                            return (this._active._valueParserIndex = -1), (this._active = t._of(this._active, !0)), this;
                        }),
                        (e.optionalEnd = function () {
                            if (null == this._active._parent) throw new h("Cannot call optionalEnd() as there was no previous call to optionalStart()");
                            if (this._active._printerParsers.length > 0) {
                                var t = new At(this._active._printerParsers, this._active._optional);
                                (this._active = this._active._parent), this._appendInternal(t);
                            } else this._active = this._active._parent;
                            return this;
                        }),
                        (e._appendInternal = function (t) {
                            return _(null != t), this._active._padNextWidth > 0 && (null != t && (t = new gt(t, this._active._padNextWidth, this._active._padNextChar)), (this._active._padNextWidth = 0), (this._active._padNextChar = 0)), this._active._printerParsers.push(t), (this._active._valueParserIndex = -1), this._active._printerParsers.length - 1;
                        }),
                        (e.appendLiteral = function (t) {
                            return _(null != t), t.length > 0 && (1 === t.length ? this._appendInternalPrinterParser(new Dt(t.charAt(0))) : this._appendInternalPrinterParser(new Ft(t))), this;
                        }),
                        (e._appendInternalPrinterParser = function (t) {
                            return _(null != t), this._active._padNextWidth > 0 && (null != t && (t = new gt(t, this._active._padNextWidth, this._active._padNextChar)), (this._active._padNextWidth = 0), (this._active._padNextChar = 0)), this._active._printerParsers.push(t), (this._active._valueParserIndex = -1), this._active._printerParsers.length - 1;
                        }),
                        (e.append = function (t) {
                            return d(t, "formatter"), this._appendInternal(t._toPrinterParser(!1)), this;
                        }),
                        (e.toFormatter = function (t) {
                            for (void 0 === t && (t = k.SMART); null != this._active._parent; ) this.optionalEnd();
                            var e = new At(this._printerParsers, !1);
                            return new qt(e, null, Et.STANDARD, t, null, null, null);
                        }),
                        t
                    );
                })(),
                Wt = 31556952e4,
                xt = 62167219200,
                kt = (function () {
                    function t(t) {
                        this.fractionalDigits = t;
                    }
                    var e = t.prototype;
                    return (
                        (e.print = function (t, e) {
                            var n = t.getValue(g.INSTANT_SECONDS),
                                i = 0;
                            if ((t.temporal().isSupported(g.NANO_OF_SECOND) && (i = t.temporal().getLong(g.NANO_OF_SECOND)), null == n)) return !1;
                            var r = n,
                                s = g.NANO_OF_SECOND.checkValidIntValue(i);
                            if (r >= -62167219200) {
                                var o = r - Wt + xt,
                                    a = N.floorDiv(o, Wt) + 1,
                                    u = N.floorMod(o, Wt),
                                    h = fe.ofEpochSecond(u - xt, 0, $.UTC);
                                a > 0 && e.append("+").append(a), e.append(h), 0 === h.second() && e.append(":00");
                            } else {
                                var f = r + xt,
                                    c = N.intDiv(f, Wt),
                                    l = N.intMod(f, Wt),
                                    _ = fe.ofEpochSecond(l - xt, 0, $.UTC),
                                    d = e.length();
                                e.append(_), 0 === _.second() && e.append(":00"), c < 0 && (-1e4 === _.year() ? e.replace(d, d + 2, "" + (c - 1)) : 0 === l ? e.insert(d, c) : e.insert(d + 1, Math.abs(c)));
                            }
                            if (-2 === this.fractionalDigits) 0 !== s && (e.append("."), 0 === N.intMod(s, 1e6) ? e.append(("" + (N.intDiv(s, 1e6) + 1e3)).substring(1)) : 0 === N.intMod(s, 1e3) ? e.append(("" + (N.intDiv(s, 1e3) + 1e6)).substring(1)) : e.append(("" + (s + 1e9)).substring(1)));
                            else if (this.fractionalDigits > 0 || (-1 === this.fractionalDigits && s > 0)) {
                                e.append(".");
                                for (var p = 1e8, m = 0; (-1 === this.fractionalDigits && s > 0) || m < this.fractionalDigits; m++) {
                                    var O = N.intDiv(s, p);
                                    e.append(O), (s -= O * p), (p = N.intDiv(p, 10));
                                }
                            }
                            return e.append("Z"), !0;
                        }),
                        (e.parse = function (t, e, n) {
                            var i = t.copy(),
                                r = this.fractionalDigits < 0 ? 0 : this.fractionalDigits,
                                s = this.fractionalDigits < 0 ? 9 : this.fractionalDigits,
                                o = new Ht().append(qt.ISO_LOCAL_DATE).appendLiteral("T").appendValue(g.HOUR_OF_DAY, 2).appendLiteral(":").appendValue(g.MINUTE_OF_HOUR, 2).appendLiteral(":").appendValue(g.SECOND_OF_MINUTE, 2).appendFraction(g.NANO_OF_SECOND, r, s, !0).appendLiteral("Z").toFormatter()._toPrinterParser(!1).parse(i, e, n);
                            if (o < 0) return o;
                            var a,
                                u = i.getParsed(g.YEAR),
                                h = i.getParsed(g.MONTH_OF_YEAR),
                                f = i.getParsed(g.DAY_OF_MONTH),
                                c = i.getParsed(g.HOUR_OF_DAY),
                                l = i.getParsed(g.MINUTE_OF_HOUR),
                                _ = i.getParsed(g.SECOND_OF_MINUTE),
                                d = i.getParsed(g.NANO_OF_SECOND),
                                p = null != _ ? _ : 0,
                                m = null != d ? d : 0,
                                O = N.intMod(u, 1e4),
                                E = 0;
                            24 === c && 0 === l && 0 === p && 0 === m ? ((c = 0), (E = 1)) : 23 === c && 59 === l && 60 === p && (t.setParsedLeapSecond(), (p = 59));
                            try {
                                (a = fe.of(O, h, f, c, l, p, 0).plusDays(E).toEpochSecond($.UTC)), (a += N.safeMultiply(N.intDiv(u, 1e4), Wt));
                            } catch (t) {
                                return ~n;
                            }
                            var S = o;
                            return (S = t.setParsedField(g.INSTANT_SECONDS, a, n, S)), t.setParsedField(g.NANO_OF_SECOND, m, n, S);
                        }),
                        (e.toString = function () {
                            return "Instant()";
                        }),
                        t
                    );
                })();
            /*
             * @copyright (c) 2016, Philipp Thürwächter, Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Bt = (function () {
                    function t() {
                        this._str = "";
                    }
                    var e = t.prototype;
                    return (
                        (e.append = function (t) {
                            return (this._str += t), this;
                        }),
                        (e.appendChar = function (t) {
                            return (this._str += t[0]), this;
                        }),
                        (e.insert = function (t, e) {
                            return (this._str = this._str.slice(0, t) + e + this._str.slice(t)), this;
                        }),
                        (e.replace = function (t, e, n) {
                            return (this._str = this._str.slice(0, t) + n + this._str.slice(e)), this;
                        }),
                        (e.length = function () {
                            return this._str.length;
                        }),
                        (e.setLength = function (t) {
                            return (this._str = this._str.slice(0, t)), this;
                        }),
                        (e.toString = function () {
                            return this._str;
                        }),
                        t
                    );
                })(),
                qt = (function () {
                    function t(t, e, n, i, r, s, o) {
                        void 0 === s && (s = ee.INSTANCE), _(null != t), _(null != n), _(null != i), (this._printerParser = t), (this._locale = e), (this._decimalStyle = n), (this._resolverStyle = i), (this._resolverFields = r), (this._chrono = s), (this._zone = o);
                    }
                    (t.parsedExcessDays = function () {
                        return t.PARSED_EXCESS_DAYS;
                    }),
                        (t.parsedLeapSecond = function () {
                            return t.PARSED_LEAP_SECOND;
                        }),
                        (t.ofPattern = function (t) {
                            return new Ht().appendPattern(t).toFormatter();
                        });
                    var e = t.prototype;
                    return (
                        (e.locale = function () {
                            return this._locale;
                        }),
                        (e.decimalStyle = function () {
                            return this._decimalStyle;
                        }),
                        (e.chronology = function () {
                            return this._chrono;
                        }),
                        (e.withChronology = function (e) {
                            return null != this._chrono && this._chrono.equals(e) ? this : new t(this._printerParser, this._locale, this._decimalStyle, this._resolverStyle, this._resolverFields, e, this._zone);
                        }),
                        (e.withLocale = function () {
                            return this;
                        }),
                        (e.withResolverStyle = function (e) {
                            return d(e, "resolverStyle"), e.equals(this._resolverStyle) ? this : new t(this._printerParser, this._locale, this._decimalStyle, e, this._resolverFields, this._chrono, this._zone);
                        }),
                        (e.format = function (t) {
                            var e = new Bt(32);
                            return this._formatTo(t, e), e.toString();
                        }),
                        (e._formatTo = function (t, e) {
                            d(t, "temporal"), d(e, "appendable");
                            var n = new it(t, this);
                            this._printerParser.print(n, e);
                        }),
                        (e.parse = function (t, e) {
                            return 1 === arguments.length ? this.parse1(t) : this.parse2(t, e);
                        }),
                        (e.parse1 = function (t) {
                            d(t, "text");
                            try {
                                return this._parseToBuilder(t, null).resolve(this._resolverStyle, this._resolverFields);
                            } catch (e) {
                                throw e instanceof s ? e : this._createError(t, e);
                            }
                        }),
                        (e.parse2 = function (t, e) {
                            d(t, "text"), d(e, "type");
                            try {
                                return this._parseToBuilder(t, null).resolve(this._resolverStyle, this._resolverFields).build(e);
                            } catch (e) {
                                throw e instanceof s ? e : this._createError(t, e);
                            }
                        }),
                        (e._createError = function (t, e) {
                            var n = "";
                            return (n = t.length > 64 ? t.substring(0, 64) + "..." : t), new s("Text '" + n + "' could not be parsed: " + e.message, t, 0, e);
                        }),
                        (e._parseToBuilder = function (t, e) {
                            var n = null != e ? e : new W(0),
                                i = this._parseUnresolved0(t, n);
                            if (null == i || n.getErrorIndex() >= 0 || (null == e && n.getIndex() < t.length)) {
                                var r = "";
                                throw ((r = t.length > 64 ? t.substr(0, 64).toString() + "..." : t), n.getErrorIndex() >= 0 ? new s("Text '" + r + "' could not be parsed at index " + n.getErrorIndex(), t, n.getErrorIndex()) : new s("Text '" + r + "' could not be parsed, unparsed text found at index " + n.getIndex(), t, n.getIndex()));
                            }
                            return i.toBuilder();
                        }),
                        (e.parseUnresolved = function (t, e) {
                            return this._parseUnresolved0(t, e);
                        }),
                        (e._parseUnresolved0 = function (t, e) {
                            _(null != t, "text", f), _(null != e, "position", f);
                            var n = new et(this),
                                i = e.getIndex();
                            return (i = this._printerParser.parse(n, t, i)) < 0 ? (e.setErrorIndex(~i), null) : (e.setIndex(i), n.toParsed());
                        }),
                        (e._toPrinterParser = function (t) {
                            return this._printerParser.withOptional(t);
                        }),
                        (e.toString = function () {
                            var t = this._printerParser.toString();
                            return 0 === t.indexOf("[") ? t : t.substring(1, t.length - 1);
                        }),
                        t
                    );
                })();
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */ var Zt,
                zt = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._month = N.safeToInt(e)), (i._day = N.safeToInt(n)), i;
                    }
                    c(e, t),
                        (e.now = function (t) {
                            return 0 === arguments.length ? e.now0() : 1 === arguments.length && t instanceof j ? e.nowZoneId(t) : e.nowClock(t);
                        }),
                        (e.now0 = function () {
                            return this.nowClock(de.systemDefaultZone());
                        }),
                        (e.nowZoneId = function (t) {
                            return d(t, "zone"), this.nowClock(de.system(t));
                        }),
                        (e.nowClock = function (t) {
                            d(t, "clock");
                            var n = ue.now(t);
                            return e.of(n.month(), n.dayOfMonth());
                        }),
                        (e.of = function (t, n) {
                            return 2 === arguments.length && t instanceof V ? e.ofMonthNumber(t, n) : e.ofNumberNumber(t, n);
                        }),
                        (e.ofMonthNumber = function (t, n) {
                            if ((d(t, "month"), g.DAY_OF_MONTH.checkValidValue(n), n > t.maxLength())) throw new r("Illegal value for DayOfMonth field, value " + n + " is not valid for month " + t.toString());
                            return new e(t.value(), n);
                        }),
                        (e.ofNumberNumber = function (t, n) {
                            return d(t, "month"), d(n, "dayOfMonth"), e.of(V.of(t), n);
                        }),
                        (e.from = function (t) {
                            if ((d(t, "temporal"), p(t, F, "temporal"), t instanceof e)) return t;
                            try {
                                return e.of(t.get(g.MONTH_OF_YEAR), t.get(g.DAY_OF_MONTH));
                            } catch (e) {
                                throw new r("Unable to obtain MonthDay from TemporalAccessor: " + t + ", type " + (t && null != t.constructor ? t.constructor.name : ""));
                            }
                        }),
                        (e.parse = function (t, n) {
                            return 1 === arguments.length ? e.parseString(t) : e.parseStringFormatter(t, n);
                        }),
                        (e.parseString = function (t) {
                            return e.parseStringFormatter(t, Zt);
                        }),
                        (e.parseStringFormatter = function (t, n) {
                            return d(t, "text"), d(n, "formatter"), p(n, qt, "formatter"), n.parse(t, e.FROM);
                        });
                    var n = e.prototype;
                    return (
                        (n.monthValue = function () {
                            return this._month;
                        }),
                        (n.month = function () {
                            return V.of(this._month);
                        }),
                        (n.dayOfMonth = function () {
                            return this._day;
                        }),
                        (n.isSupported = function (t) {
                            return t instanceof g ? t === g.MONTH_OF_YEAR || t === g.DAY_OF_MONTH : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (e) {
                            return e === g.MONTH_OF_YEAR ? e.range() : e === g.DAY_OF_MONTH ? R.of(1, this.month().minLength(), this.month().maxLength()) : t.prototype.range.call(this, e);
                        }),
                        (n.get = function (t) {
                            return this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (n.getLong = function (t) {
                            if ((d(t, "field"), t instanceof g)) {
                                switch (t) {
                                    case g.DAY_OF_MONTH:
                                        return this._day;
                                    case g.MONTH_OF_YEAR:
                                        return this._month;
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.getFrom(this);
                        }),
                        (n.isValidYear = function (t) {
                            return !1 == (29 === this._day && 2 === this._month && !1 === Xt.isLeap(t));
                        }),
                        (n.withMonth = function (t) {
                            return this.with(V.of(t));
                        }),
                        (n.with = function (t) {
                            if ((d(t, "month"), t.value() === this._month)) return this;
                            var n = Math.min(this._day, t.maxLength());
                            return new e(t.value(), n);
                        }),
                        (n.withDayOfMonth = function (t) {
                            return t === this._day ? this : e.of(this._month, t);
                        }),
                        (n.query = function (e) {
                            return d(e, "query"), p(e, Y, "query"), e === I.chronology() ? ee.INSTANCE : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (t) {
                            return d(t, "temporal"), (t = t.with(g.MONTH_OF_YEAR, this._month)).with(g.DAY_OF_MONTH, Math.min(t.range(g.DAY_OF_MONTH).maximum(), this._day));
                        }),
                        (n.atYear = function (t) {
                            return ue.of(t, this._month, this.isValidYear(t) ? this._day : 28);
                        }),
                        (n.compareTo = function (t) {
                            d(t, "other"), p(t, e, "other");
                            var n = this._month - t.monthValue();
                            return 0 === n && (n = this._day - t.dayOfMonth()), n;
                        }),
                        (n.isAfter = function (t) {
                            return d(t, "other"), p(t, e, "other"), this.compareTo(t) > 0;
                        }),
                        (n.isBefore = function (t) {
                            return d(t, "other"), p(t, e, "other"), this.compareTo(t) < 0;
                        }),
                        (n.equals = function (t) {
                            if (this === t) return !0;
                            if (t instanceof e) {
                                var n = t;
                                return this.monthValue() === n.monthValue() && this.dayOfMonth() === n.dayOfMonth();
                            }
                            return !1;
                        }),
                        (n.toString = function () {
                            return "--" + (this._month < 10 ? "0" : "") + this._month + (this._day < 10 ? "-0" : "-") + this._day;
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.format = function (t) {
                            return d(t, "formatter"), p(t, qt, "formatter"), t.format(this);
                        }),
                        e
                    );
                })(F);
            var Kt,
                jt = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._year = N.safeToInt(e)), (i._month = N.safeToInt(n)), i;
                    }
                    c(e, t),
                        (e.now = function (t) {
                            return 0 === arguments.length ? e.now0() : 1 === arguments.length && t instanceof j ? e.nowZoneId(t) : e.nowClock(t);
                        }),
                        (e.now0 = function () {
                            return e.nowClock(de.systemDefaultZone());
                        }),
                        (e.nowZoneId = function (t) {
                            return e.nowClock(de.system(t));
                        }),
                        (e.nowClock = function (t) {
                            var n = ue.now(t);
                            return e.of(n.year(), n.month());
                        }),
                        (e.of = function (t, n) {
                            return 2 === arguments.length && n instanceof V ? e.ofNumberMonth(t, n) : e.ofNumberNumber(t, n);
                        }),
                        (e.ofNumberMonth = function (t, n) {
                            return d(n, "month"), p(n, V, "month"), e.ofNumberNumber(t, n.value());
                        }),
                        (e.ofNumberNumber = function (t, n) {
                            return d(t, "year"), d(n, "month"), g.YEAR.checkValidValue(t), g.MONTH_OF_YEAR.checkValidValue(n), new e(t, n);
                        }),
                        (e.from = function (t) {
                            if ((d(t, "temporal"), t instanceof e)) return t;
                            try {
                                return e.of(t.get(g.YEAR), t.get(g.MONTH_OF_YEAR));
                            } catch (e) {
                                throw new r("Unable to obtain YearMonth from TemporalAccessor: " + t + ", type " + (t && null != t.constructor ? t.constructor.name : ""));
                            }
                        }),
                        (e.parse = function (t, n) {
                            return 1 === arguments.length ? e.parseString(t) : e.parseStringFormatter(t, n);
                        }),
                        (e.parseString = function (t) {
                            return e.parseStringFormatter(t, Kt);
                        }),
                        (e.parseStringFormatter = function (t, n) {
                            return d(n, "formatter"), n.parse(t, e.FROM);
                        });
                    var n = e.prototype;
                    return (
                        (n.isSupported = function (t) {
                            return 1 === arguments.length && t instanceof M ? this.isSupportedField(t) : this.isSupportedUnit(t);
                        }),
                        (n.isSupportedField = function (t) {
                            return t instanceof g ? t === g.YEAR || t === g.MONTH_OF_YEAR || t === g.PROLEPTIC_MONTH || t === g.YEAR_OF_ERA || t === g.ERA : null != t && t.isSupportedBy(this);
                        }),
                        (n.isSupportedUnit = function (t) {
                            return t instanceof y ? t === y.MONTHS || t === y.YEARS || t === y.DECADES || t === y.CENTURIES || t === y.MILLENNIA || t === y.ERAS : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (e) {
                            return e === g.YEAR_OF_ERA ? (this.year() <= 0 ? R.of(1, Xt.MAX_VALUE + 1) : R.of(1, Xt.MAX_VALUE)) : t.prototype.range.call(this, e);
                        }),
                        (n.get = function (t) {
                            return d(t, "field"), p(t, M, "field"), this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (n.getLong = function (t) {
                            if ((d(t, "field"), p(t, M, "field"), t instanceof g)) {
                                switch (t) {
                                    case g.MONTH_OF_YEAR:
                                        return this._month;
                                    case g.PROLEPTIC_MONTH:
                                        return this._getProlepticMonth();
                                    case g.YEAR_OF_ERA:
                                        return this._year < 1 ? 1 - this._year : this._year;
                                    case g.YEAR:
                                        return this._year;
                                    case g.ERA:
                                        return this._year < 1 ? 0 : 1;
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.getFrom(this);
                        }),
                        (n._getProlepticMonth = function () {
                            return N.safeAdd(N.safeMultiply(this._year, 12), this._month - 1);
                        }),
                        (n.year = function () {
                            return this._year;
                        }),
                        (n.monthValue = function () {
                            return this._month;
                        }),
                        (n.month = function () {
                            return V.of(this._month);
                        }),
                        (n.isLeapYear = function () {
                            return ee.isLeapYear(this._year);
                        }),
                        (n.isValidDay = function (t) {
                            return t >= 1 && t <= this.lengthOfMonth();
                        }),
                        (n.lengthOfMonth = function () {
                            return this.month().length(this.isLeapYear());
                        }),
                        (n.lengthOfYear = function () {
                            return this.isLeapYear() ? 366 : 365;
                        }),
                        (n.with = function (t, e) {
                            return 1 === arguments.length ? this.withAdjuster(t) : this.withFieldValue(t, e);
                        }),
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), t.adjustInto(this);
                        }),
                        (n.withFieldValue = function (t, e) {
                            if ((d(t, "field"), p(t, M, "field"), t instanceof g)) {
                                var n = t;
                                switch ((n.checkValidValue(e), n)) {
                                    case g.MONTH_OF_YEAR:
                                        return this.withMonth(e);
                                    case g.PROLEPTIC_MONTH:
                                        return this.plusMonths(e - this.getLong(g.PROLEPTIC_MONTH));
                                    case g.YEAR_OF_ERA:
                                        return this.withYear(this._year < 1 ? 1 - e : e);
                                    case g.YEAR:
                                        return this.withYear(e);
                                    case g.ERA:
                                        return this.getLong(g.ERA) === e ? this : this.withYear(1 - this._year);
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.adjustInto(this, e);
                        }),
                        (n.withYear = function (t) {
                            return g.YEAR.checkValidValue(t), new e(t, this._month);
                        }),
                        (n.withMonth = function (t) {
                            return g.MONTH_OF_YEAR.checkValidValue(t), new e(this._year, t);
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), p(t, A, "amount"), t.addTo(this);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(e, "unit"), p(e, T, "unit"), e instanceof y)) {
                                switch (e) {
                                    case y.MONTHS:
                                        return this.plusMonths(t);
                                    case y.YEARS:
                                        return this.plusYears(t);
                                    case y.DECADES:
                                        return this.plusYears(N.safeMultiply(t, 10));
                                    case y.CENTURIES:
                                        return this.plusYears(N.safeMultiply(t, 100));
                                    case y.MILLENNIA:
                                        return this.plusYears(N.safeMultiply(t, 1e3));
                                    case y.ERAS:
                                        return this.with(g.ERA, N.safeAdd(this.getLong(g.ERA), t));
                                }
                                throw new o("Unsupported unit: " + e);
                            }
                            return e.addTo(this, t);
                        }),
                        (n.plusYears = function (t) {
                            if (0 === t) return this;
                            var e = g.YEAR.checkValidIntValue(this._year + t);
                            return this.withYear(e);
                        }),
                        (n.plusMonths = function (t) {
                            if (0 === t) return this;
                            var n = 12 * this._year + (this._month - 1) + t;
                            return new e(g.YEAR.checkValidIntValue(N.floorDiv(n, 12)), N.floorMod(n, 12) + 1);
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return t === N.MIN_SAFE_INTEGER ? this.plusAmountUnit(N.MAX_SAFE_INTEGER, e).plusAmountUnit(1, e) : this.plusAmountUnit(-t, e);
                        }),
                        (n.minusYears = function (t) {
                            return t === N.MIN_SAFE_INTEGER ? this.plusYears(N.MIN_SAFE_INTEGER).plusYears(1) : this.plusYears(-t);
                        }),
                        (n.minusMonths = function (t) {
                            return t === N.MIN_SAFE_INTEGER ? this.plusMonths(Math.MAX_SAFE_INTEGER).plusMonths(1) : this.plusMonths(-t);
                        }),
                        (n.query = function (e) {
                            return d(e, "query"), p(e, Y, "query"), e === I.chronology() ? ee.INSTANCE : e === I.precision() ? y.MONTHS : e === I.localDate() || e === I.localTime() || e === I.zone() || e === I.zoneId() || e === I.offset() ? null : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (t) {
                            return d(t, "temporal"), p(t, q, "temporal"), t.with(g.PROLEPTIC_MONTH, this._getProlepticMonth());
                        }),
                        (n.until = function (t, n) {
                            d(t, "endExclusive"), d(n, "unit"), p(t, q, "endExclusive"), p(n, T, "unit");
                            var i = e.from(t);
                            if (n instanceof y) {
                                var r = i._getProlepticMonth() - this._getProlepticMonth();
                                switch (n) {
                                    case y.MONTHS:
                                        return r;
                                    case y.YEARS:
                                        return r / 12;
                                    case y.DECADES:
                                        return r / 120;
                                    case y.CENTURIES:
                                        return r / 1200;
                                    case y.MILLENNIA:
                                        return r / 12e3;
                                    case y.ERAS:
                                        return i.getLong(g.ERA) - this.getLong(g.ERA);
                                }
                                throw new o("Unsupported unit: " + n);
                            }
                            return n.between(this, i);
                        }),
                        (n.atDay = function (t) {
                            return ue.of(this._year, this._month, t);
                        }),
                        (n.atEndOfMonth = function () {
                            return ue.of(this._year, this._month, this.lengthOfMonth());
                        }),
                        (n.compareTo = function (t) {
                            d(t, "other"), p(t, e, "other");
                            var n = this._year - t.year();
                            return 0 === n && (n = this._month - t.monthValue()), n;
                        }),
                        (n.isAfter = function (t) {
                            return this.compareTo(t) > 0;
                        }),
                        (n.isBefore = function (t) {
                            return this.compareTo(t) < 0;
                        }),
                        (n.equals = function (t) {
                            if (this === t) return !0;
                            if (t instanceof e) {
                                var n = t;
                                return this.year() === n.year() && this.monthValue() === n.monthValue();
                            }
                            return !1;
                        }),
                        (n.toString = function () {
                            return Kt.format(this);
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.format = function (t) {
                            return d(t, "formatter"), t.format(this);
                        }),
                        e
                    );
                })(q);
            var Gt,
                Xt = (function (t) {
                    function e(e) {
                        var n;
                        return ((n = t.call(this) || this)._year = N.safeToInt(e)), n;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.value = function () {
                            return this._year;
                        }),
                        (e.now = function (t) {
                            return void 0 === t && (t = void 0), void 0 === t ? e.now0() : t instanceof j ? e.nowZoneId(t) : e.nowClock(t);
                        }),
                        (e.now0 = function () {
                            return e.nowClock(de.systemDefaultZone());
                        }),
                        (e.nowZoneId = function (t) {
                            return d(t, "zone"), p(t, j, "zone"), e.nowClock(de.system(t));
                        }),
                        (e.nowClock = function (t) {
                            d(t, "clock"), p(t, de, "clock");
                            var n = ue.now(t);
                            return e.of(n.year());
                        }),
                        (e.of = function (t) {
                            return d(t, "isoYear"), g.YEAR.checkValidValue(t), new e(t);
                        }),
                        (e.from = function (t) {
                            if ((d(t, "temporal"), p(t, F, "temporal"), t instanceof e)) return t;
                            try {
                                return e.of(t.get(g.YEAR));
                            } catch (e) {
                                throw new r("Unable to obtain Year from TemporalAccessor: " + t + ", type " + (t && null != t.constructor ? t.constructor.name : ""));
                            }
                        }),
                        (e.parse = function (t, n) {
                            return arguments.length <= 1 ? e.parseText(t) : e.parseTextFormatter(t, n);
                        }),
                        (e.parseText = function (t) {
                            return d(t, "text"), e.parse(t, Gt);
                        }),
                        (e.parseTextFormatter = function (t, n) {
                            return void 0 === n && (n = Gt), d(t, "text"), d(n, "formatter"), p(n, qt, "formatter"), n.parse(t, e.FROM);
                        }),
                        (e.isLeap = function (t) {
                            return 0 === N.intMod(t, 4) && (0 !== N.intMod(t, 100) || 0 === N.intMod(t, 400));
                        }),
                        (n.isSupported = function (t) {
                            return 1 === arguments.length && t instanceof M ? this.isSupportedField(t) : this.isSupportedUnit(t);
                        }),
                        (n.isSupportedField = function (t) {
                            return t instanceof g ? t === g.YEAR || t === g.YEAR_OF_ERA || t === g.ERA : null != t && t.isSupportedBy(this);
                        }),
                        (n.isSupportedUnit = function (t) {
                            return t instanceof y ? t === y.YEARS || t === y.DECADES || t === y.CENTURIES || t === y.MILLENNIA || t === y.ERAS : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (e) {
                            if (this.isSupported(e)) return e.range();
                            if (e instanceof g) throw new o("Unsupported field: " + e);
                            return t.prototype.range.call(this, e);
                        }),
                        (n.get = function (t) {
                            return this.range(t).checkValidIntValue(this.getLong(t), t);
                        }),
                        (n.getLong = function (t) {
                            if ((d(t, "field"), t instanceof g)) {
                                switch (t) {
                                    case g.YEAR_OF_ERA:
                                        return this._year < 1 ? 1 - this._year : this._year;
                                    case g.YEAR:
                                        return this._year;
                                    case g.ERA:
                                        return this._year < 1 ? 0 : 1;
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.getFrom(this);
                        }),
                        (n.isLeap = function () {
                            return e.isLeap(this._year);
                        }),
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), t.adjustInto(this);
                        }),
                        (n.withFieldValue = function (t, n) {
                            if ((d(t, "field"), p(t, M, "field"), t instanceof g)) {
                                switch ((t.checkValidValue(n), t)) {
                                    case g.YEAR_OF_ERA:
                                        return e.of(this._year < 1 ? 1 - n : n);
                                    case g.YEAR:
                                        return e.of(n);
                                    case g.ERA:
                                        return this.getLong(g.ERA) === n ? this : e.of(1 - this._year);
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.adjustInto(this, n);
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), p(t, A, "amount"), t.addTo(this);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(t, "amountToAdd"), d(e, "unit"), p(e, T, "unit"), e instanceof y)) {
                                switch (e) {
                                    case y.YEARS:
                                        return this.plusYears(t);
                                    case y.DECADES:
                                        return this.plusYears(N.safeMultiply(t, 10));
                                    case y.CENTURIES:
                                        return this.plusYears(N.safeMultiply(t, 100));
                                    case y.MILLENNIA:
                                        return this.plusYears(N.safeMultiply(t, 1e3));
                                    case y.ERAS:
                                        return this.with(g.ERA, N.safeAdd(this.getLong(g.ERA), t));
                                }
                                throw new o("Unsupported unit: " + e);
                            }
                            return e.addTo(this, t);
                        }),
                        (n.plusYears = function (t) {
                            return 0 === t ? this : e.of(g.YEAR.checkValidIntValue(N.safeAdd(this._year, t)));
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), p(t, A, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return d(t, "amountToSubtract"), d(e, "unit"), p(e, T, "unit"), t === N.MIN_SAFE_INTEGER ? this.plus(N.MAX_SAFE_INTEGER, e).plus(1, e) : this.plus(-t, e);
                        }),
                        (n.minusYears = function (t) {
                            return t === N.MIN_SAFE_INTEGER ? this.plusYears(N.MAX_SAFE_INTEGER).plusYears(1) : this.plusYears(-t);
                        }),
                        (n.adjustInto = function (t) {
                            return d(t, "temporal"), t.with(g.YEAR, this._year);
                        }),
                        (n.isValidMonthDay = function (t) {
                            return null != t && t.isValidYear(this._year);
                        }),
                        (n.length = function () {
                            return this.isLeap() ? 366 : 365;
                        }),
                        (n.atDay = function (t) {
                            return ue.ofYearDay(this._year, t);
                        }),
                        (n.atMonth = function (t) {
                            return 1 === arguments.length && t instanceof V ? this.atMonthMonth(t) : this.atMonthNumber(t);
                        }),
                        (n.atMonthMonth = function (t) {
                            return d(t, "month"), p(t, V, "month"), jt.of(this._year, t);
                        }),
                        (n.atMonthNumber = function (t) {
                            return d(t, "month"), jt.of(this._year, t);
                        }),
                        (n.atMonthDay = function (t) {
                            return d(t, "monthDay"), p(t, zt, "monthDay"), t.atYear(this._year);
                        }),
                        (n.query = function (e) {
                            return d(e, "query()"), p(e, Y, "query()"), e === I.chronology() ? ee.INSTANCE : e === I.precision() ? y.YEARS : e === I.localDate() || e === I.localTime() || e === I.zone() || e === I.zoneId() || e === I.offset() ? null : t.prototype.query.call(this, e);
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._year - t._year;
                        }),
                        (n.isAfter = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._year > t._year;
                        }),
                        (n.isBefore = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._year < t._year;
                        }),
                        (n.format = function (t) {
                            return d(t, "formatter"), p(t, qt, "formatter"), t.format(this);
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this.value() === t.value());
                        }),
                        (n.toString = function () {
                            return "" + this._year;
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.until = function (t, n) {
                            var i = e.from(t);
                            if (n instanceof y) {
                                var r = i.value() - this.value();
                                switch (n) {
                                    case y.YEARS:
                                        return r;
                                    case y.DECADES:
                                        return N.intDiv(r, 10);
                                    case y.CENTURIES:
                                        return N.intDiv(r, 100);
                                    case y.MILLENNIA:
                                        return N.intDiv(r, 1e3);
                                    case y.ERAS:
                                        return i.getLong(g.ERA) - this.getLong(g.ERA);
                                }
                                throw new o("Unsupported unit: " + n);
                            }
                            return n.between(this, i);
                        }),
                        e
                    );
                })(q);
            var Jt = (function () {
                    function t() {}
                    return (
                        (t.firstDayOfMonth = function () {
                            return Qt.FIRST_DAY_OF_MONTH;
                        }),
                        (t.lastDayOfMonth = function () {
                            return Qt.LAST_DAY_OF_MONTH;
                        }),
                        (t.firstDayOfNextMonth = function () {
                            return Qt.FIRST_DAY_OF_NEXT_MONTH;
                        }),
                        (t.firstDayOfYear = function () {
                            return Qt.FIRST_DAY_OF_YEAR;
                        }),
                        (t.lastDayOfYear = function () {
                            return Qt.LAST_DAY_OF_YEAR;
                        }),
                        (t.firstDayOfNextYear = function () {
                            return Qt.FIRST_DAY_OF_NEXT_YEAR;
                        }),
                        (t.firstInMonth = function (t) {
                            return d(t, "dayOfWeek"), new $t(1, t);
                        }),
                        (t.lastInMonth = function (t) {
                            return d(t, "dayOfWeek"), new $t(-1, t);
                        }),
                        (t.dayOfWeekInMonth = function (t, e) {
                            return d(e, "dayOfWeek"), new $t(t, e);
                        }),
                        (t.next = function (t) {
                            return new te(2, t);
                        }),
                        (t.nextOrSame = function (t) {
                            return new te(0, t);
                        }),
                        (t.previous = function (t) {
                            return new te(3, t);
                        }),
                        (t.previousOrSame = function (t) {
                            return new te(1, t);
                        }),
                        t
                    );
                })(),
                Qt = (function (t) {
                    function e(e) {
                        var n;
                        return ((n = t.call(this) || this)._ordinal = e), n;
                    }
                    return (
                        c(e, t),
                        (e.prototype.adjustInto = function (t) {
                            switch (this._ordinal) {
                                case 0:
                                    return t.with(g.DAY_OF_MONTH, 1);
                                case 1:
                                    return t.with(g.DAY_OF_MONTH, t.range(g.DAY_OF_MONTH).maximum());
                                case 2:
                                    return t.with(g.DAY_OF_MONTH, 1).plus(1, y.MONTHS);
                                case 3:
                                    return t.with(g.DAY_OF_YEAR, 1);
                                case 4:
                                    return t.with(g.DAY_OF_YEAR, t.range(g.DAY_OF_YEAR).maximum());
                                case 5:
                                    return t.with(g.DAY_OF_YEAR, 1).plus(1, y.YEARS);
                            }
                            throw new h("Unreachable");
                        }),
                        e
                    );
                })(B);
            (Qt.FIRST_DAY_OF_MONTH = new Qt(0)), (Qt.LAST_DAY_OF_MONTH = new Qt(1)), (Qt.FIRST_DAY_OF_NEXT_MONTH = new Qt(2)), (Qt.FIRST_DAY_OF_YEAR = new Qt(3)), (Qt.LAST_DAY_OF_YEAR = new Qt(4)), (Qt.FIRST_DAY_OF_NEXT_YEAR = new Qt(5));
            var $t = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._ordinal = e), (i._dowValue = n.value()), i;
                    }
                    return (
                        c(e, t),
                        (e.prototype.adjustInto = function (t) {
                            if (this._ordinal >= 0) {
                                var e = t.with(g.DAY_OF_MONTH, 1),
                                    n = e.get(g.DAY_OF_WEEK),
                                    i = N.intMod(this._dowValue - n + 7, 7);
                                return (i += 7 * (this._ordinal - 1)), e.plus(i, y.DAYS);
                            }
                            var r = t.with(g.DAY_OF_MONTH, t.range(g.DAY_OF_MONTH).maximum()),
                                s = r.get(g.DAY_OF_WEEK),
                                o = this._dowValue - s;
                            return (o = 0 === o ? 0 : o > 0 ? o - 7 : o), (o -= 7 * (-this._ordinal - 1)), r.plus(o, y.DAYS);
                        }),
                        e
                    );
                })(B),
                te = (function (t) {
                    function e(e, n) {
                        var i;
                        return (i = t.call(this) || this), d(n, "dayOfWeek"), (i._relative = e), (i._dowValue = n.value()), i;
                    }
                    return (
                        c(e, t),
                        (e.prototype.adjustInto = function (t) {
                            var e = t.get(g.DAY_OF_WEEK);
                            if (this._relative < 2 && e === this._dowValue) return t;
                            if (1 & this._relative) {
                                var n = this._dowValue - e;
                                return t.minus(n >= 0 ? 7 - n : -n, y.DAYS);
                            }
                            var i = e - this._dowValue;
                            return t.plus(i >= 0 ? 7 - i : -i, y.DAYS);
                        }),
                        e
                    );
                })(B),
                ee = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t),
                        (e.isLeapYear = function (t) {
                            return !(3 & t || (t % 100 == 0 && t % 400 != 0));
                        });
                    var n = e.prototype;
                    return (
                        (n._updateResolveMap = function (t, e, n) {
                            d(t, "fieldValues"), d(e, "field");
                            var i = t.get(e);
                            if (null != i && i !== n) throw new r("Invalid state, field: " + e + " " + i + " conflicts with " + e + " " + n);
                            t.put(e, n);
                        }),
                        (n.resolveDate = function (t, e) {
                            if (t.containsKey(g.EPOCH_DAY)) return ue.ofEpochDay(t.remove(g.EPOCH_DAY));
                            var n = t.remove(g.PROLEPTIC_MONTH);
                            null != n && (e !== k.LENIENT && g.PROLEPTIC_MONTH.checkValidValue(n), this._updateResolveMap(t, g.MONTH_OF_YEAR, N.floorMod(n, 12) + 1), this._updateResolveMap(t, g.YEAR, N.floorDiv(n, 12)));
                            var i = t.remove(g.YEAR_OF_ERA);
                            if (null != i) {
                                e !== k.LENIENT && g.YEAR_OF_ERA.checkValidValue(i);
                                var s = t.remove(g.ERA);
                                if (null == s) {
                                    var o = t.get(g.YEAR);
                                    e === k.STRICT ? (null != o ? this._updateResolveMap(t, g.YEAR, o > 0 ? i : N.safeSubtract(1, i)) : t.put(g.YEAR_OF_ERA, i)) : this._updateResolveMap(t, g.YEAR, null == o || o > 0 ? i : N.safeSubtract(1, i));
                                } else if (1 === s) this._updateResolveMap(t, g.YEAR, i);
                                else {
                                    if (0 !== s) throw new r("Invalid value for era: " + s);
                                    this._updateResolveMap(t, g.YEAR, N.safeSubtract(1, i));
                                }
                            } else t.containsKey(g.ERA) && g.ERA.checkValidValue(t.get(g.ERA));
                            if (t.containsKey(g.YEAR)) {
                                if (t.containsKey(g.MONTH_OF_YEAR) && t.containsKey(g.DAY_OF_MONTH)) {
                                    var a = g.YEAR.checkValidIntValue(t.remove(g.YEAR)),
                                        u = t.remove(g.MONTH_OF_YEAR),
                                        h = t.remove(g.DAY_OF_MONTH);
                                    if (e === k.LENIENT) {
                                        var f = u - 1,
                                            c = h - 1;
                                        return ue.of(a, 1, 1).plusMonths(f).plusDays(c);
                                    }
                                    return e === k.SMART ? (g.DAY_OF_MONTH.checkValidValue(h), 4 === u || 6 === u || 9 === u || 11 === u ? (h = Math.min(h, 30)) : 2 === u && (h = Math.min(h, V.FEBRUARY.length(Xt.isLeap(a)))), ue.of(a, u, h)) : ue.of(a, u, h);
                                }
                                if (t.containsKey(g.DAY_OF_YEAR)) {
                                    var l = g.YEAR.checkValidIntValue(t.remove(g.YEAR));
                                    if (e === k.LENIENT) {
                                        var _ = N.safeSubtract(t.remove(g.DAY_OF_YEAR), 1);
                                        return ue.ofYearDay(l, 1).plusDays(_);
                                    }
                                    var d = g.DAY_OF_YEAR.checkValidIntValue(t.remove(g.DAY_OF_YEAR));
                                    return ue.ofYearDay(l, d);
                                }
                                if (t.containsKey(g.ALIGNED_WEEK_OF_YEAR)) {
                                    if (t.containsKey(g.ALIGNED_DAY_OF_WEEK_IN_YEAR)) {
                                        var p = g.YEAR.checkValidIntValue(t.remove(g.YEAR));
                                        if (e === k.LENIENT) {
                                            var m = N.safeSubtract(t.remove(g.ALIGNED_WEEK_OF_YEAR), 1),
                                                O = N.safeSubtract(t.remove(g.ALIGNED_DAY_OF_WEEK_IN_YEAR), 1);
                                            return ue.of(p, 1, 1).plusWeeks(m).plusDays(O);
                                        }
                                        var E = g.ALIGNED_WEEK_OF_YEAR.checkValidIntValue(t.remove(g.ALIGNED_WEEK_OF_YEAR)),
                                            S = g.ALIGNED_DAY_OF_WEEK_IN_YEAR.checkValidIntValue(t.remove(g.ALIGNED_DAY_OF_WEEK_IN_YEAR)),
                                            D = ue.of(p, 1, 1).plusDays(7 * (E - 1) + (S - 1));
                                        if (e === k.STRICT && D.get(g.YEAR) !== p) throw new r("Strict mode rejected date parsed to a different year");
                                        return D;
                                    }
                                    if (t.containsKey(g.DAY_OF_WEEK)) {
                                        var A = g.YEAR.checkValidIntValue(t.remove(g.YEAR));
                                        if (e === k.LENIENT) {
                                            var T = N.safeSubtract(t.remove(g.ALIGNED_WEEK_OF_YEAR), 1),
                                                v = N.safeSubtract(t.remove(g.DAY_OF_WEEK), 1);
                                            return ue.of(A, 1, 1).plusWeeks(T).plusDays(v);
                                        }
                                        var w = g.ALIGNED_WEEK_OF_YEAR.checkValidIntValue(t.remove(g.ALIGNED_WEEK_OF_YEAR)),
                                            y = g.DAY_OF_WEEK.checkValidIntValue(t.remove(g.DAY_OF_WEEK)),
                                            M = ue
                                                .of(A, 1, 1)
                                                .plusWeeks(w - 1)
                                                .with(Jt.nextOrSame(U.of(y)));
                                        if (e === k.STRICT && M.get(g.YEAR) !== A) throw new r("Strict mode rejected date parsed to a different month");
                                        return M;
                                    }
                                }
                            }
                            return null;
                        }),
                        (n.date = function (t) {
                            return ue.from(t);
                        }),
                        e
                    );
                })(D);
            var ne = (function (t) {
                function e(e, n) {
                    var i;
                    return (i = t.call(this) || this), d(e, "time"), p(e, ce, "time"), d(n, "offset"), p(n, $, "offset"), (i._time = e), (i._offset = n), i;
                }
                c(e, t),
                    (e.from = function (t) {
                        if ((d(t, "temporal"), t instanceof e)) return t;
                        if (t instanceof se) return t.toOffsetTime();
                        try {
                            return new e(ce.from(t), $.from(t));
                        } catch (e) {
                            throw new r("Unable to obtain OffsetTime TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                        }
                    }),
                    (e.now = function (t) {
                        return 0 === arguments.length ? e._now(de.systemDefaultZone()) : t instanceof de ? e._now(t) : e._now(de.system(t));
                    }),
                    (e._now = function (t) {
                        d(t, "clock");
                        var n = t.instant();
                        return e.ofInstant(n, t.zone().rules().offset(n));
                    }),
                    (e.of = function () {
                        return arguments.length <= 2 ? e.ofTimeAndOffset.apply(this, arguments) : e.ofNumbers.apply(this, arguments);
                    }),
                    (e.ofNumbers = function (t, n, i, r, s) {
                        return new e(ce.of(t, n, i, r), s);
                    }),
                    (e.ofTimeAndOffset = function (t, n) {
                        return new e(t, n);
                    }),
                    (e.ofInstant = function (t, n) {
                        d(t, "instant"), p(t, _e, "instant"), d(n, "zone"), p(n, j, "zone");
                        var i = n.rules().offset(t),
                            r = t.epochSecond() % ce.SECONDS_PER_DAY;
                        return (r = (r + i.totalSeconds()) % ce.SECONDS_PER_DAY) < 0 && (r += ce.SECONDS_PER_DAY), new e(ce.ofSecondOfDay(r, t.nano()), i);
                    }),
                    (e.parse = function (t, n) {
                        return void 0 === n && (n = qt.ISO_OFFSET_TIME), d(n, "formatter"), n.parse(t, e.FROM);
                    });
                var n = e.prototype;
                return (
                    (n.adjustInto = function (t) {
                        return t.with(g.NANO_OF_DAY, this._time.toNanoOfDay()).with(g.OFFSET_SECONDS, this.offset().totalSeconds());
                    }),
                    (n.atDate = function (t) {
                        return se.of(t, this._time, this._offset);
                    }),
                    (n.format = function (t) {
                        return d(t, "formatter"), t.format(this, e.FROM);
                    }),
                    (n.get = function (e) {
                        return t.prototype.get.call(this, e);
                    }),
                    (n.getLong = function (t) {
                        return t instanceof g ? (t === g.OFFSET_SECONDS ? this._offset.totalSeconds() : this._time.getLong(t)) : t.getFrom(this);
                    }),
                    (n.hour = function () {
                        return this._time.hour();
                    }),
                    (n.minute = function () {
                        return this._time.minute();
                    }),
                    (n.second = function () {
                        return this._time.second();
                    }),
                    (n.nano = function () {
                        return this._time.nano();
                    }),
                    (n.offset = function () {
                        return this._offset;
                    }),
                    (n.isAfter = function (t) {
                        return d(t, "other"), this._toEpochNano() > t._toEpochNano();
                    }),
                    (n.isBefore = function (t) {
                        return d(t, "other"), this._toEpochNano() < t._toEpochNano();
                    }),
                    (n.isEqual = function (t) {
                        return d(t, "other"), this._toEpochNano() === t._toEpochNano();
                    }),
                    (n.isSupported = function (t) {
                        return t instanceof g ? t.isTimeBased() || t === g.OFFSET_SECONDS : t instanceof y ? t.isTimeBased() : null != t && t.isSupportedBy(this);
                    }),
                    (n.minusHours = function (t) {
                        return this._withLocalTimeOffset(this._time.minusHours(t), this._offset);
                    }),
                    (n.minusMinutes = function (t) {
                        return this._withLocalTimeOffset(this._time.minusMinutes(t), this._offset);
                    }),
                    (n.minusSeconds = function (t) {
                        return this._withLocalTimeOffset(this._time.minusSeconds(t), this._offset);
                    }),
                    (n.minusNanos = function (t) {
                        return this._withLocalTimeOffset(this._time.minusNanos(t), this._offset);
                    }),
                    (n.minusAmount = function (t) {
                        return d(t), t.subtractFrom(this);
                    }),
                    (n.minusAmountUnit = function (t, e) {
                        return this.plus(-1 * t, e);
                    }),
                    (n.plusAmount = function (t) {
                        return d(t), t.addTo(this);
                    }),
                    (n.plusAmountUnit = function (t, e) {
                        return e instanceof y ? this._withLocalTimeOffset(this._time.plus(t, e), this._offset) : e.addTo(this, t);
                    }),
                    (n.plusHours = function (t) {
                        return this._withLocalTimeOffset(this._time.plusHours(t), this._offset);
                    }),
                    (n.plusMinutes = function (t) {
                        return this._withLocalTimeOffset(this._time.plusMinutes(t), this._offset);
                    }),
                    (n.plusSeconds = function (t) {
                        return this._withLocalTimeOffset(this._time.plusSeconds(t), this._offset);
                    }),
                    (n.plusNanos = function (t) {
                        return this._withLocalTimeOffset(this._time.plusNanos(t), this._offset);
                    }),
                    (n.query = function (e) {
                        return d(e, "query"), e === I.precision() ? y.NANOS : e === I.offset() || e === I.zone() ? this.offset() : e === I.localTime() ? this._time : e === I.chronology() || e === I.localDate() || e === I.zoneId() ? null : t.prototype.query.call(this, e);
                    }),
                    (n.range = function (t) {
                        return t instanceof g ? (t === g.OFFSET_SECONDS ? t.range() : this._time.range(t)) : t.rangeRefinedBy(this);
                    }),
                    (n.toLocalTime = function () {
                        return this._time;
                    }),
                    (n.truncatedTo = function (t) {
                        return this._withLocalTimeOffset(this._time.truncatedTo(t), this._offset);
                    }),
                    (n.until = function (t, n) {
                        d(t, "endExclusive"), d(n, "unit");
                        var i = e.from(t);
                        if (n instanceof y) {
                            var r = i._toEpochNano() - this._toEpochNano();
                            switch (n) {
                                case y.NANOS:
                                    return r;
                                case y.MICROS:
                                    return Math.floor(r / 1e3);
                                case y.MILLIS:
                                    return Math.floor(r / 1e6);
                                case y.SECONDS:
                                    return Math.floor(r / ce.NANOS_PER_SECOND);
                                case y.MINUTES:
                                    return Math.floor(r / ce.NANOS_PER_MINUTE);
                                case y.HOURS:
                                    return Math.floor(r / ce.NANOS_PER_HOUR);
                                case y.HALF_DAYS:
                                    return Math.floor(r / (12 * ce.NANOS_PER_HOUR));
                            }
                            throw new o("Unsupported unit: " + n);
                        }
                        return n.between(this, i);
                    }),
                    (n.withHour = function (t) {
                        return this._withLocalTimeOffset(this._time.withHour(t), this._offset);
                    }),
                    (n.withMinute = function (t) {
                        return this._withLocalTimeOffset(this._time.withMinute(t), this._offset);
                    }),
                    (n.withSecond = function (t) {
                        return this._withLocalTimeOffset(this._time.withSecond(t), this._offset);
                    }),
                    (n.withNano = function (t) {
                        return this._withLocalTimeOffset(this._time.withNano(t), this._offset);
                    }),
                    (n.withOffsetSameInstant = function (t) {
                        if ((d(t, "offset"), t.equals(this._offset))) return this;
                        var n = t.totalSeconds() - this._offset.totalSeconds();
                        return new e(this._time.plusSeconds(n), t);
                    }),
                    (n.withOffsetSameLocal = function (t) {
                        return null != t && t.equals(this._offset) ? this : new e(this._time, t);
                    }),
                    (n._toEpochNano = function () {
                        return this._time.toNanoOfDay() - this._offset.totalSeconds() * ce.NANOS_PER_SECOND;
                    }),
                    (n.withAdjuster = function (t) {
                        return d(t, "adjuster"), t instanceof ce ? this._withLocalTimeOffset(t, this._offset) : t instanceof $ ? this._withLocalTimeOffset(this._time, t) : t instanceof e ? t : t.adjustInto(this);
                    }),
                    (n.withFieldValue = function (t, e) {
                        return d(t, "field"), t instanceof g ? (t === g.OFFSET_SECONDS ? this._withLocalTimeOffset(this._time, $.ofTotalSeconds(t.checkValidIntValue(e))) : this._withLocalTimeOffset(this._time.with(t, e), this._offset)) : t.adjustInto(this, e);
                    }),
                    (n._withLocalTimeOffset = function (t, n) {
                        return this._time === t && this._offset.equals(n) ? this : new e(t, n);
                    }),
                    (n.compareTo = function (t) {
                        if ((d(t, "other"), p(t, e, "other"), this._offset.equals(t._offset))) return this._time.compareTo(t._time);
                        var n = N.compareNumbers(this._toEpochNano(), t._toEpochNano());
                        return 0 === n ? this._time.compareTo(t._time) : n;
                    }),
                    (n.equals = function (t) {
                        return this === t || (t instanceof e && this._time.equals(t._time) && this._offset.equals(t._offset));
                    }),
                    (n.hashCode = function () {
                        return this._time.hashCode() ^ this._offset.hashCode();
                    }),
                    (n.toString = function () {
                        return this._time.toString() + this._offset.toString();
                    }),
                    (n.toJSON = function () {
                        return this.toString();
                    }),
                    e
                );
            })(Z);
            var ie = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                c(e, t);
                var n = e.prototype;
                return (
                    (n.query = function (e) {
                        return e === I.zoneId() || e === I.zone() ? this.zone() : e === I.chronology() ? this.toLocalDate().chronology() : e === I.precision() ? y.NANOS : e === I.offset() ? this.offset() : e === I.localDate() ? ue.ofEpochDay(this.toLocalDate().toEpochDay()) : e === I.localTime() ? this.toLocalTime() : t.prototype.query.call(this, e);
                    }),
                    (n.format = function (t) {
                        return d(t, "formatter"), t.format(this);
                    }),
                    (n.toInstant = function () {
                        return _e.ofEpochSecond(this.toEpochSecond(), this.toLocalTime().nano());
                    }),
                    (n.toEpochSecond = function () {
                        var t = 86400 * this.toLocalDate().toEpochDay() + this.toLocalTime().toSecondOfDay();
                        return (t -= this.offset().totalSeconds());
                    }),
                    (n.compareTo = function (t) {
                        d(t, "other");
                        var e = N.compareNumbers(this.toEpochSecond(), t.toEpochSecond());
                        return (
                            0 === e &&
                                0 === (e = this.toLocalTime().nano() - t.toLocalTime().nano()) &&
                                0 === (e = this.toLocalDateTime().compareTo(t.toLocalDateTime())) &&
                                (e = (function (t, e) {
                                    if (t < e) return -1;
                                    if (t > e) return 1;
                                    return 0;
                                })(this.zone().id(), t.zone().id())),
                            e
                        );
                    }),
                    (n.isAfter = function (t) {
                        d(t, "other");
                        var e = this.toEpochSecond(),
                            n = t.toEpochSecond();
                        return e > n || (e === n && this.toLocalTime().nano() > t.toLocalTime().nano());
                    }),
                    (n.isBefore = function (t) {
                        d(t, "other");
                        var e = this.toEpochSecond(),
                            n = t.toEpochSecond();
                        return e < n || (e === n && this.toLocalTime().nano() < t.toLocalTime().nano());
                    }),
                    (n.isEqual = function (t) {
                        return d(t, "other"), this.toEpochSecond() === t.toEpochSecond() && this.toLocalTime().nano() === t.toLocalTime().nano();
                    }),
                    (n.equals = function (t) {
                        return this === t || (t instanceof e && 0 === this.compareTo(t));
                    }),
                    e
                );
            })(Z);
            var re = (function (t) {
                function e(e, n, i) {
                    var r;
                    return d(e, "dateTime"), d(n, "offset"), d(i, "zone"), ((r = t.call(this) || this)._dateTime = e), (r._offset = n), (r._zone = i), r;
                }
                c(e, t),
                    (e.now = function (t) {
                        var n;
                        return (n = t instanceof j ? de.system(t) : null == t ? de.systemDefaultZone() : t), e.ofInstant(n.instant(), n.zone());
                    }),
                    (e.of = function () {
                        return arguments.length <= 2 ? e.of2.apply(this, arguments) : 3 === arguments.length && arguments[0] instanceof ue ? e.of3.apply(this, arguments) : e.of8.apply(this, arguments);
                    }),
                    (e.of3 = function (t, n, i) {
                        return e.of2(fe.of(t, n), i);
                    }),
                    (e.of2 = function (t, n) {
                        return e.ofLocal(t, n, null);
                    }),
                    (e.of8 = function (t, n, i, r, s, o, a, u) {
                        var h = fe.of(t, n, i, r, s, o, a);
                        return e.ofLocal(h, u, null);
                    }),
                    (e.ofLocal = function (t, n, i) {
                        if ((d(t, "localDateTime"), d(n, "zone"), n instanceof $)) return new e(t, n, n);
                        var r = null,
                            s = n.rules(),
                            o = s.validOffsets(t);
                        if (1 === o.length) r = o[0];
                        else if (0 === o.length) {
                            var a = s.transition(t);
                            (t = t.plusSeconds(a.duration().seconds())), (r = a.offsetAfter());
                        } else
                            r =
                                null != i &&
                                o.some(function (t) {
                                    return t.equals(i);
                                })
                                    ? i
                                    : d(o[0], "offset");
                        return new e(t, r, n);
                    }),
                    (e.ofInstant = function () {
                        return 2 === arguments.length ? e.ofInstant2.apply(this, arguments) : e.ofInstant3.apply(this, arguments);
                    }),
                    (e.ofInstant2 = function (t, n) {
                        return d(t, "instant"), d(n, "zone"), e._create(t.epochSecond(), t.nano(), n);
                    }),
                    (e.ofInstant3 = function (t, n, i) {
                        return d(t, "localDateTime"), d(n, "offset"), d(i, "zone"), e._create(t.toEpochSecond(n), t.nano(), i);
                    }),
                    (e._create = function (t, n, i) {
                        var r = i.rules(),
                            s = _e.ofEpochSecond(t, n),
                            o = r.offset(s);
                        return new e(fe.ofEpochSecond(t, n, o), o, i);
                    }),
                    (e.ofStrict = function (t, n, i) {
                        d(t, "localDateTime"), d(n, "offset"), d(i, "zone");
                        var s = i.rules();
                        if (!1 === s.isValidOffset(t, n)) {
                            var o = s.transition(t);
                            if (null != o && o.isGap()) throw new r("LocalDateTime " + t + " does not exist in zone " + i + " due to a gap in the local time-line, typically caused by daylight savings");
                            throw new r('ZoneOffset "' + n + '" is not valid for LocalDateTime "' + t + '" in zone "' + i + '"');
                        }
                        return new e(t, n, i);
                    }),
                    (e.ofLenient = function (t, n, i) {
                        if ((d(t, "localDateTime"), d(n, "offset"), d(i, "zone"), i instanceof $ && !1 === n.equals(i))) throw new u("ZoneId must match ZoneOffset");
                        return new e(t, n, i);
                    }),
                    (e.from = function (t) {
                        if ((d(t, "temporal"), t instanceof e)) return t;
                        var n = j.from(t);
                        if (t.isSupported(g.INSTANT_SECONDS)) {
                            var i = e._from(t, n);
                            if (null != i) return i;
                        }
                        var r = fe.from(t);
                        return e.of2(r, n);
                    }),
                    (e._from = function (t, n) {
                        try {
                            return e.__from(t, n);
                        } catch (t) {
                            if (!(t instanceof r)) throw t;
                        }
                    }),
                    (e.__from = function (t, n) {
                        var i = t.getLong(g.INSTANT_SECONDS),
                            r = t.get(g.NANO_OF_SECOND);
                        return e._create(i, r, n);
                    }),
                    (e.parse = function (t, n) {
                        return void 0 === n && (n = qt.ISO_ZONED_DATE_TIME), d(n, "formatter"), n.parse(t, e.FROM);
                    });
                var n = e.prototype;
                return (
                    (n._resolveLocal = function (t) {
                        return d(t, "newDateTime"), e.ofLocal(t, this._zone, this._offset);
                    }),
                    (n._resolveInstant = function (t) {
                        return e.ofInstant3(t, this._offset, this._zone);
                    }),
                    (n._resolveOffset = function (t) {
                        return !1 === t.equals(this._offset) && this._zone.rules().isValidOffset(this._dateTime, t) ? new e(this._dateTime, t, this._zone) : this;
                    }),
                    (n.isSupported = function (t) {
                        return t instanceof g || (t instanceof y ? t.isDateBased() || t.isTimeBased() : null != t && t.isSupportedBy(this));
                    }),
                    (n.range = function (t) {
                        return t instanceof g ? (t === g.INSTANT_SECONDS || t === g.OFFSET_SECONDS ? t.range() : this._dateTime.range(t)) : t.rangeRefinedBy(this);
                    }),
                    (n.get = function (t) {
                        return this.getLong(t);
                    }),
                    (n.getLong = function (t) {
                        if (t instanceof g) {
                            switch (t) {
                                case g.INSTANT_SECONDS:
                                    return this.toEpochSecond();
                                case g.OFFSET_SECONDS:
                                    return this._offset.totalSeconds();
                            }
                            return this._dateTime.getLong(t);
                        }
                        return d(t, "field"), t.getFrom(this);
                    }),
                    (n.offset = function () {
                        return this._offset;
                    }),
                    (n.withEarlierOffsetAtOverlap = function () {
                        var t = this._zone.rules().transition(this._dateTime);
                        if (null != t && t.isOverlap()) {
                            var n = t.offsetBefore();
                            if (!1 === n.equals(this._offset)) return new e(this._dateTime, n, this._zone);
                        }
                        return this;
                    }),
                    (n.withLaterOffsetAtOverlap = function () {
                        var t = this._zone.rules().transition(this.toLocalDateTime());
                        if (null != t) {
                            var n = t.offsetAfter();
                            if (!1 === n.equals(this._offset)) return new e(this._dateTime, n, this._zone);
                        }
                        return this;
                    }),
                    (n.zone = function () {
                        return this._zone;
                    }),
                    (n.withZoneSameLocal = function (t) {
                        return d(t, "zone"), this._zone.equals(t) ? this : e.ofLocal(this._dateTime, t, this._offset);
                    }),
                    (n.withZoneSameInstant = function (t) {
                        return d(t, "zone"), this._zone.equals(t) ? this : e._create(this._dateTime.toEpochSecond(this._offset), this._dateTime.nano(), t);
                    }),
                    (n.withFixedOffsetZone = function () {
                        return this._zone.equals(this._offset) ? this : new e(this._dateTime, this._offset, this._offset);
                    }),
                    (n.year = function () {
                        return this._dateTime.year();
                    }),
                    (n.monthValue = function () {
                        return this._dateTime.monthValue();
                    }),
                    (n.month = function () {
                        return this._dateTime.month();
                    }),
                    (n.dayOfMonth = function () {
                        return this._dateTime.dayOfMonth();
                    }),
                    (n.dayOfYear = function () {
                        return this._dateTime.dayOfYear();
                    }),
                    (n.dayOfWeek = function () {
                        return this._dateTime.dayOfWeek();
                    }),
                    (n.hour = function () {
                        return this._dateTime.hour();
                    }),
                    (n.minute = function () {
                        return this._dateTime.minute();
                    }),
                    (n.second = function () {
                        return this._dateTime.second();
                    }),
                    (n.nano = function () {
                        return this._dateTime.nano();
                    }),
                    (n.withAdjuster = function (t) {
                        if (t instanceof ue) return this._resolveLocal(fe.of(t, this._dateTime.toLocalTime()));
                        if (t instanceof ce) return this._resolveLocal(fe.of(this._dateTime.toLocalDate(), t));
                        if (t instanceof fe) return this._resolveLocal(t);
                        if (t instanceof _e) {
                            var n = t;
                            return e._create(n.epochSecond(), n.nano(), this._zone);
                        }
                        return t instanceof $ ? this._resolveOffset(t) : (d(t, "adjuster"), t.adjustInto(this));
                    }),
                    (n.withFieldValue = function (t, n) {
                        if (t instanceof g) {
                            switch (t) {
                                case g.INSTANT_SECONDS:
                                    return e._create(n, this.nano(), this._zone);
                                case g.OFFSET_SECONDS:
                                    var i = $.ofTotalSeconds(t.checkValidIntValue(n));
                                    return this._resolveOffset(i);
                            }
                            return this._resolveLocal(this._dateTime.with(t, n));
                        }
                        return t.adjustInto(this, n);
                    }),
                    (n.withYear = function (t) {
                        return this._resolveLocal(this._dateTime.withYear(t));
                    }),
                    (n.withMonth = function (t) {
                        return this._resolveLocal(this._dateTime.withMonth(t));
                    }),
                    (n.withDayOfMonth = function (t) {
                        return this._resolveLocal(this._dateTime.withDayOfMonth(t));
                    }),
                    (n.withDayOfYear = function (t) {
                        return this._resolveLocal(this._dateTime.withDayOfYear(t));
                    }),
                    (n.withHour = function (t) {
                        return this._resolveLocal(this._dateTime.withHour(t));
                    }),
                    (n.withMinute = function (t) {
                        return this._resolveLocal(this._dateTime.withMinute(t));
                    }),
                    (n.withSecond = function (t) {
                        return this._resolveLocal(this._dateTime.withSecond(t));
                    }),
                    (n.withNano = function (t) {
                        return this._resolveLocal(this._dateTime.withNano(t));
                    }),
                    (n.truncatedTo = function (t) {
                        return this._resolveLocal(this._dateTime.truncatedTo(t));
                    }),
                    (n.plusAmount = function (t) {
                        return d(t), t.addTo(this);
                    }),
                    (n.plusAmountUnit = function (t, e) {
                        return e instanceof y ? (e.isDateBased() ? this._resolveLocal(this._dateTime.plus(t, e)) : this._resolveInstant(this._dateTime.plus(t, e))) : (d(e, "unit"), e.addTo(this, t));
                    }),
                    (n.plusYears = function (t) {
                        return this._resolveLocal(this._dateTime.plusYears(t));
                    }),
                    (n.plusMonths = function (t) {
                        return this._resolveLocal(this._dateTime.plusMonths(t));
                    }),
                    (n.plusWeeks = function (t) {
                        return this._resolveLocal(this._dateTime.plusWeeks(t));
                    }),
                    (n.plusDays = function (t) {
                        return this._resolveLocal(this._dateTime.plusDays(t));
                    }),
                    (n.plusHours = function (t) {
                        return this._resolveInstant(this._dateTime.plusHours(t));
                    }),
                    (n.plusMinutes = function (t) {
                        return this._resolveInstant(this._dateTime.plusMinutes(t));
                    }),
                    (n.plusSeconds = function (t) {
                        return this._resolveInstant(this._dateTime.plusSeconds(t));
                    }),
                    (n.plusNanos = function (t) {
                        return this._resolveInstant(this._dateTime.plusNanos(t));
                    }),
                    (n.minusAmount = function (t) {
                        return d(t, "amount"), t.subtractFrom(this);
                    }),
                    (n.minusAmountUnit = function (t, e) {
                        return this.plusAmountUnit(-1 * t, e);
                    }),
                    (n.minusYears = function (t) {
                        return this.plusYears(-1 * t);
                    }),
                    (n.minusMonths = function (t) {
                        return this.plusMonths(-1 * t);
                    }),
                    (n.minusWeeks = function (t) {
                        return this.plusWeeks(-1 * t);
                    }),
                    (n.minusDays = function (t) {
                        return this.plusDays(-1 * t);
                    }),
                    (n.minusHours = function (t) {
                        return this.plusHours(-1 * t);
                    }),
                    (n.minusMinutes = function (t) {
                        return this.plusMinutes(-1 * t);
                    }),
                    (n.minusSeconds = function (t) {
                        return this.plusSeconds(-1 * t);
                    }),
                    (n.minusNanos = function (t) {
                        return this.plusNanos(-1 * t);
                    }),
                    (n.query = function (e) {
                        return e === I.localDate() ? this.toLocalDate() : (d(e, "query"), t.prototype.query.call(this, e));
                    }),
                    (n.until = function (t, n) {
                        var i = e.from(t);
                        if (n instanceof y) {
                            if (((i = i.withZoneSameInstant(this._zone)), n.isDateBased())) return this._dateTime.until(i._dateTime, n);
                            var r = this._offset.totalSeconds() - i._offset.totalSeconds(),
                                s = i._dateTime.plusSeconds(r);
                            return this._dateTime.until(s, n);
                        }
                        return n.between(this, i);
                    }),
                    (n.toLocalDateTime = function () {
                        return this._dateTime;
                    }),
                    (n.toLocalDate = function () {
                        return this._dateTime.toLocalDate();
                    }),
                    (n.toLocalTime = function () {
                        return this._dateTime.toLocalTime();
                    }),
                    (n.toOffsetDateTime = function () {
                        return se.of(this._dateTime, this._offset);
                    }),
                    (n.equals = function (t) {
                        return this === t || (t instanceof e && this._dateTime.equals(t._dateTime) && this._offset.equals(t._offset) && this._zone.equals(t._zone));
                    }),
                    (n.hashCode = function () {
                        return N.hashCode(this._dateTime.hashCode(), this._offset.hashCode(), this._zone.hashCode());
                    }),
                    (n.toString = function () {
                        var t = this._dateTime.toString() + this._offset.toString();
                        return this._offset !== this._zone && (t += "[" + this._zone.toString() + "]"), t;
                    }),
                    (n.toJSON = function () {
                        return this.toString();
                    }),
                    (n.format = function (e) {
                        return t.prototype.format.call(this, e);
                    }),
                    e
                );
            })(ie);
            var se = (function (t) {
                function e(e, n) {
                    var i;
                    return (i = t.call(this) || this), d(e, "dateTime"), p(e, fe, "dateTime"), d(n, "offset"), p(n, $, "offset"), (i._dateTime = e), (i._offset = n), i;
                }
                c(e, t),
                    (e.from = function (t) {
                        if ((d(t, "temporal"), t instanceof e)) return t;
                        try {
                            var n = $.from(t);
                            try {
                                var i = fe.from(t);
                                return e.of(i, n);
                            } catch (i) {
                                var s = _e.from(t);
                                return e.ofInstant(s, n);
                            }
                        } catch (e) {
                            throw new r("Unable to obtain OffsetDateTime TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                        }
                    }),
                    (e.now = function (t) {
                        if (0 === arguments.length) return e.now(de.systemDefaultZone());
                        if ((d(t, "clockOrZone"), t instanceof j)) return e.now(de.system(t));
                        if (t instanceof de) {
                            var n = t.instant();
                            return e.ofInstant(n, t.zone().rules().offset(n));
                        }
                        throw new u("clockOrZone must be an instance of ZoneId or Clock");
                    }),
                    (e.of = function () {
                        return arguments.length <= 2 ? e.ofDateTime.apply(this, arguments) : 3 === arguments.length ? e.ofDateAndTime.apply(this, arguments) : e.ofNumbers.apply(this, arguments);
                    }),
                    (e.ofDateTime = function (t, n) {
                        return new e(t, n);
                    }),
                    (e.ofDateAndTime = function (t, n, i) {
                        return new e(fe.of(t, n), i);
                    }),
                    (e.ofNumbers = function (t, n, i, r, s, o, a, u) {
                        return void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), new e(fe.of(t, n, i, r, s, o, a), u);
                    }),
                    (e.ofInstant = function (t, n) {
                        d(t, "instant"), d(n, "zone");
                        var i = n.rules().offset(t);
                        return new e(fe.ofEpochSecond(t.epochSecond(), t.nano(), i), i);
                    }),
                    (e.parse = function (t, n) {
                        return void 0 === n && (n = qt.ISO_OFFSET_DATE_TIME), d(n, "formatter"), n.parse(t, e.FROM);
                    });
                var n = e.prototype;
                return (
                    (n.adjustInto = function (t) {
                        return t.with(g.EPOCH_DAY, this.toLocalDate().toEpochDay()).with(g.NANO_OF_DAY, this.toLocalTime().toNanoOfDay()).with(g.OFFSET_SECONDS, this.offset().totalSeconds());
                    }),
                    (n.until = function (t, n) {
                        var i = e.from(t);
                        return n instanceof y ? ((i = i.withOffsetSameInstant(this._offset)), this._dateTime.until(i._dateTime, n)) : n.between(this, i);
                    }),
                    (n.atZoneSameInstant = function (t) {
                        return re.ofInstant(this._dateTime, this._offset, t);
                    }),
                    (n.atZoneSimilarLocal = function (t) {
                        return re.ofLocal(this._dateTime, t, this._offset);
                    }),
                    (n.query = function (e) {
                        return d(e, "query"), e === I.chronology() ? ee.INSTANCE : e === I.precision() ? y.NANOS : e === I.offset() || e === I.zone() ? this.offset() : e === I.localDate() ? this.toLocalDate() : e === I.localTime() ? this.toLocalTime() : e === I.zoneId() ? null : t.prototype.query.call(this, e);
                    }),
                    (n.get = function (e) {
                        if (e instanceof g) {
                            switch (e) {
                                case g.INSTANT_SECONDS:
                                    throw new r("Field too large for an int: " + e);
                                case g.OFFSET_SECONDS:
                                    return this.offset().totalSeconds();
                            }
                            return this._dateTime.get(e);
                        }
                        return t.prototype.get.call(this, e);
                    }),
                    (n.getLong = function (t) {
                        if (t instanceof g) {
                            switch (t) {
                                case g.INSTANT_SECONDS:
                                    return this.toEpochSecond();
                                case g.OFFSET_SECONDS:
                                    return this.offset().totalSeconds();
                            }
                            return this._dateTime.getLong(t);
                        }
                        return t.getFrom(this);
                    }),
                    (n.offset = function () {
                        return this._offset;
                    }),
                    (n.year = function () {
                        return this._dateTime.year();
                    }),
                    (n.monthValue = function () {
                        return this._dateTime.monthValue();
                    }),
                    (n.month = function () {
                        return this._dateTime.month();
                    }),
                    (n.dayOfMonth = function () {
                        return this._dateTime.dayOfMonth();
                    }),
                    (n.dayOfYear = function () {
                        return this._dateTime.dayOfYear();
                    }),
                    (n.dayOfWeek = function () {
                        return this._dateTime.dayOfWeek();
                    }),
                    (n.hour = function () {
                        return this._dateTime.hour();
                    }),
                    (n.minute = function () {
                        return this._dateTime.minute();
                    }),
                    (n.second = function () {
                        return this._dateTime.second();
                    }),
                    (n.nano = function () {
                        return this._dateTime.nano();
                    }),
                    (n.toLocalDateTime = function () {
                        return this._dateTime;
                    }),
                    (n.toLocalDate = function () {
                        return this._dateTime.toLocalDate();
                    }),
                    (n.toLocalTime = function () {
                        return this._dateTime.toLocalTime();
                    }),
                    (n.toOffsetTime = function () {
                        return ne.of(this._dateTime.toLocalTime(), this._offset);
                    }),
                    (n.toZonedDateTime = function () {
                        return re.of(this._dateTime, this._offset);
                    }),
                    (n.toInstant = function () {
                        return this._dateTime.toInstant(this._offset);
                    }),
                    (n.toEpochSecond = function () {
                        return this._dateTime.toEpochSecond(this._offset);
                    }),
                    (n.isSupported = function (t) {
                        return t instanceof g || t instanceof y ? t.isDateBased() || t.isTimeBased() : null != t && t.isSupportedBy(this);
                    }),
                    (n.range = function (t) {
                        return t instanceof g ? (t === g.INSTANT_SECONDS || t === g.OFFSET_SECONDS ? t.range() : this._dateTime.range(t)) : t.rangeRefinedBy(this);
                    }),
                    (n.withAdjuster = function (t) {
                        return d(t), t instanceof ue || t instanceof ce || t instanceof fe ? this._withDateTimeOffset(this._dateTime.with(t), this._offset) : t instanceof _e ? e.ofInstant(t, this._offset) : t instanceof $ ? this._withDateTimeOffset(this._dateTime, t) : t instanceof e ? t : t.adjustInto(this);
                    }),
                    (n.withFieldValue = function (t, n) {
                        if ((d(t), t instanceof g)) {
                            var i = t;
                            switch (i) {
                                case g.INSTANT_SECONDS:
                                    return e.ofInstant(_e.ofEpochSecond(n, this.nano()), this._offset);
                                case g.OFFSET_SECONDS:
                                    return this._withDateTimeOffset(this._dateTime, $.ofTotalSeconds(i.checkValidIntValue(n)));
                            }
                            return this._withDateTimeOffset(this._dateTime.with(t, n), this._offset);
                        }
                        return t.adjustInto(this, n);
                    }),
                    (n._withDateTimeOffset = function (t, n) {
                        return this._dateTime === t && this._offset.equals(n) ? this : new e(t, n);
                    }),
                    (n.withYear = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withYear(t), this._offset);
                    }),
                    (n.withMonth = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withMonth(t), this._offset);
                    }),
                    (n.withDayOfMonth = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withDayOfMonth(t), this._offset);
                    }),
                    (n.withDayOfYear = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withDayOfYear(t), this._offset);
                    }),
                    (n.withHour = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withHour(t), this._offset);
                    }),
                    (n.withMinute = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withMinute(t), this._offset);
                    }),
                    (n.withSecond = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withSecond(t), this._offset);
                    }),
                    (n.withNano = function (t) {
                        return this._withDateTimeOffset(this._dateTime.withNano(t), this._offset);
                    }),
                    (n.withOffsetSameLocal = function (t) {
                        return d(t, "offset"), this._withDateTimeOffset(this._dateTime, t);
                    }),
                    (n.withOffsetSameInstant = function (t) {
                        if ((d(t, "offset"), t.equals(this._offset))) return this;
                        var n = t.totalSeconds() - this._offset.totalSeconds();
                        return new e(this._dateTime.plusSeconds(n), t);
                    }),
                    (n.truncatedTo = function (t) {
                        return this._withDateTimeOffset(this._dateTime.truncatedTo(t), this._offset);
                    }),
                    (n.plusAmount = function (t) {
                        return d(t, "amount"), t.addTo(this);
                    }),
                    (n.plusAmountUnit = function (t, e) {
                        return e instanceof y ? this._withDateTimeOffset(this._dateTime.plus(t, e), this._offset) : e.addTo(this, t);
                    }),
                    (n.plusYears = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusYears(t), this._offset);
                    }),
                    (n.plusMonths = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusMonths(t), this._offset);
                    }),
                    (n.plusWeeks = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusWeeks(t), this._offset);
                    }),
                    (n.plusDays = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusDays(t), this._offset);
                    }),
                    (n.plusHours = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusHours(t), this._offset);
                    }),
                    (n.plusMinutes = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusMinutes(t), this._offset);
                    }),
                    (n.plusSeconds = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusSeconds(t), this._offset);
                    }),
                    (n.plusNanos = function (t) {
                        return this._withDateTimeOffset(this._dateTime.plusNanos(t), this._offset);
                    }),
                    (n.minusAmount = function (t) {
                        return d(t), t.subtractFrom(this);
                    }),
                    (n.minusAmountUnit = function (t, e) {
                        return this.plus(-1 * t, e);
                    }),
                    (n.minusYears = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusYears(t), this._offset);
                    }),
                    (n.minusMonths = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusMonths(t), this._offset);
                    }),
                    (n.minusWeeks = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusWeeks(t), this._offset);
                    }),
                    (n.minusDays = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusDays(t), this._offset);
                    }),
                    (n.minusHours = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusHours(t), this._offset);
                    }),
                    (n.minusMinutes = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusMinutes(t), this._offset);
                    }),
                    (n.minusSeconds = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusSeconds(t), this._offset);
                    }),
                    (n.minusNanos = function (t) {
                        return this._withDateTimeOffset(this._dateTime.minusNanos(t), this._offset);
                    }),
                    (n.compareTo = function (t) {
                        if ((d(t, "other"), p(t, e, "other"), this.offset().equals(t.offset()))) return this.toLocalDateTime().compareTo(t.toLocalDateTime());
                        var n = N.compareNumbers(this.toEpochSecond(), t.toEpochSecond());
                        return 0 === n && 0 === (n = this.toLocalTime().nano() - t.toLocalTime().nano()) && (n = this.toLocalDateTime().compareTo(t.toLocalDateTime())), n;
                    }),
                    (n.isAfter = function (t) {
                        d(t, "other");
                        var e = this.toEpochSecond(),
                            n = t.toEpochSecond();
                        return e > n || (e === n && this.toLocalTime().nano() > t.toLocalTime().nano());
                    }),
                    (n.isBefore = function (t) {
                        d(t, "other");
                        var e = this.toEpochSecond(),
                            n = t.toEpochSecond();
                        return e < n || (e === n && this.toLocalTime().nano() < t.toLocalTime().nano());
                    }),
                    (n.isEqual = function (t) {
                        return d(t, "other"), this.toEpochSecond() === t.toEpochSecond() && this.toLocalTime().nano() === t.toLocalTime().nano();
                    }),
                    (n.equals = function (t) {
                        return this === t || (t instanceof e && this._dateTime.equals(t._dateTime) && this._offset.equals(t._offset));
                    }),
                    (n.hashCode = function () {
                        return this._dateTime.hashCode() ^ this._offset.hashCode();
                    }),
                    (n.toString = function () {
                        return this._dateTime.toString() + this._offset.toString();
                    }),
                    (n.toJSON = function () {
                        return this.toString();
                    }),
                    (n.format = function (t) {
                        return d(t, "formatter"), t.format(this);
                    }),
                    e
                );
            })(Z);
            var oe = 146097,
                ae = 719528,
                ue = (function (t) {
                    function e(n, i, r) {
                        var s;
                        return (s = t.call(this) || this), d(n, "year"), d(i, "month"), d(r, "dayOfMonth"), i instanceof V && (i = i.value()), (s._year = N.safeToInt(n)), (s._month = N.safeToInt(i)), (s._day = N.safeToInt(r)), e._validate(s._year, s._month, s._day), s;
                    }
                    c(e, t),
                        (e.now = function (t) {
                            var n;
                            return (n = null == t ? de.systemDefaultZone() : t instanceof j ? de.system(t) : t), e.ofInstant(n.instant(), n.zone());
                        }),
                        (e.ofInstant = function (t, n) {
                            void 0 === n && (n = j.systemDefault()), d(t, "instant");
                            var i = n.rules().offset(t),
                                r = t.epochSecond() + i.totalSeconds(),
                                s = N.floorDiv(r, ce.SECONDS_PER_DAY);
                            return e.ofEpochDay(s);
                        }),
                        (e.of = function (t, n, i) {
                            return new e(t, n, i);
                        }),
                        (e.ofYearDay = function (t, n) {
                            g.YEAR.checkValidValue(t);
                            var i = ee.isLeapYear(t);
                            366 === n && !1 === i && _(!1, "Invalid date 'DayOfYear 366' as '" + t + "' is not a leap year", r);
                            var s = V.of(Math.floor((n - 1) / 31 + 1));
                            n > s.firstDayOfYear(i) + s.length(i) - 1 && (s = s.plus(1));
                            var o = n - s.firstDayOfYear(i) + 1;
                            return new e(t, s.value(), o);
                        }),
                        (e.ofEpochDay = function (t) {
                            var n, i, r, s, o;
                            void 0 === t && (t = 0), (o = t + ae), (n = 0), (o -= 60) < 0 && ((n = 400 * (i = N.intDiv(o + 1, oe) - 1)), (o += -i * oe)), (r = o - (365 * (s = N.intDiv(400 * o + 591, oe)) + N.intDiv(s, 4) - N.intDiv(s, 100) + N.intDiv(s, 400))) < 0 && (r = o - (365 * --s + N.intDiv(s, 4) - N.intDiv(s, 100) + N.intDiv(s, 400))), (s += n);
                            var a = r,
                                u = N.intDiv(5 * a + 2, 153),
                                h = ((u + 2) % 12) + 1,
                                f = a - N.intDiv(306 * u + 5, 10) + 1;
                            return new e((s += N.intDiv(u, 10)), h, f);
                        }),
                        (e.from = function (t) {
                            d(t, "temporal");
                            var e = t.query(I.localDate());
                            if (null == e) throw new r("Unable to obtain LocalDate from TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                            return e;
                        }),
                        (e.parse = function (t, n) {
                            return void 0 === n && (n = qt.ISO_LOCAL_DATE), _(null != n, "formatter", f), n.parse(t, e.FROM);
                        }),
                        (e._resolvePreviousValid = function (t, n, i) {
                            switch (n) {
                                case 2:
                                    i = Math.min(i, ee.isLeapYear(t) ? 29 : 28);
                                    break;
                                case 4:
                                case 6:
                                case 9:
                                case 11:
                                    i = Math.min(i, 30);
                            }
                            return e.of(t, n, i);
                        }),
                        (e._validate = function (t, e, n) {
                            var i;
                            if ((g.YEAR.checkValidValue(t), g.MONTH_OF_YEAR.checkValidValue(e), g.DAY_OF_MONTH.checkValidValue(n), n > 28)) {
                                switch (((i = 31), e)) {
                                    case 2:
                                        i = ee.isLeapYear(t) ? 29 : 28;
                                        break;
                                    case 4:
                                    case 6:
                                    case 9:
                                    case 11:
                                        i = 30;
                                }
                                n > i && _(!1, 29 === n ? "Invalid date 'February 29' as '" + t + "' is not a leap year" : "Invalid date '" + t + "' '" + e + "' '" + n + "'", r);
                            }
                        });
                    var n = e.prototype;
                    return (
                        (n.isSupported = function (e) {
                            return t.prototype.isSupported.call(this, e);
                        }),
                        (n.range = function (t) {
                            if (t instanceof g) {
                                if (t.isDateBased()) {
                                    switch (t) {
                                        case g.DAY_OF_MONTH:
                                            return R.of(1, this.lengthOfMonth());
                                        case g.DAY_OF_YEAR:
                                            return R.of(1, this.lengthOfYear());
                                        case g.ALIGNED_WEEK_OF_MONTH:
                                            return R.of(1, this.month() === V.FEBRUARY && !1 === this.isLeapYear() ? 4 : 5);
                                        case g.YEAR_OF_ERA:
                                            return this._year <= 0 ? R.of(1, Xt.MAX_VALUE + 1) : R.of(1, Xt.MAX_VALUE);
                                    }
                                    return t.range();
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.rangeRefinedBy(this);
                        }),
                        (n.get = function (t) {
                            return this.getLong(t);
                        }),
                        (n.getLong = function (t) {
                            return _(null != t, "", f), t instanceof g ? this._get0(t) : t.getFrom(this);
                        }),
                        (n._get0 = function (t) {
                            switch (t) {
                                case g.DAY_OF_WEEK:
                                    return this.dayOfWeek().value();
                                case g.ALIGNED_DAY_OF_WEEK_IN_MONTH:
                                    return N.intMod(this._day - 1, 7) + 1;
                                case g.ALIGNED_DAY_OF_WEEK_IN_YEAR:
                                    return N.intMod(this.dayOfYear() - 1, 7) + 1;
                                case g.DAY_OF_MONTH:
                                    return this._day;
                                case g.DAY_OF_YEAR:
                                    return this.dayOfYear();
                                case g.EPOCH_DAY:
                                    return this.toEpochDay();
                                case g.ALIGNED_WEEK_OF_MONTH:
                                    return N.intDiv(this._day - 1, 7) + 1;
                                case g.ALIGNED_WEEK_OF_YEAR:
                                    return N.intDiv(this.dayOfYear() - 1, 7) + 1;
                                case g.MONTH_OF_YEAR:
                                    return this._month;
                                case g.PROLEPTIC_MONTH:
                                    return this._prolepticMonth();
                                case g.YEAR_OF_ERA:
                                    return this._year >= 1 ? this._year : 1 - this._year;
                                case g.YEAR:
                                    return this._year;
                                case g.ERA:
                                    return this._year >= 1 ? 1 : 0;
                            }
                            throw new o("Unsupported field: " + t);
                        }),
                        (n._prolepticMonth = function () {
                            return 12 * this._year + (this._month - 1);
                        }),
                        (n.chronology = function () {
                            return ee.INSTANCE;
                        }),
                        (n.year = function () {
                            return this._year;
                        }),
                        (n.monthValue = function () {
                            return this._month;
                        }),
                        (n.month = function () {
                            return V.of(this._month);
                        }),
                        (n.dayOfMonth = function () {
                            return this._day;
                        }),
                        (n.dayOfYear = function () {
                            return this.month().firstDayOfYear(this.isLeapYear()) + this._day - 1;
                        }),
                        (n.dayOfWeek = function () {
                            var t = N.floorMod(this.toEpochDay() + 3, 7);
                            return U.of(t + 1);
                        }),
                        (n.isLeapYear = function () {
                            return ee.isLeapYear(this._year);
                        }),
                        (n.lengthOfMonth = function () {
                            switch (this._month) {
                                case 2:
                                    return this.isLeapYear() ? 29 : 28;
                                case 4:
                                case 6:
                                case 9:
                                case 11:
                                    return 30;
                                default:
                                    return 31;
                            }
                        }),
                        (n.lengthOfYear = function () {
                            return this.isLeapYear() ? 366 : 365;
                        }),
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), t instanceof e ? t : (_("function" == typeof t.adjustInto, "adjuster", u), t.adjustInto(this));
                        }),
                        (n.withFieldValue = function (t, n) {
                            if ((_(null != t, "field", f), t instanceof g)) {
                                var i = t;
                                switch ((i.checkValidValue(n), i)) {
                                    case g.DAY_OF_WEEK:
                                        return this.plusDays(n - this.dayOfWeek().value());
                                    case g.ALIGNED_DAY_OF_WEEK_IN_MONTH:
                                        return this.plusDays(n - this.getLong(g.ALIGNED_DAY_OF_WEEK_IN_MONTH));
                                    case g.ALIGNED_DAY_OF_WEEK_IN_YEAR:
                                        return this.plusDays(n - this.getLong(g.ALIGNED_DAY_OF_WEEK_IN_YEAR));
                                    case g.DAY_OF_MONTH:
                                        return this.withDayOfMonth(n);
                                    case g.DAY_OF_YEAR:
                                        return this.withDayOfYear(n);
                                    case g.EPOCH_DAY:
                                        return e.ofEpochDay(n);
                                    case g.ALIGNED_WEEK_OF_MONTH:
                                        return this.plusWeeks(n - this.getLong(g.ALIGNED_WEEK_OF_MONTH));
                                    case g.ALIGNED_WEEK_OF_YEAR:
                                        return this.plusWeeks(n - this.getLong(g.ALIGNED_WEEK_OF_YEAR));
                                    case g.MONTH_OF_YEAR:
                                        return this.withMonth(n);
                                    case g.PROLEPTIC_MONTH:
                                        return this.plusMonths(n - this.getLong(g.PROLEPTIC_MONTH));
                                    case g.YEAR_OF_ERA:
                                        return this.withYear(this._year >= 1 ? n : 1 - n);
                                    case g.YEAR:
                                        return this.withYear(n);
                                    case g.ERA:
                                        return this.getLong(g.ERA) === n ? this : this.withYear(1 - this._year);
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.adjustInto(this, n);
                        }),
                        (n.withYear = function (t) {
                            return this._year === t ? this : (g.YEAR.checkValidValue(t), e._resolvePreviousValid(t, this._month, this._day));
                        }),
                        (n.withMonth = function (t) {
                            var n = t instanceof V ? t.value() : t;
                            return this._month === n ? this : (g.MONTH_OF_YEAR.checkValidValue(n), e._resolvePreviousValid(this._year, n, this._day));
                        }),
                        (n.withDayOfMonth = function (t) {
                            return this._day === t ? this : e.of(this._year, this._month, t);
                        }),
                        (n.withDayOfYear = function (t) {
                            return this.dayOfYear() === t ? this : e.ofYearDay(this._year, t);
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), t.addTo(this);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(t, "amountToAdd"), d(e, "unit"), e instanceof y)) {
                                switch (e) {
                                    case y.DAYS:
                                        return this.plusDays(t);
                                    case y.WEEKS:
                                        return this.plusWeeks(t);
                                    case y.MONTHS:
                                        return this.plusMonths(t);
                                    case y.YEARS:
                                        return this.plusYears(t);
                                    case y.DECADES:
                                        return this.plusYears(N.safeMultiply(t, 10));
                                    case y.CENTURIES:
                                        return this.plusYears(N.safeMultiply(t, 100));
                                    case y.MILLENNIA:
                                        return this.plusYears(N.safeMultiply(t, 1e3));
                                    case y.ERAS:
                                        return this.with(g.ERA, N.safeAdd(this.getLong(g.ERA), t));
                                }
                                throw new o("Unsupported unit: " + e);
                            }
                            return e.addTo(this, t);
                        }),
                        (n.plusYears = function (t) {
                            if (0 === t) return this;
                            var n = g.YEAR.checkValidIntValue(this._year + t);
                            return e._resolvePreviousValid(n, this._month, this._day);
                        }),
                        (n.plusMonths = function (t) {
                            if (0 === t) return this;
                            var n = 12 * this._year + (this._month - 1) + t,
                                i = g.YEAR.checkValidIntValue(N.floorDiv(n, 12)),
                                r = N.floorMod(n, 12) + 1;
                            return e._resolvePreviousValid(i, r, this._day);
                        }),
                        (n.plusWeeks = function (t) {
                            return this.plusDays(N.safeMultiply(t, 7));
                        }),
                        (n.plusDays = function (t) {
                            if (0 === t) return this;
                            var n = N.safeAdd(this.toEpochDay(), t);
                            return e.ofEpochDay(n);
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return d(t, "amountToSubtract"), d(e, "unit"), this.plusAmountUnit(-1 * t, e);
                        }),
                        (n.minusYears = function (t) {
                            return this.plusYears(-1 * t);
                        }),
                        (n.minusMonths = function (t) {
                            return this.plusMonths(-1 * t);
                        }),
                        (n.minusWeeks = function (t) {
                            return this.plusWeeks(-1 * t);
                        }),
                        (n.minusDays = function (t) {
                            return this.plusDays(-1 * t);
                        }),
                        (n.query = function (e) {
                            return d(e, "query"), e === I.localDate() ? this : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (e) {
                            return t.prototype.adjustInto.call(this, e);
                        }),
                        (n.until = function (t, e) {
                            return arguments.length < 2 ? this.until1(t) : this.until2(t, e);
                        }),
                        (n.until2 = function (t, n) {
                            var i = e.from(t);
                            if (n instanceof y) {
                                switch (n) {
                                    case y.DAYS:
                                        return this.daysUntil(i);
                                    case y.WEEKS:
                                        return N.intDiv(this.daysUntil(i), 7);
                                    case y.MONTHS:
                                        return this._monthsUntil(i);
                                    case y.YEARS:
                                        return N.intDiv(this._monthsUntil(i), 12);
                                    case y.DECADES:
                                        return N.intDiv(this._monthsUntil(i), 120);
                                    case y.CENTURIES:
                                        return N.intDiv(this._monthsUntil(i), 1200);
                                    case y.MILLENNIA:
                                        return N.intDiv(this._monthsUntil(i), 12e3);
                                    case y.ERAS:
                                        return i.getLong(g.ERA) - this.getLong(g.ERA);
                                }
                                throw new o("Unsupported unit: " + n);
                            }
                            return n.between(this, i);
                        }),
                        (n.daysUntil = function (t) {
                            return t.toEpochDay() - this.toEpochDay();
                        }),
                        (n._monthsUntil = function (t) {
                            var e = 32 * this._prolepticMonth() + this.dayOfMonth(),
                                n = 32 * t._prolepticMonth() + t.dayOfMonth();
                            return N.intDiv(n - e, 32);
                        }),
                        (n.until1 = function (t) {
                            var n = e.from(t),
                                i = n._prolepticMonth() - this._prolepticMonth(),
                                r = n._day - this._day;
                            if (i > 0 && r < 0) {
                                i--;
                                var s = this.plusMonths(i);
                                r = n.toEpochDay() - s.toEpochDay();
                            } else i < 0 && r > 0 && (i++, (r -= n.lengthOfMonth()));
                            var o = N.intDiv(i, 12),
                                a = N.intMod(i, 12);
                            return H.of(o, a, r);
                        }),
                        (n.atTime = function () {
                            return 1 === arguments.length ? this.atTime1.apply(this, arguments) : this.atTime4.apply(this, arguments);
                        }),
                        (n.atTime1 = function (t) {
                            if ((d(t, "time"), t instanceof ce)) return fe.of(this, t);
                            if (t instanceof ne) return this._atTimeOffsetTime(t);
                            throw new u("time must be an instance of LocalTime or OffsetTime" + (t && t.constructor && t.constructor.name ? ", but is " + t.constructor.name : ""));
                        }),
                        (n.atTime4 = function (t, e, n, i) {
                            return void 0 === n && (n = 0), void 0 === i && (i = 0), this.atTime1(ce.of(t, e, n, i));
                        }),
                        (n._atTimeOffsetTime = function (t) {
                            return se.of(fe.of(this, t.toLocalTime()), t.offset());
                        }),
                        (n.atStartOfDay = function (t) {
                            return null != t ? this.atStartOfDayWithZone(t) : fe.of(this, ce.MIDNIGHT);
                        }),
                        (n.atStartOfDayWithZone = function (t) {
                            d(t, "zone");
                            var e = this.atTime(ce.MIDNIGHT);
                            if (t instanceof $ == !1) {
                                var n = t.rules().transition(e);
                                null != n && n.isGap() && (e = n.dateTimeAfter());
                            }
                            return re.of(e, t);
                        }),
                        (n.toEpochDay = function () {
                            var t = this._year,
                                e = this._month,
                                n = 0;
                            return (n += 365 * t), t >= 0 ? (n += N.intDiv(t + 3, 4) - N.intDiv(t + 99, 100) + N.intDiv(t + 399, 400)) : (n -= N.intDiv(t, -4) - N.intDiv(t, -100) + N.intDiv(t, -400)), (n += N.intDiv(367 * e - 362, 12)), (n += this.dayOfMonth() - 1), e > 2 && (n--, ee.isLeapYear(t) || n--), n - ae;
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._compareTo0(t);
                        }),
                        (n._compareTo0 = function (t) {
                            var e = this._year - t._year;
                            return 0 === e && 0 === (e = this._month - t._month) && (e = this._day - t._day), e;
                        }),
                        (n.isAfter = function (t) {
                            return this.compareTo(t) > 0;
                        }),
                        (n.isBefore = function (t) {
                            return this.compareTo(t) < 0;
                        }),
                        (n.isEqual = function (t) {
                            return 0 === this.compareTo(t);
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && 0 === this._compareTo0(t));
                        }),
                        (n.hashCode = function () {
                            var t = this._year,
                                e = this._month,
                                n = this._day;
                            return N.hash((4294965248 & t) ^ ((t << 11) + (e << 6) + n));
                        }),
                        (n.toString = function () {
                            var t = this._year,
                                e = this._month,
                                n = this._day;
                            return (Math.abs(t) < 1e3 ? (t < 0 ? "-" + ("" + (t - 1e4)).slice(-4) : ("" + (t + 1e4)).slice(-4)) : t > 9999 ? "+" + t : "" + t) + (e < 10 ? "-0" + e : "-" + e) + (n < 10 ? "-0" + n : "-" + n);
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.format = function (e) {
                            return d(e, "formatter"), p(e, qt, "formatter"), t.prototype.format.call(this, e);
                        }),
                        e
                    );
                })(z);
            var he = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.chronology = function () {
                            return this.toLocalDate().chronology();
                        }),
                        (n.query = function (e) {
                            return e === I.chronology() ? this.chronology() : e === I.precision() ? y.NANOS : e === I.localDate() ? ue.ofEpochDay(this.toLocalDate().toEpochDay()) : e === I.localTime() ? this.toLocalTime() : e === I.zone() || e === I.zoneId() || e === I.offset() ? null : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (t) {
                            return t.with(g.EPOCH_DAY, this.toLocalDate().toEpochDay()).with(g.NANO_OF_DAY, this.toLocalTime().toNanoOfDay());
                        }),
                        (n.toInstant = function (t) {
                            return p(t, $, "zoneId"), _e.ofEpochSecond(this.toEpochSecond(t), this.toLocalTime().nano());
                        }),
                        (n.toEpochSecond = function (t) {
                            d(t, "offset");
                            var e = 86400 * this.toLocalDate().toEpochDay() + this.toLocalTime().toSecondOfDay();
                            return (e -= t.totalSeconds()), N.safeToInt(e);
                        }),
                        e
                    );
                })(Z),
                fe = (function (t) {
                    function e(e, n) {
                        var i;
                        return (i = t.call(this) || this), p(e, ue, "date"), p(n, ce, "time"), (i._date = e), (i._time = n), i;
                    }
                    c(e, t),
                        (e.now = function (t) {
                            return null == t ? e._now(de.systemDefaultZone()) : t instanceof de ? e._now(t) : e._now(de.system(t));
                        }),
                        (e._now = function (t) {
                            return d(t, "clock"), e.ofInstant(t.instant(), t.zone());
                        }),
                        (e._ofEpochMillis = function (t, n) {
                            var i = N.floorDiv(t, 1e3) + n.totalSeconds(),
                                r = N.floorDiv(i, ce.SECONDS_PER_DAY),
                                s = N.floorMod(i, ce.SECONDS_PER_DAY),
                                o = 1e6 * N.floorMod(t, 1e3);
                            return new e(ue.ofEpochDay(r), ce.ofSecondOfDay(s, o));
                        }),
                        (e.of = function () {
                            return arguments.length <= 2 ? e.ofDateAndTime.apply(this, arguments) : e.ofNumbers.apply(this, arguments);
                        }),
                        (e.ofNumbers = function (t, n, i, r, s, o, a) {
                            return void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === o && (o = 0), void 0 === a && (a = 0), new e(ue.of(t, n, i), ce.of(r, s, o, a));
                        }),
                        (e.ofDateAndTime = function (t, n) {
                            return d(t, "date"), d(n, "time"), new e(t, n);
                        }),
                        (e.ofInstant = function (t, n) {
                            void 0 === n && (n = j.systemDefault()), d(t, "instant"), p(t, _e, "instant"), d(n, "zone");
                            var i = n.rules().offset(t);
                            return e.ofEpochSecond(t.epochSecond(), t.nano(), i);
                        }),
                        (e.ofEpochSecond = function (t, n, i) {
                            void 0 === t && (t = 0), void 0 === n && (n = 0), 2 === arguments.length && n instanceof $ && ((i = n), (n = 0)), d(i, "offset");
                            var r = t + i.totalSeconds(),
                                s = N.floorDiv(r, ce.SECONDS_PER_DAY),
                                o = N.floorMod(r, ce.SECONDS_PER_DAY);
                            return new e(ue.ofEpochDay(s), ce.ofSecondOfDay(o, n));
                        }),
                        (e.from = function (t) {
                            if ((d(t, "temporal"), t instanceof e)) return t;
                            if (t instanceof re) return t.toLocalDateTime();
                            try {
                                return new e(ue.from(t), ce.from(t));
                            } catch (e) {
                                throw new r("Unable to obtain LocalDateTime TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                            }
                        }),
                        (e.parse = function (t, n) {
                            return void 0 === n && (n = qt.ISO_LOCAL_DATE_TIME), d(n, "formatter"), n.parse(t, e.FROM);
                        });
                    var n = e.prototype;
                    return (
                        (n._withDateTime = function (t, n) {
                            return this._date.equals(t) && this._time.equals(n) ? this : new e(t, n);
                        }),
                        (n.isSupported = function (t) {
                            return t instanceof g || t instanceof y ? t.isDateBased() || t.isTimeBased() : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (t) {
                            return t instanceof g ? (t.isTimeBased() ? this._time.range(t) : this._date.range(t)) : t.rangeRefinedBy(this);
                        }),
                        (n.get = function (e) {
                            return e instanceof g ? (e.isTimeBased() ? this._time.get(e) : this._date.get(e)) : t.prototype.get.call(this, e);
                        }),
                        (n.getLong = function (t) {
                            return d(t, "field"), t instanceof g ? (t.isTimeBased() ? this._time.getLong(t) : this._date.getLong(t)) : t.getFrom(this);
                        }),
                        (n.year = function () {
                            return this._date.year();
                        }),
                        (n.monthValue = function () {
                            return this._date.monthValue();
                        }),
                        (n.month = function () {
                            return this._date.month();
                        }),
                        (n.dayOfMonth = function () {
                            return this._date.dayOfMonth();
                        }),
                        (n.dayOfYear = function () {
                            return this._date.dayOfYear();
                        }),
                        (n.dayOfWeek = function () {
                            return this._date.dayOfWeek();
                        }),
                        (n.hour = function () {
                            return this._time.hour();
                        }),
                        (n.minute = function () {
                            return this._time.minute();
                        }),
                        (n.second = function () {
                            return this._time.second();
                        }),
                        (n.nano = function () {
                            return this._time.nano();
                        }),
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), t instanceof ue ? this._withDateTime(t, this._time) : t instanceof ce ? this._withDateTime(this._date, t) : t instanceof e ? t : (_("function" == typeof t.adjustInto, "adjuster", u), t.adjustInto(this));
                        }),
                        (n.withFieldValue = function (t, e) {
                            return d(t, "field"), t instanceof g ? (t.isTimeBased() ? this._withDateTime(this._date, this._time.with(t, e)) : this._withDateTime(this._date.with(t, e), this._time)) : t.adjustInto(this, e);
                        }),
                        (n.withYear = function (t) {
                            return this._withDateTime(this._date.withYear(t), this._time);
                        }),
                        (n.withMonth = function (t) {
                            return this._withDateTime(this._date.withMonth(t), this._time);
                        }),
                        (n.withDayOfMonth = function (t) {
                            return this._withDateTime(this._date.withDayOfMonth(t), this._time);
                        }),
                        (n.withDayOfYear = function (t) {
                            return this._withDateTime(this._date.withDayOfYear(t), this._time);
                        }),
                        (n.withHour = function (t) {
                            var e = this._time.withHour(t);
                            return this._withDateTime(this._date, e);
                        }),
                        (n.withMinute = function (t) {
                            var e = this._time.withMinute(t);
                            return this._withDateTime(this._date, e);
                        }),
                        (n.withSecond = function (t) {
                            var e = this._time.withSecond(t);
                            return this._withDateTime(this._date, e);
                        }),
                        (n.withNano = function (t) {
                            var e = this._time.withNano(t);
                            return this._withDateTime(this._date, e);
                        }),
                        (n.truncatedTo = function (t) {
                            return this._withDateTime(this._date, this._time.truncatedTo(t));
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), t.addTo(this);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(e, "unit"), e instanceof y)) {
                                switch (e) {
                                    case y.NANOS:
                                        return this.plusNanos(t);
                                    case y.MICROS:
                                        return this.plusDays(N.intDiv(t, ce.MICROS_PER_DAY)).plusNanos(1e3 * N.intMod(t, ce.MICROS_PER_DAY));
                                    case y.MILLIS:
                                        return this.plusDays(N.intDiv(t, ce.MILLIS_PER_DAY)).plusNanos(1e6 * N.intMod(t, ce.MILLIS_PER_DAY));
                                    case y.SECONDS:
                                        return this.plusSeconds(t);
                                    case y.MINUTES:
                                        return this.plusMinutes(t);
                                    case y.HOURS:
                                        return this.plusHours(t);
                                    case y.HALF_DAYS:
                                        return this.plusDays(N.intDiv(t, 256)).plusHours(12 * N.intMod(t, 256));
                                }
                                return this._withDateTime(this._date.plus(t, e), this._time);
                            }
                            return e.addTo(this, t);
                        }),
                        (n.plusYears = function (t) {
                            var e = this._date.plusYears(t);
                            return this._withDateTime(e, this._time);
                        }),
                        (n.plusMonths = function (t) {
                            var e = this._date.plusMonths(t);
                            return this._withDateTime(e, this._time);
                        }),
                        (n.plusWeeks = function (t) {
                            var e = this._date.plusWeeks(t);
                            return this._withDateTime(e, this._time);
                        }),
                        (n.plusDays = function (t) {
                            var e = this._date.plusDays(t);
                            return this._withDateTime(e, this._time);
                        }),
                        (n.plusHours = function (t) {
                            return this._plusWithOverflow(this._date, t, 0, 0, 0, 1);
                        }),
                        (n.plusMinutes = function (t) {
                            return this._plusWithOverflow(this._date, 0, t, 0, 0, 1);
                        }),
                        (n.plusSeconds = function (t) {
                            return this._plusWithOverflow(this._date, 0, 0, t, 0, 1);
                        }),
                        (n.plusNanos = function (t) {
                            return this._plusWithOverflow(this._date, 0, 0, 0, t, 1);
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return d(e, "unit"), this.plusAmountUnit(-1 * t, e);
                        }),
                        (n.minusYears = function (t) {
                            return this.plusYears(-1 * t);
                        }),
                        (n.minusMonths = function (t) {
                            return this.plusMonths(-1 * t);
                        }),
                        (n.minusWeeks = function (t) {
                            return this.plusWeeks(-1 * t);
                        }),
                        (n.minusDays = function (t) {
                            return this.plusDays(-1 * t);
                        }),
                        (n.minusHours = function (t) {
                            return this._plusWithOverflow(this._date, t, 0, 0, 0, -1);
                        }),
                        (n.minusMinutes = function (t) {
                            return this._plusWithOverflow(this._date, 0, t, 0, 0, -1);
                        }),
                        (n.minusSeconds = function (t) {
                            return this._plusWithOverflow(this._date, 0, 0, t, 0, -1);
                        }),
                        (n.minusNanos = function (t) {
                            return this._plusWithOverflow(this._date, 0, 0, 0, t, -1);
                        }),
                        (n._plusWithOverflow = function (t, e, n, i, r, s) {
                            if (0 === e && 0 === n && 0 === i && 0 === r) return this._withDateTime(t, this._time);
                            var o = N.intDiv(r, ce.NANOS_PER_DAY) + N.intDiv(i, ce.SECONDS_PER_DAY) + N.intDiv(n, ce.MINUTES_PER_DAY) + N.intDiv(e, ce.HOURS_PER_DAY);
                            o *= s;
                            var a = N.intMod(r, ce.NANOS_PER_DAY) + N.intMod(i, ce.SECONDS_PER_DAY) * ce.NANOS_PER_SECOND + N.intMod(n, ce.MINUTES_PER_DAY) * ce.NANOS_PER_MINUTE + N.intMod(e, ce.HOURS_PER_DAY) * ce.NANOS_PER_HOUR,
                                u = this._time.toNanoOfDay();
                            (a = a * s + u), (o += N.floorDiv(a, ce.NANOS_PER_DAY));
                            var h = N.floorMod(a, ce.NANOS_PER_DAY),
                                f = h === u ? this._time : ce.ofNanoOfDay(h);
                            return this._withDateTime(t.plusDays(o), f);
                        }),
                        (n.query = function (e) {
                            return d(e, "query"), e === I.localDate() ? this.toLocalDate() : t.prototype.query.call(this, e);
                        }),
                        (n.adjustInto = function (e) {
                            return t.prototype.adjustInto.call(this, e);
                        }),
                        (n.until = function (t, n) {
                            d(t, "endExclusive"), d(n, "unit");
                            var i = e.from(t);
                            if (n instanceof y) {
                                if (n.isTimeBased()) {
                                    var r = this._date.daysUntil(i._date),
                                        s = i._time.toNanoOfDay() - this._time.toNanoOfDay();
                                    r > 0 && s < 0 ? (r--, (s += ce.NANOS_PER_DAY)) : r < 0 && s > 0 && (r++, (s -= ce.NANOS_PER_DAY));
                                    var a = r;
                                    switch (n) {
                                        case y.NANOS:
                                            return (a = N.safeMultiply(a, ce.NANOS_PER_DAY)), N.safeAdd(a, s);
                                        case y.MICROS:
                                            return (a = N.safeMultiply(a, ce.MICROS_PER_DAY)), N.safeAdd(a, N.intDiv(s, 1e3));
                                        case y.MILLIS:
                                            return (a = N.safeMultiply(a, ce.MILLIS_PER_DAY)), N.safeAdd(a, N.intDiv(s, 1e6));
                                        case y.SECONDS:
                                            return (a = N.safeMultiply(a, ce.SECONDS_PER_DAY)), N.safeAdd(a, N.intDiv(s, ce.NANOS_PER_SECOND));
                                        case y.MINUTES:
                                            return (a = N.safeMultiply(a, ce.MINUTES_PER_DAY)), N.safeAdd(a, N.intDiv(s, ce.NANOS_PER_MINUTE));
                                        case y.HOURS:
                                            return (a = N.safeMultiply(a, ce.HOURS_PER_DAY)), N.safeAdd(a, N.intDiv(s, ce.NANOS_PER_HOUR));
                                        case y.HALF_DAYS:
                                            return (a = N.safeMultiply(a, 2)), N.safeAdd(a, N.intDiv(s, 12 * ce.NANOS_PER_HOUR));
                                    }
                                    throw new o("Unsupported unit: " + n);
                                }
                                var u = i._date,
                                    h = i._time;
                                return u.isAfter(this._date) && h.isBefore(this._time) ? (u = u.minusDays(1)) : u.isBefore(this._date) && h.isAfter(this._time) && (u = u.plusDays(1)), this._date.until(u, n);
                            }
                            return n.between(this, i);
                        }),
                        (n.atOffset = function (t) {
                            return se.of(this, t);
                        }),
                        (n.atZone = function (t) {
                            return re.of(this, t);
                        }),
                        (n.toLocalDate = function () {
                            return this._date;
                        }),
                        (n.toLocalTime = function () {
                            return this._time;
                        }),
                        (n.compareTo = function (t) {
                            return d(t, "other"), p(t, e, "other"), this._compareTo0(t);
                        }),
                        (n._compareTo0 = function (t) {
                            var e = this._date.compareTo(t.toLocalDate());
                            return 0 === e && (e = this._time.compareTo(t.toLocalTime())), e;
                        }),
                        (n.isAfter = function (t) {
                            return this.compareTo(t) > 0;
                        }),
                        (n.isBefore = function (t) {
                            return this.compareTo(t) < 0;
                        }),
                        (n.isEqual = function (t) {
                            return 0 === this.compareTo(t);
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this._date.equals(t._date) && this._time.equals(t._time));
                        }),
                        (n.hashCode = function () {
                            return this._date.hashCode() ^ this._time.hashCode();
                        }),
                        (n.toString = function () {
                            return this._date.toString() + "T" + this._time.toString();
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        (n.format = function (t) {
                            return d(t, "formatter"), t.format(this);
                        }),
                        e
                    );
                })(he);
            var ce = (function (t) {
                function e(n, i, r, s) {
                    var o;
                    void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), void 0 === s && (s = 0), (o = t.call(this) || this);
                    var a = N.safeToInt(n),
                        u = N.safeToInt(i),
                        h = N.safeToInt(r),
                        f = N.safeToInt(s);
                    return e._validate(a, u, h, f), 0 === u && 0 === h && 0 === f ? (e.HOURS[a] || ((o._hour = a), (o._minute = u), (o._second = h), (o._nano = f), (e.HOURS[a] = l(o))), e.HOURS[a] || l(o)) : ((o._hour = a), (o._minute = u), (o._second = h), (o._nano = f), o);
                }
                c(e, t),
                    (e.now = function (t) {
                        return null == t ? e._now(de.systemDefaultZone()) : t instanceof de ? e._now(t) : e._now(de.system(t));
                    }),
                    (e._now = function (t) {
                        return void 0 === t && (t = de.systemDefaultZone()), d(t, "clock"), e.ofInstant(t.instant(), t.zone());
                    }),
                    (e.ofInstant = function (t, n) {
                        void 0 === n && (n = j.systemDefault());
                        var i = n.rules().offset(t),
                            r = N.intMod(t.epochSecond(), e.SECONDS_PER_DAY);
                        return (r = N.intMod(r + i.totalSeconds(), e.SECONDS_PER_DAY)) < 0 && (r += e.SECONDS_PER_DAY), e.ofSecondOfDay(r, t.nano());
                    }),
                    (e.of = function (t, n, i, r) {
                        return new e(t, n, i, r);
                    }),
                    (e.ofSecondOfDay = function (t, n) {
                        void 0 === t && (t = 0), void 0 === n && (n = 0), g.SECOND_OF_DAY.checkValidValue(t), g.NANO_OF_SECOND.checkValidValue(n);
                        var i = N.intDiv(t, e.SECONDS_PER_HOUR);
                        t -= i * e.SECONDS_PER_HOUR;
                        var r = N.intDiv(t, e.SECONDS_PER_MINUTE);
                        return new e(i, r, (t -= r * e.SECONDS_PER_MINUTE), n);
                    }),
                    (e.ofNanoOfDay = function (t) {
                        void 0 === t && (t = 0), g.NANO_OF_DAY.checkValidValue(t);
                        var n = N.intDiv(t, e.NANOS_PER_HOUR);
                        t -= n * e.NANOS_PER_HOUR;
                        var i = N.intDiv(t, e.NANOS_PER_MINUTE);
                        t -= i * e.NANOS_PER_MINUTE;
                        var r = N.intDiv(t, e.NANOS_PER_SECOND);
                        return new e(n, i, r, (t -= r * e.NANOS_PER_SECOND));
                    }),
                    (e.from = function (t) {
                        d(t, "temporal");
                        var e = t.query(I.localTime());
                        if (null == e) throw new r("Unable to obtain LocalTime TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                        return e;
                    }),
                    (e.parse = function (t, n) {
                        return void 0 === n && (n = qt.ISO_LOCAL_TIME), d(n, "formatter"), n.parse(t, e.FROM);
                    }),
                    (e._validate = function (t, e, n, i) {
                        g.HOUR_OF_DAY.checkValidValue(t), g.MINUTE_OF_HOUR.checkValidValue(e), g.SECOND_OF_MINUTE.checkValidValue(n), g.NANO_OF_SECOND.checkValidValue(i);
                    });
                var n = e.prototype;
                return (
                    (n.isSupported = function (t) {
                        return t instanceof g || t instanceof y ? t.isTimeBased() : null != t && t.isSupportedBy(this);
                    }),
                    (n.range = function (e) {
                        return d(e), t.prototype.range.call(this, e);
                    }),
                    (n.get = function (t) {
                        return this.getLong(t);
                    }),
                    (n.getLong = function (t) {
                        return d(t, "field"), t instanceof g ? this._get0(t) : t.getFrom(this);
                    }),
                    (n._get0 = function (t) {
                        switch (t) {
                            case g.NANO_OF_SECOND:
                                return this._nano;
                            case g.NANO_OF_DAY:
                                return this.toNanoOfDay();
                            case g.MICRO_OF_SECOND:
                                return N.intDiv(this._nano, 1e3);
                            case g.MICRO_OF_DAY:
                                return N.intDiv(this.toNanoOfDay(), 1e3);
                            case g.MILLI_OF_SECOND:
                                return N.intDiv(this._nano, 1e6);
                            case g.MILLI_OF_DAY:
                                return N.intDiv(this.toNanoOfDay(), 1e6);
                            case g.SECOND_OF_MINUTE:
                                return this._second;
                            case g.SECOND_OF_DAY:
                                return this.toSecondOfDay();
                            case g.MINUTE_OF_HOUR:
                                return this._minute;
                            case g.MINUTE_OF_DAY:
                                return 60 * this._hour + this._minute;
                            case g.HOUR_OF_AMPM:
                                return N.intMod(this._hour, 12);
                            case g.CLOCK_HOUR_OF_AMPM:
                                var e = N.intMod(this._hour, 12);
                                return e % 12 == 0 ? 12 : e;
                            case g.HOUR_OF_DAY:
                                return this._hour;
                            case g.CLOCK_HOUR_OF_DAY:
                                return 0 === this._hour ? 24 : this._hour;
                            case g.AMPM_OF_DAY:
                                return N.intDiv(this._hour, 12);
                        }
                        throw new o("Unsupported field: " + t);
                    }),
                    (n.hour = function () {
                        return this._hour;
                    }),
                    (n.minute = function () {
                        return this._minute;
                    }),
                    (n.second = function () {
                        return this._second;
                    }),
                    (n.nano = function () {
                        return this._nano;
                    }),
                    (n.withAdjuster = function (t) {
                        return d(t, "adjuster"), t instanceof e ? t : (_("function" == typeof t.adjustInto, "adjuster", u), t.adjustInto(this));
                    }),
                    (n.withFieldValue = function (t, n) {
                        if ((d(t, "field"), p(t, M, "field"), t instanceof g)) {
                            switch ((t.checkValidValue(n), t)) {
                                case g.NANO_OF_SECOND:
                                    return this.withNano(n);
                                case g.NANO_OF_DAY:
                                    return e.ofNanoOfDay(n);
                                case g.MICRO_OF_SECOND:
                                    return this.withNano(1e3 * n);
                                case g.MICRO_OF_DAY:
                                    return e.ofNanoOfDay(1e3 * n);
                                case g.MILLI_OF_SECOND:
                                    return this.withNano(1e6 * n);
                                case g.MILLI_OF_DAY:
                                    return e.ofNanoOfDay(1e6 * n);
                                case g.SECOND_OF_MINUTE:
                                    return this.withSecond(n);
                                case g.SECOND_OF_DAY:
                                    return this.plusSeconds(n - this.toSecondOfDay());
                                case g.MINUTE_OF_HOUR:
                                    return this.withMinute(n);
                                case g.MINUTE_OF_DAY:
                                    return this.plusMinutes(n - (60 * this._hour + this._minute));
                                case g.HOUR_OF_AMPM:
                                    return this.plusHours(n - N.intMod(this._hour, 12));
                                case g.CLOCK_HOUR_OF_AMPM:
                                    return this.plusHours((12 === n ? 0 : n) - N.intMod(this._hour, 12));
                                case g.HOUR_OF_DAY:
                                    return this.withHour(n);
                                case g.CLOCK_HOUR_OF_DAY:
                                    return this.withHour(24 === n ? 0 : n);
                                case g.AMPM_OF_DAY:
                                    return this.plusHours(12 * (n - N.intDiv(this._hour, 12)));
                            }
                            throw new o("Unsupported field: " + t);
                        }
                        return t.adjustInto(this, n);
                    }),
                    (n.withHour = function (t) {
                        return void 0 === t && (t = 0), this._hour === t ? this : new e(t, this._minute, this._second, this._nano);
                    }),
                    (n.withMinute = function (t) {
                        return void 0 === t && (t = 0), this._minute === t ? this : new e(this._hour, t, this._second, this._nano);
                    }),
                    (n.withSecond = function (t) {
                        return void 0 === t && (t = 0), this._second === t ? this : new e(this._hour, this._minute, t, this._nano);
                    }),
                    (n.withNano = function (t) {
                        return void 0 === t && (t = 0), this._nano === t ? this : new e(this._hour, this._minute, this._second, t);
                    }),
                    (n.truncatedTo = function (t) {
                        if ((d(t, "unit"), t === y.NANOS)) return this;
                        var n = t.duration();
                        if (n.seconds() > e.SECONDS_PER_DAY) throw new r("Unit is too large to be used for truncation");
                        var i = n.toNanos();
                        if (0 !== N.intMod(e.NANOS_PER_DAY, i)) throw new r("Unit must divide into a standard day without remainder");
                        var s = this.toNanoOfDay();
                        return e.ofNanoOfDay(N.intDiv(s, i) * i);
                    }),
                    (n.plusAmount = function (t) {
                        return d(t, "amount"), t.addTo(this);
                    }),
                    (n.plusAmountUnit = function (t, n) {
                        if ((d(n, "unit"), n instanceof y)) {
                            switch (n) {
                                case y.NANOS:
                                    return this.plusNanos(t);
                                case y.MICROS:
                                    return this.plusNanos(1e3 * N.intMod(t, e.MICROS_PER_DAY));
                                case y.MILLIS:
                                    return this.plusNanos(1e6 * N.intMod(t, e.MILLIS_PER_DAY));
                                case y.SECONDS:
                                    return this.plusSeconds(t);
                                case y.MINUTES:
                                    return this.plusMinutes(t);
                                case y.HOURS:
                                    return this.plusHours(t);
                                case y.HALF_DAYS:
                                    return this.plusHours(12 * N.intMod(t, 2));
                            }
                            throw new o("Unsupported unit: " + n);
                        }
                        return n.addTo(this, t);
                    }),
                    (n.plusHours = function (t) {
                        return 0 === t ? this : new e(N.intMod(N.intMod(t, e.HOURS_PER_DAY) + this._hour + e.HOURS_PER_DAY, e.HOURS_PER_DAY), this._minute, this._second, this._nano);
                    }),
                    (n.plusMinutes = function (t) {
                        if (0 === t) return this;
                        var n = this._hour * e.MINUTES_PER_HOUR + this._minute,
                            i = N.intMod(N.intMod(t, e.MINUTES_PER_DAY) + n + e.MINUTES_PER_DAY, e.MINUTES_PER_DAY);
                        return n === i ? this : new e(N.intDiv(i, e.MINUTES_PER_HOUR), N.intMod(i, e.MINUTES_PER_HOUR), this._second, this._nano);
                    }),
                    (n.plusSeconds = function (t) {
                        if (0 === t) return this;
                        var n = this._hour * e.SECONDS_PER_HOUR + this._minute * e.SECONDS_PER_MINUTE + this._second,
                            i = N.intMod(N.intMod(t, e.SECONDS_PER_DAY) + n + e.SECONDS_PER_DAY, e.SECONDS_PER_DAY);
                        return n === i ? this : new e(N.intDiv(i, e.SECONDS_PER_HOUR), N.intMod(N.intDiv(i, e.SECONDS_PER_MINUTE), e.MINUTES_PER_HOUR), N.intMod(i, e.SECONDS_PER_MINUTE), this._nano);
                    }),
                    (n.plusNanos = function (t) {
                        if (0 === t) return this;
                        var n = this.toNanoOfDay(),
                            i = N.intMod(N.intMod(t, e.NANOS_PER_DAY) + n + e.NANOS_PER_DAY, e.NANOS_PER_DAY);
                        return n === i ? this : new e(N.intDiv(i, e.NANOS_PER_HOUR), N.intMod(N.intDiv(i, e.NANOS_PER_MINUTE), e.MINUTES_PER_HOUR), N.intMod(N.intDiv(i, e.NANOS_PER_SECOND), e.SECONDS_PER_MINUTE), N.intMod(i, e.NANOS_PER_SECOND));
                    }),
                    (n.minusAmount = function (t) {
                        return d(t, "amount"), t.subtractFrom(this);
                    }),
                    (n.minusAmountUnit = function (t, e) {
                        return d(e, "unit"), this.plusAmountUnit(-1 * t, e);
                    }),
                    (n.minusHours = function (t) {
                        return this.plusHours(-1 * N.intMod(t, e.HOURS_PER_DAY));
                    }),
                    (n.minusMinutes = function (t) {
                        return this.plusMinutes(-1 * N.intMod(t, e.MINUTES_PER_DAY));
                    }),
                    (n.minusSeconds = function (t) {
                        return this.plusSeconds(-1 * N.intMod(t, e.SECONDS_PER_DAY));
                    }),
                    (n.minusNanos = function (t) {
                        return this.plusNanos(-1 * N.intMod(t, e.NANOS_PER_DAY));
                    }),
                    (n.query = function (t) {
                        return d(t, "query"), t === I.precision() ? y.NANOS : t === I.localTime() ? this : t === I.chronology() || t === I.zoneId() || t === I.zone() || t === I.offset() || t === I.localDate() ? null : t.queryFrom(this);
                    }),
                    (n.adjustInto = function (t) {
                        return t.with(e.NANO_OF_DAY, this.toNanoOfDay());
                    }),
                    (n.until = function (t, n) {
                        d(t, "endExclusive"), d(n, "unit");
                        var i = e.from(t);
                        if (n instanceof y) {
                            var r = i.toNanoOfDay() - this.toNanoOfDay();
                            switch (n) {
                                case y.NANOS:
                                    return r;
                                case y.MICROS:
                                    return N.intDiv(r, 1e3);
                                case y.MILLIS:
                                    return N.intDiv(r, 1e6);
                                case y.SECONDS:
                                    return N.intDiv(r, e.NANOS_PER_SECOND);
                                case y.MINUTES:
                                    return N.intDiv(r, e.NANOS_PER_MINUTE);
                                case y.HOURS:
                                    return N.intDiv(r, e.NANOS_PER_HOUR);
                                case y.HALF_DAYS:
                                    return N.intDiv(r, 12 * e.NANOS_PER_HOUR);
                            }
                            throw new o("Unsupported unit: " + n);
                        }
                        return n.between(this, i);
                    }),
                    (n.atDate = function (t) {
                        return fe.of(t, this);
                    }),
                    (n.toSecondOfDay = function () {
                        var t = this._hour * e.SECONDS_PER_HOUR;
                        return (t += this._minute * e.SECONDS_PER_MINUTE), (t += this._second);
                    }),
                    (n.toNanoOfDay = function () {
                        var t = this._hour * e.NANOS_PER_HOUR;
                        return (t += this._minute * e.NANOS_PER_MINUTE), (t += this._second * e.NANOS_PER_SECOND), (t += this._nano);
                    }),
                    (n.compareTo = function (t) {
                        d(t, "other"), p(t, e, "other");
                        var n = N.compareNumbers(this._hour, t._hour);
                        return 0 === n && 0 === (n = N.compareNumbers(this._minute, t._minute)) && 0 === (n = N.compareNumbers(this._second, t._second)) && (n = N.compareNumbers(this._nano, t._nano)), n;
                    }),
                    (n.isAfter = function (t) {
                        return this.compareTo(t) > 0;
                    }),
                    (n.isBefore = function (t) {
                        return this.compareTo(t) < 0;
                    }),
                    (n.equals = function (t) {
                        return this === t || (t instanceof e && this._hour === t._hour && this._minute === t._minute && this._second === t._second && this._nano === t._nano);
                    }),
                    (n.hashCode = function () {
                        var t = this.toNanoOfDay();
                        return N.hash(t);
                    }),
                    (n.toString = function () {
                        var t = "",
                            e = this._hour,
                            n = this._minute,
                            i = this._second,
                            r = this._nano;
                        return (t += e < 10 ? "0" : ""), (t += e), (t += n < 10 ? ":0" : ":"), (t += n), (i > 0 || r > 0) && ((t += i < 10 ? ":0" : ":"), (t += i), r > 0 && ((t += "."), 0 === N.intMod(r, 1e6) ? (t += ("" + (N.intDiv(r, 1e6) + 1e3)).substring(1)) : 0 === N.intMod(r, 1e3) ? (t += ("" + (N.intDiv(r, 1e3) + 1e6)).substring(1)) : (t += ("" + (r + 1e9)).substring(1)))), t;
                    }),
                    (n.toJSON = function () {
                        return this.toString();
                    }),
                    (n.format = function (t) {
                        return d(t, "formatter"), t.format(this);
                    }),
                    e
                );
            })(q);
            (ce.HOURS_PER_DAY = 24), (ce.MINUTES_PER_HOUR = 60), (ce.MINUTES_PER_DAY = ce.MINUTES_PER_HOUR * ce.HOURS_PER_DAY), (ce.SECONDS_PER_MINUTE = 60), (ce.SECONDS_PER_HOUR = ce.SECONDS_PER_MINUTE * ce.MINUTES_PER_HOUR), (ce.SECONDS_PER_DAY = ce.SECONDS_PER_HOUR * ce.HOURS_PER_DAY), (ce.MILLIS_PER_DAY = 1e3 * ce.SECONDS_PER_DAY), (ce.MICROS_PER_DAY = 1e6 * ce.SECONDS_PER_DAY), (ce.NANOS_PER_SECOND = 1e9), (ce.NANOS_PER_MINUTE = ce.NANOS_PER_SECOND * ce.SECONDS_PER_MINUTE), (ce.NANOS_PER_HOUR = ce.NANOS_PER_MINUTE * ce.MINUTES_PER_HOUR), (ce.NANOS_PER_DAY = ce.NANOS_PER_HOUR * ce.HOURS_PER_DAY);
            var le = 1e6,
                _e = (function (t) {
                    function e(n, i) {
                        var r;
                        return (r = t.call(this) || this), e._validate(n, i), (r._seconds = N.safeToInt(n)), (r._nanos = N.safeToInt(i)), r;
                    }
                    c(e, t),
                        (e.now = function (t) {
                            return void 0 === t && (t = de.systemUTC()), t.instant();
                        }),
                        (e.ofEpochSecond = function (t, n) {
                            void 0 === n && (n = 0);
                            var i = t + N.floorDiv(n, ce.NANOS_PER_SECOND),
                                r = N.floorMod(n, ce.NANOS_PER_SECOND);
                            return e._create(i, r);
                        }),
                        (e.ofEpochMilli = function (t) {
                            var n = N.floorDiv(t, 1e3),
                                i = N.floorMod(t, 1e3);
                            return e._create(n, 1e6 * i);
                        }),
                        (e.from = function (t) {
                            try {
                                var n = t.getLong(g.INSTANT_SECONDS),
                                    i = t.get(g.NANO_OF_SECOND);
                                return e.ofEpochSecond(n, i);
                            } catch (e) {
                                throw new r("Unable to obtain Instant from TemporalAccessor: " + t + ", type " + typeof t, e);
                            }
                        }),
                        (e.parse = function (t) {
                            return qt.ISO_INSTANT.parse(t, e.FROM);
                        }),
                        (e._create = function (t, n) {
                            return 0 === t && 0 === n ? e.EPOCH : new e(t, n);
                        }),
                        (e._validate = function (t, n) {
                            if (t < e.MIN_SECONDS || t > e.MAX_SECONDS) throw new r("Instant exceeds minimum or maximum instant");
                            if (n < 0 || n > ce.NANOS_PER_SECOND) throw new r("Instant exceeds minimum or maximum instant");
                        });
                    var n = e.prototype;
                    return (
                        (n.isSupported = function (t) {
                            return t instanceof g ? t === g.INSTANT_SECONDS || t === g.NANO_OF_SECOND || t === g.MICRO_OF_SECOND || t === g.MILLI_OF_SECOND : t instanceof y ? t.isTimeBased() || t === y.DAYS : null != t && t.isSupportedBy(this);
                        }),
                        (n.range = function (e) {
                            return t.prototype.range.call(this, e);
                        }),
                        (n.get = function (t) {
                            return this.getLong(t);
                        }),
                        (n.getLong = function (t) {
                            if (t instanceof g) {
                                switch (t) {
                                    case g.NANO_OF_SECOND:
                                        return this._nanos;
                                    case g.MICRO_OF_SECOND:
                                        return N.intDiv(this._nanos, 1e3);
                                    case g.MILLI_OF_SECOND:
                                        return N.intDiv(this._nanos, le);
                                    case g.INSTANT_SECONDS:
                                        return this._seconds;
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.getFrom(this);
                        }),
                        (n.epochSecond = function () {
                            return this._seconds;
                        }),
                        (n.nano = function () {
                            return this._nanos;
                        }),
                        (n.withAdjuster = function (t) {
                            return d(t, "adjuster"), t.adjustInto(this);
                        }),
                        (n.withFieldValue = function (t, n) {
                            if ((d(t, "field"), t instanceof g)) {
                                switch ((t.checkValidValue(n), t)) {
                                    case g.MILLI_OF_SECOND:
                                        var i = n * le;
                                        return i !== this._nanos ? e._create(this._seconds, i) : this;
                                    case g.MICRO_OF_SECOND:
                                        var r = 1e3 * n;
                                        return r !== this._nanos ? e._create(this._seconds, r) : this;
                                    case g.NANO_OF_SECOND:
                                        return n !== this._nanos ? e._create(this._seconds, n) : this;
                                    case g.INSTANT_SECONDS:
                                        return n !== this._seconds ? e._create(n, this._nanos) : this;
                                }
                                throw new o("Unsupported field: " + t);
                            }
                            return t.adjustInto(this, n);
                        }),
                        (n.truncatedTo = function (t) {
                            if ((d(t, "unit"), t === y.NANOS)) return this;
                            var e = t.duration();
                            if (e.seconds() > ce.SECONDS_PER_DAY) throw new r("Unit is too large to be used for truncation");
                            var n = e.toNanos();
                            if (0 !== N.intMod(ce.NANOS_PER_DAY, n)) throw new r("Unit must divide into a standard day without remainder");
                            var i = N.intMod(this._seconds, ce.SECONDS_PER_DAY) * ce.NANOS_PER_SECOND + this._nanos,
                                s = N.intDiv(i, n) * n;
                            return this.plusNanos(s - i);
                        }),
                        (n.plusAmount = function (t) {
                            return d(t, "amount"), t.addTo(this);
                        }),
                        (n.plusAmountUnit = function (t, e) {
                            if ((d(t, "amountToAdd"), d(e, "unit"), p(e, T), e instanceof y)) {
                                switch (e) {
                                    case y.NANOS:
                                        return this.plusNanos(t);
                                    case y.MICROS:
                                        return this._plus(N.intDiv(t, 1e6), 1e3 * N.intMod(t, 1e6));
                                    case y.MILLIS:
                                        return this.plusMillis(t);
                                    case y.SECONDS:
                                        return this.plusSeconds(t);
                                    case y.MINUTES:
                                        return this.plusSeconds(N.safeMultiply(t, ce.SECONDS_PER_MINUTE));
                                    case y.HOURS:
                                        return this.plusSeconds(N.safeMultiply(t, ce.SECONDS_PER_HOUR));
                                    case y.HALF_DAYS:
                                        return this.plusSeconds(N.safeMultiply(t, ce.SECONDS_PER_DAY / 2));
                                    case y.DAYS:
                                        return this.plusSeconds(N.safeMultiply(t, ce.SECONDS_PER_DAY));
                                }
                                throw new o("Unsupported unit: " + e);
                            }
                            return e.addTo(this, t);
                        }),
                        (n.plusSeconds = function (t) {
                            return this._plus(t, 0);
                        }),
                        (n.plusMillis = function (t) {
                            return this._plus(N.intDiv(t, 1e3), N.intMod(t, 1e3) * le);
                        }),
                        (n.plusNanos = function (t) {
                            return this._plus(0, t);
                        }),
                        (n._plus = function (t, n) {
                            if (0 === t && 0 === n) return this;
                            var i = this._seconds + t;
                            i += N.intDiv(n, ce.NANOS_PER_SECOND);
                            var r = this._nanos + (n % ce.NANOS_PER_SECOND);
                            return e.ofEpochSecond(i, r);
                        }),
                        (n.minusAmount = function (t) {
                            return d(t, "amount"), t.subtractFrom(this);
                        }),
                        (n.minusAmountUnit = function (t, e) {
                            return this.plusAmountUnit(-1 * t, e);
                        }),
                        (n.minusSeconds = function (t) {
                            return this.plusSeconds(-1 * t);
                        }),
                        (n.minusMillis = function (t) {
                            return this.plusMillis(-1 * t);
                        }),
                        (n.minusNanos = function (t) {
                            return this.plusNanos(-1 * t);
                        }),
                        (n.query = function (t) {
                            return d(t, "query"), t === I.precision() ? y.NANOS : t === I.localDate() || t === I.localTime() || t === I.chronology() || t === I.zoneId() || t === I.zone() || t === I.offset() ? null : t.queryFrom(this);
                        }),
                        (n.adjustInto = function (t) {
                            return d(t, "temporal"), t.with(g.INSTANT_SECONDS, this._seconds).with(g.NANO_OF_SECOND, this._nanos);
                        }),
                        (n.until = function (t, n) {
                            d(t, "endExclusive"), d(n, "unit");
                            var i = e.from(t);
                            if (n instanceof y) {
                                switch (n) {
                                    case y.NANOS:
                                        return this._nanosUntil(i);
                                    case y.MICROS:
                                        return N.intDiv(this._nanosUntil(i), 1e3);
                                    case y.MILLIS:
                                        return N.safeSubtract(i.toEpochMilli(), this.toEpochMilli());
                                    case y.SECONDS:
                                        return this._secondsUntil(i);
                                    case y.MINUTES:
                                        return N.intDiv(this._secondsUntil(i), ce.SECONDS_PER_MINUTE);
                                    case y.HOURS:
                                        return N.intDiv(this._secondsUntil(i), ce.SECONDS_PER_HOUR);
                                    case y.HALF_DAYS:
                                        return N.intDiv(this._secondsUntil(i), 12 * ce.SECONDS_PER_HOUR);
                                    case y.DAYS:
                                        return N.intDiv(this._secondsUntil(i), ce.SECONDS_PER_DAY);
                                }
                                throw new o("Unsupported unit: " + n);
                            }
                            return n.between(this, i);
                        }),
                        (n._nanosUntil = function (t) {
                            var e = N.safeSubtract(t.epochSecond(), this.epochSecond()),
                                n = N.safeMultiply(e, ce.NANOS_PER_SECOND);
                            return N.safeAdd(n, t.nano() - this.nano());
                        }),
                        (n._secondsUntil = function (t) {
                            var e = N.safeSubtract(t.epochSecond(), this.epochSecond()),
                                n = t.nano() - this.nano();
                            return e > 0 && n < 0 ? e-- : e < 0 && n > 0 && e++, e;
                        }),
                        (n.atOffset = function (t) {
                            return se.ofInstant(this, t);
                        }),
                        (n.atZone = function (t) {
                            return re.ofInstant(this, t);
                        }),
                        (n.toEpochMilli = function () {
                            return N.safeMultiply(this._seconds, 1e3) + N.intDiv(this._nanos, le);
                        }),
                        (n.compareTo = function (t) {
                            d(t, "otherInstant"), p(t, e, "otherInstant");
                            var n = N.compareNumbers(this._seconds, t._seconds);
                            return 0 !== n ? n : this._nanos - t._nanos;
                        }),
                        (n.isAfter = function (t) {
                            return this.compareTo(t) > 0;
                        }),
                        (n.isBefore = function (t) {
                            return this.compareTo(t) < 0;
                        }),
                        (n.equals = function (t) {
                            return this === t || (t instanceof e && this.epochSecond() === t.epochSecond() && this.nano() === t.nano());
                        }),
                        (n.hashCode = function () {
                            return N.hashCode(this._seconds, this._nanos);
                        }),
                        (n.toString = function () {
                            return qt.ISO_INSTANT.format(this);
                        }),
                        (n.toJSON = function () {
                            return this.toString();
                        }),
                        e
                    );
                })(q);
            var de = (function () {
                    function t() {}
                    (t.systemUTC = function () {
                        return new pe($.UTC);
                    }),
                        (t.systemDefaultZone = function () {
                            return new pe(j.systemDefault());
                        }),
                        (t.system = function (t) {
                            return new pe(t);
                        }),
                        (t.fixed = function (t, e) {
                            return new me(t, e);
                        }),
                        (t.offset = function (t, e) {
                            return new Oe(t, e);
                        });
                    var e = t.prototype;
                    return (
                        (e.millis = function () {
                            m("Clock.millis");
                        }),
                        (e.instant = function () {
                            m("Clock.instant");
                        }),
                        (e.zone = function () {
                            m("Clock.zone");
                        }),
                        (e.withZone = function () {
                            m("Clock.withZone");
                        }),
                        t
                    );
                })(),
                pe = (function (t) {
                    function e(e) {
                        var n;
                        return d(e, "zone"), ((n = t.call(this) || this)._zone = e), n;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.zone = function () {
                            return this._zone;
                        }),
                        (n.millis = function () {
                            return new Date().getTime();
                        }),
                        (n.instant = function () {
                            return _e.ofEpochMilli(this.millis());
                        }),
                        (n.equals = function (t) {
                            return t instanceof e && this._zone.equals(t._zone);
                        }),
                        (n.withZone = function (t) {
                            return t.equals(this._zone) ? this : new e(t);
                        }),
                        (n.toString = function () {
                            return "SystemClock[" + this._zone.toString() + "]";
                        }),
                        e
                    );
                })(de),
                me = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._instant = e), (i._zoneId = n), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.instant = function () {
                            return this._instant;
                        }),
                        (n.millis = function () {
                            return this._instant.toEpochMilli();
                        }),
                        (n.zone = function () {
                            return this._zoneId;
                        }),
                        (n.toString = function () {
                            return "FixedClock[]";
                        }),
                        (n.equals = function (t) {
                            return t instanceof e && this._instant.equals(t._instant) && this._zoneId.equals(t._zoneId);
                        }),
                        (n.withZone = function (t) {
                            return t.equals(this._zoneId) ? this : new e(this._instant, t);
                        }),
                        e
                    );
                })(de),
                Oe = (function (t) {
                    function e(e, n) {
                        var i;
                        return ((i = t.call(this) || this)._baseClock = e), (i._offset = n), i;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.zone = function () {
                            return this._baseClock.zone();
                        }),
                        (n.withZone = function (t) {
                            return t.equals(this._baseClock.zone()) ? this : new e(this._baseClock.withZone(t), this._offset);
                        }),
                        (n.millis = function () {
                            return this._baseClock.millis() + this._offset.toMillis();
                        }),
                        (n.instant = function () {
                            return this._baseClock.instant().plus(this._offset);
                        }),
                        (n.equals = function (t) {
                            return t instanceof e && this._baseClock.equals(t._baseClock) && this._offset.equals(t._offset);
                        }),
                        (n.toString = function () {
                            return "OffsetClock[" + this._baseClock + "," + this._offset + "]";
                        }),
                        e
                    );
                })(de),
                Ee = (function () {
                    function t(t, e, n) {
                        if ((d(t, "transition"), d(e, "offsetBefore"), d(n, "offsetAfter"), e.equals(n))) throw new u("Offsets must not be equal");
                        if (0 !== t.nano()) throw new u("Nano-of-second must be zero");
                        (this._transition = t instanceof fe ? t : fe.ofEpochSecond(t, 0, e)), (this._offsetBefore = e), (this._offsetAfter = n);
                    }
                    t.of = function (e, n, i) {
                        return new t(e, n, i);
                    };
                    var e = t.prototype;
                    return (
                        (e.instant = function () {
                            return this._transition.toInstant(this._offsetBefore);
                        }),
                        (e.toEpochSecond = function () {
                            return this._transition.toEpochSecond(this._offsetBefore);
                        }),
                        (e.dateTimeBefore = function () {
                            return this._transition;
                        }),
                        (e.dateTimeAfter = function () {
                            return this._transition.plusSeconds(this.durationSeconds());
                        }),
                        (e.offsetBefore = function () {
                            return this._offsetBefore;
                        }),
                        (e.offsetAfter = function () {
                            return this._offsetAfter;
                        }),
                        (e.duration = function () {
                            return v.ofSeconds(this.durationSeconds());
                        }),
                        (e.durationSeconds = function () {
                            return this._offsetAfter.totalSeconds() - this._offsetBefore.totalSeconds();
                        }),
                        (e.isGap = function () {
                            return this._offsetAfter.totalSeconds() > this._offsetBefore.totalSeconds();
                        }),
                        (e.isOverlap = function () {
                            return this._offsetAfter.totalSeconds() < this._offsetBefore.totalSeconds();
                        }),
                        (e.isValidOffset = function (t) {
                            return !this.isGap() && (this._offsetBefore.equals(t) || this._offsetAfter.equals(t));
                        }),
                        (e.validOffsets = function () {
                            return this.isGap() ? [] : [this._offsetBefore, this._offsetAfter];
                        }),
                        (e.compareTo = function (t) {
                            return this.instant().compareTo(t.instant());
                        }),
                        (e.equals = function (e) {
                            if (e === this) return !0;
                            if (e instanceof t) {
                                var n = e;
                                return this._transition.equals(n._transition) && this._offsetBefore.equals(n.offsetBefore()) && this._offsetAfter.equals(n.offsetAfter());
                            }
                            return !1;
                        }),
                        (e.hashCode = function () {
                            return this._transition.hashCode() ^ this._offsetBefore.hashCode() ^ (this._offsetAfter.hashCode() >>> 16);
                        }),
                        (e.toString = function () {
                            return "Transition[" + (this.isGap() ? "Gap" : "Overlap") + " at " + this._transition.toString() + this._offsetBefore.toString() + " to " + this._offsetAfter + "]";
                        }),
                        t
                    );
                })();
            var Se = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.isFixedOffset = function () {
                            return !1;
                        }),
                        (n.offsetOfInstant = function (t) {
                            var e = new Date(t.toEpochMilli()).getTimezoneOffset();
                            return $.ofTotalMinutes(-1 * e);
                        }),
                        (n.offsetOfEpochMilli = function (t) {
                            var e = new Date(t).getTimezoneOffset();
                            return $.ofTotalMinutes(-1 * e);
                        }),
                        (n.offsetOfLocalDateTime = function (t) {
                            var e = 1e3 * t.toEpochSecond($.UTC),
                                n = new Date(e).getTimezoneOffset(),
                                i = new Date(e + 6e4 * n).getTimezoneOffset();
                            return $.ofTotalMinutes(-1 * i);
                        }),
                        (n.validOffsets = function (t) {
                            return [this.offsetOfLocalDateTime(t)];
                        }),
                        (n.transition = function () {
                            return null;
                        }),
                        (n.standardOffset = function (t) {
                            return this.offsetOfInstant(t);
                        }),
                        (n.daylightSavings = function () {
                            this._throwNotSupported();
                        }),
                        (n.isDaylightSavings = function () {
                            this._throwNotSupported();
                        }),
                        (n.isValidOffset = function (t, e) {
                            return this.offsetOfLocalDateTime(t).equals(e);
                        }),
                        (n.nextTransition = function () {
                            this._throwNotSupported();
                        }),
                        (n.previousTransition = function () {
                            this._throwNotSupported();
                        }),
                        (n.transitions = function () {
                            this._throwNotSupported();
                        }),
                        (n.transitionRules = function () {
                            this._throwNotSupported();
                        }),
                        (n._throwNotSupported = function () {
                            throw new r("not supported operation");
                        }),
                        (n.equals = function (t) {
                            return this === t || t instanceof e;
                        }),
                        (n.toString = function () {
                            return "SYSTEM";
                        }),
                        e
                    );
                })(G),
                Ne = (function (t) {
                    function e() {
                        var e;
                        return ((e = t.call(this) || this)._rules = new Se()), e;
                    }
                    c(e, t);
                    var n = e.prototype;
                    return (
                        (n.rules = function () {
                            return this._rules;
                        }),
                        (n.equals = function (t) {
                            return this === t;
                        }),
                        (n.id = function () {
                            return "SYSTEM";
                        }),
                        e
                    );
                })(j),
                De = (function () {
                    function t() {}
                    return (
                        (t.systemDefault = function () {
                            return Ae;
                        }),
                        (t.getAvailableZoneIds = function () {
                            return Yt.getAvailableZoneIds();
                        }),
                        (t.of = function (t) {
                            if ((d(t, "zoneId"), "Z" === t)) return $.UTC;
                            if (1 === t.length) throw new r("Invalid zone: " + t);
                            if (K.startsWith(t, "+") || K.startsWith(t, "-")) return $.of(t);
                            if ("UTC" === t || "GMT" === t || "GMT0" === t || "UT" === t) return new Ct(t, $.UTC.rules());
                            if (K.startsWith(t, "UTC+") || K.startsWith(t, "GMT+") || K.startsWith(t, "UTC-") || K.startsWith(t, "GMT-")) {
                                var e = $.of(t.substring(3));
                                return 0 === e.totalSeconds() ? new Ct(t.substring(0, 3), e.rules()) : new Ct(t.substring(0, 3) + e.id(), e.rules());
                            }
                            if (K.startsWith(t, "UT+") || K.startsWith(t, "UT-")) {
                                var n = $.of(t.substring(2));
                                return 0 === n.totalSeconds() ? new Ct("UT", n.rules()) : new Ct("UT" + n.id(), n.rules());
                            }
                            return "SYSTEM" === t ? j.systemDefault() : Ct.ofId(t);
                        }),
                        (t.ofOffset = function (t, e) {
                            if ((d(t, "prefix"), d(e, "offset"), 0 === t.length)) return e;
                            if ("GMT" === t || "UTC" === t || "UT" === t) return 0 === e.totalSeconds() ? new Ct(t, e.rules()) : new Ct(t + e.id(), e.rules());
                            throw new u("Invalid prefix, must be GMT, UTC or UT: " + t);
                        }),
                        (t.from = function (t) {
                            d(t, "temporal");
                            var e = t.query(I.zone());
                            if (null == e) throw new r("Unable to obtain ZoneId from TemporalAccessor: " + t + ", type " + (null != t.constructor ? t.constructor.name : ""));
                            return e;
                        }),
                        t
                    );
                })(),
                Ae = null;
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Te = !1;
            Te ||
                ((Te = !0),
                (w.MIN_VALUE = -999999),
                (w.MAX_VALUE = 999999),
                (v.ZERO = new v(0, 0)),
                (y.NANOS = new y("Nanos", v.ofNanos(1))),
                (y.MICROS = new y("Micros", v.ofNanos(1e3))),
                (y.MILLIS = new y("Millis", v.ofNanos(1e6))),
                (y.SECONDS = new y("Seconds", v.ofSeconds(1))),
                (y.MINUTES = new y("Minutes", v.ofSeconds(60))),
                (y.HOURS = new y("Hours", v.ofSeconds(3600))),
                (y.HALF_DAYS = new y("HalfDays", v.ofSeconds(43200))),
                (y.DAYS = new y("Days", v.ofSeconds(86400))),
                (y.WEEKS = new y("Weeks", v.ofSeconds(604800))),
                (y.MONTHS = new y("Months", v.ofSeconds(2629746))),
                (y.YEARS = new y("Years", v.ofSeconds(31556952))),
                (y.DECADES = new y("Decades", v.ofSeconds(315569520))),
                (y.CENTURIES = new y("Centuries", v.ofSeconds(3155695200))),
                (y.MILLENNIA = new y("Millennia", v.ofSeconds(31556952e3))),
                (y.ERAS = new y("Eras", v.ofSeconds(31556952 * (w.MAX_VALUE + 1)))),
                (y.FOREVER = new y("Forever", v.ofSeconds(N.MAX_SAFE_INTEGER, 999999999))),
                (g.NANO_OF_SECOND = new g("NanoOfSecond", y.NANOS, y.SECONDS, R.of(0, 999999999))),
                (g.NANO_OF_DAY = new g("NanoOfDay", y.NANOS, y.DAYS, R.of(0, 86399999999999))),
                (g.MICRO_OF_SECOND = new g("MicroOfSecond", y.MICROS, y.SECONDS, R.of(0, 999999))),
                (g.MICRO_OF_DAY = new g("MicroOfDay", y.MICROS, y.DAYS, R.of(0, 86399999999))),
                (g.MILLI_OF_SECOND = new g("MilliOfSecond", y.MILLIS, y.SECONDS, R.of(0, 999))),
                (g.MILLI_OF_DAY = new g("MilliOfDay", y.MILLIS, y.DAYS, R.of(0, 86399999))),
                (g.SECOND_OF_MINUTE = new g("SecondOfMinute", y.SECONDS, y.MINUTES, R.of(0, 59))),
                (g.SECOND_OF_DAY = new g("SecondOfDay", y.SECONDS, y.DAYS, R.of(0, 86399))),
                (g.MINUTE_OF_HOUR = new g("MinuteOfHour", y.MINUTES, y.HOURS, R.of(0, 59))),
                (g.MINUTE_OF_DAY = new g("MinuteOfDay", y.MINUTES, y.DAYS, R.of(0, 1439))),
                (g.HOUR_OF_AMPM = new g("HourOfAmPm", y.HOURS, y.HALF_DAYS, R.of(0, 11))),
                (g.CLOCK_HOUR_OF_AMPM = new g("ClockHourOfAmPm", y.HOURS, y.HALF_DAYS, R.of(1, 12))),
                (g.HOUR_OF_DAY = new g("HourOfDay", y.HOURS, y.DAYS, R.of(0, 23))),
                (g.CLOCK_HOUR_OF_DAY = new g("ClockHourOfDay", y.HOURS, y.DAYS, R.of(1, 24))),
                (g.AMPM_OF_DAY = new g("AmPmOfDay", y.HALF_DAYS, y.DAYS, R.of(0, 1))),
                (g.DAY_OF_WEEK = new g("DayOfWeek", y.DAYS, y.WEEKS, R.of(1, 7))),
                (g.ALIGNED_DAY_OF_WEEK_IN_MONTH = new g("AlignedDayOfWeekInMonth", y.DAYS, y.WEEKS, R.of(1, 7))),
                (g.ALIGNED_DAY_OF_WEEK_IN_YEAR = new g("AlignedDayOfWeekInYear", y.DAYS, y.WEEKS, R.of(1, 7))),
                (g.DAY_OF_MONTH = new g("DayOfMonth", y.DAYS, y.MONTHS, R.of(1, 28, 31), "day")),
                (g.DAY_OF_YEAR = new g("DayOfYear", y.DAYS, y.YEARS, R.of(1, 365, 366))),
                (g.EPOCH_DAY = new g("EpochDay", y.DAYS, y.FOREVER, R.of(Math.floor(365.25 * w.MIN_VALUE), Math.floor(365.25 * w.MAX_VALUE)))),
                (g.ALIGNED_WEEK_OF_MONTH = new g("AlignedWeekOfMonth", y.WEEKS, y.MONTHS, R.of(1, 4, 5))),
                (g.ALIGNED_WEEK_OF_YEAR = new g("AlignedWeekOfYear", y.WEEKS, y.YEARS, R.of(1, 53))),
                (g.MONTH_OF_YEAR = new g("MonthOfYear", y.MONTHS, y.YEARS, R.of(1, 12), "month")),
                (g.PROLEPTIC_MONTH = new g("ProlepticMonth", y.MONTHS, y.FOREVER, R.of(12 * w.MIN_VALUE, 12 * w.MAX_VALUE + 11))),
                (g.YEAR_OF_ERA = new g("YearOfEra", y.YEARS, y.FOREVER, R.of(1, w.MAX_VALUE, w.MAX_VALUE + 1))),
                (g.YEAR = new g("Year", y.YEARS, y.FOREVER, R.of(w.MIN_VALUE, w.MAX_VALUE), "year")),
                (g.ERA = new g("Era", y.ERAS, y.FOREVER, R.of(0, 1))),
                (g.INSTANT_SECONDS = new g("InstantSeconds", y.SECONDS, y.FOREVER, R.of(S, E))),
                (g.OFFSET_SECONDS = new g("OffsetSeconds", y.SECONDS, y.FOREVER, R.of(-64800, 64800))),
                (function () {
                    ce.HOURS = [];
                    for (var t = 0; t < 24; t++) ce.of(t, 0, 0, 0);
                    (ce.MIN = ce.HOURS[0]),
                        (ce.MAX = new ce(23, 59, 59, 999999999)),
                        (ce.MIDNIGHT = ce.HOURS[0]),
                        (ce.NOON = ce.HOURS[12]),
                        (ce.FROM = C("LocalTime.FROM", function (t) {
                            return ce.from(t);
                        }));
                })(),
                (lt = new at()),
                (_t = new ut()),
                (dt = new ht()),
                (pt = new ft()),
                (mt = new ct("WeekBasedYears", v.ofSeconds(31556952))),
                (Ot = new ct("QuarterYears", v.ofSeconds(7889238))),
                (rt.DAY_OF_QUARTER = lt),
                (rt.QUARTER_OF_YEAR = _t),
                (rt.WEEK_OF_WEEK_BASED_YEAR = dt),
                (rt.WEEK_BASED_YEAR = pt),
                (rt.WEEK_BASED_YEARS = mt),
                (rt.QUARTER_YEARS = Ot),
                (ue.prototype.isoWeekOfWeekyear = function () {
                    return this.get(rt.WEEK_OF_WEEK_BASED_YEAR);
                }),
                (ue.prototype.isoWeekyear = function () {
                    return this.get(rt.WEEK_BASED_YEAR);
                }),
                (I.ZONE_ID = C("ZONE_ID", function (t) {
                    return t.query(I.ZONE_ID);
                })),
                (I.CHRONO = C("CHRONO", function (t) {
                    return t.query(I.CHRONO);
                })),
                (I.PRECISION = C("PRECISION", function (t) {
                    return t.query(I.PRECISION);
                })),
                (I.OFFSET = C("OFFSET", function (t) {
                    return t.isSupported(g.OFFSET_SECONDS) ? $.ofTotalSeconds(t.get(g.OFFSET_SECONDS)) : null;
                })),
                (I.ZONE = C("ZONE", function (t) {
                    var e = t.query(I.ZONE_ID);
                    return null != e ? e : t.query(I.OFFSET);
                })),
                (I.LOCAL_DATE = C("LOCAL_DATE", function (t) {
                    return t.isSupported(g.EPOCH_DAY) ? ue.ofEpochDay(t.getLong(g.EPOCH_DAY)) : null;
                })),
                (I.LOCAL_TIME = C("LOCAL_TIME", function (t) {
                    return t.isSupported(g.NANO_OF_DAY) ? ce.ofNanoOfDay(t.getLong(g.NANO_OF_DAY)) : null;
                })),
                (U.MONDAY = new U(0, "MONDAY")),
                (U.TUESDAY = new U(1, "TUESDAY")),
                (U.WEDNESDAY = new U(2, "WEDNESDAY")),
                (U.THURSDAY = new U(3, "THURSDAY")),
                (U.FRIDAY = new U(4, "FRIDAY")),
                (U.SATURDAY = new U(5, "SATURDAY")),
                (U.SUNDAY = new U(6, "SUNDAY")),
                (U.FROM = C("DayOfWeek.FROM", function (t) {
                    return U.from(t);
                })),
                (L = [U.MONDAY, U.TUESDAY, U.WEDNESDAY, U.THURSDAY, U.FRIDAY, U.SATURDAY, U.SUNDAY]),
                (_e.MIN_SECONDS = -31619119219200),
                (_e.MAX_SECONDS = 31494816403199),
                (_e.EPOCH = new _e(0, 0)),
                (_e.MIN = _e.ofEpochSecond(_e.MIN_SECONDS, 0)),
                (_e.MAX = _e.ofEpochSecond(_e.MAX_SECONDS, 999999999)),
                (_e.FROM = C("Instant.FROM", function (t) {
                    return _e.from(t);
                })),
                (ue.MIN = ue.of(w.MIN_VALUE, 1, 1)),
                (ue.MAX = ue.of(w.MAX_VALUE, 12, 31)),
                (ue.EPOCH_0 = ue.ofEpochDay(0)),
                (ue.FROM = C("LocalDate.FROM", function (t) {
                    return ue.from(t);
                })),
                (fe.MIN = fe.of(ue.MIN, ce.MIN)),
                (fe.MAX = fe.of(ue.MAX, ce.MAX)),
                (fe.FROM = C("LocalDateTime.FROM", function (t) {
                    return fe.from(t);
                })),
                (Xt.MIN_VALUE = w.MIN_VALUE),
                (Xt.MAX_VALUE = w.MAX_VALUE),
                (Gt = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).toFormatter()),
                (Xt.FROM = C("Year.FROM", function (t) {
                    return Xt.from(t);
                })),
                (V.JANUARY = new V(1, "JANUARY")),
                (V.FEBRUARY = new V(2, "FEBRUARY")),
                (V.MARCH = new V(3, "MARCH")),
                (V.APRIL = new V(4, "APRIL")),
                (V.MAY = new V(5, "MAY")),
                (V.JUNE = new V(6, "JUNE")),
                (V.JULY = new V(7, "JULY")),
                (V.AUGUST = new V(8, "AUGUST")),
                (V.SEPTEMBER = new V(9, "SEPTEMBER")),
                (V.OCTOBER = new V(10, "OCTOBER")),
                (V.NOVEMBER = new V(11, "NOVEMBER")),
                (V.DECEMBER = new V(12, "DECEMBER")),
                (P = [V.JANUARY, V.FEBRUARY, V.MARCH, V.APRIL, V.MAY, V.JUNE, V.JULY, V.AUGUST, V.SEPTEMBER, V.OCTOBER, V.NOVEMBER, V.DECEMBER]),
                (Kt = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).appendLiteral("-").appendValue(g.MONTH_OF_YEAR, 2).toFormatter()),
                (jt.FROM = C("YearMonth.FROM", function (t) {
                    return jt.from(t);
                })),
                (Zt = new Ht().appendLiteral("--").appendValue(g.MONTH_OF_YEAR, 2).appendLiteral("-").appendValue(g.DAY_OF_MONTH, 2).toFormatter()),
                (zt.FROM = C("MonthDay.FROM", function (t) {
                    return zt.from(t);
                })),
                H.ofDays(0),
                ($.MAX_SECONDS = 18 * ce.SECONDS_PER_HOUR),
                ($.UTC = $.ofTotalSeconds(0)),
                ($.MIN = $.ofTotalSeconds(-$.MAX_SECONDS)),
                ($.MAX = $.ofTotalSeconds($.MAX_SECONDS)),
                (re.FROM = C("ZonedDateTime.FROM", function (t) {
                    return re.from(t);
                })),
                (Ae = new Ne()),
                (j.systemDefault = De.systemDefault),
                (j.getAvailableZoneIds = De.getAvailableZoneIds),
                (j.of = De.of),
                (j.ofOffset = De.ofOffset),
                (j.from = De.from),
                ($.from = De.from),
                (j.SYSTEM = Ae),
                (j.UTC = $.ofTotalSeconds(0)),
                (ee.INSTANCE = new ee("IsoChronology")),
                (qt.ISO_LOCAL_DATE = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).appendLiteral("-").appendValue(g.MONTH_OF_YEAR, 2).appendLiteral("-").appendValue(g.DAY_OF_MONTH, 2).toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_LOCAL_TIME = new Ht().appendValue(g.HOUR_OF_DAY, 2).appendLiteral(":").appendValue(g.MINUTE_OF_HOUR, 2).optionalStart().appendLiteral(":").appendValue(g.SECOND_OF_MINUTE, 2).optionalStart().appendFraction(g.NANO_OF_SECOND, 0, 9, !0).toFormatter(k.STRICT)),
                (qt.ISO_LOCAL_DATE_TIME = new Ht().parseCaseInsensitive().append(qt.ISO_LOCAL_DATE).appendLiteral("T").append(qt.ISO_LOCAL_TIME).toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_INSTANT = new Ht().parseCaseInsensitive().appendInstant().toFormatter(k.STRICT)),
                (qt.ISO_OFFSET_DATE_TIME = new Ht().parseCaseInsensitive().append(qt.ISO_LOCAL_DATE_TIME).appendOffsetId().toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_ZONED_DATE_TIME = new Ht().append(qt.ISO_OFFSET_DATE_TIME).optionalStart().appendLiteral("[").parseCaseSensitive().appendZoneId().appendLiteral("]").toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.BASIC_ISO_DATE = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).appendValue(g.MONTH_OF_YEAR, 2).appendValue(g.DAY_OF_MONTH, 2).toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_OFFSET_DATE = new Ht().parseCaseInsensitive().append(qt.ISO_LOCAL_DATE).appendOffsetId().toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_OFFSET_TIME = new Ht().parseCaseInsensitive().append(qt.ISO_LOCAL_TIME).appendOffsetId().toFormatter(k.STRICT).withChronology(ee.INSTANCE)),
                (qt.ISO_ORDINAL_DATE = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).appendLiteral("-").appendValue(g.DAY_OF_YEAR).toFormatter(k.STRICT)),
                (qt.ISO_WEEK_DATE = new Ht().appendValue(g.YEAR, 4, 10, St.EXCEEDS_PAD).appendLiteral("-W").appendValue(g.ALIGNED_WEEK_OF_YEAR).appendLiteral("-").appendValue(g.DAY_OF_WEEK).toFormatter(k.STRICT)),
                (qt.PARSED_EXCESS_DAYS = C("PARSED_EXCESS_DAYS", function (t) {
                    return t instanceof tt ? t.excessDays : H.ZERO;
                })),
                (qt.PARSED_LEAP_SECOND = C("PARSED_LEAP_SECOND", function (t) {
                    return t instanceof tt && t.leapSecond;
                })),
                (yt.BASE_DATE = ue.of(2e3, 1, 1)),
                (Ht.CompositePrinterParser = At),
                (Ht.PadPrinterParserDecorator = gt),
                (Ht.SettingsParser = It),
                (Ht.CharLiteralPrinterParser = Ft),
                (Ht.StringLiteralPrinterParser = Ft),
                (Ht.CharLiteralPrinterParser = Dt),
                (Ht.NumberPrinterParser = wt),
                (Ht.ReducedPrinterParser = yt),
                (Ht.FractionPrinterParser = Tt),
                (Ht.OffsetIdPrinterParser = Rt),
                (Ht.ZoneIdPrinterParser = Lt),
                (se.MIN = fe.MIN.atOffset($.MAX)),
                (se.MAX = fe.MAX.atOffset($.MIN)),
                (se.FROM = C("OffsetDateTime.FROM", function (t) {
                    return se.from(t);
                })),
                (ne.MIN = ne.ofNumbers(0, 0, 0, 0, $.MAX)),
                (ne.MAX = ne.ofNumbers(23, 59, 59, 999999999, $.MIN)),
                (ne.FROM = C("OffsetTime.FROM", function (t) {
                    return ne.from(t);
                })));
            /*
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var ve = (function () {
                function t(t, e) {
                    var n;
                    if (t instanceof ue) (e = null == e ? j.systemDefault() : e), (n = t.atStartOfDay(e));
                    else if (t instanceof fe) (e = null == e ? j.systemDefault() : e), (n = t.atZone(e));
                    else {
                        if (!(t instanceof re)) throw new u("unsupported instance for convert operation:" + t);
                        n = null == e ? t : t.withZoneSameInstant(e);
                    }
                    this.instant = n.toInstant();
                }
                var e = t.prototype;
                return (
                    (e.toDate = function () {
                        return new Date(this.instant.toEpochMilli());
                    }),
                    (e.toEpochMilli = function () {
                        return this.instant.toEpochMilli();
                    }),
                    t
                );
            })();
            function we(t, e) {
                return new ve(t, e);
            }
            var ye = (function (t) {
                function e(e, n) {
                    var i;
                    return void 0 === n && (n = j.systemDefault()), ((i = t.call(this) || this)._zone = n), e instanceof Date ? ((i._epochMilli = e.getTime()), l(i)) : "function" == typeof e.toDate && e.toDate() instanceof Date ? ((i._epochMilli = e.toDate().getTime()), l(i)) : (_(!1, "date must be either a javascript date or a moment"), i);
                }
                c(e, t);
                var n = e.prototype;
                return (
                    (n.query = function (e) {
                        return d(e, "query"), e === I.localDate() ? ue.ofInstant(_e.ofEpochMilli(this._epochMilli), this._zone) : e === I.localTime() ? ce.ofInstant(_e.ofEpochMilli(this._epochMilli), this._zone) : e === I.zone() ? this._zone : t.prototype.query.call(this, e);
                    }),
                    (n.get = function (t) {
                        return this.getLong(t);
                    }),
                    (n.getLong = function (t) {
                        if ((d(t, "field"), t instanceof g)) {
                            switch (t) {
                                case g.NANO_OF_SECOND:
                                    return 1e6 * N.floorMod(this._epochMilli, 1e3);
                                case g.INSTANT_SECONDS:
                                    return N.floorDiv(this._epochMilli, 1e3);
                            }
                            throw new o("Unsupported field: " + t);
                        }
                        return t.getFrom(this);
                    }),
                    (n.isSupported = function (t) {
                        return t === g.INSTANT_SECONDS || t === g.NANO_OF_SECOND;
                    }),
                    e
                );
            })(F);
            function Me(t, e) {
                return new ye(t, e);
            }
            /**
             * @copyright (c) 2016, Philipp Thürwächter & Pattrick Hüper
             * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
             */
            var Re,
                ge,
                Ie = { assert: O, DateTimeBuilder: tt, DateTimeParseContext: et, DateTimePrintContext: it, MathUtil: N, StringUtil: K, StringBuilder: Bt },
                Fe = { _: Ie, convert: we, nativeJs: Me, ArithmeticException: a, DateTimeException: r, DateTimeParseException: s, IllegalArgumentException: u, IllegalStateException: h, UnsupportedTemporalTypeException: o, NullPointerException: f, Clock: de, DayOfWeek: U, Duration: v, Instant: _e, LocalDate: ue, LocalTime: ce, LocalDateTime: fe, OffsetTime: ne, OffsetDateTime: se, Month: V, MonthDay: zt, Period: H, Year: Xt, YearConstants: w, YearMonth: jt, ZonedDateTime: re, ZoneOffset: $, ZoneId: j, ZoneRegion: Ct, ZoneOffsetTransition: Ee, ZoneRules: G, ZoneRulesProvider: Yt, ChronoLocalDate: z, ChronoLocalDateTime: he, ChronoZonedDateTime: ie, IsoChronology: ee, ChronoField: g, ChronoUnit: y, IsoFields: rt, Temporal: q, TemporalAccessor: F, TemporalAdjuster: B, TemporalAdjusters: Jt, TemporalAmount: A, TemporalField: M, TemporalQueries: I, TemporalQuery: Y, TemporalUnit: T, ValueRange: R, DateTimeFormatter: qt, DateTimeFormatterBuilder: Ht, DecimalStyle: Et, ResolverStyle: k, SignStyle: St, TextStyle: Nt },
                Ye =
                    ((Re = Fe),
                    (ge = []),
                    function (t) {
                        return ~ge.indexOf(t) || (t(Re), ge.push(t)), Re;
                    });
            Fe.use = Ye;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-9c6da171.3d92a7fa.js.map
