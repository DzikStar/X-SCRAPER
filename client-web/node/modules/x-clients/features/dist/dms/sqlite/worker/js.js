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
                        i = r.onerror || a,
                        o = r.debug || a,
                        n = r.generateMessageId ? void 0 : Object.create(null),
                        s =
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
                            (e = e.data), o("worker1.onmessage", e);
                            let a = t[e.messageId];
                            if (!a) return e && "sqlite3-api" === e.type && "worker1-ready" === e.result ? void (r.onready && r.onready(d)) : ((a = t[e.type]), a && a.onrow ? void a.onrow(e) : void (r.onunhandled ? r.onunhandled(arguments[0]) : i("sqlite3Worker1Promiser() unhandled worker message:", e)));
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
                            let i;
                            (a.message = e), "exec" === e.type && e.args && ("function" == typeof e.args.callback ? ((i = e.messageId + ":row"), (a.onrow = e.args.callback), (e.args.callback = i), (t[i] = a)) : "string" == typeof e.args.callback && c("exec callback may not be a string when using the Promise interface."));
                            let n = new Promise(function (i, n) {
                                (a.resolve = i), (a.reject = n), (t[e.messageId] = a), o("Posting", e.type, "message to Worker dbId=" + (l || "default") + ":", e), r.worker.postMessage(e);
                            });
                            return i && (n = n.finally(() => delete t[i])), n;
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
                const i = a.Z,
                    o = "SQLite module is not initialized",
                    n = "SQL query is missing",
                    s = "Unsupported action received",
                    c = "Failed to create database backup",
                    l = "Invalid message: missing id or action",
                    d = "Missing userId for init_db or backup_db",
                    u = "Database not initialized",
                    f = [300, 5e3];
                let w = null,
                    b = null,
                    m = null,
                    g = !1,
                    p = !1,
                    y = null,
                    h = null;
                const _ = "localhost.x.com" === self.location.hostname;
                function k(e) {
                    _ && self.performance.mark(`start_${e}`);
                }
                function v(e) {
                    try {
                        _ && self.performance.mark(`end_${e}`), _ && self.performance.measure(`${e}`, `start_${e}`, `end_${e}`);
                    } catch (e) {
                        I("Couldn't end section", e);
                    }
                }
                function q(e, r = {}) {
                    new Date();
                }
                function I(e, r, t = {}) {}
                function E(e) {
                    self.postMessage(e);
                }
                async function j(e) {
                    if (!w || !b) return void new Error("Invalid state");
                    if (g) return (p = !0), void q();
                    if (!(await A())) return;
                    p = !1;
                    const r = `sqlite_leader_${b}`,
                        t = await (async function () {
                            if (!w || !b) return 50;
                            let e = 0;
                            try {
                                const r = ((await w.db.exec({ sql: "PRAGMA page_size;", returnValue: "resultRows" })[0][0]) * (await w.db.exec({ sql: "PRAGMA page_count;", returnValue: "resultRows" })[0][0])) / 1024;
                                r < f[0] ? (e += 300) : r < f[1] && (e += 100);
                            } catch (r) {
                                e += 300;
                            }
                            return (e += 50 * Math.random()), Math.min(e, 500);
                        })();
                    await new Promise((e) => setTimeout(e, t));
                    try {
                        await navigator.locks.request(r, async () => {
                            q(0, { userId: b, workerId: m });
                            try {
                                await P(w.db, b), q(0, { userId: b }), E({ id: "auto_backup", type: "backup_success" });
                            } catch (e) {
                                E({ id: "auto_backup", type: "backup_error", error: c });
                            }
                            await new Promise((r) => setTimeout(r, e));
                        });
                    } catch (e) {}
                }
                async function O(e, r) {
                    if (!e) throw (new Error(d), new Error(d));
                    if (w) E({ id: r });
                    else
                        try {
                            let t;
                            h = await i({ print: () => {}, printErr: () => {} });
                            try {
                                const r = await x(e, !1),
                                    a = await r.getFile(),
                                    i = await a.arrayBuffer();
                                if (i.byteLength > 0) {
                                    t = new h.oo1.DB("/xchat.sqlite3", "c");
                                    const e = h.wasm,
                                        r = e.alloc(i.byteLength);
                                    try {
                                        new Uint8Array(e.memory.buffer, r, i.byteLength).set(new Uint8Array(i));
                                        if (h.capi.sqlite3_deserialize(t.pointer, "main", r, i.byteLength, i.byteLength, h.capi.SQLITE_DESERIALIZE_FREEONCLOSE | h.capi.SQLITE_DESERIALIZE_RESIZEABLE) !== h.capi.SQLITE_OK) {
                                            const e = h.capi.sqlite3_errmsg(t.pointer);
                                            throw new Error(`Failed to deserialize database: ${e}`);
                                        }
                                    } catch (t) {
                                        throw (e.dealloc(r), t);
                                    }
                                } else t = new h.oo1.DB("/xchat.sqlite3", "c");
                            } catch (e) {
                                t = new h.oo1.DB("/xchat.sqlite3", "c");
                            }
                            (w = { db: t }),
                                (b = e),
                                (m = Math.random().toString(36).slice(2) + Date.now().toString(36)),
                                (g = !1),
                                (function () {
                                    if (!w || !b) return void new Error("Invalid state");
                                    y && clearInterval(y);
                                    const e = [3e4, 6e4, 12e4, 18e4, 3e5, 6e5];
                                    let r = 0;
                                    y = setTimeout(function t() {
                                        const a = e[Math.min(r, e.length - 1)];
                                        j(a), r++, (y = setTimeout(t, a));
                                    }, e[0]);
                                })(),
                                E({ id: r });
                        } catch (e) {
                            throw e;
                        }
                }
                async function x(e, r) {
                    const t = await navigator.storage.getDirectory(),
                        a = await t.getDirectoryHandle("backups", { create: r }),
                        i = `chat_${e}.db`;
                    return await a.getFileHandle(i, { create: r });
                }
                async function P(e, r) {
                    const t = await x(r, !0),
                        a = h.wasm,
                        i = a.alloc(8);
                    try {
                        const r = h.capi.sqlite3_serialize(e.pointer, "main", i, 0);
                        if (!r) throw new Error("Failed to serialize database");
                        const o = new DataView(a.memory.buffer, i, 8),
                            n = Number(o.getBigUint64(0, !0));
                        if (!n) throw (h.capi.sqlite3_free(r), new Error("Serialized database size is zero"));
                        const s = new Uint8Array(a.memory.buffer, r, n),
                            c = await t.createSyncAccessHandle();
                        try {
                            c.write(s, { at: 0 }), c.truncate(n), c.flush();
                        } finally {
                            c.close(), h.capi.sqlite3_free(r);
                        }
                    } finally {
                        a.dealloc(i);
                    }
                }
                async function A() {
                    try {
                        const e = await x(b, !1),
                            r = (await e.getFile()).lastModified;
                        if (r > 0) {
                            if (Date.now() - r < 3e4) return !1;
                        }
                        return !0;
                    } catch (e) {
                        return !0;
                    }
                }
                self.onmessage = async (e) => {
                    const { data: r } = e,
                        { action: t, id: a, userId: i, sql: c, params: d } = r || {};
                    if (void 0 === a || void 0 === t) return new Error("Missing id or action"), void E({ id: a || "", error: l });
                    try {
                        if ("before_logout" === t) return;
                        if ("init_db" === t) return void (await O(i, a));
                        if ("backup_db" === t) {
                            if (!i || !w) throw new Error(u);
                            if (i !== b) throw new Error("UserId mismatch for backup");
                            return (await A()) ? (await P(w.db, i), void E({ id: a })) : void E({ id: a, error: "Backup throttled. Please wait before trying again." });
                        }
                        if (!w) throw new Error(o);
                        switch (t) {
                            case "exec":
                                if ((k("sqliteWorker#exec"), !c)) throw new Error(n);
                                E({ id: a, results: { values: await w.db.exec({ sql: c, bind: d, returnValue: "resultRows" }) } }), v("sqliteWorker#exec");
                                break;
                            case "begin_transaction":
                                k("sqliteWorker#transaction"), await w.db.exec("BEGIN TRANSACTION;"), (g = !0), E({ id: a, results: { values: [] } });
                                break;
                            case "end_transaction":
                                await w.db.exec("END TRANSACTION;"), (g = !1), p && (await j(3e4)), E({ id: a, results: { values: [] } }), v("sqliteWorker#transaction");
                                break;
                            case "rollback_transaction":
                                await w.db.exec("ROLLBACK TRANSACTION;"), (g = !1), E({ id: a, results: { values: [] } });
                                break;
                            default:
                                throw new Error(`${s}: ${t}`);
                        }
                    } catch (e) {
                        E({ id: a, error: e instanceof Error ? e.message : String(e) });
                    }
                };
            },
        },
        a = {};
    function i(e) {
        var r = a[e];
        if (void 0 !== r) return r.exports;
        var o = (a[e] = { exports: {} });
        return t[e](o, o.exports, i), o.exports;
    }
    (i.m = t),
        (i.x = () => {
            var e = i.O(void 0, ["shared~~-5a94f17d", "shared~~-ab3eb430"], () => i(670995));
            return (e = i.O(e));
        }),
        (e = []),
        (i.O = (r, t, a, o) => {
            if (!t) {
                var n = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    for (var [t, a, o] = e[d], s = !0, c = 0; c < t.length; c++) (!1 & o || n >= o) && Object.keys(i.O).every((e) => i.O[e](t[c])) ? t.splice(c--, 1) : ((s = !1), o < n && (n = o));
                    if (s) {
                        e.splice(d--, 1);
                        var l = a();
                        void 0 !== l && (r = l);
                    }
                }
                return r;
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, a, o];
        }),
        (i.d = (e, r) => {
            for (var t in r) i.o(r, t) && !i.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        }),
        (i.f = {}),
        (i.e = (e) => Promise.all(Object.keys(i.f).reduce((r, t) => (i.f[t](e, r), r), []))),
        (i.u = (e) => e + "." + { "shared~~-5a94f17d": "147e5ba", "shared~~-ab3eb430": "d55091b", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js": "ee5cbde", "node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-worker1-bundler-friendly_mjs": "1faaf42" }[e] + "a.js"),
        (i.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
        (i.p = "https://abs.twimg.com/responsive-web/client-web/"),
        (() => {
            i.b = self.location + "";
            var e = { "node_modules_x-clients_features_dist_dms_sqlite_worker_js": 1 };
            i.f.i = (r, t) => {
                e[r] || importScripts(i.p + i.u(r));
            };
            var r = (self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []),
                t = r.push.bind(r);
            r.push = (r) => {
                var [a, o, n] = r;
                for (var s in o) i.o(o, s) && (i.m[s] = o[s]);
                for (n && n(i); a.length; ) e[a.pop()] = 1;
                t(r);
            };
        })(),
        (r = i.x),
        (i.x = () => Promise.all([i.e("shared~~-5a94f17d"), i.e("shared~~-ab3eb430")]).then(r));
    i.x();
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_sqlite_worker_js.5fb2d44a.js.map
