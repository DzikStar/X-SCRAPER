(() => {
    "use strict";
    var e,
        r,
        t = {
            670995: (e, r, t) => {
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
                        s = r.generateMessageId ? void 0 : Object.create(null),
                        i =
                            r.generateMessageId ||
                            function (e) {
                                return e.type + "#" + (s[e.type] = (s[e.type] || 0) + 1);
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
                            1 === arguments.length ? (e = arguments[0]) : 2 === arguments.length ? ((e = Object.create(null)), (e.type = arguments[0]), (e.args = arguments[1]), (e.dbId = e.args.dbId)) : c("Invalid arguments for sqlite3Worker1Promiser()-created factory."), e.dbId || "open" === e.type || (e.dbId = l), (e.messageId = i(e)), (e.departureTime = performance.now());
                            const a = Object.create(null);
                            let o;
                            (a.message = e), "exec" === e.type && e.args && ("function" == typeof e.args.callback ? ((o = e.messageId + ":row"), (a.onrow = e.args.callback), (e.args.callback = o), (t[o] = a)) : "string" == typeof e.args.callback && c("exec callback may not be a string when using the Promise interface."));
                            let s = new Promise(function (o, s) {
                                (a.resolve = o), (a.reject = s), (t[e.messageId] = a), n("Posting", e.type, "message to Worker dbId=" + (l || "default") + ":", e), r.worker.postMessage(e);
                            });
                            return o && (s = s.finally(() => delete t[o])), s;
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
                    s = "SQL query is missing",
                    i = "Unsupported action received",
                    c = "Failed to create database backup",
                    l = "Invalid message: missing id or action",
                    d = "Missing userId for init_db or backup_db",
                    u = [300, 5e3];
                let f = null,
                    w = null,
                    b = null,
                    m = !1,
                    g = !1,
                    p = null,
                    y = null;
                const h = "localhost.x.com" === self.location.hostname;
                function _(e) {
                    h && self.performance.mark(`start_${e}`);
                }
                function k(e) {
                    try {
                        h && self.performance.mark(`end_${e}`), h && self.performance.measure(`${e}`, `start_${e}`, `end_${e}`);
                    } catch (e) {
                        q("Couldn't end section", e);
                    }
                }
                function v(e, r = {}) {
                    new Date();
                }
                function q(e, r, t = {}) {}
                function I(e) {
                    self.postMessage(e);
                }
                async function E(e) {
                    if (!f || !w) return void new Error("Invalid state");
                    if (m) return (g = !0), void v();
                    g = !1;
                    const r = `sqlite_leader_${w}`,
                        t = await (async function () {
                            if (!f || !w) return 50;
                            let e = 0;
                            try {
                                const r = ((await f.db.exec({ sql: "PRAGMA page_size;", returnValue: "resultRows" })[0][0]) * (await f.db.exec({ sql: "PRAGMA page_count;", returnValue: "resultRows" })[0][0])) / 1024;
                                r < u[0] ? (e += 300) : r < u[1] && (e += 100);
                            } catch (r) {
                                e += 300;
                            }
                            return (e += 50 * Math.random()), Math.min(e, 500);
                        })();
                    await new Promise((e) => setTimeout(e, t));
                    try {
                        await navigator.locks.request(r, async () => {
                            v(0, { userId: w, workerId: b });
                            try {
                                await (async function (e, r) {
                                    const t = await O(r, !0),
                                        a = y.wasm,
                                        o = a.alloc(8);
                                    try {
                                        const r = y.capi.sqlite3_serialize(e.pointer, "main", o, 0);
                                        if (!r) throw new Error("Failed to serialize database");
                                        const n = new DataView(a.memory.buffer, o, 8),
                                            s = Number(n.getBigUint64(0, !0));
                                        if (!s) throw (y.capi.sqlite3_free(r), new Error("Serialized database size is zero"));
                                        const i = new Uint8Array(a.memory.buffer, r, s),
                                            c = await t.createSyncAccessHandle();
                                        try {
                                            c.write(i, { at: 0 }), c.truncate(s), c.flush();
                                        } finally {
                                            c.close(), y.capi.sqlite3_free(r);
                                        }
                                    } finally {
                                        a.dealloc(o);
                                    }
                                })(f.db, w),
                                    v(0, { userId: w }),
                                    I({ id: "auto_backup", type: "backup_success" });
                            } catch (e) {
                                I({ id: "auto_backup", type: "backup_error", error: c });
                            }
                            await new Promise((r) => setTimeout(r, e));
                        });
                    } catch (e) {}
                }
                async function j(e, r) {
                    if (!e) throw (new Error(d), new Error(d));
                    if (f) I({ id: r });
                    else
                        try {
                            let t;
                            y = await o({ print: () => {}, printErr: () => {} });
                            try {
                                const r = await O(e, !1),
                                    a = await r.getFile(),
                                    o = await a.arrayBuffer();
                                if (o.byteLength > 0) {
                                    t = new y.oo1.DB("/xchat.sqlite3", "c");
                                    const e = y.wasm,
                                        r = e.alloc(o.byteLength);
                                    try {
                                        new Uint8Array(e.memory.buffer, r, o.byteLength).set(new Uint8Array(o));
                                        if (y.capi.sqlite3_deserialize(t.pointer, "main", r, o.byteLength, o.byteLength, y.capi.SQLITE_DESERIALIZE_FREEONCLOSE | y.capi.SQLITE_DESERIALIZE_RESIZEABLE) !== y.capi.SQLITE_OK) {
                                            const e = y.capi.sqlite3_errmsg(t.pointer);
                                            throw new Error(`Failed to deserialize database: ${e}`);
                                        }
                                    } catch (t) {
                                        throw (e.dealloc(r), t);
                                    }
                                } else t = new y.oo1.DB("/xchat.sqlite3", "c");
                            } catch (e) {
                                t = new y.oo1.DB("/xchat.sqlite3", "c");
                            }
                            (f = { db: t }),
                                (w = e),
                                (b = Math.random().toString(36).slice(2) + Date.now().toString(36)),
                                (m = !1),
                                (function () {
                                    if (!f || !w) return void new Error("Invalid state");
                                    p && clearInterval(p);
                                    const e = [3e4, 6e4, 12e4, 18e4, 3e5, 6e5];
                                    let r = 0;
                                    p = setTimeout(function t() {
                                        const a = e[Math.min(r, e.length - 1)];
                                        E(a), r++, (p = setTimeout(t, a));
                                    }, e[0]);
                                })(),
                                I({ id: r });
                        } catch (e) {
                            throw e;
                        }
                }
                async function O(e, r) {
                    const t = await navigator.storage.getDirectory(),
                        a = await t.getDirectoryHandle("backups", { create: r }),
                        o = `chat_${e}.db`;
                    return await a.getFileHandle(o, { create: r });
                }
                self.onmessage = async (e) => {
                    const { data: r } = e,
                        { action: t, id: a, userId: o, sql: c, params: d } = r || {};
                    if (void 0 === a || void 0 === t) return new Error("Missing id or action"), void I({ id: a || "", error: l });
                    try {
                        if ("before_logout" === t) return;
                        if ("init_db" === t) return void (await j(o, a));
                        if (!f) throw new Error(n);
                        switch (t) {
                            case "exec":
                                if ((_("sqliteWorker#exec"), !c)) throw new Error(s);
                                I({ id: a, results: { values: await f.db.exec({ sql: c, bind: d, returnValue: "resultRows" }) } }), k("sqliteWorker#exec");
                                break;
                            case "begin_transaction":
                                _("sqliteWorker#transaction"), await f.db.exec("BEGIN TRANSACTION;"), (m = !0), I({ id: a, results: { values: [] } });
                                break;
                            case "end_transaction":
                                await f.db.exec("END TRANSACTION;"), (m = !1), g && (await E(3e4)), I({ id: a, results: { values: [] } }), k("sqliteWorker#transaction");
                                break;
                            case "rollback_transaction":
                                await f.db.exec("ROLLBACK TRANSACTION;"), (m = !1), I({ id: a, results: { values: [] } });
                                break;
                            default:
                                throw new Error(`${i}: ${t}`);
                        }
                    } catch (e) {
                        I({ id: a, error: e instanceof Error ? e.message : String(e) });
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
            var e = o.O(void 0, ["shared~~-5a94f17d", "shared~~-ab3eb430"], () => o(670995));
            return (e = o.O(e));
        }),
        (e = []),
        (o.O = (r, t, a, n) => {
            if (!t) {
                var s = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, a, n] = e[d], i = !0, c = 0; c < t.length; c++) (!1 & n || s >= n) && Object.keys(o.O).every((e) => o.O[e](t[c])) ? t.splice(c--, 1) : ((i = !1), n < s && (s = n));
                    if (i) {
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
        (o.u = (e) => e + "." + { "shared~~-5a94f17d": "147e5ba", "shared~~-ab3eb430": "9d83e4e", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": "f1f3506" }[e] + "a.js"),
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
                var [a, n, s] = r;
                for (var i in n) o.o(n, i) && (o.m[i] = n[i]);
                for (s && s(o); a.length; ) e[a.pop()] = 1;
                t(r);
            };
        })(),
        (r = o.x),
        (o.x = () => Promise.all([o.e("shared~~-5a94f17d"), o.e("shared~~-ab3eb430")]).then(r));
    o.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_sqlite_worker_js.2f70ec3a.js.map
