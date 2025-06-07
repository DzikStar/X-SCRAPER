"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Debugger", "icons/IconEye-js"],
    {
        232678: (e, t, n) => {
            n.r(t), n.d(t, { default: () => xe });
            var r = n(202784),
                o = n(154003),
                i = n(522450),
                a = n(666536),
                s = n(443781),
                l = n(251067),
                c = n(576648),
                u = n(325686),
                d = n(370006),
                h = n(138099),
                f = n(786998),
                m = n(143670),
                p = n(392237),
                g = n(939419),
                w = n(782642);
            n(571372);
            const y = (() => {
                let e = 0;
                return () => ((e += 1), `u${`0000${((Math.random() * 36 ** 4) | 0).toString(36)}`.slice(-4)}${e}`);
            })();
            function b(e) {
                const t = [];
                for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
                return t;
            }
            let v = null;
            function E(e = {}) {
                return v || (e.includeStyleProperties ? ((v = e.includeStyleProperties), v) : ((v = b(window.getComputedStyle(document.documentElement))), v));
            }
            function x(e, t) {
                const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
                return n ? parseFloat(n.replace("px", "")) : 0;
            }
            function C(e, t = {}) {
                return {
                    width:
                        t.width ||
                        (function (e) {
                            const t = x(e, "border-left-width"),
                                n = x(e, "border-right-width");
                            return e.clientWidth + t + n;
                        })(e),
                    height:
                        t.height ||
                        (function (e) {
                            const t = x(e, "border-top-width"),
                                n = x(e, "border-bottom-width");
                            return e.clientHeight + t + n;
                        })(e),
                };
            }
            const S = 16384;
            function $(e) {
                return new Promise((t, n) => {
                    const r = new Image();
                    (r.onload = () => {
                        r.decode().then(() => {
                            requestAnimationFrame(() => t(r));
                        });
                    }),
                        (r.onerror = n),
                        (r.crossOrigin = "anonymous"),
                        (r.decoding = "async"),
                        (r.src = e);
                });
            }
            async function T(e, t, n) {
                const r = "http://www.w3.org/2000/svg",
                    o = document.createElementNS(r, "svg"),
                    i = document.createElementNS(r, "foreignObject");
                return (
                    o.setAttribute("width", `${t}`),
                    o.setAttribute("height", `${n}`),
                    o.setAttribute("viewBox", `0 0 ${t} ${n}`),
                    i.setAttribute("width", "100%"),
                    i.setAttribute("height", "100%"),
                    i.setAttribute("x", "0"),
                    i.setAttribute("y", "0"),
                    i.setAttribute("externalResourcesRequired", "true"),
                    o.appendChild(i),
                    i.appendChild(e),
                    (async function (e) {
                        return Promise.resolve()
                            .then(() => new XMLSerializer().serializeToString(e))
                            .then(encodeURIComponent)
                            .then((e) => `data:image/svg+xml;charset=utf-8,${e}`);
                    })(o)
                );
            }
            const _ = (e, t) => {
                if (e instanceof t) return !0;
                const n = Object.getPrototypeOf(e);
                return null !== n && (n.constructor.name === t.name || _(n, t));
            };
            function P(e, t, n, r) {
                const o = `.${e}:${t}`,
                    i = n.cssText
                        ? (function (e) {
                              const t = e.getPropertyValue("content");
                              return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
                          })(n)
                        : (function (e, t) {
                              return E(t)
                                  .map((t) => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`)
                                  .join(" ");
                          })(n, r);
                return document.createTextNode(`${o}{${i}}`);
            }
            function R(e, t, n, r) {
                const o = window.getComputedStyle(e, n),
                    i = o.getPropertyValue("content");
                if ("" === i || "none" === i) return;
                const a = y();
                try {
                    t.className = `${t.className} ${a}`;
                } catch (e) {
                    return;
                }
                const s = document.createElement("style");
                s.appendChild(P(a, n, o, r)), t.appendChild(s);
            }
            const A = "application/font-woff",
                k = "image/jpeg",
                Z = { woff: A, woff2: A, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: k, jpeg: k, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
            function L(e) {
                const t = (function (e) {
                    const t = /\.([^./]*?)$/g.exec(e);
                    return t ? t[1] : "";
                })(e).toLowerCase();
                return Z[t] || "";
            }
            function I(e) {
                return -1 !== e.search(/^(data:)/);
            }
            function M(e, t) {
                return `data:${t};base64,${e}`;
            }
            async function D(e, t, n) {
                const r = await fetch(e, t);
                if (404 === r.status) throw new Error(`Resource "${r.url}" not found`);
                const o = await r.blob();
                return new Promise((e, t) => {
                    const i = new FileReader();
                    (i.onerror = t),
                        (i.onloadend = () => {
                            try {
                                e(n({ res: r, result: i.result }));
                            } catch (e) {
                                t(e);
                            }
                        }),
                        i.readAsDataURL(o);
                });
            }
            const F = {};
            async function H(e, t, n) {
                const r = (function (e, t, n) {
                    let r = e.replace(/\?.*/, "");
                    return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
                })(e, t, n.includeQueryParams);
                if (null != F[r]) return F[r];
                let o;
                n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
                try {
                    const r = await D(
                        e,
                        n.fetchRequestInit,
                        ({ res: e, result: n }) => (
                            t || (t = e.headers.get("Content-Type") || ""),
                            (function (e) {
                                return e.split(/,/)[1];
                            })(n)
                        ),
                    );
                    o = M(r, t);
                } catch (t) {
                    o = n.imagePlaceholder || "";
                    let r = `Failed to fetch resource: ${e}`;
                    t && (r = "string" == typeof t ? t : t.message);
                }
                return (F[r] = o), o;
            }
            async function N(e, t) {
                return _(e, HTMLCanvasElement)
                    ? (async function (e) {
                          const t = e.toDataURL();
                          return "data:," === t ? e.cloneNode(!1) : $(t);
                      })(e)
                    : _(e, HTMLVideoElement)
                      ? (async function (e, t) {
                            if (e.currentSrc) {
                                const t = document.createElement("canvas"),
                                    n = t.getContext("2d");
                                return (t.width = e.clientWidth), (t.height = e.clientHeight), null == n || n.drawImage(e, 0, 0, t.width, t.height), $(t.toDataURL());
                            }
                            const n = e.poster,
                                r = L(n);
                            return $(await H(n, r, t));
                        })(e, t)
                      : _(e, HTMLIFrameElement)
                        ? (async function (e, t) {
                              var n;
                              try {
                                  if (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) return await V(e.contentDocument.body, t, !0);
                              } catch (e) {}
                              return e.cloneNode(!1);
                          })(e, t)
                        : e.cloneNode(z(e));
            }
            const B = (e) => null != e.tagName && "SLOT" === e.tagName.toUpperCase(),
                z = (e) => null != e.tagName && "SVG" === e.tagName.toUpperCase();
            function O(e, t, n) {
                return (
                    _(t, Element) &&
                        ((function (e, t, n) {
                            const r = t.style;
                            if (!r) return;
                            const o = window.getComputedStyle(e);
                            o.cssText
                                ? ((r.cssText = o.cssText), (r.transformOrigin = o.transformOrigin))
                                : E(n).forEach((n) => {
                                      let i = o.getPropertyValue(n);
                                      if ("font-size" === n && i.endsWith("px")) {
                                          const e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1;
                                          i = `${e}px`;
                                      }
                                      _(e, HTMLIFrameElement) && "display" === n && "inline" === i && (i = "block"), "d" === n && t.getAttribute("d") && (i = `path(${t.getAttribute("d")})`), r.setProperty(n, i, o.getPropertyPriority(n));
                                  });
                        })(e, t, n),
                        (function (e, t, n) {
                            R(e, t, ":before", n), R(e, t, ":after", n);
                        })(e, t, n),
                        (function (e, t) {
                            _(e, HTMLTextAreaElement) && (t.innerHTML = e.value), _(e, HTMLInputElement) && t.setAttribute("value", e.value);
                        })(e, t),
                        (function (e, t) {
                            if (_(e, HTMLSelectElement)) {
                                const n = t,
                                    r = Array.from(n.children).find((t) => e.value === t.getAttribute("value"));
                                r && r.setAttribute("selected", "");
                            }
                        })(e, t)),
                    t
                );
            }
            async function V(e, t, n) {
                return n || !t.filter || t.filter(e)
                    ? Promise.resolve(e)
                          .then((e) => N(e, t))
                          .then((n) =>
                              (async function (e, t, n) {
                                  var r, o;
                                  if (z(t)) return t;
                                  let i = [];
                                  return (
                                      (i = B(e) && e.assignedNodes ? b(e.assignedNodes()) : _(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body) ? b(e.contentDocument.body.childNodes) : b((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes)),
                                      0 === i.length ||
                                          _(e, HTMLVideoElement) ||
                                          (await i.reduce(
                                              (e, r) =>
                                                  e
                                                      .then(() => V(r, n))
                                                      .then((e) => {
                                                          e && t.appendChild(e);
                                                      }),
                                              Promise.resolve(),
                                          )),
                                      t
                                  );
                              })(e, n, t),
                          )
                          .then((n) => O(e, n, t))
                          .then((e) =>
                              (async function (e, t) {
                                  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
                                  if (0 === n.length) return e;
                                  const r = {};
                                  for (let o = 0; o < n.length; o++) {
                                      const i = n[o].getAttribute("xlink:href");
                                      if (i) {
                                          const n = e.querySelector(i),
                                              o = document.querySelector(i);
                                          n || !o || r[i] || (r[i] = await V(o, t, !0));
                                      }
                                  }
                                  const o = Object.values(r);
                                  if (o.length) {
                                      const t = "http://www.w3.org/1999/xhtml",
                                          n = document.createElementNS(t, "svg");
                                      n.setAttribute("xmlns", t), (n.style.position = "absolute"), (n.style.width = "0"), (n.style.height = "0"), (n.style.overflow = "hidden"), (n.style.display = "none");
                                      const r = document.createElementNS(t, "defs");
                                      n.appendChild(r);
                                      for (let e = 0; e < o.length; e++) r.appendChild(o[e]);
                                      e.appendChild(n);
                                  }
                                  return e;
                              })(e, t),
                          )
                    : null;
            }
            const j = /url\((['"]?)([^'"]+?)\1\)/g,
                q = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                W = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
            async function U(e, t, n, r, o) {
                try {
                    const i = n
                            ? (function (e, t) {
                                  if (e.match(/^[a-z]+:\/\//i)) return e;
                                  if (e.match(/^\/\//)) return window.location.protocol + e;
                                  if (e.match(/^[a-z]+:/i)) return e;
                                  const n = document.implementation.createHTMLDocument(),
                                      r = n.createElement("base"),
                                      o = n.createElement("a");
                                  return n.head.appendChild(r), n.body.appendChild(o), t && (r.href = t), (o.href = e), o.href;
                              })(t, n)
                            : t,
                        a = L(t);
                    let s;
                    if (o) {
                        s = M(await o(i), a);
                    } else s = await H(i, a, r);
                    return e.replace(
                        (function (e) {
                            const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                            return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
                        })(t),
                        `$1${s}$3`,
                    );
                } catch (e) {}
                return e;
            }
            function X(e) {
                return -1 !== e.search(j);
            }
            async function Y(e, t, n) {
                if (!X(e)) return e;
                const r = (function (e, { preferredFontFormat: t }) {
                        return t
                            ? e.replace(W, (e) => {
                                  for (;;) {
                                      const [n, , r] = q.exec(e) || [];
                                      if (!r) return "";
                                      if (r === t) return `src: ${n};`;
                                  }
                              })
                            : e;
                    })(e, n),
                    o = (function (e) {
                        const t = [];
                        return e.replace(j, (e, n, r) => (t.push(r), e)), t.filter((e) => !I(e));
                    })(r);
                return o.reduce((e, r) => e.then((e) => U(e, r, t, n)), Promise.resolve(r));
            }
            async function K(e, t, n) {
                var r;
                const o = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
                if (o) {
                    const r = await Y(o, null, n);
                    return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
                }
                return !1;
            }
            async function G(e, t) {
                _(e, Element) &&
                    (await (async function (e, t) {
                        (await K("background", e, t)) || (await K("background-image", e, t)), (await K("mask", e, t)) || (await K("-webkit-mask", e, t)) || (await K("mask-image", e, t)) || (await K("-webkit-mask-image", e, t));
                    })(e, t),
                    await (async function (e, t) {
                        const n = _(e, HTMLImageElement);
                        if ((!n || I(e.src)) && (!_(e, SVGImageElement) || I(e.href.baseVal))) return;
                        const r = n ? e.src : e.href.baseVal,
                            o = await H(r, L(r), t);
                        await new Promise((r, i) => {
                            (e.onload = r),
                                (e.onerror = t.onImageErrorHandler
                                    ? (...e) => {
                                          try {
                                              r(t.onImageErrorHandler(...e));
                                          } catch (e) {
                                              i(e);
                                          }
                                      }
                                    : i);
                            const a = e;
                            a.decode && (a.decode = r), "lazy" === a.loading && (a.loading = "eager"), n ? ((e.srcset = ""), (e.src = o)) : (e.href.baseVal = o);
                        });
                    })(e, t),
                    await (async function (e, t) {
                        const n = b(e.childNodes).map((e) => G(e, t));
                        await Promise.all(n).then(() => e);
                    })(e, t));
            }
            const J = {};
            async function Q(e) {
                let t = J[e];
                if (null != t) return t;
                const n = await fetch(e);
                return (t = { url: e, cssText: await n.text() }), (J[e] = t), t;
            }
            async function ee(e, t) {
                let n = e.cssText;
                const r = /url\(["']?([^"')]+)["']?\)/g,
                    o = (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
                        let i = o.replace(r, "$1");
                        return i.startsWith("https://") || (i = new URL(i, e.url).href), D(i, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(o, `url(${e})`)), [o, e]));
                    });
                return Promise.all(o).then(() => n);
            }
            function te(e) {
                if (null == e) return [];
                const t = [];
                let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
                const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
                for (;;) {
                    const e = r.exec(n);
                    if (null === e) break;
                    t.push(e[0]);
                }
                n = n.replace(r, "");
                const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
                    i = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
                for (;;) {
                    let e = o.exec(n);
                    if (null === e) {
                        if (((e = i.exec(n)), null === e)) break;
                        o.lastIndex = i.lastIndex;
                    } else i.lastIndex = o.lastIndex;
                    t.push(e[0]);
                }
                return t;
            }
            async function ne(e, t) {
                if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
                const n = b(e.ownerDocument.styleSheets),
                    r = await (async function (e, t) {
                        const n = [],
                            r = [];
                        return (
                            e.forEach((n) => {
                                if ("cssRules" in n)
                                    try {
                                        b(n.cssRules || []).forEach((e, o) => {
                                            if (e.type === CSSRule.IMPORT_RULE) {
                                                let i = o + 1;
                                                const a = Q(e.href)
                                                    .then((e) => ee(e, t))
                                                    .then((e) =>
                                                        te(e).forEach((e) => {
                                                            try {
                                                                n.insertRule(e, e.startsWith("@import") ? (i += 1) : n.cssRules.length);
                                                            } catch (e) {}
                                                        }),
                                                    )
                                                    .catch((e) => {});
                                                r.push(a);
                                            }
                                        });
                                    } catch (o) {
                                        const i = e.find((e) => null == e.href) || document.styleSheets[0];
                                        null != n.href &&
                                            r.push(
                                                Q(n.href)
                                                    .then((e) => ee(e, t))
                                                    .then((e) =>
                                                        te(e).forEach((e) => {
                                                            i.insertRule(e, i.cssRules.length);
                                                        }),
                                                    )
                                                    .catch((e) => {}),
                                            );
                                    }
                            }),
                            Promise.all(r).then(
                                () => (
                                    e.forEach((e) => {
                                        if ("cssRules" in e)
                                            try {
                                                b(e.cssRules || []).forEach((e) => {
                                                    n.push(e);
                                                });
                                            } catch (e) {}
                                    }),
                                    n
                                ),
                            )
                        );
                    })(n, t);
                return (function (e) {
                    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => X(e.style.getPropertyValue("src")));
                })(r);
            }
            function re(e) {
                return e.trim().replace(/["']/g, "");
            }
            async function oe(e, t) {
                const n = await ne(e, t),
                    r = (function (e) {
                        const t = new Set();
                        return (
                            (function e(n) {
                                (n.style.fontFamily || getComputedStyle(n).fontFamily).split(",").forEach((e) => {
                                    t.add(re(e));
                                }),
                                    Array.from(n.children).forEach((t) => {
                                        t instanceof HTMLElement && e(t);
                                    });
                            })(e),
                            t
                        );
                    })(e);
                return (
                    await Promise.all(
                        n
                            .filter((e) => r.has(re(e.style.fontFamily)))
                            .map((e) => {
                                const n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                                return Y(e.cssText, n, t);
                            }),
                    )
                ).join("\n");
            }
            async function ie(e, t = {}) {
                const { width: n, height: r } = C(e, t),
                    o = await V(e, t, !0);
                await (async function (e, t) {
                    const n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await oe(e, t);
                    if (n) {
                        const t = document.createElement("style"),
                            r = document.createTextNode(n);
                        t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
                    }
                })(o, t),
                    await G(o, t),
                    (function (e, t) {
                        const { style: n } = e;
                        t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
                        const r = t.style;
                        null != r &&
                            Object.keys(r).forEach((e) => {
                                n[e] = r[e];
                            });
                    })(o, t);
                return await T(o, n, r);
            }
            async function ae(e, t = {}) {
                const { width: n, height: r } = C(e, t),
                    o = await ie(e, t),
                    i = await $(o),
                    a = document.createElement("canvas"),
                    s = a.getContext("2d"),
                    l =
                        t.pixelRatio ||
                        (function () {
                            let e, t;
                            try {
                                t = process;
                            } catch (e) {}
                            const n = t && t.env ? t.env.devicePixelRatio : null;
                            return n && ((e = parseInt(n, 10)), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
                        })(),
                    c = t.canvasWidth || n,
                    u = t.canvasHeight || r;
                return (
                    (a.width = c * l),
                    (a.height = u * l),
                    t.skipAutoScale ||
                        (function (e) {
                            (e.width > S || e.height > S) && (e.width > S && e.height > S ? (e.width > e.height ? ((e.height *= S / e.width), (e.width = S)) : ((e.width *= S / e.height), (e.height = S))) : e.width > S ? ((e.height *= S / e.width), (e.width = S)) : ((e.width *= S / e.height), (e.height = S)));
                        })(a),
                    (a.style.width = `${c}`),
                    (a.style.height = `${u}`),
                    t.backgroundColor && ((s.fillStyle = t.backgroundColor), s.fillRect(0, 0, a.width, a.height)),
                    s.drawImage(i, 0, 0, a.width, a.height),
                    a
                );
            }
            async function se(e, t = {}) {
                const n = await ae(e, t),
                    r = await (function (e, t = {}) {
                        return e.toBlob
                            ? new Promise((n) => {
                                  e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
                              })
                            : new Promise((n) => {
                                  const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]),
                                      o = r.length,
                                      i = new Uint8Array(o);
                                  for (let e = 0; e < o; e += 1) i[e] = r.charCodeAt(e);
                                  n(new Blob([i], { type: t.type ? t.type : "image/png" }));
                              });
                    })(n);
                return r;
            }
            var le = n(466818),
                ce = n(855488),
                ue = n(731708),
                de = n(451566),
                he = n(242454),
                fe = n(40610),
                me = n(323265),
                pe = n(497088),
                ge = n(125363);
            const we = [
                { label: "New bug / triage", value: "new_bug" },
                { label: "QA regression", value: "qa_regression" },
                { label: "Ads", value: "ads" },
                { label: "Security", value: "security" },
                { label: "Timelines", value: "timelines" },
                { label: "UI", value: "ui" },
                { label: "Video", value: "video" },
                { label: "Other", value: "other" },
            ];
            function ye({ onClose: e }) {
                const { featureSwitches: t, viewerUserId: n } = r.useContext(s.rC),
                    o = (0, ge.oR)(),
                    i = (0, w.p)(),
                    [a, c] = r.useState(we[0]),
                    [d, h] = r.useState(""),
                    [f, m] = r.useState(""),
                    [p, g] = r.useState(""),
                    [y, b] = r.useState(!1),
                    [v, E] = r.useState(),
                    x = me.ZP.browserString(),
                    C = me.ZP.getBrowserTagVersion(x),
                    S = me.ZP.osString(),
                    $ = me.ZP.userAgent,
                    T = `${x}, ${C}. ${S} \n\n${$}.`;
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(le.ZP, { label: "Where did we go wrong?", onChange: (e, t) => c(we[t]), options: we, value: a.value }),
                    r.createElement(ce.Z, { label: "Summary", multiline: !0, name: "summary", onChange: (e) => h(e.target.value), style: be.formTextInput, value: d }),
                    r.createElement(ce.Z, { label: "Expected result (optional)", multiline: !0, name: "expected", onChange: (e) => m(e.target.value), style: be.formTextInput, value: f }),
                    r.createElement(ce.Z, { label: "Actual result (optional)", multiline: !0, name: "actual", onChange: (e) => g(e.target.value), style: be.formTextInput, value: p }),
                    r.createElement(
                        u.Z,
                        { style: be.switch },
                        r.createElement(ue.ZP, null, "Attach screenshot (experimental)"),
                        r.createElement(de.Z, {
                            disabled: y,
                            onValueChange: function (e) {
                                e
                                    ? (b(!0),
                                      se(document.body, { filter: (e) => "NOSCRIPT" !== e.tagName && "debugger" !== e.dataset?.testid && "mask" !== e.dataset?.testid, height: document.body.scrollHeight, width: document.body.scrollWidth })
                                          .then((e) => {
                                              E(e);
                                          })
                                          .catch(() => {
                                              i({ text: "Failed to generate screenshot. Please try again" });
                                          })
                                          .finally(() => {
                                              b(!1);
                                          }))
                                    : E();
                            },
                            value: !!v,
                        }),
                    ),
                    r.createElement(he.Z, {
                        color: "primary",
                        disabled: !d.length || y,
                        label: y ? "Loading" : "Submit",
                        onPress: function () {
                            const r = `Bug report: ${a.label}`;
                            let s = `Summary:%0A${d}%0A%0A`;
                            f.length && (s += `Expected:%0A${f}%0A%0A`), p.length && (s += `Actual:%0A${p}%0A%0A`), (s += `User agent:%0A${$}%0A%0A`), l.MK && (s += `Sha:%0A${l.MK}%0A%0A`);
                            const c = JSON.stringify(pe.InMemoryCache.flush()),
                                u = o.getState(),
                                h = JSON.stringify({ entities: u.entities, featureSwitch: { customOverrides: { ...u.featureSwitch.customOverrides }, user: { ...u.featureSwitch.user } }, multiAccount: u.multiAccount, ocf: u.ocf, pinnedTimelines: u.pinnedTimelines, tweetComposer: u.tweetComposer, urt: u.urt }),
                                m = Date.now(),
                                g = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-network-${m}.json`,
                                w = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-state-${m}.json`,
                                y = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-screenshot-${m}.png`;
                            b(!0),
                                Promise.all([
                                    fetch(w, { body: h, credentials: "include", method: "POST" }).then((e) => {
                                        if (!e.ok) throw new Error("state request failed");
                                        return e;
                                    }),
                                    fetch(g, { body: c, credentials: "include", method: "POST" }).then((e) => {
                                        if (!e.ok) throw new Error("network request failed");
                                        return e;
                                    }),
                                    v
                                        ? fetch(y, { body: v, credentials: "include", method: "POST" }).then((e) => {
                                              if (!e.ok) throw new Error("screnshot request failed");
                                              return e;
                                          })
                                        : Promise.resolve(),
                                ])
                                    .then(() => {
                                        const n = t.getStringValue("rweb_debugger_bug_report_email", "");
                                        (s += `Application state:%0A${w}%0A%0A`), (s += `Network requests:%0A${g}%0A%0A`), v && (s += `Screenshot:%0A${y}%0A%0A`), window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${n}&su=${r}&body=${s}`, "_blank"), e();
                                    })
                                    .catch(() => {
                                        i({ text: "Failed to upload data. Please try again" });
                                    })
                                    .finally(() => {
                                        b(!1);
                                    });
                        },
                    }),
                    r.createElement(fe.Z.Primary, { headline: "Device information", text: T, withIcon: !0 }),
                );
            }
            const be = p.default.create((e) => ({ formTextInput: { paddingHorizontal: 0, paddingVertical: 0 }, switch: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" } }));
            function ve({ onClose: e }) {
                const [t, n] = r.useState("home"),
                    o = (0, w.p)(),
                    i = `${l.OB}${l.MK ? ` - ${l.MK}` : ""}`,
                    a = "home" === t ? "Debug" : "Report a bug",
                    s =
                        "home" === t
                            ? r.createElement(d.Z, {
                                  backButtonType: "close",
                                  onClick: function () {
                                      e(), n("home");
                                  },
                              })
                            : r.createElement(d.Z, {
                                  backButtonType: "back",
                                  onClick: function () {
                                      n("home");
                                  },
                              });
                return r.createElement(
                    h.Z,
                    { onMaskClick: e, testID: "debugger", type: "bottom", withMask: !0, withNativeMaskColor: !0 },
                    r.createElement(f.Z, { leftControl: s, title: a, withGutter: !0 }),
                    r.createElement(
                        u.Z,
                        { style: Ee.container },
                        "home" === t &&
                            r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(m.Z, { Icon: g.default, actionText: "Report a bug", onClick: () => n("report-bug") }),
                                r.createElement(m.Z, {
                                    actionText: i,
                                    onClick: function () {
                                        c.Z.setString(i), o({ text: "Copied version to clipboard" });
                                    },
                                    style: Ee.version,
                                }),
                            ),
                        "report-bug" === t && r.createElement(ye, { onClose: e }),
                    ),
                );
            }
            const Ee = p.default.create((e) => ({ container: { padding: e.spaces.space16, gap: e.spaces.space8 }, version: { textAlign: "center" } }));
            function xe({ initialX: e = 8, initialY: t = 200 }) {
                const { featureSwitches: n } = r.useContext(s.rC),
                    [l, c] = r.useState(!1),
                    [u, d] = r.useState(!1),
                    h = r.useRef(null),
                    f = r.useRef({ offsetX: e, offsetY: t, startX: e, startY: t }),
                    m = r.useRef({ x: e, y: t });
                return (
                    r.useEffect(() => {
                        const e = h.current;
                        if (!e) return;
                        function t(t, n) {
                            if (!e) return;
                            const { height: r, width: o } = e.getBoundingClientRect();
                            let i = t - f.current.offsetX,
                                a = n - f.current.offsetY;
                            (i = Math.max(0, Math.min(i, window.innerWidth - o))), (a = Math.max(0, Math.min(a, window.innerHeight - r))), (m.current = { x: i, y: a }), (e.style.left = `${i}px`), (e.style.top = `${a}px`);
                        }
                        function n(e) {
                            t(e.clientX, e.clientY);
                        }
                        function r(e) {
                            t(e.touches[0].clientX, e.touches[0].clientY);
                        }
                        function o(e, t) {
                            c(!1);
                            Math.abs(e - f.current.startX) < 5 && Math.abs(t - f.current.startY) < 5 && d(!0);
                        }
                        function i(e) {
                            o(e.clientX, e.clientY), window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", i);
                        }
                        function s(e) {
                            o(e.changedTouches[0].clientX, e.changedTouches[0].clientY), window.removeEventListener("touchmove", r), window.removeEventListener("touchend", s);
                        }
                        function l(e, t) {
                            (f.current = { offsetX: e - m.current.x, offsetY: t - m.current.y, startX: e, startY: t }), c(!0);
                        }
                        function u(e) {
                            e.preventDefault(), 0 === e.button && (l(e.clientX, e.clientY), window.addEventListener("mousemove", n), window.addEventListener("mouseup", i));
                        }
                        function p(e) {
                            e.preventDefault(), l(e.touches[0].clientX, e.touches[0].clientY), window.addEventListener("touchmove", r), window.addEventListener("touchend", s);
                        }
                        const g = (0, a.Z)(function () {
                            if (!e) return;
                            const { height: t, width: n } = e.getBoundingClientRect(),
                                r = Math.max(0, Math.min(m.current.x, window.innerWidth - n)),
                                o = Math.max(0, Math.min(m.current.y, window.innerHeight - t));
                            (m.current = { x: r, y: o }), (e.style.left = `${r}px`), (e.style.top = `${o}px`);
                        }, 500);
                        return (
                            e.addEventListener("touchstart", p),
                            e.addEventListener("mousedown", u),
                            window.addEventListener("resize", g),
                            () => {
                                e.removeEventListener("mousedown", u), e.removeEventListener("touchstart", p), window.removeEventListener("resize", g);
                            }
                        );
                    }, []),
                    n.isTrue("rweb_debugger_enabled")
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(o.ZP, { "aria-label": "debugger", borderColor: "buttonWhite", icon: r.createElement(i.default, null), ref: h, size: "small", style: { position: "fixed", start: e, top: t, transition: "transform 0.2s", transform: `scale(${l ? "1.2" : "1"})` }, type: "primaryFilled" }),
                              u &&
                                  r.createElement(ve, {
                                      onClose: function () {
                                          d(!1);
                                      },
                                  }),
                          )
                        : null
                );
            }
        },
        497088: (e, t, n) => {
            n.r(t), n.d(t, { InMemoryCache: () => r, networkRequestLog: () => o });
            const r = new (class {
                constructor(e) {
                    (this._capacity = e), (this._cache = new Map());
                }
                _setMostRecentlyUsed(e, t) {
                    this._cache.delete(e), this._cache.set(e, t);
                }
                entries() {
                    return Object.fromEntries(this._cache);
                }
                clear() {
                    this._cache.clear();
                }
                flush() {
                    const e = this.entries();
                    return this.clear(), e;
                }
                get(e) {
                    const t = this._cache.get(e);
                    if (void 0 !== t) return this._setMostRecentlyUsed(e, t), t;
                }
                set(e, t) {
                    if ((this._setMostRecentlyUsed(e, t), this._cache.size > this._capacity)) {
                        const e = this._cache.keys().next().value;
                        void 0 !== e && this._cache.delete(e);
                    }
                }
                delete(e) {
                    this._cache.delete(e);
                }
            })(20);
            function o(e) {
                r.set(Date.now().toString(), e);
            }
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                a = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(392237);
            const u = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: n, ...d }) => {
                    const h = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(i.Z, { style: u.container }, o.createElement(l.Z, (0, r.Z)({}, d, { interactiveStyles: h, style: u.root }), o.createElement(a.ZP, { align: e, color: t }, n)));
                };
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var r = n(202784),
                o = n(325686),
                i = n(487552),
                a = n(302752),
                s = n(183806),
                l = n(731708),
                c = n(950822),
                u = n(224162),
                d = n(392237);
            const h = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                f = (e) => (0, c.Z)("option", e);
            let m = 1;
            class p extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: o } = e.target;
                            t && t(o, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: m, options: p, style: w, testID: y, value: b, withEmptyOption: v } = this.props,
                        { isFocused: E } = this.state,
                        x = l.ZP.getLanguage(),
                        C = void 0 === c ? !!n : c,
                        S = new Set();
                    n && S.add(this._errorID), e && S.add(e), m && S.add(this._helperID);
                    const $ = S.size ? [...S].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === x ? d.default.theme.fontFamilies.japan : "rtl" === e || a.Z.isLocaleRTL(x) ? d.default.theme.fontFamilies.rtl : d.default.theme.fontFamilies.normal;
                            return r.createElement(
                                o.Z,
                                { style: [s.Z.border, g.container, t && s.Z.disabled, E && s.Z.focusedBorderValid, C && s.Z.invalidBorderColor, E && C && s.Z.focusedBorderInvalid, w] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": $, "aria-invalid": C, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && s.Z.disabled], testID: y || "", value: b },
                                    v ? r.createElement(f, { disabled: !0, style: g.option, value: "" }) : null,
                                    p.map((e) => {
                                        const { disabled: t, label: n, value: o } = e;
                                        return r.createElement(f, { disabled: t, key: `${n}-${o}`, style: g.option, value: o }, n);
                                    }),
                                ),
                                r.createElement(i.default, { style: [g.dropdownCaret, E && s.Z.validColor, !(!c && !n) && s.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        C && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: o } = this.state;
                    return r.createElement(l.ZP, { color: t || e ? "red500" : o ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(o.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            p.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                w = p;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Debugger.5f4df0fa.js.map
