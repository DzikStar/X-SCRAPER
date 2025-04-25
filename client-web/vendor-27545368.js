window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-27545368"],
        {
            24949: (d, u) => {
                "use strict";
                function f(d, u) {
                    return d === u;
                }
                function e(d) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
                        e = null,
                        c = null;
                    return function () {
                        return (
                            (function (d, u, f) {
                                if (null === u || null === f || u.length !== f.length) return !1;
                                for (var e = u.length, c = 0; c < e; c++) if (!d(u[c], f[c])) return !1;
                                return !0;
                            })(u, e, arguments) || (c = d.apply(null, arguments)),
                            (e = arguments),
                            c
                        );
                    };
                }
                function c(d) {
                    for (var u = arguments.length, f = Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++) f[c - 1] = arguments[c];
                    return function () {
                        for (var u = arguments.length, c = Array(u), t = 0; t < u; t++) c[t] = arguments[t];
                        var r = 0,
                            n = c.pop(),
                            o = (function (d) {
                                var u = Array.isArray(d[0]) ? d[0] : d;
                                if (
                                    !u.every(function (d) {
                                        return "function" == typeof d;
                                    })
                                ) {
                                    var f = u
                                        .map(function (d) {
                                            return typeof d;
                                        })
                                        .join(", ");
                                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + f + "]");
                                }
                                return u;
                            })(c),
                            b = d.apply(
                                void 0,
                                [
                                    function () {
                                        return r++, n.apply(null, arguments);
                                    },
                                ].concat(f),
                            ),
                            a = e(function () {
                                for (var d = [], u = o.length, f = 0; f < u; f++) d.push(o[f].apply(null, arguments));
                                return b.apply(null, d);
                            });
                        return (
                            (a.resultFunc = n),
                            (a.recomputations = function () {
                                return r;
                            }),
                            (a.resetRecomputations = function () {
                                return (r = 0);
                            }),
                            a
                        );
                    };
                }
                (u.PW = e),
                    (u.wN = c),
                    (u.zB = function (d) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                        if ("object" != typeof d) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof d);
                        var f = Object.keys(d);
                        return u(
                            f.map(function (u) {
                                return d[u];
                            }),
                            function () {
                                for (var d = arguments.length, u = Array(d), e = 0; e < d; e++) u[e] = arguments[e];
                                return u.reduce(function (d, u, e) {
                                    return (d[f[e]] = u), d;
                                }, {});
                            },
                        );
                    });
                var t = (u.P1 = c(e));
            },
            849938: (d, u, f) => {
                "use strict";
                (u.Qj = void 0),
                    (u.Qc = function (d, u) {
                        var f = u && u.assetType ? u.assetType : "svg",
                            e =
                                u && u.buildUrl
                                    ? u.buildUrl
                                    : function (d, u) {
                                          return "png" === u ? "https://twemoji.maxcdn.com/v/latest/72x72/" + d + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + d + ".svg";
                                      },
                            c = [];
                        t.default.lastIndex = 0;
                        for (;;) {
                            var n = t.default.exec(d);
                            if (!n) break;
                            var o = n[0],
                                i = a(b(o)).join("-");
                            c.push({ url: i ? e(i, f) : "", indices: [n.index, t.default.lastIndex], text: o, type: r });
                        }
                        return c;
                    }),
                    (u.w1 = a);
                var e,
                    c = f(181216),
                    t = (e = c) && e.__esModule ? e : { default: e };
                var r = (u.Qj = "emoji");
                var n = /\uFE0F/g,
                    o = String.fromCharCode(8205),
                    b = function (d) {
                        return d.indexOf(o) < 0 ? d.replace(n, "") : d;
                    };
                function a(d) {
                    for (var u = [], f = 0, e = 0, c = 0; c < d.length; ) (f = d.charCodeAt(c++)), e ? (u.push((65536 + ((e - 55296) << 10) + (f - 56320)).toString(16)), (e = 0)) : f > 55296 && f <= 56319 ? (e = f) : u.push(f.toString(16));
                    return u;
                }
            },
            181216: (d, u) => {
                "use strict";
                Object.defineProperty(u, "__esModule", { value: !0 }),
                    (u.default =
                        /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g);
            },
            526876: (d) => {
                (d.exports = function (d, u) {
                    (null == u || u > d.length) && (u = d.length);
                    for (var f = 0, e = Array(u); f < u; f++) e[f] = d[f];
                    return e;
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            383074: (d, u, f) => {
                var e = f(526876);
                (d.exports = function (d) {
                    if (Array.isArray(d)) return e(d);
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            53043: (d) => {
                function u(d, u, f, e, c, t, r) {
                    try {
                        var n = d[t](r),
                            o = n.value;
                    } catch (d) {
                        return void f(d);
                    }
                    n.done ? u(o) : Promise.resolve(o).then(e, c);
                }
                (d.exports = function (d) {
                    return function () {
                        var f = this,
                            e = arguments;
                        return new Promise(function (c, t) {
                            var r = d.apply(f, e);
                            function n(d) {
                                u(r, c, t, n, o, "next", d);
                            }
                            function o(d) {
                                u(r, c, t, n, o, "throw", d);
                            }
                            n(void 0);
                        });
                    };
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            158663: (d, u, f) => {
                var e = f(223349);
                (d.exports = function (d, u) {
                    var f = ("undefined" != typeof Symbol && d[Symbol.iterator]) || d["@@iterator"];
                    if (!f) {
                        if (Array.isArray(d) || (f = e(d)) || (u && d && "number" == typeof d.length)) {
                            f && (d = f);
                            var c = 0,
                                t = function () {};
                            return {
                                s: t,
                                n: function () {
                                    return c >= d.length ? { done: !0 } : { done: !1, value: d[c++] };
                                },
                                e: function (d) {
                                    throw d;
                                },
                                f: t,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var r,
                        n = !0,
                        o = !1;
                    return {
                        s: function () {
                            f = f.call(d);
                        },
                        n: function () {
                            var d = f.next();
                            return (n = d.done), d;
                        },
                        e: function (d) {
                            (o = !0), (r = d);
                        },
                        f: function () {
                            try {
                                n || null == f.return || f.return();
                            } finally {
                                if (o) throw r;
                            }
                        },
                    };
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            845621: (d, u, f) => {
                var e = f(955819);
                (d.exports = function (d, u, f) {
                    return (u = e(u)) in d ? Object.defineProperty(d, u, { value: f, enumerable: !0, configurable: !0, writable: !0 }) : (d[u] = f), d;
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            183491: (d) => {
                (d.exports = function (d) {
                    return d && d.__esModule ? d : { default: d };
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            77745: (d) => {
                (d.exports = function (d) {
                    if (("undefined" != typeof Symbol && null != d[Symbol.iterator]) || null != d["@@iterator"]) return Array.from(d);
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            159038: (d) => {
                (d.exports = function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            479035: (d, u, f) => {
                var e = f(845621);
                function c(d, u) {
                    var f = Object.keys(d);
                    if (Object.getOwnPropertySymbols) {
                        var e = Object.getOwnPropertySymbols(d);
                        u &&
                            (e = e.filter(function (u) {
                                return Object.getOwnPropertyDescriptor(d, u).enumerable;
                            })),
                            f.push.apply(f, e);
                    }
                    return f;
                }
                (d.exports = function (d) {
                    for (var u = 1; u < arguments.length; u++) {
                        var f = null != arguments[u] ? arguments[u] : {};
                        u % 2
                            ? c(Object(f), !0).forEach(function (u) {
                                  e(d, u, f[u]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(f))
                              : c(Object(f)).forEach(function (u) {
                                    Object.defineProperty(d, u, Object.getOwnPropertyDescriptor(f, u));
                                });
                    }
                    return d;
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            173771: (d) => {
                (d.exports = function (d, u) {
                    if (null == d) return {};
                    var f = {};
                    for (var e in d)
                        if ({}.hasOwnProperty.call(d, e)) {
                            if (u.includes(e)) continue;
                            f[e] = d[e];
                        }
                    return f;
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            434323: (d, u, f) => {
                var e = f(383074),
                    c = f(77745),
                    t = f(223349),
                    r = f(159038);
                (d.exports = function (d) {
                    return e(d) || c(d) || t(d) || r();
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            412079: (d, u, f) => {
                var e = f(154244).default;
                (d.exports = function (d, u) {
                    if ("object" != e(d) || !d) return d;
                    var f = d[Symbol.toPrimitive];
                    if (void 0 !== f) {
                        var c = f.call(d, u || "default");
                        if ("object" != e(c)) return c;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === u ? String : Number)(d);
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            955819: (d, u, f) => {
                var e = f(154244).default,
                    c = f(412079);
                (d.exports = function (d) {
                    var u = c(d, "string");
                    return "symbol" == e(u) ? u : u + "";
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
            154244: (d) => {
                function u(f) {
                    return (
                        (d.exports = u =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (d) {
                                      return typeof d;
                                  }
                                : function (d) {
                                      return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
                                  }),
                        (d.exports.__esModule = !0),
                        (d.exports.default = d.exports),
                        u(f)
                    );
                }
                (d.exports = u), (d.exports.__esModule = !0), (d.exports.default = d.exports);
            },
            223349: (d, u, f) => {
                var e = f(526876);
                (d.exports = function (d, u) {
                    if (d) {
                        if ("string" == typeof d) return e(d, u);
                        var f = {}.toString.call(d).slice(8, -1);
                        return "Object" === f && d.constructor && (f = d.constructor.name), "Map" === f || "Set" === f ? Array.from(d) : "Arguments" === f || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? e(d, u) : void 0;
                    }
                }),
                    (d.exports.__esModule = !0),
                    (d.exports.default = d.exports);
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-27545368.77b8a3ba.js.map
