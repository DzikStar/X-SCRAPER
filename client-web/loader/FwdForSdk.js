(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.FwdForSdk"],
    {
        374859: (t) => {
            function e(t) {
                var e = new Error("Cannot find module '" + t + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            (e.keys = () => []), (e.resolve = e), (e.id = 374859), (t.exports = e);
        },
        739671: (t, e, s) => {
            var n = s(834406);
            s(571372), s(694898), s(38857), s(540171), s(157093), s(265688), s(270315), s(592529), s(86943), s(691157), s(136728);
            const i = { development: new Set(["localhost.x.com:3443"]), production: new Set(["x.com", "pro.x.com"]) },
                r = { development: "localhost.x.com:3443", production: "abs.twimg.com" };
            (window.XPForwardedForSDK = {
                wasmSdk: null,
                init: async function (t) {
                    if (!i[t].has(window.location.host)) throw new Error(`Invalid host for ${t}: ${window.location.host}`);
                    const e = new Go();
                    return await fetch(`https://${r[t]}/responsive-web/client-web/forwarded-for-v1.52898e8a.wasm`)
                        .then((t) => {
                            if (!t.ok) throw new Error(`Failed to fetch Wasm file in XPForwardedForSDK: ${t.statusText}`);
                            return t.arrayBuffer();
                        })
                        .then((t) => WebAssembly.instantiate(t, e.importObject))
                        .then((t) => {
                            e.run(t.instance);
                        })
                        .catch((t) => {});
                },
                getForwardedForStr: async function () {
                    if (window && "function" == typeof window.getForwardedForStr) {
                        const t = await window.getForwardedForStr(),
                            e = Number(t.expiryTimeMillis);
                        return isNaN(e), t;
                    }
                    throw new Error("Wasm module did not set window.getForwardedForStr");
                },
                destroy: function () {},
                pause: function () {},
                resume: function () {},
            }),
                (() => {
                    if (void 0 !== s.g);
                    else if ("undefined" != typeof window) window.global = window;
                    else {
                        if ("undefined" == typeof self) throw new Error("cannot export Go (neither global, window nor self is defined)");
                        self.global = self;
                    }
                    s.g.require || (s.g.require = s(374859));
                    const t = () => {
                        const t = new Error("not implemented");
                        return (t.code = "ENOSYS"), t;
                    };
                    if (!s.g.fs) {
                        let e = "";
                        s.g.fs = {
                            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
                            writeSync(t, s) {
                                e += i.decode(s);
                                const n = e.lastIndexOf("\n");
                                return -1 != n && (e = e.substr(n + 1)), s.length;
                            },
                            write(e, s, n, i, r, o) {
                                if (0 !== n || i !== s.length || null !== r) return void o(t());
                                o(null, this.writeSync(e, s));
                            },
                            chmod(e, s, n) {
                                n(t());
                            },
                            chown(e, s, n, i) {
                                i(t());
                            },
                            close(e, s) {
                                s(t());
                            },
                            fchmod(e, s, n) {
                                n(t());
                            },
                            fchown(e, s, n, i) {
                                i(t());
                            },
                            fstat(e, s) {
                                s(t());
                            },
                            fsync(t, e) {
                                e(null);
                            },
                            ftruncate(e, s, n) {
                                n(t());
                            },
                            lchown(e, s, n, i) {
                                i(t());
                            },
                            link(e, s, n) {
                                n(t());
                            },
                            lstat(e, s) {
                                s(t());
                            },
                            mkdir(e, s, n) {
                                n(t());
                            },
                            open(e, s, n, i) {
                                i(t());
                            },
                            read(e, s, n, i, r, o) {
                                o(t());
                            },
                            readdir(e, s) {
                                s(t());
                            },
                            readlink(e, s) {
                                s(t());
                            },
                            rename(e, s, n) {
                                n(t());
                            },
                            rmdir(e, s) {
                                s(t());
                            },
                            stat(e, s) {
                                s(t());
                            },
                            symlink(e, s, n) {
                                n(t());
                            },
                            truncate(e, s, n) {
                                n(t());
                            },
                            unlink(e, s) {
                                s(t());
                            },
                            utimes(e, s, n, i) {
                                i(t());
                            },
                        };
                    }
                    s.g.process ||
                        (s.g.process = {
                            getuid: () => -1,
                            getgid: () => -1,
                            geteuid: () => -1,
                            getegid: () => -1,
                            getgroups() {
                                throw t();
                            },
                            pid: -1,
                            ppid: -1,
                            umask() {
                                throw t();
                            },
                            cwd() {
                                throw t();
                            },
                            chdir() {
                                throw t();
                            },
                        }),
                        s.g.performance ||
                            (s.g.performance = {
                                now() {
                                    const [t, e] = n.hrtime();
                                    return 1e3 * t + e / 1e6;
                                },
                            });
                    const e = new TextEncoder("utf-8"),
                        i = new TextDecoder("utf-8");
                    let r = new DataView(new ArrayBuffer(8));
                    var o = [];
                    const a = {};
                    s.g.Go = class {
                        constructor() {
                            (this._callbackTimeouts = new Map()), (this._nextCallbackTimeoutID = 1);
                            const t = () => new DataView(this._inst.exports.memory.buffer),
                                s = (t) => {
                                    r.setBigInt64(0, t, !0);
                                    const e = r.getFloat64(0, !0);
                                    if (0 === e) return;
                                    if (!isNaN(e)) return e;
                                    const s = t & BigInt(4294967295);
                                    return this._values[s];
                                },
                                n = (e) => {
                                    let n = t().getBigUint64(e, !0);
                                    return s(n);
                                },
                                l = (t) => {
                                    const e = BigInt(2146959360);
                                    if ("number" == typeof t) return isNaN(t) ? e << BigInt(32) : 0 === t ? (e << BigInt(32)) | BigInt(1) : (r.setFloat64(0, t, !0), r.getBigInt64(0, !0));
                                    switch (t) {
                                        case void 0:
                                            return BigInt(0);
                                        case null:
                                            return (e << BigInt(32)) | BigInt(2);
                                        case !0:
                                            return (e << BigInt(32)) | BigInt(3);
                                        case !1:
                                            return (e << BigInt(32)) | BigInt(4);
                                    }
                                    let s = this._ids.get(t);
                                    void 0 === s && ((s = this._idPool.pop()), void 0 === s && (s = BigInt(this._values.length)), (this._values[s] = t), (this._goRefCounts[s] = 0), this._ids.set(t, s)), this._goRefCounts[s]++;
                                    let n = BigInt(1);
                                    switch (typeof t) {
                                        case "string":
                                            n = BigInt(2);
                                            break;
                                        case "symbol":
                                            n = BigInt(3);
                                            break;
                                        case "function":
                                            n = BigInt(4);
                                    }
                                    return s | ((e | n) << BigInt(32));
                                },
                                c = (e, s) => {
                                    let n = l(s);
                                    t().setBigUint64(e, n, !0);
                                },
                                d = (t, e, s) => new Uint8Array(this._inst.exports.memory.buffer, t, e),
                                u = (t, e, s) => {
                                    const i = new Array(e);
                                    for (let s = 0; s < e; s++) i[s] = n(t + 8 * s);
                                    return i;
                                },
                                h = (t, e) => i.decode(new DataView(this._inst.exports.memory.buffer, t, e)),
                                f = Date.now() - performance.now();
                            (this.importObject = {
                                wasi_snapshot_preview1: {
                                    fd_write: function (e, s, n, r) {
                                        let a = 0;
                                        if (1 == e)
                                            for (let e = 0; e < n; e++) {
                                                let n = s + 8 * e,
                                                    r = t().getUint32(n + 0, !0),
                                                    l = t().getUint32(n + 4, !0);
                                                a += l;
                                                for (let e = 0; e < l; e++) {
                                                    let s = t().getUint8(r + e);
                                                    if (13 == s);
                                                    else if (10 == s) {
                                                        i.decode(new Uint8Array(o));
                                                        o = [];
                                                    } else o.push(s);
                                                }
                                            }
                                        return t().setUint32(r, a, !0), 0;
                                    },
                                    fd_close: () => 0,
                                    fd_fdstat_get: () => 0,
                                    fd_seek: () => 0,
                                    proc_exit: (t) => {
                                        throw ((this.exited = !0), (this.exitCode = t), this._resolveExitPromise(), a);
                                    },
                                    random_get: (t, e) => (crypto.getRandomValues(d(t, e)), 0),
                                },
                                gojs: {
                                    "runtime.ticks": () => f + performance.now(),
                                    "runtime.sleepTicks": (t) => {
                                        setTimeout(() => {
                                            if (!this.exited)
                                                try {
                                                    this._inst.exports.go_scheduler();
                                                } catch (t) {
                                                    if (t !== a) throw t;
                                                }
                                        }, t);
                                    },
                                    "syscall/js.finalizeRef": (t) => {
                                        const e = t & BigInt(4294967295);
                                        if (void 0 !== this._goRefCounts?.[e] && (this._goRefCounts[e]--, 0 === this._goRefCounts[e])) {
                                            const t = this._values[e];
                                            (this._values[e] = null), this._ids.delete(t), this._idPool.push(e);
                                        }
                                    },
                                    "syscall/js.stringVal": (t, e) => {
                                        const s = h((t >>>= 0), e);
                                        return l(s);
                                    },
                                    "syscall/js.valueGet": (t, e, n) => {
                                        let i = h(e, n),
                                            r = s(t),
                                            o = Reflect.get(r, i);
                                        return l(o);
                                    },
                                    "syscall/js.valueSet": (t, e, n, i) => {
                                        const r = s(t),
                                            o = h(e, n),
                                            a = s(i);
                                        Reflect.set(r, o, a);
                                    },
                                    "syscall/js.valueDelete": (t, e, n) => {
                                        const i = s(t),
                                            r = h(e, n);
                                        Reflect.deleteProperty(i, r);
                                    },
                                    "syscall/js.valueIndex": (t, e) => l(Reflect.get(s(t), e)),
                                    "syscall/js.valueSetIndex": (t, e, n) => {
                                        Reflect.set(s(t), e, s(n));
                                    },
                                    "syscall/js.valueCall": (e, n, i, r, o, a, l) => {
                                        const d = s(n),
                                            f = h(i, r),
                                            w = u(o, a);
                                        try {
                                            const s = Reflect.get(d, f);
                                            c(e, Reflect.apply(s, d, w)), t().setUint8(e + 8, 1);
                                        } catch (s) {
                                            c(e, s), t().setUint8(e + 8, 0);
                                        }
                                    },
                                    "syscall/js.valueInvoke": (e, n, i, r, o) => {
                                        try {
                                            const o = s(n),
                                                a = u(i, r);
                                            c(e, Reflect.apply(o, void 0, a)), t().setUint8(e + 8, 1);
                                        } catch (s) {
                                            c(e, s), t().setUint8(e + 8, 0);
                                        }
                                    },
                                    "syscall/js.valueNew": (e, n, i, r, o) => {
                                        const a = s(n),
                                            l = u(i, r);
                                        try {
                                            c(e, Reflect.construct(a, l)), t().setUint8(e + 8, 1);
                                        } catch (s) {
                                            c(e, s), t().setUint8(e + 8, 0);
                                        }
                                    },
                                    "syscall/js.valueLength": (t) => s(t).length,
                                    "syscall/js.valuePrepareString": (n, i) => {
                                        const r = String(s(i)),
                                            o = e.encode(r);
                                        c(n, o), t().setInt32(n + 8, o.length, !0);
                                    },
                                    "syscall/js.valueLoadString": (t, e, n, i) => {
                                        const r = s(t);
                                        d(e, n).set(r);
                                    },
                                    "syscall/js.valueInstanceOf": (t, e) => s(t) instanceof s(e),
                                    "syscall/js.copyBytesToGo": (e, n, i, r, o) => {
                                        let a = e,
                                            l = e + 4;
                                        const c = d(n, i),
                                            u = s(o);
                                        if (!(u instanceof Uint8Array || u instanceof Uint8ClampedArray)) return void t().setUint8(l, 0);
                                        const h = u.subarray(0, c.length);
                                        c.set(h), t().setUint32(a, h.length, !0), t().setUint8(l, 1);
                                    },
                                    "syscall/js.copyBytesToJS": (e, n, i, r, o) => {
                                        let a = e,
                                            l = e + 4;
                                        const c = s(n),
                                            u = d(i, r);
                                        if (!(c instanceof Uint8Array || c instanceof Uint8ClampedArray)) return void t().setUint8(l, 0);
                                        const h = u.subarray(0, c.length);
                                        c.set(h), t().setUint32(a, h.length, !0), t().setUint8(l, 1);
                                    },
                                },
                            }),
                                (this.importObject.env = this.importObject.gojs);
                        }
                        async run(t) {
                            if (((this._inst = t), (this._values = [NaN, 0, null, !0, !1, s.g, this]), (this._goRefCounts = []), (this._ids = new Map()), (this._idPool = []), (this.exited = !1), (this.exitCode = 0), this._inst.exports._start)) {
                                let t = new Promise((t, e) => {
                                    this._resolveExitPromise = t;
                                });
                                try {
                                    this._inst.exports._start();
                                } catch (t) {
                                    if (t !== a) throw t;
                                }
                                return await t, this.exitCode;
                            }
                            this._inst.exports._initialize();
                        }
                        _resume() {
                            if (this.exited) throw new Error("Go program has already exited");
                            try {
                                this._inst.exports.resume();
                            } catch (t) {
                                if (t !== a) throw t;
                            }
                            this.exited && this._resolveExitPromise();
                        }
                        _makeFuncWrapper(t) {
                            const e = this;
                            return function () {
                                const s = { id: t, this: this, args: arguments };
                                return (e._pendingEvent = s), e._resume(), s.result;
                            };
                        }
                    };
                })();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.FwdForSdk.988a931a.js.map
