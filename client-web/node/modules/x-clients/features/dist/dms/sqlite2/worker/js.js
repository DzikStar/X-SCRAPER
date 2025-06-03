(() => {
    "use strict";
    var e,
        r,
        t = {
            397867: (e, r, t) => {
                var a = t(670267);
                (globalThis.sqlite3Worker1Promiser = function e(r = e.defaultConfig) {
                    if (1 === arguments.length && "function" == typeof arguments[0]) {
                        const t = r;
                        (r = Object.assign(Object.create(null), e.defaultConfig)).onready = t;
                    } else r = Object.assign(Object.create(null), e.defaultConfig, r);
                    const t = Object.create(null),
                        a = function () {},
                        o = r.onerror || a,
                        s = r.debug || a,
                        n = r.generateMessageId ? void 0 : Object.create(null),
                        i =
                            r.generateMessageId ||
                            function (e) {
                                return e.type + "#" + (n[e.type] = (n[e.type] || 0) + 1);
                            },
                        c = (...e) => {
                            throw new Error(e.join(" "));
                        };
                    let l, d;
                    return (
                        r.worker || (r.worker = e.defaultConfig.worker),
                        "function" == typeof r.worker && (r.worker = r.worker()),
                        (r.worker.onmessage = function (e) {
                            (e = e.data), s("worker1.onmessage", e);
                            let a = t[e.messageId];
                            if (!a) return e && "sqlite3-api" === e.type && "worker1-ready" === e.result ? void (r.onready && r.onready(d)) : ((a = t[e.type]), a && a.onrow ? void a.onrow(e) : void (r.onunhandled ? r.onunhandled(arguments[0]) : o("sqlite3Worker1Promiser() unhandled worker message:", e)));
                            switch ((delete t[e.messageId], e.type)) {
                                case "error":
                                    return void a.reject(e);
                                case "open":
                                    l || (l = e.dbId);
                                    break;
                                case "close":
                                    e.dbId === l && (l = void 0);
                            }
                            try {
                                a.resolve(e);
                            } catch (e) {
                                a.reject(e);
                            }
                        }),
                        (d = function () {
                            let e;
                            1 === arguments.length ? (e = arguments[0]) : 2 === arguments.length ? ((e = Object.create(null)), (e.type = arguments[0]), (e.args = arguments[1]), (e.dbId = e.args.dbId)) : c("Invalid arguments for sqlite3Worker1Promiser()-created factory."), e.dbId || "open" === e.type || (e.dbId = l), (e.messageId = i(e)), (e.departureTime = performance.now());
                            const a = Object.create(null);
                            let o;
                            (a.message = e), "exec" === e.type && e.args && ("function" == typeof e.args.callback ? ((o = e.messageId + ":row"), (a.onrow = e.args.callback), (e.args.callback = o), (t[o] = a)) : "string" == typeof e.args.callback && c("exec callback may not be a string when using the Promise interface."));
                            let n = new Promise(function (o, n) {
                                (a.resolve = o), (a.reject = n), (t[e.messageId] = a), s("Posting", e.type, "message to Worker dbId=" + (l || "default") + ":", e), r.worker.postMessage(e);
                            });
                            return o && (n = n.finally(() => delete t[o])), n;
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
                        const a = new Promise(function (e, r) {
                            (t.resolve = e), (t.reject = r);
                        });
                        try {
                            this.original(e);
                        } catch (e) {
                            t.reject(e);
                        }
                        return a;
                    }.bind({ original: sqlite3Worker1Promiser }));
                sqlite3Worker1Promiser.v2, globalThis.sqlite3Worker1Promiser;
                const o = a.Z,
                    s = "SQLite module is not initialized",
                    n = "SQL query is missing",
                    i = "Unsupported action received",
                    c = "OPFS VFS is not available",
                    l = "Failed to create database backup",
                    d = "Invalid message: missing id or action",
                    u = "Missing userId for init_db or backup_db",
                    f = "Database not initialized",
                    w = "sqlite_leader_",
                    b = [300, 5e3];
                let g = null,
                    p = null,
                    m = null,
                    v = !1,
                    y = !1,
                    h = null;
                function _(e, r = {}) {
                    new Date();
                }
                function k(e) {
                    self.postMessage(e);
                }
                async function q(e) {
                    if (!g || !p) return void new Error("Invalid state");
                    if (v) return (y = !0), void _();
                    y = !1;
                    const r = `${w}${p}`,
                        t = await (async function () {
                            if (!g || !p) return 50;
                            let e = 0;
                            try {
                                const r = ((await g.db.exec({ sql: "PRAGMA page_size;", returnValue: "resultRows" })[0][0]) * (await g.db.exec({ sql: "PRAGMA page_count;", returnValue: "resultRows" })[0][0])) / 1024;
                                r < b[0] ? (e += 300) : r < b[1] && (e += 100);
                            } catch (r) {
                                e += 300;
                            }
                            return (e += 50 * Math.random()), Math.min(e, 500);
                        })();
                    await new Promise((e) => setTimeout(e, t));
                    try {
                        await navigator.locks.request(r, async () => {
                            _(0, { userId: p, workerId: m });
                            try {
                                await O(g.pool, p, `/${g.vfsName}`), _(0, { userId: p }), k({ id: "auto_backup", type: "backup_success" });
                            } catch (e) {
                                k({ id: "auto_backup", type: "backup_error", error: l });
                            }
                            await new Promise((r) => setTimeout(r, e));
                        });
                    } catch (e) {}
                }
                async function I(e, r) {
                    if (!e) throw (new Error(u), new Error(u));
                    if (g) k({ id: r });
                    else
                        try {
                            const t = await o({ print: () => {}, printErr: () => {} }),
                                a = `${e}_chat_${Math.random().toString(36).slice(2)}`,
                                s = `/${a}`;
                            if (!t.installOpfsSAHPoolVfs) throw new Error(c);
                            const n = await t.installOpfsSAHPoolVfs({ clearOnInit: !1, initialCapacity: 5, name: a }),
                                i = t.capi.sqlite3_vfs_find(n.vfsName);
                            if (i) {
                                const e = t.capi.sqlite3_vfs_register(i, 1);
                                if (e) throw new Error(`Failed to register VFS ${n.vfsName}: error code ${e}`);
                            }
                            try {
                                await (async function (e, r, t) {
                                    const a = await j(r, !1),
                                        o = await a.getFile(),
                                        s = await o.arrayBuffer(),
                                        n = new Uint8Array(s);
                                    return await e.importDb(t, n);
                                })(n, e, s);
                            } catch (r) {
                                _(0, { userId: e, dbName: s });
                            }
                            const l = new n.OpfsSAHPoolDb(s);
                            (g = { db: l, pool: n, vfsName: n.vfsName }),
                                (p = e),
                                (m = Math.random().toString(36).slice(2) + Date.now().toString(36)),
                                (v = !1),
                                (function () {
                                    if (!g || !p) return void new Error("Invalid state");
                                    h && clearInterval(h);
                                    const e = [3e4, 6e4, 12e4, 18e4, 3e5, 6e5];
                                    let r = 0;
                                    h = setTimeout(function t() {
                                        const a = e[Math.min(r, e.length - 1)];
                                        q(a), r++, (h = setTimeout(t, a));
                                    }, e[0]);
                                })(),
                                k({ id: r });
                        } catch (e) {
                            throw e;
                        }
                }
                async function j(e, r) {
                    const t = await navigator.storage.getDirectory(),
                        a = await t.getDirectoryHandle("backups", { create: r }),
                        o = `chat_${e}.db`;
                    return await a.getFileHandle(o, { create: r });
                }
                async function O(e, r, t) {
                    const a = await j(r, !0),
                        o = await e.exportFile(t),
                        s = await a.createSyncAccessHandle();
                    try {
                        s.write(o, { at: 0 }), s.truncate(o.length), s.flush();
                    } finally {
                        s.close();
                    }
                }
                self.onmessage = async (e) => {
                    const { data: r } = e,
                        { action: t, id: a, userId: o, sql: c, params: l } = r || {};
                    if (void 0 === a || void 0 === t) return new Error("Missing id or action"), void k({ id: a || "", error: d });
                    try {
                        if ("before_logout" === t) return;
                        if ("init_db" === t) return void (await I(o, a));
                        if ("backup_db" === t) {
                            if (!o || !g) throw new Error(f);
                            if (o !== p) throw new Error("UserId mismatch for backup");
                            return await O(g.pool, o, `/${g.vfsName}`), void k({ id: a });
                        }
                        if ("close" === t)
                            return void (function () {
                                if ((h && (clearInterval(h), (h = null)), p)) {
                                    const e = `${w}${p}`;
                                    navigator.locks.request(e, { mode: "exclusive", ifAvailable: !0 }, () => {});
                                }
                            })();
                        if (!g) throw new Error(s);
                        switch (t) {
                            case "exec":
                                if (!c) throw new Error(n);
                                k({ id: a, results: { values: await g.db.exec({ sql: c, bind: l, returnValue: "resultRows" }) } });
                                break;
                            case "begin_transaction":
                                await g.db.exec("BEGIN TRANSACTION;"), (v = !0), k({ id: a, results: { values: [] } });
                                break;
                            case "end_transaction":
                                await g.db.exec("END TRANSACTION;"), (v = !1), y && (await q(3e4)), k({ id: a, results: { values: [] } });
                                break;
                            case "rollback_transaction":
                                await g.db.exec("ROLLBACK TRANSACTION;"), (v = !1), k({ id: a, results: { values: [] } });
                                break;
                            default:
                                throw new Error(`${i}: ${t}`);
                        }
                    } catch (e) {
                        k({ id: a, error: e instanceof Error ? e.message : String(e) });
                    }
                };
            },
        },
        a = {};
    function o(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var s = (a[e] = { exports: {} });
        return t[e](s, s.exports, o), s.exports;
    }
    (o.m = t),
        (o.x = () => {
            var e = o.O(void 0, ["shared~~~-5a94f17d", "shared~~~-ab3eb430"], () => o(397867));
            return (e = o.O(e));
        }),
        (e = []),
        (o.O = (r, t, a, s) => {
            if (!t) {
                var n = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, a, s] = e[d], i = !0, c = 0; c < t.length; c++) (!1 & s || n >= s) && Object.keys(o.O).every((e) => o.O[e](t[c])) ? t.splice(c--, 1) : ((i = !1), s < n && (n = s));
                    if (i) {
                        e.splice(d--, 1);
                        var l = a();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            s = s || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
            e[d] = [t, a, s];
        }),
        (o.d = (e, r) => {
            for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (o.f = {}),
        (o.e = (e) => Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
        (o.u = (e) => e + "." + { "shared~~~-5a94f17d": "c1cc8b0", "shared~~~-ab3eb430": "c7fb4ac", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": "1d23a27" }[e] + "a.js"),
        (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (o.p = "https://abs.twimg.com/responsive-web/client-web/"),
        (() => {
            o.b = self.location + "";
            var e = { "node_modules_x-clients_features_dist_dms_sqlite2_worker_js": 1 };
            o.f.i = (r, t) => {
                e[r] || importScripts(o.p + o.u(r));
            };
            var r = (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []),
                t = r.push.bind(r);
            r.push = (r) => {
                var [a, s, n] = r;
                for (var i in s) o.o(s, i) && (o.m[i] = s[i]);
                for (n && n(o); a.length; ) e[a.pop()] = 1;
                t(r);
            };
        })(),
        (r = o.x),
        (o.x = () => Promise.all([o.e("shared~~~-5a94f17d"), o.e("shared~~~-ab3eb430")]).then(r));
    o.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_sqlite2_worker_js.559df18a.js.map
