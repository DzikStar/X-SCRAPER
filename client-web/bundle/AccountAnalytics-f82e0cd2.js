"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-f82e0cd2"],
    {
        489968: (t, e, i) => {
            i.d(e, { e: () => o });
            let s = new Map(),
                n = !1;
            try {
                n = "exceptZero" === new Intl.NumberFormat("de-DE", { signDisplay: "exceptZero" }).resolvedOptions().signDisplay;
            } catch (t) {}
            let a = !1;
            try {
                a = "unit" === new Intl.NumberFormat("de-DE", { style: "unit", unit: "degree" }).resolvedOptions().style;
            } catch (t) {}
            const r = { degree: { narrow: { default: "°", "ja-JP": " 度", "zh-TW": "度", "sl-SI": " °" } } };
            class o {
                format(t) {
                    let e = "";
                    if (
                        ((e =
                            n || null == this.options.signDisplay
                                ? this.numberFormatter.format(t)
                                : (function (t, e, i) {
                                      if ("auto" === e) return t.format(i);
                                      if ("never" === e) return t.format(Math.abs(i));
                                      {
                                          let s = !1;
                                          if (("always" === e ? (s = i > 0 || Object.is(i, 0)) : "exceptZero" === e && (Object.is(i, -0) || Object.is(i, 0) ? (i = Math.abs(i)) : (s = i > 0)), s)) {
                                              let e = t.format(-i),
                                                  s = t.format(i),
                                                  n = e.replace(s, "").replace(/\u200e|\u061C/, "");
                                              return e.replace(s, "!!!").replace(n, "+").replace("!!!", s);
                                          }
                                          return t.format(i);
                                      }
                                  })(this.numberFormatter, this.options.signDisplay, t)),
                        "unit" === this.options.style && !a)
                    ) {
                        var i;
                        let { unit: t, unitDisplay: s = "short", locale: n } = this.resolvedOptions();
                        if (!t) return e;
                        let a = null === (i = r[t]) || void 0 === i ? void 0 : i[s];
                        e += a[n] || a.default;
                    }
                    return e;
                }
                formatToParts(t) {
                    return this.numberFormatter.formatToParts(t);
                }
                formatRange(t, e) {
                    if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(t, e);
                    if (e < t) throw new RangeError("End date must be >= start date");
                    return `${this.format(t)} – ${this.format(e)}`;
                }
                formatRangeToParts(t, e) {
                    if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(t, e);
                    if (e < t) throw new RangeError("End date must be >= start date");
                    let i = this.numberFormatter.formatToParts(t),
                        s = this.numberFormatter.formatToParts(e);
                    return [...i.map((t) => ({ ...t, source: "startRange" })), { type: "literal", value: " – ", source: "shared" }, ...s.map((t) => ({ ...t, source: "endRange" }))];
                }
                resolvedOptions() {
                    let t = this.numberFormatter.resolvedOptions();
                    return n || null == this.options.signDisplay || (t = { ...t, signDisplay: this.options.signDisplay }), a || "unit" !== this.options.style || (t = { ...t, style: "unit", unit: this.options.unit, unitDisplay: this.options.unitDisplay }), t;
                }
                constructor(t, e = {}) {
                    (this.numberFormatter = (function (t, e = {}) {
                        let { numberingSystem: i } = e;
                        i && t.includes("-nu-") && (t.includes("-u-") || (t += "-u-"), (t += `-nu-${i}`));
                        if ("unit" === e.style && !a) {
                            var n;
                            let { unit: t, unitDisplay: i = "short" } = e;
                            if (!t) throw new Error('unit option must be provided with style: "unit"');
                            if (!(null === (n = r[t]) || void 0 === n ? void 0 : n[i])) throw new Error(`Unsupported unit ${t} with unitDisplay = ${i}`);
                            e = { ...e, style: "decimal" };
                        }
                        let o =
                            t +
                            (e
                                ? Object.entries(e)
                                      .sort((t, e) => (t[0] < e[0] ? -1 : 1))
                                      .join()
                                : "");
                        if (s.has(o)) return s.get(o);
                        let l = new Intl.NumberFormat(t, e);
                        return s.set(o, l), l;
                    })(t, e)),
                        (this.options = e);
                }
            }
        },
        901893: (t, e, i) => {
            i.d(e, { ZP: () => $t });
            var s = i(202784);
            function n(t, e, i, s) {
                if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof e ? t !== e || !s : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? s : "a" === i ? s.call(t) : s ? s.value : e.get(t);
            }
            function a(t, e, i, s, n) {
                if ("m" === s) throw new TypeError("Private method is not writable");
                if ("a" === s && !n) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === s ? n.call(t, i) : n ? (n.value = i) : e.set(t, i), i;
            }
            const r = typeof window < "u",
                o = (t, e, i) => {
                    const s = document.createElement(t),
                        [n, a] = Array.isArray(e) ? [void 0, e] : [e, i];
                    return n && Object.assign(s, n), null == a || a.forEach((t) => s.appendChild(t)), s;
                };
            const l = String.raw,
                h = r && typeof CSS < "u" && CSS.supports && CSS.supports("animation-timing-function", "linear(1,2)"),
                c = r && typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"),
                p = r && matchMedia ? matchMedia("(prefers-reduced-motion: reduce)") : null,
                d = "--_number-flow-d-opacity",
                f = "--_number-flow-d-width",
                u = "--_number-flow-dx",
                m = "--_number-flow-d",
                g = (() => {
                    try {
                        return CSS.registerProperty({ name: d, syntax: "<number>", inherits: !1, initialValue: "0" }), CSS.registerProperty({ name: u, syntax: "<length>", inherits: !0, initialValue: "0px" }), CSS.registerProperty({ name: f, syntax: "<number>", inherits: !1, initialValue: "0" }), CSS.registerProperty({ name: m, syntax: "<number>", inherits: !0, initialValue: "0" }), !0;
                    } catch {
                        return !1;
                    }
                })(),
                w = "var(--number-flow-char-height, 1em)",
                y = "var(--number-flow-mask-height, 0.25em)",
                v = `calc(${y} / 2)`,
                b = "var(--number-flow-mask-width, 0.5em)",
                k = `calc(${b} / var(--scale-x))`,
                S = "#000 0, transparent 71%",
                $ = "span",
                x = l`:host{display:inline-flex;align-items:baseline;direction:ltr;white-space:nowrap;position:relative;line-height:${w} !important;isolation:isolate;}::slotted(${$}){position:absolute;left:0;top:0;color:transparent !important;will-change:unset !important;z-index:-5;}:host > .number,:host > .section{pointer-events:none;user-select:none;}.number,.number__inner{display:inline-flex;align-items:baseline;transform-origin:left top;}:host([data-will-change]) .number,:host([data-will-change]) .number__inner{will-change:transform;}.number{--scale-x:calc(1 + var(${f}) / var(--width));transform:translateX(var(${u})) scaleX(var(--scale-x));margin:0 calc(-1 * ${b});position:relative;z-index:-1;overflow:clip;-webkit-mask-image:linear-gradient( to right,transparent 0,#000 ${k},#000 calc(100% - ${k}),transparent ),linear-gradient( to bottom,transparent 0,#000 ${y},#000 calc(100% - ${y}),transparent 100% ),radial-gradient(at bottom right,${S}),radial-gradient(at bottom left,${S}),radial-gradient(at top left,${S}),radial-gradient(at top right,${S});-webkit-mask-size:100% calc(100% - ${y} * 2),calc(100% - ${k} * 2) 100%,${k} ${y},${k} ${y},${k} ${y},${k} ${y};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat;}.number__inner{padding:0 ${b};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${u})));}.section{display:inline-flex;align-items:baseline;padding-bottom:${v};padding-top:${v};position:relative;isolation:isolate;}.section::after{content:'\200b';display:block;padding:${v} 0;}:host([data-will-change]) .section{will-change:transform;}.section--justify-left{transform-origin:center left;}.section--justify-right{transform-origin:center right;}.section__exiting{position:absolute !important;z-index:-1;}.digit{display:block;position:relative;--c:var(--current) + var(${m});}:host([data-will-change]) .digit,:host([data-will-change]) .digit__num{will-change:transform;}.digit__num{display:block;padding:${v} 0;--offset-raw:mod(10 + var(--n) - mod(var(--c),10),10);--offset:calc(var(--offset-raw) - 10 * round(down,var(--offset-raw) / 5,1));--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y));}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y));}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none;}.symbol{display:inline-flex;align-items:baseline;position:relative;isolation:isolate;padding:${v} 0;}:host([data-will-change]) .symbol{will-change:transform;}.symbol__value{display:block;mix-blend-mode:plus-lighter;white-space:pre;}.symbol__exiting{position:absolute;z-index:-1;}.section--justify-left .symbol__exiting{left:0;}.section--justify-right .symbol__exiting{right:0;}.animate-presence{opacity:calc(1 + var(${d}));}`,
                M = r ? HTMLElement : class {},
                E = ({ valueAsString: t, willChange: e }) => `<${$} style="font-kerning: none; display: inline-block; line-height: ${w}; padding: ${y} 0;${e ? "will-change: transform" : ""}">${t}</${$}>`;
            var _, C, P, R, T, j, N, W, U, A, D, O, L, F, I, B, H, X, z, Z, J, V, Y, q, G, K;
            const Q = c && h && g;
            var tt, et;
            let it;
            ((et = tt || (tt = {}))[(et.UP = 1)] = "UP"), (et[(et.DOWN = -1)] = "DOWN"), (et[(et.NONE = 0)] = "NONE");
            class st extends M {
                constructor() {
                    super(...arguments), (this.transformTiming = this.constructor.defaultProps.transformTiming), (this.spinTiming = this.constructor.defaultProps.spinTiming), (this.opacityTiming = this.constructor.defaultProps.opacityTiming), (this.respectMotionPreference = this.constructor.defaultProps.respectMotionPreference), (this.trend = this.constructor.defaultProps.trend), (this.continuous = this.constructor.defaultProps.continuous), _.set(this, this.constructor.defaultProps.animated), C.set(this, !1), P.set(this, void 0), R.set(this, void 0), T.set(this, void 0), j.set(this, void 0), N.set(this, void 0), W.set(this, n(this, _, "f")), U.set(this, void 0), (this.manual = !1), A.set(this, void 0);
                }
                get animated() {
                    return n(this, _, "f");
                }
                set animated(t) {
                    var e;
                    this.animated !== t && (a(this, _, t, "f"), null == (e = this.shadowRoot) || e.getAnimations().forEach((t) => t.finish()));
                }
                get created() {
                    return n(this, C, "f");
                }
                get computedTrend() {
                    return n(this, j, "f");
                }
                get startingPlace() {
                    return n(this, N, "f");
                }
                get computedAnimated() {
                    return n(this, W, "f");
                }
                set data(t) {
                    if (null == t) return;
                    const { pre: e, integer: i, fraction: s, post: r, value: l } = t;
                    if (n(this, C, "f")) {
                        const o = n(this, U, "f");
                        if ((a(this, U, t, "f"), !0 === this.trend ? a(this, j, Math.sign(l - o.value), "f") : "increasing" === this.trend ? a(this, j, tt.UP, "f") : "decreasing" === this.trend ? a(this, j, tt.DOWN, "f") : a(this, j, tt.NONE, "f"), a(this, N, void 0, "f"), n(this, j, "f") !== tt.NONE && this.continuous)) {
                            const e = o.integer.concat(o.fraction).filter((t) => "integer" === t.type || "fraction" === t.type),
                                i = t.integer.concat(t.fraction).filter((t) => "integer" === t.type || "fraction" === t.type),
                                s = e.find((t) => !i.find((e) => e.place === t.place && e.value === t.value)),
                                n = i.find((t) => !e.find((e) => t.place === e.place && t.value === e.value));
                            a(this, N, ((t, e) => (null != t && null == e ? t : null == t && null != e ? e : null != t && null != e ? Math.max(t, e) : null))(null == s ? void 0 : s.place, null == n ? void 0 : n.place), "f");
                        }
                        a(this, W, Q && n(this, _, "f") && (!this.respectMotionPreference || !(null != p && p.matches)) && ((t) => t.offsetWidth > 0 && t.offsetHeight > 0)(this), "f"), this.manual || this.willUpdate(), n(this, P, "f").update(e), n(this, R, "f").update({ integer: i, fraction: s }), n(this, T, "f").update(r), this.manual || this.didUpdate();
                    } else {
                        if ((a(this, U, t, "f"), this.attachShadow({ mode: "open" }), typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)) it || ((it = new CSSStyleSheet()), it.replaceSync(x)), (this.shadowRoot.adoptedStyleSheets = [it]);
                        else {
                            const t = document.createElement("style");
                            (t.textContent = x), this.shadowRoot.appendChild(t);
                        }
                        this.shadowRoot.appendChild(o("slot")), a(this, P, new ot(this, e, { inert: !0, ariaHidden: "true", justify: "right" }), "f"), this.shadowRoot.appendChild(n(this, P, "f").el), a(this, R, new nt(this, i, s, { inert: !0, ariaHidden: "true" }), "f"), this.shadowRoot.appendChild(n(this, R, "f").el), a(this, T, new ot(this, r, { inert: !0, ariaHidden: "true", justify: "left" }), "f"), this.shadowRoot.appendChild(n(this, T, "f").el);
                    }
                    a(this, C, !0, "f");
                }
                willUpdate() {
                    n(this, P, "f").willUpdate(), n(this, R, "f").willUpdate(), n(this, T, "f").willUpdate();
                }
                didUpdate() {
                    if (!n(this, W, "f")) return;
                    n(this, A, "f") ? n(this, A, "f").abort() : this.dispatchEvent(new Event("animationsstart")), n(this, P, "f").didUpdate(), n(this, R, "f").didUpdate(), n(this, T, "f").didUpdate();
                    const t = new AbortController();
                    Promise.all(this.shadowRoot.getAnimations().map((t) => t.finished)).then(() => {
                        t.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), a(this, A, void 0, "f"));
                    }),
                        a(this, A, t, "f");
                }
            }
            (_ = new WeakMap()), (C = new WeakMap()), (P = new WeakMap()), (R = new WeakMap()), (T = new WeakMap()), (j = new WeakMap()), (N = new WeakMap()), (W = new WeakMap()), (U = new WeakMap()), (A = new WeakMap()), (st.defaultProps = { transformTiming: { duration: 900, easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)" }, spinTiming: void 0, opacityTiming: { duration: 450, easing: "ease-out" }, animated: !0, trend: !0, continuous: !1, respectMotionPreference: !0 });
            class nt {
                constructor(t, e, i, { className: s, ...r } = {}) {
                    (this.flow = t), D.set(this, void 0), O.set(this, void 0), L.set(this, void 0), F.set(this, void 0), I.set(this, void 0), a(this, O, new rt(t, e, { justify: "right" }), "f"), a(this, L, new rt(t, i, { justify: "left" }), "f"), a(this, D, o("span", { className: "number__inner" }, [n(this, O, "f").el, n(this, L, "f").el]), "f"), (this.el = o("span", { ...r, className: `number ${s ?? ""}` }, [n(this, D, "f")]));
                }
                willUpdate() {
                    a(this, F, this.el.offsetWidth, "f"), a(this, I, this.el.getBoundingClientRect().left, "f"), n(this, O, "f").willUpdate(), n(this, L, "f").willUpdate();
                }
                update({ integer: t, fraction: e }) {
                    n(this, O, "f").update(t), n(this, L, "f").update(e);
                }
                didUpdate() {
                    const t = this.el.getBoundingClientRect();
                    n(this, O, "f").didUpdate(), n(this, L, "f").didUpdate();
                    const e = n(this, I, "f") - t.left,
                        i = this.el.offsetWidth,
                        s = n(this, F, "f") - i;
                    this.el.style.setProperty("--width", String(i)), this.el.animate({ [u]: [`${e}px`, "0px"], [f]: [s, 0] }, { ...this.flow.transformTiming, composite: "accumulate" });
                }
            }
            (D = new WeakMap()), (O = new WeakMap()), (L = new WeakMap()), (F = new WeakMap()), (I = new WeakMap());
            class at {
                constructor(t, e, { justify: i, className: s, ...n }, a) {
                    (this.flow = t),
                        (this.children = new Map()),
                        (this.onCharRemove = (t) => () => {
                            this.children.delete(t);
                        }),
                        B.set(this, void 0),
                        (this.justify = i);
                    const r = e.map((t) => this.addChar(t).el);
                    this.el = o("span", { ...n, className: `section section--justify-${i} ${s ?? ""}` }, a ? a(r) : r);
                }
                addChar(t, { startDigitsAtZero: e = !1, ...i } = {}) {
                    const s = "integer" === t.type || "fraction" === t.type ? new ct(this, t.type, e ? 0 : t.value, t.place, { ...i, onRemove: this.onCharRemove(t.key) }) : new pt(this, t.type, t.value, { ...i, onRemove: this.onCharRemove(t.key) });
                    return this.children.set(t.key, s), s;
                }
                unpop(t) {
                    t.el.classList.remove("section__exiting"), (t.el.style[this.justify] = "");
                }
                pop(t) {
                    t.forEach((t) => {
                        t.el.style[this.justify] = `${((t, e) => {
                            var i;
                            return "left" === e ? t.offsetLeft : ((null == (i = t.offsetParent instanceof HTMLElement ? t.offsetParent : null) ? void 0 : i.offsetWidth) ?? 0) - t.offsetWidth - t.offsetLeft;
                        })(t.el, this.justify)}px`;
                    }),
                        t.forEach((t) => {
                            t.el.classList.add("section__exiting"), (t.present = !1);
                        });
                }
                addNewAndUpdateExisting(t) {
                    const e = new Map(),
                        i = new Map(),
                        s = "left" === this.justify,
                        n = s ? "prepend" : "append";
                    if (
                        ((function (t, e, { reverse: i = !1 } = {}) {
                            const s = t.length;
                            for (let n = i ? s - 1 : 0; i ? n >= 0 : n < s; i ? n-- : n++) e(t[n], n);
                        })(
                            t,
                            (t) => {
                                let s;
                                this.children.has(t.key) ? ((s = this.children.get(t.key)), i.set(t, s), this.unpop(s), (s.present = !0)) : ((s = this.addChar(t, { startDigitsAtZero: !0, animateIn: !0 })), e.set(t, s)), this.el[n](s.el);
                            },
                            { reverse: s },
                        ),
                        this.flow.computedAnimated)
                    ) {
                        const t = this.el.getBoundingClientRect();
                        e.forEach((e) => {
                            e.willUpdate(t);
                        });
                    }
                    e.forEach((t, e) => {
                        t.update(e.value);
                    }),
                        i.forEach((t, e) => {
                            t.update(e.value);
                        });
                }
                willUpdate() {
                    const t = this.el.getBoundingClientRect();
                    a(this, B, t[this.justify], "f"), this.children.forEach((e) => e.willUpdate(t));
                }
                didUpdate() {
                    const t = this.el.getBoundingClientRect();
                    this.children.forEach((e) => e.didUpdate(t));
                    const e = t[this.justify],
                        i = n(this, B, "f") - e;
                    i && this.children.size && this.el.animate({ transform: [`translateX(${i}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
                }
            }
            B = new WeakMap();
            class rt extends at {
                update(t) {
                    const e = new Map();
                    this.children.forEach((i, s) => {
                        t.find((t) => t.key === s) || e.set(s, i), this.unpop(i);
                    }),
                        this.addNewAndUpdateExisting(t),
                        e.forEach((t) => {
                            t instanceof ct && t.update(0);
                        }),
                        this.pop(e);
                }
            }
            class ot extends at {
                update(t) {
                    const e = new Map();
                    this.children.forEach((i, s) => {
                        t.find((t) => t.key === s) || e.set(s, i);
                    }),
                        this.pop(e),
                        this.addNewAndUpdateExisting(t);
                }
            }
            class lt {
                constructor(t, e, { onRemove: i, animateIn: s = !1 } = {}) {
                    (this.flow = t),
                        (this.el = e),
                        H.set(this, !0),
                        X.set(this, void 0),
                        z.set(this, () => {
                            var t;
                            this.el.remove(), null == (t = n(this, X, "f")) || t.call(this);
                        }),
                        this.el.classList.add("animate-presence"),
                        this.flow.computedAnimated && s && this.el.animate({ [d]: [-0.9999, 0] }, { ...this.flow.opacityTiming, composite: "accumulate" }),
                        a(this, X, i, "f");
                }
                get present() {
                    return n(this, H, "f");
                }
                set present(t) {
                    if (n(this, H, "f") !== t) {
                        if ((a(this, H, t, "f"), !this.flow.computedAnimated)) return void (t || n(this, z, "f").call(this));
                        this.el.style.setProperty("--_number-flow-d-opacity", t ? "0" : "-.999"), this.el.animate({ [d]: t ? [-0.9999, 0] : [0.999, 0] }, { ...this.flow.opacityTiming, composite: "accumulate" }), t ? this.flow.removeEventListener("animationsfinish", n(this, z, "f")) : this.flow.addEventListener("animationsfinish", n(this, z, "f"), { once: !0 });
                    }
                }
            }
            (H = new WeakMap()), (X = new WeakMap()), (z = new WeakMap());
            class ht extends lt {
                constructor(t, e, i, s) {
                    super(t.flow, i, s), (this.section = t), (this.value = e), (this.el = i);
                }
            }
            class ct extends ht {
                constructor(t, e, i, s, n) {
                    const r = Array.from({ length: 10 }).map((t, e) => {
                            const s = o("span", { className: "digit__num" + (e === i ? " is-current" : "") }, [document.createTextNode(String(e))]);
                            return s.style.setProperty("--n", String(e)), s;
                        }),
                        l = o("span", { className: "digit" }, r);
                    l.style.setProperty("--current", String(i)),
                        super(t, i, l, n),
                        (this.place = s),
                        Z.set(this, void 0),
                        J.set(this, void 0),
                        V.set(this, void 0),
                        Y.set(this, () => {
                            this.el.classList.remove("is-spinning");
                        }),
                        a(this, Z, r, "f");
                }
                willUpdate(t) {
                    const e = this.el.getBoundingClientRect();
                    a(this, J, this.value, "f");
                    const i = e[this.section.justify] - t[this.section.justify],
                        s = e.width / 2;
                    a(this, V, "left" === this.section.justify ? i + s : i - s, "f");
                }
                update(t) {
                    var e, i;
                    null == (e = n(this, Z, "f")[this.value]) || e.classList.remove("is-current"), this.el.style.setProperty("--current", String(t)), null == (i = n(this, Z, "f")[t]) || i.classList.add("is-current"), (this.value = t);
                }
                didUpdate(t) {
                    const e = this.el.getBoundingClientRect(),
                        i = e[this.section.justify] - t[this.section.justify],
                        s = e.width / 2,
                        a = "left" === this.section.justify ? i + s : i - s,
                        r = n(this, V, "f") - a;
                    r && this.el.animate({ transform: [`translateX(${r}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
                    const o = this.diff;
                    o && (this.el.classList.add("is-spinning"), this.el.animate({ [m]: [-o, 0] }, { ...(this.flow.spinTiming ?? this.flow.transformTiming), composite: "accumulate" }), this.flow.addEventListener("animationsfinish", n(this, Y, "f"), { once: !0 }));
                }
                get diff() {
                    let t = this.flow.computedTrend;
                    const e = this.value - n(this, J, "f");
                    return !e && null != this.flow.startingPlace && this.flow.startingPlace >= this.place ? 10 * t : (t || (t = Math.sign(e)), t === tt.DOWN && this.value > n(this, J, "f") ? this.value - 10 - n(this, J, "f") : t === tt.UP && this.value < n(this, J, "f") ? 10 - n(this, J, "f") + this.value : e);
                }
            }
            (Z = new WeakMap()), (J = new WeakMap()), (V = new WeakMap()), (Y = new WeakMap());
            class pt extends ht {
                constructor(t, e, i, s) {
                    const a = o("span", { className: "symbol__value", textContent: i });
                    super(t, i, o("span", { className: "symbol" }, [a]), s),
                        (this.type = e),
                        q.set(this, new Map()),
                        G.set(this, void 0),
                        K.set(this, (t) => () => {
                            n(this, q, "f").delete(t);
                        }),
                        n(this, q, "f").set(i, new lt(this.flow, a, { onRemove: n(this, K, "f").call(this, i) }));
                }
                willUpdate(t) {
                    if ("decimal" === this.type) return;
                    const e = this.el.getBoundingClientRect();
                    a(this, G, e[this.section.justify] - t[this.section.justify], "f");
                }
                update(t) {
                    if (this.value !== t) {
                        const e = n(this, q, "f").get(this.value);
                        if (((e.present = !1), e.el.classList.add("symbol__exiting"), n(this, q, "f").has(t))) {
                            const e = n(this, q, "f").get(t);
                            (e.present = !0), e.el.classList.remove("symbol__exiting");
                        } else {
                            const e = o("span", { className: "symbol__value", textContent: t });
                            this.el.appendChild(e), n(this, q, "f").set(t, new lt(this.flow, e, { animateIn: !0, onRemove: n(this, K, "f").call(this, t) }));
                        }
                    }
                    this.value = t;
                }
                didUpdate(t) {
                    if ("decimal" === this.type) return;
                    const e = this.el.getBoundingClientRect()[this.section.justify] - t[this.section.justify],
                        i = n(this, G, "f") - e;
                    i && this.el.animate({ transform: [`translateX(${i}px)`, "none"] }, { ...this.flow.transformTiming, composite: "accumulate" });
                }
            }
            (q = new WeakMap()), (G = new WeakMap()), (K = new WeakMap());
            var dt = (t) => {
                    throw TypeError(t);
                },
                ft = (t, e, i) => e.has(t) || dt("Cannot " + i),
                ut = (t, e, i) => (ft(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
                mt = parseInt(s.version.match(/^(\d+)\./)?.[1]) >= 19,
                gt = class extends st {
                    attributeChangedCallback(t, e, i) {
                        this[t] = JSON.parse(i);
                    }
                };
            (gt.observedAttributes = mt ? [] : ["data"]),
                ((t, e) => {
                    if (r && customElements.get(t) !== e) customElements.define(t, e);
                })("number-flow-react", gt);
            var wt,
                yt = {},
                vt = mt ? (t) => t : JSON.stringify;
            function bt(t) {
                const { transformTiming: e, spinTiming: i, opacityTiming: s, animated: n, respectMotionPreference: a, trend: r, continuous: o, ...l } = t;
                return [{ transformTiming: e, spinTiming: i, opacityTiming: s, animated: n, respectMotionPreference: a, trend: r, continuous: o }, l];
            }
            var kt = class extends s.Component {
                constructor(t) {
                    var e, i, s;
                    super(t), (e = this), (i = wt).has(e) ? dt("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(e) : i.set(e, s), (this.handleRef = this.handleRef.bind(this));
                }
                updateNonDataProps(t) {
                    if (!ut(this, wt)) return;
                    ut(this, wt).manual = !this.props.isolate;
                    const [e] = bt(this.props);
                    Object.assign(ut(this, wt), Object.fromEntries(Object.entries(e).filter(([t, e]) => null != e))), t?.onAnimationsStart && ut(this, wt).removeEventListener("animationsstart", t.onAnimationsStart), this.props.onAnimationsStart && ut(this, wt).addEventListener("animationsstart", this.props.onAnimationsStart), t?.onAnimationsFinish && ut(this, wt).removeEventListener("animationsfinish", t.onAnimationsFinish), this.props.onAnimationsFinish && ut(this, wt).addEventListener("animationsfinish", this.props.onAnimationsFinish);
                }
                componentDidMount() {
                    this.updateNonDataProps(), mt && ut(this, wt) && (ut(this, wt).data = this.props.data);
                }
                getSnapshotBeforeUpdate(t) {
                    return this.updateNonDataProps(t), !this.props.isolate && !1 !== this.props.animated && t.data !== this.props.data && (ut(this, wt)?.willUpdate(), !0);
                }
                componentDidUpdate(t, e, i) {
                    i && ut(this, wt)?.didUpdate();
                }
                handleRef(t) {
                    var e, i, s, n;
                    this.props.innerRef && (this.props.innerRef.current = t), (s = t), ft((e = this), (i = wt), "write to private field"), n ? n.call(e, s) : i.set(e, s);
                }
                render() {
                    const [t, { innerRef: e, className: i, data: n, willChange: a, isolate: r, ...o }] = bt(this.props);
                    return s.createElement("number-flow-react", { ref: this.handleRef, "data-will-change": a ? "" : void 0, class: i, ...o, dangerouslySetInnerHTML: { __html: E({ valueAsString: n.valueAsString, willChange: a }) }, data: vt(n) });
                }
            };
            wt = new WeakMap();
            var St = s.forwardRef(function ({ value: t, locales: e, format: i, prefix: n, suffix: a, ...r }, o) {
                    s.useImperativeHandle(o, () => l.current, []);
                    const l = s.useRef(),
                        h = s.useMemo(() => (e ? JSON.stringify(e) : ""), [e]),
                        c = s.useMemo(() => (i ? JSON.stringify(i) : ""), [i]),
                        p = s.useMemo(() => {
                            const s = (yt[`${h}:${c}`] ??= new Intl.NumberFormat(e, i));
                            return (function (t, e, i, s) {
                                const n = e.formatToParts(t);
                                i && n.unshift({ type: "prefix", value: i }), s && n.push({ type: "suffix", value: s });
                                const a = [],
                                    r = [],
                                    o = [],
                                    l = [],
                                    h = {},
                                    c = (t) => `${t}:${(h[t] = (h[t] ?? -1) + 1)}`;
                                let p = "",
                                    d = !1,
                                    f = !1;
                                for (const t of n) {
                                    p += t.value;
                                    const e = "minusSign" === t.type || "plusSign" === t.type ? "sign" : t.type;
                                    "integer" === e ? ((d = !0), r.push(...t.value.split("").map((t) => ({ type: e, value: parseInt(t) })))) : "group" === e ? r.push({ type: e, value: t.value }) : "decimal" === e ? ((f = !0), o.push({ type: e, value: t.value, key: c(e) })) : "fraction" === e ? o.push(...t.value.split("").map((t) => ({ type: e, value: parseInt(t), key: c(e), place: -1 - h[e] }))) : (d || f ? l : a).push({ type: e, value: t.value, key: c(e) });
                                }
                                const u = [];
                                for (let t = r.length - 1; t >= 0; t--) {
                                    const e = r[t];
                                    u.unshift("integer" === e.type ? { ...e, key: c(e.type), place: h[e.type] } : { ...e, key: c(e.type) });
                                }
                                return { pre: a, integer: u, fraction: o, post: l, valueAsString: p, value: "string" == typeof t ? parseFloat(t) : t };
                            })(t, s, n, a);
                        }, [t, h, c, n, a]);
                    return s.createElement(kt, { ...r, data: p, innerRef: l });
                }),
                $t = St;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-f82e0cd2.c2e6644a.js.map
