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
                        n = r.debug || a,
                        i = r.generateMessageId ? void 0 : Object.create(null),
                        s =
                            r.generateMessageId ||
                            function (e) {
                                return e.type + "#" + (i[e.type] = (i[e.type] || 0) + 1);
                            },
                        c = (...e) => {
                            throw new Error(e.join(" "));
                        };
                    let l, d;
                    return (
                        r.worker || (r.worker = e.defaultConfig.worker),
                        "function" == typeof r.worker && (r.worker = r.worker()),
                        (r.worker.onmessage = function (e) {
                            (e = e.data), n("worker1.onmessage", e);
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
                            1 === arguments.length ? (e = arguments[0]) : 2 === arguments.length ? ((e = Object.create(null)), (e.type = arguments[0]), (e.args = arguments[1]), (e.dbId = e.args.dbId)) : c("Invalid arguments for sqlite3Worker1Promiser()-created factory."), e.dbId || "open" === e.type || (e.dbId = l), (e.messageId = s(e)), (e.departureTime = performance.now());
                            const a = Object.create(null);
                            let o;
                            (a.message = e), "exec" === e.type && e.args && ("function" == typeof e.args.callback ? ((o = e.messageId + ":row"), (a.onrow = e.args.callback), (e.args.callback = o), (t[o] = a)) : "string" == typeof e.args.callback && c("exec callback may not be a string when using the Promise interface."));
                            let i = new Promise(function (o, i) {
                                (a.resolve = o), (a.reject = i), (t[e.messageId] = a), n("Posting", e.type, "message to Worker dbId=" + (l || "default") + ":", e), r.worker.postMessage(e);
                            });
                            return o && (i = i.finally(() => delete t[o])), i;
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
                    n = "SQLite module is not initialized",
                    i = "SQL query is missing",
                    s = "Unsupported action received",
                    c = "Failed to create database backup",
                    l = "Invalid message: missing id or action",
                    d = "Missing userId for init_db or backup_db",
                    u = "Database not initialized",
                    f = "sqlite_leader_",
                    w = [300, 5e3];
                let b = null,
                    m = null,
                    g = null,
                    p = !1,
                    y = !1,
                    h = null,
                    _ = null;
                const k = "localhost.x.com" === self.location.hostname;
                function v(e) {
                    k && self.performance.mark(`start_${e}`);
                }
                function q(e) {
                    try {
                        k && self.performance.mark(`end_${e}`), k && self.performance.measure(`${e}`, `start_${e}`, `end_${e}`);
                    } catch (e) {
                        E("Couldn't end section", e);
                    }
                }
                function I(e, r = {}) {
                    new Date();
                }
                function E(e, r, t = {}) {}
                function j(e) {
                    self.postMessage(e);
                }
                async function O(e) {
                    if (!b || !m) return void new Error("Invalid state");
                    if (p) return (y = !0), void I();
                    y = !1;
                    const r = `${f}${m}`,
                        t = await (async function () {
                            if (!b || !m) return 50;
                            let e = 0;
                            try {
                                const r = ((await b.db.exec({ sql: "PRAGMA page_size;", returnValue: "resultRows" })[0][0]) * (await b.db.exec({ sql: "PRAGMA page_count;", returnValue: "resultRows" })[0][0])) / 1024;
                                r < w[0] ? (e += 300) : r < w[1] && (e += 100);
                            } catch (r) {
                                e += 300;
                            }
                            return (e += 50 * Math.random()), Math.min(e, 500);
                        })();
                    await new Promise((e) => setTimeout(e, t));
                    try {
                        await navigator.locks.request(r, async () => {
                            I(0, { userId: m, workerId: g });
                            try {
                                await A(b.db, m), I(0, { userId: m }), j({ id: "auto_backup", type: "backup_success" });
                            } catch (e) {
                                j({ id: "auto_backup", type: "backup_error", error: c });
                            }
                            await new Promise((r) => setTimeout(r, e));
                        });
                    } catch (e) {}
                }
                async function x(e, r) {
                    if (!e) throw (new Error(d), new Error(d));
                    if (b) j({ id: r });
                    else
                        try {
                            let t;
                            _ = await o({ print: () => {}, printErr: () => {} });
                            try {
                                const r = await P(e, !1),
                                    a = await r.getFile(),
                                    o = await a.arrayBuffer();
                                if (o.byteLength > 0) {
                                    t = new _.oo1.DB("/xchat.sqlite3", "c");
                                    const e = _.wasm,
                                        r = e.alloc(o.byteLength);
                                    try {
                                        new Uint8Array(e.memory.buffer, r, o.byteLength).set(new Uint8Array(o));
                                        if (_.capi.sqlite3_deserialize(t.pointer, "main", r, o.byteLength, o.byteLength, _.capi.SQLITE_DESERIALIZE_FREEONCLOSE | _.capi.SQLITE_DESERIALIZE_RESIZEABLE) !== _.capi.SQLITE_OK) {
                                            const e = _.capi.sqlite3_errmsg(t.pointer);
                                            throw new Error(`Failed to deserialize database: ${e}`);
                                        }
                                    } catch (t) {
                                        throw (e.dealloc(r), t);
                                    }
                                } else t = new _.oo1.DB("/xchat.sqlite3", "c");
                            } catch (e) {
                                t = new _.oo1.DB("/xchat.sqlite3", "c");
                            }
                            (b = { db: t }),
                                (m = e),
                                (g = Math.random().toString(36).slice(2) + Date.now().toString(36)),
                                (p = !1),
                                (function () {
                                    if (!b || !m) return void new Error("Invalid state");
                                    h && clearInterval(h);
                                    const e = [3e4, 6e4, 12e4, 18e4, 3e5, 6e5];
                                    let r = 0;
                                    h = setTimeout(function t() {
                                        const a = e[Math.min(r, e.length - 1)];
                                        O(a), r++, (h = setTimeout(t, a));
                                    }, e[0]);
                                })(),
                                j({ id: r });
                        } catch (e) {
                            throw e;
                        }
                }
                async function P(e, r) {
                    const t = await navigator.storage.getDirectory(),
                        a = await t.getDirectoryHandle("backups", { create: r }),
                        o = `chat_${e}.db`;
                    return await a.getFileHandle(o, { create: r });
                }
                async function A(e, r, t) {
                    const a = await P(r, !0),
                        o = _.wasm,
                        n = o.alloc(8);
                    try {
                        const r = _.capi.sqlite3_serialize(e.pointer, "main", n, 0);
                        if (!r) throw new Error("Failed to serialize database");
                        const t = new DataView(o.memory.buffer, n, 8),
                            i = Number(t.getBigUint64(0, !0));
                        if (!i) throw (_.capi.sqlite3_free(r), new Error("Serialized database size is zero"));
                        const s = new Uint8Array(o.memory.buffer, r, i),
                            c = await a.createSyncAccessHandle();
                        try {
                            c.write(s, { at: 0 }), c.truncate(i), c.flush();
                        } finally {
                            c.close(), _.capi.sqlite3_free(r);
                        }
                    } finally {
                        o.dealloc(n);
                    }
                }
                self.onmessage = async (e) => {
                    const { data: r } = e,
                        { action: t, id: a, userId: o, sql: c, params: d } = r || {};
                    if (void 0 === a || void 0 === t) return new Error("Missing id or action"), void j({ id: a || "", error: l });
                    try {
                        if ("before_logout" === t) return;
                        if ("init_db" === t) return void (await x(o, a));
                        if ("backup_db" === t) {
                            if (!o || !b) throw new Error(u);
                            if (o !== m) throw new Error("UserId mismatch for backup");
                            return await A(b.db, o), void j({ id: a });
                        }
                        if ("close" === t)
                            return void (function () {
                                if ((h && (clearInterval(h), (h = null)), m)) {
                                    const e = `${f}${m}`;
                                    navigator.locks.request(e, { mode: "exclusive", ifAvailable: !0 }, () => {});
                                }
                            })();
                        if (!b) throw new Error(n);
                        switch (t) {
                            case "exec":
                                if ((v("sqliteWorker#exec"), !c)) throw new Error(i);
                                j({ id: a, results: { values: await b.db.exec({ sql: c, bind: d, returnValue: "resultRows" }) } }), q("sqliteWorker#exec");
                                break;
                            case "begin_transaction":
                                v("sqliteWorker#transaction"), await b.db.exec("BEGIN TRANSACTION;"), (p = !0), j({ id: a, results: { values: [] } });
                                break;
                            case "end_transaction":
                                await b.db.exec("END TRANSACTION;"), (p = !1), y && (await O(3e4)), j({ id: a, results: { values: [] } }), q("sqliteWorker#transaction");
                                break;
                            case "rollback_transaction":
                                await b.db.exec("ROLLBACK TRANSACTION;"), (p = !1), j({ id: a, results: { values: [] } });
                                break;
                            default:
                                throw new Error(`${s}: ${t}`);
                        }
                    } catch (e) {
                        j({ id: a, error: e instanceof Error ? e.message : String(e) });
                    }
                };
            },
        },
        a = {};
    function o(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var n = (a[e] = { exports: {} });
        return t[e](n, n.exports, o), n.exports;
    }
    (o.m = t),
        (o.x = () => {
            var e = o.O(void 0, ["shared~~~-5a94f17d", "shared~~~-ab3eb430"], () => o(397867));
            return (e = o.O(e));
        }),
        (e = []),
        (o.O = (r, t, a, n) => {
            if (!t) {
                var i = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, a, n] = e[d], s = !0, c = 0; c < t.length; c++) (!1 & n || i >= n) && Object.keys(o.O).every((e) => o.O[e](t[c])) ? t.splice(c--, 1) : ((s = !1), n < i && (i = n));
                    if (s) {
                        e.splice(d--, 1);
                        var l = a();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [t, a, n];
        }),
        (o.d = (e, r) => {
            for (var t in r) o.o(r, t) && !o.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (o.f = {}),
        (o.e = (e) => Promise.all(Object.keys(o.f).reduce((r, t) => (o.f[t](e, r), r), []))),
        (o.u = (e) => e + "." + { "shared~~~-5a94f17d": "c1cc8b0", "shared~~~-ab3eb430": "2aee213", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": "e310f11" }[e] + "a.js"),
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
                var [a, n, i] = r;
                for (var s in n) o.o(n, s) && (o.m[s] = n[s]);
                for (i && i(o); a.length; ) e[a.pop()] = 1;
                t(r);
            };
        })(),
        (r = o.x),
        (o.x = () => Promise.all([o.e("shared~~~-5a94f17d"), o.e("shared~~~-ab3eb430")]).then(r));
    o.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_sqlite2_worker_js.c0498d6a.js.map
