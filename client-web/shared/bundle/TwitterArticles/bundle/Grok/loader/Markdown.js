"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown", "icons/IconDraggable-js", "icons/IconMediaCollapse-js", "icons/IconSearchMinusStroke-js"],
    {
        65469: (e, t, n) => {
            n.d(t, { Z: () => s });
            n(202784);
            const s = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.24"), n.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-169fd384"), n.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-158ede41"), n.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-43dc6c10"), n.e("shared~loader.Dock~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.DockPe-3275b397"), n.e("loader.CodeBlock-49d0a293"), n.e("loader.CodeBlock-354a642d"), n.e("loader.CodeBlock-e96e9bea")]).then(n.bind(n, 896867)) });
        },
        169576: (e, t, n) => {
            n.d(t, { c: () => f, Z: () => m });
            var s = n(202784),
                r = n(325686),
                i = n(392237),
                l = n(530732),
                a = n(992942),
                o = n(731708),
                c = n(154003),
                h = n(725516),
                p = n(111677),
                u = n.n(p);
            const d = n.p + "MarchMadnessBannerDark.42aa2dea.png",
                g = n.p + "MarchMadnessBannerLight.02bf82ca.png",
                k = { header: u().d231a76a, description: u().heaba5d8, legalDisclaimer: u().i57d3ea0, buttonText: u().a0440af6, image: { darkMode: d, lightMode: g } },
                f = Object.freeze({ MarchMadness: "MarchMadness" }),
                m = ({ buttonOnSameLine: e, link: t, occasion: n, styleOverrides: p, withBackgroundImage: u }) => {
                    const d = (0, h.z)(),
                        g = f[n] || "Occasion",
                        m = u ? `${g}WithBackgroundImage` : g;
                    s.useEffect(() => {
                        d.scribe({ component: m, action: "impression" });
                    }, [d, m]);
                    const b = () => {
                            d.scribe({ component: m, action: "click", element: "card" });
                        },
                        { backgroundcolor: w, buttonSize: y, cardWidth: _, marginbottom: $, textcolor: z } = p ?? {},
                        T = w ? i.default.theme.colors[w] : i.default.theme.colors.gray0,
                        S = z ? i.default.theme.colors[z] : i.default.theme.colors.gray900,
                        R = $ ? i.default.theme.spaces[$] : i.default.theme.spaces.space16,
                        v = { [f.MarchMadness]: { header: k.header, description: k.description, legalDisclaimer: k.legalDisclaimer, buttonText: k.buttonText, image: k.image } }[n];
                    return u ? s.createElement(l.Z, { interactiveStyles: null, link: t, onPress: b, style: x.bannerContainer }, s.createElement(a.Z, { resizeMode: "contain", source: { uri: "light" === i.default.theme.paletteName ? v.image.lightMode : v.image.darkMode }, style: { height: 85 } })) : s.createElement(r.Z, { style: [x.card, { backgroundColor: T }, { maxWidth: _ }, { marginBottom: R }], testID: "popupCard" }, s.createElement(r.Z, { style: e ? x.horizontalContent : x.verticalContent }, s.createElement(r.Z, { style: e ? x.textContainer : null }, s.createElement(o.ZP, { size: "headline2", style: [x.popupTitle, { alignSelf: "flex-start" }], weight: "bold" }, v.header), s.createElement(o.ZP, { size: "subtext1", style: [x.popupDescription, { color: S }] }, v.description, " ", e ? null : v.legalDisclaimer)), s.createElement(r.Z, { style: x.buttonContainer }, s.createElement(c.ZP, { backgroundColor: "light" === i.default.theme.paletteName ? "orange300" : "orange600", borderColor: "transparent", link: t, onClick: b, size: "medium", style: [x.popupButton, { width: y }] }, v.buttonText), e && s.createElement(o.ZP, { size: "subtext3", style: [x.legalDisclaimer, { color: S }] }, v.legalDisclaimer))));
                },
                x = i.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, borderRadius: e.spaces.space16, padding: e.spaces.space16, alignItems: "center", maxWidth: 350, width: "100%" }, transparent: { backgroundColor: "transparent" }, popupTitle: { marginBottom: e.spaces.space8, textAlign: "start" }, popupDescription: { textAlign: "start", marginEnd: e.spaces.space12 }, legalDisclaimer: { position: "absolute", top: "60px", end: "50%", transform: "translateX(50%)", textAlign: "center", minWidth: 100, opacity: 0.7 }, popupButton: { width: "100%", borderRadius: e.spaces.space24, marginTop: e.spaces.space12, height: e.spaces.space40 }, buttonContainer: { position: "relative" }, horizontalContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", paddingBottom: e.spaces.space8 }, verticalContent: { width: "100%" }, textContainer: { flex: 1 }, bannerContainer: { marginBottom: e.spaces.space16 } }));
        },
        128225: (e, t, n) => {
            n.d(t, { f: () => s });
            n(543673), n(240753), n(128399), n(571372);
            const s = (e, t = !1, n = !1) =>
                new Promise((s, r) => {
                    const i = new URL(e);
                    n && !e.startsWith("blob:") && i.searchParams.set("grok_timestamp", Date.now().toString());
                    const l = new window.XMLHttpRequest();
                    (l.responseType = "blob"),
                        (l.onreadystatechange = () => {
                            l.readyState === window.XMLHttpRequest.DONE && (200 === l.status ? s(l.response) : r(new Error("Unexpected status code")));
                        }),
                        (l.withCredentials = t),
                        (l.onerror = (e) => r(e)),
                        (l.ontimeout = (e) => r(e)),
                        l.open("GET", i.toString(), !0),
                        l.send();
                });
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => g });
            var s = n(807896),
                r = n(202784),
                i = n(111677),
                l = n.n(i),
                a = n(154003),
                o = n(950822),
                c = n(392237);
            const h = l().i5450bec,
                p = l().f7432494;
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                s = n.files;
                            s.length && t && t(s), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: i, testID: l, ...c } = this.props,
                        u = !(e?.includes("video") || e?.includes("gif"));
                    return r.createElement(r.Fragment, null, r.createElement(a.ZP, (0, s.Z)({ hoverLabel: e ? { label: u ? p : h } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, o.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: d.input, tabIndex: -1, testID: l, type: "file" }));
                }
            }
            u.defaultProps = { disabled: !1, multiple: !1 };
            const d = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                g = u;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var s = n(202784),
                r = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const o = a;
        },
        647174: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var s = n(202784),
                r = n(890601),
                i = n(783427),
                l = n(717683),
                a = n(347101);
            const o = (e = {}) => {
                const t = s.useContext(l.Z),
                    { direction: n } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style, t && a.Z.iconRTL], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M21.457 3.96L16.414 9H21v2h-8V3h2v4.59l5.043-5.05 1.414 1.42zM3 13h8v8H9v-4.59l-5.043 5.05-1.414-1.42L7.586 15H3v-2z" })) }, { writingDirection: n });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        614991: (e, t, n) => {
            n.r(t), n.d(t, { default: () => o });
            var s = n(202784),
                r = n(890601),
                i = n(783427),
                l = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M11 4c-3.87 0-7 3.13-7 7s3.13 7 7 7c1.93 0 3.68-.78 4.95-2.05C17.21 14.68 18 12.93 18 11c0-3.87-3.14-7-7-7zm-9 7c0-4.97 4.03-9 9-9s9 4.03 9 9c0 2.12-.74 4.08-1.97 5.62l3.68 3.67-1.42 1.42-3.67-3.68C15.08 19.26 13.12 20 11 20c-4.97 0-9-4.03-9-9zm12.5 1h-7v-2h7v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const o = a;
        },
        719870: (e, t, n) => {
            function s() {
                return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
            }
            n.d(t, { TU: () => I });
            let r = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
            function i(e) {
                r = e;
            }
            const l = /[&<>"']/,
                a = new RegExp(l.source, "g"),
                o = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
                c = new RegExp(o.source, "g"),
                h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" },
                p = (e) => h[e];
            function u(e, t) {
                if (t) {
                    if (l.test(e)) return e.replace(a, p);
                } else if (o.test(e)) return e.replace(c, p);
                return e;
            }
            const d = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
            const g = /(^|[^\[])\^/g;
            function k(e, t) {
                (e = "string" == typeof e ? e : e.source), (t = t || "");
                const n = { replace: (t, s) => ((s = (s = "object" == typeof s && "source" in s ? s.source : s).replace(g, "$1")), (e = e.replace(t, s)), n), getRegex: () => new RegExp(e, t) };
                return n;
            }
            function f(e) {
                try {
                    e = encodeURI(e).replace(/%25/g, "%");
                } catch (e) {
                    return null;
                }
                return e;
            }
            const m = { exec: () => null };
            function x(e, t) {
                const n = e
                    .replace(/\|/g, (e, t, n) => {
                        let s = !1,
                            r = t;
                        for (; --r >= 0 && "\\" === n[r]; ) s = !s;
                        return s ? "|" : " |";
                    })
                    .split(/ \|/);
                let s = 0;
                if ((n[0].trim() || n.shift(), n.length > 0 && !n[n.length - 1].trim() && n.pop(), t))
                    if (n.length > t) n.splice(t);
                    else for (; n.length < t; ) n.push("");
                for (; s < n.length; s++) n[s] = n[s].trim().replace(/\\\|/g, "|");
                return n;
            }
            function b(e, t, n) {
                const s = e.length;
                if (0 === s) return "";
                let r = 0;
                for (; r < s; ) {
                    const i = e.charAt(s - r - 1);
                    if (i !== t || n) {
                        if (i === t || !n) break;
                        r++;
                    } else r++;
                }
                return e.slice(0, s - r);
            }
            function w(e, t, n, s) {
                const r = t.href,
                    i = t.title ? u(t.title) : null,
                    l = e[1].replace(/\\([\[\]])/g, "$1");
                if ("!" !== e[0].charAt(0)) {
                    s.state.inLink = !0;
                    const e = { type: "link", raw: n, href: r, title: i, text: l, tokens: s.inlineTokens(l) };
                    return (s.state.inLink = !1), e;
                }
                return { type: "image", raw: n, href: r, title: i, text: u(l) };
            }
            class y {
                options;
                rules;
                lexer;
                constructor(e) {
                    this.options = e || r;
                }
                space(e) {
                    const t = this.rules.block.newline.exec(e);
                    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
                }
                code(e) {
                    const t = this.rules.block.code.exec(e);
                    if (t) {
                        const e = t[0].replace(/^ {1,4}/gm, "");
                        return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? e : b(e, "\n") };
                    }
                }
                fences(e) {
                    const t = this.rules.block.fences.exec(e);
                    if (t) {
                        const e = t[0],
                            n = (function (e, t) {
                                const n = e.match(/^(\s+)(?:```)/);
                                if (null === n) return t;
                                const s = n[1];
                                return t
                                    .split("\n")
                                    .map((e) => {
                                        const t = e.match(/^\s+/);
                                        if (null === t) return e;
                                        const [n] = t;
                                        return n.length >= s.length ? e.slice(s.length) : e;
                                    })
                                    .join("\n");
                            })(e, t[3] || "");
                        return { type: "code", raw: e, lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2], text: n };
                    }
                }
                heading(e) {
                    const t = this.rules.block.heading.exec(e);
                    if (t) {
                        let e = t[2].trim();
                        if (/#$/.test(e)) {
                            const t = b(e, "#");
                            this.options.pedantic ? (e = t.trim()) : (t && !/ $/.test(t)) || (e = t.trim());
                        }
                        return { type: "heading", raw: t[0], depth: t[1].length, text: e, tokens: this.lexer.inline(e) };
                    }
                }
                hr(e) {
                    const t = this.rules.block.hr.exec(e);
                    if (t) return { type: "hr", raw: t[0] };
                }
                blockquote(e) {
                    const t = this.rules.block.blockquote.exec(e);
                    if (t) {
                        const e = b(t[0].replace(/^ *>[ \t]?/gm, ""), "\n"),
                            n = this.lexer.state.top;
                        this.lexer.state.top = !0;
                        const s = this.lexer.blockTokens(e);
                        return (this.lexer.state.top = n), { type: "blockquote", raw: t[0], tokens: s, text: e };
                    }
                }
                list(e) {
                    let t = this.rules.block.list.exec(e);
                    if (t) {
                        let n = t[1].trim();
                        const s = n.length > 1,
                            r = { type: "list", raw: "", ordered: s, start: s ? +n.slice(0, -1) : "", loose: !1, items: [] };
                        (n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`), this.options.pedantic && (n = s ? n : "[*+-]");
                        const i = new RegExp(`^( {0,3}${n})((?:[\t ][^\\n]*)?(?:\\n|$))`);
                        let l = "",
                            a = "",
                            o = !1;
                        for (; e; ) {
                            let n = !1;
                            if (!(t = i.exec(e))) break;
                            if (this.rules.block.hr.test(e)) break;
                            (l = t[0]), (e = e.substring(l.length));
                            let s = t[2].split("\n", 1)[0].replace(/^\t+/, (e) => " ".repeat(3 * e.length)),
                                c = e.split("\n", 1)[0],
                                h = 0;
                            this.options.pedantic ? ((h = 2), (a = s.trimStart())) : ((h = t[2].search(/[^ ]/)), (h = h > 4 ? 1 : h), (a = s.slice(h)), (h += t[1].length));
                            let p = !1;
                            if ((!s && /^ *$/.test(c) && ((l += c + "\n"), (e = e.substring(c.length + 1)), (n = !0)), !n)) {
                                const t = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
                                    n = new RegExp(`^ {0,${Math.min(3, h - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
                                    r = new RegExp(`^ {0,${Math.min(3, h - 1)}}(?:\`\`\`|~~~)`),
                                    i = new RegExp(`^ {0,${Math.min(3, h - 1)}}#`);
                                for (; e; ) {
                                    const o = e.split("\n", 1)[0];
                                    if (((c = o), this.options.pedantic && (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), r.test(c))) break;
                                    if (i.test(c)) break;
                                    if (t.test(c)) break;
                                    if (n.test(e)) break;
                                    if (c.search(/[^ ]/) >= h || !c.trim()) a += "\n" + c.slice(h);
                                    else {
                                        if (p) break;
                                        if (s.search(/[^ ]/) >= 4) break;
                                        if (r.test(s)) break;
                                        if (i.test(s)) break;
                                        if (n.test(s)) break;
                                        a += "\n" + c;
                                    }
                                    p || c.trim() || (p = !0), (l += o + "\n"), (e = e.substring(o.length + 1)), (s = c.slice(h));
                                }
                            }
                            r.loose || (o ? (r.loose = !0) : /\n *\n *$/.test(l) && (o = !0));
                            let u,
                                d = null;
                            this.options.gfm && ((d = /^\[[ xX]\] /.exec(a)), d && ((u = "[ ] " !== d[0]), (a = a.replace(/^\[[ xX]\] +/, "")))), r.items.push({ type: "list_item", raw: l, task: !!d, checked: u, loose: !1, text: a, tokens: [] }), (r.raw += l);
                        }
                        (r.items[r.items.length - 1].raw = l.trimEnd()), (r.items[r.items.length - 1].text = a.trimEnd()), (r.raw = r.raw.trimEnd());
                        for (let e = 0; e < r.items.length; e++)
                            if (((this.lexer.state.top = !1), (r.items[e].tokens = this.lexer.blockTokens(r.items[e].text, [])), !r.loose)) {
                                const t = r.items[e].tokens.filter((e) => "space" === e.type),
                                    n = t.length > 0 && t.some((e) => /\n.*\n/.test(e.raw));
                                r.loose = n;
                            }
                        if (r.loose) for (let e = 0; e < r.items.length; e++) r.items[e].loose = !0;
                        return r;
                    }
                }
                html(e) {
                    const t = this.rules.block.html.exec(e);
                    if (t) {
                        return { type: "html", block: !0, raw: t[0], pre: "pre" === t[1] || "script" === t[1] || "style" === t[1], text: t[0] };
                    }
                }
                def(e) {
                    const t = this.rules.block.def.exec(e);
                    if (t) {
                        const e = t[1].toLowerCase().replace(/\s+/g, " "),
                            n = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "",
                            s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
                        return { type: "def", tag: e, raw: t[0], href: n, title: s };
                    }
                }
                table(e) {
                    const t = this.rules.block.table.exec(e);
                    if (t) {
                        if (!/[:|]/.test(t[2])) return;
                        const e = { type: "table", raw: t[0], header: x(t[1]).map((e) => ({ text: e, tokens: [] })), align: t[2].replace(/^\||\| *$/g, "").split("|"), rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split("\n") : [] };
                        if (e.header.length === e.align.length) {
                            let t,
                                n,
                                s,
                                r,
                                i = e.align.length;
                            for (t = 0; t < i; t++) {
                                const n = e.align[t];
                                n && (/^ *-+: *$/.test(n) ? (e.align[t] = "right") : /^ *:-+: *$/.test(n) ? (e.align[t] = "center") : /^ *:-+ *$/.test(n) ? (e.align[t] = "left") : (e.align[t] = null));
                            }
                            for (i = e.rows.length, t = 0; t < i; t++) e.rows[t] = x(e.rows[t], e.header.length).map((e) => ({ text: e, tokens: [] }));
                            for (i = e.header.length, n = 0; n < i; n++) e.header[n].tokens = this.lexer.inline(e.header[n].text);
                            for (i = e.rows.length, n = 0; n < i; n++) for (r = e.rows[n], s = 0; s < r.length; s++) r[s].tokens = this.lexer.inline(r[s].text);
                            return e;
                        }
                    }
                }
                lheading(e) {
                    const t = this.rules.block.lheading.exec(e);
                    if (t) return { type: "heading", raw: t[0], depth: "=" === t[2].charAt(0) ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
                }
                paragraph(e) {
                    const t = this.rules.block.paragraph.exec(e);
                    if (t) {
                        const e = "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1];
                        return { type: "paragraph", raw: t[0], text: e, tokens: this.lexer.inline(e) };
                    }
                }
                text(e) {
                    const t = this.rules.block.text.exec(e);
                    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
                }
                escape(e) {
                    const t = this.rules.inline.escape.exec(e);
                    if (t) return { type: "escape", raw: t[0], text: u(t[1]) };
                }
                tag(e) {
                    const t = this.rules.inline.tag.exec(e);
                    if (t) return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? (this.lexer.state.inLink = !0) : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? (this.lexer.state.inRawBlock = !0) : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] };
                }
                link(e) {
                    const t = this.rules.inline.link.exec(e);
                    if (t) {
                        const e = t[2].trim();
                        if (!this.options.pedantic && /^</.test(e)) {
                            if (!/>$/.test(e)) return;
                            const t = b(e.slice(0, -1), "\\");
                            if ((e.length - t.length) % 2 == 0) return;
                        } else {
                            const e = (function (e, t) {
                                if (-1 === e.indexOf(t[1])) return -1;
                                let n = 0;
                                for (let s = 0; s < e.length; s++)
                                    if ("\\" === e[s]) s++;
                                    else if (e[s] === t[0]) n++;
                                    else if (e[s] === t[1] && (n--, n < 0)) return s;
                                return -1;
                            })(t[2], "()");
                            if (e > -1) {
                                const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
                                (t[2] = t[2].substring(0, e)), (t[0] = t[0].substring(0, n).trim()), (t[3] = "");
                            }
                        }
                        let n = t[2],
                            s = "";
                        if (this.options.pedantic) {
                            const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
                            e && ((n = e[1]), (s = e[3]));
                        } else s = t[3] ? t[3].slice(1, -1) : "";
                        return (n = n.trim()), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), w(t, { href: n ? n.replace(this.rules.inline._escapes, "$1") : n, title: s ? s.replace(this.rules.inline._escapes, "$1") : s }, t[0], this.lexer);
                    }
                }
                reflink(e, t) {
                    let n;
                    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
                        let e = (n[2] || n[1]).replace(/\s+/g, " ");
                        if (((e = t[e.toLowerCase()]), !e)) {
                            const e = n[0].charAt(0);
                            return { type: "text", raw: e, text: e };
                        }
                        return w(n, e, n[0], this.lexer);
                    }
                }
                emStrong(e, t, n = "") {
                    let s = this.rules.inline.emStrong.lDelim.exec(e);
                    if (!s) return;
                    if (s[3] && n.match(/[\p{L}\p{N}]/u)) return;
                    if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
                        const n = [...s[0]].length - 1;
                        let r,
                            i,
                            l = n,
                            a = 0;
                        const o = "*" === s[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
                        for (o.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (s = o.exec(t)); ) {
                            if (((r = s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), !r)) continue;
                            if (((i = [...r].length), s[3] || s[4])) {
                                l += i;
                                continue;
                            }
                            if ((s[5] || s[6]) && n % 3 && !((n + i) % 3)) {
                                a += i;
                                continue;
                            }
                            if (((l -= i), l > 0)) continue;
                            i = Math.min(i, i + l + a);
                            const t = [...s[0]][0].length,
                                o = e.slice(0, n + s.index + t + i);
                            if (Math.min(n, i) % 2) {
                                const e = o.slice(1, -1);
                                return { type: "em", raw: o, text: e, tokens: this.lexer.inlineTokens(e) };
                            }
                            const c = o.slice(2, -2);
                            return { type: "strong", raw: o, text: c, tokens: this.lexer.inlineTokens(c) };
                        }
                    }
                }
                codespan(e) {
                    const t = this.rules.inline.code.exec(e);
                    if (t) {
                        let e = t[2].replace(/\n/g, " ");
                        const n = /[^ ]/.test(e),
                            s = /^ /.test(e) && / $/.test(e);
                        return n && s && (e = e.substring(1, e.length - 1)), (e = u(e, !0)), { type: "codespan", raw: t[0], text: e };
                    }
                }
                br(e) {
                    const t = this.rules.inline.br.exec(e);
                    if (t) return { type: "br", raw: t[0] };
                }
                del(e) {
                    const t = this.rules.inline.del.exec(e);
                    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
                }
                autolink(e) {
                    const t = this.rules.inline.autolink.exec(e);
                    if (t) {
                        let e, n;
                        return "@" === t[2] ? ((e = u(t[1])), (n = "mailto:" + e)) : ((e = u(t[1])), (n = e)), { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] };
                    }
                }
                url(e) {
                    let t;
                    if ((t = this.rules.inline.url.exec(e))) {
                        let e, n;
                        if ("@" === t[2]) (e = u(t[0])), (n = "mailto:" + e);
                        else {
                            let s;
                            do {
                                (s = t[0]), (t[0] = this.rules.inline._backpedal.exec(t[0])[0]);
                            } while (s !== t[0]);
                            (e = u(t[0])), (n = "www." === t[1] ? "http://" + t[0] : t[0]);
                        }
                        return { type: "link", raw: t[0], text: e, href: n, tokens: [{ type: "text", raw: e, text: e }] };
                    }
                }
                inlineText(e) {
                    const t = this.rules.inline.text.exec(e);
                    if (t) {
                        let e;
                        return (e = this.lexer.state.inRawBlock ? t[0] : u(t[0])), { type: "text", raw: t[0], text: e };
                    }
                }
            }
            const _ = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: m, lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/, _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/, _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/ };
            (_.def = k(_.def).replace("label", _._label).replace("title", _._title).getRegex()),
                (_.bullet = /(?:[*+-]|\d{1,9}[.)])/),
                (_.listItemStart = k(/^( *)(bull) */)
                    .replace("bull", _.bullet)
                    .getRegex()),
                (_.list = k(_.list)
                    .replace(/bull/g, _.bullet)
                    .replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))")
                    .replace("def", "\\n+(?=" + _.def.source + ")")
                    .getRegex()),
                (_._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
                (_._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
                (_.html = k(_.html, "i")
                    .replace("comment", _._comment)
                    .replace("tag", _._tag)
                    .replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
                    .getRegex()),
                (_.lheading = k(_.lheading).replace(/bull/g, _.bullet).getRegex()),
                (_.paragraph = k(_._paragraph).replace("hr", _.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex()),
                (_.blockquote = k(_.blockquote).replace("paragraph", _.paragraph).getRegex()),
                (_.normal = { ..._ }),
                (_.gfm = { ..._.normal, table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" }),
                (_.gfm.table = k(_.gfm.table).replace("hr", _.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex()),
                (_.gfm.paragraph = k(_._paragraph).replace("hr", _.hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", _.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _._tag).getRegex()),
                (_.pedantic = { ..._.normal, html: k("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", _._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: m, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(_.normal._paragraph).replace("hr", _.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", _.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() });
            const $ = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: m, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: m, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^((?![*_])[\spunctuation])/, _punctuation: "\\p{P}$+<=>`^|~" };
            ($.punctuation = k($.punctuation, "u")
                .replace(/punctuation/g, $._punctuation)
                .getRegex()),
                ($.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g),
                ($.anyPunctuation = /\\[punct]/g),
                ($._escapes = /\\([punct])/g),
                ($._comment = k(_._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex()),
                ($.emStrong.lDelim = k($.emStrong.lDelim, "u").replace(/punct/g, $._punctuation).getRegex()),
                ($.emStrong.rDelimAst = k($.emStrong.rDelimAst, "gu").replace(/punct/g, $._punctuation).getRegex()),
                ($.emStrong.rDelimUnd = k($.emStrong.rDelimUnd, "gu").replace(/punct/g, $._punctuation).getRegex()),
                ($.anyPunctuation = k($.anyPunctuation, "gu").replace(/punct/g, $._punctuation).getRegex()),
                ($._escapes = k($._escapes, "gu").replace(/punct/g, $._punctuation).getRegex()),
                ($._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
                ($._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
                ($.autolink = k($.autolink).replace("scheme", $._scheme).replace("email", $._email).getRegex()),
                ($._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
                ($.tag = k($.tag).replace("comment", $._comment).replace("attribute", $._attribute).getRegex()),
                ($._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
                ($._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
                ($._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
                ($.link = k($.link).replace("label", $._label).replace("href", $._href).replace("title", $._title).getRegex()),
                ($.reflink = k($.reflink).replace("label", $._label).replace("ref", _._label).getRegex()),
                ($.nolink = k($.nolink).replace("ref", _._label).getRegex()),
                ($.reflinkSearch = k($.reflinkSearch, "g").replace("reflink", $.reflink).replace("nolink", $.nolink).getRegex()),
                ($.normal = { ...$ }),
                ($.pedantic = {
                    ...$.normal,
                    strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g },
                    em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g },
                    link: k(/^!?\[(label)\]\((.*?)\)/)
                        .replace("label", $._label)
                        .getRegex(),
                    reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                        .replace("label", $._label)
                        .getRegex(),
                }),
                ($.gfm = { ...$.normal, escape: k($.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }),
                ($.gfm.url = k($.gfm.url, "i").replace("email", $.gfm._extended_email).getRegex()),
                ($.breaks = {
                    ...$.gfm,
                    br: k($.br).replace("{2,}", "*").getRegex(),
                    text: k($.gfm.text)
                        .replace("\\b_", "\\b_| {2,}\\n")
                        .replace(/\{2,\}/g, "*")
                        .getRegex(),
                });
            class z {
                tokens;
                options;
                state;
                tokenizer;
                inlineQueue;
                constructor(e) {
                    (this.tokens = []), (this.tokens.links = Object.create(null)), (this.options = e || r), (this.options.tokenizer = this.options.tokenizer || new y()), (this.tokenizer = this.options.tokenizer), (this.tokenizer.options = this.options), (this.tokenizer.lexer = this), (this.inlineQueue = []), (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
                    const t = { block: _.normal, inline: $.normal };
                    this.options.pedantic ? ((t.block = _.pedantic), (t.inline = $.pedantic)) : this.options.gfm && ((t.block = _.gfm), this.options.breaks ? (t.inline = $.breaks) : (t.inline = $.gfm)), (this.tokenizer.rules = t);
                }
                static get rules() {
                    return { block: _, inline: $ };
                }
                static lex(e, t) {
                    return new z(t).lex(e);
                }
                static lexInline(e, t) {
                    return new z(t).inlineTokens(e);
                }
                lex(e) {
                    let t;
                    for (e = e.replace(/\r\n|\r/g, "\n"), this.blockTokens(e, this.tokens); (t = this.inlineQueue.shift()); ) this.inlineTokens(t.src, t.tokens);
                    return this.tokens;
                }
                blockTokens(e, t = []) {
                    let n, s, r, i;
                    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (e, t, n) => t + "    ".repeat(n.length)); e; )
                        if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((s) => !!(n = s.call({ lexer: this }, e, t)) && ((e = e.substring(n.raw.length)), t.push(n), !0))))
                            if ((n = this.tokenizer.space(e))) (e = e.substring(n.raw.length)), 1 === n.raw.length && t.length > 0 ? (t[t.length - 1].raw += "\n") : t.push(n);
                            else if ((n = this.tokenizer.code(e))) (e = e.substring(n.raw.length)), (s = t[t.length - 1]), !s || ("paragraph" !== s.type && "text" !== s.type) ? t.push(n) : ((s.raw += "\n" + n.raw), (s.text += "\n" + n.text), (this.inlineQueue[this.inlineQueue.length - 1].src = s.text));
                            else if ((n = this.tokenizer.fences(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.heading(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.hr(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.blockquote(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.list(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.html(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.def(e))) (e = e.substring(n.raw.length)), (s = t[t.length - 1]), !s || ("paragraph" !== s.type && "text" !== s.type) ? this.tokens.links[n.tag] || (this.tokens.links[n.tag] = { href: n.href, title: n.title }) : ((s.raw += "\n" + n.raw), (s.text += "\n" + n.raw), (this.inlineQueue[this.inlineQueue.length - 1].src = s.text));
                            else if ((n = this.tokenizer.table(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.lheading(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else {
                                if (((r = e), this.options.extensions && this.options.extensions.startBlock)) {
                                    let t = 1 / 0;
                                    const n = e.slice(1);
                                    let s;
                                    this.options.extensions.startBlock.forEach((e) => {
                                        (s = e.call({ lexer: this }, n)), "number" == typeof s && s >= 0 && (t = Math.min(t, s));
                                    }),
                                        t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                                }
                                if (this.state.top && (n = this.tokenizer.paragraph(r))) (s = t[t.length - 1]), i && "paragraph" === s.type ? ((s.raw += "\n" + n.raw), (s.text += "\n" + n.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = s.text)) : t.push(n), (i = r.length !== e.length), (e = e.substring(n.raw.length));
                                else if ((n = this.tokenizer.text(e))) (e = e.substring(n.raw.length)), (s = t[t.length - 1]), s && "text" === s.type ? ((s.raw += "\n" + n.raw), (s.text += "\n" + n.text), this.inlineQueue.pop(), (this.inlineQueue[this.inlineQueue.length - 1].src = s.text)) : t.push(n);
                                else if (e) {
                                    const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (this.options.silent) break;
                                    throw new Error(t);
                                }
                            }
                    return (this.state.top = !0), t;
                }
                inline(e, t = []) {
                    return this.inlineQueue.push({ src: e, tokens: t }), t;
                }
                inlineTokens(e, t = []) {
                    let n,
                        s,
                        r,
                        i,
                        l,
                        a,
                        o = e;
                    if (this.tokens.links) {
                        const e = Object.keys(this.tokens.links);
                        if (e.length > 0) for (; null != (i = this.tokenizer.rules.inline.reflinkSearch.exec(o)); ) e.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
                    }
                    for (; null != (i = this.tokenizer.rules.inline.blockSkip.exec(o)); ) o = o.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                    for (; null != (i = this.tokenizer.rules.inline.anyPunctuation.exec(o)); ) o = o.slice(0, i.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
                    for (; e; )
                        if ((l || (a = ""), (l = !1), !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((s) => !!(n = s.call({ lexer: this }, e, t)) && ((e = e.substring(n.raw.length)), t.push(n), !0)))))
                            if ((n = this.tokenizer.escape(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.tag(e))) (e = e.substring(n.raw.length)), (s = t[t.length - 1]), s && "text" === n.type && "text" === s.type ? ((s.raw += n.raw), (s.text += n.text)) : t.push(n);
                            else if ((n = this.tokenizer.link(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.reflink(e, this.tokens.links))) (e = e.substring(n.raw.length)), (s = t[t.length - 1]), s && "text" === n.type && "text" === s.type ? ((s.raw += n.raw), (s.text += n.text)) : t.push(n);
                            else if ((n = this.tokenizer.emStrong(e, o, a))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.codespan(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.br(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.del(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if ((n = this.tokenizer.autolink(e))) (e = e.substring(n.raw.length)), t.push(n);
                            else if (this.state.inLink || !(n = this.tokenizer.url(e))) {
                                if (((r = e), this.options.extensions && this.options.extensions.startInline)) {
                                    let t = 1 / 0;
                                    const n = e.slice(1);
                                    let s;
                                    this.options.extensions.startInline.forEach((e) => {
                                        (s = e.call({ lexer: this }, n)), "number" == typeof s && s >= 0 && (t = Math.min(t, s));
                                    }),
                                        t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                                }
                                if ((n = this.tokenizer.inlineText(r))) (e = e.substring(n.raw.length)), "_" !== n.raw.slice(-1) && (a = n.raw.slice(-1)), (l = !0), (s = t[t.length - 1]), s && "text" === s.type ? ((s.raw += n.raw), (s.text += n.text)) : t.push(n);
                                else if (e) {
                                    const t = "Infinite loop on byte: " + e.charCodeAt(0);
                                    if (this.options.silent) break;
                                    throw new Error(t);
                                }
                            } else (e = e.substring(n.raw.length)), t.push(n);
                    return t;
                }
            }
            class T {
                options;
                constructor(e) {
                    this.options = e || r;
                }
                code(e, t, n) {
                    const s = (t || "").match(/^\S*/)?.[0];
                    return (e = e.replace(/\n$/, "") + "\n"), s ? '<pre><code class="language-' + u(s) + '">' + (n ? e : u(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : u(e, !0)) + "</code></pre>\n";
                }
                blockquote(e) {
                    return `<blockquote>\n${e}</blockquote>\n`;
                }
                html(e, t) {
                    return e;
                }
                heading(e, t, n) {
                    return `<h${t}>${e}</h${t}>\n`;
                }
                hr() {
                    return "<hr>\n";
                }
                list(e, t, n) {
                    const s = t ? "ol" : "ul";
                    return "<" + s + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + s + ">\n";
                }
                listitem(e, t, n) {
                    return `<li>${e}</li>\n`;
                }
                checkbox(e) {
                    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
                }
                paragraph(e) {
                    return `<p>${e}</p>\n`;
                }
                table(e, t) {
                    return t && (t = `<tbody>${t}</tbody>`), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
                }
                tablerow(e) {
                    return `<tr>\n${e}</tr>\n`;
                }
                tablecell(e, t) {
                    const n = t.header ? "th" : "td";
                    return (t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e + `</${n}>\n`;
                }
                strong(e) {
                    return `<strong>${e}</strong>`;
                }
                em(e) {
                    return `<em>${e}</em>`;
                }
                codespan(e) {
                    return `<code>${e}</code>`;
                }
                br() {
                    return "<br>";
                }
                del(e) {
                    return `<del>${e}</del>`;
                }
                link(e, t, n) {
                    const s = f(e);
                    if (null === s) return n;
                    let r = '<a href="' + (e = s) + '"';
                    return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>"), r;
                }
                image(e, t, n) {
                    const s = f(e);
                    if (null === s) return n;
                    let r = `<img src="${(e = s)}" alt="${n}"`;
                    return t && (r += ` title="${t}"`), (r += ">"), r;
                }
                text(e) {
                    return e;
                }
            }
            class S {
                strong(e) {
                    return e;
                }
                em(e) {
                    return e;
                }
                codespan(e) {
                    return e;
                }
                del(e) {
                    return e;
                }
                html(e) {
                    return e;
                }
                text(e) {
                    return e;
                }
                link(e, t, n) {
                    return "" + n;
                }
                image(e, t, n) {
                    return "" + n;
                }
                br() {
                    return "";
                }
            }
            class R {
                options;
                renderer;
                textRenderer;
                constructor(e) {
                    (this.options = e || r), (this.options.renderer = this.options.renderer || new T()), (this.renderer = this.options.renderer), (this.renderer.options = this.options), (this.textRenderer = new S());
                }
                static parse(e, t) {
                    return new R(t).parse(e);
                }
                static parseInline(e, t) {
                    return new R(t).parseInline(e);
                }
                parse(e, t = !0) {
                    let n = "";
                    for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                            const e = r,
                                t = this.options.extensions.renderers[e.type].call({ parser: this }, e);
                            if (!1 !== t || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(e.type)) {
                                n += t || "";
                                continue;
                            }
                        }
                        switch (r.type) {
                            case "space":
                                continue;
                            case "hr":
                                n += this.renderer.hr();
                                continue;
                            case "heading": {
                                const e = r;
                                n += this.renderer.heading(
                                    this.parseInline(e.tokens),
                                    e.depth,
                                    this.parseInline(e.tokens, this.textRenderer).replace(d, (e, t) => ("colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? ("x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1))) : "")),
                                );
                                continue;
                            }
                            case "code": {
                                const e = r;
                                n += this.renderer.code(e.text, e.lang, !!e.escaped);
                                continue;
                            }
                            case "table": {
                                const e = r;
                                let t = "",
                                    s = "";
                                for (let t = 0; t < e.header.length; t++) s += this.renderer.tablecell(this.parseInline(e.header[t].tokens), { header: !0, align: e.align[t] });
                                t += this.renderer.tablerow(s);
                                let i = "";
                                for (let t = 0; t < e.rows.length; t++) {
                                    const n = e.rows[t];
                                    s = "";
                                    for (let t = 0; t < n.length; t++) s += this.renderer.tablecell(this.parseInline(n[t].tokens), { header: !1, align: e.align[t] });
                                    i += this.renderer.tablerow(s);
                                }
                                n += this.renderer.table(t, i);
                                continue;
                            }
                            case "blockquote": {
                                const e = r,
                                    t = this.parse(e.tokens);
                                n += this.renderer.blockquote(t);
                                continue;
                            }
                            case "list": {
                                const e = r,
                                    t = e.ordered,
                                    s = e.start,
                                    i = e.loose;
                                let l = "";
                                for (let t = 0; t < e.items.length; t++) {
                                    const n = e.items[t],
                                        s = n.checked,
                                        r = n.task;
                                    let a = "";
                                    if (n.task) {
                                        const e = this.renderer.checkbox(!!s);
                                        i ? (n.tokens.length > 0 && "paragraph" === n.tokens[0].type ? ((n.tokens[0].text = e + " " + n.tokens[0].text), n.tokens[0].tokens && n.tokens[0].tokens.length > 0 && "text" === n.tokens[0].tokens[0].type && (n.tokens[0].tokens[0].text = e + " " + n.tokens[0].tokens[0].text)) : n.tokens.unshift({ type: "text", text: e + " " })) : (a += e + " ");
                                    }
                                    (a += this.parse(n.tokens, i)), (l += this.renderer.listitem(a, r, !!s));
                                }
                                n += this.renderer.list(l, t, s);
                                continue;
                            }
                            case "html": {
                                const e = r;
                                n += this.renderer.html(e.text, e.block);
                                continue;
                            }
                            case "paragraph": {
                                const e = r;
                                n += this.renderer.paragraph(this.parseInline(e.tokens));
                                continue;
                            }
                            case "text": {
                                let i = r,
                                    l = i.tokens ? this.parseInline(i.tokens) : i.text;
                                for (; s + 1 < e.length && "text" === e[s + 1].type; ) (i = e[++s]), (l += "\n" + (i.tokens ? this.parseInline(i.tokens) : i.text));
                                n += t ? this.renderer.paragraph(l) : l;
                                continue;
                            }
                            default: {
                                const e = 'Token with "' + r.type + '" type was not found.';
                                if (this.options.silent) return "";
                                throw new Error(e);
                            }
                        }
                    }
                    return n;
                }
                parseInline(e, t) {
                    t = t || this.renderer;
                    let n = "";
                    for (let s = 0; s < e.length; s++) {
                        const r = e[s];
                        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type]) {
                            const e = this.options.extensions.renderers[r.type].call({ parser: this }, r);
                            if (!1 !== e || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type)) {
                                n += e || "";
                                continue;
                            }
                        }
                        switch (r.type) {
                            case "escape": {
                                const e = r;
                                n += t.text(e.text);
                                break;
                            }
                            case "html": {
                                const e = r;
                                n += t.html(e.text);
                                break;
                            }
                            case "link": {
                                const e = r;
                                n += t.link(e.href, e.title, this.parseInline(e.tokens, t));
                                break;
                            }
                            case "image": {
                                const e = r;
                                n += t.image(e.href, e.title, e.text);
                                break;
                            }
                            case "strong": {
                                const e = r;
                                n += t.strong(this.parseInline(e.tokens, t));
                                break;
                            }
                            case "em": {
                                const e = r;
                                n += t.em(this.parseInline(e.tokens, t));
                                break;
                            }
                            case "codespan": {
                                const e = r;
                                n += t.codespan(e.text);
                                break;
                            }
                            case "br":
                                n += t.br();
                                break;
                            case "del": {
                                const e = r;
                                n += t.del(this.parseInline(e.tokens, t));
                                break;
                            }
                            case "text": {
                                const e = r;
                                n += t.text(e.text);
                                break;
                            }
                            default: {
                                const e = 'Token with "' + r.type + '" type was not found.';
                                if (this.options.silent) return "";
                                throw new Error(e);
                            }
                        }
                    }
                    return n;
                }
            }
            class v {
                options;
                constructor(e) {
                    this.options = e || r;
                }
                static passThroughHooks = new Set(["preprocess", "postprocess"]);
                preprocess(e) {
                    return e;
                }
                postprocess(e) {
                    return e;
                }
            }
            const A = new (class {
                defaults = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
                options = this.setOptions;
                parse = this.#e(z.lex, R.parse);
                parseInline = this.#e(z.lexInline, R.parseInline);
                Parser = R;
                Renderer = T;
                TextRenderer = S;
                Lexer = z;
                Tokenizer = y;
                Hooks = v;
                constructor(...e) {
                    this.use(...e);
                }
                walkTokens(e, t) {
                    let n = [];
                    for (const s of e)
                        switch (((n = n.concat(t.call(this, s))), s.type)) {
                            case "table": {
                                const e = s;
                                for (const s of e.header) n = n.concat(this.walkTokens(s.tokens, t));
                                for (const s of e.rows) for (const e of s) n = n.concat(this.walkTokens(e.tokens, t));
                                break;
                            }
                            case "list": {
                                const e = s;
                                n = n.concat(this.walkTokens(e.items, t));
                                break;
                            }
                            default: {
                                const e = s;
                                this.defaults.extensions?.childTokens?.[e.type]
                                    ? this.defaults.extensions.childTokens[e.type].forEach((s) => {
                                          n = n.concat(this.walkTokens(e[s], t));
                                      })
                                    : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
                            }
                        }
                    return n;
                }
                use(...e) {
                    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
                    return (
                        e.forEach((e) => {
                            const n = { ...e };
                            if (
                                ((n.async = this.defaults.async || n.async || !1),
                                e.extensions &&
                                    (e.extensions.forEach((e) => {
                                        if (!e.name) throw new Error("extension name required");
                                        if ("renderer" in e) {
                                            const n = t.renderers[e.name];
                                            t.renderers[e.name] = n
                                                ? function (...t) {
                                                      let s = e.renderer.apply(this, t);
                                                      return !1 === s && (s = n.apply(this, t)), s;
                                                  }
                                                : e.renderer;
                                        }
                                        if ("tokenizer" in e) {
                                            if (!e.level || ("block" !== e.level && "inline" !== e.level)) throw new Error("extension level must be 'block' or 'inline'");
                                            const n = t[e.level];
                                            n ? n.unshift(e.tokenizer) : (t[e.level] = [e.tokenizer]), e.start && ("block" === e.level ? (t.startBlock ? t.startBlock.push(e.start) : (t.startBlock = [e.start])) : "inline" === e.level && (t.startInline ? t.startInline.push(e.start) : (t.startInline = [e.start])));
                                        }
                                        "childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
                                    }),
                                    (n.extensions = t)),
                                e.renderer)
                            ) {
                                const t = this.defaults.renderer || new T(this.defaults);
                                for (const n in e.renderer) {
                                    const s = e.renderer[n],
                                        r = n,
                                        i = t[r];
                                    t[r] = (...e) => {
                                        let n = s.apply(t, e);
                                        return !1 === n && (n = i.apply(t, e)), n || "";
                                    };
                                }
                                n.renderer = t;
                            }
                            if (e.tokenizer) {
                                const t = this.defaults.tokenizer || new y(this.defaults);
                                for (const n in e.tokenizer) {
                                    const s = e.tokenizer[n],
                                        r = n,
                                        i = t[r];
                                    t[r] = (...e) => {
                                        let n = s.apply(t, e);
                                        return !1 === n && (n = i.apply(t, e)), n;
                                    };
                                }
                                n.tokenizer = t;
                            }
                            if (e.hooks) {
                                const t = this.defaults.hooks || new v();
                                for (const n in e.hooks) {
                                    const s = e.hooks[n],
                                        r = n,
                                        i = t[r];
                                    v.passThroughHooks.has(n)
                                        ? (t[r] = (e) => {
                                              if (this.defaults.async) return Promise.resolve(s.call(t, e)).then((e) => i.call(t, e));
                                              const n = s.call(t, e);
                                              return i.call(t, n);
                                          })
                                        : (t[r] = (...e) => {
                                              let n = s.apply(t, e);
                                              return !1 === n && (n = i.apply(t, e)), n;
                                          });
                                }
                                n.hooks = t;
                            }
                            if (e.walkTokens) {
                                const t = this.defaults.walkTokens,
                                    s = e.walkTokens;
                                n.walkTokens = function (e) {
                                    let n = [];
                                    return n.push(s.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
                                };
                            }
                            this.defaults = { ...this.defaults, ...n };
                        }),
                        this
                    );
                }
                setOptions(e) {
                    return (this.defaults = { ...this.defaults, ...e }), this;
                }
                lexer(e, t) {
                    return z.lex(e, t ?? this.defaults);
                }
                parser(e, t) {
                    return R.parse(e, t ?? this.defaults);
                }
                #e(e, t) {
                    return (n, s) => {
                        const r = { ...s },
                            i = { ...this.defaults, ...r };
                        !0 === this.defaults.async && !1 === r.async && (i.silent, (i.async = !0));
                        const l = this.#t(!!i.silent, !!i.async);
                        if (null == n) return l(new Error("marked(): input parameter is undefined or null"));
                        if ("string" != typeof n) return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
                        if ((i.hooks && (i.hooks.options = i), i.async))
                            return Promise.resolve(i.hooks ? i.hooks.preprocess(n) : n)
                                .then((t) => e(t, i))
                                .then((e) => (i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then(() => e) : e))
                                .then((e) => t(e, i))
                                .then((e) => (i.hooks ? i.hooks.postprocess(e) : e))
                                .catch(l);
                        try {
                            i.hooks && (n = i.hooks.preprocess(n));
                            const s = e(n, i);
                            i.walkTokens && this.walkTokens(s, i.walkTokens);
                            let r = t(s, i);
                            return i.hooks && (r = i.hooks.postprocess(r)), r;
                        } catch (e) {
                            return l(e);
                        }
                    };
                }
                #t(e, t) {
                    return (n) => {
                        if (((n.message += "\nPlease report this to https://github.com/markedjs/marked."), e)) {
                            const e = "<p>An error occurred:</p><pre>" + u(n.message + "", !0) + "</pre>";
                            return t ? Promise.resolve(e) : e;
                        }
                        if (t) return Promise.reject(n);
                        throw n;
                    };
                }
            })();
            function I(e, t) {
                return A.parse(e, t);
            }
            (I.options = I.setOptions =
                function (e) {
                    return A.setOptions(e), (I.defaults = A.defaults), i(I.defaults), I;
                }),
                (I.getDefaults = s),
                (I.defaults = r),
                (I.use = function (...e) {
                    return A.use(...e), (I.defaults = A.defaults), i(I.defaults), I;
                }),
                (I.walkTokens = function (e, t) {
                    return A.walkTokens(e, t);
                }),
                (I.parseInline = A.parseInline),
                (I.Parser = R),
                (I.parser = R.parse),
                (I.Renderer = T),
                (I.TextRenderer = S),
                (I.Lexer = z),
                (I.lexer = z.lex),
                (I.Tokenizer = y),
                (I.Hooks = v),
                (I.parse = I);
            I.options, I.setOptions, I.use, I.walkTokens, I.parseInline, R.parse, z.lex;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown.4a0a952a.js.map
