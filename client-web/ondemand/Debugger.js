(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Debugger"],
    {
        232678: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, { default: () => $e });
            var r = n(202784),
                o = n(400752),
                a = n(154003),
                i = n(522450),
                s = n(666536),
                l = n(420182),
                c = n(443781),
                u = n(251067),
                d = n(576648),
                h = n(325686),
                f = n(370006),
                p = n(138099),
                m = n(786998),
                g = n(143670),
                y = n(392237),
                w = n(939419),
                b = n(782642);
            n(571372);
            const v = (() => {
                let e = 0;
                return () => ((e += 1), `u${`0000${((Math.random() * 36 ** 4) | 0).toString(36)}`.slice(-4)}${e}`);
            })();
            function E(e) {
                const t = [];
                for (let n = 0, r = e.length; n < r; n++) t.push(e[n]);
                return t;
            }
            let C = null;
            function x(e = {}) {
                return C || (e.includeStyleProperties ? ((C = e.includeStyleProperties), C) : ((C = E(window.getComputedStyle(document.documentElement))), C));
            }
            function S(e, t) {
                const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
                return n ? parseFloat(n.replace("px", "")) : 0;
            }
            function $(e, t = {}) {
                return {
                    width:
                        t.width ||
                        (function (e) {
                            const t = S(e, "border-left-width"),
                                n = S(e, "border-right-width");
                            return e.clientWidth + t + n;
                        })(e),
                    height:
                        t.height ||
                        (function (e) {
                            const t = S(e, "border-top-width"),
                                n = S(e, "border-bottom-width");
                            return e.clientHeight + t + n;
                        })(e),
                };
            }
            const T = 16384;
            function k(e) {
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
            async function Z(e, t, n) {
                const r = "http://www.w3.org/2000/svg",
                    o = document.createElementNS(r, "svg"),
                    a = document.createElementNS(r, "foreignObject");
                return (
                    o.setAttribute("width", `${t}`),
                    o.setAttribute("height", `${n}`),
                    o.setAttribute("viewBox", `0 0 ${t} ${n}`),
                    a.setAttribute("width", "100%"),
                    a.setAttribute("height", "100%"),
                    a.setAttribute("x", "0"),
                    a.setAttribute("y", "0"),
                    a.setAttribute("externalResourcesRequired", "true"),
                    o.appendChild(a),
                    a.appendChild(e),
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
            function A(e, t, n, r) {
                const o = `.${e}:${t}`,
                    a = n.cssText
                        ? (function (e) {
                              const t = e.getPropertyValue("content");
                              return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
                          })(n)
                        : (function (e, t) {
                              return x(t)
                                  .map((t) => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t) ? " !important" : ""};`)
                                  .join(" ");
                          })(n, r);
                return document.createTextNode(`${o}{${a}}`);
            }
            function R(e, t, n, r) {
                const o = window.getComputedStyle(e, n),
                    a = o.getPropertyValue("content");
                if ("" === a || "none" === a) return;
                const i = v();
                try {
                    t.className = `${t.className} ${i}`;
                } catch (e) {
                    return;
                }
                const s = document.createElement("style");
                s.appendChild(A(i, n, o, r)), t.appendChild(s);
            }
            const P = "application/font-woff",
                L = "image/jpeg",
                I = { woff: P, woff2: P, ttf: "application/font-truetype", eot: "application/vnd.ms-fontobject", png: "image/png", jpg: L, jpeg: L, gif: "image/gif", tiff: "image/tiff", svg: "image/svg+xml", webp: "image/webp" };
            function D(e) {
                const t = (function (e) {
                    const t = /\.([^./]*?)$/g.exec(e);
                    return t ? t[1] : "";
                })(e).toLowerCase();
                return I[t] || "";
            }
            function F(e) {
                return -1 !== e.search(/^(data:)/);
            }
            function M(e, t) {
                return `data:${t};base64,${e}`;
            }
            async function N(e, t, n) {
                const r = await fetch(e, t);
                if (404 === r.status) throw new Error(`Resource "${r.url}" not found`);
                const o = await r.blob();
                return new Promise((e, t) => {
                    const a = new FileReader();
                    (a.onerror = t),
                        (a.onloadend = () => {
                            try {
                                e(n({ res: r, result: a.result }));
                            } catch (e) {
                                t(e);
                            }
                        }),
                        a.readAsDataURL(o);
                });
            }
            const H = {};
            async function B(e, t, n) {
                const r = (function (e, t, n) {
                    let r = e.replace(/\?.*/, "");
                    return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
                })(e, t, n.includeQueryParams);
                if (null != H[r]) return H[r];
                let o;
                n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
                try {
                    const r = await N(
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
                return (H[r] = o), o;
            }
            async function O(e, t) {
                return _(e, HTMLCanvasElement)
                    ? (async function (e) {
                          const t = e.toDataURL();
                          return "data:," === t ? e.cloneNode(!1) : k(t);
                      })(e)
                    : _(e, HTMLVideoElement)
                      ? (async function (e, t) {
                            if (e.currentSrc) {
                                const t = document.createElement("canvas"),
                                    n = t.getContext("2d");
                                return (t.width = e.clientWidth), (t.height = e.clientHeight), null == n || n.drawImage(e, 0, 0, t.width, t.height), k(t.toDataURL());
                            }
                            const n = e.poster,
                                r = D(n);
                            return k(await B(n, r, t));
                        })(e, t)
                      : _(e, HTMLIFrameElement)
                        ? (async function (e, t) {
                              var n;
                              try {
                                  if (null === (n = null == e ? void 0 : e.contentDocument) || void 0 === n ? void 0 : n.body) return await q(e.contentDocument.body, t, !0);
                              } catch (e) {}
                              return e.cloneNode(!1);
                          })(e, t)
                        : e.cloneNode(V(e));
            }
            const j = (e) => null != e.tagName && "SLOT" === e.tagName.toUpperCase(),
                V = (e) => null != e.tagName && "SVG" === e.tagName.toUpperCase();
            function z(e, t, n) {
                return (
                    _(t, Element) &&
                        ((function (e, t, n) {
                            const r = t.style;
                            if (!r) return;
                            const o = window.getComputedStyle(e);
                            o.cssText
                                ? ((r.cssText = o.cssText), (r.transformOrigin = o.transformOrigin))
                                : x(n).forEach((n) => {
                                      let a = o.getPropertyValue(n);
                                      if ("font-size" === n && a.endsWith("px")) {
                                          const e = Math.floor(parseFloat(a.substring(0, a.length - 2))) - 0.1;
                                          a = `${e}px`;
                                      }
                                      _(e, HTMLIFrameElement) && "display" === n && "inline" === a && (a = "block"), "d" === n && t.getAttribute("d") && (a = `path(${t.getAttribute("d")})`), r.setProperty(n, a, o.getPropertyPriority(n));
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
            async function q(e, t, n) {
                return n || !t.filter || t.filter(e)
                    ? Promise.resolve(e)
                          .then((e) => O(e, t))
                          .then((n) =>
                              (async function (e, t, n) {
                                  var r, o;
                                  if (V(t)) return t;
                                  let a = [];
                                  return (
                                      (a = j(e) && e.assignedNodes ? E(e.assignedNodes()) : _(e, HTMLIFrameElement) && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body) ? E(e.contentDocument.body.childNodes) : E((null !== (o = e.shadowRoot) && void 0 !== o ? o : e).childNodes)),
                                      0 === a.length ||
                                          _(e, HTMLVideoElement) ||
                                          (await a.reduce(
                                              (e, r) =>
                                                  e
                                                      .then(() => q(r, n))
                                                      .then((e) => {
                                                          e && t.appendChild(e);
                                                      }),
                                              Promise.resolve(),
                                          )),
                                      t
                                  );
                              })(e, n, t),
                          )
                          .then((n) => z(e, n, t))
                          .then((e) =>
                              (async function (e, t) {
                                  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
                                  if (0 === n.length) return e;
                                  const r = {};
                                  for (let o = 0; o < n.length; o++) {
                                      const a = n[o].getAttribute("xlink:href");
                                      if (a) {
                                          const n = e.querySelector(a),
                                              o = document.querySelector(a);
                                          n || !o || r[a] || (r[a] = await q(o, t, !0));
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
            const W = /url\((['"]?)([^'"]+?)\1\)/g,
                U = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
                X = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
            async function Y(e, t, n, r, o) {
                try {
                    const a = n
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
                        i = D(t);
                    let s;
                    if (o) {
                        s = M(await o(a), i);
                    } else s = await B(a, i, r);
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
            function K(e) {
                return -1 !== e.search(W);
            }
            async function G(e, t, n) {
                if (!K(e)) return e;
                const r = (function (e, { preferredFontFormat: t }) {
                        return t
                            ? e.replace(X, (e) => {
                                  for (;;) {
                                      const [n, , r] = U.exec(e) || [];
                                      if (!r) return "";
                                      if (r === t) return `src: ${n};`;
                                  }
                              })
                            : e;
                    })(e, n),
                    o = (function (e) {
                        const t = [];
                        return e.replace(W, (e, n, r) => (t.push(r), e)), t.filter((e) => !F(e));
                    })(r);
                return o.reduce((e, r) => e.then((e) => Y(e, r, t, n)), Promise.resolve(r));
            }
            async function J(e, t, n) {
                var r;
                const o = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
                if (o) {
                    const r = await G(o, null, n);
                    return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
                }
                return !1;
            }
            async function Q(e, t) {
                _(e, Element) &&
                    (await (async function (e, t) {
                        (await J("background", e, t)) || (await J("background-image", e, t)), (await J("mask", e, t)) || (await J("-webkit-mask", e, t)) || (await J("mask-image", e, t)) || (await J("-webkit-mask-image", e, t));
                    })(e, t),
                    await (async function (e, t) {
                        const n = _(e, HTMLImageElement);
                        if ((!n || F(e.src)) && (!_(e, SVGImageElement) || F(e.href.baseVal))) return;
                        const r = n ? e.src : e.href.baseVal,
                            o = await B(r, D(r), t);
                        await new Promise((r, a) => {
                            (e.onload = r),
                                (e.onerror = t.onImageErrorHandler
                                    ? (...e) => {
                                          try {
                                              r(t.onImageErrorHandler(...e));
                                          } catch (e) {
                                              a(e);
                                          }
                                      }
                                    : a);
                            const i = e;
                            i.decode && (i.decode = r), "lazy" === i.loading && (i.loading = "eager"), n ? ((e.srcset = ""), (e.src = o)) : (e.href.baseVal = o);
                        });
                    })(e, t),
                    await (async function (e, t) {
                        const n = E(e.childNodes).map((e) => Q(e, t));
                        await Promise.all(n).then(() => e);
                    })(e, t));
            }
            const ee = {};
            async function te(e) {
                let t = ee[e];
                if (null != t) return t;
                const n = await fetch(e);
                return (t = { url: e, cssText: await n.text() }), (ee[e] = t), t;
            }
            async function ne(e, t) {
                let n = e.cssText;
                const r = /url\(["']?([^"')]+)["']?\)/g,
                    o = (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
                        let a = o.replace(r, "$1");
                        return a.startsWith("https://") || (a = new URL(a, e.url).href), N(a, t.fetchRequestInit, ({ result: e }) => ((n = n.replace(o, `url(${e})`)), [o, e]));
                    });
                return Promise.all(o).then(() => n);
            }
            function re(e) {
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
                    a = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
                for (;;) {
                    let e = o.exec(n);
                    if (null === e) {
                        if (((e = a.exec(n)), null === e)) break;
                        o.lastIndex = a.lastIndex;
                    } else a.lastIndex = o.lastIndex;
                    t.push(e[0]);
                }
                return t;
            }
            async function oe(e, t) {
                if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
                const n = E(e.ownerDocument.styleSheets),
                    r = await (async function (e, t) {
                        const n = [],
                            r = [];
                        return (
                            e.forEach((n) => {
                                if ("cssRules" in n)
                                    try {
                                        E(n.cssRules || []).forEach((e, o) => {
                                            if (e.type === CSSRule.IMPORT_RULE) {
                                                let a = o + 1;
                                                const i = te(e.href)
                                                    .then((e) => ne(e, t))
                                                    .then((e) =>
                                                        re(e).forEach((e) => {
                                                            try {
                                                                n.insertRule(e, e.startsWith("@import") ? (a += 1) : n.cssRules.length);
                                                            } catch (e) {}
                                                        }),
                                                    )
                                                    .catch((e) => {});
                                                r.push(i);
                                            }
                                        });
                                    } catch (o) {
                                        const a = e.find((e) => null == e.href) || document.styleSheets[0];
                                        null != n.href &&
                                            r.push(
                                                te(n.href)
                                                    .then((e) => ne(e, t))
                                                    .then((e) =>
                                                        re(e).forEach((e) => {
                                                            a.insertRule(e, a.cssRules.length);
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
                                                E(e.cssRules || []).forEach((e) => {
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
                    return e.filter((e) => e.type === CSSRule.FONT_FACE_RULE).filter((e) => K(e.style.getPropertyValue("src")));
                })(r);
            }
            function ae(e) {
                return e.trim().replace(/["']/g, "");
            }
            async function ie(e, t) {
                const n = await oe(e, t),
                    r = (function (e) {
                        const t = new Set();
                        return (
                            (function e(n) {
                                (n.style.fontFamily || getComputedStyle(n).fontFamily).split(",").forEach((e) => {
                                    t.add(ae(e));
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
                            .filter((e) => r.has(ae(e.style.fontFamily)))
                            .map((e) => {
                                const n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                                return G(e.cssText, n, t);
                            }),
                    )
                ).join("\n");
            }
            async function se(e, t = {}) {
                const { width: n, height: r } = $(e, t),
                    o = await q(e, t, !0);
                await (async function (e, t) {
                    const n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await ie(e, t);
                    if (n) {
                        const t = document.createElement("style"),
                            r = document.createTextNode(n);
                        t.appendChild(r), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
                    }
                })(o, t),
                    await Q(o, t),
                    (function (e, t) {
                        const { style: n } = e;
                        t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
                        const r = t.style;
                        null != r &&
                            Object.keys(r).forEach((e) => {
                                n[e] = r[e];
                            });
                    })(o, t);
                return await Z(o, n, r);
            }
            async function le(e, t = {}) {
                const { width: n, height: r } = $(e, t),
                    o = await se(e, t),
                    a = await k(o),
                    i = document.createElement("canvas"),
                    s = i.getContext("2d"),
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
                    (i.width = c * l),
                    (i.height = u * l),
                    t.skipAutoScale ||
                        (function (e) {
                            (e.width > T || e.height > T) && (e.width > T && e.height > T ? (e.width > e.height ? ((e.height *= T / e.width), (e.width = T)) : ((e.width *= T / e.height), (e.height = T))) : e.width > T ? ((e.height *= T / e.width), (e.width = T)) : ((e.width *= T / e.height), (e.height = T)));
                        })(i),
                    (i.style.width = `${c}`),
                    (i.style.height = `${u}`),
                    t.backgroundColor && ((s.fillStyle = t.backgroundColor), s.fillRect(0, 0, i.width, i.height)),
                    s.drawImage(a, 0, 0, i.width, i.height),
                    i
                );
            }
            async function ce(e, t = {}) {
                const n = await le(e, t),
                    r = await (function (e, t = {}) {
                        return e.toBlob
                            ? new Promise((n) => {
                                  e.toBlob(n, t.type ? t.type : "image/png", t.quality ? t.quality : 1);
                              })
                            : new Promise((n) => {
                                  const r = window.atob(e.toDataURL(t.type ? t.type : void 0, t.quality ? t.quality : void 0).split(",")[1]),
                                      o = r.length,
                                      a = new Uint8Array(o);
                                  for (let e = 0; e < o; e += 1) a[e] = r.charCodeAt(e);
                                  n(new Blob([a], { type: t.type ? t.type : "image/png" }));
                              });
                    })(n);
                return r;
            }
            var ue = n(466818),
                de = n(855488),
                he = n(731708),
                fe = n(451566),
                pe = n(242454),
                me = n(40610),
                ge = n(323265),
                ye = n(497088),
                we = n(125363);
            const be = [
                { label: "New bug / triage", value: "new_bug" },
                { label: "QA regression", value: "qa_regression" },
                { label: "Ads", value: "ads" },
                { label: "Security", value: "security" },
                { label: "Timelines", value: "timelines" },
                { label: "UI", value: "ui" },
                { label: "Video", value: "video" },
                { label: "Other", value: "other" },
            ];
            function ve({ onClose: e }) {
                const { featureSwitches: t, viewerUserId: n } = r.useContext(c.rC),
                    o = (0, we.oR)(),
                    a = (0, b.p)(),
                    [i, s] = r.useState(be[0]),
                    [l, d] = r.useState(""),
                    [f, p] = r.useState(""),
                    [m, g] = r.useState(""),
                    [y, w] = r.useState(!1),
                    [v, E] = r.useState(),
                    C = ge.ZP.browserString(),
                    x = ge.ZP.getBrowserTagVersion(C),
                    S = ge.ZP.osString(),
                    $ = ge.ZP.userAgent,
                    T = `${C}, ${x}. ${S} \n\n${$}.`;
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(ue.ZP, { label: "Where did we go wrong?", onChange: (e, t) => s(be[t]), options: be, value: i.value }),
                    r.createElement(de.Z, { label: "Summary", multiline: !0, name: "summary", onChange: (e) => d(e.target.value), style: Ee.formTextInput, value: l }),
                    r.createElement(de.Z, { label: "Expected result (optional)", multiline: !0, name: "expected", onChange: (e) => p(e.target.value), style: Ee.formTextInput, value: f }),
                    r.createElement(de.Z, { label: "Actual result (optional)", multiline: !0, name: "actual", onChange: (e) => g(e.target.value), style: Ee.formTextInput, value: m }),
                    r.createElement(
                        h.Z,
                        { style: Ee.switch },
                        r.createElement(he.ZP, null, "Attach screenshot (experimental)"),
                        r.createElement(fe.Z, {
                            disabled: y,
                            onValueChange: function (e) {
                                e
                                    ? (w(!0),
                                      ce(document.body, { filter: (e) => "NOSCRIPT" !== e.tagName && "debugger" !== e.dataset?.testid && "mask" !== e.dataset?.testid, height: document.body.scrollHeight, width: document.body.scrollWidth })
                                          .then((e) => {
                                              E(e);
                                          })
                                          .catch(() => {
                                              a({ text: "Failed to generate screenshot. Please try again" });
                                          })
                                          .finally(() => {
                                              w(!1);
                                          }))
                                    : E();
                            },
                            value: !!v,
                        }),
                    ),
                    r.createElement(pe.Z, {
                        color: "primary",
                        disabled: !l.length || y,
                        label: y ? "Loading" : "Submit",
                        onPress: function () {
                            const r = `Bug report: ${i.label}`;
                            let s = `Summary:%0A${l}%0A%0A`;
                            f.length && (s += `Expected:%0A${f}%0A%0A`), m.length && (s += `Actual:%0A${m}%0A%0A`), (s += `User agent:%0A${$}%0A%0A`), u.MK && (s += `Sha:%0A${u.MK}%0A%0A`);
                            const c = JSON.stringify(ye.InMemoryCache.flush()),
                                d = o.getState(),
                                h = JSON.stringify({ entities: d.entities, featureSwitch: { customOverrides: { ...d.featureSwitch.customOverrides }, user: { ...d.featureSwitch.user } }, multiAccount: d.multiAccount, ocf: d.ocf, pinnedTimelines: d.pinnedTimelines, tweetComposer: d.tweetComposer, urt: d.urt }),
                                p = Date.now(),
                                g = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-network-${p}.json`,
                                y = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-state-${p}.json`,
                                b = `https://ton.x.com/i/ton/data/web-logs/debug/${n || ""}-screenshot-${p}.png`;
                            w(!0),
                                Promise.all([
                                    fetch(y, { body: h, credentials: "include", method: "POST" }).then((e) => {
                                        if (!e.ok) throw new Error("state request failed");
                                        return e;
                                    }),
                                    fetch(g, { body: c, credentials: "include", method: "POST" }).then((e) => {
                                        if (!e.ok) throw new Error("network request failed");
                                        return e;
                                    }),
                                    v
                                        ? fetch(b, { body: v, credentials: "include", method: "POST" }).then((e) => {
                                              if (!e.ok) throw new Error("screnshot request failed");
                                              return e;
                                          })
                                        : Promise.resolve(),
                                ])
                                    .then(() => {
                                        const n = t.getStringValue("rweb_debugger_bug_report_email", "");
                                        (s += `Application state:%0A${y}%0A%0A`), (s += `Network requests:%0A${g}%0A%0A`), v && (s += `Screenshot:%0A${b}%0A%0A`), window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${n}&su=${r}&body=${s}`, "_blank"), e();
                                    })
                                    .catch(() => {
                                        a({ text: "Failed to upload data. Please try again" });
                                    })
                                    .finally(() => {
                                        w(!1);
                                    });
                        },
                    }),
                    r.createElement(me.Z.Primary, { headline: "Device information", text: T, withIcon: !0 }),
                );
            }
            const Ee = y.default.create((e) => ({ formTextInput: { paddingHorizontal: 0, paddingVertical: 0 }, switch: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" } }));
            function Ce({ onClose: e }) {
                const [t, n] = r.useState("home"),
                    o = (0, b.p)(),
                    a = `${u.OB}${u.MK ? ` - ${u.MK}` : ""}`,
                    i = "home" === t ? "Debug" : "Report a bug",
                    s =
                        "home" === t
                            ? r.createElement(f.Z, {
                                  backButtonType: "close",
                                  onClick: function () {
                                      e(), n("home");
                                  },
                              })
                            : r.createElement(f.Z, {
                                  backButtonType: "back",
                                  onClick: function () {
                                      n("home");
                                  },
                              });
                return r.createElement(
                    p.Z,
                    { onMaskClick: e, testID: "debugger", type: "bottom", withMask: !0, withNativeMaskColor: !0 },
                    r.createElement(m.Z, { leftControl: s, title: i, withGutter: !0 }),
                    r.createElement(
                        h.Z,
                        { style: xe.container },
                        "home" === t &&
                            r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(g.Z, { Icon: w.default, actionText: "Report a bug", onClick: () => n("report-bug") }),
                                r.createElement(g.Z, {
                                    actionText: a,
                                    onClick: function () {
                                        d.Z.setString(a), o({ text: "Copied version to clipboard" });
                                    },
                                    style: xe.version,
                                }),
                            ),
                        "report-bug" === t && r.createElement(ve, { onClose: e }),
                    ),
                );
            }
            const xe = y.default.create((e) => ({ container: { padding: e.spaces.space16, gap: e.spaces.space8 }, version: { textAlign: "center" } })),
                Se = "rweb.debugger";
            function $e({ initialX: e = 8, initialY: t = 200 }) {
                const n = (0, o.Dv)(l.L$),
                    { featureSwitches: u } = r.useContext(c.rC),
                    [d, h] = r.useState(!1),
                    [f, p] = r.useState(!1),
                    m = r.useRef(null),
                    g = r.useRef({ offsetX: 0, offsetY: 0, startX: 0, startY: 0 }),
                    y = r.useRef({ x: -64, y: -64 }),
                    w = r.useMemo(
                        () =>
                            (0, s.Z)((e, t) => {
                                n.set(Se, { position: { x: e, y: t } });
                            }, 500),
                        [n],
                    ),
                    b = r.useCallback(
                        (e, t, n = !1) => {
                            const r = m.current;
                            if (!r) return;
                            const { height: o, width: a } = r.getBoundingClientRect(),
                                i = Math.max(0, Math.min(e, window.innerWidth - a)),
                                s = Math.max(0, Math.min(t, window.innerHeight - o));
                            (y.current = { x: i, y: s }), (r.style.left = `${i}px`), (r.style.top = `${s}px`), n || w(i, s);
                        },
                        [w],
                    );
                return (
                    r.useLayoutEffect(() => {
                        n.get(Se).then((n) => {
                            n?.position ? b(n.position.x, n.position.y) : b(e, t);
                        });
                    }, [n, e, t, b]),
                    r.useEffect(() => {
                        const e = m.current;
                        if (!e) return;
                        function t(e, t) {
                            b(e - g.current.offsetX, t - g.current.offsetY, !0);
                        }
                        function n(e) {
                            t(e.clientX, e.clientY);
                        }
                        function r(e) {
                            t(e.touches[0].clientX, e.touches[0].clientY);
                        }
                        function o(e, t) {
                            h(!1);
                            Math.abs(e - g.current.startX) < 5 && Math.abs(t - g.current.startY) < 5 && p(!0), w(y.current.x, y.current.y);
                        }
                        function a(e) {
                            o(e.clientX, e.clientY), window.removeEventListener("mousemove", n), window.removeEventListener("mouseup", a);
                        }
                        function i(e) {
                            o(e.changedTouches[0].clientX, e.changedTouches[0].clientY), window.removeEventListener("touchmove", r), window.removeEventListener("touchend", i);
                        }
                        function l(e, t) {
                            (g.current = { offsetX: e - y.current.x, offsetY: t - y.current.y, startX: e, startY: t }), h(!0);
                        }
                        function c(e) {
                            e.preventDefault(), 0 === e.button && (l(e.clientX, e.clientY), window.addEventListener("mousemove", n), window.addEventListener("mouseup", a));
                        }
                        function u(e) {
                            e.preventDefault(), l(e.touches[0].clientX, e.touches[0].clientY), window.addEventListener("touchmove", r), window.addEventListener("touchend", i);
                        }
                        const d = (0, s.Z)(() => {
                            b(y.current.x, y.current.y);
                        }, 500);
                        return (
                            e.addEventListener("touchstart", u),
                            e.addEventListener("mousedown", c),
                            window.addEventListener("resize", d),
                            () => {
                                e.removeEventListener("mousedown", c), e.removeEventListener("touchstart", u), window.removeEventListener("resize", d);
                            }
                        );
                    }, [n, w, b]),
                    u.isTrue("rweb_debugger_enabled")
                        ? r.createElement(
                              r.Fragment,
                              null,
                              r.createElement(a.ZP, { "aria-label": "debugger", borderColor: "buttonWhite", icon: r.createElement(i.default, null), ref: m, size: "small", style: { position: "fixed", start: `${y.current.x}px`, top: `${y.current.y}px`, transition: "transform 0.2s", transform: `scale(${d ? "1.2" : "1"})` }, type: "primaryFilled" }),
                              f &&
                                  r.createElement(Ce, {
                                      onClose: function () {
                                          p(!1);
                                      },
                                  }),
                          )
                        : null
                );
            }
        },
        782642: (e, t, n) => {
            "use strict";
            n.d(t, { p: () => i });
            var r = n(202784),
                o = n(125363),
                a = n(601576);
            const i = () => {
                    const e = (0, o.I0)(),
                        t = s(),
                        n = r.useRef(null);
                    return (
                        r.useEffect(() => () => clearTimeout(n.current), [t]),
                        r.useCallback(
                            (r) => {
                                e((0, a.fz)(r)), (n.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                s = () => {
                    const e = (0, o.I0)();
                    return r.useCallback(() => e((0, a.RS)()), [e]);
                };
        },
        497088: (e, t, n) => {
            "use strict";
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
            "use strict";
            n.d(t, { Z: () => d });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(731708),
                s = n(58881),
                l = n(530732),
                c = n(392237);
            const u = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                d = ({ align: e = "center", color: t, label: n, ...d }) => {
                    const h = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(a.Z, { style: u.container }, o.createElement(l.Z, (0, r.Z)({}, d, { interactiveStyles: h, style: u.root }), o.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        466818: (e, t, n) => {
            "use strict";
            n.d(t, { ZP: () => y });
            var r = n(202784),
                o = n(325686),
                a = n(487552),
                i = n(302752),
                s = n(183806),
                l = n(731708),
                c = n(950822),
                u = n(224162),
                d = n(392237);
            const h = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                f = (e) => (0, c.Z)("option", e);
            let p = 1;
            class m extends r.PureComponent {
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
                        (this._id = `SELECTOR_${p}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (p += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: p, options: m, style: y, testID: w, value: b, withEmptyOption: v } = this.props,
                        { isFocused: E } = this.state,
                        C = l.ZP.getLanguage(),
                        x = void 0 === c ? !!n : c,
                        S = new Set();
                    n && S.add(this._errorID), e && S.add(e), p && S.add(this._helperID);
                    const $ = S.size ? [...S].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(u.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === C ? d.default.theme.fontFamilies.japan : "rtl" === e || i.Z.isLocaleRTL(C) ? d.default.theme.fontFamilies.rtl : d.default.theme.fontFamilies.normal;
                            return r.createElement(
                                o.Z,
                                { style: [s.Z.border, g.container, t && s.Z.disabled, E && s.Z.focusedBorderValid, x && s.Z.invalidBorderColor, E && x && s.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                r.createElement(
                                    h,
                                    { "aria-describedby": $, "aria-invalid": x, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && s.Z.disabled], testID: w || "", value: b },
                                    v ? r.createElement(f, { disabled: !0, style: g.option, value: "" }) : null,
                                    m.map((e) => {
                                        const { disabled: t, label: n, value: o } = e;
                                        return r.createElement(f, { disabled: t, key: `${n}-${o}`, style: g.option, value: o }, n);
                                    }),
                                ),
                                r.createElement(a.default, { style: [g.dropdownCaret, E && s.Z.validColor, !(!c && !n) && s.Z.invalidColor] }),
                            );
                        }),
                        p ? this._renderHelperText() : null,
                        x && n ? this._renderErrorText() : null,
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
            m.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = d.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = m;
        },
        451566: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                a = n(928316),
                i = n(372612),
                s = n(392237);
            class l extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._updateStyles = (e) => {
                            if (e) {
                                const t = a.findDOMNode(e);
                                t &&
                                    [...t.childNodes].forEach((e) => {
                                        e instanceof HTMLElement && ((e.style.borderColor = "transparent"), (e.style.borderWidth = "1px"));
                                    });
                            }
                        });
                }
                render() {
                    const { colors: e } = s.default.theme;
                    return o.createElement(i.Z, (0, r.Z)({ activeThumbColor: e.primary, activeTrackColor: e.lightPrimary, ref: this._updateStyles }, this.props));
                }
            }
            const c = l;
        },
        183806: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        666536: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => a });
            var r = n(936386),
                o = n.n(r);
            const a = (e, t, n) => o()(e, t, n);
        },
        936386: (e) => {
            function t(e, t, n) {
                var r, o, a, i, s;
                function l() {
                    var c = Date.now() - i;
                    c < t && c >= 0 ? (r = setTimeout(l, t - c)) : ((r = null), n || ((s = e.apply(a, o)), (a = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (a = this), (o = arguments), (i = Date.now());
                    var c = n && !r;
                    return r || (r = setTimeout(l, t)), c && ((s = e.apply(a, o)), (a = o = null)), s;
                };
                return (
                    (c.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (c.flush = function () {
                        r && ((s = e.apply(a, o)), (a = o = null), clearTimeout(r), (r = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        372612: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => v });
            var r = n(133028),
                o = n(807896),
                a = n(231461),
                i = n(202784),
                s = n(890601),
                l = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const c = (e, t) => {
                var n;
                return "string" == typeof e ? "" + parseFloat(e) * t + e.match(l)[1] : ((n = e), !isNaN(parseFloat(n)) && isFinite(n) ? e * t : void 0);
            };
            var u = n(297689),
                d = n(325686),
                h = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                f = {},
                p = "0px 1px 3px rgba(0,0,0,0.5)",
                m = p + ", 0 0 0 10px rgba(0,0,0,0.1)",
                g = "#D5D5D5",
                y = "#BDBDBD",
                w = i.forwardRef((e, t) => {
                    var n = e["aria-label"],
                        r = e.accessibilityLabel,
                        l = e.activeThumbColor,
                        w = e.activeTrackColor,
                        v = e.disabled,
                        E = void 0 !== v && v,
                        C = e.onValueChange,
                        x = e.style,
                        S = void 0 === x ? f : x,
                        $ = e.thumbColor,
                        T = e.trackColor,
                        k = e.value,
                        Z = void 0 !== k && k,
                        _ = (0, a.Z)(e, h),
                        A = i.useRef(null);
                    function R(e) {
                        var t = "focus" === e.nativeEvent.type ? m : p;
                        null != A.current && (A.current.style.boxShadow = t);
                    }
                    var P = u.Z.flatten(S),
                        L = P.height,
                        I = P.width,
                        D = L || "20px",
                        F = c(D, 2),
                        M = I > F ? I : F,
                        N = c(D, 0.5),
                        H = !0 === Z ? (null != T && "object" == typeof T ? T.true : null != w ? w : "#A3D3CF") : null != T && "object" == typeof T ? T.false : null != T ? T : "#939393",
                        B = Z ? (null != l ? l : "#009688") : null != $ ? $ : "#FAFAFA",
                        O = D,
                        j = O,
                        V = [b.root, S, E && b.cursorDefault, { height: D, width: M }],
                        z = !0 === Z ? (("string" == typeof w && null != w) || ("object" == typeof T && null != T && T.true) ? H : g) : ("string" == typeof T && null != T) || ("object" == typeof T && null != T && T.false) ? H : g,
                        q = !0 === Z ? (null == l ? y : B) : null == $ ? y : B,
                        W = [b.track, { backgroundColor: E ? z : H, borderRadius: N }],
                        U = [b.thumb, Z && b.thumbActive, { backgroundColor: E ? q : B, height: O, marginStart: Z ? c(j, -1) : 0, width: j }],
                        X = (0, s.Z)("input", {
                            "aria-label": n || r,
                            checked: Z,
                            disabled: E,
                            onBlur: R,
                            onChange: function (e) {
                                null != C && C(e.nativeEvent.target.checked);
                            },
                            onFocus: R,
                            ref: t,
                            style: [b.nativeControl, b.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return i.createElement(d.Z, (0, o.Z)({}, _, { style: V }), i.createElement(d.Z, { style: W }), i.createElement(d.Z, { ref: A, style: U }), X);
                });
            w.displayName = "Switch";
            var b = u.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, r.Z)((0, r.Z)({ forcedColorAdjust: "none" }, u.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: p, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, r.Z)((0, r.Z)({}, u.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const v = w;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Debugger.95e54a6a.js.map
