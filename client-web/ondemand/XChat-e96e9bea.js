(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e96e9bea"],
    {
        928220: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => n });
            var d = a(381973);
            const t = /[a-z]{1,6}(?:[._][a-z]{1,2})?/i;
            var s = a(26883),
                c = a(721280);
            const r = (0, d.Z)(/[#{spacesGroup}]/, { spacesGroup: c.Z }),
                i = (0, d.Z)("(^|#{spaces})(\\$)(#{cashtag})(?=$|\\s|[#{punct}])", { cashtag: t, spaces: r, punct: s.Z }, "gi");
            function n(e) {
                if (!e || -1 === e.indexOf("$")) return [];
                const u = [];
                return (
                    e.replace(i, (e, a, d, t, s) => {
                        const c = s + a.length,
                            r = c + t.length + 1;
                        return u.push({ cashtag: t, indices: [c, r] }), "";
                    }),
                    u
                );
            }
        },
        8974: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => i });
            const d = RegExp("[a-zA-Z0-9_\\-+\\.!\\&]{1,64}@(?:[a-zA-Z0-9\\-_]{1,254}\\.){1,127}[a-zA-Z]{2,63}", "gi"),
                t = "[a-zA-Z0-9_\\-.]",
                s = "[a-zA-Z0-9_\\-~!@$%*\\(\\)+:;,.\\/]",
                c = `\\?(?:${t}+=${s}*)(?:&${t}+=${s}*)*`,
                r = RegExp(`(?<=[^a-zA-Z0-9_\\-.]|^)(mailto:)?(${d.source})(${c})?`, "gi");
            function i(e) {
                const u = [];
                return (
                    e.replace(r, (e, a, d, t, s) => {
                        const c = s,
                            r = c + e.length;
                        return u.push({ email: e, indices: [c, r] }), "";
                    }),
                    u
                );
            }
        },
        303676: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => v });
            var d = a(196594),
                t = a(381973);
            const s = /[#＃]/,
                c = (0, t.Z)(/^(?:#{hashSigns}|:\/\/)/, { hashSigns: s }),
                r =
                    /\ud800[\udc00-\udc0b\udc0d-\udc26\udc28-\udc3a\udc3c\udc3d\udc3f-\udc4d\udc50-\udc5d\udc80-\udcfa\uddfd\ude80-\ude9c\udea0-\uded0\udee0\udf00-\udf1f\udf30-\udf40\udf42-\udf49\udf50-\udf7a\udf80-\udf9d\udfa0-\udfc3\udfc8-\udfcf]|\ud801[\udc00-\udc9d\udd00-\udd27\udd30-\udd63\ude00-\udf36\udf40-\udf55\udf60-\udf67]|\ud802[\udc00-\udc05\udc08\udc0a-\udc35\udc37\udc38\udc3c\udc3f-\udc55\udc60-\udc76\udc80-\udc9e\udd00-\udd15\udd20-\udd39\udd80-\uddb7\uddbe\uddbf\ude00-\ude03\ude05\ude06\ude0c-\ude13\ude15-\ude17\ude19-\ude33\ude38-\ude3a\ude3f\ude60-\ude7c\ude80-\ude9c\udec0-\udec7\udec9-\udee6\udf00-\udf35\udf40-\udf55\udf60-\udf72\udf80-\udf91]|\ud803[\udc00-\udc48]|\ud804[\udc00-\udc46\udc7f-\udcba\udcd0-\udce8\udd00-\udd34\udd50-\udd73\udd76\udd80-\uddc4\uddda\ude00-\ude11\ude13-\ude37\udeb0-\udeea\udf01-\udf03\udf05-\udf0c\udf0f\udf10\udf13-\udf28\udf2a-\udf30\udf32\udf33\udf35-\udf39\udf3c-\udf44\udf47\udf48\udf4b-\udf4d\udf57\udf5d-\udf63\udf66-\udf6c\udf70-\udf74]|\ud805[\udc80-\udcc5\udcc7\udd80-\uddb5\uddb8-\uddc0\ude00-\ude40\ude44\ude80-\udeb7]|\ud806[\udca0-\udcdf\udcff\udec0-\udef8]|\ud808[\udc00-\udf98]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud81a[\udc00-\ude38\ude40-\ude5e\uded0-\udeed\udef0-\udef4\udf00-\udf36\udf40-\udf43\udf63-\udf77\udf7d-\udf8f]|\ud81b[\udf00-\udf44\udf50-\udf7e\udf8f-\udf9f]|\ud82c[\udc00\udc01]|\ud82f[\udc00-\udc6a\udc70-\udc7c\udc80-\udc88\udc90-\udc99\udc9d\udc9e]|\ud834[\udd65-\udd69\udd6d-\udd72\udd7b-\udd82\udd85-\udd8b\uddaa-\uddad\ude42-\ude44]|\ud835[\udc00-\udc54\udc56-\udc9c\udc9e\udc9f\udca2\udca5\udca6\udca9-\udcac\udcae-\udcb9\udcbb\udcbd-\udcc3\udcc5-\udd05\udd07-\udd0a\udd0d-\udd14\udd16-\udd1c\udd1e-\udd39\udd3b-\udd3e\udd40-\udd44\udd46\udd4a-\udd50\udd52-\udea5\udea8-\udec0\udec2-\udeda\udedc-\udefa\udefc-\udf14\udf16-\udf34\udf36-\udf4e\udf50-\udf6e\udf70-\udf88\udf8a-\udfa8\udfaa-\udfc2\udfc4-\udfcb]|\ud83a[\udc00-\udcc4\udcd0-\udcd6]|\ud83b[\ude00-\ude03\ude05-\ude1f\ude21\ude22\ude24\ude27\ude29-\ude32\ude34-\ude37\ude39\ude3b\ude42\ude47\ude49\ude4b\ude4d-\ude4f\ude51\ude52\ude54\ude57\ude59\ude5b\ude5d\ude5f\ude61\ude62\ude64\ude67-\ude6a\ude6c-\ude72\ude74-\ude77\ude79-\ude7c\ude7e\ude80-\ude89\ude8b-\ude9b\udea1-\udea3\udea5-\udea9\udeab-\udebb]|\ud840[\udc00-\udfff]|\ud841[\udc00-\udfff]|\ud842[\udc00-\udfff]|\ud843[\udc00-\udfff]|\ud844[\udc00-\udfff]|\ud845[\udc00-\udfff]|\ud846[\udc00-\udfff]|\ud847[\udc00-\udfff]|\ud848[\udc00-\udfff]|\ud849[\udc00-\udfff]|\ud84a[\udc00-\udfff]|\ud84b[\udc00-\udfff]|\ud84c[\udc00-\udfff]|\ud84d[\udc00-\udfff]|\ud84e[\udc00-\udfff]|\ud84f[\udc00-\udfff]|\ud850[\udc00-\udfff]|\ud851[\udc00-\udfff]|\ud852[\udc00-\udfff]|\ud853[\udc00-\udfff]|\ud854[\udc00-\udfff]|\ud855[\udc00-\udfff]|\ud856[\udc00-\udfff]|\ud857[\udc00-\udfff]|\ud858[\udc00-\udfff]|\ud859[\udc00-\udfff]|\ud85a[\udc00-\udfff]|\ud85b[\udc00-\udfff]|\ud85c[\udc00-\udfff]|\ud85d[\udc00-\udfff]|\ud85e[\udc00-\udfff]|\ud85f[\udc00-\udfff]|\ud860[\udc00-\udfff]|\ud861[\udc00-\udfff]|\ud862[\udc00-\udfff]|\ud863[\udc00-\udfff]|\ud864[\udc00-\udfff]|\ud865[\udc00-\udfff]|\ud866[\udc00-\udfff]|\ud867[\udc00-\udfff]|\ud868[\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|\ud86a[\udc00-\udfff]|\ud86b[\udc00-\udfff]|\ud86c[\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud87e[\udc00-\ude1d]|\udb40[\udd00-\uddef]/,
                i =
                    /A-Za-z\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u052f\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u065f\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06ef\u06fa-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07ca-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0-\u08b2\u08e4-\u0963\u0971-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09f0\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a70-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0c00-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c81-\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0cf1\u0cf2\u0d01-\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u103f\u1050-\u108f\u109a-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16f1-\u16f8\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u180b-\u180d\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191e\u1920-\u192b\u1930-\u193b\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f\u1aa7\u1ab0-\u1abe\u1b00-\u1b4b\u1b6b-\u1b73\u1b80-\u1baf\u1bba-\u1bf3\u1c00-\u1c37\u1c4d-\u1c4f\u1c5a-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1cf8\u1cf9\u1d00-\u1df5\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u20d0-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005\u3006\u302a-\u302f\u3031-\u3035\u303b\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua672\ua674-\ua67d\ua67f-\ua69d\ua69f-\ua6e5\ua6f0\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua7ad\ua7b0\ua7b1\ua7f7-\ua827\ua840-\ua873\ua880-\ua8c4\ua8e0-\ua8f7\ua8fb\ua90a-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf\ua9e0-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa36\uaa40-\uaa4d\uaa60-\uaa76\uaa7a-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab5f\uab64\uab65\uabc0-\uabea\uabec\uabed\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf870-\uf87f\uf882\uf884-\uf89f\uf8b8\uf8c1-\uf8d6\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe2d\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc/,
                n = /[\uD800-\uDBFF][\uDC00-\uDFFF]/gm,
                l = (0, t.Z)(/(?:[#{bmpLetterAndMarks}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}))/, { bmpLetterAndMarks: i, nonBmpCodePairs: n, astralLetterAndMarks: r }),
                o = /\ud801[\udca0-\udca9]|\ud804[\udc66-\udc6f\udcf0-\udcf9\udd36-\udd3f\uddd0-\uddd9\udef0-\udef9]|\ud805[\udcd0-\udcd9\ude50-\ude59\udec0-\udec9]|\ud806[\udce0-\udce9]|\ud81a[\ude60-\ude69\udf50-\udf59]|\ud835[\udfce-\udfff]/,
                f = /0-9\u0660-\u0669\u06f0-\u06f9\u07c0-\u07c9\u0966-\u096f\u09e6-\u09ef\u0a66-\u0a6f\u0ae6-\u0aef\u0b66-\u0b6f\u0be6-\u0bef\u0c66-\u0c6f\u0ce6-\u0cef\u0d66-\u0d6f\u0de6-\u0def\u0e50-\u0e59\u0ed0-\u0ed9\u0f20-\u0f29\u1040-\u1049\u1090-\u1099\u17e0-\u17e9\u1810-\u1819\u1946-\u194f\u19d0-\u19d9\u1a80-\u1a89\u1a90-\u1a99\u1b50-\u1b59\u1bb0-\u1bb9\u1c40-\u1c49\u1c50-\u1c59\ua620-\ua629\ua8d0-\ua8d9\ua900-\ua909\ua9d0-\ua9d9\ua9f0-\ua9f9\uaa50-\uaa59\uabf0-\uabf9\uff10-\uff19/,
                h = /_\u200c\u200d\ua67e\u05be\u05f3\u05f4\uff5e\u301c\u309b\u309c\u30a0\u30fb\u3003\u0f0b\u0f0c\xb7/,
                m = (0, t.Z)(/(?:[#{bmpLetterAndMarks}#{bmpNumerals}#{hashtagSpecialChars}]|(?=#{nonBmpCodePairs})(?:#{astralLetterAndMarks}|#{astralNumerals}))/, { bmpLetterAndMarks: i, bmpNumerals: f, hashtagSpecialChars: h, nonBmpCodePairs: n, astralLetterAndMarks: r, astralNumerals: o }),
                b = /(?:[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])/,
                g = (0, t.Z)(/(?:^|\uFE0E|\uFE0F|$|(?!#{hashtagAlphaNumeric}|&)#{codePoint})/, { codePoint: b, hashtagAlphaNumeric: m }),
                p = (0, t.Z)(/(#{hashtagBoundary})(#{hashSigns})(?!\uFE0F|\u20E3)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi, { hashtagBoundary: g, hashSigns: s, hashtagAlphaNumeric: m, hashtagAlpha: l });
            function v(e, u) {
                if (!e || !e.match(s)) return [];
                let a = [];
                if (
                    (e.replace(p, (e, u, d, t, s, r) => {
                        if (!r.slice(s + e.length).match(c)) {
                            const e = s + u.length,
                                d = e + t.length + 1;
                            a.push({ hashtag: t, indices: [e, d] });
                        }
                        return "";
                    }),
                    u?.checkUrlOverlap)
                ) {
                    const u = (0, d.Z)(e);
                    if (u.length > 0) {
                        const e = [...a, ...u];
                        !(function (e) {
                            if (0 === e.length) return;
                            e.sort((e, u) => e.indices[0] - u.indices[0]);
                            let u = e[0];
                            if (u)
                                for (let a = 1; a < e.length; a++) {
                                    const d = e[a];
                                    d && u.indices[1] > d.indices[0] ? (e.splice(a, 1), a--) : d && (u = d);
                                }
                        })(e),
                            (a = []);
                        for (let u = 0; u < e.length; u++) {
                            const d = e[u];
                            d && "hashtag" in d && a.push(d);
                        }
                    }
                }
                return a;
            }
        },
        879922: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => n });
            const d = /[@＠]/;
            var t = a(381973),
                s = a(579771);
            const c = (0, t.Z)(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/, { atSigns: d, latinAccentChars: s.Z }),
                r = /(?:^|[^a-zA-Z0-9_!#$%&*@＠]|(?:^|[^a-zA-Z0-9_+~.-])(?:rt|RT|rT|Rt):?)/,
                i = (0, t.Z)("(#{validMentionPrecedingChars})(#{atSigns})([a-zA-Z0-9_]{1,20})(/[a-zA-Z][a-zA-Z0-9_-]{0,24})?", { validMentionPrecedingChars: r, atSigns: d }, "g");
            function n(e) {
                const u = [],
                    a = (function (e) {
                        if (!e || !e.match(d)) return [];
                        const u = [];
                        return (
                            e.replace(i, (e, a, d, t, s, r, i) => {
                                if (!i.slice(r + e.length).match(c)) {
                                    const e = s || "",
                                        d = r + a.length,
                                        c = d + t.length + e.length + 1;
                                    u.push({ screenName: t, listSlug: e, indices: [d, c] });
                                }
                                return "";
                            }),
                            u
                        );
                    })(e);
                for (let e = 0; e < a.length; e++) {
                    const d = a[e];
                    d && "" === d.listSlug && u.push({ screenName: d.screenName, indices: d.indices });
                }
                return u;
            }
        },
        196594: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => E });
            var d = a(268058),
                t = a(381973),
                s = a(579771);
            const c = RegExp("(?:(?:한국|香港|澳門|新加坡|台灣|台湾|中國|中国|გე|ລາວ|ไทย|ලංකා|ഭാരതം|ಭಾರತ|భారత్|சிங்கப்பூர்|இலங்கை|இந்தியா|ଭାରତ|ભારત|ਭਾਰਤ|ভাৰত|ভারত|বাংলা|भारोत|भारतम्|भारत|ڀارت|پاکستان|موريتانيا|مليسيا|مصر|قطر|فلسطين|عمان|عراق|سورية|سودان|تونس|بھارت|بارت|ایران|امارات|المغرب|السعودية|الجزائر|البحرين|الاردن|ישראל|հայ|қаз|укр|срб|рф|мон|мкд|ею|бел|бг|ευ|ελ|zw|zm|za|yt|ye|ws|wf|vu|vn|vi|vg|ve|vc|va|uz|uy|us|um|uk|ug|ua|tz|tw|tv|tt|tr|tp|to|tn|tm|tl|tk|tj|th|tg|tf|td|tc|sz|sy|sx|sv|su|st|ss|sr|so|sn|sm|sl|sk|sj|si|sh|sg|se|sd|sc|sb|sa|rw|ru|rs|ro|re|qa|py|pw|pt|ps|pr|pn|pm|pl|pk|ph|pg|pf|pe|pa|om|nz|nu|nr|np|no|nl|ni|ng|nf|ne|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|mn|mm|ml|mk|mh|mg|mf|me|md|mc|ma|ly|lv|lu|lt|ls|lr|lk|li|lc|lb|la|kz|ky|kw|kr|kp|kn|km|ki|kh|kg|ke|jp|jo|jm|je|it|is|ir|iq|io|in|im|il|ie|id|hu|ht|hr|hn|hm|hk|gy|gw|gu|gt|gs|gr|gq|gp|gn|gm|gl|gi|gh|gg|gf|ge|gd|gb|ga|fr|fo|fm|fk|fj|fi|eu|et|es|er|eh|eg|ee|ec|dz|do|dm|dk|dj|de|cz|cy|cx|cw|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|bz|by|bw|bv|bt|bs|br|bq|bo|bn|bm|bl|bj|bi|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ar|aq|ao|an|am|al|ai|ag|af|ae|ad|ac)(?=[^0-9a-zA-Z@+-]|$))"),
                r = RegExp(
                    "(?:(?:삼성|닷컴|닷넷|香格里拉|餐厅|食品|飞利浦|電訊盈科|集团|通販|购物|谷歌|诺基亚|联通|网络|网站|网店|网址|组织机构|移动|珠宝|点看|游戏|淡马锡|机构|書籍|时尚|新闻|政府|政务|招聘|手表|手机|我爱你|慈善|微博|广东|工行|家電|娱乐|天主教|大拿|大众汽车|在线|嘉里大酒店|嘉里|商标|商店|商城|公益|公司|八卦|健康|信息|佛山|企业|亚马逊|中文网|中信|世界|ポイント|ファッション|セール|ストア|コム|グーグル|クラウド|アマゾン|みんな|คอม|संगठन|नेट|कॉम|همراه|موقع|موبايلي|كوم|كاثوليك|عرب|شبكة|بيتك|بازار|العليان|ارامكو|اتصالات|ابوظبي|קום|сайт|рус|орг|онлайн|москва|ком|католик|дети|zuerich|zone|zippo|zip|zero|zara|zappos|yun|youtube|you|yokohama|yoga|yodobashi|yandex|yamaxun|yahoo|yachts|xyz|xxx|xperia|xin|xihuan|xfinity|xerox|xbox|wtf|wtc|wow|world|works|work|woodside|wolterskluwer|wme|winners|wine|windows|win|williamhill|wiki|wien|whoswho|weir|weibo|wedding|wed|website|weber|webcam|weatherchannel|weather|watches|watch|warman|wanggou|wang|walter|walmart|wales|vuelos|voyage|voto|voting|vote|volvo|volkswagen|vodka|vlaanderen|vivo|viva|vistaprint|vista|vision|visa|virgin|vip|vin|villas|viking|vig|video|viajes|vet|versicherung|vermögensberatung|vermögensberater|verisign|ventures|vegas|vanguard|vana|vacations|ups|uol|uno|university|unicom|uconnect|ubs|ubank|tvs|tushu|tunes|tui|tube|trv|trust|travelersinsurance|travelers|travelchannel|travel|training|trading|trade|toys|toyota|town|tours|total|toshiba|toray|top|tools|tokyo|today|tmall|tkmaxx|tjx|tjmaxx|tirol|tires|tips|tiffany|tienda|tickets|tiaa|theatre|theater|thd|teva|tennis|temasek|telefonica|telecity|tel|technology|tech|team|tdk|tci|taxi|tax|tattoo|tatar|tatamotors|target|taobao|talk|taipei|tab|systems|symantec|sydney|swiss|swiftcover|swatch|suzuki|surgery|surf|support|supply|supplies|sucks|style|study|studio|stream|store|storage|stockholm|stcgroup|stc|statoil|statefarm|statebank|starhub|star|staples|stada|srt|srl|spreadbetting|spot|sport|spiegel|space|spa|soy|sony|song|solutions|solar|sohu|software|softbank|social|soccer|sncf|smile|smart|sling|skype|sky|skin|ski|site|singles|sina|silk|shriram|showtime|show|shouji|shopping|shop|shoes|shiksha|shia|shell|shaw|sharp|shangrila|sfr|sexy|sex|sew|seven|ses|services|sener|select|seek|security|secure|seat|search|scot|scor|scjohnson|science|schwarz|schule|school|scholarships|schmidt|schaeffler|scb|sca|sbs|sbi|saxo|save|sas|sarl|sapo|sap|sanofi|sandvikcoromant|sandvik|samsung|samsclub|salon|sale|sakura|safety|safe|saarland|ryukyu|rwe|run|ruhr|rugby|rsvp|room|rogers|rodeo|rocks|rocher|rmit|rip|rio|ril|rightathome|ricoh|richardli|rich|rexroth|reviews|review|restaurant|rest|republican|report|repair|rentals|rent|ren|reliance|reit|reisen|reise|rehab|redumbrella|redstone|red|recipes|realty|realtor|realestate|read|raid|radio|racing|qvc|quest|quebec|qpon|pwc|pub|prudential|pru|protection|property|properties|promo|progressive|prof|productions|prod|pro|prime|press|praxi|pramerica|post|porn|politie|poker|pohl|pnc|plus|plumbing|playstation|play|place|pizza|pioneer|pink|ping|pin|pid|pictures|pictet|pics|piaget|physio|photos|photography|photo|phone|philips|phd|pharmacy|pfizer|pet|pccw|pay|passagens|party|parts|partners|pars|paris|panerai|panasonic|pamperedchef|page|ovh|ott|otsuka|osaka|origins|orientexpress|organic|org|orange|oracle|open|ooo|onyourside|online|onl|ong|one|omega|ollo|oldnavy|olayangroup|olayan|okinawa|office|off|observer|obi|nyc|ntt|nrw|nra|nowtv|nowruz|now|norton|northwesternmutual|nokia|nissay|nissan|ninja|nikon|nike|nico|nhk|ngo|nfl|nexus|nextdirect|next|news|newholland|new|neustar|network|netflix|netbank|net|nec|nba|navy|natura|nationwide|name|nagoya|nadex|nab|mutuelle|mutual|music|museum|mtr|mtpc|mtn|msd|movistar|movie|mov|motorcycles|moto|moscow|mortgage|mormon|mopar|montblanc|monster|money|monash|mom|moi|moe|moda|mobily|mobile|mobi|mma|mls|mlb|mitsubishi|mit|mint|mini|mil|microsoft|miami|metlife|merckmsd|meo|menu|men|memorial|meme|melbourne|meet|media|med|mckinsey|mcdonalds|mcd|mba|mattel|maserati|marshalls|marriott|markets|marketing|market|map|mango|management|man|makeup|maison|maif|madrid|macys|luxury|luxe|lupin|lundbeck|ltda|ltd|lplfinancial|lpl|love|lotto|lotte|london|lol|loft|locus|locker|loans|loan|llp|llc|lixil|living|live|lipsy|link|linde|lincoln|limo|limited|lilly|like|lighting|lifestyle|lifeinsurance|life|lidl|liaison|lgbt|lexus|lego|legal|lefrak|leclerc|lease|lds|lawyer|law|latrobe|latino|lat|lasalle|lanxess|landrover|land|lancome|lancia|lancaster|lamer|lamborghini|ladbrokes|lacaixa|kyoto|kuokgroup|kred|krd|kpn|kpmg|kosher|komatsu|koeln|kiwi|kitchen|kindle|kinder|kim|kids|kia|kfh|kerryproperties|kerrylogistics|kerryhotels|kddi|kaufen|juniper|juegos|jprs|jpmorgan|joy|jot|joburg|jobs|jnj|jmp|jll|jlc|jio|jewelry|jetzt|jeep|jcp|jcb|java|jaguar|iwc|iveco|itv|itau|istanbul|ist|ismaili|iselect|irish|ipiranga|investments|intuit|international|intel|int|insure|insurance|institute|ink|ing|info|infiniti|industries|inc|immobilien|immo|imdb|imamat|ikano|iinet|ifm|ieee|icu|ice|icbc|ibm|hyundai|hyatt|hughes|htc|hsbc|how|house|hotmail|hotels|hoteles|hot|hosting|host|hospital|horse|honeywell|honda|homesense|homes|homegoods|homedepot|holiday|holdings|hockey|hkt|hiv|hitachi|hisamitsu|hiphop|hgtv|hermes|here|helsinki|help|healthcare|health|hdfcbank|hdfc|hbo|haus|hangout|hamburg|hair|guru|guitars|guide|guge|gucci|guardian|group|grocery|gripe|green|gratis|graphics|grainger|gov|got|gop|google|goog|goodyear|goodhands|goo|golf|goldpoint|gold|godaddy|gmx|gmo|gmbh|gmail|globo|global|gle|glass|glade|giving|gives|gifts|gift|ggee|george|genting|gent|gea|gdn|gbiz|gay|garden|gap|games|game|gallup|gallo|gallery|gal|fyi|futbol|furniture|fund|fun|fujixerox|fujitsu|ftr|frontier|frontdoor|frogans|frl|fresenius|free|fox|foundation|forum|forsale|forex|ford|football|foodnetwork|food|foo|fly|flsmidth|flowers|florist|flir|flights|flickr|fitness|fit|fishing|fish|firmdale|firestone|fire|financial|finance|final|film|fido|fidelity|fiat|ferrero|ferrari|feedback|fedex|fast|fashion|farmers|farm|fans|fan|family|faith|fairwinds|fail|fage|extraspace|express|exposed|expert|exchange|everbank|events|eus|eurovision|etisalat|esurance|estate|esq|erni|ericsson|equipment|epson|epost|enterprises|engineering|engineer|energy|emerck|email|education|edu|edeka|eco|eat|earth|dvr|dvag|durban|dupont|duns|dunlop|duck|dubai|dtv|drive|download|dot|doosan|domains|doha|dog|dodge|doctor|docs|dnp|diy|dish|discover|discount|directory|direct|digital|diet|diamonds|dhl|dev|design|desi|dentist|dental|democrat|delta|deloitte|dell|delivery|degree|deals|dealer|deal|dds|dclk|day|datsun|dating|date|data|dance|dad|dabur|cyou|cymru|cuisinella|csc|cruises|cruise|crs|crown|cricket|creditunion|creditcard|credit|cpa|courses|coupons|coupon|country|corsica|coop|cool|cookingchannel|cooking|contractors|contact|consulting|construction|condos|comsec|computer|compare|company|community|commbank|comcast|com|cologne|college|coffee|codes|coach|clubmed|club|cloud|clothing|clinique|clinic|click|cleaning|claims|cityeats|city|citic|citi|citadel|cisco|circle|cipriani|church|chrysler|chrome|christmas|chloe|chintai|cheap|chat|chase|charity|channel|chanel|cfd|cfa|cern|ceo|center|ceb|cbs|cbre|cbn|cba|catholic|catering|cat|casino|cash|caseih|case|casa|cartier|cars|careers|career|care|cards|caravan|car|capitalone|capital|capetown|canon|cancerresearch|camp|camera|cam|calvinklein|call|cal|cafe|cab|bzh|buzz|buy|business|builders|build|bugatti|budapest|brussels|brother|broker|broadway|bridgestone|bradesco|box|boutique|bot|boston|bostik|bosch|boots|booking|book|boo|bond|bom|bofa|boehringer|boats|bnpparibas|bnl|bmw|bms|blue|bloomberg|blog|blockbuster|blanco|blackfriday|black|biz|bio|bingo|bing|bike|bid|bible|bharti|bet|bestbuy|best|berlin|bentley|beer|beauty|beats|bcn|bcg|bbva|bbt|bbc|bayern|bauhaus|basketball|baseball|bargains|barefoot|barclays|barclaycard|barcelona|bar|bank|band|bananarepublic|banamex|baidu|baby|azure|axa|aws|avianca|autos|auto|author|auspost|audio|audible|audi|auction|attorney|athleta|associates|asia|asda|arte|art|arpa|army|archi|aramco|arab|aquarelle|apple|app|apartments|aol|anz|anquan|android|analytics|amsterdam|amica|amfam|amex|americanfamily|americanexpress|amazon|alstom|alsace|ally|allstate|allfinanz|alipay|alibaba|alfaromeo|akdn|airtel|airforce|airbus|aigo|aig|agency|agakhan|africa|afl|afamilycompany|aetna|aero|aeg|adult|ads|adac|actor|active|aco|accountants|accountant|accenture|academy|abudhabi|abogado|able|abc|abbvie|abbott|abb|abarth|aarp|aaa|onion)(?=[^0-9a-zA-Z@+-]|$))",
                ),
                i = /(?:xn--[\-0-9a-z]+)/,
                n = (0, t.Z)(/(?:(?:[\-a-z0-9#{latinAccentChars}]+)\.)+(?:#{validGTLD}|#{validCCTLD}|#{validPunycode})/gi, { latinAccentChars: s.Z, validGTLD: r, validCCTLD: c, validPunycode: i }),
                l = {
                    toAscii: (e) => {
                        if ("xn--" === e.substring(0, 4) && !e.match(n)) return;
                        const u = e.split(".");
                        for (const e of u) {
                            const u = d.ZP.toASCII(e);
                            if (u.length < 1 || u.length > 63) return;
                        }
                        return u.join(".");
                    },
                },
                o = /\u202A-\u202E\u061C\u200E\u200F\u2066\u2067\u2068\u2069/,
                f = /\uFFFE\uFFFF/;
            var h = a(26883),
                m = a(721280);
            const b = (0, t.Z)("#{punct}#{spacesGroup}#{invalidCharsGroup}#{directionalMarkersGroup}", { punct: h.Z, spacesGroup: m.Z, invalidCharsGroup: f, directionalMarkersGroup: o }),
                g = (0, t.Z)(/[^#{invalidDomainChars}]/, { invalidDomainChars: b }),
                p = (0, t.Z)(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/, { validDomainChars: g }),
                v = (0, t.Z)(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/, { validDomainChars: g }),
                x = (0, t.Z)(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/, { validDomainName: p, validSubdomain: v, validGTLD: r, validCCTLD: c, validPunycode: i }),
                w = /[0-9]+/,
                y = /\u0400-\u04FF/,
                k = (0, t.Z)(/[a-z#{cyrillicLettersAndMarks}0-9!\*';:=\+,\.\$\/%#\[\]\-\u2013_~@\|&#{latinAccentChars}]/i, { cyrillicLettersAndMarks: y, latinAccentChars: s.Z }),
                C = (0, t.Z)("\\((?:#{validGeneralUrlPathChars}+|(?:#{validGeneralUrlPathChars}*\\(#{validGeneralUrlPathChars}+\\)#{validGeneralUrlPathChars}*))\\)", { validGeneralUrlPathChars: k }, "i"),
                j = (0, t.Z)(/[\+\-a-z#{cyrillicLettersAndMarks}0-9=_#\/#{latinAccentChars}]|(?:#{validUrlBalancedParens})/i, { cyrillicLettersAndMarks: y, latinAccentChars: s.Z, validUrlBalancedParens: C }),
                z = (0, t.Z)("(?:(?:#{validGeneralUrlPathChars}*(?:#{validUrlBalancedParens}#{validGeneralUrlPathChars}*)*#{validUrlPathEndingChars})|(?:@#{validGeneralUrlPathChars}+/))", { validGeneralUrlPathChars: k, validUrlBalancedParens: C, validUrlPathEndingChars: j }, "i"),
                Z = (0, t.Z)(/(?:[^A-Za-z0-9@＠$#＃#{invalidCharsGroup}]|[#{directionalMarkersGroup}]|^)/, { invalidCharsGroup: f, directionalMarkersGroup: o }),
                L = /[a-z0-9!?\*'@\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i,
                M = /[a-z0-9\-_&=#\/]/i,
                N = (0, t.Z)("((#{validUrlPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/#{validUrlPath}*)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))", { validUrlPrecedingChars: Z, validDomain: x, validPortNumber: w, validUrlPath: z, validUrlQueryChars: L, validUrlQueryEndingChars: M }, "gi"),
                F = /[-_.\/]$/,
                A = (0, t.Z)(/^https?:\/\/t\.co\/([a-z0-9]+)(?:\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?/, { validUrlQueryChars: L, validUrlQueryEndingChars: M }, "i"),
                P = { extractUrlsWithoutProtocol: !0 },
                B = (e, u, a) => {
                    let d = e.length;
                    const t = l.toAscii(a);
                    return !(!t || !t.length) && ((d = d + t.length - a.length), u.length + d <= 4096);
                },
                E = (e, u = P) => {
                    if (!e || (u.extractUrlsWithoutProtocol ? !e.match(/\./) : !e.match(/:/))) return [];
                    const a = [];
                    for (; N.exec(e); ) {
                        const e = RegExp.$2;
                        let d = RegExp.$3;
                        const t = RegExp.$4,
                            s = RegExp.$5,
                            c = RegExp.$7;
                        let r = N.lastIndex;
                        const i = r - d.length;
                        if (B(d, t || "https://", s))
                            if (t) {
                                if (d.match(A)) {
                                    const e = RegExp.$1;
                                    if (e && e.length > 40) continue;
                                    (d = RegExp.lastMatch), (r = i + d.length);
                                }
                                a.push({ url: d, indices: [i, r] });
                            } else {
                                if (!u.extractUrlsWithoutProtocol || e.match(F)) continue;
                                let t = null,
                                    l = 0;
                                if (
                                    (s.replace(n, (e) => {
                                        const u = s.indexOf(e, l);
                                        return (l = u + e.length), (t = { url: e, indices: [i + u, i + l] }), a.push(t), "";
                                    }),
                                    null === t)
                                )
                                    continue;
                                c && ((t.url = d.replace(s, t.url)), (t.indices[1] = r));
                            }
                    }
                    return a;
                };
        },
        509597: (e, u, a) => {
            "use strict";
            a.d(u, { s: () => t });
            var d = a(455091);
            const t = (e) => {
                const { t: u, i18n: a } = (0, d.$G)(),
                    t = 1024 * e * 1024,
                    s = new Intl.NumberFormat(a.language, { maximumFractionDigits: 1 });
                if (t < 1024) return u("{filesize} B", { filesize: s.format(t) });
                if (t < 1048576) {
                    return u("{filesize} KB", { filesize: s.format(t / 1024) });
                }
                if (t < 1073741824) {
                    return u("{filesize} MB", { filesize: s.format(t / 1024 / 1024) });
                }
                return u("{filesize} GB", { filesize: s.format(t / 1024 / 1024 / 1024) });
            };
        },
        381973: (e, u, a) => {
            "use strict";
            function d(e, u, a) {
                let d = a || "";
                const t = "string" == typeof e ? e : e.source;
                return (
                    "string" != typeof e && (e.global && d.indexOf("g") < 0 && (d += "g"), e.ignoreCase && d.indexOf("i") < 0 && (d += "i"), e.multiline && d.indexOf("m") < 0 && (d += "m")),
                    new RegExp(
                        t.replace(/#\{(\w+)\}/g, (e, a) => {
                            let d = u[a] || "";
                            return "string" != typeof d && (d = d.source), d;
                        }),
                        d,
                    )
                );
            }
            a.d(u, { Z: () => d });
        },
        579771: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => d });
            const d = /\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF/;
        },
        26883: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => d });
            const d = /\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~\$/;
        },
        721280: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => d });
            const d = /\x09-\x0D\x20\x85\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000/;
        },
        820062: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsxs)("svg", { viewBox: "0 0 14 14", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: [(0, d.jsx)("path", { d: "M2.16256 1.33754C1.93475 1.10974 1.56541 1.10974 1.3376 1.33754C1.1098 1.56535 1.1098 1.93469 1.3376 2.1625L2.7855 3.6104C2.46865 4.16466 2.25919 4.78916 2.18754 5.45796L1.76493 8.89949C1.67952 9.595 2.22216 10.2084 2.9229 10.2084H9.38346L11.8376 12.6625C12.0654 12.8903 12.4348 12.8903 12.6626 12.6625C12.8904 12.4347 12.8904 12.0653 12.6626 11.8375L2.16256 1.33754Z" }), (0, d.jsx)("path", { d: "M12.2351 8.89949C12.2932 9.37206 12.0613 9.8067 11.6868 10.0368L3.92014 2.27011C4.76367 1.57863 5.84199 1.16669 7.00002 1.16669C9.45456 1.16669 11.551 3.0174 11.8125 5.45797L12.2351 8.89949Z" }), (0, d.jsx)("path", { d: "M4.32604 11.0834C4.77612 12.1135 5.804 12.8334 7.00002 12.8334C8.19604 12.8334 9.22392 12.1135 9.67399 11.0834H4.32604Z" })] });
        },
        266917: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z" }) });
        },
        175135: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("circle", { cx: 12, cy: 12, r: 10.3 }) });
        },
        872443: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M15 6v3h3v2h-3v3h-2v-3h-3V9h3V6h2zm4.5-4C20.88 2 22 3.12 22 4.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C7.12 18 6 16.88 6 15.5v-11C6 3.12 7.12 2 8.5 2h11zM8 15.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5v11zm-4 4V8h-.5C2.67 8 2 8.67 2 9.5v10C2 20.88 3.12 22 4.5 22h10c.83 0 1.5-.67 1.5-1.5V20H4.5c-.28 0-.5-.22-.5-.5z" }) });
        },
        889122: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: [(0, d.jsx)("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), (0, d.jsx)("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })] });
        },
        891283: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zM13.25 7L13 12.7s-.5-.2-1-.2-1 .2-1 .2L10.75 7h2.5zM12 17c-.83 0-1.5-.67-1.5-1.5S11.17 14 12 14s1.5.67 1.5 1.5S12.83 17 12 17z" }) });
        },
        327176: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm6.543.04l1.414 1.42L20 10.41l2.043 2.05 1.414-1.42L21.414 9l2.043-2.04-1.414-1.42L20 7.59l-2.043-2.05-1.414 1.42L18.586 9l-2.043 2.04z" }) });
        },
        615868: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsxs)("g", { fill: "transparent", children: [(0, d.jsx)("path", { id: "vector", d: "M11 4.00006H7.2C6.0799 4.00006 5.51984 4.00006 5.09202 4.21804C4.71569 4.40979 4.40973 4.71575 4.21799 5.09208C4 5.5199 4 6.07995 4 7.20006V16.8001C4 17.9202 4 18.4802 4.21799 18.908C4.40973 19.2844 4.71569 19.5903 5.09202 19.7821C5.51984 20.0001 6.0799 20.0001 7.2 20.0001H16.8C17.9201 20.0001 18.4802 20.0001 18.908 19.7821C19.2843 19.5903 19.5903 19.2844 19.782 18.908C20 18.4802 20 17.9202 20 16.8001V13.0001", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), (0, d.jsx)("path", { id: "vector_2", d: "M9 15V12.4142C9 12.149 9.10536 11.8946 9.29289 11.7071L17.3358 3.66421C18.1168 2.88316 19.3832 2.88316 20.1642 3.66421L20.3358 3.83578C21.1168 4.61683 21.1168 5.88316 20.3358 6.66421L12.2929 14.7071C12.1054 14.8946 11.851 15 11.5858 15H9Z", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "square", strokeLinejoin: "round" })] }) });
        },
        636872: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M17 12v3h-2.998v2h3v3h2v-3h3v-2h-3.001v-3H17zm-5 6.839c-3.871-2.34-6.053-4.639-7.127-6.609-1.112-2.04-1.031-3.7-.479-4.82.561-1.13 1.667-1.84 2.91-1.91 1.222-.06 2.68.51 3.892 2.16l.806 1.09.805-1.09c1.211-1.65 2.668-2.22 3.89-2.16 1.242.07 2.347.78 2.908 1.91.334.677.49 1.554.321 2.59h2.011c.153-1.283-.039-2.469-.539-3.48-.887-1.79-2.647-2.91-4.601-3.01-1.65-.09-3.367.56-4.796 2.01-1.43-1.45-3.147-2.1-4.798-2.01-1.954.1-3.714 1.22-4.601 3.01-.896 1.81-.846 4.17.514 6.67 1.353 2.48 4.003 5.12 8.382 7.67l.502.299v-2.32z" }) });
        },
        861514: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z" }) });
        },
        125718: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z" }) });
        },
        866426: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M17.584 4l-2.043-2.043L16.955.543l2.043 2.043L21.041.543l1.414 1.414L20.412 4l2.043 2.043-1.414 1.414-2.043-2.043-2.043 2.043-1.414-1.414L17.584 4zm-11.4-.949C7.734 2.534 9.849 2 12 2v2c-1.849 0-3.734.465-5.184.949-.719.24-1.318.479-1.735.658L5 5.642v6.377c0 1.565.445 3.066 1.291 4.269 1.467-1.484 3.429-2.287 5.715-2.287s4.241.801 5.708 2.279C18.557 15.079 19 13.581 19 12.019V11h2v1.019c0 2.407-.852 4.792-2.575 6.514-.282.282-.587.545-.914.787-.86.636-1.821 1.288-2.742 1.785-.882.476-1.879.895-2.768.895s-1.886-.42-2.768-.895c-.922-.497-1.882-1.149-2.742-1.785-.324-.24-.626-.5-.905-.778-1.729-1.723-2.584-4.112-2.584-6.523V4.382l.553-.276.447.894-.447-.894h.002l.004-.003.012-.006.04-.02.146-.069c.126-.059.308-.141.537-.24.458-.196 1.109-.457 1.89-.717h-.002zM16.32 17.713C15.234 16.605 13.783 16 12.007 16s-3.232.608-4.318 1.719c.82.606 1.692 1.193 2.493 1.625.844.455 1.463.656 1.819.656s.975-.2 1.819-.656c.804-.433 1.678-1.023 2.5-1.631zM12 8c-.828 0-1.5.672-1.5 1.5S11.172 11 12 11s1.5-.672 1.5-1.5S12.828 8 12 8zM8.5 9.5C8.5 7.567 10.067 6 12 6s3.5 1.567 3.5 3.5S13.933 13 12 13s-3.5-1.567-3.5-3.5z" }) });
        },
        291680: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M17.998 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zm-11.814.051C7.734 2.534 9.849 2 12 2v2c-1.849 0-3.734.465-5.184.949-.719.24-1.318.479-1.735.658L5 5.642v6.377c0 1.565.445 3.066 1.291 4.269 1.467-1.484 3.429-2.287 5.715-2.287s4.241.801 5.708 2.28C18.557 15.08 19 13.582 19 12.02v-1.019h2v1.019c0 2.407-.852 4.792-2.575 6.514-.282.282-.587.545-.914.787-.86.636-1.821 1.288-2.742 1.785-.882.476-1.879.895-2.768.895s-1.886-.42-2.768-.895c-.922-.497-1.882-1.149-2.742-1.785-.324-.24-.626-.5-.905-.778-1.729-1.723-2.584-4.112-2.584-6.523V4.382l.553-.276.447.894-.447-.894h.002l.004-.003.012-.006.04-.02.146-.069c.126-.059.308-.141.537-.24.458-.196 1.109-.457 1.89-.717h-.002zM16.32 17.713C15.234 16.605 13.783 16 12.007 16s-3.232.608-4.318 1.719c.82.606 1.692 1.193 2.493 1.625.844.455 1.463.656 1.819.656s.975-.2 1.819-.656c.804-.433 1.678-1.023 2.5-1.631zM12.001 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-3.5 1.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5z" }) });
        },
        848553: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" }) });
        },
        54686: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: [(0, d.jsx)("path", { fill: "#FFD700", d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z" }), (0, d.jsx)("path", { fill: "#FFF", d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z" })] });
        },
        468428: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M12 5c-.83 0-1.5.67-1.5 1.5S11.17 8 12 8s1.5-.67 1.5-1.5S12.83 5 12 5zM8.5 6.5C8.5 4.57 10.07 3 12 3s3.5 1.57 3.5 3.5S13.93 10 12 10 8.5 8.43 8.5 6.5zm-3.25 1c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm-2.75.75c0-1.52 1.23-2.75 2.75-2.75S8 6.73 8 8.25 6.77 11 5.25 11 2.5 9.77 2.5 8.25zm16.25-.75c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zM16 8.25c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75S20.27 11 18.75 11 16 9.77 16 8.25zM12 13c-1.29 0-2.37.54-3.22 1.61C8 15.6 7.4 17.07 7.12 19h9.76c-.27-1.85-.83-3.28-1.57-4.28C14.45 13.58 13.34 13 12 13zm-4.78.36C8.41 11.86 10.06 11 12 11c2.02 0 3.7.92 4.91 2.53 1.18 1.57 1.88 3.77 2.09 6.39l.08 1.08H4.92L5 19.92c.22-2.7.96-4.97 2.22-6.56zM2.95 16c.16-.55.39-.97.66-1.28.4-.46.94-.72 1.64-.72v-2c-1.26 0-2.35.49-3.15 1.4-.78.89-1.22 2.11-1.35 3.51L.65 18H4v-2H2.95zm18.95-2.6c.78.89 1.22 2.11 1.35 3.51l.1 1.09H20v-2h1.05c-.16-.55-.39-.97-.66-1.28-.4-.46-.94-.72-1.64-.72v-2c1.26 0 2.35.49 3.15 1.4z" }) });
        },
        48783: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { viewBox: "0 0 12 12", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M3.393 5.565L4.826 7L3.942 7.88L1 4.94L3.942 2L4.826 2.88L3.393 4.315H6.634C8.498 4.315 10.009 5.825 10.009 7.69V9.44H8.759V7.69C8.759 6.515 7.8075 5.565 6.634 5.565H3.393Z" }) });
        },
        503371: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z" }) });
        },
        394729: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, d.jsx)("path", { d: "M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z" }) });
        },
        117416: (e, u, a) => {
            "use strict";
            a.d(u, { Z: () => t });
            var d = a(552322);
            const t = (e) => (0, d.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, d.jsx)("path", { d: "M19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13ZM8.29297 9.29297C8.65908 8.92685 9.23809 8.90426 9.63086 9.22461L9.70703 9.29297L12.707 12.293L12.7754 12.3691C13.0957 12.7619 13.0731 13.3409 12.707 13.707C12.3409 14.0731 11.7619 14.0957 11.3691 13.7754L11.293 13.707L8.29297 10.707L8.22461 10.6309C7.90426 10.2381 7.92685 9.65908 8.29297 9.29297ZM14 1C14.5523 1 15 1.44772 15 2C15 2.55228 14.5523 3 14 3H10C9.44772 3 9 2.55228 9 2C9 1.44772 9.44772 1 10 1H14ZM21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13Z", fill: "currentColor" }) });
        },
        776604: (e, u, a) => {
            "use strict";
            a.d(u, { P: () => m });
            var d = a(552322),
                t = a(202784),
                s = a(941204);
            const c = ({ destructive: e, icon: u, onClick: a, text: c }) => (0, d.jsxs)("button", { type: "button", className: "px-6 flex items-center h-10 min-w-10 gap-3 w-full justify-start border-transparent hover:bg-gray-50 focus:brightness-100 " + (e ? "text-destructive" : "text-text"), onClick: a, children: [u && (0, t.cloneElement)(u, { className: "size-[22px]" }), (0, d.jsx)(s.x, { color: "inherit", numberOfLines: 1, size: "body", weight: "bold", children: c })] });
            var r = a(469745),
                i = a(110929),
                n = a(194787);
            const l = (0, i.j)("bg-background h-fit fixed bottom-0 left-0 right-0 outline-none", { variants: { borderRadius: { "2xLarge": "rounded-t-2xl", "3xLarge": "rounded-t-3xl", full: "rounded-t-full", large: "rounded-t-lg", medium: "rounded-t-md", none: "rounded-t-none", small: "rounded-t-sm", xLarge: "rounded-t-xl", true: "rounded-t" } } });
            function o({ borderRadius: e = "medium", children: u, className: a, title: t, trigger: s, withHandle: c, ...r }) {
                return (0, d.jsxs)(n.dy.Root, { ...r, children: [(0, d.jsx)(n.dy.Trigger, { asChild: !0, children: s }), (0, d.jsxs)(n.dy.Portal, { children: [(0, d.jsx)(n.dy.Overlay, { className: "fixed inset-0 bg-black/40" }), (0, d.jsxs)(n.dy.Content, { className: l({ borderRadius: e, className: a }), children: [c && (0, d.jsx)(n.dy.Handle, { className: "my-2" }), t && (0, d.jsx)(n.dy.Title, { children: t }), u] })] })] });
            }
            var f = a(86781);
            function h({ children: e, open: u, onOpenChange: a, trigger: t }) {
                return (0, r.a)("(min-width: 768px)") ? (0, d.jsx)(f.J, { open: u, onOpenChange: a, trigger: t, withArrow: !0, children: e }) : (0, d.jsx)(o, { open: u, onOpenChange: a, trigger: t, children: e });
            }
            const m = ({ items: e, open: u, onOpenChange: a, trigger: t }) => (0, d.jsx)(h, { trigger: t, open: u, onOpenChange: a, children: (0, d.jsx)("div", { className: "flex flex-col items-start justify-start rounded-sm gap-1", children: e.map((e) => (0, d.jsx)(c, { ...e }, e.text)) }) });
        },
        863380: (e, u, a) => {
            "use strict";
            a.d(u, { r: () => s });
            var d = a(552322),
                t = a(796309);
            function s({ className: e, strength: u = 5, to: a = "bottom" }) {
                return (0, d.jsxs)("div", {
                    className: (0, t.cn)("absolute inset-0", e),
                    children: [
                        (0, d.jsx)("div", { className: "absolute inset-0", style: { background: `linear-gradient(to ${a}, transparent 10%, hsl(var(--colors-background)) 100%)` } }),
                        Array.from({ length: u })
                            .map((e, u) => u + 1)
                            .map((e) => (0, d.jsx)("div", { className: "absolute inset-0", style: { backdropFilter: "blur(8px)", mask: `linear-gradient(to ${a}, transparent 0%, hsl(var(--colors-background) / 0.8) 50%, hsl(var(--colors-background) / 1) 100%)` } }, e)),
                    ],
                });
            }
        },
        475694: (e, u, a) => {
            "use strict";
            a.d(u, { o: () => s });
            var d = a(552322),
                t = a(26429);
            function s({ size: e = "medium", spacing: u = 12, urls: a, resolution: s, stackOrder: c = "descending" }) {
                const r = (function (e, u) {
                    if ("ascending" === u) return e.map((e, u) => ({ index: u, scale: "scale-75" }));
                    if ("descending" === u) return e.map((u, a) => ({ index: e.length - a, scale: "scale-75" }));
                    const a = Math.floor(e.length / 2);
                    return e.map((u, d) => {
                        if (d === a) return { index: e.length, scale: "scale-100" };
                        const t = Math.abs(d - a);
                        return { index: e.length - t, scale: "scale-75" };
                    });
                })(a, c);
                return (0, d.jsx)("div", { className: "flex", style: { marginInlineStart: `${u}px` }, children: a.map((a, c) => (0, d.jsx)("div", { className: "rounded-full bg-background p-0.5", style: { marginInlineStart: -1 * u, zIndex: r[c]?.index }, children: (0, d.jsx)(t.q, { size: e, shape: "circle", url: a, resolution: s, className: r[c]?.scale }) }, `${a}${c}`)) });
            }
        },
        335944: (e, u, a) => {
            "use strict";
            a.d(u, { e: () => i });
            var d = a(552322),
                t = a(501827),
                s = a(521634),
                c = a(164695),
                r = a(202784);
            function i({ mediaItems: e, initialIndex: u = 0, isOpen: a, onClose: i }) {
                const [n, l] = (0, r.useState)(u);
                (0, r.useEffect)(() => {
                    l(u);
                }, [u]);
                const o = e[n],
                    f = (e) => {
                        e.target === e.currentTarget && i();
                    };
                return a && o
                    ? (0, d.jsx)(c.Vq, {
                          open: a,
                          onOpenChange: i,
                          children: (0, d.jsxs)(c.PK, {
                              children: [
                                  (0, d.jsx)(c.t9, { className: "fixed inset-0 bg-black/50 z-50" }),
                                  (0, d.jsxs)(c.cZ, {
                                      className: "fixed z-50 w-full h-[95vh] max-w-[100vw] outline-none border-none bg-transparent flex items-center justify-center",
                                      onClick: f,
                                      children: [
                                          (0, d.jsx)("div", { className: "w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center bg-transparent", onClick: f, children: "animated_gif" === o.type ? (0, d.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh]", onClick: (e) => e.stopPropagation(), children: (0, d.jsx)("video", { src: o.src, autoPlay: !0, loop: !0, muted: !0, playsInline: !0, className: "max-w-full max-h-full object-contain", poster: o.previewImage }) }) : (0, d.jsx)("div", { className: "relative flex items-center justify-center max-h-[85vh] overflow-hidden", onClick: (e) => e.stopPropagation(), children: (0, d.jsx)("img", { src: o.src, alt: "", className: "w-full h-full object-cover max-h-[inherit] select-none" }) }) }),
                                          e.length > 1 &&
                                              (0, d.jsxs)(d.Fragment, {
                                                  children: [
                                                      (0, d.jsx)("div", {
                                                          className: "absolute inset-x-0 z-[60]",
                                                          onClick: (e) => e.stopPropagation(),
                                                          children: (0, d.jsxs)("div", {
                                                              className: "relative w-full flex",
                                                              children: [
                                                                  (0, d.jsx)("div", {
                                                                      className: "flex-1 flex justify-start",
                                                                      children:
                                                                          n > 0 &&
                                                                          (0, d.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (u) => {
                                                                                  u.preventDefault(), u.stopPropagation(), l((u) => (u > 0 ? u - 1 : e.length - 1));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "previous",
                                                                              children: (0, d.jsx)(t.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                                  (0, d.jsx)("div", {
                                                                      className: "flex-1 flex justify-end",
                                                                      children:
                                                                          n < e.length - 1 &&
                                                                          (0, d.jsx)("button", {
                                                                              type: "button",
                                                                              onClick: (u) => {
                                                                                  u.preventDefault(), u.stopPropagation(), l((u) => (u < e.length - 1 ? u + 1 : 0));
                                                                              },
                                                                              className: "p-2 bg-black/30 text-white/75 hover:bg-black/50 hover:text-white transition-all [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] touch-none",
                                                                              "aria-label": "next",
                                                                              children: (0, d.jsx)(s.Z, { className: "w-4 h-4" }),
                                                                          }),
                                                                  }),
                                                              ],
                                                          }),
                                                      }),
                                                      (0, d.jsxs)("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center text-white text-subtext1 z-[60]", onClick: (e) => e.stopPropagation(), children: [n + 1, " / ", e.length] }),
                                                  ],
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            }
        },
        844098: (e, u, a) => {
            "use strict";
            a.d(u, { s: () => c });
            var d = a(552322),
                t = a(840489),
                s = a(533131);
            function c({ variant: e = "normal", ...u }) {
                return (0, d.jsx)(s.ZA, { className: "z-40 bg-mask fixed bottom-0 end-0 start-0 top-0 flex h-full w-full items-center justify-center", ...u, children: (0, d.jsx)(s.u_, { ...u, className: (0, t.Z)("bg-background max-h-full overflow-y-auto rounded-xl", "small" === e && "max-w-[32rem]", "normal" === e && "max-w-[60rem]") }) });
            }
        },
        130629: (e, u, a) => {
            "use strict";
            a.d(u, { x: () => s });
            var d = a(552322),
                t = a(941204);
            const s = ({ leftContent: e, rightContent: u, title: a, subtitle: s }) => (0, d.jsxs)("div", { className: "flex flex-row justify-between  p-2 py-4", children: [(0, d.jsxs)("div", { className: "flex flex-row justify-start items-center gap-2", children: [e, (0, d.jsxs)("div", { className: "flex flex-col", children: [(0, d.jsx)(t.x, { size: "headline1", weight: "extrabold", children: a }), s && (0, d.jsx)(t.x, { color: "gray700", children: s })] })] }), u] });
        },
        849335: (e, u, a) => {
            "use strict";
            a.d(u, { r: () => r });
            var d = a(552322),
                t = a(199237),
                s = a(202784),
                c = a(796309);
            const r = (0, s.forwardRef)(function ({ className: e, size: u = "medium", thumbClassName: a, ...s }, r) {
                return (0, d.jsx)(t.fC, { className: (0, c.cn)("focus-visible:ring-offset-background data-[state=checked]:bg-primary rounded-full focus-visible:ring-primary inline-flex shrink-0 cursor-pointer items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-gray-500", "medium" === u ? "h-3 w-10" : "h-2 w-6", e), ...s, ref: r, children: (0, d.jsx)(t.bU, { className: (0, c.cn)("rounded-full pointer-events-none block shadow-md ring-0 transition-transform data-[state=checked]:bg-blue-300 data-[state=unchecked]:bg-gray-50", "medium" === u ? "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5 data-[state=unchecked]:translate-x-0" : "size-3.5 data-[state=checked]:translate-x-2.5 data-[state=checked]:rtl:-translate-x-2.5 data-[state=unchecked]:translate-x-0", a) }) });
            });
        },
        597322: (e, u, a) => {
            "use strict";
            a.r(u), a.d(u, { default: () => h });
            a(136728);
            var d = a(202784),
                t = a(176453),
                s = a(325686),
                c = a(107267),
                r = a(67369),
                i = a(392237),
                n = a(857378),
                l = a(252021),
                o = a(234622);
            a(536188);
            const f = i.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                h = (e) => {
                    const u = (0, r.yu)(),
                        a = (0, c.useHistory)(),
                        { id: i, token: h } = (0, c.useParams)(),
                        m = u ? n.h$ : 0;
                    return (i && h) || a.push("/i/chat"), d.createElement(o.i, null, d.createElement(l.Z, { history: a, isFullWidth: !0, primaryContent: () => d.createElement(s.Z, { style: f.root }, d.createElement(t.N, { groupId: i, settings: { path: "/i/chat", bottomBarHeight: m }, token: h })), sidebarContent: null }));
                };
        },
        647665: (e, u, a) => {
            "use strict";
            a.r(u), a.d(u, { default: () => h });
            var d = a(202784),
                t = a(954713),
                s = a(325686),
                c = a(107267),
                r = a(67369),
                i = a(392237),
                n = a(857378),
                l = a(252021),
                o = a(234622);
            a(470201);
            const f = i.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                h = (e) => {
                    const u = (0, r.yu)(),
                        a = (0, c.useHistory)(),
                        { xChatPinMode: i, xChatPinRegister: h } = (0, c.useParams)(),
                        m = u ? n.h$ : 0;
                    return d.createElement(o.i, null, d.createElement(l.Z, { history: a, isFullWidth: !0, primaryContent: () => d.createElement(s.Z, { style: f.root }, d.createElement(t.x, { mode: i ?? "new", settings: { path: "/i/chat", bottomBarHeight: m }, shouldRegister: "register" === h })), sidebarContent: null }));
                };
        },
        476644: (e, u, a) => {
            "use strict";
            a.r(u), a.d(u, { default: () => b });
            var d = a(202784),
                t = a(700931),
                s = a(264531),
                c = a(325686),
                r = a(107267),
                i = a(67369),
                n = a(392237),
                l = a(857378),
                o = a(252021),
                f = a(234622),
                h = (a(434882), a(952793));
            const m = n.default.create((e) => ({ root: { width: "100%", display: "block" } })),
                b = (e) => {
                    const u = (0, r.useHistory)(),
                        a = (0, r.useLocation)(),
                        n = (0, h.hC)("rweb_xchat_debug_enabled"),
                        b = (0, i.yu)(),
                        g = !("/i/chat/" === a.pathname || "/i/chat" === a.pathname),
                        p = b && !g ? l.h$ : 0,
                        v = (0, h.hC)("rweb_xchat_logs");
                    return d.createElement(f.i, null, d.createElement(o.Z, { headerless: b && g, history: u, isFullWidth: !0, primaryContent: () => d.createElement(c.Z, { style: m.root }, d.createElement(t.H, { settings: { path: "/i/chat", showDebugOptions: n, bottomBarHeight: p, logLevel: v ? s.B$.INFO : s.B$.ERROR } })), sidebarContent: null }));
                };
        },
        115290: (e, u, a) => {
            var d = a(482609),
                t = a(274380);
            (u = d(!1)).i(t), u.push([e.id, "\n", ""]), (e.exports = u);
        },
        278003: (e, u, a) => {
            var d = a(482609),
                t = a(274380);
            (u = d(!1)).i(t), u.push([e.id, "\n", ""]), (e.exports = u);
        },
        606299: (e, u, a) => {
            var d = a(482609),
                t = a(274380);
            (u = d(!1)).i(t), u.push([e.id, "\n", ""]), (e.exports = u);
        },
        536188: (e, u, a) => {
            var d = a(46062),
                t = a(115290);
            "string" == typeof (t = t.__esModule ? t.default : t) && (t = [[e.id, t, ""]]);
            var s = { insert: "head", singleton: !1 };
            d(t, s);
            e.exports = t.locals || {};
        },
        470201: (e, u, a) => {
            var d = a(46062),
                t = a(278003);
            "string" == typeof (t = t.__esModule ? t.default : t) && (t = [[e.id, t, ""]]);
            var s = { insert: "head", singleton: !1 };
            d(t, s);
            e.exports = t.locals || {};
        },
        434882: (e, u, a) => {
            var d = a(46062),
                t = a(606299);
            "string" == typeof (t = t.__esModule ? t.default : t) && (t = [[e.id, t, ""]]);
            var s = { insert: "head", singleton: !1 };
            d(t, s);
            e.exports = t.locals || {};
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e96e9bea.ee1be54a.js.map
