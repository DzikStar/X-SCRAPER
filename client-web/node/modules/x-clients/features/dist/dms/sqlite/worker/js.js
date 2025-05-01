(() => {
    "use strict";
    var e,
        r,
        t = {
            670995: (e, r, t) => {
                var s = t(670267);
                (globalThis.sqlite3Worker1Promiser = function e(r = e.defaultConfig) {
                    if (1 === arguments.length && "function" == typeof arguments[0]) {
                        const t = r;
                        (r = Object.assign(Object.create(null), e.defaultConfig)).onready = t;
                    } else r = Object.assign(Object.create(null), e.defaultConfig, r);
                    const t = Object.create(null),
                        s = function () {},
                        o = r.onerror || s,
                        n = r.debug || s,
                        a = r.generateMessageId ? void 0 : Object.create(null),
                        i =
                            r.generateMessageId ||
                            function (e) {
                                return e.type + "#" + (a[e.type] = (a[e.type] || 0) + 1);
                            },
                        l = (...e) => {
                            throw new Error(e.join(" "));
                        };
                    let c, d;
                    return (
                        r.worker || (r.worker = e.defaultConfig.worker),
                        "function" == typeof r.worker && (r.worker = r.worker()),
                        (r.worker.onmessage = function (e) {
                            (e = e.data), n("worker1.onmessage", e);
                            let s = t[e.messageId];
                            if (!s) return e && "sqlite3-api" === e.type && "worker1-ready" === e.result ? void (r.onready && r.onready(d)) : ((s = t[e.type]), s && s.onrow ? void s.onrow(e) : void (r.onunhandled ? r.onunhandled(arguments[0]) : o("sqlite3Worker1Promiser() unhandled worker message:", e)));
                            switch ((delete t[e.messageId], e.type)) {
                                case "error":
                                    return void s.reject(e);
                                case "open":
                                    c || (c = e.dbId);
                                    break;
                                case "close":
                                    e.dbId === c && (c = void 0);
                            }
                            try {
                                s.resolve(e);
                            } catch (e) {
                                s.reject(e);
                            }
                        }),
                        (d = function () {
                            let e;
                            1 === arguments.length ? (e = arguments[0]) : 2 === arguments.length ? ((e = Object.create(null)), (e.type = arguments[0]), (e.args = arguments[1]), (e.dbId = e.args.dbId)) : l("Invalid arguments for sqlite3Worker1Promiser()-created factory."), e.dbId || "open" === e.type || (e.dbId = c), (e.messageId = i(e)), (e.departureTime = performance.now());
                            const s = Object.create(null);
                            let o;
                            (s.message = e), "exec" === e.type && e.args && ("function" == typeof e.args.callback ? ((o = e.messageId + ":row"), (s.onrow = e.args.callback), (e.args.callback = o), (t[o] = s)) : "string" == typeof e.args.callback && l("exec callback may not be a string when using the Promise interface."));
                            let a = new Promise(function (o, a) {
                                (s.resolve = o), (s.reject = a), (t[e.messageId] = s), n("Posting", e.type, "message to Worker dbId=" + (c || "default") + ":", e), r.worker.postMessage(e);
                            });
                            return o && (a = a.finally(() => delete t[o])), a;
                        })
                    );
                }),
                    (globalThis.sqlite3Worker1Promiser.defaultConfig = {
                        worker: function () {
                            return new Worker(new URL(t.p + t.u("node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs"), t.b), { type: void 0 });
                        },
                        onerror: (...e) => {},
                    }),
                    (sqlite3Worker1Promiser.v2 = function (e) {
                        let r;
                        "function" == typeof e ? ((r = e), (e = {})) : "function" == typeof e?.onready && ((r = e.onready), delete e.onready);
                        const t = Object.create(null);
                        e = Object.assign(e || Object.create(null), {
                            onready: async function (e) {
                                try {
                                    r && (await r(e)), t.resolve(e);
                                } catch (e) {
                                    t.reject(e);
                                }
                            },
                        });
                        const s = new Promise(function (e, r) {
                            (t.resolve = e), (t.reject = r);
                        });
                        try {
                            this.original(e);
                        } catch (e) {
                            t.reject(e);
                        }
                        return s;
                    }.bind({ original: sqlite3Worker1Promiser }));
                sqlite3Worker1Promiser.v2, globalThis.sqlite3Worker1Promiser;
                const o = s.Z,
                    n = "xchat";
                let a = null,
                    i = null,
                    l = null;
                async function c(e = "xchat.sqlite3") {
                    const r = await o({ print: console.log, printErr: console.error }),
                        t = function e(t) {
                            if (e.vfsName) return !1;
                            const s = r.capi.sqlite3_vfs_find(t);
                            if (s) {
                                const o = r.capi.sqlite3_vfs_register(s, 1);
                                o && r.SQLite3Error.toss(o, "While trying to register", t, "vfs."), (e.vfsName = t);
                            }
                            return !!s;
                        };
                    if (((t.vfsName = void 0), r.installOpfsSAHPoolVfs)) {
                        function s() {
                            return r
                                .installOpfsSAHPoolVfs({ clearOnInit: !1, initialCapacity: 15, name: e })
                                .then((e) => {
                                    t(e.vfsName),
                                        (a = new e.OpfsSAHPoolDb(`/${n}`)),
                                        (l = new BroadcastChannel(n)),
                                        (l.onmessage = ({ data: r }) => {
                                            if (r?.workerId && r.requestId && r.param) {
                                                const { workerId: t, requestId: s, param: o } = r,
                                                    a = `/${t}-${n}`,
                                                    i =
                                                        g.get(a) ??
                                                        (() => {
                                                            const r = e.exportFile(`/${n}`);
                                                            e.importDb(a, r);
                                                            const t = new e.OpfsSAHPoolDb(a);
                                                            return g.set(a, t), t;
                                                        })();
                                                l.postMessage({ requestId: s, response: i.exec(o) });
                                            } else if ("before_logout" === r?.action) {
                                                const r = e.getFileNames();
                                                for (const t of r) e.unlink(t);
                                                g.clear(), l.postMessage({ action: "before_logout_done" }), l.close();
                                            }
                                        });
                                    const r = e.getFileNames();
                                    for (const t of r) t === `/${n}` || g.has(t) || e.unlink(t);
                                })
                                .catch((e) => {});
                        }
                        return new Promise((e, r) => {
                            navigator.locks.request(n, { ifAvailable: !0 }, async (r) =>
                                r
                                    ? (e(s()), new Promise(() => {}))
                                    : ((a = (function (e) {
                                          function r(r) {
                                              return new Promise((t, s) => {
                                                  const o = new BroadcastChannel(e),
                                                      n = Math.random().toString(36).substring(2);
                                                  (o.onmessage = ({ data: e }) => {
                                                      e && e.requestId === n && e.response && (o.close(), t(e.response));
                                                  }),
                                                      o.postMessage({ workerId: f, requestId: n, param: r });
                                              });
                                          }
                                          return { exec: r };
                                      })(n)),
                                      e(),
                                      void navigator.locks.request(n, async (e) => (s(), new Promise(() => {})))),
                            );
                        });
                    }
                    a = new r.oo1.DB(e, "c");
                }
                async function d() {
                    const e = this.data;
                    switch (e?.action) {
                        case "exec":
                            if (!e.sql) throw new Error("exec: Missing query string");
                            return postMessage({ id: e.id, results: { values: await a.exec({ sql: e.sql, bind: e.params, returnValue: "resultRows" }) } });
                        case "begin_transaction":
                            return postMessage({ id: e.id, results: await a.exec("BEGIN TRANSACTION;") });
                        case "end_transaction":
                            return postMessage({ id: e.id, results: await a.exec("END TRANSACTION;") });
                        case "rollback_transaction":
                            return postMessage({ id: e.id, results: await a.exec("ROLLBACK TRANSACTION;") });
                        default:
                            throw new Error(`Unsupported action: ${e?.action}`);
                    }
                }
                function u(e) {
                    return postMessage({ id: this.data.id, error: e });
                }
                "function" == typeof importScripts && (self.onmessage = (e) => ("init_db" === e.data.action && (i = c(e.data.dbName)), i || (i = c()), i.then(d.bind(e)).catch(u.bind(e))));
                const f = Math.random().toString(36).substring(2);
                const g = new Map();
            },
        },
        s = {};
    function o(e) {
        var r = s[e];
        if (void 0 !== r) return r.exports;
        var n = (s[e] = { exports: {} });
        return t[e](n, n.exports, o), n.exports;
    }
    (o.m = t),
        (o.x = () => {
            var e = o.O(void 0, ["shared~~-5a94f17d", "shared~~-ab3eb430"], () => o(670995));
            return (e = o.O(e));
        }),
        (e = []),
        (o.O = (r, t, s, n) => {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, s, n] = e[d], i = !0, l = 0; l < t.length; l++) (!1 & n || a >= n) && Object.keys(o.O).every((e) => o.O[e](t[l])) ? t.splice(l--, 1) : ((i = !1), n < a && (a = n));
                    if (i) {
                        e.splice(d--, 1);
                        var c = s();
                        void 0 !== c && (r = c);
                    }
                }
                return r;
            }
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [t, s, n];
        }),
        (o.d = (e, r) => {
            for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (o.f = {}),
        (o.e = (e) => Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
        (o.u = (e) => e + "." + { "shared~~-5a94f17d": "58648df", "shared~~-ab3eb430": "c631090", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": "17d3629" }[e] + "a.js"),
        (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (o.p = "https://abs.twimg.com/responsive-web/client-web/"),
        (() => {
            o.b = self.location + "";
            var e = { "node_modules_x-clients_features_dist_dms_sqlite_worker_js": 1 };
            o.f.i = (r, t) => {
                e[r] || importScripts(o.p + o.u(r));
            };
            var r = (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []),
                t = r.push.bind(r);
            r.push = (r) => {
                var [s, n, a] = r;
                for (var i in n) o.o(n, i) && (o.m[i] = n[i]);
                for (a && a(o); s.length; ) e[s.pop()] = 1;
                t(r);
            };
        })(),
        (r = o.x),
        (o.x = () => Promise.all([o.e("shared~~-5a94f17d"), o.e("shared~~-ab3eb430")]).then(r));
    o.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_sqlite_worker_js.68fb458a.js.map
