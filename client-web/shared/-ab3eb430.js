"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~~-ab3eb430"],
    {
        670267: (e, t, s) => {
            s.d(t, { Z: () => a });
            var n,
                r = s(834406),
                i =
                    ((n = "file:///data/jenkins/workspace/web_1/node_modules/@sqlite.org/sqlite-wasm/sqlite-wasm/jswasm/sqlite3-bundler-friendly.mjs"),
                    function (e = {}) {
                        var t,
                            i,
                            o = e,
                            a = new Promise((e, s) => {
                                (t = e), (i = s);
                            }),
                            l = "object" == typeof window,
                            c = "function" == typeof importScripts;
                        "object" == typeof r && "object" == typeof r.versions && "string" == typeof r.versions.node && r.type;
                        const _ = globalThis.sqlite3InitModuleState || Object.assign(Object.create(null), { debugModule: () => {} });
                        delete globalThis.sqlite3InitModuleState, _.debugModule("globalThis.location =", globalThis.location);
                        var u,
                            d,
                            f = Object.assign({}, o),
                            p = "./this.program",
                            m = "";
                        (l || c) &&
                            (c ? (m = self.location.href) : "undefined" != typeof document && document.currentScript && (m = document.currentScript.src),
                            n && (m = n),
                            (m = m.startsWith("blob:") ? "" : m.substr(0, m.replace(/[?#].*/, "").lastIndexOf("/") + 1)),
                            c &&
                                (d = (e) => {
                                    var t = new XMLHttpRequest();
                                    return t.open("GET", e, !1), (t.responseType = "arraybuffer"), t.send(null), new Uint8Array(t.response);
                                }),
                            (u = (e) => fetch(e, { credentials: "same-origin" }).then((e) => (e.ok ? e.arrayBuffer() : Promise.reject(new Error(e.status + " : " + e.url))))));
                        var h = o.print || function () {}.bind(),
                            g = o.printErr || function () {}.bind();
                        Object.assign(o, f), (f = null), o.arguments && o.arguments, o.thisProgram && (p = o.thisProgram);
                        var q,
                            b,
                            y,
                            w,
                            E,
                            S,
                            x,
                            A = o.wasmBinary,
                            I = !1;
                        function k() {
                            var e = q.buffer;
                            (o.HEAP8 = b = new Int8Array(e)), (o.HEAP16 = w = new Int16Array(e)), (o.HEAPU8 = y = new Uint8Array(e)), (o.HEAPU16 = new Uint16Array(e)), (o.HEAP32 = E = new Int32Array(e)), (o.HEAPU32 = S = new Uint32Array(e)), (o.HEAPF32 = new Float32Array(e)), (o.HEAPF64 = new Float64Array(e)), (o.HEAP64 = x = new BigInt64Array(e)), (o.HEAPU64 = new BigUint64Array(e));
                        }
                        if (o.wasmMemory) q = o.wasmMemory;
                        else {
                            var T = o.INITIAL_MEMORY || 16777216;
                            q = new WebAssembly.Memory({ initial: T / 65536, maximum: 32768 });
                        }
                        k();
                        var F = [],
                            O = [],
                            P = [];
                        function L(e) {
                            F.unshift(e);
                        }
                        function C(e) {
                            P.unshift(e);
                        }
                        var N = 0,
                            D = null,
                            j = null;
                        function R(e) {
                            N++, o.monitorRunDependencies?.(N);
                        }
                        function M(e) {
                            if ((N--, o.monitorRunDependencies?.(N), 0 == N && (null !== D && (clearInterval(D), (D = null)), j))) {
                                var t = j;
                                (j = null), t();
                            }
                        }
                        function z(e) {
                            o.onAbort?.(e), g((e = "Aborted(" + e + ")")), (I = !0), (e += ". Build with -sASSERTIONS for more info.");
                            var t = new WebAssembly.RuntimeError(e);
                            throw (i(t), t);
                        }
                        var B,
                            U = (e) => e.startsWith("data:application/octet-stream;base64,");
                        function Q() {
                            if (o.locateFile) {
                                var e = "sqlite3.wasm";
                                return U(e) ? e : ((t = e), o.locateFile ? o.locateFile(t, m) : m + t);
                            }
                            var t;
                            return new URL(s(730279), s.b).href;
                        }
                        function W(e) {
                            if (e == B && A) return new Uint8Array(A);
                            if (d) return d(e);
                            throw "both async and sync fetching of the wasm failed";
                        }
                        function H(e, t, s) {
                            return (function (e) {
                                return A
                                    ? Promise.resolve().then(() => W(e))
                                    : u(e).then(
                                          (e) => new Uint8Array(e),
                                          () => W(e),
                                      );
                            })(e)
                                .then((e) => WebAssembly.instantiate(e, t))
                                .then(s, (e) => {
                                    g(`failed to asynchronously prepare wasm: ${e}`), z(e);
                                });
                        }
                        var V = (e) => {
                            e.forEach((e) => e(o));
                        };
                        o.noExitRuntime;
                        var G = {
                                isAbs: (e) => "/" === e.charAt(0),
                                splitPath: (e) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1),
                                normalizeArray: (e, t) => {
                                    for (var s = 0, n = e.length - 1; n >= 0; n--) {
                                        var r = e[n];
                                        "." === r ? e.splice(n, 1) : ".." === r ? (e.splice(n, 1), s++) : s && (e.splice(n, 1), s--);
                                    }
                                    if (t) for (; s; s--) e.unshift("..");
                                    return e;
                                },
                                normalize: (e) => {
                                    var t = G.isAbs(e),
                                        s = "/" === e.substr(-1);
                                    return (
                                        (e = G.normalizeArray(
                                            e.split("/").filter((e) => !!e),
                                            !t,
                                        ).join("/")) ||
                                            t ||
                                            (e = "."),
                                        e && s && (e += "/"),
                                        (t ? "/" : "") + e
                                    );
                                },
                                dirname: (e) => {
                                    var t = G.splitPath(e),
                                        s = t[0],
                                        n = t[1];
                                    return s || n ? (n && (n = n.substr(0, n.length - 1)), s + n) : ".";
                                },
                                basename: (e) => {
                                    if ("/" === e) return "/";
                                    var t = (e = (e = G.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                                    return -1 === t ? e : e.substr(t + 1);
                                },
                                join: (...e) => G.normalize(e.join("/")),
                                join2: (e, t) => G.normalize(e + "/" + t),
                            },
                            $ = (e) =>
                                ($ = (() => {
                                    if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) return (e) => crypto.getRandomValues(e);
                                    z("initRandomDevice");
                                })())(e),
                            K = {
                                resolve: (...e) => {
                                    for (var t = "", s = !1, n = e.length - 1; n >= -1 && !s; n--) {
                                        var r = n >= 0 ? e[n] : le.cwd();
                                        if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                                        if (!r) return "";
                                        (t = r + "/" + t), (s = G.isAbs(r));
                                    }
                                    return (
                                        (s ? "/" : "") +
                                            (t = G.normalizeArray(
                                                t.split("/").filter((e) => !!e),
                                                !s,
                                            ).join("/")) || "."
                                    );
                                },
                                relative: (e, t) => {
                                    function s(e) {
                                        for (var t = 0; t < e.length && "" === e[t]; t++);
                                        for (var s = e.length - 1; s >= 0 && "" === e[s]; s--);
                                        return t > s ? [] : e.slice(t, s - t + 1);
                                    }
                                    (e = K.resolve(e).substr(1)), (t = K.resolve(t).substr(1));
                                    for (var n = s(e.split("/")), r = s(t.split("/")), i = Math.min(n.length, r.length), o = i, a = 0; a < i; a++)
                                        if (n[a] !== r[a]) {
                                            o = a;
                                            break;
                                        }
                                    var l = [];
                                    for (a = o; a < n.length; a++) l.push("..");
                                    return (l = l.concat(r.slice(o))).join("/");
                                },
                            },
                            J = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0,
                            X = (e, t = 0, s = NaN) => {
                                for (var n = t + s, r = t; e[r] && !(r >= n); ) ++r;
                                if (r - t > 16 && e.buffer && J) return J.decode(e.subarray(t, r));
                                for (var i = ""; t < r; ) {
                                    var o = e[t++];
                                    if (128 & o) {
                                        var a = 63 & e[t++];
                                        if (192 != (224 & o)) {
                                            var l = 63 & e[t++];
                                            if ((o = 224 == (240 & o) ? ((15 & o) << 12) | (a << 6) | l : ((7 & o) << 18) | (a << 12) | (l << 6) | (63 & e[t++])) < 65536) i += String.fromCharCode(o);
                                            else {
                                                var c = o - 65536;
                                                i += String.fromCharCode(55296 | (c >> 10), 56320 | (1023 & c));
                                            }
                                        } else i += String.fromCharCode(((31 & o) << 6) | a);
                                    } else i += String.fromCharCode(o);
                                }
                                return i;
                            },
                            Y = [],
                            Z = (e) => {
                                for (var t = 0, s = 0; s < e.length; ++s) {
                                    var n = e.charCodeAt(s);
                                    n <= 127 ? t++ : n <= 2047 ? (t += 2) : n >= 55296 && n <= 57343 ? ((t += 4), ++s) : (t += 3);
                                }
                                return t;
                            },
                            ee = (e, t, s, n) => {
                                if (!(n > 0)) return 0;
                                for (var r = s, i = s + n - 1, o = 0; o < e.length; ++o) {
                                    var a = e.charCodeAt(o);
                                    if ((a >= 55296 && a <= 57343 && (a = (65536 + ((1023 & a) << 10)) | (1023 & e.charCodeAt(++o))), a <= 127)) {
                                        if (s >= i) break;
                                        t[s++] = a;
                                    } else if (a <= 2047) {
                                        if (s + 1 >= i) break;
                                        (t[s++] = 192 | (a >> 6)), (t[s++] = 128 | (63 & a));
                                    } else if (a <= 65535) {
                                        if (s + 2 >= i) break;
                                        (t[s++] = 224 | (a >> 12)), (t[s++] = 128 | ((a >> 6) & 63)), (t[s++] = 128 | (63 & a));
                                    } else {
                                        if (s + 3 >= i) break;
                                        (t[s++] = 240 | (a >> 18)), (t[s++] = 128 | ((a >> 12) & 63)), (t[s++] = 128 | ((a >> 6) & 63)), (t[s++] = 128 | (63 & a));
                                    }
                                }
                                return (t[s] = 0), s - r;
                            };
                        function te(e, t, s) {
                            var n = s > 0 ? s : Z(e) + 1,
                                r = new Array(n),
                                i = ee(e, r, 0, r.length);
                            return t && (r.length = i), r;
                        }
                        var se = {
                                ttys: [],
                                init() {},
                                shutdown() {},
                                register(e, t) {
                                    (se.ttys[e] = { input: [], output: [], ops: t }), le.registerDevice(e, se.stream_ops);
                                },
                                stream_ops: {
                                    open(e) {
                                        var t = se.ttys[e.node.rdev];
                                        if (!t) throw new le.ErrnoError(43);
                                        (e.tty = t), (e.seekable = !1);
                                    },
                                    close(e) {
                                        e.tty.ops.fsync(e.tty);
                                    },
                                    fsync(e) {
                                        e.tty.ops.fsync(e.tty);
                                    },
                                    read(e, t, s, n, r) {
                                        if (!e.tty || !e.tty.ops.get_char) throw new le.ErrnoError(60);
                                        for (var i = 0, o = 0; o < n; o++) {
                                            var a;
                                            try {
                                                a = e.tty.ops.get_char(e.tty);
                                            } catch (e) {
                                                throw new le.ErrnoError(29);
                                            }
                                            if (void 0 === a && 0 === i) throw new le.ErrnoError(6);
                                            if (null == a) break;
                                            i++, (t[s + o] = a);
                                        }
                                        return i && (e.node.timestamp = Date.now()), i;
                                    },
                                    write(e, t, s, n, r) {
                                        if (!e.tty || !e.tty.ops.put_char) throw new le.ErrnoError(60);
                                        try {
                                            for (var i = 0; i < n; i++) e.tty.ops.put_char(e.tty, t[s + i]);
                                        } catch (e) {
                                            throw new le.ErrnoError(29);
                                        }
                                        return n && (e.node.timestamp = Date.now()), i;
                                    },
                                },
                                default_tty_ops: {
                                    get_char: (e) =>
                                        (() => {
                                            if (!Y.length) {
                                                var e = null;
                                                if (("undefined" != typeof window && "function" == typeof window.prompt && null !== (e = window.prompt("Input: ")) && (e += "\n"), !e)) return null;
                                                Y = te(e, !0);
                                            }
                                            return Y.shift();
                                        })(),
                                    put_char(e, t) {
                                        null === t || 10 === t ? (h(X(e.output)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    fsync(e) {
                                        e.output && e.output.length > 0 && (h(X(e.output)), (e.output = []));
                                    },
                                    ioctl_tcgets: (e) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }),
                                    ioctl_tcsets: (e, t, s) => 0,
                                    ioctl_tiocgwinsz: (e) => [24, 80],
                                },
                                default_tty1_ops: {
                                    put_char(e, t) {
                                        null === t || 10 === t ? (g(X(e.output)), (e.output = [])) : 0 != t && e.output.push(t);
                                    },
                                    fsync(e) {
                                        e.output && e.output.length > 0 && (g(X(e.output)), (e.output = []));
                                    },
                                },
                            },
                            ne = (e, t) => Math.ceil(e / t) * t,
                            re = (e) => {
                                e = ne(e, 65536);
                                var t = Se(65536, e);
                                return (
                                    t &&
                                        ((e, t) => {
                                            y.fill(0, e, e + t);
                                        })(t, e),
                                    t
                                );
                            },
                            ie = {
                                ops_table: null,
                                mount: (e) => ie.createNode(null, "/", 16895, 0),
                                createNode(e, t, s, n) {
                                    if (le.isBlkdev(s) || le.isFIFO(s)) throw new le.ErrnoError(63);
                                    ie.ops_table ||= { dir: { node: { getattr: ie.node_ops.getattr, setattr: ie.node_ops.setattr, lookup: ie.node_ops.lookup, mknod: ie.node_ops.mknod, rename: ie.node_ops.rename, unlink: ie.node_ops.unlink, rmdir: ie.node_ops.rmdir, readdir: ie.node_ops.readdir, symlink: ie.node_ops.symlink }, stream: { llseek: ie.stream_ops.llseek } }, file: { node: { getattr: ie.node_ops.getattr, setattr: ie.node_ops.setattr }, stream: { llseek: ie.stream_ops.llseek, read: ie.stream_ops.read, write: ie.stream_ops.write, allocate: ie.stream_ops.allocate, mmap: ie.stream_ops.mmap, msync: ie.stream_ops.msync } }, link: { node: { getattr: ie.node_ops.getattr, setattr: ie.node_ops.setattr, readlink: ie.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: ie.node_ops.getattr, setattr: ie.node_ops.setattr }, stream: le.chrdev_stream_ops } };
                                    var r = le.createNode(e, t, s, n);
                                    return le.isDir(r.mode) ? ((r.node_ops = ie.ops_table.dir.node), (r.stream_ops = ie.ops_table.dir.stream), (r.contents = {})) : le.isFile(r.mode) ? ((r.node_ops = ie.ops_table.file.node), (r.stream_ops = ie.ops_table.file.stream), (r.usedBytes = 0), (r.contents = null)) : le.isLink(r.mode) ? ((r.node_ops = ie.ops_table.link.node), (r.stream_ops = ie.ops_table.link.stream)) : le.isChrdev(r.mode) && ((r.node_ops = ie.ops_table.chrdev.node), (r.stream_ops = ie.ops_table.chrdev.stream)), (r.timestamp = Date.now()), e && ((e.contents[t] = r), (e.timestamp = r.timestamp)), r;
                                },
                                getFileDataAsTypedArray: (e) => (e.contents ? (e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents)) : new Uint8Array(0)),
                                expandFileStorage(e, t) {
                                    var s = e.contents ? e.contents.length : 0;
                                    if (!(s >= t)) {
                                        (t = Math.max(t, (s * (s < 1048576 ? 2 : 1.125)) >>> 0)), 0 != s && (t = Math.max(t, 256));
                                        var n = e.contents;
                                        (e.contents = new Uint8Array(t)), e.usedBytes > 0 && e.contents.set(n.subarray(0, e.usedBytes), 0);
                                    }
                                },
                                resizeFileStorage(e, t) {
                                    if (e.usedBytes != t)
                                        if (0 == t) (e.contents = null), (e.usedBytes = 0);
                                        else {
                                            var s = e.contents;
                                            (e.contents = new Uint8Array(t)), s && e.contents.set(s.subarray(0, Math.min(t, e.usedBytes))), (e.usedBytes = t);
                                        }
                                },
                                node_ops: {
                                    getattr(e) {
                                        var t = {};
                                        return (t.dev = le.isChrdev(e.mode) ? e.id : 1), (t.ino = e.id), (t.mode = e.mode), (t.nlink = 1), (t.uid = 0), (t.gid = 0), (t.rdev = e.rdev), le.isDir(e.mode) ? (t.size = 4096) : le.isFile(e.mode) ? (t.size = e.usedBytes) : le.isLink(e.mode) ? (t.size = e.link.length) : (t.size = 0), (t.atime = new Date(e.timestamp)), (t.mtime = new Date(e.timestamp)), (t.ctime = new Date(e.timestamp)), (t.blksize = 4096), (t.blocks = Math.ceil(t.size / t.blksize)), t;
                                    },
                                    setattr(e, t) {
                                        void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && ie.resizeFileStorage(e, t.size);
                                    },
                                    lookup(e, t) {
                                        throw le.genericErrors[44];
                                    },
                                    mknod: (e, t, s, n) => ie.createNode(e, t, s, n),
                                    rename(e, t, s) {
                                        if (le.isDir(e.mode)) {
                                            var n;
                                            try {
                                                n = le.lookupNode(t, s);
                                            } catch (e) {}
                                            if (n) for (var r in n.contents) throw new le.ErrnoError(55);
                                        }
                                        delete e.parent.contents[e.name], (e.parent.timestamp = Date.now()), (e.name = s), (t.contents[s] = e), (t.timestamp = e.parent.timestamp);
                                    },
                                    unlink(e, t) {
                                        delete e.contents[t], (e.timestamp = Date.now());
                                    },
                                    rmdir(e, t) {
                                        var s = le.lookupNode(e, t);
                                        for (var n in s.contents) throw new le.ErrnoError(55);
                                        delete e.contents[t], (e.timestamp = Date.now());
                                    },
                                    readdir(e) {
                                        var t = [".", ".."];
                                        for (var s of Object.keys(e.contents)) t.push(s);
                                        return t;
                                    },
                                    symlink(e, t, s) {
                                        var n = ie.createNode(e, t, 41471, 0);
                                        return (n.link = s), n;
                                    },
                                    readlink(e) {
                                        if (!le.isLink(e.mode)) throw new le.ErrnoError(28);
                                        return e.link;
                                    },
                                },
                                stream_ops: {
                                    read(e, t, s, n, r) {
                                        var i = e.node.contents;
                                        if (r >= e.node.usedBytes) return 0;
                                        var o = Math.min(e.node.usedBytes - r, n);
                                        if (o > 8 && i.subarray) t.set(i.subarray(r, r + o), s);
                                        else for (var a = 0; a < o; a++) t[s + a] = i[r + a];
                                        return o;
                                    },
                                    write(e, t, s, n, r, i) {
                                        if ((t.buffer === b.buffer && (i = !1), !n)) return 0;
                                        var o = e.node;
                                        if (((o.timestamp = Date.now()), t.subarray && (!o.contents || o.contents.subarray))) {
                                            if (i) return (o.contents = t.subarray(s, s + n)), (o.usedBytes = n), n;
                                            if (0 === o.usedBytes && 0 === r) return (o.contents = t.slice(s, s + n)), (o.usedBytes = n), n;
                                            if (r + n <= o.usedBytes) return o.contents.set(t.subarray(s, s + n), r), n;
                                        }
                                        if ((ie.expandFileStorage(o, r + n), o.contents.subarray && t.subarray)) o.contents.set(t.subarray(s, s + n), r);
                                        else for (var a = 0; a < n; a++) o.contents[r + a] = t[s + a];
                                        return (o.usedBytes = Math.max(o.usedBytes, r + n)), n;
                                    },
                                    llseek(e, t, s) {
                                        var n = t;
                                        if ((1 === s ? (n += e.position) : 2 === s && le.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0)) throw new le.ErrnoError(28);
                                        return n;
                                    },
                                    allocate(e, t, s) {
                                        ie.expandFileStorage(e.node, t + s), (e.node.usedBytes = Math.max(e.node.usedBytes, t + s));
                                    },
                                    mmap(e, t, s, n, r) {
                                        if (!le.isFile(e.node.mode)) throw new le.ErrnoError(43);
                                        var i,
                                            o,
                                            a = e.node.contents;
                                        if (2 & r || !a || a.buffer !== b.buffer) {
                                            if (((o = !0), !(i = re(t)))) throw new le.ErrnoError(48);
                                            a && ((s > 0 || s + t < a.length) && (a = a.subarray ? a.subarray(s, s + t) : Array.prototype.slice.call(a, s, s + t)), b.set(a, i));
                                        } else (o = !1), (i = a.byteOffset);
                                        return { ptr: i, allocated: o };
                                    },
                                    msync: (e, t, s, n, r) => (ie.stream_ops.write(e, t, 0, n, s, !1), 0),
                                },
                            },
                            oe = o.preloadPlugins || [],
                            ae = (e, t) => {
                                var s = 0;
                                return e && (s |= 365), t && (s |= 146), s;
                            },
                            le = {
                                root: null,
                                mounts: [],
                                devices: {},
                                streams: [],
                                nextInode: 1,
                                nameTable: null,
                                currentPath: "/",
                                initialized: !1,
                                ignorePermissions: !0,
                                ErrnoError: class {
                                    constructor(e) {
                                        (this.name = "ErrnoError"), (this.errno = e);
                                    }
                                },
                                genericErrors: {},
                                filesystems: null,
                                syncFSRequests: 0,
                                readFiles: {},
                                FSStream: class {
                                    constructor() {
                                        this.shared = {};
                                    }
                                    get object() {
                                        return this.node;
                                    }
                                    set object(e) {
                                        this.node = e;
                                    }
                                    get isRead() {
                                        return 1 != (2097155 & this.flags);
                                    }
                                    get isWrite() {
                                        return !!(2097155 & this.flags);
                                    }
                                    get isAppend() {
                                        return 1024 & this.flags;
                                    }
                                    get flags() {
                                        return this.shared.flags;
                                    }
                                    set flags(e) {
                                        this.shared.flags = e;
                                    }
                                    get position() {
                                        return this.shared.position;
                                    }
                                    set position(e) {
                                        this.shared.position = e;
                                    }
                                },
                                FSNode: class {
                                    constructor(e, t, s, n) {
                                        e || (e = this), (this.parent = e), (this.mount = e.mount), (this.mounted = null), (this.id = le.nextInode++), (this.name = t), (this.mode = s), (this.node_ops = {}), (this.stream_ops = {}), (this.rdev = n), (this.readMode = 365), (this.writeMode = 146);
                                    }
                                    get read() {
                                        return (this.mode & this.readMode) === this.readMode;
                                    }
                                    set read(e) {
                                        e ? (this.mode |= this.readMode) : (this.mode &= ~this.readMode);
                                    }
                                    get write() {
                                        return (this.mode & this.writeMode) === this.writeMode;
                                    }
                                    set write(e) {
                                        e ? (this.mode |= this.writeMode) : (this.mode &= ~this.writeMode);
                                    }
                                    get isFolder() {
                                        return le.isDir(this.mode);
                                    }
                                    get isDevice() {
                                        return le.isChrdev(this.mode);
                                    }
                                },
                                lookupPath(e, t = {}) {
                                    if (!(e = K.resolve(e))) return { path: "", node: null };
                                    if ((t = Object.assign({ follow_mount: !0, recurse_count: 0 }, t)).recurse_count > 8) throw new le.ErrnoError(32);
                                    for (var s = e.split("/").filter((e) => !!e), n = le.root, r = "/", i = 0; i < s.length; i++) {
                                        var o = i === s.length - 1;
                                        if (o && t.parent) break;
                                        if (((n = le.lookupNode(n, s[i])), (r = G.join2(r, s[i])), le.isMountpoint(n) && (!o || (o && t.follow_mount)) && (n = n.mounted.root), !o || t.follow))
                                            for (var a = 0; le.isLink(n.mode); ) {
                                                var l = le.readlink(r);
                                                if (((r = K.resolve(G.dirname(r), l)), (n = le.lookupPath(r, { recurse_count: t.recurse_count + 1 }).node), a++ > 40)) throw new le.ErrnoError(32);
                                            }
                                    }
                                    return { path: r, node: n };
                                },
                                getPath(e) {
                                    for (var t; ; ) {
                                        if (le.isRoot(e)) {
                                            var s = e.mount.mountpoint;
                                            return t ? ("/" !== s[s.length - 1] ? `${s}/${t}` : s + t) : s;
                                        }
                                        (t = t ? `${e.name}/${t}` : e.name), (e = e.parent);
                                    }
                                },
                                hashName(e, t) {
                                    for (var s = 0, n = 0; n < t.length; n++) s = ((s << 5) - s + t.charCodeAt(n)) | 0;
                                    return ((e + s) >>> 0) % le.nameTable.length;
                                },
                                hashAddNode(e) {
                                    var t = le.hashName(e.parent.id, e.name);
                                    (e.name_next = le.nameTable[t]), (le.nameTable[t] = e);
                                },
                                hashRemoveNode(e) {
                                    var t = le.hashName(e.parent.id, e.name);
                                    if (le.nameTable[t] === e) le.nameTable[t] = e.name_next;
                                    else
                                        for (var s = le.nameTable[t]; s; ) {
                                            if (s.name_next === e) {
                                                s.name_next = e.name_next;
                                                break;
                                            }
                                            s = s.name_next;
                                        }
                                },
                                lookupNode(e, t) {
                                    var s = le.mayLookup(e);
                                    if (s) throw new le.ErrnoError(s);
                                    for (var n = le.hashName(e.id, t), r = le.nameTable[n]; r; r = r.name_next) {
                                        var i = r.name;
                                        if (r.parent.id === e.id && i === t) return r;
                                    }
                                    return le.lookup(e, t);
                                },
                                createNode(e, t, s, n) {
                                    var r = new le.FSNode(e, t, s, n);
                                    return le.hashAddNode(r), r;
                                },
                                destroyNode(e) {
                                    le.hashRemoveNode(e);
                                },
                                isRoot: (e) => e === e.parent,
                                isMountpoint: (e) => !!e.mounted,
                                isFile: (e) => 32768 == (61440 & e),
                                isDir: (e) => 16384 == (61440 & e),
                                isLink: (e) => 40960 == (61440 & e),
                                isChrdev: (e) => 8192 == (61440 & e),
                                isBlkdev: (e) => 24576 == (61440 & e),
                                isFIFO: (e) => 4096 == (61440 & e),
                                isSocket: (e) => !(49152 & ~e),
                                flagsToPermissionString(e) {
                                    var t = ["r", "w", "rw"][3 & e];
                                    return 512 & e && (t += "w"), t;
                                },
                                nodePermissions: (e, t) => (le.ignorePermissions || ((!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode)) ? 0 : 2),
                                mayLookup(e) {
                                    if (!le.isDir(e.mode)) return 54;
                                    var t = le.nodePermissions(e, "x");
                                    return t || (e.node_ops.lookup ? 0 : 2);
                                },
                                mayCreate(e, t) {
                                    try {
                                        return le.lookupNode(e, t), 20;
                                    } catch (e) {}
                                    return le.nodePermissions(e, "wx");
                                },
                                mayDelete(e, t, s) {
                                    var n;
                                    try {
                                        n = le.lookupNode(e, t);
                                    } catch (e) {
                                        return e.errno;
                                    }
                                    var r = le.nodePermissions(e, "wx");
                                    if (r) return r;
                                    if (s) {
                                        if (!le.isDir(n.mode)) return 54;
                                        if (le.isRoot(n) || le.getPath(n) === le.cwd()) return 10;
                                    } else if (le.isDir(n.mode)) return 31;
                                    return 0;
                                },
                                mayOpen: (e, t) => (e ? (le.isLink(e.mode) ? 32 : le.isDir(e.mode) && ("r" !== le.flagsToPermissionString(t) || 512 & t) ? 31 : le.nodePermissions(e, le.flagsToPermissionString(t))) : 44),
                                MAX_OPEN_FDS: 4096,
                                nextfd() {
                                    for (var e = 0; e <= le.MAX_OPEN_FDS; e++) if (!le.streams[e]) return e;
                                    throw new le.ErrnoError(33);
                                },
                                getStreamChecked(e) {
                                    var t = le.getStream(e);
                                    if (!t) throw new le.ErrnoError(8);
                                    return t;
                                },
                                getStream: (e) => le.streams[e],
                                createStream: (e, t = -1) => ((e = Object.assign(new le.FSStream(), e)), -1 == t && (t = le.nextfd()), (e.fd = t), (le.streams[t] = e), e),
                                closeStream(e) {
                                    le.streams[e] = null;
                                },
                                dupStream(e, t = -1) {
                                    var s = le.createStream(e, t);
                                    return s.stream_ops?.dup?.(s), s;
                                },
                                chrdev_stream_ops: {
                                    open(e) {
                                        var t = le.getDevice(e.node.rdev);
                                        (e.stream_ops = t.stream_ops), e.stream_ops.open?.(e);
                                    },
                                    llseek() {
                                        throw new le.ErrnoError(70);
                                    },
                                },
                                major: (e) => e >> 8,
                                minor: (e) => 255 & e,
                                makedev: (e, t) => (e << 8) | t,
                                registerDevice(e, t) {
                                    le.devices[e] = { stream_ops: t };
                                },
                                getDevice: (e) => le.devices[e],
                                getMounts(e) {
                                    for (var t = [], s = [e]; s.length; ) {
                                        var n = s.pop();
                                        t.push(n), s.push(...n.mounts);
                                    }
                                    return t;
                                },
                                syncfs(e, t) {
                                    "function" == typeof e && ((t = e), (e = !1)), le.syncFSRequests++, le.syncFSRequests > 1 && g(`warning: ${le.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
                                    var s = le.getMounts(le.root.mount),
                                        n = 0;
                                    function r(e) {
                                        return le.syncFSRequests--, t(e);
                                    }
                                    function i(e) {
                                        if (e) return i.errored ? void 0 : ((i.errored = !0), r(e));
                                        ++n >= s.length && r(null);
                                    }
                                    s.forEach((t) => {
                                        if (!t.type.syncfs) return i(null);
                                        t.type.syncfs(t, e, i);
                                    });
                                },
                                mount(e, t, s) {
                                    var n,
                                        r = "/" === s,
                                        i = !s;
                                    if (r && le.root) throw new le.ErrnoError(10);
                                    if (!r && !i) {
                                        var o = le.lookupPath(s, { follow_mount: !1 });
                                        if (((s = o.path), (n = o.node), le.isMountpoint(n))) throw new le.ErrnoError(10);
                                        if (!le.isDir(n.mode)) throw new le.ErrnoError(54);
                                    }
                                    var a = { type: e, opts: t, mountpoint: s, mounts: [] },
                                        l = e.mount(a);
                                    return (l.mount = a), (a.root = l), r ? (le.root = l) : n && ((n.mounted = a), n.mount && n.mount.mounts.push(a)), l;
                                },
                                unmount(e) {
                                    var t = le.lookupPath(e, { follow_mount: !1 });
                                    if (!le.isMountpoint(t.node)) throw new le.ErrnoError(28);
                                    var s = t.node,
                                        n = s.mounted,
                                        r = le.getMounts(n);
                                    Object.keys(le.nameTable).forEach((e) => {
                                        for (var t = le.nameTable[e]; t; ) {
                                            var s = t.name_next;
                                            r.includes(t.mount) && le.destroyNode(t), (t = s);
                                        }
                                    }),
                                        (s.mounted = null);
                                    var i = s.mount.mounts.indexOf(n);
                                    s.mount.mounts.splice(i, 1);
                                },
                                lookup: (e, t) => e.node_ops.lookup(e, t),
                                mknod(e, t, s) {
                                    var n = le.lookupPath(e, { parent: !0 }).node,
                                        r = G.basename(e);
                                    if (!r || "." === r || ".." === r) throw new le.ErrnoError(28);
                                    var i = le.mayCreate(n, r);
                                    if (i) throw new le.ErrnoError(i);
                                    if (!n.node_ops.mknod) throw new le.ErrnoError(63);
                                    return n.node_ops.mknod(n, r, t, s);
                                },
                                create: (e, t) => ((t = void 0 !== t ? t : 438), (t &= 4095), (t |= 32768), le.mknod(e, t, 0)),
                                mkdir: (e, t) => ((t = void 0 !== t ? t : 511), (t &= 1023), (t |= 16384), le.mknod(e, t, 0)),
                                mkdirTree(e, t) {
                                    for (var s = e.split("/"), n = "", r = 0; r < s.length; ++r)
                                        if (s[r]) {
                                            n += "/" + s[r];
                                            try {
                                                le.mkdir(n, t);
                                            } catch (e) {
                                                if (20 != e.errno) throw e;
                                            }
                                        }
                                },
                                mkdev: (e, t, s) => (void 0 === s && ((s = t), (t = 438)), (t |= 8192), le.mknod(e, t, s)),
                                symlink(e, t) {
                                    if (!K.resolve(e)) throw new le.ErrnoError(44);
                                    var s = le.lookupPath(t, { parent: !0 }).node;
                                    if (!s) throw new le.ErrnoError(44);
                                    var n = G.basename(t),
                                        r = le.mayCreate(s, n);
                                    if (r) throw new le.ErrnoError(r);
                                    if (!s.node_ops.symlink) throw new le.ErrnoError(63);
                                    return s.node_ops.symlink(s, n, e);
                                },
                                rename(e, t) {
                                    var s,
                                        n,
                                        r = G.dirname(e),
                                        i = G.dirname(t),
                                        o = G.basename(e),
                                        a = G.basename(t);
                                    if (((s = le.lookupPath(e, { parent: !0 }).node), (n = le.lookupPath(t, { parent: !0 }).node), !s || !n)) throw new le.ErrnoError(44);
                                    if (s.mount !== n.mount) throw new le.ErrnoError(75);
                                    var l,
                                        c = le.lookupNode(s, o),
                                        _ = K.relative(e, i);
                                    if ("." !== _.charAt(0)) throw new le.ErrnoError(28);
                                    if ("." !== (_ = K.relative(t, r)).charAt(0)) throw new le.ErrnoError(55);
                                    try {
                                        l = le.lookupNode(n, a);
                                    } catch (e) {}
                                    if (c !== l) {
                                        var u = le.isDir(c.mode),
                                            d = le.mayDelete(s, o, u);
                                        if (d) throw new le.ErrnoError(d);
                                        if ((d = l ? le.mayDelete(n, a, u) : le.mayCreate(n, a))) throw new le.ErrnoError(d);
                                        if (!s.node_ops.rename) throw new le.ErrnoError(63);
                                        if (le.isMountpoint(c) || (l && le.isMountpoint(l))) throw new le.ErrnoError(10);
                                        if (n !== s && (d = le.nodePermissions(s, "w"))) throw new le.ErrnoError(d);
                                        le.hashRemoveNode(c);
                                        try {
                                            s.node_ops.rename(c, n, a), (c.parent = n);
                                        } catch (e) {
                                            throw e;
                                        } finally {
                                            le.hashAddNode(c);
                                        }
                                    }
                                },
                                rmdir(e) {
                                    var t = le.lookupPath(e, { parent: !0 }).node,
                                        s = G.basename(e),
                                        n = le.lookupNode(t, s),
                                        r = le.mayDelete(t, s, !0);
                                    if (r) throw new le.ErrnoError(r);
                                    if (!t.node_ops.rmdir) throw new le.ErrnoError(63);
                                    if (le.isMountpoint(n)) throw new le.ErrnoError(10);
                                    t.node_ops.rmdir(t, s), le.destroyNode(n);
                                },
                                readdir(e) {
                                    var t = le.lookupPath(e, { follow: !0 }).node;
                                    if (!t.node_ops.readdir) throw new le.ErrnoError(54);
                                    return t.node_ops.readdir(t);
                                },
                                unlink(e) {
                                    var t = le.lookupPath(e, { parent: !0 }).node;
                                    if (!t) throw new le.ErrnoError(44);
                                    var s = G.basename(e),
                                        n = le.lookupNode(t, s),
                                        r = le.mayDelete(t, s, !1);
                                    if (r) throw new le.ErrnoError(r);
                                    if (!t.node_ops.unlink) throw new le.ErrnoError(63);
                                    if (le.isMountpoint(n)) throw new le.ErrnoError(10);
                                    t.node_ops.unlink(t, s), le.destroyNode(n);
                                },
                                readlink(e) {
                                    var t = le.lookupPath(e).node;
                                    if (!t) throw new le.ErrnoError(44);
                                    if (!t.node_ops.readlink) throw new le.ErrnoError(28);
                                    return K.resolve(le.getPath(t.parent), t.node_ops.readlink(t));
                                },
                                stat(e, t) {
                                    var s = le.lookupPath(e, { follow: !t }).node;
                                    if (!s) throw new le.ErrnoError(44);
                                    if (!s.node_ops.getattr) throw new le.ErrnoError(63);
                                    return s.node_ops.getattr(s);
                                },
                                lstat: (e) => le.stat(e, !0),
                                chmod(e, t, s) {
                                    var n;
                                    if (!(n = "string" == typeof e ? le.lookupPath(e, { follow: !s }).node : e).node_ops.setattr) throw new le.ErrnoError(63);
                                    n.node_ops.setattr(n, { mode: (4095 & t) | (-4096 & n.mode), timestamp: Date.now() });
                                },
                                lchmod(e, t) {
                                    le.chmod(e, t, !0);
                                },
                                fchmod(e, t) {
                                    var s = le.getStreamChecked(e);
                                    le.chmod(s.node, t);
                                },
                                chown(e, t, s, n) {
                                    var r;
                                    if (!(r = "string" == typeof e ? le.lookupPath(e, { follow: !n }).node : e).node_ops.setattr) throw new le.ErrnoError(63);
                                    r.node_ops.setattr(r, { timestamp: Date.now() });
                                },
                                lchown(e, t, s) {
                                    le.chown(e, t, s, !0);
                                },
                                fchown(e, t, s) {
                                    var n = le.getStreamChecked(e);
                                    le.chown(n.node, t, s);
                                },
                                truncate(e, t) {
                                    if (t < 0) throw new le.ErrnoError(28);
                                    var s;
                                    if (!(s = "string" == typeof e ? le.lookupPath(e, { follow: !0 }).node : e).node_ops.setattr) throw new le.ErrnoError(63);
                                    if (le.isDir(s.mode)) throw new le.ErrnoError(31);
                                    if (!le.isFile(s.mode)) throw new le.ErrnoError(28);
                                    var n = le.nodePermissions(s, "w");
                                    if (n) throw new le.ErrnoError(n);
                                    s.node_ops.setattr(s, { size: t, timestamp: Date.now() });
                                },
                                ftruncate(e, t) {
                                    var s = le.getStreamChecked(e);
                                    if (!(2097155 & s.flags)) throw new le.ErrnoError(28);
                                    le.truncate(s.node, t);
                                },
                                utime(e, t, s) {
                                    var n = le.lookupPath(e, { follow: !0 }).node;
                                    n.node_ops.setattr(n, { timestamp: Math.max(t, s) });
                                },
                                open(e, t, s) {
                                    if ("" === e) throw new le.ErrnoError(44);
                                    var n;
                                    if (
                                        ((s =
                                            64 &
                                            (t =
                                                "string" == typeof t
                                                    ? ((e) => {
                                                          var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[e];
                                                          if (void 0 === t) throw new Error(`Unknown file open mode: ${e}`);
                                                          return t;
                                                      })(t)
                                                    : t)
                                                ? (4095 & (s = void 0 === s ? 438 : s)) | 32768
                                                : 0),
                                        "object" == typeof e)
                                    )
                                        n = e;
                                    else {
                                        e = G.normalize(e);
                                        try {
                                            n = le.lookupPath(e, { follow: !(131072 & t) }).node;
                                        } catch (e) {}
                                    }
                                    var r = !1;
                                    if (64 & t)
                                        if (n) {
                                            if (128 & t) throw new le.ErrnoError(20);
                                        } else (n = le.mknod(e, s, 0)), (r = !0);
                                    if (!n) throw new le.ErrnoError(44);
                                    if ((le.isChrdev(n.mode) && (t &= -513), 65536 & t && !le.isDir(n.mode))) throw new le.ErrnoError(54);
                                    if (!r) {
                                        var i = le.mayOpen(n, t);
                                        if (i) throw new le.ErrnoError(i);
                                    }
                                    512 & t && !r && le.truncate(n, 0), (t &= -131713);
                                    var a = le.createStream({ node: n, path: le.getPath(n), flags: t, seekable: !0, position: 0, stream_ops: n.stream_ops, ungotten: [], error: !1 });
                                    return a.stream_ops.open && a.stream_ops.open(a), !o.logReadFiles || 1 & t || e in le.readFiles || (le.readFiles[e] = 1), a;
                                },
                                close(e) {
                                    if (le.isClosed(e)) throw new le.ErrnoError(8);
                                    e.getdents && (e.getdents = null);
                                    try {
                                        e.stream_ops.close && e.stream_ops.close(e);
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        le.closeStream(e.fd);
                                    }
                                    e.fd = null;
                                },
                                isClosed: (e) => null === e.fd,
                                llseek(e, t, s) {
                                    if (le.isClosed(e)) throw new le.ErrnoError(8);
                                    if (!e.seekable || !e.stream_ops.llseek) throw new le.ErrnoError(70);
                                    if (0 != s && 1 != s && 2 != s) throw new le.ErrnoError(28);
                                    return (e.position = e.stream_ops.llseek(e, t, s)), (e.ungotten = []), e.position;
                                },
                                read(e, t, s, n, r) {
                                    if (n < 0 || r < 0) throw new le.ErrnoError(28);
                                    if (le.isClosed(e)) throw new le.ErrnoError(8);
                                    if (1 == (2097155 & e.flags)) throw new le.ErrnoError(8);
                                    if (le.isDir(e.node.mode)) throw new le.ErrnoError(31);
                                    if (!e.stream_ops.read) throw new le.ErrnoError(28);
                                    var i = void 0 !== r;
                                    if (i) {
                                        if (!e.seekable) throw new le.ErrnoError(70);
                                    } else r = e.position;
                                    var o = e.stream_ops.read(e, t, s, n, r);
                                    return i || (e.position += o), o;
                                },
                                write(e, t, s, n, r, i) {
                                    if (n < 0 || r < 0) throw new le.ErrnoError(28);
                                    if (le.isClosed(e)) throw new le.ErrnoError(8);
                                    if (!(2097155 & e.flags)) throw new le.ErrnoError(8);
                                    if (le.isDir(e.node.mode)) throw new le.ErrnoError(31);
                                    if (!e.stream_ops.write) throw new le.ErrnoError(28);
                                    e.seekable && 1024 & e.flags && le.llseek(e, 0, 2);
                                    var o = void 0 !== r;
                                    if (o) {
                                        if (!e.seekable) throw new le.ErrnoError(70);
                                    } else r = e.position;
                                    var a = e.stream_ops.write(e, t, s, n, r, i);
                                    return o || (e.position += a), a;
                                },
                                allocate(e, t, s) {
                                    if (le.isClosed(e)) throw new le.ErrnoError(8);
                                    if (t < 0 || s <= 0) throw new le.ErrnoError(28);
                                    if (!(2097155 & e.flags)) throw new le.ErrnoError(8);
                                    if (!le.isFile(e.node.mode) && !le.isDir(e.node.mode)) throw new le.ErrnoError(43);
                                    if (!e.stream_ops.allocate) throw new le.ErrnoError(138);
                                    e.stream_ops.allocate(e, t, s);
                                },
                                mmap(e, t, s, n, r) {
                                    if (2 & n && !(2 & r) && 2 != (2097155 & e.flags)) throw new le.ErrnoError(2);
                                    if (1 == (2097155 & e.flags)) throw new le.ErrnoError(2);
                                    if (!e.stream_ops.mmap) throw new le.ErrnoError(43);
                                    if (!t) throw new le.ErrnoError(28);
                                    return e.stream_ops.mmap(e, t, s, n, r);
                                },
                                msync: (e, t, s, n, r) => (e.stream_ops.msync ? e.stream_ops.msync(e, t, s, n, r) : 0),
                                ioctl(e, t, s) {
                                    if (!e.stream_ops.ioctl) throw new le.ErrnoError(59);
                                    return e.stream_ops.ioctl(e, t, s);
                                },
                                readFile(e, t = {}) {
                                    if (((t.flags = t.flags || 0), (t.encoding = t.encoding || "binary"), "utf8" !== t.encoding && "binary" !== t.encoding)) throw new Error(`Invalid encoding type "${t.encoding}"`);
                                    var s,
                                        n = le.open(e, t.flags),
                                        r = le.stat(e).size,
                                        i = new Uint8Array(r);
                                    return le.read(n, i, 0, r, 0), "utf8" === t.encoding ? (s = X(i)) : "binary" === t.encoding && (s = i), le.close(n), s;
                                },
                                writeFile(e, t, s = {}) {
                                    s.flags = s.flags || 577;
                                    var n = le.open(e, s.flags, s.mode);
                                    if ("string" == typeof t) {
                                        var r = new Uint8Array(Z(t) + 1),
                                            i = ee(t, r, 0, r.length);
                                        le.write(n, r, 0, i, void 0, s.canOwn);
                                    } else {
                                        if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                                        le.write(n, t, 0, t.byteLength, void 0, s.canOwn);
                                    }
                                    le.close(n);
                                },
                                cwd: () => le.currentPath,
                                chdir(e) {
                                    var t = le.lookupPath(e, { follow: !0 });
                                    if (null === t.node) throw new le.ErrnoError(44);
                                    if (!le.isDir(t.node.mode)) throw new le.ErrnoError(54);
                                    var s = le.nodePermissions(t.node, "x");
                                    if (s) throw new le.ErrnoError(s);
                                    le.currentPath = t.path;
                                },
                                createDefaultDirectories() {
                                    le.mkdir("/tmp"), le.mkdir("/home"), le.mkdir("/home/web_user");
                                },
                                createDefaultDevices() {
                                    le.mkdir("/dev"), le.registerDevice(le.makedev(1, 3), { read: () => 0, write: (e, t, s, n, r) => n }), le.mkdev("/dev/null", le.makedev(1, 3)), se.register(le.makedev(5, 0), se.default_tty_ops), se.register(le.makedev(6, 0), se.default_tty1_ops), le.mkdev("/dev/tty", le.makedev(5, 0)), le.mkdev("/dev/tty1", le.makedev(6, 0));
                                    var e = new Uint8Array(1024),
                                        t = 0,
                                        s = () => (0 === t && (t = $(e).byteLength), e[--t]);
                                    le.createDevice("/dev", "random", s), le.createDevice("/dev", "urandom", s), le.mkdir("/dev/shm"), le.mkdir("/dev/shm/tmp");
                                },
                                createSpecialDirectories() {
                                    le.mkdir("/proc");
                                    var e = le.mkdir("/proc/self");
                                    le.mkdir("/proc/self/fd"),
                                        le.mount(
                                            {
                                                mount() {
                                                    var t = le.createNode(e, "fd", 16895, 73);
                                                    return (
                                                        (t.node_ops = {
                                                            lookup(e, t) {
                                                                var s = +t,
                                                                    n = le.getStreamChecked(s),
                                                                    r = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => n.path } };
                                                                return (r.parent = r), r;
                                                            },
                                                        }),
                                                        t
                                                    );
                                                },
                                            },
                                            {},
                                            "/proc/self/fd",
                                        );
                                },
                                createStandardStreams(e, t, s) {
                                    e ? le.createDevice("/dev", "stdin", e) : le.symlink("/dev/tty", "/dev/stdin"), t ? le.createDevice("/dev", "stdout", null, t) : le.symlink("/dev/tty", "/dev/stdout"), s ? le.createDevice("/dev", "stderr", null, s) : le.symlink("/dev/tty1", "/dev/stderr"), le.open("/dev/stdin", 0), le.open("/dev/stdout", 1), le.open("/dev/stderr", 1);
                                },
                                staticInit() {
                                    [44].forEach((e) => {
                                        (le.genericErrors[e] = new le.ErrnoError(e)), (le.genericErrors[e].stack = "<generic error, no stack>");
                                    }),
                                        (le.nameTable = new Array(4096)),
                                        le.mount(ie, {}, "/"),
                                        le.createDefaultDirectories(),
                                        le.createDefaultDevices(),
                                        le.createSpecialDirectories(),
                                        (le.filesystems = { MEMFS: ie });
                                },
                                init(e, t, s) {
                                    (le.initialized = !0), (e ??= o.stdin), (t ??= o.stdout), (s ??= o.stderr), le.createStandardStreams(e, t, s);
                                },
                                quit() {
                                    le.initialized = !1;
                                    for (var e = 0; e < le.streams.length; e++) {
                                        var t = le.streams[e];
                                        t && le.close(t);
                                    }
                                },
                                findObject(e, t) {
                                    var s = le.analyzePath(e, t);
                                    return s.exists ? s.object : null;
                                },
                                analyzePath(e, t) {
                                    try {
                                        e = (n = le.lookupPath(e, { follow: !t })).path;
                                    } catch (e) {}
                                    var s = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
                                    try {
                                        var n = le.lookupPath(e, { parent: !0 });
                                        (s.parentExists = !0), (s.parentPath = n.path), (s.parentObject = n.node), (s.name = G.basename(e)), (n = le.lookupPath(e, { follow: !t })), (s.exists = !0), (s.path = n.path), (s.object = n.node), (s.name = n.node.name), (s.isRoot = "/" === n.path);
                                    } catch (e) {
                                        s.error = e.errno;
                                    }
                                    return s;
                                },
                                createPath(e, t, s, n) {
                                    e = "string" == typeof e ? e : le.getPath(e);
                                    for (var r = t.split("/").reverse(); r.length; ) {
                                        var i = r.pop();
                                        if (i) {
                                            var o = G.join2(e, i);
                                            try {
                                                le.mkdir(o);
                                            } catch (e) {}
                                            e = o;
                                        }
                                    }
                                    return o;
                                },
                                createFile(e, t, s, n, r) {
                                    var i = G.join2("string" == typeof e ? e : le.getPath(e), t),
                                        o = ae(n, r);
                                    return le.create(i, o);
                                },
                                createDataFile(e, t, s, n, r, i) {
                                    var o = t;
                                    e && ((e = "string" == typeof e ? e : le.getPath(e)), (o = t ? G.join2(e, t) : e));
                                    var a = ae(n, r),
                                        l = le.create(o, a);
                                    if (s) {
                                        if ("string" == typeof s) {
                                            for (var c = new Array(s.length), _ = 0, u = s.length; _ < u; ++_) c[_] = s.charCodeAt(_);
                                            s = c;
                                        }
                                        le.chmod(l, 146 | a);
                                        var d = le.open(l, 577);
                                        le.write(d, s, 0, s.length, 0, i), le.close(d), le.chmod(l, a);
                                    }
                                },
                                createDevice(e, t, s, n) {
                                    var r = G.join2("string" == typeof e ? e : le.getPath(e), t),
                                        i = ae(!!s, !!n);
                                    le.createDevice.major ??= 64;
                                    var o = le.makedev(le.createDevice.major++, 0);
                                    return (
                                        le.registerDevice(o, {
                                            open(e) {
                                                e.seekable = !1;
                                            },
                                            close(e) {
                                                n?.buffer?.length && n(10);
                                            },
                                            read(e, t, n, r, i) {
                                                for (var o = 0, a = 0; a < r; a++) {
                                                    var l;
                                                    try {
                                                        l = s();
                                                    } catch (e) {
                                                        throw new le.ErrnoError(29);
                                                    }
                                                    if (void 0 === l && 0 === o) throw new le.ErrnoError(6);
                                                    if (null == l) break;
                                                    o++, (t[n + a] = l);
                                                }
                                                return o && (e.node.timestamp = Date.now()), o;
                                            },
                                            write(e, t, s, r, i) {
                                                for (var o = 0; o < r; o++)
                                                    try {
                                                        n(t[s + o]);
                                                    } catch (e) {
                                                        throw new le.ErrnoError(29);
                                                    }
                                                return r && (e.node.timestamp = Date.now()), o;
                                            },
                                        }),
                                        le.mkdev(r, i, o)
                                    );
                                },
                                forceLoadFile(e) {
                                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                                    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                                    try {
                                        (e.contents = d(e.url)), (e.usedBytes = e.contents.length);
                                    } catch (e) {
                                        throw new le.ErrnoError(29);
                                    }
                                },
                                createLazyFile(e, t, s, n, r) {
                                    class i {
                                        constructor() {
                                            (this.lengthKnown = !1), (this.chunks = []);
                                        }
                                        get(e) {
                                            if (!(e > this.length - 1 || e < 0)) {
                                                var t = e % this.chunkSize,
                                                    s = (e / this.chunkSize) | 0;
                                                return this.getter(s)[t];
                                            }
                                        }
                                        setDataGetter(e) {
                                            this.getter = e;
                                        }
                                        cacheLength() {
                                            var e = new XMLHttpRequest();
                                            if ((e.open("HEAD", s, !1), e.send(null), !((e.status >= 200 && e.status < 300) || 304 === e.status))) throw new Error("Couldn't load " + s + ". Status: " + e.status);
                                            var t,
                                                n = Number(e.getResponseHeader("Content-length")),
                                                r = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                                i = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                                o = 1048576;
                                            r || (o = n);
                                            var a = this;
                                            a.setDataGetter((e) => {
                                                var t = e * o,
                                                    r = (e + 1) * o - 1;
                                                if (
                                                    ((r = Math.min(r, n - 1)),
                                                    void 0 === a.chunks[e] &&
                                                        (a.chunks[e] = ((e, t) => {
                                                            if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                            if (t > n - 1) throw new Error("only " + n + " bytes available! programmer error!");
                                                            var r = new XMLHttpRequest();
                                                            if ((r.open("GET", s, !1), n !== o && r.setRequestHeader("Range", "bytes=" + e + "-" + t), (r.responseType = "arraybuffer"), r.overrideMimeType && r.overrideMimeType("text/plain; charset=x-user-defined"), r.send(null), !((r.status >= 200 && r.status < 300) || 304 === r.status))) throw new Error("Couldn't load " + s + ". Status: " + r.status);
                                                            return void 0 !== r.response ? new Uint8Array(r.response || []) : te(r.responseText || "", !0);
                                                        })(t, r)),
                                                    void 0 === a.chunks[e])
                                                )
                                                    throw new Error("doXHR failed!");
                                                return a.chunks[e];
                                            }),
                                                (!i && n) || ((o = n = 1), (n = this.getter(0).length), (o = n), h("LazyFiles on gzip forces download of the whole file when length is accessed")),
                                                (this._length = n),
                                                (this._chunkSize = o),
                                                (this.lengthKnown = !0);
                                        }
                                        get length() {
                                            return this.lengthKnown || this.cacheLength(), this._length;
                                        }
                                        get chunkSize() {
                                            return this.lengthKnown || this.cacheLength(), this._chunkSize;
                                        }
                                    }
                                    if ("undefined" != typeof XMLHttpRequest) {
                                        if (!c) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                        var o = { isDevice: !1, contents: new i() };
                                    } else o = { isDevice: !1, url: s };
                                    var a = le.createFile(e, t, o, n, r);
                                    o.contents ? (a.contents = o.contents) : o.url && ((a.contents = null), (a.url = o.url)),
                                        Object.defineProperties(a, {
                                            usedBytes: {
                                                get: function () {
                                                    return this.contents.length;
                                                },
                                            },
                                        });
                                    var l = {};
                                    function _(e, t, s, n, r) {
                                        var i = e.node.contents;
                                        if (r >= i.length) return 0;
                                        var o = Math.min(i.length - r, n);
                                        if (i.slice) for (var a = 0; a < o; a++) t[s + a] = i[r + a];
                                        else for (a = 0; a < o; a++) t[s + a] = i.get(r + a);
                                        return o;
                                    }
                                    return (
                                        Object.keys(a.stream_ops).forEach((e) => {
                                            var t = a.stream_ops[e];
                                            l[e] = (...e) => (le.forceLoadFile(a), t(...e));
                                        }),
                                        (l.read = (e, t, s, n, r) => (le.forceLoadFile(a), _(e, t, s, n, r))),
                                        (l.mmap = (e, t, s, n, r) => {
                                            le.forceLoadFile(a);
                                            var i = re(t);
                                            if (!i) throw new le.ErrnoError(48);
                                            return _(e, b, i, t, s), { ptr: i, allocated: !0 };
                                        }),
                                        (a.stream_ops = l),
                                        a
                                    );
                                },
                            },
                            ce = {
                                DEFAULT_POLLMASK: 5,
                                calculateAt(e, t, s) {
                                    if (G.isAbs(t)) return t;
                                    var n;
                                    if (((n = -100 === e ? le.cwd() : ce.getStreamFromFD(e).path), 0 == t.length)) {
                                        if (!s) throw new le.ErrnoError(44);
                                        return n;
                                    }
                                    return G.join2(n, t);
                                },
                                doStat(e, t, s) {
                                    var n = e(t);
                                    (E[s >> 2] = n.dev), (E[(s + 4) >> 2] = n.mode), (S[(s + 8) >> 2] = n.nlink), (E[(s + 12) >> 2] = n.uid), (E[(s + 16) >> 2] = n.gid), (E[(s + 20) >> 2] = n.rdev), (x[(s + 24) >> 3] = BigInt(n.size)), (E[(s + 32) >> 2] = 4096), (E[(s + 36) >> 2] = n.blocks);
                                    var r = n.atime.getTime(),
                                        i = n.mtime.getTime(),
                                        o = n.ctime.getTime();
                                    return (x[(s + 40) >> 3] = BigInt(Math.floor(r / 1e3))), (S[(s + 48) >> 2] = (r % 1e3) * 1e3 * 1e3), (x[(s + 56) >> 3] = BigInt(Math.floor(i / 1e3))), (S[(s + 64) >> 2] = (i % 1e3) * 1e3 * 1e3), (x[(s + 72) >> 3] = BigInt(Math.floor(o / 1e3))), (S[(s + 80) >> 2] = (o % 1e3) * 1e3 * 1e3), (x[(s + 88) >> 3] = BigInt(n.ino)), 0;
                                },
                                doMsync(e, t, s, n, r) {
                                    if (!le.isFile(t.node.mode)) throw new le.ErrnoError(43);
                                    if (2 & n) return 0;
                                    var i = y.slice(e, e + s);
                                    le.msync(t, i, r, s, n);
                                },
                                getStreamFromFD: (e) => le.getStreamChecked(e),
                                varargs: void 0,
                                getStr(e) {
                                    var t = ((e, t) => (e ? X(y, e, t) : ""))(e);
                                    return t;
                                },
                            };
                        function _e() {
                            var e = E[+ce.varargs >> 2];
                            return (ce.varargs += 4), e;
                        }
                        var ue = _e,
                            de = (e) => (e < -9007199254740992 || e > 9007199254740992 ? NaN : Number(e)),
                            fe = (e, t, s) => ee(e, y, t, s),
                            pe = (e) => S[e >> 2] + 4294967296 * E[(e + 4) >> 2],
                            me = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335],
                            he = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            ge = (e) => {
                                var t = ((e - q.buffer.byteLength + 65535) / 65536) | 0;
                                try {
                                    return q.grow(t), k(), 1;
                                } catch (e) {}
                            },
                            qe = {},
                            be = () => {
                                if (!be.strings) {
                                    var e = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (("object" == typeof navigator && navigator.languages && navigator.languages[0]) || "C").replace("-", "_") + ".UTF-8", _: p || "./this.program" };
                                    for (var t in qe) void 0 === qe[t] ? delete e[t] : (e[t] = qe[t]);
                                    var s = [];
                                    for (var t in e) s.push(`${t}=${e[t]}`);
                                    be.strings = s;
                                }
                                return be.strings;
                            };
                        (le.createPreloadedFile = (e, t, s, n, r, i, o, a, l, c) => {
                            var _ = t ? K.resolve(G.join2(e, t)) : e;
                            function d(s) {
                                function u(s) {
                                    c?.(),
                                        a ||
                                            ((e, t, s, n, r, i) => {
                                                le.createDataFile(e, t, s, n, r, i);
                                            })(e, t, s, n, r, l),
                                        i?.(),
                                        M();
                                }
                                ((e, t, s, n) => {
                                    "undefined" != typeof Browser && Browser.init();
                                    var r = !1;
                                    return (
                                        oe.forEach((i) => {
                                            r || (i.canHandle(t) && (i.handle(e, t, s, n), (r = !0)));
                                        }),
                                        r
                                    );
                                })(s, _, u, () => {
                                    o?.(), M();
                                }) || u(s);
                            }
                            R(),
                                "string" == typeof s
                                    ? ((e, t, s, n) => {
                                          var r = n ? "" : `al ${e}`;
                                          u(e).then(
                                              (e) => {
                                                  t(new Uint8Array(e)), r && M();
                                              },
                                              (t) => {
                                                  if (!s) throw `Loading data file "${e}" failed.`;
                                                  s();
                                              },
                                          ),
                                              r && R();
                                      })(s, d, o)
                                    : d(s);
                        }),
                            le.staticInit();
                        var ye,
                            we,
                            ve = {
                                __syscall_chmod: function (e, t) {
                                    try {
                                        return (e = ce.getStr(e)), le.chmod(e, t), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_faccessat: function (e, t, s, n) {
                                    try {
                                        if (((t = ce.getStr(t)), (t = ce.calculateAt(e, t)), -8 & s)) return -28;
                                        var r = le.lookupPath(t, { follow: !0 }).node;
                                        if (!r) return -44;
                                        var i = "";
                                        return 4 & s && (i += "r"), 2 & s && (i += "w"), 1 & s && (i += "x"), i && le.nodePermissions(r, i) ? -2 : 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_fchmod: function (e, t) {
                                    try {
                                        return le.fchmod(e, t), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_fchown32: function (e, t, s) {
                                    try {
                                        return le.fchown(e, t, s), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_fcntl64: function (e, t, s) {
                                    ce.varargs = s;
                                    try {
                                        var n = ce.getStreamFromFD(e);
                                        switch (t) {
                                            case 0:
                                                if ((r = _e()) < 0) return -28;
                                                for (; le.streams[r]; ) r++;
                                                return le.dupStream(n, r).fd;
                                            case 1:
                                            case 2:
                                            case 13:
                                            case 14:
                                                return 0;
                                            case 3:
                                                return n.flags;
                                            case 4:
                                                var r = _e();
                                                return (n.flags |= r), 0;
                                            case 12:
                                                return (r = ue()), (w[(r + 0) >> 1] = 2), 0;
                                        }
                                        return -28;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_fstat64: function (e, t) {
                                    try {
                                        var s = ce.getStreamFromFD(e);
                                        return ce.doStat(le.stat, s.path, t);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_ftruncate64: function (e, t) {
                                    t = de(t);
                                    try {
                                        return isNaN(t) ? 61 : (le.ftruncate(e, t), 0);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_getcwd: function (e, t) {
                                    try {
                                        if (0 === t) return -28;
                                        var s = le.cwd(),
                                            n = Z(s) + 1;
                                        return t < n ? -68 : (fe(s, e, t), n);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_ioctl: function (e, t, s) {
                                    ce.varargs = s;
                                    try {
                                        var n = ce.getStreamFromFD(e);
                                        switch (t) {
                                            case 21509:
                                            case 21510:
                                            case 21511:
                                            case 21512:
                                            case 21524:
                                            case 21515:
                                                return n.tty ? 0 : -59;
                                            case 21505:
                                                if (!n.tty) return -59;
                                                if (n.tty.ops.ioctl_tcgets) {
                                                    var r = n.tty.ops.ioctl_tcgets(n),
                                                        i = ue();
                                                    (E[i >> 2] = r.c_iflag || 0), (E[(i + 4) >> 2] = r.c_oflag || 0), (E[(i + 8) >> 2] = r.c_cflag || 0), (E[(i + 12) >> 2] = r.c_lflag || 0);
                                                    for (var o = 0; o < 32; o++) b[i + o + 17] = r.c_cc[o] || 0;
                                                    return 0;
                                                }
                                                return 0;
                                            case 21506:
                                            case 21507:
                                            case 21508:
                                                if (!n.tty) return -59;
                                                if (n.tty.ops.ioctl_tcsets) {
                                                    i = ue();
                                                    var a = E[i >> 2],
                                                        l = E[(i + 4) >> 2],
                                                        c = E[(i + 8) >> 2],
                                                        _ = E[(i + 12) >> 2],
                                                        u = [];
                                                    for (o = 0; o < 32; o++) u.push(b[i + o + 17]);
                                                    return n.tty.ops.ioctl_tcsets(n.tty, t, { c_iflag: a, c_oflag: l, c_cflag: c, c_lflag: _, c_cc: u });
                                                }
                                                return 0;
                                            case 21519:
                                                return n.tty ? ((i = ue()), (E[i >> 2] = 0), 0) : -59;
                                            case 21520:
                                                return n.tty ? -28 : -59;
                                            case 21531:
                                                return (i = ue()), le.ioctl(n, t, i);
                                            case 21523:
                                                if (!n.tty) return -59;
                                                if (n.tty.ops.ioctl_tiocgwinsz) {
                                                    var d = n.tty.ops.ioctl_tiocgwinsz(n.tty);
                                                    (i = ue()), (w[i >> 1] = d[0]), (w[(i + 2) >> 1] = d[1]);
                                                }
                                                return 0;
                                            default:
                                                return -28;
                                        }
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_lstat64: function (e, t) {
                                    try {
                                        return (e = ce.getStr(e)), ce.doStat(le.lstat, e, t);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_mkdirat: function (e, t, s) {
                                    try {
                                        return (t = ce.getStr(t)), (t = ce.calculateAt(e, t)), "/" === (t = G.normalize(t))[t.length - 1] && (t = t.substr(0, t.length - 1)), le.mkdir(t, s, 0), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_newfstatat: function (e, t, s, n) {
                                    try {
                                        t = ce.getStr(t);
                                        var r = 256 & n,
                                            i = 4096 & n;
                                        return (n &= -6401), (t = ce.calculateAt(e, t, i)), ce.doStat(r ? le.lstat : le.stat, t, s);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_openat: function (e, t, s, n) {
                                    ce.varargs = n;
                                    try {
                                        (t = ce.getStr(t)), (t = ce.calculateAt(e, t));
                                        var r = n ? _e() : 0;
                                        return le.open(t, s, r).fd;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_readlinkat: function (e, t, s, n) {
                                    try {
                                        if (((t = ce.getStr(t)), (t = ce.calculateAt(e, t)), n <= 0)) return -28;
                                        var r = le.readlink(t),
                                            i = Math.min(n, Z(r)),
                                            o = b[s + i];
                                        return fe(r, s, n + 1), (b[s + i] = o), i;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_rmdir: function (e) {
                                    try {
                                        return (e = ce.getStr(e)), le.rmdir(e), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_stat64: function (e, t) {
                                    try {
                                        return (e = ce.getStr(e)), ce.doStat(le.stat, e, t);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_unlinkat: function (e, t, s) {
                                    try {
                                        return (t = ce.getStr(t)), (t = ce.calculateAt(e, t)), 0 === s ? le.unlink(t) : 512 === s ? le.rmdir(t) : z("Invalid flags passed to unlinkat"), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                __syscall_utimensat: function (e, t, s, n) {
                                    try {
                                        (t = ce.getStr(t)), (t = ce.calculateAt(e, t, !0));
                                        var r,
                                            i,
                                            o = Date.now();
                                        if (s) {
                                            var a = pe(s),
                                                l = E[(s + 8) >> 2];
                                            (r = 1073741823 == l ? o : 1073741822 == l ? -1 : 1e3 * a + l / 1e6), (a = pe((s += 16))), (i = 1073741823 == (l = E[(s + 8) >> 2]) ? o : 1073741822 == l ? -1 : 1e3 * a + l / 1e6);
                                        } else (r = o), (i = o);
                                        return (-1 == i && -1 == r) || le.utime(t, r, i), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                _emscripten_get_now_is_monotonic: () => 1,
                                _localtime_js: function (e, t) {
                                    e = de(e);
                                    var s = new Date(1e3 * e);
                                    (E[t >> 2] = s.getSeconds()), (E[(t + 4) >> 2] = s.getMinutes()), (E[(t + 8) >> 2] = s.getHours()), (E[(t + 12) >> 2] = s.getDate()), (E[(t + 16) >> 2] = s.getMonth()), (E[(t + 20) >> 2] = s.getFullYear() - 1900), (E[(t + 24) >> 2] = s.getDay());
                                    var n =
                                        0 |
                                        ((e) => {
                                            var t;
                                            return ((t = e.getFullYear()) % 4 != 0 || (t % 100 == 0 && t % 400 != 0) ? he : me)[e.getMonth()] + e.getDate() - 1;
                                        })(s);
                                    (E[(t + 28) >> 2] = n), (E[(t + 36) >> 2] = -60 * s.getTimezoneOffset());
                                    var r = new Date(s.getFullYear(), 0, 1),
                                        i = new Date(s.getFullYear(), 6, 1).getTimezoneOffset(),
                                        o = r.getTimezoneOffset(),
                                        a = 0 | (i != o && s.getTimezoneOffset() == Math.min(o, i));
                                    E[(t + 32) >> 2] = a;
                                },
                                _mmap_js: function (e, t, s, n, r, i, o) {
                                    r = de(r);
                                    try {
                                        if (isNaN(r)) return 61;
                                        var a = ce.getStreamFromFD(n),
                                            l = le.mmap(a, e, r, t, s),
                                            c = l.ptr;
                                        return (E[i >> 2] = l.allocated), (S[o >> 2] = c), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                _munmap_js: function (e, t, s, n, r, i) {
                                    i = de(i);
                                    try {
                                        var o = ce.getStreamFromFD(r);
                                        2 & s && ce.doMsync(e, o, t, n, i);
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return -e.errno;
                                    }
                                },
                                _tzset_js: (e, t, s, n) => {
                                    var r = new Date().getFullYear(),
                                        i = new Date(r, 0, 1),
                                        o = new Date(r, 6, 1),
                                        a = i.getTimezoneOffset(),
                                        l = o.getTimezoneOffset(),
                                        c = Math.max(a, l);
                                    (S[e >> 2] = 60 * c), (E[t >> 2] = Number(a != l));
                                    var _ = (e) => {
                                            var t = e >= 0 ? "-" : "+",
                                                s = Math.abs(e);
                                            return `UTC${t}${String(Math.floor(s / 60)).padStart(2, "0")}${String(s % 60).padStart(2, "0")}`;
                                        },
                                        u = _(a),
                                        d = _(l);
                                    l < a ? (fe(u, s, 17), fe(d, n, 17)) : (fe(u, n, 17), fe(d, s, 17));
                                },
                                emscripten_date_now: () => Date.now(),
                                emscripten_get_now: () => performance.now(),
                                emscripten_resize_heap: (e) => {
                                    var t = y.length,
                                        s = 2147483648;
                                    if ((e >>>= 0) > s) return !1;
                                    for (var n = 1; n <= 4; n *= 2) {
                                        var r = t * (1 + 0.2 / n);
                                        r = Math.min(r, e + 100663296);
                                        var i = Math.min(s, ne(Math.max(e, r), 65536));
                                        if (ge(i)) return !0;
                                    }
                                    return !1;
                                },
                                environ_get: (e, t) => {
                                    var s = 0;
                                    return (
                                        be().forEach((n, r) => {
                                            var i = t + s;
                                            (S[(e + 4 * r) >> 2] = i),
                                                ((e, t) => {
                                                    for (var s = 0; s < e.length; ++s) b[t++] = e.charCodeAt(s);
                                                    b[t] = 0;
                                                })(n, i),
                                                (s += n.length + 1);
                                        }),
                                        0
                                    );
                                },
                                environ_sizes_get: (e, t) => {
                                    var s = be();
                                    S[e >> 2] = s.length;
                                    var n = 0;
                                    return s.forEach((e) => (n += e.length + 1)), (S[t >> 2] = n), 0;
                                },
                                fd_close: function (e) {
                                    try {
                                        var t = ce.getStreamFromFD(e);
                                        return le.close(t), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                fd_fdstat_get: function (e, t) {
                                    try {
                                        var s = ce.getStreamFromFD(e),
                                            n = s.tty ? 2 : le.isDir(s.mode) ? 3 : le.isLink(s.mode) ? 7 : 4;
                                        return (b[t] = n), (w[(t + 2) >> 1] = 0), (x[(t + 8) >> 3] = BigInt(0)), (x[(t + 16) >> 3] = BigInt(0)), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                fd_read: function (e, t, s, n) {
                                    try {
                                        var r = ((e, t, s, n) => {
                                            for (var r = 0, i = 0; i < s; i++) {
                                                var o = S[t >> 2],
                                                    a = S[(t + 4) >> 2];
                                                t += 8;
                                                var l = le.read(e, b, o, a, n);
                                                if (l < 0) return -1;
                                                if (((r += l), l < a)) break;
                                                void 0 !== n && (n += l);
                                            }
                                            return r;
                                        })(ce.getStreamFromFD(e), t, s);
                                        return (S[n >> 2] = r), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                fd_seek: function (e, t, s, n) {
                                    t = de(t);
                                    try {
                                        if (isNaN(t)) return 61;
                                        var r = ce.getStreamFromFD(e);
                                        return le.llseek(r, t, s), (x[n >> 3] = BigInt(r.position)), r.getdents && 0 === t && 0 === s && (r.getdents = null), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                fd_sync: function (e) {
                                    try {
                                        var t = ce.getStreamFromFD(e);
                                        return t.stream_ops?.fsync ? t.stream_ops.fsync(t) : 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                fd_write: function (e, t, s, n) {
                                    try {
                                        var r = ((e, t, s, n) => {
                                            for (var r = 0, i = 0; i < s; i++) {
                                                var o = S[t >> 2],
                                                    a = S[(t + 4) >> 2];
                                                t += 8;
                                                var l = le.write(e, b, o, a, n);
                                                if (l < 0) return -1;
                                                if (((r += l), l < a)) break;
                                                void 0 !== n && (n += l);
                                            }
                                            return r;
                                        })(ce.getStreamFromFD(e), t, s);
                                        return (S[n >> 2] = r), 0;
                                    } catch (e) {
                                        if (void 0 === le || "ErrnoError" !== e.name) throw e;
                                        return e.errno;
                                    }
                                },
                                memory: q,
                            },
                            Ee = (function () {
                                var e,
                                    t,
                                    s,
                                    n,
                                    r = { env: ve, wasi_snapshot_preview1: ve };
                                function a(e, t) {
                                    var s;
                                    return (Ee = e.exports), (s = Ee.__wasm_call_ctors), O.unshift(s), M(), Ee;
                                }
                                if ((R(), o.instantiateWasm))
                                    try {
                                        return o.instantiateWasm(r, a);
                                    } catch (e) {
                                        g(`Module.instantiateWasm callback failed with error: ${e}`), i(e);
                                    }
                                return (
                                    (B ??= Q()),
                                    ((e = A),
                                    (t = B),
                                    (s = r),
                                    (n = function (e) {
                                        a(e.instance);
                                    }),
                                    e || "function" != typeof WebAssembly.instantiateStreaming || U(t) || "function" != typeof fetch
                                        ? H(t, s, n)
                                        : fetch(t, { credentials: "same-origin" }).then((e) =>
                                              WebAssembly.instantiateStreaming(e, s).then(n, function (e) {
                                                  return g(`wasm streaming compile failed: ${e}`), g("falling back to ArrayBuffer instantiation"), H(t, s, n);
                                              }),
                                          )).catch(i),
                                    {}
                                );
                            })(),
                            Se =
                                ((o._sqlite3_status64 = (e, t, s, n) => (o._sqlite3_status64 = Ee.sqlite3_status64)(e, t, s, n)),
                                (o._sqlite3_status = (e, t, s, n) => (o._sqlite3_status = Ee.sqlite3_status)(e, t, s, n)),
                                (o._sqlite3_db_status = (e, t, s, n, r) => (o._sqlite3_db_status = Ee.sqlite3_db_status)(e, t, s, n, r)),
                                (o._sqlite3_msize = (e) => (o._sqlite3_msize = Ee.sqlite3_msize)(e)),
                                (o._sqlite3_vfs_find = (e) => (o._sqlite3_vfs_find = Ee.sqlite3_vfs_find)(e)),
                                (o._sqlite3_initialize = () => (o._sqlite3_initialize = Ee.sqlite3_initialize)()),
                                (o._sqlite3_malloc = (e) => (o._sqlite3_malloc = Ee.sqlite3_malloc)(e)),
                                (o._sqlite3_free = (e) => (o._sqlite3_free = Ee.sqlite3_free)(e)),
                                (o._sqlite3_vfs_register = (e, t) => (o._sqlite3_vfs_register = Ee.sqlite3_vfs_register)(e, t)),
                                (o._sqlite3_vfs_unregister = (e) => (o._sqlite3_vfs_unregister = Ee.sqlite3_vfs_unregister)(e)),
                                (o._sqlite3_malloc64 = (e) => (o._sqlite3_malloc64 = Ee.sqlite3_malloc64)(e)),
                                (o._sqlite3_realloc = (e, t) => (o._sqlite3_realloc = Ee.sqlite3_realloc)(e, t)),
                                (o._sqlite3_realloc64 = (e, t) => (o._sqlite3_realloc64 = Ee.sqlite3_realloc64)(e, t)),
                                (o._sqlite3_value_text = (e) => (o._sqlite3_value_text = Ee.sqlite3_value_text)(e)),
                                (o._sqlite3_randomness = (e, t) => (o._sqlite3_randomness = Ee.sqlite3_randomness)(e, t)),
                                (o._sqlite3_stricmp = (e, t) => (o._sqlite3_stricmp = Ee.sqlite3_stricmp)(e, t)),
                                (o._sqlite3_strnicmp = (e, t, s) => (o._sqlite3_strnicmp = Ee.sqlite3_strnicmp)(e, t, s)),
                                (o._sqlite3_uri_parameter = (e, t) => (o._sqlite3_uri_parameter = Ee.sqlite3_uri_parameter)(e, t)),
                                (o._sqlite3_uri_boolean = (e, t, s) => (o._sqlite3_uri_boolean = Ee.sqlite3_uri_boolean)(e, t, s)),
                                (o._sqlite3_serialize = (e, t, s, n) => (o._sqlite3_serialize = Ee.sqlite3_serialize)(e, t, s, n)),
                                (o._sqlite3_prepare_v2 = (e, t, s, n, r) => (o._sqlite3_prepare_v2 = Ee.sqlite3_prepare_v2)(e, t, s, n, r)),
                                (o._sqlite3_step = (e) => (o._sqlite3_step = Ee.sqlite3_step)(e)),
                                (o._sqlite3_column_int64 = (e, t) => (o._sqlite3_column_int64 = Ee.sqlite3_column_int64)(e, t)),
                                (o._sqlite3_reset = (e) => (o._sqlite3_reset = Ee.sqlite3_reset)(e)),
                                (o._sqlite3_exec = (e, t, s, n, r) => (o._sqlite3_exec = Ee.sqlite3_exec)(e, t, s, n, r)),
                                (o._sqlite3_column_int = (e, t) => (o._sqlite3_column_int = Ee.sqlite3_column_int)(e, t)),
                                (o._sqlite3_finalize = (e) => (o._sqlite3_finalize = Ee.sqlite3_finalize)(e)),
                                (o._sqlite3_file_control = (e, t, s, n) => (o._sqlite3_file_control = Ee.sqlite3_file_control)(e, t, s, n)),
                                (o._sqlite3_column_name = (e, t) => (o._sqlite3_column_name = Ee.sqlite3_column_name)(e, t)),
                                (o._sqlite3_column_text = (e, t) => (o._sqlite3_column_text = Ee.sqlite3_column_text)(e, t)),
                                (o._sqlite3_column_type = (e, t) => (o._sqlite3_column_type = Ee.sqlite3_column_type)(e, t)),
                                (o._sqlite3_errmsg = (e) => (o._sqlite3_errmsg = Ee.sqlite3_errmsg)(e)),
                                (o._sqlite3_deserialize = (e, t, s, n, r, i) => (o._sqlite3_deserialize = Ee.sqlite3_deserialize)(e, t, s, n, r, i)),
                                (o._sqlite3_clear_bindings = (e) => (o._sqlite3_clear_bindings = Ee.sqlite3_clear_bindings)(e)),
                                (o._sqlite3_value_blob = (e) => (o._sqlite3_value_blob = Ee.sqlite3_value_blob)(e)),
                                (o._sqlite3_value_bytes = (e) => (o._sqlite3_value_bytes = Ee.sqlite3_value_bytes)(e)),
                                (o._sqlite3_value_double = (e) => (o._sqlite3_value_double = Ee.sqlite3_value_double)(e)),
                                (o._sqlite3_value_int = (e) => (o._sqlite3_value_int = Ee.sqlite3_value_int)(e)),
                                (o._sqlite3_value_int64 = (e) => (o._sqlite3_value_int64 = Ee.sqlite3_value_int64)(e)),
                                (o._sqlite3_value_subtype = (e) => (o._sqlite3_value_subtype = Ee.sqlite3_value_subtype)(e)),
                                (o._sqlite3_value_pointer = (e, t) => (o._sqlite3_value_pointer = Ee.sqlite3_value_pointer)(e, t)),
                                (o._sqlite3_value_type = (e) => (o._sqlite3_value_type = Ee.sqlite3_value_type)(e)),
                                (o._sqlite3_value_nochange = (e) => (o._sqlite3_value_nochange = Ee.sqlite3_value_nochange)(e)),
                                (o._sqlite3_value_frombind = (e) => (o._sqlite3_value_frombind = Ee.sqlite3_value_frombind)(e)),
                                (o._sqlite3_value_dup = (e) => (o._sqlite3_value_dup = Ee.sqlite3_value_dup)(e)),
                                (o._sqlite3_value_free = (e) => (o._sqlite3_value_free = Ee.sqlite3_value_free)(e)),
                                (o._sqlite3_result_blob = (e, t, s, n) => (o._sqlite3_result_blob = Ee.sqlite3_result_blob)(e, t, s, n)),
                                (o._sqlite3_result_error_toobig = (e) => (o._sqlite3_result_error_toobig = Ee.sqlite3_result_error_toobig)(e)),
                                (o._sqlite3_result_error_nomem = (e) => (o._sqlite3_result_error_nomem = Ee.sqlite3_result_error_nomem)(e)),
                                (o._sqlite3_result_double = (e, t) => (o._sqlite3_result_double = Ee.sqlite3_result_double)(e, t)),
                                (o._sqlite3_result_error = (e, t, s) => (o._sqlite3_result_error = Ee.sqlite3_result_error)(e, t, s)),
                                (o._sqlite3_result_int = (e, t) => (o._sqlite3_result_int = Ee.sqlite3_result_int)(e, t)),
                                (o._sqlite3_result_int64 = (e, t) => (o._sqlite3_result_int64 = Ee.sqlite3_result_int64)(e, t)),
                                (o._sqlite3_result_null = (e) => (o._sqlite3_result_null = Ee.sqlite3_result_null)(e)),
                                (o._sqlite3_result_pointer = (e, t, s, n) => (o._sqlite3_result_pointer = Ee.sqlite3_result_pointer)(e, t, s, n)),
                                (o._sqlite3_result_subtype = (e, t) => (o._sqlite3_result_subtype = Ee.sqlite3_result_subtype)(e, t)),
                                (o._sqlite3_result_text = (e, t, s, n) => (o._sqlite3_result_text = Ee.sqlite3_result_text)(e, t, s, n)),
                                (o._sqlite3_result_zeroblob = (e, t) => (o._sqlite3_result_zeroblob = Ee.sqlite3_result_zeroblob)(e, t)),
                                (o._sqlite3_result_zeroblob64 = (e, t) => (o._sqlite3_result_zeroblob64 = Ee.sqlite3_result_zeroblob64)(e, t)),
                                (o._sqlite3_result_error_code = (e, t) => (o._sqlite3_result_error_code = Ee.sqlite3_result_error_code)(e, t)),
                                (o._sqlite3_user_data = (e) => (o._sqlite3_user_data = Ee.sqlite3_user_data)(e)),
                                (o._sqlite3_context_db_handle = (e) => (o._sqlite3_context_db_handle = Ee.sqlite3_context_db_handle)(e)),
                                (o._sqlite3_vtab_nochange = (e) => (o._sqlite3_vtab_nochange = Ee.sqlite3_vtab_nochange)(e)),
                                (o._sqlite3_vtab_in_first = (e, t) => (o._sqlite3_vtab_in_first = Ee.sqlite3_vtab_in_first)(e, t)),
                                (o._sqlite3_vtab_in_next = (e, t) => (o._sqlite3_vtab_in_next = Ee.sqlite3_vtab_in_next)(e, t)),
                                (o._sqlite3_aggregate_context = (e, t) => (o._sqlite3_aggregate_context = Ee.sqlite3_aggregate_context)(e, t)),
                                (o._sqlite3_get_auxdata = (e, t) => (o._sqlite3_get_auxdata = Ee.sqlite3_get_auxdata)(e, t)),
                                (o._sqlite3_set_auxdata = (e, t, s, n) => (o._sqlite3_set_auxdata = Ee.sqlite3_set_auxdata)(e, t, s, n)),
                                (o._sqlite3_column_count = (e) => (o._sqlite3_column_count = Ee.sqlite3_column_count)(e)),
                                (o._sqlite3_data_count = (e) => (o._sqlite3_data_count = Ee.sqlite3_data_count)(e)),
                                (o._sqlite3_column_blob = (e, t) => (o._sqlite3_column_blob = Ee.sqlite3_column_blob)(e, t)),
                                (o._sqlite3_column_bytes = (e, t) => (o._sqlite3_column_bytes = Ee.sqlite3_column_bytes)(e, t)),
                                (o._sqlite3_column_double = (e, t) => (o._sqlite3_column_double = Ee.sqlite3_column_double)(e, t)),
                                (o._sqlite3_column_value = (e, t) => (o._sqlite3_column_value = Ee.sqlite3_column_value)(e, t)),
                                (o._sqlite3_column_decltype = (e, t) => (o._sqlite3_column_decltype = Ee.sqlite3_column_decltype)(e, t)),
                                (o._sqlite3_bind_blob = (e, t, s, n, r) => (o._sqlite3_bind_blob = Ee.sqlite3_bind_blob)(e, t, s, n, r)),
                                (o._sqlite3_bind_double = (e, t, s) => (o._sqlite3_bind_double = Ee.sqlite3_bind_double)(e, t, s)),
                                (o._sqlite3_bind_int = (e, t, s) => (o._sqlite3_bind_int = Ee.sqlite3_bind_int)(e, t, s)),
                                (o._sqlite3_bind_int64 = (e, t, s) => (o._sqlite3_bind_int64 = Ee.sqlite3_bind_int64)(e, t, s)),
                                (o._sqlite3_bind_null = (e, t) => (o._sqlite3_bind_null = Ee.sqlite3_bind_null)(e, t)),
                                (o._sqlite3_bind_pointer = (e, t, s, n, r) => (o._sqlite3_bind_pointer = Ee.sqlite3_bind_pointer)(e, t, s, n, r)),
                                (o._sqlite3_bind_text = (e, t, s, n, r) => (o._sqlite3_bind_text = Ee.sqlite3_bind_text)(e, t, s, n, r)),
                                (o._sqlite3_bind_parameter_count = (e) => (o._sqlite3_bind_parameter_count = Ee.sqlite3_bind_parameter_count)(e)),
                                (o._sqlite3_bind_parameter_name = (e, t) => (o._sqlite3_bind_parameter_name = Ee.sqlite3_bind_parameter_name)(e, t)),
                                (o._sqlite3_bind_parameter_index = (e, t) => (o._sqlite3_bind_parameter_index = Ee.sqlite3_bind_parameter_index)(e, t)),
                                (o._sqlite3_db_handle = (e) => (o._sqlite3_db_handle = Ee.sqlite3_db_handle)(e)),
                                (o._sqlite3_stmt_readonly = (e) => (o._sqlite3_stmt_readonly = Ee.sqlite3_stmt_readonly)(e)),
                                (o._sqlite3_stmt_isexplain = (e) => (o._sqlite3_stmt_isexplain = Ee.sqlite3_stmt_isexplain)(e)),
                                (o._sqlite3_stmt_explain = (e, t) => (o._sqlite3_stmt_explain = Ee.sqlite3_stmt_explain)(e, t)),
                                (o._sqlite3_stmt_busy = (e) => (o._sqlite3_stmt_busy = Ee.sqlite3_stmt_busy)(e)),
                                (o._sqlite3_stmt_status = (e, t, s) => (o._sqlite3_stmt_status = Ee.sqlite3_stmt_status)(e, t, s)),
                                (o._sqlite3_sql = (e) => (o._sqlite3_sql = Ee.sqlite3_sql)(e)),
                                (o._sqlite3_expanded_sql = (e) => (o._sqlite3_expanded_sql = Ee.sqlite3_expanded_sql)(e)),
                                (o._sqlite3_preupdate_old = (e, t, s) => (o._sqlite3_preupdate_old = Ee.sqlite3_preupdate_old)(e, t, s)),
                                (o._sqlite3_preupdate_count = (e) => (o._sqlite3_preupdate_count = Ee.sqlite3_preupdate_count)(e)),
                                (o._sqlite3_preupdate_depth = (e) => (o._sqlite3_preupdate_depth = Ee.sqlite3_preupdate_depth)(e)),
                                (o._sqlite3_preupdate_blobwrite = (e) => (o._sqlite3_preupdate_blobwrite = Ee.sqlite3_preupdate_blobwrite)(e)),
                                (o._sqlite3_preupdate_new = (e, t, s) => (o._sqlite3_preupdate_new = Ee.sqlite3_preupdate_new)(e, t, s)),
                                (o._sqlite3_value_numeric_type = (e) => (o._sqlite3_value_numeric_type = Ee.sqlite3_value_numeric_type)(e)),
                                (o._sqlite3_set_authorizer = (e, t, s) => (o._sqlite3_set_authorizer = Ee.sqlite3_set_authorizer)(e, t, s)),
                                (o._sqlite3_strglob = (e, t) => (o._sqlite3_strglob = Ee.sqlite3_strglob)(e, t)),
                                (o._sqlite3_strlike = (e, t, s) => (o._sqlite3_strlike = Ee.sqlite3_strlike)(e, t, s)),
                                (o._sqlite3_auto_extension = (e) => (o._sqlite3_auto_extension = Ee.sqlite3_auto_extension)(e)),
                                (o._sqlite3_cancel_auto_extension = (e) => (o._sqlite3_cancel_auto_extension = Ee.sqlite3_cancel_auto_extension)(e)),
                                (o._sqlite3_reset_auto_extension = () => (o._sqlite3_reset_auto_extension = Ee.sqlite3_reset_auto_extension)()),
                                (o._sqlite3_prepare_v3 = (e, t, s, n, r, i) => (o._sqlite3_prepare_v3 = Ee.sqlite3_prepare_v3)(e, t, s, n, r, i)),
                                (o._sqlite3_create_module = (e, t, s, n) => (o._sqlite3_create_module = Ee.sqlite3_create_module)(e, t, s, n)),
                                (o._sqlite3_create_module_v2 = (e, t, s, n, r) => (o._sqlite3_create_module_v2 = Ee.sqlite3_create_module_v2)(e, t, s, n, r)),
                                (o._sqlite3_drop_modules = (e, t) => (o._sqlite3_drop_modules = Ee.sqlite3_drop_modules)(e, t)),
                                (o._sqlite3_declare_vtab = (e, t) => (o._sqlite3_declare_vtab = Ee.sqlite3_declare_vtab)(e, t)),
                                (o._sqlite3_vtab_on_conflict = (e) => (o._sqlite3_vtab_on_conflict = Ee.sqlite3_vtab_on_conflict)(e)),
                                (o._sqlite3_vtab_collation = (e, t) => (o._sqlite3_vtab_collation = Ee.sqlite3_vtab_collation)(e, t)),
                                (o._sqlite3_vtab_in = (e, t, s) => (o._sqlite3_vtab_in = Ee.sqlite3_vtab_in)(e, t, s)),
                                (o._sqlite3_vtab_rhs_value = (e, t, s) => (o._sqlite3_vtab_rhs_value = Ee.sqlite3_vtab_rhs_value)(e, t, s)),
                                (o._sqlite3_vtab_distinct = (e) => (o._sqlite3_vtab_distinct = Ee.sqlite3_vtab_distinct)(e)),
                                (o._sqlite3_keyword_name = (e, t, s) => (o._sqlite3_keyword_name = Ee.sqlite3_keyword_name)(e, t, s)),
                                (o._sqlite3_keyword_count = () => (o._sqlite3_keyword_count = Ee.sqlite3_keyword_count)()),
                                (o._sqlite3_keyword_check = (e, t) => (o._sqlite3_keyword_check = Ee.sqlite3_keyword_check)(e, t)),
                                (o._sqlite3_complete = (e) => (o._sqlite3_complete = Ee.sqlite3_complete)(e)),
                                (o._sqlite3_libversion = () => (o._sqlite3_libversion = Ee.sqlite3_libversion)()),
                                (o._sqlite3_libversion_number = () => (o._sqlite3_libversion_number = Ee.sqlite3_libversion_number)()),
                                (o._sqlite3_shutdown = () => (o._sqlite3_shutdown = Ee.sqlite3_shutdown)()),
                                (o._sqlite3_last_insert_rowid = (e) => (o._sqlite3_last_insert_rowid = Ee.sqlite3_last_insert_rowid)(e)),
                                (o._sqlite3_set_last_insert_rowid = (e, t) => (o._sqlite3_set_last_insert_rowid = Ee.sqlite3_set_last_insert_rowid)(e, t)),
                                (o._sqlite3_changes64 = (e) => (o._sqlite3_changes64 = Ee.sqlite3_changes64)(e)),
                                (o._sqlite3_changes = (e) => (o._sqlite3_changes = Ee.sqlite3_changes)(e)),
                                (o._sqlite3_total_changes64 = (e) => (o._sqlite3_total_changes64 = Ee.sqlite3_total_changes64)(e)),
                                (o._sqlite3_total_changes = (e) => (o._sqlite3_total_changes = Ee.sqlite3_total_changes)(e)),
                                (o._sqlite3_txn_state = (e, t) => (o._sqlite3_txn_state = Ee.sqlite3_txn_state)(e, t)),
                                (o._sqlite3_close_v2 = (e) => (o._sqlite3_close_v2 = Ee.sqlite3_close_v2)(e)),
                                (o._sqlite3_busy_handler = (e, t, s) => (o._sqlite3_busy_handler = Ee.sqlite3_busy_handler)(e, t, s)),
                                (o._sqlite3_progress_handler = (e, t, s, n) => (o._sqlite3_progress_handler = Ee.sqlite3_progress_handler)(e, t, s, n)),
                                (o._sqlite3_busy_timeout = (e, t) => (o._sqlite3_busy_timeout = Ee.sqlite3_busy_timeout)(e, t)),
                                (o._sqlite3_interrupt = (e) => (o._sqlite3_interrupt = Ee.sqlite3_interrupt)(e)),
                                (o._sqlite3_is_interrupted = (e) => (o._sqlite3_is_interrupted = Ee.sqlite3_is_interrupted)(e)),
                                (o._sqlite3_create_function = (e, t, s, n, r, i, a, l) => (o._sqlite3_create_function = Ee.sqlite3_create_function)(e, t, s, n, r, i, a, l)),
                                (o._sqlite3_create_function_v2 = (e, t, s, n, r, i, a, l, c) => (o._sqlite3_create_function_v2 = Ee.sqlite3_create_function_v2)(e, t, s, n, r, i, a, l, c)),
                                (o._sqlite3_create_window_function = (e, t, s, n, r, i, a, l, c, _) => (o._sqlite3_create_window_function = Ee.sqlite3_create_window_function)(e, t, s, n, r, i, a, l, c, _)),
                                (o._sqlite3_overload_function = (e, t, s) => (o._sqlite3_overload_function = Ee.sqlite3_overload_function)(e, t, s)),
                                (o._sqlite3_trace_v2 = (e, t, s, n) => (o._sqlite3_trace_v2 = Ee.sqlite3_trace_v2)(e, t, s, n)),
                                (o._sqlite3_commit_hook = (e, t, s) => (o._sqlite3_commit_hook = Ee.sqlite3_commit_hook)(e, t, s)),
                                (o._sqlite3_update_hook = (e, t, s) => (o._sqlite3_update_hook = Ee.sqlite3_update_hook)(e, t, s)),
                                (o._sqlite3_rollback_hook = (e, t, s) => (o._sqlite3_rollback_hook = Ee.sqlite3_rollback_hook)(e, t, s)),
                                (o._sqlite3_preupdate_hook = (e, t, s) => (o._sqlite3_preupdate_hook = Ee.sqlite3_preupdate_hook)(e, t, s)),
                                (o._sqlite3_error_offset = (e) => (o._sqlite3_error_offset = Ee.sqlite3_error_offset)(e)),
                                (o._sqlite3_errcode = (e) => (o._sqlite3_errcode = Ee.sqlite3_errcode)(e)),
                                (o._sqlite3_extended_errcode = (e) => (o._sqlite3_extended_errcode = Ee.sqlite3_extended_errcode)(e)),
                                (o._sqlite3_errstr = (e) => (o._sqlite3_errstr = Ee.sqlite3_errstr)(e)),
                                (o._sqlite3_limit = (e, t, s) => (o._sqlite3_limit = Ee.sqlite3_limit)(e, t, s)),
                                (o._sqlite3_open = (e, t) => (o._sqlite3_open = Ee.sqlite3_open)(e, t)),
                                (o._sqlite3_open_v2 = (e, t, s, n) => (o._sqlite3_open_v2 = Ee.sqlite3_open_v2)(e, t, s, n)),
                                (o._sqlite3_create_collation = (e, t, s, n, r) => (o._sqlite3_create_collation = Ee.sqlite3_create_collation)(e, t, s, n, r)),
                                (o._sqlite3_create_collation_v2 = (e, t, s, n, r, i) => (o._sqlite3_create_collation_v2 = Ee.sqlite3_create_collation_v2)(e, t, s, n, r, i)),
                                (o._sqlite3_collation_needed = (e, t, s) => (o._sqlite3_collation_needed = Ee.sqlite3_collation_needed)(e, t, s)),
                                (o._sqlite3_get_autocommit = (e) => (o._sqlite3_get_autocommit = Ee.sqlite3_get_autocommit)(e)),
                                (o._sqlite3_table_column_metadata = (e, t, s, n, r, i, a, l, c) => (o._sqlite3_table_column_metadata = Ee.sqlite3_table_column_metadata)(e, t, s, n, r, i, a, l, c)),
                                (o._sqlite3_extended_result_codes = (e, t) => (o._sqlite3_extended_result_codes = Ee.sqlite3_extended_result_codes)(e, t)),
                                (o._sqlite3_uri_key = (e, t) => (o._sqlite3_uri_key = Ee.sqlite3_uri_key)(e, t)),
                                (o._sqlite3_uri_int64 = (e, t, s) => (o._sqlite3_uri_int64 = Ee.sqlite3_uri_int64)(e, t, s)),
                                (o._sqlite3_db_name = (e, t) => (o._sqlite3_db_name = Ee.sqlite3_db_name)(e, t)),
                                (o._sqlite3_db_filename = (e, t) => (o._sqlite3_db_filename = Ee.sqlite3_db_filename)(e, t)),
                                (o._sqlite3_db_readonly = (e, t) => (o._sqlite3_db_readonly = Ee.sqlite3_db_readonly)(e, t)),
                                (o._sqlite3_compileoption_used = (e) => (o._sqlite3_compileoption_used = Ee.sqlite3_compileoption_used)(e)),
                                (o._sqlite3_compileoption_get = (e) => (o._sqlite3_compileoption_get = Ee.sqlite3_compileoption_get)(e)),
                                (o._sqlite3session_diff = (e, t, s, n) => (o._sqlite3session_diff = Ee.sqlite3session_diff)(e, t, s, n)),
                                (o._sqlite3session_attach = (e, t) => (o._sqlite3session_attach = Ee.sqlite3session_attach)(e, t)),
                                (o._sqlite3session_create = (e, t, s) => (o._sqlite3session_create = Ee.sqlite3session_create)(e, t, s)),
                                (o._sqlite3session_delete = (e) => (o._sqlite3session_delete = Ee.sqlite3session_delete)(e)),
                                (o._sqlite3session_table_filter = (e, t, s) => (o._sqlite3session_table_filter = Ee.sqlite3session_table_filter)(e, t, s)),
                                (o._sqlite3session_changeset = (e, t, s) => (o._sqlite3session_changeset = Ee.sqlite3session_changeset)(e, t, s)),
                                (o._sqlite3session_changeset_strm = (e, t, s) => (o._sqlite3session_changeset_strm = Ee.sqlite3session_changeset_strm)(e, t, s)),
                                (o._sqlite3session_patchset_strm = (e, t, s) => (o._sqlite3session_patchset_strm = Ee.sqlite3session_patchset_strm)(e, t, s)),
                                (o._sqlite3session_patchset = (e, t, s) => (o._sqlite3session_patchset = Ee.sqlite3session_patchset)(e, t, s)),
                                (o._sqlite3session_enable = (e, t) => (o._sqlite3session_enable = Ee.sqlite3session_enable)(e, t)),
                                (o._sqlite3session_indirect = (e, t) => (o._sqlite3session_indirect = Ee.sqlite3session_indirect)(e, t)),
                                (o._sqlite3session_isempty = (e) => (o._sqlite3session_isempty = Ee.sqlite3session_isempty)(e)),
                                (o._sqlite3session_memory_used = (e) => (o._sqlite3session_memory_used = Ee.sqlite3session_memory_used)(e)),
                                (o._sqlite3session_object_config = (e, t, s) => (o._sqlite3session_object_config = Ee.sqlite3session_object_config)(e, t, s)),
                                (o._sqlite3session_changeset_size = (e) => (o._sqlite3session_changeset_size = Ee.sqlite3session_changeset_size)(e)),
                                (o._sqlite3changeset_start = (e, t, s) => (o._sqlite3changeset_start = Ee.sqlite3changeset_start)(e, t, s)),
                                (o._sqlite3changeset_start_v2 = (e, t, s, n) => (o._sqlite3changeset_start_v2 = Ee.sqlite3changeset_start_v2)(e, t, s, n)),
                                (o._sqlite3changeset_start_strm = (e, t, s) => (o._sqlite3changeset_start_strm = Ee.sqlite3changeset_start_strm)(e, t, s)),
                                (o._sqlite3changeset_start_v2_strm = (e, t, s, n) => (o._sqlite3changeset_start_v2_strm = Ee.sqlite3changeset_start_v2_strm)(e, t, s, n)),
                                (o._sqlite3changeset_next = (e) => (o._sqlite3changeset_next = Ee.sqlite3changeset_next)(e)),
                                (o._sqlite3changeset_op = (e, t, s, n, r) => (o._sqlite3changeset_op = Ee.sqlite3changeset_op)(e, t, s, n, r)),
                                (o._sqlite3changeset_pk = (e, t, s) => (o._sqlite3changeset_pk = Ee.sqlite3changeset_pk)(e, t, s)),
                                (o._sqlite3changeset_old = (e, t, s) => (o._sqlite3changeset_old = Ee.sqlite3changeset_old)(e, t, s)),
                                (o._sqlite3changeset_new = (e, t, s) => (o._sqlite3changeset_new = Ee.sqlite3changeset_new)(e, t, s)),
                                (o._sqlite3changeset_conflict = (e, t, s) => (o._sqlite3changeset_conflict = Ee.sqlite3changeset_conflict)(e, t, s)),
                                (o._sqlite3changeset_fk_conflicts = (e, t) => (o._sqlite3changeset_fk_conflicts = Ee.sqlite3changeset_fk_conflicts)(e, t)),
                                (o._sqlite3changeset_finalize = (e) => (o._sqlite3changeset_finalize = Ee.sqlite3changeset_finalize)(e)),
                                (o._sqlite3changeset_invert = (e, t, s, n) => (o._sqlite3changeset_invert = Ee.sqlite3changeset_invert)(e, t, s, n)),
                                (o._sqlite3changeset_invert_strm = (e, t, s, n) => (o._sqlite3changeset_invert_strm = Ee.sqlite3changeset_invert_strm)(e, t, s, n)),
                                (o._sqlite3changeset_apply_v2 = (e, t, s, n, r, i, a, l, c) => (o._sqlite3changeset_apply_v2 = Ee.sqlite3changeset_apply_v2)(e, t, s, n, r, i, a, l, c)),
                                (o._sqlite3changeset_apply = (e, t, s, n, r, i) => (o._sqlite3changeset_apply = Ee.sqlite3changeset_apply)(e, t, s, n, r, i)),
                                (o._sqlite3changeset_apply_v2_strm = (e, t, s, n, r, i, a, l, c) => (o._sqlite3changeset_apply_v2_strm = Ee.sqlite3changeset_apply_v2_strm)(e, t, s, n, r, i, a, l, c)),
                                (o._sqlite3changeset_apply_strm = (e, t, s, n, r, i) => (o._sqlite3changeset_apply_strm = Ee.sqlite3changeset_apply_strm)(e, t, s, n, r, i)),
                                (o._sqlite3changegroup_new = (e) => (o._sqlite3changegroup_new = Ee.sqlite3changegroup_new)(e)),
                                (o._sqlite3changegroup_add = (e, t, s) => (o._sqlite3changegroup_add = Ee.sqlite3changegroup_add)(e, t, s)),
                                (o._sqlite3changegroup_output = (e, t, s) => (o._sqlite3changegroup_output = Ee.sqlite3changegroup_output)(e, t, s)),
                                (o._sqlite3changegroup_add_strm = (e, t, s) => (o._sqlite3changegroup_add_strm = Ee.sqlite3changegroup_add_strm)(e, t, s)),
                                (o._sqlite3changegroup_output_strm = (e, t, s) => (o._sqlite3changegroup_output_strm = Ee.sqlite3changegroup_output_strm)(e, t, s)),
                                (o._sqlite3changegroup_delete = (e) => (o._sqlite3changegroup_delete = Ee.sqlite3changegroup_delete)(e)),
                                (o._sqlite3changeset_concat = (e, t, s, n, r, i) => (o._sqlite3changeset_concat = Ee.sqlite3changeset_concat)(e, t, s, n, r, i)),
                                (o._sqlite3changeset_concat_strm = (e, t, s, n, r, i) => (o._sqlite3changeset_concat_strm = Ee.sqlite3changeset_concat_strm)(e, t, s, n, r, i)),
                                (o._sqlite3session_config = (e, t) => (o._sqlite3session_config = Ee.sqlite3session_config)(e, t)),
                                (o._sqlite3_sourceid = () => (o._sqlite3_sourceid = Ee.sqlite3_sourceid)()),
                                (o._sqlite3__wasm_pstack_ptr = () => (o._sqlite3__wasm_pstack_ptr = Ee.sqlite3__wasm_pstack_ptr)()),
                                (o._sqlite3__wasm_pstack_restore = (e) => (o._sqlite3__wasm_pstack_restore = Ee.sqlite3__wasm_pstack_restore)(e)),
                                (o._sqlite3__wasm_pstack_alloc = (e) => (o._sqlite3__wasm_pstack_alloc = Ee.sqlite3__wasm_pstack_alloc)(e)),
                                (o._sqlite3__wasm_pstack_remaining = () => (o._sqlite3__wasm_pstack_remaining = Ee.sqlite3__wasm_pstack_remaining)()),
                                (o._sqlite3__wasm_pstack_quota = () => (o._sqlite3__wasm_pstack_quota = Ee.sqlite3__wasm_pstack_quota)()),
                                (o._sqlite3__wasm_db_error = (e, t, s) => (o._sqlite3__wasm_db_error = Ee.sqlite3__wasm_db_error)(e, t, s)),
                                (o._sqlite3__wasm_test_struct = (e) => (o._sqlite3__wasm_test_struct = Ee.sqlite3__wasm_test_struct)(e)),
                                (o._sqlite3__wasm_enum_json = () => (o._sqlite3__wasm_enum_json = Ee.sqlite3__wasm_enum_json)()),
                                (o._sqlite3__wasm_vfs_unlink = (e, t) => (o._sqlite3__wasm_vfs_unlink = Ee.sqlite3__wasm_vfs_unlink)(e, t)),
                                (o._sqlite3__wasm_db_vfs = (e, t) => (o._sqlite3__wasm_db_vfs = Ee.sqlite3__wasm_db_vfs)(e, t)),
                                (o._sqlite3__wasm_db_reset = (e) => (o._sqlite3__wasm_db_reset = Ee.sqlite3__wasm_db_reset)(e)),
                                (o._sqlite3__wasm_db_export_chunked = (e, t) => (o._sqlite3__wasm_db_export_chunked = Ee.sqlite3__wasm_db_export_chunked)(e, t)),
                                (o._sqlite3__wasm_db_serialize = (e, t, s, n, r) => (o._sqlite3__wasm_db_serialize = Ee.sqlite3__wasm_db_serialize)(e, t, s, n, r)),
                                (o._sqlite3__wasm_vfs_create_file = (e, t, s, n) => (o._sqlite3__wasm_vfs_create_file = Ee.sqlite3__wasm_vfs_create_file)(e, t, s, n)),
                                (o._sqlite3__wasm_posix_create_file = (e, t, s) => (o._sqlite3__wasm_posix_create_file = Ee.sqlite3__wasm_posix_create_file)(e, t, s)),
                                (o._sqlite3__wasm_kvvfsMakeKeyOnPstack = (e, t) => (o._sqlite3__wasm_kvvfsMakeKeyOnPstack = Ee.sqlite3__wasm_kvvfsMakeKeyOnPstack)(e, t)),
                                (o._sqlite3__wasm_kvvfs_methods = () => (o._sqlite3__wasm_kvvfs_methods = Ee.sqlite3__wasm_kvvfs_methods)()),
                                (o._sqlite3__wasm_vtab_config = (e, t, s) => (o._sqlite3__wasm_vtab_config = Ee.sqlite3__wasm_vtab_config)(e, t, s)),
                                (o._sqlite3__wasm_db_config_ip = (e, t, s, n) => (o._sqlite3__wasm_db_config_ip = Ee.sqlite3__wasm_db_config_ip)(e, t, s, n)),
                                (o._sqlite3__wasm_db_config_pii = (e, t, s, n, r) => (o._sqlite3__wasm_db_config_pii = Ee.sqlite3__wasm_db_config_pii)(e, t, s, n, r)),
                                (o._sqlite3__wasm_db_config_s = (e, t, s) => (o._sqlite3__wasm_db_config_s = Ee.sqlite3__wasm_db_config_s)(e, t, s)),
                                (o._sqlite3__wasm_config_i = (e, t) => (o._sqlite3__wasm_config_i = Ee.sqlite3__wasm_config_i)(e, t)),
                                (o._sqlite3__wasm_config_ii = (e, t, s) => (o._sqlite3__wasm_config_ii = Ee.sqlite3__wasm_config_ii)(e, t, s)),
                                (o._sqlite3__wasm_config_j = (e, t) => (o._sqlite3__wasm_config_j = Ee.sqlite3__wasm_config_j)(e, t)),
                                (o._sqlite3__wasm_qfmt_token = (e, t) => (o._sqlite3__wasm_qfmt_token = Ee.sqlite3__wasm_qfmt_token)(e, t)),
                                (o._sqlite3__wasm_init_wasmfs = (e) => (o._sqlite3__wasm_init_wasmfs = Ee.sqlite3__wasm_init_wasmfs)(e)),
                                (o._sqlite3__wasm_test_intptr = (e) => (o._sqlite3__wasm_test_intptr = Ee.sqlite3__wasm_test_intptr)(e)),
                                (o._sqlite3__wasm_test_voidptr = (e) => (o._sqlite3__wasm_test_voidptr = Ee.sqlite3__wasm_test_voidptr)(e)),
                                (o._sqlite3__wasm_test_int64_max = () => (o._sqlite3__wasm_test_int64_max = Ee.sqlite3__wasm_test_int64_max)()),
                                (o._sqlite3__wasm_test_int64_min = () => (o._sqlite3__wasm_test_int64_min = Ee.sqlite3__wasm_test_int64_min)()),
                                (o._sqlite3__wasm_test_int64_times2 = (e) => (o._sqlite3__wasm_test_int64_times2 = Ee.sqlite3__wasm_test_int64_times2)(e)),
                                (o._sqlite3__wasm_test_int64_minmax = (e, t) => (o._sqlite3__wasm_test_int64_minmax = Ee.sqlite3__wasm_test_int64_minmax)(e, t)),
                                (o._sqlite3__wasm_test_int64ptr = (e) => (o._sqlite3__wasm_test_int64ptr = Ee.sqlite3__wasm_test_int64ptr)(e)),
                                (o._sqlite3__wasm_test_stack_overflow = (e) => (o._sqlite3__wasm_test_stack_overflow = Ee.sqlite3__wasm_test_stack_overflow)(e)),
                                (o._sqlite3__wasm_test_str_hello = (e) => (o._sqlite3__wasm_test_str_hello = Ee.sqlite3__wasm_test_str_hello)(e)),
                                (o._sqlite3__wasm_SQLTester_strglob = (e, t) => (o._sqlite3__wasm_SQLTester_strglob = Ee.sqlite3__wasm_SQLTester_strglob)(e, t)),
                                (o._malloc = (e) => (o._malloc = Ee.malloc)(e)),
                                (o._free = (e) => (o._free = Ee.free)(e)),
                                (o._realloc = (e, t) => (o._realloc = Ee.realloc)(e, t)),
                                (e, t) => (Se = Ee.emscripten_builtin_memalign)(e, t));
                        function xe() {
                            var e;
                            function s() {
                                var e;
                                ye || ((ye = 1), (o.calledRun = 1), I || (o.noFSInit || le.initialized || le.init(), (le.ignorePermissions = !1), se.init(), V(O), t(o), o.onRuntimeInitialized?.(), (e = o.postRun) && ("function" == typeof e && (e = [e]), e.forEach(C)), V(P)));
                            }
                            N > 0 ||
                                (!we && ((we = 1), (e = o.preRun) && ("function" == typeof e && (e = [e]), e.forEach(L)), V(F), N > 0)) ||
                                (o.setStatus
                                    ? (o.setStatus("Running..."),
                                      setTimeout(() => {
                                          setTimeout(() => o.setStatus(""), 1), s();
                                      }, 1))
                                    : s());
                        }
                        if (
                            ((o.wasmMemory = q),
                            (j = function e() {
                                ye || xe(), ye || (j = e);
                            }),
                            o.preInit)
                        )
                            for ("function" == typeof o.preInit && (o.preInit = [o.preInit]); o.preInit.length > 0; ) o.preInit.pop()();
                        return (
                            xe(),
                            o.postRun || (o.postRun = []),
                            o.postRun.push(function (e) {
                                if (
                                    ((globalThis.sqlite3ApiBootstrap = function t(s = globalThis.sqlite3ApiConfig || t.defaultConfig) {
                                        if (t.sqlite3) return (t.sqlite3.config || console).warn("sqlite3ApiBootstrap() called multiple times.", "Config and external initializers are ignored on calls after the first."), t.sqlite3;
                                        const n = Object.assign(Object.create(null), { exports: void 0, memory: void 0, bigIntEnabled: !(void 0 === e || !e.HEAPU64) || !!globalThis.BigInt64Array, debug: function () {}.bind(), warn: function () {}.bind(), error: function () {}.bind(), log: function () {}.bind(), wasmfsOpfsDir: "/opfs", useStdAlloc: !1 }, s || {});
                                        Object.assign(n, { allocExportName: n.useStdAlloc ? "malloc" : "sqlite3_malloc", deallocExportName: n.useStdAlloc ? "free" : "sqlite3_free", reallocExportName: n.useStdAlloc ? "realloc" : "sqlite3_realloc" }, n),
                                            ["exports", "memory", "wasmfsOpfsDir"].forEach((e) => {
                                                "function" == typeof n[e] && (n[e] = n[e]());
                                            }),
                                            delete globalThis.sqlite3ApiConfig,
                                            delete t.defaultConfig;
                                        const r = Object.create(null),
                                            i = Object.create(null),
                                            o = (e) => (r.sqlite3_js_rc_str && r.sqlite3_js_rc_str(e)) || "Unknown result code #" + e;
                                        class a extends Error {
                                            constructor(...e) {
                                                let t;
                                                if (e.length)
                                                    if ("number" == typeof (s = e[0]) && s === (0 | s))
                                                        if (((t = e[0]), 1 === e.length)) super(o(e[0]));
                                                        else {
                                                            const s = o(t);
                                                            "object" == typeof e[1] ? super(s, e[1]) : ((e[0] = s + ":"), super(e.join(" ")));
                                                        }
                                                    else 2 === e.length && "object" == typeof e[1] ? super(...e) : super(e.join(" "));
                                                var s;
                                                (this.resultCode = t || r.SQLITE_ERROR), (this.name = "SQLite3Error");
                                            }
                                        }
                                        a.toss = (...e) => {
                                            throw new a(...e);
                                        };
                                        const l = a.toss;
                                        n.wasmfsOpfsDir && !/^\/[^/]+$/.test(n.wasmfsOpfsDir) && l("config.wasmfsOpfsDir must be falsy or in the form '/dir-name'.");
                                        const c = (e) => "bigint" != typeof e && !!(e === (0 | e) && e <= 2147483647 && e >= -2147483648),
                                            _ = "undefined" == typeof SharedArrayBuffer ? function () {} : SharedArrayBuffer,
                                            u = (e) => e.buffer instanceof _,
                                            d = (e, t, s) => (u(e) ? e.slice(t, s) : e.subarray(t, s)),
                                            f = (e) => e && (e instanceof Uint8Array || e instanceof Int8Array || e instanceof ArrayBuffer),
                                            p = (e) => e && (e instanceof Uint8Array || e instanceof Int8Array || e instanceof ArrayBuffer),
                                            m = (e) => f(e) || l("Value is not of a supported TypedArray type."),
                                            h = new TextDecoder("utf-8"),
                                            g = function (e, t, s) {
                                                return h.decode(d(e, t, s));
                                            },
                                            q = function (e) {
                                                return p(e) ? g(e instanceof ArrayBuffer ? new Uint8Array(e) : e) : Array.isArray(e) ? e.join("") : (i.isPtr(e) && (e = i.cstrToJs(e)), e);
                                            };
                                        class b extends Error {
                                            constructor(...e) {
                                                2 === e.length && "object" == typeof e[1] ? super(...e) : e.length ? super(e.join(" ")) : super("Allocation failed."), (this.resultCode = r.SQLITE_NOMEM), (this.name = "WasmAllocError");
                                            }
                                        }
                                        (b.toss = (...e) => {
                                            throw new b(...e);
                                        }),
                                            Object.assign(r, { sqlite3_bind_blob: void 0, sqlite3_bind_text: void 0, sqlite3_create_function_v2: (e, t, s, n, r, i, o, a, l) => {}, sqlite3_create_function: (e, t, s, n, r, i, o, a) => {}, sqlite3_create_window_function: (e, t, s, n, r, i, o, a, l, c) => {}, sqlite3_prepare_v3: (e, t, s, n, r, i) => {}, sqlite3_prepare_v2: (e, t, s, n, r) => {}, sqlite3_exec: (e, t, s, n, r) => {}, sqlite3_randomness: (e, t) => {} });
                                        const y = {
                                            affirmBindableTypedArray: m,
                                            flexibleString: q,
                                            bigIntFits32: (e) => e >= -2147483648n && e <= 0x7fffffffn,
                                            bigIntFits64: function e(t) {
                                                return e._max || ((e._max = BigInt("0x7fffffffffffffff")), (e._min = ~e._max)), t >= e._min && t <= e._max;
                                            },
                                            bigIntFitsDouble: function e(t) {
                                                return e._min || ((e._min = Number.MIN_SAFE_INTEGER), (e._max = Number.MAX_SAFE_INTEGER)), t >= e._min && t <= e._max;
                                            },
                                            isBindableTypedArray: f,
                                            isInt32: c,
                                            isSQLableTypedArray: p,
                                            isTypedArray: (e) => !!(e && e.constructor && c(e.constructor.BYTES_PER_ELEMENT)) && e,
                                            typedArrayToString: g,
                                            isUIThread: () => globalThis.window === globalThis && !!globalThis.document,
                                            isSharedTypedArray: u,
                                            toss: function (...e) {
                                                throw new Error(e.join(" "));
                                            },
                                            toss3: l,
                                            typedArrayPart: d,
                                            affirmDbHeader: function (e) {
                                                e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                                const t = "SQLite format 3";
                                                15 > e.byteLength && l("Input does not contain an SQLite3 database header.");
                                                for (let s = 0; s < 15; ++s) t.charCodeAt(s) !== e[s] && l("Input does not contain an SQLite3 database header.");
                                            },
                                            affirmIsDb: function (e) {
                                                e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                                const t = e.byteLength;
                                                (t < 512 || t % 512 != 0) && l("Byte array size", t, "is invalid for an SQLite3 db."), y.affirmDbHeader(e);
                                            },
                                        };
                                        Object.assign(i, { ptrSizeof: n.wasmPtrSizeof || 4, ptrIR: n.wasmPtrIR || "i32", bigIntEnabled: !!n.bigIntEnabled, exports: n.exports || l("Missing API config.exports (WASM module exports)."), memory: n.memory || n.exports.memory || l("API config object requires a WebAssembly.Memory object", "in either config.exports.memory (exported)", "or config.memory (imported)."), alloc: void 0, realloc: void 0, dealloc: void 0 }),
                                            (i.allocFromTypedArray = function (e) {
                                                e instanceof ArrayBuffer && (e = new Uint8Array(e)), m(e);
                                                const t = i.alloc(e.byteLength || 1);
                                                return i.heapForSize(e.constructor).set(e.byteLength ? e : [0], t), t;
                                            });
                                        {
                                            const e = n.allocExportName,
                                                t = n.deallocExportName,
                                                s = n.reallocExportName;
                                            for (const n of [e, t, s]) i.exports[n] instanceof Function || l("Missing required exports[", n, "] function.");
                                            (i.alloc = function e(t) {
                                                return e.impl(t) || b.toss("Failed to allocate", t, " bytes.");
                                            }),
                                                (i.alloc.impl = i.exports[e]),
                                                (i.realloc = function e(t, s) {
                                                    const n = e.impl(t, s);
                                                    return s ? n || b.toss("Failed to reallocate", s, " bytes.") : 0;
                                                }),
                                                (i.realloc.impl = i.exports[s]),
                                                (i.dealloc = i.exports[t]);
                                        }
                                        let w;
                                        if (
                                            ((i.compileOptionUsed = function e(t) {
                                                if (!arguments.length) {
                                                    if (e._result) return e._result;
                                                    e._opt ||
                                                        ((e._rx = /^([^=]+)=(.+)/),
                                                        (e._rxInt = /^-?\d+$/),
                                                        (e._opt = function (t, s) {
                                                            const n = e._rx.exec(t);
                                                            (s[0] = n ? n[1] : t), (s[1] = !n || (e._rxInt.test(n[2]) ? +n[2] : n[2]));
                                                        }));
                                                    const t = {},
                                                        s = [0, 0];
                                                    let n,
                                                        i = 0;
                                                    for (; (n = r.sqlite3_compileoption_get(i++)); ) e._opt(n, s), (t[s[0]] = s[1]);
                                                    return (e._result = t);
                                                }
                                                if (Array.isArray(t)) {
                                                    const e = {};
                                                    return (
                                                        t.forEach((t) => {
                                                            e[t] = r.sqlite3_compileoption_used(t);
                                                        }),
                                                        e
                                                    );
                                                }
                                                return "object" == typeof t
                                                    ? (Object.keys(t).forEach((e) => {
                                                          t[e] = r.sqlite3_compileoption_used(e);
                                                      }),
                                                      t)
                                                    : "string" == typeof t && !!r.sqlite3_compileoption_used(t);
                                            }),
                                            (i.pstack = Object.assign(Object.create(null), {
                                                restore: i.exports.sqlite3__wasm_pstack_restore,
                                                alloc: function (e) {
                                                    return "string" != typeof e || (e = i.sizeofIR(e)) || b.toss("Invalid value for pstack.alloc(", arguments[0], ")"), i.exports.sqlite3__wasm_pstack_alloc(e) || b.toss("Could not allocate", e, "bytes from the pstack.");
                                                },
                                                allocChunks: function (e, t) {
                                                    "string" != typeof t || (t = i.sizeofIR(t)) || b.toss("Invalid size value for allocChunks(", arguments[1], ")");
                                                    const s = i.pstack.alloc(e * t),
                                                        n = [];
                                                    let r = 0,
                                                        o = 0;
                                                    for (; r < e; ++r, o += t) n.push(s + o);
                                                    return n;
                                                },
                                                allocPtr: (e = 1, t = !0) => (1 === e ? i.pstack.alloc(t ? 8 : i.ptrSizeof) : i.pstack.allocChunks(e, t ? 8 : i.ptrSizeof)),
                                                call: function (e) {
                                                    const t = i.pstack.pointer;
                                                    try {
                                                        return e(S);
                                                    } finally {
                                                        i.pstack.restore(t);
                                                    }
                                                },
                                            })),
                                            Object.defineProperties(i.pstack, { pointer: { configurable: !1, iterable: !0, writeable: !1, get: i.exports.sqlite3__wasm_pstack_ptr }, quota: { configurable: !1, iterable: !0, writeable: !1, get: i.exports.sqlite3__wasm_pstack_quota }, remaining: { configurable: !1, iterable: !0, writeable: !1, get: i.exports.sqlite3__wasm_pstack_remaining } }),
                                            (r.sqlite3_randomness = (...e) => {
                                                if (1 === e.length && y.isTypedArray(e[0]) && 1 === e[0].BYTES_PER_ELEMENT) {
                                                    const t = e[0];
                                                    if (0 === t.byteLength) return i.exports.sqlite3_randomness(0, 0), t;
                                                    const s = i.pstack.pointer;
                                                    try {
                                                        let e = t.byteLength,
                                                            s = 0;
                                                        const n = i.exports.sqlite3_randomness,
                                                            r = i.heap8u(),
                                                            o = e < 512 ? e : 512,
                                                            a = i.pstack.alloc(o);
                                                        do {
                                                            const i = e > o ? o : e;
                                                            n(i, a), t.set(d(r, a, a + i), s), (e -= i), (s += i);
                                                        } while (e > 0);
                                                    } catch (e) {
                                                    } finally {
                                                        i.pstack.restore(s);
                                                    }
                                                    return t;
                                                }
                                                i.exports.sqlite3_randomness(...e);
                                            }),
                                            (r.sqlite3_wasmfs_opfs_dir = function () {
                                                if (void 0 !== w) return w;
                                                const e = n.wasmfsOpfsDir;
                                                if (!(e && globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle)) return (w = "");
                                                try {
                                                    return (w = e && 0 === i.xCallWrapped("sqlite3__wasm_init_wasmfs", "i32", ["string"], e) ? e : "");
                                                } catch (e) {
                                                    return (w = "");
                                                }
                                            }),
                                            (r.sqlite3_wasmfs_filename_is_persistent = function (e) {
                                                const t = r.sqlite3_wasmfs_opfs_dir();
                                                return !(!t || !e) && e.startsWith(t + "/");
                                            }),
                                            (r.sqlite3_js_db_uses_vfs = function (e, t, s = 0) {
                                                try {
                                                    const n = r.sqlite3_vfs_find(t);
                                                    return !!n && (e ? n === r.sqlite3_js_db_vfs(e, s) && n : n === r.sqlite3_vfs_find(0) && n);
                                                } catch (e) {
                                                    return !1;
                                                }
                                            }),
                                            (r.sqlite3_js_vfs_list = function () {
                                                const e = [];
                                                let t = r.sqlite3_vfs_find(0);
                                                for (; t; ) {
                                                    const s = new r.sqlite3_vfs(t);
                                                    e.push(i.cstrToJs(s.$zName)), (t = s.$pNext), s.dispose();
                                                }
                                                return e;
                                            }),
                                            (r.sqlite3_js_db_export = function (e, t = 0) {
                                                (e = i.xWrap.testConvertArg("sqlite3*", e)) || l("Invalid sqlite3* argument."), i.bigIntEnabled || l("BigInt64 support is not enabled.");
                                                const s = i.scopedAllocPush();
                                                let n;
                                                try {
                                                    const s = i.scopedAlloc(8 + i.ptrSizeof),
                                                        r = s + 8,
                                                        o = t ? (i.isPtr(t) ? t : i.scopedAllocCString("" + t)) : 0;
                                                    let a = i.exports.sqlite3__wasm_db_serialize(e, o, r, s, 0);
                                                    a && l("Database serialization failed with code", S.capi.sqlite3_js_rc_str(a)), (n = i.peekPtr(r));
                                                    const c = i.peek(s, "i64");
                                                    return (a = c ? i.heap8u().slice(n, n + Number(c)) : new Uint8Array()), a;
                                                } finally {
                                                    n && i.exports.sqlite3_free(n), i.scopedAllocPop(s);
                                                }
                                            }),
                                            (r.sqlite3_js_db_vfs = (e, t = 0) => y.sqlite3__wasm_db_vfs(e, t)),
                                            (r.sqlite3_js_aggregate_context = (e, t) => r.sqlite3_aggregate_context(e, t) || (t ? b.toss("Cannot allocate", t, "bytes for sqlite3_aggregate_context()") : 0)),
                                            (r.sqlite3_js_posix_create_file = function (e, t, s) {
                                                let n;
                                                t && i.isPtr(t) ? (n = t) : t instanceof ArrayBuffer || t instanceof Uint8Array ? ((n = i.allocFromTypedArray(t)), (arguments.length < 3 || !y.isInt32(s) || s < 0) && (s = t.byteLength)) : a.toss("Invalid 2nd argument for sqlite3_js_posix_create_file().");
                                                try {
                                                    (!y.isInt32(s) || s < 0) && a.toss("Invalid 3rd argument for sqlite3_js_posix_create_file().");
                                                    const t = y.sqlite3__wasm_posix_create_file(e, n, s);
                                                    t && a.toss("Creation of file failed with sqlite3 result code", r.sqlite3_js_rc_str(t));
                                                } finally {
                                                    i.dealloc(n);
                                                }
                                            }),
                                            (r.sqlite3_js_vfs_create_file = function (e, t, s, o) {
                                                let l;
                                                n.warn("sqlite3_js_vfs_create_file() is deprecated and", "should be avoided because it can lead to C-level crashes.", "See its documentation for alternative options."), s ? (i.isPtr(s) ? (l = s) : s instanceof ArrayBuffer && (s = new Uint8Array(s)), s instanceof Uint8Array ? ((l = i.allocFromTypedArray(s)), (arguments.length < 4 || !y.isInt32(o) || o < 0) && (o = s.byteLength)) : a.toss("Invalid 3rd argument type for sqlite3_js_vfs_create_file().")) : (l = 0), (!y.isInt32(o) || o < 0) && (i.dealloc(l), a.toss("Invalid 4th argument for sqlite3_js_vfs_create_file()."));
                                                try {
                                                    const s = y.sqlite3__wasm_vfs_create_file(e, t, l, o);
                                                    s && a.toss("Creation of file failed with sqlite3 result code", r.sqlite3_js_rc_str(s));
                                                } finally {
                                                    i.dealloc(l);
                                                }
                                            }),
                                            (r.sqlite3_js_sql_to_string = (e) => {
                                                if ("string" == typeof e) return e;
                                                const t = q(v);
                                                return t === v ? void 0 : t;
                                            }),
                                            y.isUIThread())
                                        ) {
                                            const e = function (e) {
                                                const t = Object.create(null);
                                                return (t.prefix = "kvvfs-" + e), (t.stores = []), ("session" !== e && "" !== e) || t.stores.push(globalThis.sessionStorage), ("local" !== e && "" !== e) || t.stores.push(globalThis.localStorage), t;
                                            };
                                            (r.sqlite3_js_kvvfs_clear = function (t = "") {
                                                let s = 0;
                                                const n = e(t);
                                                return (
                                                    n.stores.forEach((e) => {
                                                        const t = [];
                                                        let r;
                                                        for (r = 0; r < e.length; ++r) {
                                                            const s = e.key(r);
                                                            s.startsWith(n.prefix) && t.push(s);
                                                        }
                                                        t.forEach((t) => e.removeItem(t)), (s += t.length);
                                                    }),
                                                    s
                                                );
                                            }),
                                                (r.sqlite3_js_kvvfs_size = function (t = "") {
                                                    let s = 0;
                                                    const n = e(t);
                                                    return (
                                                        n.stores.forEach((e) => {
                                                            let t;
                                                            for (t = 0; t < e.length; ++t) {
                                                                const r = e.key(t);
                                                                r.startsWith(n.prefix) && ((s += r.length), (s += e.getItem(r).length));
                                                            }
                                                        }),
                                                        2 * s
                                                    );
                                                });
                                        }
                                        (r.sqlite3_db_config = function (e, t, ...s) {
                                            switch ((this.s || ((this.s = i.xWrap("sqlite3__wasm_db_config_s", "int", ["sqlite3*", "int", "string:static"])), (this.pii = i.xWrap("sqlite3__wasm_db_config_pii", "int", ["sqlite3*", "int", "*", "int", "int"])), (this.ip = i.xWrap("sqlite3__wasm_db_config_ip", "int", ["sqlite3*", "int", "int", "*"]))), t)) {
                                                case r.SQLITE_DBCONFIG_ENABLE_FKEY:
                                                case r.SQLITE_DBCONFIG_ENABLE_TRIGGER:
                                                case r.SQLITE_DBCONFIG_ENABLE_FTS3_TOKENIZER:
                                                case r.SQLITE_DBCONFIG_ENABLE_LOAD_EXTENSION:
                                                case r.SQLITE_DBCONFIG_NO_CKPT_ON_CLOSE:
                                                case r.SQLITE_DBCONFIG_ENABLE_QPSG:
                                                case r.SQLITE_DBCONFIG_TRIGGER_EQP:
                                                case r.SQLITE_DBCONFIG_RESET_DATABASE:
                                                case r.SQLITE_DBCONFIG_DEFENSIVE:
                                                case r.SQLITE_DBCONFIG_WRITABLE_SCHEMA:
                                                case r.SQLITE_DBCONFIG_LEGACY_ALTER_TABLE:
                                                case r.SQLITE_DBCONFIG_DQS_DML:
                                                case r.SQLITE_DBCONFIG_DQS_DDL:
                                                case r.SQLITE_DBCONFIG_ENABLE_VIEW:
                                                case r.SQLITE_DBCONFIG_LEGACY_FILE_FORMAT:
                                                case r.SQLITE_DBCONFIG_TRUSTED_SCHEMA:
                                                case r.SQLITE_DBCONFIG_STMT_SCANSTATUS:
                                                case r.SQLITE_DBCONFIG_REVERSE_SCANORDER:
                                                    return this.ip(e, t, s[0], s[1] || 0);
                                                case r.SQLITE_DBCONFIG_LOOKASIDE:
                                                    return this.pii(e, t, s[0], s[1], s[2]);
                                                case r.SQLITE_DBCONFIG_MAINDBNAME:
                                                    return this.s(e, t, s[0]);
                                                default:
                                                    return r.SQLITE_MISUSE;
                                            }
                                        }.bind(Object.create(null))),
                                            (r.sqlite3_value_to_js = function (e, t = !0) {
                                                let s;
                                                const n = r.sqlite3_value_type(e);
                                                switch (n) {
                                                    case r.SQLITE_INTEGER:
                                                        i.bigIntEnabled ? ((s = r.sqlite3_value_int64(e)), y.bigIntFitsDouble(s) && (s = Number(s))) : (s = r.sqlite3_value_double(e));
                                                        break;
                                                    case r.SQLITE_FLOAT:
                                                        s = r.sqlite3_value_double(e);
                                                        break;
                                                    case r.SQLITE_TEXT:
                                                        s = r.sqlite3_value_text(e);
                                                        break;
                                                    case r.SQLITE_BLOB: {
                                                        const t = r.sqlite3_value_bytes(e),
                                                            n = r.sqlite3_value_blob(e);
                                                        t && !n && S.WasmAllocError.toss("Cannot allocate memory for blob argument of", t, "byte(s)"), (s = t ? i.heap8u().slice(n, n + Number(t)) : null);
                                                        break;
                                                    }
                                                    case r.SQLITE_NULL:
                                                        s = null;
                                                        break;
                                                    default:
                                                        t && l(r.SQLITE_MISMATCH, "Unhandled sqlite3_value_type():", n), (s = void 0);
                                                }
                                                return s;
                                            }),
                                            (r.sqlite3_values_to_js = function (e, t, s = !0) {
                                                let n;
                                                const o = [];
                                                for (n = 0; n < e; ++n) o.push(r.sqlite3_value_to_js(i.peekPtr(t + i.ptrSizeof * n), s));
                                                return o;
                                            }),
                                            (r.sqlite3_result_error_js = function (e, t) {
                                                t instanceof b ? r.sqlite3_result_error_nomem(e) : r.sqlite3_result_error(e, "" + t, -1);
                                            }),
                                            (r.sqlite3_result_js = function (e, t) {
                                                if (t instanceof Error) r.sqlite3_result_error_js(e, t);
                                                else
                                                    try {
                                                        switch (typeof t) {
                                                            case "undefined":
                                                                break;
                                                            case "boolean":
                                                                r.sqlite3_result_int(e, t ? 1 : 0);
                                                                break;
                                                            case "bigint":
                                                                y.bigIntFits32(t) ? r.sqlite3_result_int(e, Number(t)) : y.bigIntFitsDouble(t) ? r.sqlite3_result_double(e, Number(t)) : i.bigIntEnabled ? (y.bigIntFits64(t) ? r.sqlite3_result_int64(e, t) : l("BigInt value", t.toString(), "is too BigInt for int64.")) : l("BigInt value", t.toString(), "is too BigInt.");
                                                                break;
                                                            case "number": {
                                                                let s;
                                                                (s = y.isInt32(t) ? r.sqlite3_result_int : i.bigIntEnabled && Number.isInteger(t) && y.bigIntFits64(BigInt(t)) ? r.sqlite3_result_int64 : r.sqlite3_result_double), s(e, t);
                                                                break;
                                                            }
                                                            case "string": {
                                                                const [s, n] = i.allocCString(t, !0);
                                                                r.sqlite3_result_text(e, s, n, r.SQLITE_WASM_DEALLOC);
                                                                break;
                                                            }
                                                            case "object":
                                                                if (null === t) {
                                                                    r.sqlite3_result_null(e);
                                                                    break;
                                                                }
                                                                if (y.isBindableTypedArray(t)) {
                                                                    const s = i.allocFromTypedArray(t);
                                                                    r.sqlite3_result_blob(e, s, t.byteLength, r.SQLITE_WASM_DEALLOC);
                                                                    break;
                                                                }
                                                            default:
                                                                l("Don't not how to handle this UDF result value:", typeof t, t);
                                                        }
                                                    } catch (t) {
                                                        r.sqlite3_result_error_js(e, t);
                                                    }
                                            }),
                                            (r.sqlite3_column_js = function (e, t, s = !0) {
                                                const n = r.sqlite3_column_value(e, t);
                                                return 0 === n ? void 0 : r.sqlite3_value_to_js(n, s);
                                            });
                                        const E = function (e, t, s) {
                                            (s = r[s]), this.ptr ? i.pokePtr(this.ptr, 0) : (this.ptr = i.allocPtr());
                                            const n = s(e, t, this.ptr);
                                            if (n) return a.toss(n, arguments[2] + "() failed with code " + n);
                                            const o = i.peekPtr(this.ptr);
                                            return o ? r.sqlite3_value_to_js(o, !0) : void 0;
                                        }.bind(Object.create(null));
                                        (r.sqlite3_preupdate_new_js = (e, t) => E(e, t, "sqlite3_preupdate_new")), (r.sqlite3_preupdate_old_js = (e, t) => E(e, t, "sqlite3_preupdate_old")), (r.sqlite3changeset_new_js = (e, t) => E(e, t, "sqlite3changeset_new")), (r.sqlite3changeset_old_js = (e, t) => E(e, t, "sqlite3changeset_old"));
                                        const S = {
                                            WasmAllocError: b,
                                            SQLite3Error: a,
                                            capi: r,
                                            util: y,
                                            wasm: i,
                                            config: n,
                                            version: Object.create(null),
                                            client: void 0,
                                            asyncPostInit: async function e() {
                                                if (e.isReady instanceof Promise) return e.isReady;
                                                let s = t.initializersAsync;
                                                delete t.initializersAsync;
                                                const r = async () => (S.__isUnderTest || (delete S.util, delete S.StructBinder), S),
                                                    i = (e) => {
                                                        throw (n.error("an async sqlite3 initializer failed:", e), e);
                                                    };
                                                if (!s || !s.length) return (e.isReady = r().catch(i));
                                                (s = s.map((e) => (e instanceof Function ? async (t) => e(S) : e))), s.push(r);
                                                let o = Promise.resolve(S);
                                                for (; s.length; ) o = o.then(s.shift());
                                                return (e.isReady = o.catch(i));
                                            },
                                            scriptInfo: void 0,
                                        };
                                        try {
                                            t.initializers.forEach((e) => {
                                                e(S);
                                            });
                                        } catch (e) {
                                            throw e;
                                        }
                                        return delete t.initializers, (t.sqlite3 = S), S;
                                    }),
                                    (globalThis.sqlite3ApiBootstrap.initializers = []),
                                    (globalThis.sqlite3ApiBootstrap.initializersAsync = []),
                                    (globalThis.sqlite3ApiBootstrap.defaultConfig = Object.create(null)),
                                    (globalThis.sqlite3ApiBootstrap.sqlite3 = void 0),
                                    (globalThis.WhWasmUtilInstaller = function (e) {
                                        void 0 === e.bigIntEnabled && (e.bigIntEnabled = !!globalThis.BigInt64Array);
                                        const t = (...e) => {
                                            throw new Error(e.join(" "));
                                        };
                                        e.exports || Object.defineProperty(e, "exports", { enumerable: !0, configurable: !0, get: () => e.instance && e.instance.exports });
                                        const s = e.pointerIR || "i32",
                                            n = (e.ptrSizeof = "i32" === s ? 4 : "i64" === s ? 8 : t("Unhandled ptrSizeof:", s)),
                                            r = Object.create(null);
                                        (r.heapSize = 0),
                                            (r.memory = null),
                                            (r.freeFuncIndexes = []),
                                            (r.scopedAlloc = []),
                                            (r.utf8Decoder = new TextDecoder()),
                                            (r.utf8Encoder = new TextEncoder("utf-8")),
                                            (e.sizeofIR = (e) => {
                                                switch (e) {
                                                    case "i8":
                                                        return 1;
                                                    case "i16":
                                                        return 2;
                                                    case "i32":
                                                    case "f32":
                                                    case "float":
                                                        return 4;
                                                    case "i64":
                                                    case "f64":
                                                    case "double":
                                                        return 8;
                                                    case "*":
                                                        return n;
                                                    default:
                                                        return ("" + e).endsWith("*") ? n : void 0;
                                                }
                                            });
                                        const i = function () {
                                            if (r.memory) {
                                                if (r.heapSize === r.memory.buffer.byteLength) return r;
                                            } else r.memory = e.memory instanceof WebAssembly.Memory ? e.memory : e.exports.memory;
                                            const t = r.memory.buffer;
                                            return (r.HEAP8 = new Int8Array(t)), (r.HEAP8U = new Uint8Array(t)), (r.HEAP16 = new Int16Array(t)), (r.HEAP16U = new Uint16Array(t)), (r.HEAP32 = new Int32Array(t)), (r.HEAP32U = new Uint32Array(t)), e.bigIntEnabled && ((r.HEAP64 = new BigInt64Array(t)), (r.HEAP64U = new BigUint64Array(t))), (r.HEAP32F = new Float32Array(t)), (r.HEAP64F = new Float64Array(t)), (r.heapSize = t.byteLength), r;
                                        };
                                        (e.heap8 = () => i().HEAP8),
                                            (e.heap8u = () => i().HEAP8U),
                                            (e.heap16 = () => i().HEAP16),
                                            (e.heap16u = () => i().HEAP16U),
                                            (e.heap32 = () => i().HEAP32),
                                            (e.heap32u = () => i().HEAP32U),
                                            (e.heapForSize = function (s, n = !0) {
                                                const o = r.memory && r.heapSize === r.memory.buffer.byteLength ? r : i();
                                                switch (s) {
                                                    case Int8Array:
                                                        return o.HEAP8;
                                                    case Uint8Array:
                                                        return o.HEAP8U;
                                                    case Int16Array:
                                                        return o.HEAP16;
                                                    case Uint16Array:
                                                        return o.HEAP16U;
                                                    case Int32Array:
                                                        return o.HEAP32;
                                                    case Uint32Array:
                                                        return o.HEAP32U;
                                                    case 8:
                                                        return n ? o.HEAP8U : o.HEAP8;
                                                    case 16:
                                                        return n ? o.HEAP16U : o.HEAP16;
                                                    case 32:
                                                        return n ? o.HEAP32U : o.HEAP32;
                                                    case 64:
                                                        if (o.HEAP64) return n ? o.HEAP64U : o.HEAP64;
                                                        break;
                                                    default:
                                                        if (e.bigIntEnabled) {
                                                            if (s === globalThis.BigUint64Array) return o.HEAP64U;
                                                            if (s === globalThis.BigInt64Array) return o.HEAP64;
                                                            break;
                                                        }
                                                }
                                                t("Invalid heapForSize() size: expecting 8, 16, 32,", "or (if BigInt is enabled) 64.");
                                            }),
                                            (e.functionTable = function () {
                                                return e.exports.__indirect_function_table;
                                            }),
                                            (e.functionEntry = function (t) {
                                                const s = e.functionTable();
                                                return t < s.length ? s.get(t) : void 0;
                                            }),
                                            (e.jsFuncToWasm = function e(s, n) {
                                                if (
                                                    (e._ ||
                                                        (e._ = {
                                                            sigTypes: Object.assign(Object.create(null), { i: "i32", p: "i32", P: "i32", s: "i32", j: "i64", f: "f32", d: "f64" }),
                                                            typeCodes: Object.assign(Object.create(null), { f64: 124, f32: 125, i64: 126, i32: 127 }),
                                                            uleb128Encode: function (e, t, s) {
                                                                s < 128 ? e[t](s) : e[t](s % 128 | 128, s >> 7);
                                                            },
                                                            rxJSig: /^(\w)\((\w*)\)$/,
                                                            sigParams: function (t) {
                                                                const s = e._.rxJSig.exec(t);
                                                                return s ? s[2] : t.substr(1);
                                                            },
                                                            letterType: (s) => e._.sigTypes[s] || t("Invalid signature letter:", s),
                                                            pushSigType: (t, s) => t.push(e._.typeCodes[e._.letterType(s)]),
                                                        }),
                                                    "string" == typeof s)
                                                ) {
                                                    const e = n;
                                                    (n = s), (s = e);
                                                }
                                                const r = e._.sigParams(n),
                                                    i = [1, 96];
                                                e._.uleb128Encode(i, "push", r.length);
                                                for (const t of r) e._.pushSigType(i, t);
                                                return "v" === n[0] ? i.push(0) : (i.push(1), e._.pushSigType(i, n[0])), e._.uleb128Encode(i, "unshift", i.length), i.unshift(0, 97, 115, 109, 1, 0, 0, 0, 1), i.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0), new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array(i)), { e: { f: s } }).exports.f;
                                            });
                                        const o = function (s, n, i) {
                                            if ((i && !r.scopedAlloc.length && t("No scopedAllocPush() scope is active."), "string" == typeof s)) {
                                                const e = n;
                                                (n = s), (s = e);
                                            }
                                            ("string" == typeof n && s instanceof Function) || t("Invalid arguments: expecting (function,signature) or (signature,function).");
                                            const o = e.functionTable(),
                                                a = o.length;
                                            let l;
                                            for (; r.freeFuncIndexes.length && ((l = r.freeFuncIndexes.pop()), o.get(l)); ) l = null;
                                            l || ((l = a), o.grow(1));
                                            try {
                                                return o.set(l, s), i && r.scopedAlloc[r.scopedAlloc.length - 1].push(l), l;
                                            } catch (e) {
                                                if (!(e instanceof TypeError)) throw (l === a && r.freeFuncIndexes.push(a), e);
                                            }
                                            try {
                                                const t = e.jsFuncToWasm(s, n);
                                                o.set(l, t), i && r.scopedAlloc[r.scopedAlloc.length - 1].push(l);
                                            } catch (e) {
                                                throw (l === a && r.freeFuncIndexes.push(a), e);
                                            }
                                            return l;
                                        };
                                        (e.installFunction = (e, t) => o(e, t, !1)),
                                            (e.scopedInstallFunction = (e, t) => o(e, t, !0)),
                                            (e.uninstallFunction = function (t) {
                                                if (!t && 0 !== t) return;
                                                const s = r.freeFuncIndexes,
                                                    n = e.functionTable();
                                                s.push(t);
                                                const i = n.get(t);
                                                return n.set(t, null), i;
                                            }),
                                            (e.peek = function (n, o = "i8") {
                                                o.endsWith("*") && (o = s);
                                                const a = r.memory && r.heapSize === r.memory.buffer.byteLength ? r : i(),
                                                    l = Array.isArray(n) ? [] : void 0;
                                                let c;
                                                do {
                                                    switch ((l && (n = arguments[0].shift()), o)) {
                                                        case "i1":
                                                        case "i8":
                                                            c = a.HEAP8[0 | n];
                                                            break;
                                                        case "i16":
                                                            c = a.HEAP16[n >> 1];
                                                            break;
                                                        case "i32":
                                                            c = a.HEAP32[n >> 2];
                                                            break;
                                                        case "float":
                                                        case "f32":
                                                            c = a.HEAP32F[n >> 2];
                                                            break;
                                                        case "double":
                                                        case "f64":
                                                            c = Number(a.HEAP64F[n >> 3]);
                                                            break;
                                                        case "i64":
                                                            if (e.bigIntEnabled) {
                                                                c = BigInt(a.HEAP64[n >> 3]);
                                                                break;
                                                            }
                                                        default:
                                                            t("Invalid type for peek():", o);
                                                    }
                                                    l && l.push(c);
                                                } while (l && arguments[0].length);
                                                return l || c;
                                            }),
                                            (e.poke = function (e, n, o = "i8") {
                                                o.endsWith("*") && (o = s);
                                                const a = r.memory && r.heapSize === r.memory.buffer.byteLength ? r : i();
                                                for (const s of Array.isArray(e) ? e : [e])
                                                    switch (o) {
                                                        case "i1":
                                                        case "i8":
                                                            a.HEAP8[0 | s] = n;
                                                            continue;
                                                        case "i16":
                                                            a.HEAP16[s >> 1] = n;
                                                            continue;
                                                        case "i32":
                                                            a.HEAP32[s >> 2] = n;
                                                            continue;
                                                        case "float":
                                                        case "f32":
                                                            a.HEAP32F[s >> 2] = n;
                                                            continue;
                                                        case "double":
                                                        case "f64":
                                                            a.HEAP64F[s >> 3] = n;
                                                            continue;
                                                        case "i64":
                                                            if (a.HEAP64) {
                                                                a.HEAP64[s >> 3] = BigInt(n);
                                                                continue;
                                                            }
                                                        default:
                                                            t("Invalid type for poke(): " + o);
                                                    }
                                                return this;
                                            }),
                                            (e.peekPtr = (...t) => e.peek(1 === t.length ? t[0] : t, s)),
                                            (e.pokePtr = (t, n = 0) => e.poke(t, n, s)),
                                            (e.peek8 = (...t) => e.peek(1 === t.length ? t[0] : t, "i8")),
                                            (e.poke8 = (t, s) => e.poke(t, s, "i8")),
                                            (e.peek16 = (...t) => e.peek(1 === t.length ? t[0] : t, "i16")),
                                            (e.poke16 = (t, s) => e.poke(t, s, "i16")),
                                            (e.peek32 = (...t) => e.peek(1 === t.length ? t[0] : t, "i32")),
                                            (e.poke32 = (t, s) => e.poke(t, s, "i32")),
                                            (e.peek64 = (...t) => e.peek(1 === t.length ? t[0] : t, "i64")),
                                            (e.poke64 = (t, s) => e.poke(t, s, "i64")),
                                            (e.peek32f = (...t) => e.peek(1 === t.length ? t[0] : t, "f32")),
                                            (e.poke32f = (t, s) => e.poke(t, s, "f32")),
                                            (e.peek64f = (...t) => e.peek(1 === t.length ? t[0] : t, "f64")),
                                            (e.poke64f = (t, s) => e.poke(t, s, "f64")),
                                            (e.getMemValue = e.peek),
                                            (e.getPtrValue = e.peekPtr),
                                            (e.setMemValue = e.poke),
                                            (e.setPtrValue = e.pokePtr),
                                            (e.isPtr32 = (e) => "number" == typeof e && e === (0 | e) && e >= 0),
                                            (e.isPtr = e.isPtr32),
                                            (e.cstrlen = function (t) {
                                                if (!t || !e.isPtr(t)) return null;
                                                const s = i().HEAP8U;
                                                let n = t;
                                                for (; 0 !== s[n]; ++n);
                                                return n - t;
                                            });
                                        const a = "undefined" == typeof SharedArrayBuffer ? function () {} : SharedArrayBuffer;
                                        (e.cstrToJs = function (t) {
                                            const s = e.cstrlen(t);
                                            return s ? ((n = i().HEAP8U), (o = t), (l = t + s), r.utf8Decoder.decode(n.buffer instanceof a ? n.slice(o, l) : n.subarray(o, l))) : null === s ? s : "";
                                            var n, o, l;
                                        }),
                                            (e.jstrlen = function (e) {
                                                if ("string" != typeof e) return null;
                                                const t = e.length;
                                                let s = 0;
                                                for (let n = 0; n < t; ++n) {
                                                    let t = e.charCodeAt(n);
                                                    t >= 55296 && t <= 57343 && (t = (65536 + ((1023 & t) << 10)) | (1023 & e.charCodeAt(++n))), t <= 127 ? ++s : (s += t <= 2047 ? 2 : t <= 65535 ? 3 : 4);
                                                }
                                                return s;
                                            }),
                                            (e.jstrcpy = function (e, s, n = 0, r = -1, i = !0) {
                                                if (((s && (s instanceof Int8Array || s instanceof Uint8Array)) || t("jstrcpy() target must be an Int8Array or Uint8Array."), r < 0 && (r = s.length - n), !(r > 0 && n >= 0))) return 0;
                                                let o = 0,
                                                    a = e.length;
                                                const l = n,
                                                    c = n + r - (i ? 1 : 0);
                                                for (; o < a && n < c; ++o) {
                                                    let t = e.charCodeAt(o);
                                                    if ((t >= 55296 && t <= 57343 && (t = (65536 + ((1023 & t) << 10)) | (1023 & e.charCodeAt(++o))), t <= 127)) {
                                                        if (n >= c) break;
                                                        s[n++] = t;
                                                    } else if (t <= 2047) {
                                                        if (n + 1 >= c) break;
                                                        (s[n++] = 192 | (t >> 6)), (s[n++] = 128 | (63 & t));
                                                    } else if (t <= 65535) {
                                                        if (n + 2 >= c) break;
                                                        (s[n++] = 224 | (t >> 12)), (s[n++] = 128 | ((t >> 6) & 63)), (s[n++] = 128 | (63 & t));
                                                    } else {
                                                        if (n + 3 >= c) break;
                                                        (s[n++] = 240 | (t >> 18)), (s[n++] = 128 | ((t >> 12) & 63)), (s[n++] = 128 | ((t >> 6) & 63)), (s[n++] = 128 | (63 & t));
                                                    }
                                                }
                                                return i && (s[n++] = 0), n - l;
                                            }),
                                            (e.cstrncpy = function (s, n, r) {
                                                if (((s && n) || t("cstrncpy() does not accept NULL strings."), r < 0)) r = e.cstrlen(strPtr) + 1;
                                                else if (!(r > 0)) return 0;
                                                const i = e.heap8u();
                                                let o,
                                                    a = 0;
                                                for (; a < r && (o = i[n + a]); ++a) i[s + a] = o;
                                                return a < r && (i[s + a++] = 0), a;
                                            }),
                                            (e.jstrToUintArray = (e, t = !1) => r.utf8Encoder.encode(t ? e + "\0" : e));
                                        const l = (e, s) => {
                                                (e.alloc instanceof Function && e.dealloc instanceof Function) || t("Object is missing alloc() and/or dealloc() function(s)", "required by", s + "().");
                                            },
                                            c = function (t, s, n, o) {
                                                if ((l(e, o), "string" != typeof t)) return null;
                                                {
                                                    const e = r.utf8Encoder.encode(t),
                                                        o = n(e.length + 1),
                                                        a = i().HEAP8U;
                                                    return a.set(e, o), (a[o + e.length] = 0), s ? [o, e.length] : o;
                                                }
                                            };
                                        (e.allocCString = (t, s = !1) => c(t, s, e.alloc, "allocCString()")),
                                            (e.scopedAllocPush = function () {
                                                l(e, "scopedAllocPush");
                                                const t = [];
                                                return r.scopedAlloc.push(t), t;
                                            }),
                                            (e.scopedAllocPop = function (s) {
                                                l(e, "scopedAllocPop");
                                                const n = arguments.length ? r.scopedAlloc.indexOf(s) : r.scopedAlloc.length - 1;
                                                n < 0 && t("Invalid state object for scopedAllocPop()."), 0 === arguments.length && (s = r.scopedAlloc[n]), r.scopedAlloc.splice(n, 1);
                                                for (let t; (t = s.pop()); ) e.functionEntry(t) ? e.uninstallFunction(t) : e.dealloc(t);
                                            }),
                                            (e.scopedAlloc = function (s) {
                                                r.scopedAlloc.length || t("No scopedAllocPush() scope is active.");
                                                const n = e.alloc(s);
                                                return r.scopedAlloc[r.scopedAlloc.length - 1].push(n), n;
                                            }),
                                            Object.defineProperty(e.scopedAlloc, "level", { configurable: !1, enumerable: !1, get: () => r.scopedAlloc.length, set: () => t("The 'active' property is read-only.") }),
                                            (e.scopedAllocCString = (t, s = !1) => c(t, s, e.scopedAlloc, "scopedAllocCString()"));
                                        const _ = function (t, s) {
                                            const n = e[t ? "scopedAlloc" : "alloc"]((s.length + 1) * e.ptrSizeof);
                                            let r = 0;
                                            return (
                                                s.forEach((s) => {
                                                    e.pokePtr(n + e.ptrSizeof * r++, e[t ? "scopedAllocCString" : "allocCString"]("" + s));
                                                }),
                                                e.pokePtr(n + e.ptrSizeof * r, 0),
                                                n
                                            );
                                        };
                                        (e.scopedAllocMainArgv = (e) => _(!0, e)),
                                            (e.allocMainArgv = (e) => _(!1, e)),
                                            (e.cArgvToJs = (t, s) => {
                                                const n = [];
                                                for (let r = 0; r < t; ++r) {
                                                    const t = e.peekPtr(s + e.ptrSizeof * r);
                                                    n.push(t ? e.cstrToJs(t) : null);
                                                }
                                                return n;
                                            }),
                                            (e.scopedAllocCall = function (t) {
                                                e.scopedAllocPush();
                                                try {
                                                    return t();
                                                } finally {
                                                    e.scopedAllocPop();
                                                }
                                            });
                                        const u = function (t, r, i) {
                                            l(e, i);
                                            const o = r ? "i64" : s;
                                            let a = e[i](t * (r ? 8 : n));
                                            if ((e.poke(a, 0, o), 1 === t)) return a;
                                            const c = [a];
                                            for (let s = 1; s < t; ++s) (a += r ? 8 : n), (c[s] = a), e.poke(a, 0, o);
                                            return c;
                                        };
                                        (e.allocPtr = (e = 1, t = !0) => u(e, t, "alloc")),
                                            (e.scopedAllocPtr = (e = 1, t = !0) => u(e, t, "scopedAlloc")),
                                            (e.xGet = function (s) {
                                                return e.exports[s] || t("Cannot find exported symbol:", s);
                                            });
                                        const d = (e, s) => t(e + "() requires", s, "argument(s).");
                                        (e.xCall = function (s, ...n) {
                                            const r = s instanceof Function ? s : e.xGet(s);
                                            return r instanceof Function || t("Exported symbol", s, "is not a function."), r.length !== n.length && d(r === s ? r.name : s, r.length), 2 === arguments.length && Array.isArray(arguments[1]) ? r.apply(null, arguments[1]) : r.apply(null, n);
                                        }),
                                            (r.xWrap = Object.create(null)),
                                            (r.xWrap.convert = Object.create(null)),
                                            (r.xWrap.convert.arg = new Map()),
                                            (r.xWrap.convert.result = new Map());
                                        const f = r.xWrap.convert.arg,
                                            p = r.xWrap.convert.result;
                                        e.bigIntEnabled && f.set("i64", (e) => BigInt(e));
                                        const m = "i32" === s ? (e) => 0 | e : (e) => BigInt(e) | BigInt(0);
                                        f
                                            .set("i32", m)
                                            .set("i16", (e) => 65535 & e)
                                            .set("i8", (e) => 255 & e)
                                            .set("f32", (e) => Number(e).valueOf())
                                            .set("float", f.get("f32"))
                                            .set("f64", f.get("f32"))
                                            .set("double", f.get("f64"))
                                            .set("int", f.get("i32"))
                                            .set("null", (e) => e)
                                            .set(null, f.get("null"))
                                            .set("**", m)
                                            .set("*", m),
                                            p
                                                .set("*", m)
                                                .set("pointer", m)
                                                .set("number", (e) => Number(e))
                                                .set("void", (e) => {})
                                                .set("null", (e) => e)
                                                .set(null, p.get("null"));
                                        {
                                            const n = ["i8", "i16", "i32", "int", "f32", "float", "f64", "double"];
                                            e.bigIntEnabled && n.push("i64");
                                            const r = f.get(s);
                                            for (const e of n) f.set(e + "*", r), p.set(e + "*", r), p.set(e, f.get(e) || t("Missing arg converter:", e));
                                        }
                                        const h = function (t) {
                                            return "string" == typeof t ? e.scopedAllocCString(t) : t ? m(t) : null;
                                        };
                                        f.set("string", h).set("utf8", h).set("pointer", h),
                                            p
                                                .set("string", (t) => e.cstrToJs(t))
                                                .set("utf8", p.get("string"))
                                                .set("string:dealloc", (t) => {
                                                    try {
                                                        return t ? e.cstrToJs(t) : null;
                                                    } finally {
                                                        e.dealloc(t);
                                                    }
                                                })
                                                .set("utf8:dealloc", p.get("string:dealloc"))
                                                .set("json", (t) => JSON.parse(e.cstrToJs(t)))
                                                .set("json:dealloc", (t) => {
                                                    try {
                                                        return t ? JSON.parse(e.cstrToJs(t)) : null;
                                                    } finally {
                                                        e.dealloc(t);
                                                    }
                                                });
                                        const g = class {
                                            constructor(e) {
                                                this.name = e.name || "unnamed adapter";
                                            }
                                            convertArg(e, s, n) {
                                                t("AbstractArgAdapter must be subclassed.");
                                            }
                                        };
                                        (f.FuncPtrAdapter = class s extends g {
                                            constructor(e) {
                                                super(e), f.FuncPtrAdapter.warnOnUse, (this.name = e.name || "unnamed"), (this.signature = e.signature), e.contextKey instanceof Function && ((this.contextKey = e.contextKey), e.bindScope || (e.bindScope = "context")), (this.bindScope = e.bindScope || t("FuncPtrAdapter options requires a bindScope (explicit or implied).")), s.bindScopes.indexOf(e.bindScope) < 0 && t("Invalid options.bindScope (" + e.bindMod + ") for FuncPtrAdapter. Expecting one of: (" + s.bindScopes.join(", ") + ")"), (this.isTransient = "transient" === this.bindScope), (this.isContext = "context" === this.bindScope), (this.isPermanent = "permanent" === this.bindScope), (this.singleton = "singleton" === this.bindScope ? [] : void 0), (this.callProxy = e.callProxy instanceof Function ? e.callProxy : void 0);
                                            }
                                            contextKey(e, t) {
                                                return this;
                                            }
                                            contextMap(e) {
                                                const t = this.__cmap || (this.__cmap = new Map());
                                                let s = t.get(e);
                                                return void 0 === s && t.set(e, (s = [])), s;
                                            }
                                            convertArg(t, n, i) {
                                                let a = this.singleton;
                                                if ((!a && this.isContext && (a = this.contextMap(this.contextKey(n, i))), a && a[0] === t)) return a[1];
                                                if (t instanceof Function) {
                                                    this.callProxy && (t = this.callProxy(t));
                                                    const e = o(t, this.signature, this.isTransient);
                                                    if ((s.debugFuncInstall && s.debugOut("FuncPtrAdapter installed", this, this.contextKey(n, i), "@" + e, t), a)) {
                                                        if (a[1]) {
                                                            s.debugFuncInstall && s.debugOut("FuncPtrAdapter uninstalling", this, this.contextKey(n, i), "@" + a[1], t);
                                                            try {
                                                                r.scopedAlloc[r.scopedAlloc.length - 1].push(a[1]);
                                                            } catch (e) {}
                                                        }
                                                        (a[0] = t), (a[1] = e);
                                                    }
                                                    return e;
                                                }
                                                if (e.isPtr(t) || null == t) {
                                                    if (a && a[1] && a[1] !== t) {
                                                        s.debugFuncInstall && s.debugOut("FuncPtrAdapter uninstalling", this, this.contextKey(n, i), "@" + a[1], t);
                                                        try {
                                                            r.scopedAlloc[r.scopedAlloc.length - 1].push(a[1]);
                                                        } catch (e) {}
                                                        a[0] = a[1] = 0 | t;
                                                    }
                                                    return t || 0;
                                                }
                                                throw new TypeError("Invalid FuncPtrAdapter argument type. Expecting a function pointer or a " + (this.name ? this.name + " " : "") + "function matching signature " + this.signature + ".");
                                            }
                                        }),
                                            (f.FuncPtrAdapter.warnOnUse = !1),
                                            (f.FuncPtrAdapter.debugFuncInstall = !1),
                                            (f.FuncPtrAdapter.debugOut = function () {}.bind()),
                                            (f.FuncPtrAdapter.bindScopes = ["transient", "context", "singleton", "permanent"]);
                                        const q = (e) => f.get(e) || t("Argument adapter not found:", e),
                                            b = (e) => p.get(e) || t("Result adapter not found:", e);
                                        (r.xWrap.convertArg = (e, ...t) => q(e)(...t)),
                                            (r.xWrap.convertArgNoCheck = (e, ...t) => f.get(e)(...t)),
                                            (r.xWrap.convertResult = (e, t) => (null === e ? t : e ? b(e)(t) : void 0)),
                                            (r.xWrap.convertResultNoCheck = (e, t) => (null === e ? t : e ? p.get(e)(t) : void 0)),
                                            (e.xWrap = function (s, n, ...i) {
                                                3 === arguments.length && Array.isArray(arguments[2]) && (i = arguments[2]), e.isPtr(s) && (s = e.functionEntry(s) || t("Function pointer not found in WASM function table."));
                                                const o = s instanceof Function,
                                                    a = o ? s : e.xGet(s);
                                                if ((o && (s = a.name || "unnamed function"), i.length !== a.length && d(s, a.length), null === n && 0 === a.length)) return a;
                                                null != n && b(n);
                                                for (const e of i) e instanceof g ? f.set(e, (...t) => e.convertArg(...t)) : q(e);
                                                const l = r.xWrap;
                                                return 0 === a.length
                                                    ? (...e) => (e.length ? d(s, a.length) : l.convertResult(n, a.call(null)))
                                                    : function (...t) {
                                                          t.length !== a.length && d(s, a.length);
                                                          const r = e.scopedAllocPush();
                                                          try {
                                                              let e = 0;
                                                              for (; e < t.length; ++e) t[e] = l.convertArgNoCheck(i[e], t[e], t, e);
                                                              return l.convertResultNoCheck(n, a.apply(null, t));
                                                          } finally {
                                                              e.scopedAllocPop(r);
                                                          }
                                                      };
                                            });
                                        const y = function (e, s, n, r, i, o) {
                                            if ("string" == typeof n) {
                                                if (1 === s) return o.get(n);
                                                if (2 === s) return r ? (r instanceof Function || t(i, "requires a function argument."), o.set(n, r), e) : (o.delete(n), e);
                                            }
                                            t("Invalid arguments to", i);
                                        };
                                        return (
                                            (e.xWrap.resultAdapter = function e(t, s) {
                                                return y(e, arguments.length, t, s, "resultAdapter()", p);
                                            }),
                                            (e.xWrap.argAdapter = function e(t, s) {
                                                return y(e, arguments.length, t, s, "argAdapter()", f);
                                            }),
                                            (e.xWrap.FuncPtrAdapter = f.FuncPtrAdapter),
                                            (e.xCallWrapped = function (t, s, n, ...r) {
                                                return Array.isArray(arguments[3]) && (r = arguments[3]), e.xWrap(t, s, n || []).apply(null, r || []);
                                            }),
                                            (e.xWrap.testConvertArg = r.xWrap.convertArg),
                                            (e.xWrap.testConvertResult = r.xWrap.convertResult),
                                            e
                                        );
                                    }),
                                    (globalThis.WhWasmUtilInstaller.yawl = function (e) {
                                        const t = () => fetch(e.uri, { credentials: "same-origin" }),
                                            s = this,
                                            n = function (t) {
                                                if (e.wasmUtilTarget) {
                                                    const n = (...e) => {
                                                            throw new Error(e.join(" "));
                                                        },
                                                        r = e.wasmUtilTarget;
                                                    if (((r.module = t.module), (r.instance = t.instance), r.instance.exports.memory || (r.memory = (e.imports && e.imports.env && e.imports.env.memory) || n("Missing 'memory' object!")), !r.alloc && t.instance.exports.malloc)) {
                                                        const e = t.instance.exports;
                                                        (r.alloc = function (t) {
                                                            return e.malloc(t) || n("Allocation of", t, "bytes failed.");
                                                        }),
                                                            (r.dealloc = function (t) {
                                                                e.free(t);
                                                            });
                                                    }
                                                    s(r);
                                                }
                                                return e.onload && e.onload(t, e), t;
                                            };
                                        return WebAssembly.instantiateStreaming
                                            ? function () {
                                                  return WebAssembly.instantiateStreaming(t(), e.imports || {}).then(n);
                                              }
                                            : function () {
                                                  return t()
                                                      .then((e) => e.arrayBuffer())
                                                      .then((t) => WebAssembly.instantiate(t, e.imports || {}))
                                                      .then(n);
                                              };
                                    }.bind(globalThis.WhWasmUtilInstaller)),
                                    (globalThis.Jaccwabyt = function e(t) {
                                        const s = (...e) => {
                                            throw new Error(e.join(" "));
                                        };
                                        t.heap instanceof WebAssembly.Memory || t.heap instanceof Function || s("config.heap must be WebAssembly.Memory instance or a function."),
                                            ["alloc", "dealloc"].forEach(function (e) {
                                                t[e] instanceof Function || s("Config option '" + e + "' must be a function.");
                                            });
                                        const n = e,
                                            r = t.heap instanceof Function ? t.heap : () => new Uint8Array(t.heap.buffer),
                                            i = t.alloc,
                                            o = t.dealloc,
                                            a = t.log || function () {}.bind(),
                                            l = t.memberPrefix || "",
                                            c = t.memberSuffix || "",
                                            _ = void 0 === t.bigIntEnabled ? !!globalThis.BigInt64Array : !!t.bigIntEnabled,
                                            u = globalThis.BigInt,
                                            d = globalThis.BigInt64Array,
                                            f = t.ptrSizeof || 4,
                                            p = t.ptrIR || "i32";
                                        n.debugFlags ||
                                            ((n.__makeDebugFlags = function (e = null) {
                                                e && e.__flags && (e = e.__flags);
                                                const t = function e(t) {
                                                    return 0 === arguments.length ? e.__flags : (t < 0 ? (delete e.__flags.getter, delete e.__flags.setter, delete e.__flags.alloc, delete e.__flags.dealloc) : ((e.__flags.getter = !!(1 & t)), (e.__flags.setter = !!(2 & t)), (e.__flags.alloc = !!(4 & t)), (e.__flags.dealloc = !!(8 & t))), e._flags);
                                                };
                                                return Object.defineProperty(t, "__flags", { iterable: !1, writable: !1, value: Object.create(e) }), e || t(0), t;
                                            }),
                                            (n.debugFlags = n.__makeDebugFlags()));
                                        const m = (function () {
                                                const e = new ArrayBuffer(2);
                                                return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
                                            })(),
                                            h = (e) => (((e) => "(" === e[1])(e) ? "p" : e[0]),
                                            g = function (e) {
                                                switch (h(e)) {
                                                    case "c":
                                                    case "C":
                                                        return "i8";
                                                    case "i":
                                                        return "i32";
                                                    case "p":
                                                    case "P":
                                                    case "s":
                                                        return p;
                                                    case "j":
                                                        return "i64";
                                                    case "f":
                                                        return "float";
                                                    case "d":
                                                        return "double";
                                                }
                                                s("Unhandled signature IR:", e);
                                            },
                                            q = d ? () => !0 : () => s("BigInt64Array is not available."),
                                            b = (e, t) => e + "::" + t,
                                            y = new WeakMap(),
                                            w = "(pointer-is-external)",
                                            v = function (e, t, s) {
                                                if ((s || (s = y.get(t)), s)) {
                                                    if ((y.delete(t), Array.isArray(t.ondispose))) {
                                                        let e;
                                                        for (; (e = t.ondispose.shift()); )
                                                            try {
                                                                e instanceof Function ? e.call(t) : e instanceof j ? e.dispose() : "number" == typeof e && o(e);
                                                            } catch (e) {}
                                                    } else if (t.ondispose instanceof Function)
                                                        try {
                                                            t.ondispose();
                                                        } catch (e) {}
                                                    delete t.ondispose, e.debugFlags.__flags.dealloc && a("debug.dealloc:", t[w] ? "EXTERNAL" : "", e.structName, "instance:", e.structInfo.sizeof, "bytes @" + s), t[w] || o(s);
                                                }
                                            },
                                            E = (e) => ({ configurable: !1, writable: !1, iterable: !1, value: e }),
                                            S = function (e, t, n) {
                                                let o = !n;
                                                n ? Object.defineProperty(t, w, E(n)) : (n = i(e.structInfo.sizeof)) || s("Allocation of", e.structName, "structure failed.");
                                                try {
                                                    e.debugFlags.__flags.alloc && a("debug.alloc:", o ? "" : "EXTERNAL", e.structName, "instance:", e.structInfo.sizeof, "bytes @" + n), o && r().fill(0, n, n + e.structInfo.sizeof), y.set(t, n);
                                                } catch (s) {
                                                    throw (v(e, t, n), s);
                                                }
                                            },
                                            x = E((e) => l + e + c),
                                            A = function (e, t, n = !0) {
                                                let r = e.members[t];
                                                if (!r && (l || c)) {
                                                    for (const s of Object.values(e.members))
                                                        if (s.key === t) {
                                                            r = s;
                                                            break;
                                                        }
                                                    !r && n && s(b(e.name, t), "is not a mapped struct member.");
                                                }
                                                return r;
                                            },
                                            I = function e(t, s, n = !1) {
                                                e._ || (e._ = (e) => e.replace(/[^vipPsjrdcC]/g, "").replace(/[pPscC]/g, "i"));
                                                const r = A(t.structInfo, s, !0);
                                                return n ? e._(r.signature) : r.signature;
                                            },
                                            k = {
                                                configurable: !1,
                                                enumerable: !1,
                                                get: function () {
                                                    return y.get(this);
                                                },
                                                set: () => s("Cannot assign the 'pointer' property of a struct."),
                                            },
                                            T = E(function () {
                                                const e = [];
                                                for (const t of Object.keys(this.structInfo.members)) e.push(this.memberKey(t));
                                                return e;
                                            }),
                                            F = new TextDecoder("utf-8"),
                                            O = new TextEncoder(),
                                            P = "undefined" == typeof SharedArrayBuffer ? function () {} : SharedArrayBuffer,
                                            L = function (e) {
                                                "s" !== e.signature && s("Invalid member type signature for C-string value:", JSON.stringify(e));
                                            },
                                            C = function (e, t) {
                                                const s = A(e.structInfo, t, !0);
                                                L(s);
                                                const n = e[s.key];
                                                if (!n) return null;
                                                let i = n;
                                                const o = r();
                                                for (; 0 !== o[i]; ++i);
                                                return n === i ? "" : ((a = o), (l = n), (c = i), F.decode(a.buffer instanceof P ? a.slice(l, c) : a.subarray(l, c)));
                                                var a, l, c;
                                            },
                                            N = function (e, ...t) {
                                                e.ondispose ? Array.isArray(e.ondispose) || (e.ondispose = [e.ondispose]) : (e.ondispose = []), e.ondispose.push(...t);
                                            },
                                            D = function (e) {
                                                const t = O.encode(e),
                                                    n = i(t.length + 1);
                                                n || s("Allocation error while duplicating string:", e);
                                                const o = r();
                                                return o.set(t, n), (o[n + t.length] = 0), n;
                                            },
                                            j = function (e, t) {
                                                arguments[2] !== E && s("Do not call the StructType constructor", "from client-level code."), Object.defineProperties(this, { structName: E(e), structInfo: E(t) });
                                            };
                                        (j.prototype = Object.create(null, {
                                            dispose: E(function () {
                                                v(this.constructor, this);
                                            }),
                                            lookupMember: E(function (e, t = !0) {
                                                return A(this.structInfo, e, t);
                                            }),
                                            memberToJsString: E(function (e) {
                                                return C(this, e);
                                            }),
                                            memberIsString: E(function (e, t = !0) {
                                                return (function (e, t, s = !1) {
                                                    const n = A(e.structInfo, t, s);
                                                    return !(!n || 1 !== n.signature.length || "s" !== n.signature[0]) && n;
                                                })(this, e, t);
                                            }),
                                            memberKey: x,
                                            memberKeys: T,
                                            memberSignature: E(function (e, t = !1) {
                                                return I(this, e, t);
                                            }),
                                            memoryDump: E(function () {
                                                const e = this.pointer;
                                                return e ? new Uint8Array(r().slice(e, e + this.structInfo.sizeof)) : null;
                                            }),
                                            pointer: k,
                                            setMemberCString: E(function (e, t) {
                                                return (function (e, t, s) {
                                                    const n = A(e.structInfo, t, !0);
                                                    L(n);
                                                    const r = D(s);
                                                    return (e[n.key] = r), N(e, r), e;
                                                })(this, e, t);
                                            }),
                                        })),
                                            Object.assign(j.prototype, {
                                                addOnDispose: function (...e) {
                                                    return N(this, ...e), this;
                                                },
                                            }),
                                            Object.defineProperties(j, { allocCString: E(D), isA: E((e) => e instanceof j), hasExternalPointer: E((e) => e instanceof j && !!e[w]), memberKey: x });
                                        const R = (e) => Number.isFinite(e) || e instanceof (u || Number),
                                            M = function e(t, n, i) {
                                                if (!e._) {
                                                    e._ = { getters: {}, setters: {}, sw: {} };
                                                    const t = ["i", "c", "C", "p", "P", "s", "f", "d", "v()"];
                                                    _ && t.push("j"),
                                                        t.forEach(function (t) {
                                                            (e._.getters[t] = (function (e) {
                                                                switch (h(e)) {
                                                                    case "p":
                                                                    case "P":
                                                                    case "s":
                                                                        switch (f) {
                                                                            case 4:
                                                                                return "getInt32";
                                                                            case 8:
                                                                                return q() && "getBigInt64";
                                                                        }
                                                                        break;
                                                                    case "i":
                                                                        return "getInt32";
                                                                    case "c":
                                                                        return "getInt8";
                                                                    case "C":
                                                                        return "getUint8";
                                                                    case "j":
                                                                        return q() && "getBigInt64";
                                                                    case "f":
                                                                        return "getFloat32";
                                                                    case "d":
                                                                        return "getFloat64";
                                                                }
                                                                s("Unhandled DataView getter for signature:", e);
                                                            })(t)),
                                                                (e._.setters[t] = (function (e) {
                                                                    switch (h(e)) {
                                                                        case "p":
                                                                        case "P":
                                                                        case "s":
                                                                            switch (f) {
                                                                                case 4:
                                                                                    return "setInt32";
                                                                                case 8:
                                                                                    return q() && "setBigInt64";
                                                                            }
                                                                            break;
                                                                        case "i":
                                                                            return "setInt32";
                                                                        case "c":
                                                                            return "setInt8";
                                                                        case "C":
                                                                            return "setUint8";
                                                                        case "j":
                                                                            return q() && "setBigInt64";
                                                                        case "f":
                                                                            return "setFloat32";
                                                                        case "d":
                                                                            return "setFloat64";
                                                                    }
                                                                    s("Unhandled DataView setter for signature:", e);
                                                                })(t)),
                                                                (e._.sw[t] = (function (e) {
                                                                    switch (h(e)) {
                                                                        case "i":
                                                                        case "f":
                                                                        case "c":
                                                                        case "C":
                                                                        case "d":
                                                                            return Number;
                                                                        case "j":
                                                                            return q() && u;
                                                                        case "p":
                                                                        case "P":
                                                                        case "s":
                                                                            switch (f) {
                                                                                case 4:
                                                                                    return Number;
                                                                                case 8:
                                                                                    return q() && u;
                                                                            }
                                                                    }
                                                                    s("Unhandled DataView set wrapper for signature:", e);
                                                                })(t));
                                                        });
                                                    const n = /^[ipPsjfdcC]$/,
                                                        r = /^[vipPsjfdcC]\([ipPsjfdcC]*\)$/;
                                                    e.sigCheck = function (e, t, i, o) {
                                                        Object.prototype.hasOwnProperty.call(e, i) && s(e.structName, "already has a property named", i + "."), n.test(o) || r.test(o) || s("Malformed signature for", b(e.structName, t) + ":", o);
                                                    };
                                                }
                                                const o = t.memberKey(n);
                                                e.sigCheck(t.prototype, n, o, i.signature), (i.key = o), (i.name = n);
                                                const l = h(i.signature),
                                                    c = b(t.prototype.structName, o),
                                                    d = t.prototype.debugFlags.__flags,
                                                    p = Object.create(null);
                                                var y, w;
                                                (p.configurable = !1),
                                                    (p.enumerable = !1),
                                                    (p.get = function () {
                                                        d.getter && a("debug.getter:", e._.getters[l], "for", g(l), c, "@", this.pointer, "+", i.offset, "sz", i.sizeof);
                                                        let t = new DataView(r().buffer, this.pointer + i.offset, i.sizeof)[e._.getters[l]](0, m);
                                                        return d.getter && a("debug.getter:", c, "result =", t), t;
                                                    }),
                                                    i.readOnly
                                                        ? (p.set = ((y = t.prototype.structName), (w = o), () => s(b(y, w), "is read-only.")))
                                                        : (p.set = function (t) {
                                                              if ((d.setter && a("debug.setter:", e._.setters[l], "for", g(l), c, "@", this.pointer, "+", i.offset, "sz", i.sizeof, t), this.pointer || s("Cannot set struct property on disposed instance."), null === t)) t = 0;
                                                              else
                                                                  for (; !R(t); ) {
                                                                      if ("P" === i.signature && t instanceof j) {
                                                                          (t = t.pointer || 0), d.setter && a("debug.setter:", c, "resolved to", t);
                                                                          break;
                                                                      }
                                                                      s("Invalid value for pointer-type", c + ".");
                                                                  }
                                                              new DataView(r().buffer, this.pointer + i.offset, i.sizeof)[e._.setters[l]](0, e._.sw[l](t), m);
                                                          }),
                                                    Object.defineProperty(t.prototype, o, p);
                                            },
                                            z = function e(t, r) {
                                                1 === arguments.length ? (t = (r = t).name) : r.name || (r.name = t), t || s("Struct name is required.");
                                                let i = !1;
                                                Object.keys(r.members).forEach((e) => {
                                                    const n = r.members[e];
                                                    n.sizeof ? (1 === n.sizeof ? "c" === n.signature || "C" === n.signature || s("Unexpected sizeof==1 member", b(r.name, e), "with signature", n.signature) : (0 != n.sizeof % 4 && s(t, "member", e, "sizeof is not aligned. sizeof=" + n.sizeof), 0 != n.offset % 4 && s(t, "member", e, "offset is not aligned. offset=" + n.offset))) : s(t, "member", e, "is missing sizeof."), (!i || i.offset < n.offset) && (i = n);
                                                }),
                                                    i ? r.sizeof < i.offset + i.sizeof && s("Invalid struct config:", t, "max member offset (" + i.offset + ") ", "extends past end of struct (sizeof=" + r.sizeof + ").") : s("No member property descriptions found.");
                                                const o = E(n.__makeDebugFlags(e.debugFlags)),
                                                    a = function e(n) {
                                                        this instanceof e ? (arguments.length ? ((n !== (0 | n) || n <= 0) && s("Invalid pointer value for", t, "constructor."), S(e, this, n)) : S(e, this)) : s("The", t, "constructor may only be called via 'new'.");
                                                    };
                                                return Object.defineProperties(a, { debugFlags: o, isA: E((e) => e instanceof a), memberKey: x, memberKeys: T, methodInfoForKey: E(function (e) {}), structInfo: E(r), structName: E(t) }), (a.prototype = new j(t, r, E)), Object.defineProperties(a.prototype, { debugFlags: o, constructor: E(a) }), Object.keys(r.members).forEach((e) => M(a, e, r.members[e])), a;
                                            };
                                        return (z.StructType = j), (z.config = t), (z.allocCString = D), z.debugFlags || (z.debugFlags = n.__makeDebugFlags(n.debugFlags)), z;
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = (...e) => {
                                                throw new Error(e.join(" "));
                                            },
                                            s = (e.SQLite3Error.toss, e.capi),
                                            n = e.wasm,
                                            r = e.util;
                                        if (
                                            (globalThis.WhWasmUtilInstaller(n),
                                            delete globalThis.WhWasmUtilInstaller,
                                            (n.bindingSignatures = [
                                                ["sqlite3_aggregate_context", "void*", "sqlite3_context*", "int"],
                                                ["sqlite3_bind_double", "int", "sqlite3_stmt*", "int", "f64"],
                                                ["sqlite3_bind_int", "int", "sqlite3_stmt*", "int", "int"],
                                                ["sqlite3_bind_null", void 0, "sqlite3_stmt*", "int"],
                                                ["sqlite3_bind_parameter_count", "int", "sqlite3_stmt*"],
                                                ["sqlite3_bind_parameter_index", "int", "sqlite3_stmt*", "string"],
                                                ["sqlite3_bind_parameter_name", "string", "sqlite3_stmt*", "int"],
                                                ["sqlite3_bind_pointer", "int", "sqlite3_stmt*", "int", "*", "string:static", "*"],
                                                ["sqlite3_busy_handler", "int", ["sqlite3*", new n.xWrap.FuncPtrAdapter({ signature: "i(pi)", contextKey: (e, t) => e[0] }), "*"]],
                                                ["sqlite3_busy_timeout", "int", "sqlite3*", "int"],
                                                ["sqlite3_changes", "int", "sqlite3*"],
                                                ["sqlite3_clear_bindings", "int", "sqlite3_stmt*"],
                                                ["sqlite3_collation_needed", "int", "sqlite3*", "*", "*"],
                                                ["sqlite3_column_blob", "*", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_bytes", "int", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_count", "int", "sqlite3_stmt*"],
                                                ["sqlite3_column_decltype", "string", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_double", "f64", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_int", "int", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_name", "string", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_text", "string", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_type", "int", "sqlite3_stmt*", "int"],
                                                ["sqlite3_column_value", "sqlite3_value*", "sqlite3_stmt*", "int"],
                                                ["sqlite3_commit_hook", "void*", ["sqlite3*", new n.xWrap.FuncPtrAdapter({ name: "sqlite3_commit_hook", signature: "i(p)", contextKey: (e) => e[0] }), "*"]],
                                                ["sqlite3_compileoption_get", "string", "int"],
                                                ["sqlite3_compileoption_used", "int", "string"],
                                                ["sqlite3_complete", "int", "string:flexible"],
                                                ["sqlite3_context_db_handle", "sqlite3*", "sqlite3_context*"],
                                                ["sqlite3_data_count", "int", "sqlite3_stmt*"],
                                                ["sqlite3_db_filename", "string", "sqlite3*", "string"],
                                                ["sqlite3_db_handle", "sqlite3*", "sqlite3_stmt*"],
                                                ["sqlite3_db_name", "string", "sqlite3*", "int"],
                                                ["sqlite3_db_readonly", "int", "sqlite3*", "string"],
                                                ["sqlite3_db_status", "int", "sqlite3*", "int", "*", "*", "int"],
                                                ["sqlite3_errcode", "int", "sqlite3*"],
                                                ["sqlite3_errmsg", "string", "sqlite3*"],
                                                ["sqlite3_error_offset", "int", "sqlite3*"],
                                                ["sqlite3_errstr", "string", "int"],
                                                [
                                                    "sqlite3_exec",
                                                    "int",
                                                    [
                                                        "sqlite3*",
                                                        "string:flexible",
                                                        new n.xWrap.FuncPtrAdapter({
                                                            signature: "i(pipp)",
                                                            bindScope: "transient",
                                                            callProxy: (e) => {
                                                                let t;
                                                                return (r, i, o, a) => {
                                                                    try {
                                                                        const s = n.cArgvToJs(i, o);
                                                                        return t || (t = n.cArgvToJs(i, a)), 0 | e(s, t);
                                                                    } catch (e) {
                                                                        return e.resultCode || s.SQLITE_ERROR;
                                                                    }
                                                                };
                                                            },
                                                        }),
                                                        "*",
                                                        "**",
                                                    ],
                                                ],
                                                ["sqlite3_expanded_sql", "string", "sqlite3_stmt*"],
                                                ["sqlite3_extended_errcode", "int", "sqlite3*"],
                                                ["sqlite3_extended_result_codes", "int", "sqlite3*", "int"],
                                                ["sqlite3_file_control", "int", "sqlite3*", "string", "int", "*"],
                                                ["sqlite3_finalize", "int", "sqlite3_stmt*"],
                                                ["sqlite3_free", void 0, "*"],
                                                ["sqlite3_get_autocommit", "int", "sqlite3*"],
                                                ["sqlite3_get_auxdata", "*", "sqlite3_context*", "int"],
                                                ["sqlite3_initialize", void 0],
                                                ["sqlite3_interrupt", void 0, "sqlite3*"],
                                                ["sqlite3_is_interrupted", "int", "sqlite3*"],
                                                ["sqlite3_keyword_count", "int"],
                                                ["sqlite3_keyword_name", "int", ["int", "**", "*"]],
                                                ["sqlite3_keyword_check", "int", ["string", "int"]],
                                                ["sqlite3_libversion", "string"],
                                                ["sqlite3_libversion_number", "int"],
                                                ["sqlite3_limit", "int", ["sqlite3*", "int", "int"]],
                                                ["sqlite3_malloc", "*", "int"],
                                                ["sqlite3_open", "int", "string", "*"],
                                                ["sqlite3_open_v2", "int", "string", "*", "int", "string"],
                                                ["sqlite3_realloc", "*", "*", "int"],
                                                ["sqlite3_reset", "int", "sqlite3_stmt*"],
                                                ["sqlite3_result_blob", void 0, "sqlite3_context*", "*", "int", "*"],
                                                ["sqlite3_result_double", void 0, "sqlite3_context*", "f64"],
                                                ["sqlite3_result_error", void 0, "sqlite3_context*", "string", "int"],
                                                ["sqlite3_result_error_code", void 0, "sqlite3_context*", "int"],
                                                ["sqlite3_result_error_nomem", void 0, "sqlite3_context*"],
                                                ["sqlite3_result_error_toobig", void 0, "sqlite3_context*"],
                                                ["sqlite3_result_int", void 0, "sqlite3_context*", "int"],
                                                ["sqlite3_result_null", void 0, "sqlite3_context*"],
                                                ["sqlite3_result_pointer", void 0, "sqlite3_context*", "*", "string:static", "*"],
                                                ["sqlite3_result_subtype", void 0, "sqlite3_value*", "int"],
                                                ["sqlite3_result_text", void 0, "sqlite3_context*", "string", "int", "*"],
                                                ["sqlite3_result_zeroblob", void 0, "sqlite3_context*", "int"],
                                                ["sqlite3_rollback_hook", "void*", ["sqlite3*", new n.xWrap.FuncPtrAdapter({ name: "sqlite3_rollback_hook", signature: "v(p)", contextKey: (e) => e[0] }), "*"]],
                                                ["sqlite3_set_auxdata", void 0, ["sqlite3_context*", "int", "*", new n.xWrap.FuncPtrAdapter({ name: "xDestroyAuxData", signature: "v(*)", contextKey: (e, t) => e[0] })]],
                                                ["sqlite3_shutdown", void 0],
                                                ["sqlite3_sourceid", "string"],
                                                ["sqlite3_sql", "string", "sqlite3_stmt*"],
                                                ["sqlite3_status", "int", "int", "*", "*", "int"],
                                                ["sqlite3_step", "int", "sqlite3_stmt*"],
                                                ["sqlite3_stmt_busy", "int", "sqlite3_stmt*"],
                                                ["sqlite3_stmt_readonly", "int", "sqlite3_stmt*"],
                                                ["sqlite3_stmt_status", "int", "sqlite3_stmt*", "int", "int"],
                                                ["sqlite3_strglob", "int", "string", "string"],
                                                ["sqlite3_stricmp", "int", "string", "string"],
                                                ["sqlite3_strlike", "int", "string", "string", "int"],
                                                ["sqlite3_strnicmp", "int", "string", "string", "int"],
                                                ["sqlite3_table_column_metadata", "int", "sqlite3*", "string", "string", "string", "**", "**", "*", "*", "*"],
                                                ["sqlite3_total_changes", "int", "sqlite3*"],
                                                ["sqlite3_trace_v2", "int", ["sqlite3*", "int", new n.xWrap.FuncPtrAdapter({ name: "sqlite3_trace_v2::callback", signature: "i(ippp)", contextKey: (e, t) => e[0] }), "*"]],
                                                ["sqlite3_txn_state", "int", ["sqlite3*", "string"]],
                                                ["sqlite3_uri_boolean", "int", "sqlite3_filename", "string", "int"],
                                                ["sqlite3_uri_key", "string", "sqlite3_filename", "int"],
                                                ["sqlite3_uri_parameter", "string", "sqlite3_filename", "string"],
                                                ["sqlite3_user_data", "void*", "sqlite3_context*"],
                                                ["sqlite3_value_blob", "*", "sqlite3_value*"],
                                                ["sqlite3_value_bytes", "int", "sqlite3_value*"],
                                                ["sqlite3_value_double", "f64", "sqlite3_value*"],
                                                ["sqlite3_value_dup", "sqlite3_value*", "sqlite3_value*"],
                                                ["sqlite3_value_free", void 0, "sqlite3_value*"],
                                                ["sqlite3_value_frombind", "int", "sqlite3_value*"],
                                                ["sqlite3_value_int", "int", "sqlite3_value*"],
                                                ["sqlite3_value_nochange", "int", "sqlite3_value*"],
                                                ["sqlite3_value_numeric_type", "int", "sqlite3_value*"],
                                                ["sqlite3_value_pointer", "*", "sqlite3_value*", "string:static"],
                                                ["sqlite3_value_subtype", "int", "sqlite3_value*"],
                                                ["sqlite3_value_text", "string", "sqlite3_value*"],
                                                ["sqlite3_value_type", "int", "sqlite3_value*"],
                                                ["sqlite3_vfs_find", "*", "string"],
                                                ["sqlite3_vfs_register", "int", "sqlite3_vfs*", "int"],
                                                ["sqlite3_vfs_unregister", "int", "sqlite3_vfs*"],
                                            ]),
                                            n.exports.sqlite3_progress_handler && n.bindingSignatures.push(["sqlite3_progress_handler", void 0, ["sqlite3*", "int", new n.xWrap.FuncPtrAdapter({ name: "xProgressHandler", signature: "i(p)", bindScope: "context", contextKey: (e, t) => e[0] }), "*"]]),
                                            n.exports.sqlite3_stmt_explain && n.bindingSignatures.push(["sqlite3_stmt_explain", "int", "sqlite3_stmt*", "int"], ["sqlite3_stmt_isexplain", "int", "sqlite3_stmt*"]),
                                            n.exports.sqlite3_set_authorizer &&
                                                n.bindingSignatures.push([
                                                    "sqlite3_set_authorizer",
                                                    "int",
                                                    [
                                                        "sqlite3*",
                                                        new n.xWrap.FuncPtrAdapter({
                                                            name: "sqlite3_set_authorizer::xAuth",
                                                            signature: "i(pissss)",
                                                            contextKey: (e, t) => e[0],
                                                            callProxy: (e) => (t, r, i, o, a, l) => {
                                                                try {
                                                                    return (i = i && n.cstrToJs(i)), (o = o && n.cstrToJs(o)), (a = a && n.cstrToJs(a)), (l = l && n.cstrToJs(l)), e(t, r, i, o, a, l) || 0;
                                                                } catch (e) {
                                                                    return e.resultCode || s.SQLITE_ERROR;
                                                                }
                                                            },
                                                        }),
                                                        "*",
                                                    ],
                                                ]),
                                            (n.bindingSignatures.int64 = [
                                                ["sqlite3_bind_int64", "int", ["sqlite3_stmt*", "int", "i64"]],
                                                ["sqlite3_changes64", "i64", ["sqlite3*"]],
                                                ["sqlite3_column_int64", "i64", ["sqlite3_stmt*", "int"]],
                                                ["sqlite3_deserialize", "int", "sqlite3*", "string", "*", "i64", "i64", "int"],
                                                ["sqlite3_last_insert_rowid", "i64", ["sqlite3*"]],
                                                ["sqlite3_malloc64", "*", "i64"],
                                                ["sqlite3_msize", "i64", "*"],
                                                ["sqlite3_overload_function", "int", ["sqlite3*", "string", "int"]],
                                                ["sqlite3_realloc64", "*", "*", "i64"],
                                                ["sqlite3_result_int64", void 0, "*", "i64"],
                                                ["sqlite3_result_zeroblob64", "int", "*", "i64"],
                                                ["sqlite3_serialize", "*", "sqlite3*", "string", "*", "int"],
                                                ["sqlite3_set_last_insert_rowid", void 0, ["sqlite3*", "i64"]],
                                                ["sqlite3_status64", "int", "int", "*", "*", "int"],
                                                ["sqlite3_total_changes64", "i64", ["sqlite3*"]],
                                                [
                                                    "sqlite3_update_hook",
                                                    "*",
                                                    [
                                                        "sqlite3*",
                                                        new n.xWrap.FuncPtrAdapter({
                                                            name: "sqlite3_update_hook",
                                                            signature: "v(iippj)",
                                                            contextKey: (e) => e[0],
                                                            callProxy: (e) => (t, s, r, i, o) => {
                                                                e(t, s, n.cstrToJs(r), n.cstrToJs(i), o);
                                                            },
                                                        }),
                                                        "*",
                                                    ],
                                                ],
                                                ["sqlite3_uri_int64", "i64", ["sqlite3_filename", "string", "i64"]],
                                                ["sqlite3_value_int64", "i64", "sqlite3_value*"],
                                            ]),
                                            n.bigIntEnabled && n.exports.sqlite3_declare_vtab && n.bindingSignatures.int64.push(["sqlite3_create_module", "int", ["sqlite3*", "string", "sqlite3_module*", "*"]], ["sqlite3_create_module_v2", "int", ["sqlite3*", "string", "sqlite3_module*", "*", "*"]], ["sqlite3_declare_vtab", "int", ["sqlite3*", "string:flexible"]], ["sqlite3_drop_modules", "int", ["sqlite3*", "**"]], ["sqlite3_vtab_collation", "string", "sqlite3_index_info*", "int"], ["sqlite3_vtab_distinct", "int", "sqlite3_index_info*"], ["sqlite3_vtab_in", "int", "sqlite3_index_info*", "int", "int"], ["sqlite3_vtab_in_first", "int", "sqlite3_value*", "**"], ["sqlite3_vtab_in_next", "int", "sqlite3_value*", "**"], ["sqlite3_vtab_nochange", "int", "sqlite3_context*"], ["sqlite3_vtab_on_conflict", "int", "sqlite3*"], ["sqlite3_vtab_rhs_value", "int", "sqlite3_index_info*", "int", "**"]),
                                            n.bigIntEnabled &&
                                                n.exports.sqlite3_preupdate_hook &&
                                                n.bindingSignatures.int64.push(
                                                    ["sqlite3_preupdate_blobwrite", "int", "sqlite3*"],
                                                    ["sqlite3_preupdate_count", "int", "sqlite3*"],
                                                    ["sqlite3_preupdate_depth", "int", "sqlite3*"],
                                                    [
                                                        "sqlite3_preupdate_hook",
                                                        "*",
                                                        [
                                                            "sqlite3*",
                                                            new n.xWrap.FuncPtrAdapter({
                                                                name: "sqlite3_preupdate_hook",
                                                                signature: "v(ppippjj)",
                                                                contextKey: (e) => e[0],
                                                                callProxy: (e) => (t, s, r, i, o, a, l) => {
                                                                    e(t, s, r, n.cstrToJs(i), n.cstrToJs(o), a, l);
                                                                },
                                                            }),
                                                            "*",
                                                        ],
                                                    ],
                                                    ["sqlite3_preupdate_new", "int", ["sqlite3*", "int", "**"]],
                                                    ["sqlite3_preupdate_old", "int", ["sqlite3*", "int", "**"]],
                                                ),
                                            n.bigIntEnabled && n.exports.sqlite3changegroup_add && n.exports.sqlite3session_create && n.exports.sqlite3_preupdate_hook)
                                        ) {
                                            const e = {
                                                signature: "i(ps)",
                                                callProxy: (e) => (t, r) => {
                                                    try {
                                                        return 0 | e(t, n.cstrToJs(r));
                                                    } catch (e) {
                                                        return e.resultCode || s.SQLITE_ERROR;
                                                    }
                                                },
                                            };
                                            n.bindingSignatures.int64.push(
                                                ["sqlite3changegroup_add", "int", ["sqlite3_changegroup*", "int", "void*"]],
                                                ["sqlite3changegroup_add_strm", "int", ["sqlite3_changegroup*", new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changegroup_delete", void 0, ["sqlite3_changegroup*"]],
                                                ["sqlite3changegroup_new", "int", ["**"]],
                                                ["sqlite3changegroup_output", "int", ["sqlite3_changegroup*", "int*", "**"]],
                                                ["sqlite3changegroup_output_strm", "int", ["sqlite3_changegroup*", new n.xWrap.FuncPtrAdapter({ name: "xOutput", signature: "i(ppi)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_apply", "int", ["sqlite3*", "int", "void*", new n.xWrap.FuncPtrAdapter({ name: "xFilter", bindScope: "transient", ...e }), new n.xWrap.FuncPtrAdapter({ name: "xConflict", signature: "i(pip)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_apply_strm", "int", ["sqlite3*", new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*", new n.xWrap.FuncPtrAdapter({ name: "xFilter", bindScope: "transient", ...e }), new n.xWrap.FuncPtrAdapter({ name: "xConflict", signature: "i(pip)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_apply_v2", "int", ["sqlite3*", "int", "void*", new n.xWrap.FuncPtrAdapter({ name: "xFilter", bindScope: "transient", ...e }), new n.xWrap.FuncPtrAdapter({ name: "xConflict", signature: "i(pip)", bindScope: "transient" }), "void*", "**", "int*", "int"]],
                                                ["sqlite3changeset_apply_v2_strm", "int", ["sqlite3*", new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*", new n.xWrap.FuncPtrAdapter({ name: "xFilter", bindScope: "transient", ...e }), new n.xWrap.FuncPtrAdapter({ name: "xConflict", signature: "i(pip)", bindScope: "transient" }), "void*", "**", "int*", "int"]],
                                                ["sqlite3changeset_concat", "int", ["int", "void*", "int", "void*", "int*", "**"]],
                                                ["sqlite3changeset_concat_strm", "int", [new n.xWrap.FuncPtrAdapter({ name: "xInputA", signature: "i(ppp)", bindScope: "transient" }), "void*", new n.xWrap.FuncPtrAdapter({ name: "xInputB", signature: "i(ppp)", bindScope: "transient" }), "void*", new n.xWrap.FuncPtrAdapter({ name: "xOutput", signature: "i(ppi)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_conflict", "int", ["sqlite3_changeset_iter*", "int", "**"]],
                                                ["sqlite3changeset_finalize", "int", ["sqlite3_changeset_iter*"]],
                                                ["sqlite3changeset_fk_conflicts", "int", ["sqlite3_changeset_iter*", "int*"]],
                                                ["sqlite3changeset_invert", "int", ["int", "void*", "int*", "**"]],
                                                ["sqlite3changeset_invert_strm", "int", [new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*", new n.xWrap.FuncPtrAdapter({ name: "xOutput", signature: "i(ppi)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_new", "int", ["sqlite3_changeset_iter*", "int", "**"]],
                                                ["sqlite3changeset_next", "int", ["sqlite3_changeset_iter*"]],
                                                ["sqlite3changeset_old", "int", ["sqlite3_changeset_iter*", "int", "**"]],
                                                ["sqlite3changeset_op", "int", ["sqlite3_changeset_iter*", "**", "int*", "int*", "int*"]],
                                                ["sqlite3changeset_pk", "int", ["sqlite3_changeset_iter*", "**", "int*"]],
                                                ["sqlite3changeset_start", "int", ["**", "int", "*"]],
                                                ["sqlite3changeset_start_strm", "int", ["**", new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3changeset_start_v2", "int", ["**", "int", "*", "int"]],
                                                ["sqlite3changeset_start_v2_strm", "int", ["**", new n.xWrap.FuncPtrAdapter({ name: "xInput", signature: "i(ppp)", bindScope: "transient" }), "void*", "int"]],
                                                ["sqlite3session_attach", "int", ["sqlite3_session*", "string"]],
                                                ["sqlite3session_changeset", "int", ["sqlite3_session*", "int*", "**"]],
                                                ["sqlite3session_changeset_size", "i64", ["sqlite3_session*"]],
                                                ["sqlite3session_changeset_strm", "int", ["sqlite3_session*", new n.xWrap.FuncPtrAdapter({ name: "xOutput", signature: "i(ppp)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3session_config", "int", ["int", "void*"]],
                                                ["sqlite3session_create", "int", ["sqlite3*", "string", "**"]],
                                                ["sqlite3session_diff", "int", ["sqlite3_session*", "string", "string", "**"]],
                                                ["sqlite3session_enable", "int", ["sqlite3_session*", "int"]],
                                                ["sqlite3session_indirect", "int", ["sqlite3_session*", "int"]],
                                                ["sqlite3session_isempty", "int", ["sqlite3_session*"]],
                                                ["sqlite3session_memory_used", "i64", ["sqlite3_session*"]],
                                                ["sqlite3session_object_config", "int", ["sqlite3_session*", "int", "void*"]],
                                                ["sqlite3session_patchset", "int", ["sqlite3_session*", "*", "**"]],
                                                ["sqlite3session_patchset_strm", "int", ["sqlite3_session*", new n.xWrap.FuncPtrAdapter({ name: "xOutput", signature: "i(ppp)", bindScope: "transient" }), "void*"]],
                                                ["sqlite3session_table_filter", void 0, ["sqlite3_session*", new n.xWrap.FuncPtrAdapter({ name: "xFilter", ...e, contextKey: (e, t) => e[0] }), "*"]],
                                            );
                                        }
                                        (n.bindingSignatures.wasmInternal = [
                                            ["sqlite3__wasm_db_reset", "int", "sqlite3*"],
                                            ["sqlite3__wasm_db_vfs", "sqlite3_vfs*", "sqlite3*", "string"],
                                            ["sqlite3__wasm_vfs_create_file", "int", "sqlite3_vfs*", "string", "*", "int"],
                                            ["sqlite3__wasm_posix_create_file", "int", "string", "*", "int"],
                                            ["sqlite3__wasm_vfs_unlink", "int", "sqlite3_vfs*", "string"],
                                            ["sqlite3__wasm_qfmt_token", "string:dealloc", "string", "int"],
                                        ]),
                                            (e.StructBinder = globalThis.Jaccwabyt({ heap: n.heap8u, alloc: n.alloc, dealloc: n.dealloc, bigIntEnabled: n.bigIntEnabled, memberPrefix: "$" })),
                                            delete globalThis.Jaccwabyt;
                                        {
                                            const i = n.xWrap.argAdapter("string");
                                            n.xWrap.argAdapter("string:flexible", (e) => i(r.flexibleString(e))),
                                                n.xWrap.argAdapter(
                                                    "string:static",
                                                    function (e) {
                                                        return n.isPtr(e) ? e : this[(e = "" + e)] || (this[e] = n.allocCString(e));
                                                    }.bind(Object.create(null)),
                                                );
                                            const o = n.xWrap.argAdapter("*"),
                                                a = function () {};
                                            n.xWrap.argAdapter("sqlite3_filename", o)("sqlite3_context*", o)("sqlite3_value*", o)("void*", o)("sqlite3_changegroup*", o)("sqlite3_changeset_iter*", o)("sqlite3_session*", o)("sqlite3_stmt*", (t) => o(t instanceof (e?.oo1?.Stmt || a) ? t.pointer : t))("sqlite3*", (t) => o(t instanceof (e?.oo1?.DB || a) ? t.pointer : t))("sqlite3_vfs*", (t) => ("string" == typeof t ? s.sqlite3_vfs_find(t) || e.SQLite3Error.toss(s.SQLITE_NOTFOUND, "Unknown sqlite3_vfs name:", t) : o(t instanceof (s.sqlite3_vfs || a) ? t.pointer : t))), n.exports.sqlite3_declare_vtab && n.xWrap.argAdapter("sqlite3_index_info*", (e) => o(e instanceof (s.sqlite3_index_info || a) ? e.pointer : e))("sqlite3_module*", (e) => o(e instanceof (s.sqlite3_module || a) ? e.pointer : e));
                                            const l = n.xWrap.resultAdapter("*");
                                            n.xWrap.resultAdapter("sqlite3*", l)("sqlite3_context*", l)("sqlite3_stmt*", l)("sqlite3_value*", l)("sqlite3_vfs*", l)("void*", l), 0 === n.exports.sqlite3_step.length && ((n.xWrap.doArgcCheck = !1), e.config.warn("Disabling sqlite3.wasm.xWrap.doArgcCheck due to environmental quirks."));
                                            for (const e of n.bindingSignatures) s[e[0]] = n.xWrap.apply(null, e);
                                            for (const e of n.bindingSignatures.wasmInternal) r[e[0]] = n.xWrap.apply(null, e);
                                            const c = function (e) {
                                                return () => t(e + "() is unavailable due to lack", "of BigInt support in this build.");
                                            };
                                            for (const e of n.bindingSignatures.int64) s[e[0]] = n.bigIntEnabled ? n.xWrap.apply(null, e) : c(e[0]);
                                            if ((delete n.bindingSignatures, n.exports.sqlite3__wasm_db_error)) {
                                                const t = n.xWrap("sqlite3__wasm_db_error", "int", "sqlite3*", "int", "string");
                                                r.sqlite3__wasm_db_error = function (n, r, i) {
                                                    return r instanceof e.WasmAllocError ? ((r = s.SQLITE_NOMEM), (i = 0)) : r instanceof Error && ((i = i || "" + r), (r = r.resultCode || s.SQLITE_ERROR)), n ? t(n, r, i) : r;
                                                };
                                            } else
                                                r.sqlite3__wasm_db_error = function (e, t, s) {
                                                    return t;
                                                };
                                        }
                                        {
                                            const i = n.xCall("sqlite3__wasm_enum_json");
                                            i || t("Maintenance required: increase sqlite3__wasm_enum_json()'s", "static buffer size!"), (n.ctype = JSON.parse(n.cstrToJs(i)));
                                            const o = ["access", "authorizer", "blobFinalizers", "changeset", "config", "dataTypes", "dbConfig", "dbStatus", "encodings", "fcntl", "flock", "ioCap", "limits", "openFlags", "prepareFlags", "resultCodes", "sqlite3Status", "stmtStatus", "syncFlags", "trace", "txnState", "udfFlags", "version"];
                                            n.bigIntEnabled && o.push("serialize", "session", "vtab");
                                            for (const e of o) for (const t of Object.entries(n.ctype[e])) s[t[0]] = t[1];
                                            n.functionEntry(s.SQLITE_WASM_DEALLOC) || t("Internal error: cannot resolve exported function", "entry SQLITE_WASM_DEALLOC (==" + s.SQLITE_WASM_DEALLOC + ").");
                                            const a = Object.create(null);
                                            for (const e of ["resultCodes"]) for (const t of Object.entries(n.ctype[e])) a[t[1]] = t[0];
                                            s.sqlite3_js_rc_str = (e) => a[e];
                                            const l = Object.assign(Object.create(null), { WasmTestStruct: !0, sqlite3_kvvfs_methods: !r.isUIThread(), sqlite3_index_info: !n.bigIntEnabled, sqlite3_index_constraint: !n.bigIntEnabled, sqlite3_index_orderby: !n.bigIntEnabled, sqlite3_index_constraint_usage: !n.bigIntEnabled });
                                            for (const t of n.ctype.structs) l[t.name] || (s[t.name] = e.StructBinder(t));
                                            if (s.sqlite3_index_info) {
                                                for (const e of ["sqlite3_index_constraint", "sqlite3_index_orderby", "sqlite3_index_constraint_usage"]) (s.sqlite3_index_info[e] = s[e]), delete s[e];
                                                s.sqlite3_vtab_config = n.xWrap("sqlite3__wasm_vtab_config", "int", ["sqlite3*", "int", "int"]);
                                            }
                                        }
                                        const i = (e, t, n) => r.sqlite3__wasm_db_error(e, s.SQLITE_MISUSE, t + "() requires " + n + " argument" + (1 === n ? "" : "s") + "."),
                                            o = (e) => r.sqlite3__wasm_db_error(e, s.SQLITE_FORMAT, "SQLITE_UTF8 is the only supported encoding."),
                                            a = (e) => n.xWrap.argAdapter("sqlite3*")(e),
                                            l = (e) => (n.isPtr(e) ? n.cstrToJs(e) : e),
                                            c = function (e, t) {
                                                e = a(e);
                                                let s = this.dbMap.get(e);
                                                return t ? (!s && t > 0 && this.dbMap.set(e, (s = Object.create(null))), s) : (this.dbMap.delete(e), s);
                                            }.bind(Object.assign(Object.create(null), { dbMap: new Map() }));
                                        (c.addCollation = function (e, t) {
                                            const s = c(e, 1);
                                            s.collation || (s.collation = new Set()), s.collation.add(l(t).toLowerCase());
                                        }),
                                            (c._addUDF = function (e, t, s, n) {
                                                t = l(t).toLowerCase();
                                                let r = n.get(t);
                                                r || n.set(t, (r = new Set())), r.add(s < 0 ? -1 : s);
                                            }),
                                            (c.addFunction = function (e, t, s) {
                                                const n = c(e, 1);
                                                n.udf || (n.udf = new Map()), this._addUDF(e, t, s, n.udf);
                                            }),
                                            n.exports.sqlite3_create_window_function &&
                                                (c.addWindowFunc = function (e, t, s) {
                                                    const n = c(e, 1);
                                                    n.wudf || (n.wudf = new Map()), this._addUDF(e, t, s, n.wudf);
                                                }),
                                            (c.cleanup = function (t) {
                                                const r = [(t = a(t))];
                                                for (const t of ["sqlite3_busy_handler", "sqlite3_commit_hook", "sqlite3_preupdate_hook", "sqlite3_progress_handler", "sqlite3_rollback_hook", "sqlite3_set_authorizer", "sqlite3_trace_v2", "sqlite3_update_hook"]) {
                                                    const i = n.exports[t];
                                                    if (i) {
                                                        r.length = i.length;
                                                        try {
                                                            s[t](...r);
                                                        } catch (s) {
                                                            e.config.warn("close-time call of", t + "(", r, ") threw:", s);
                                                        }
                                                    }
                                                }
                                                const i = c(t, 0);
                                                if (!i) return;
                                                if (i.collation) {
                                                    for (const e of i.collation)
                                                        try {
                                                            s.sqlite3_create_collation_v2(t, e, s.SQLITE_UTF8, 0, 0, 0);
                                                        } catch (e) {}
                                                    delete i.collation;
                                                }
                                                let o;
                                                for (o = 0; o < 2; ++o) {
                                                    const e = o ? i.wudf : i.udf;
                                                    if (!e) continue;
                                                    const n = o ? s.sqlite3_create_window_function : s.sqlite3_create_function_v2;
                                                    for (const r of e) {
                                                        const e = r[0],
                                                            i = r[1],
                                                            a = [t, e, 0, s.SQLITE_UTF8, 0, 0, 0, 0, 0];
                                                        o && a.push(0);
                                                        for (const e of i)
                                                            try {
                                                                (a[2] = e), n.apply(null, a);
                                                            } catch (e) {}
                                                        i.clear();
                                                    }
                                                    e.clear();
                                                }
                                                delete i.udf, delete i.wudf;
                                            });
                                        {
                                            const e = n.xWrap("sqlite3_close_v2", "int", "sqlite3*");
                                            s.sqlite3_close_v2 = function (t) {
                                                if (1 !== arguments.length) return i(t, "sqlite3_close_v2", 1);
                                                if (t)
                                                    try {
                                                        c.cleanup(t);
                                                    } catch (e) {}
                                                return e(t);
                                            };
                                        }
                                        if (s.sqlite3session_create) {
                                            const e = n.xWrap("sqlite3session_delete", void 0, ["sqlite3_session*"]);
                                            s.sqlite3session_delete = function (t) {
                                                if (1 !== arguments.length) return i(pDb, "sqlite3session_delete", 1);
                                                t && s.sqlite3session_table_filter(t, 0, 0), e(t);
                                            };
                                        }
                                        {
                                            const e = (e, t) => "argv[" + t + "]:" + e[0] + ":" + n.cstrToJs(e[1]).toLowerCase(),
                                                t = n.xWrap("sqlite3_create_collation_v2", "int", ["sqlite3*", "string", "int", "*", new n.xWrap.FuncPtrAdapter({ name: "xCompare", signature: "i(pipip)", contextKey: e }), new n.xWrap.FuncPtrAdapter({ name: "xDestroy", signature: "v(p)", contextKey: e })]);
                                            (s.sqlite3_create_collation_v2 = function (e, n, a, l, _, u) {
                                                if (6 !== arguments.length) return i(e, "sqlite3_create_collation_v2", 6);
                                                if (15 & a) {
                                                    if (s.SQLITE_UTF8 !== (15 & a)) return o(e);
                                                } else a |= s.SQLITE_UTF8;
                                                try {
                                                    const s = t(e, n, a, l, _, u);
                                                    return 0 === s && _ instanceof Function && c.addCollation(e, n), s;
                                                } catch (t) {
                                                    return r.sqlite3__wasm_db_error(e, t);
                                                }
                                            }),
                                                (s.sqlite3_create_collation = (e, t, n, r, o) => (5 === arguments.length ? s.sqlite3_create_collation_v2(e, t, n, r, o, 0) : i(e, "sqlite3_create_collation", 5)));
                                        }
                                        {
                                            const e = function (e, t) {
                                                    return e[0] + ":" + (e[2] < 0 ? -1 : e[2]) + ":" + t + ":" + n.cstrToJs(e[1]).toLowerCase();
                                                },
                                                t = Object.assign(Object.create(null), {
                                                    xInverseAndStep: {
                                                        signature: "v(pip)",
                                                        contextKey: e,
                                                        callProxy: (e) => (t, n, r) => {
                                                            try {
                                                                e(t, ...s.sqlite3_values_to_js(n, r));
                                                            } catch (e) {
                                                                s.sqlite3_result_error_js(t, e);
                                                            }
                                                        },
                                                    },
                                                    xFinalAndValue: {
                                                        signature: "v(p)",
                                                        contextKey: e,
                                                        callProxy: (e) => (t) => {
                                                            try {
                                                                s.sqlite3_result_js(t, e(t));
                                                            } catch (e) {
                                                                s.sqlite3_result_error_js(t, e);
                                                            }
                                                        },
                                                    },
                                                    xFunc: {
                                                        signature: "v(pip)",
                                                        contextKey: e,
                                                        callProxy: (e) => (t, n, r) => {
                                                            try {
                                                                s.sqlite3_result_js(t, e(t, ...s.sqlite3_values_to_js(n, r)));
                                                            } catch (e) {
                                                                s.sqlite3_result_error_js(t, e);
                                                            }
                                                        },
                                                    },
                                                    xDestroy: {
                                                        signature: "v(p)",
                                                        contextKey: e,
                                                        callProxy: (e) => (t) => {
                                                            try {
                                                                e(t);
                                                            } catch (e) {}
                                                        },
                                                    },
                                                }),
                                                a = n.xWrap("sqlite3_create_function_v2", "int", ["sqlite3*", "string", "int", "int", "*", new n.xWrap.FuncPtrAdapter({ name: "xFunc", ...t.xFunc }), new n.xWrap.FuncPtrAdapter({ name: "xStep", ...t.xInverseAndStep }), new n.xWrap.FuncPtrAdapter({ name: "xFinal", ...t.xFinalAndValue }), new n.xWrap.FuncPtrAdapter({ name: "xDestroy", ...t.xDestroy })]),
                                                l = n.exports.sqlite3_create_window_function ? n.xWrap("sqlite3_create_window_function", "int", ["sqlite3*", "string", "int", "int", "*", new n.xWrap.FuncPtrAdapter({ name: "xStep", ...t.xInverseAndStep }), new n.xWrap.FuncPtrAdapter({ name: "xFinal", ...t.xFinalAndValue }), new n.xWrap.FuncPtrAdapter({ name: "xValue", ...t.xFinalAndValue }), new n.xWrap.FuncPtrAdapter({ name: "xInverse", ...t.xInverseAndStep }), new n.xWrap.FuncPtrAdapter({ name: "xDestroy", ...t.xDestroy })]) : void 0;
                                            (s.sqlite3_create_function_v2 = function e(t, n, l, _, u, d, f, p, m) {
                                                if (e.length !== arguments.length) return i(t, "sqlite3_create_function_v2", e.length);
                                                if (15 & _) {
                                                    if (s.SQLITE_UTF8 !== (15 & _)) return o(t);
                                                } else _ |= s.SQLITE_UTF8;
                                                try {
                                                    const e = a(t, n, l, _, u, d, f, p, m);
                                                    return 0 === e && (d instanceof Function || f instanceof Function || p instanceof Function || m instanceof Function) && c.addFunction(t, n, l), e;
                                                } catch (e) {
                                                    return r.sqlite3__wasm_db_error(t, e, "Creation of UDF threw: " + e);
                                                }
                                            }),
                                                (s.sqlite3_create_function = function e(t, n, r, o, a, l, c, _) {
                                                    return e.length === arguments.length ? s.sqlite3_create_function_v2(t, n, r, o, a, l, c, _, 0) : i(t, "sqlite3_create_function", e.length);
                                                }),
                                                l
                                                    ? (s.sqlite3_create_window_function = function e(t, n, a, _, u, d, f, p, m, h) {
                                                          if (e.length !== arguments.length) return i(t, "sqlite3_create_window_function", e.length);
                                                          if (15 & _) {
                                                              if (s.SQLITE_UTF8 !== (15 & _)) return o(t);
                                                          } else _ |= s.SQLITE_UTF8;
                                                          try {
                                                              const e = l(t, n, a, _, u, d, f, p, m, h);
                                                              return 0 === e && (d instanceof Function || f instanceof Function || p instanceof Function || m instanceof Function || h instanceof Function) && c.addWindowFunc(t, n, a), e;
                                                          } catch (e) {
                                                              return r.sqlite3__wasm_db_error(t, e, "Creation of UDF threw: " + e);
                                                          }
                                                      })
                                                    : delete s.sqlite3_create_window_function,
                                                (s.sqlite3_create_function_v2.udfSetResult = s.sqlite3_create_function.udfSetResult = s.sqlite3_result_js),
                                                s.sqlite3_create_window_function && (s.sqlite3_create_window_function.udfSetResult = s.sqlite3_result_js),
                                                (s.sqlite3_create_function_v2.udfConvertArgs = s.sqlite3_create_function.udfConvertArgs = s.sqlite3_values_to_js),
                                                s.sqlite3_create_window_function && (s.sqlite3_create_window_function.udfConvertArgs = s.sqlite3_values_to_js),
                                                (s.sqlite3_create_function_v2.udfSetError = s.sqlite3_create_function.udfSetError = s.sqlite3_result_error_js),
                                                s.sqlite3_create_window_function && (s.sqlite3_create_window_function.udfSetError = s.sqlite3_result_error_js);
                                        }
                                        {
                                            const e = (e, t) => ("string" == typeof e ? (t = -1) : r.isSQLableTypedArray(e) ? ((t = e.byteLength), (e = r.typedArrayToString(e instanceof ArrayBuffer ? new Uint8Array(e) : e))) : Array.isArray(e) && ((e = e.join("")), (t = -1)), [e, t]),
                                                t = { basic: n.xWrap("sqlite3_prepare_v3", "int", ["sqlite3*", "string", "int", "int", "**", "**"]), full: n.xWrap("sqlite3_prepare_v3", "int", ["sqlite3*", "*", "int", "int", "**", "**"]) };
                                            (s.sqlite3_prepare_v3 = function n(o, a, l, c, _, u) {
                                                if (n.length !== arguments.length) return i(o, "sqlite3_prepare_v3", n.length);
                                                const [d, f] = e(a, l);
                                                switch (typeof d) {
                                                    case "string":
                                                        return t.basic(o, d, f, c, _, null);
                                                    case "number":
                                                        return t.full(o, d, f, c, _, u);
                                                    default:
                                                        return r.sqlite3__wasm_db_error(o, s.SQLITE_MISUSE, "Invalid SQL argument type for sqlite3_prepare_v2/v3().");
                                                }
                                            }),
                                                (s.sqlite3_prepare_v2 = function e(t, n, r, o, a) {
                                                    return e.length === arguments.length ? s.sqlite3_prepare_v3(t, n, r, 0, o, a) : i(t, "sqlite3_prepare_v2", e.length);
                                                });
                                        }
                                        {
                                            const e = n.xWrap("sqlite3_bind_text", "int", ["sqlite3_stmt*", "int", "string", "int", "*"]),
                                                t = n.xWrap("sqlite3_bind_blob", "int", ["sqlite3_stmt*", "int", "*", "int", "*"]);
                                            (s.sqlite3_bind_text = function t(o, a, l, c, _) {
                                                if (t.length !== arguments.length) return i(s.sqlite3_db_handle(o), "sqlite3_bind_text", t.length);
                                                if (n.isPtr(l) || null === l) return e(o, a, l, c, _);
                                                let u, d;
                                                l instanceof ArrayBuffer ? (l = new Uint8Array(l)) : Array.isArray(pMem) && (l = pMem.join(""));
                                                try {
                                                    if (r.isSQLableTypedArray(l)) (u = n.allocFromTypedArray(l)), (d = l.byteLength);
                                                    else {
                                                        if ("string" != typeof l) return r.sqlite3__wasm_db_error(s.sqlite3_db_handle(o), s.SQLITE_MISUSE, "Invalid 3rd argument type for sqlite3_bind_text().");
                                                        [u, d] = n.allocCString(l);
                                                    }
                                                    return e(o, a, u, d, s.SQLITE_WASM_DEALLOC);
                                                } catch (e) {
                                                    return n.dealloc(u), r.sqlite3__wasm_db_error(s.sqlite3_db_handle(o), e);
                                                }
                                            }),
                                                (s.sqlite3_bind_blob = function e(o, a, l, c, _) {
                                                    if (e.length !== arguments.length) return i(s.sqlite3_db_handle(o), "sqlite3_bind_blob", e.length);
                                                    if (n.isPtr(l) || null === l) return t(o, a, l, c, _);
                                                    let u, d;
                                                    l instanceof ArrayBuffer ? (l = new Uint8Array(l)) : Array.isArray(l) && (l = l.join(""));
                                                    try {
                                                        if (r.isBindableTypedArray(l)) (u = n.allocFromTypedArray(l)), (d = c >= 0 ? c : l.byteLength);
                                                        else {
                                                            if ("string" != typeof l) return r.sqlite3__wasm_db_error(s.sqlite3_db_handle(o), s.SQLITE_MISUSE, "Invalid 3rd argument type for sqlite3_bind_blob().");
                                                            [u, d] = n.allocCString(l);
                                                        }
                                                        return t(o, a, u, d, s.SQLITE_WASM_DEALLOC);
                                                    } catch (e) {
                                                        return n.dealloc(u), r.sqlite3__wasm_db_error(s.sqlite3_db_handle(o), e);
                                                    }
                                                });
                                        }
                                        s.sqlite3_config = function (e, ...t) {
                                            if (arguments.length < 2) return s.SQLITE_MISUSE;
                                            switch (e) {
                                                case s.SQLITE_CONFIG_COVERING_INDEX_SCAN:
                                                case s.SQLITE_CONFIG_MEMSTATUS:
                                                case s.SQLITE_CONFIG_SMALL_MALLOC:
                                                case s.SQLITE_CONFIG_SORTERREF_SIZE:
                                                case s.SQLITE_CONFIG_STMTJRNL_SPILL:
                                                case s.SQLITE_CONFIG_URI:
                                                    return n.exports.sqlite3__wasm_config_i(e, t[0]);
                                                case s.SQLITE_CONFIG_LOOKASIDE:
                                                    return n.exports.sqlite3__wasm_config_ii(e, t[0], t[1]);
                                                case s.SQLITE_CONFIG_MEMDB_MAXSIZE:
                                                    return n.exports.sqlite3__wasm_config_j(e, t[0]);
                                                case s.SQLITE_CONFIG_GETMALLOC:
                                                case s.SQLITE_CONFIG_GETMUTEX:
                                                case s.SQLITE_CONFIG_GETPCACHE2:
                                                case s.SQLITE_CONFIG_GETPCACHE:
                                                case s.SQLITE_CONFIG_HEAP:
                                                case s.SQLITE_CONFIG_LOG:
                                                case s.SQLITE_CONFIG_MALLOC:
                                                case s.SQLITE_CONFIG_MMAP_SIZE:
                                                case s.SQLITE_CONFIG_MULTITHREAD:
                                                case s.SQLITE_CONFIG_MUTEX:
                                                case s.SQLITE_CONFIG_PAGECACHE:
                                                case s.SQLITE_CONFIG_PCACHE2:
                                                case s.SQLITE_CONFIG_PCACHE:
                                                case s.SQLITE_CONFIG_PCACHE_HDRSZ:
                                                case s.SQLITE_CONFIG_PMASZ:
                                                case s.SQLITE_CONFIG_SERIALIZED:
                                                case s.SQLITE_CONFIG_SINGLETHREAD:
                                                case s.SQLITE_CONFIG_SQLLOG:
                                                case s.SQLITE_CONFIG_WIN32_HEAPSIZE:
                                                default:
                                                    return s.SQLITE_NOTFOUND;
                                            }
                                        };
                                        {
                                            const e = new Set();
                                            (s.sqlite3_auto_extension = function (t) {
                                                if (t instanceof Function) t = n.installFunction("i(ppp)", t);
                                                else if (1 !== arguments.length || !n.isPtr(t)) return s.SQLITE_MISUSE;
                                                const r = n.exports.sqlite3_auto_extension(t);
                                                return t !== arguments[0] && (0 === r ? e.add(t) : n.uninstallFunction(t)), r;
                                            }),
                                                (s.sqlite3_cancel_auto_extension = function (e) {
                                                    return e && 1 === arguments.length && n.isPtr(e) ? n.exports.sqlite3_cancel_auto_extension(e) : 0;
                                                }),
                                                (s.sqlite3_reset_auto_extension = function () {
                                                    n.exports.sqlite3_reset_auto_extension();
                                                    for (const t of e) n.uninstallFunction(t);
                                                    e.clear();
                                                });
                                        }
                                        const _ = s.sqlite3_vfs_find("kvvfs");
                                        if (_)
                                            if (r.isUIThread()) {
                                                const e = new s.sqlite3_kvvfs_methods(n.exports.sqlite3__wasm_kvvfs_methods());
                                                delete s.sqlite3_kvvfs_methods;
                                                const t = n.exports.sqlite3__wasm_kvvfsMakeKeyOnPstack,
                                                    r = n.pstack,
                                                    i = (e) => (115 === n.peek(e) ? sessionStorage : localStorage),
                                                    o = {
                                                        xRead: (e, s, o, a) => {
                                                            const l = r.pointer,
                                                                c = n.scopedAllocPush();
                                                            try {
                                                                const r = t(e, s);
                                                                if (!r) return -3;
                                                                const l = n.cstrToJs(r),
                                                                    c = i(e).getItem(l);
                                                                if (!c) return -1;
                                                                const _ = c.length;
                                                                if (a <= 0) return _;
                                                                if (1 === a) return n.poke(o, 0), _;
                                                                const u = n.scopedAllocCString(c);
                                                                return a > _ + 1 && (a = _ + 1), n.heap8u().copyWithin(o, u, u + a - 1), n.poke(o + a - 1, 0), a - 1;
                                                            } catch (e) {
                                                                return -2;
                                                            } finally {
                                                                r.restore(l), n.scopedAllocPop(c);
                                                            }
                                                        },
                                                        xWrite: (e, o, a) => {
                                                            const l = r.pointer;
                                                            try {
                                                                const s = t(e, o);
                                                                if (!s) return 1;
                                                                const r = n.cstrToJs(s);
                                                                return i(e).setItem(r, n.cstrToJs(a)), 0;
                                                            } catch (e) {
                                                                return s.SQLITE_IOERR;
                                                            } finally {
                                                                r.restore(l);
                                                            }
                                                        },
                                                        xDelete: (e, o) => {
                                                            const a = r.pointer;
                                                            try {
                                                                const s = t(e, o);
                                                                return s ? (i(e).removeItem(n.cstrToJs(s)), 0) : 1;
                                                            } catch (e) {
                                                                return s.SQLITE_IOERR;
                                                            } finally {
                                                                r.restore(a);
                                                            }
                                                        },
                                                    };
                                                for (const t of Object.keys(o)) e[e.memberKey(t)] = n.installFunction(e.memberSignature(t), o[t]);
                                            } else s.sqlite3_vfs_unregister(_);
                                        n.xWrap.FuncPtrAdapter.warnOnUse = !0;
                                        const u = e.StructBinder,
                                            d = function e(s, r, i, o = e.installMethodArgcCheck) {
                                                if ((s instanceof u.StructType ? i instanceof Function || n.isPtr(i) || t("Usage errror: expecting a Function or WASM pointer to one.") : t("Usage error: target object is-not-a StructType."), 1 === arguments.length)) return (t, n) => e(s, t, n, o);
                                                e.argcProxy ||
                                                    ((e.argcProxy = function (e, s, n, r) {
                                                        return function (...i) {
                                                            return n.length !== arguments.length && t("Argument mismatch for", e.structInfo.name + "::" + s + ": Native signature is:", r), n.apply(this, i);
                                                        };
                                                    }),
                                                    (e.removeFuncList = function () {
                                                        this.ondispose.__removeFuncList &&
                                                            (this.ondispose.__removeFuncList.forEach((e, t) => {
                                                                if ("number" == typeof e)
                                                                    try {
                                                                        n.uninstallFunction(e);
                                                                    } catch (e) {}
                                                            }),
                                                            delete this.ondispose.__removeFuncList);
                                                    }));
                                                const a = s.memberSignature(r);
                                                a.length < 2 && t("Member", r, "does not have a function pointer signature:", a);
                                                const l = s.memberKey(r),
                                                    c = o && !n.isPtr(i) ? e.argcProxy(s, l, i, a) : i;
                                                if (n.isPtr(c)) c && !n.functionEntry(c) && t("Pointer", c, "is not a WASM function table entry."), (s[l] = c);
                                                else {
                                                    const t = n.installFunction(c, s.memberSignature(r, !0));
                                                    (s[l] = t), (s.ondispose && s.ondispose.__removeFuncList) || (s.addOnDispose("ondispose.__removeFuncList handler", e.removeFuncList), (s.ondispose.__removeFuncList = [])), s.ondispose.__removeFuncList.push(l, t);
                                                }
                                                return (t, n) => e(s, t, n, o);
                                            };
                                        d.installMethodArgcCheck = !1;
                                        const f = function (e, t, s = d.installMethodArgcCheck) {
                                            const n = new Map();
                                            for (const r of Object.keys(t)) {
                                                const i = t[r],
                                                    o = n.get(i);
                                                if (o) {
                                                    const t = e.memberKey(r);
                                                    e[t] = e[e.memberKey(o)];
                                                } else d(e, r, i, s), n.set(i, r);
                                            }
                                            return e;
                                        };
                                        (u.StructType.prototype.installMethod = function (e, t, s = d.installMethodArgcCheck) {
                                            return arguments.length < 3 && e && "object" == typeof e ? f(this, ...arguments) : d(this, ...arguments);
                                        }),
                                            (u.StructType.prototype.installMethods = function (e, t = d.installMethodArgcCheck) {
                                                return f(this, e, t);
                                            });
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        e.version = { libVersion: "3.48.0", libVersionNumber: 3048e3, sourceId: "2025-01-14 11:05:00 d2fe6b05f38d9d7cd78c5d252e99ac59f1aea071d669830c1ffe4e8966e84010", downloadVersion: 348e4 };
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = (...t) => {
                                                throw new e.SQLite3Error(...t);
                                            },
                                            s = e.capi,
                                            n = e.wasm,
                                            r = e.util,
                                            i = new WeakMap(),
                                            o = new WeakMap(),
                                            a = (e, t, s) => {
                                                const n = Object.getOwnPropertyDescriptor(e, t);
                                                return n ? n.value : s;
                                            },
                                            l = function (e, n) {
                                                return n && (e instanceof d && (e = e.pointer), t(n, "sqlite3 result code", n + ":", e ? s.sqlite3_errmsg(e) : s.sqlite3_errstr(n))), arguments[0];
                                            },
                                            c = n.installFunction(
                                                "i(ippp)",
                                                function (e, t, n, r) {
                                                    s.SQLITE_TRACE_STMT;
                                                }.bind({ counter: 0 }),
                                            ),
                                            _ = Object.create(null),
                                            u = function r(...a) {
                                                if (!r._name2vfs) {
                                                    r._name2vfs = Object.create(null);
                                                    const e = "function" == typeof importScripts && ((e) => t("The VFS for", e, "is only available in the main window thread."));
                                                    (r._name2vfs[":localStorage:"] = { vfs: "kvvfs", filename: e || (() => "local") }), (r._name2vfs[":sessionStorage:"] = { vfs: "kvvfs", filename: e || (() => "session") });
                                                }
                                                const u = r.normalizeArgs(...a);
                                                let d = u.filename,
                                                    f = u.vfs,
                                                    p = u.flags;
                                                (("string" != typeof d && "number" != typeof d) || "string" != typeof p || (f && "string" != typeof f && "number" != typeof f)) && (e.config.error("Invalid DB ctor args", u, arguments), t("Invalid arguments for DB constructor."));
                                                let m = "number" == typeof d ? n.cstrToJs(d) : d;
                                                const h = r._name2vfs[m];
                                                h && ((f = h.vfs), (d = m = h.filename(m)));
                                                let g,
                                                    q = 0;
                                                p.indexOf("c") >= 0 && (q |= s.SQLITE_OPEN_CREATE | s.SQLITE_OPEN_READWRITE), p.indexOf("w") >= 0 && (q |= s.SQLITE_OPEN_READWRITE), 0 === q && (q |= s.SQLITE_OPEN_READONLY), (q |= s.SQLITE_OPEN_EXRESCODE);
                                                const b = n.pstack.pointer;
                                                try {
                                                    const e = n.pstack.allocPtr();
                                                    let t = s.sqlite3_open_v2(d, e, q, f || 0);
                                                    (g = n.peekPtr(e)), l(g, t), s.sqlite3_extended_result_codes(g, 1), p.indexOf("t") >= 0 && s.sqlite3_trace_v2(g, s.SQLITE_TRACE_STMT, c, g);
                                                } catch (e) {
                                                    throw (g && s.sqlite3_close_v2(g), e);
                                                } finally {
                                                    n.pstack.restore(b);
                                                }
                                                (this.filename = m), i.set(this, g), o.set(this, Object.create(null));
                                                try {
                                                    const n = s.sqlite3_js_db_vfs(g) || t("Internal error: cannot get VFS for new db handle."),
                                                        r = _[n];
                                                    r && (r instanceof Function ? r(this, e) : l(g, s.sqlite3_exec(g, r, 0, 0, 0)));
                                                } catch (e) {
                                                    throw (this.close(), e);
                                                }
                                            };
                                        (u.setVfsPostOpenCallback = function (e, s) {
                                            s instanceof Function || t("dbCtorHelper.setVfsPostOpenCallback() should not be used with a non-function argument.", arguments), (_[e] = s);
                                        }),
                                            (u.normalizeArgs = function (e = ":memory:", t = "c", s = null) {
                                                const n = {};
                                                return 1 === arguments.length && arguments[0] && "object" == typeof arguments[0] ? (Object.assign(n, arguments[0]), void 0 === n.flags && (n.flags = "c"), void 0 === n.vfs && (n.vfs = null), void 0 === n.filename && (n.filename = ":memory:")) : ((n.filename = e), (n.flags = t), (n.vfs = s)), n;
                                            });
                                        const d = function (...e) {
                                            u.apply(this, e);
                                        };
                                        d.dbCtorHelper = u;
                                        const f = { null: 1, number: 2, string: 3, boolean: 4, blob: 5 };
                                        f[void 0], f.null, n.bigIntEnabled && (f.bigint = f.number);
                                        const p = function () {
                                                f !== arguments[2] && t(s.SQLITE_MISUSE, "Do not call the Stmt constructor directly. Use DB.prepare()."), (this.db = arguments[0]), i.set(this, arguments[1]), (this.parameterCount = s.sqlite3_bind_parameter_count(this.pointer));
                                            },
                                            m = function (e) {
                                                return e.pointer || t("DB has been closed."), e;
                                            },
                                            h = function (e, s) {
                                                return (s !== (0 | s) || s < 0 || s >= e.columnCount) && t("Column index", s, "is out of range."), e;
                                            },
                                            g = (e, t, s, ...n) => {
                                                const r = e.prepare(t);
                                                try {
                                                    const e = r.bind(s).step() ? r.get(...n) : void 0;
                                                    return r.reset(), e;
                                                } finally {
                                                    r.finalize();
                                                }
                                            },
                                            q = (e, t, s, n) => e.exec({ sql: t, bind: s, rowMode: n, returnValue: "resultRows" });
                                        (d.checkRc = (e, t) => l(e, t)),
                                            (d.prototype = {
                                                isOpen: function () {
                                                    return !!this.pointer;
                                                },
                                                affirmOpen: function () {
                                                    return m(this);
                                                },
                                                close: function () {
                                                    if (this.pointer) {
                                                        if (this.onclose && this.onclose.before instanceof Function)
                                                            try {
                                                                this.onclose.before(this);
                                                            } catch (e) {}
                                                        const e = this.pointer;
                                                        if (
                                                            (Object.keys(o.get(this)).forEach((e, t) => {
                                                                if (t && t.pointer)
                                                                    try {
                                                                        t.finalize();
                                                                    } catch (e) {}
                                                            }),
                                                            i.delete(this),
                                                            o.delete(this),
                                                            s.sqlite3_close_v2(e),
                                                            this.onclose && this.onclose.after instanceof Function)
                                                        )
                                                            try {
                                                                this.onclose.after(this);
                                                            } catch (e) {}
                                                        delete this.filename;
                                                    }
                                                },
                                                changes: function (e = !1, t = !1) {
                                                    const n = m(this).pointer;
                                                    return e ? (t ? s.sqlite3_total_changes64(n) : s.sqlite3_total_changes(n)) : t ? s.sqlite3_changes64(n) : s.sqlite3_changes(n);
                                                },
                                                dbFilename: function (e = "main") {
                                                    return s.sqlite3_db_filename(m(this).pointer, e);
                                                },
                                                dbName: function (e = 0) {
                                                    return s.sqlite3_db_name(m(this).pointer, e);
                                                },
                                                dbVfsName: function (e = 0) {
                                                    let t;
                                                    const r = s.sqlite3_js_db_vfs(m(this).pointer, e);
                                                    if (r) {
                                                        const e = new s.sqlite3_vfs(r);
                                                        try {
                                                            t = n.cstrToJs(e.$zName);
                                                        } finally {
                                                            e.dispose();
                                                        }
                                                    }
                                                    return t;
                                                },
                                                prepare: function (e) {
                                                    m(this);
                                                    const r = n.pstack.pointer;
                                                    let i, a;
                                                    try {
                                                        (i = n.pstack.alloc(8)), d.checkRc(this, s.sqlite3_prepare_v2(this.pointer, e, -1, i, null)), (a = n.peekPtr(i));
                                                    } finally {
                                                        n.pstack.restore(r);
                                                    }
                                                    a || t("Cannot prepare empty SQL.");
                                                    const l = new p(this, a, f);
                                                    return (o.get(this)[a] = l), l;
                                                },
                                                exec: function () {
                                                    m(this);
                                                    const e = (function (e, n) {
                                                        const i = Object.create(null);
                                                        switch (((i.opt = Object.create(null)), n.length)) {
                                                            case 1:
                                                                "string" == typeof n[0] || r.isSQLableTypedArray(n[0]) || Array.isArray(n[0]) ? (i.sql = n[0]) : n[0] && "object" == typeof n[0] && ((i.opt = n[0]), (i.sql = i.opt.sql));
                                                                break;
                                                            case 2:
                                                                (i.sql = n[0]), (i.opt = n[1]);
                                                                break;
                                                            default:
                                                                t("Invalid argument count for exec().");
                                                        }
                                                        (i.sql = r.flexibleString(i.sql)), "string" != typeof i.sql && t("Missing SQL argument or unsupported SQL value type.");
                                                        const o = i.opt;
                                                        switch (o.returnValue) {
                                                            case "resultRows":
                                                                o.resultRows || (o.resultRows = []), (i.returnVal = () => o.resultRows);
                                                                break;
                                                            case "saveSql":
                                                                o.saveSql || (o.saveSql = []), (i.returnVal = () => o.saveSql);
                                                                break;
                                                            case void 0:
                                                            case "this":
                                                                i.returnVal = () => e;
                                                                break;
                                                            default:
                                                                t("Invalid returnValue value:", o.returnValue);
                                                        }
                                                        if ((o.callback || o.returnValue || void 0 === o.rowMode || (o.resultRows || (o.resultRows = []), (i.returnVal = () => o.resultRows)), o.callback || o.resultRows))
                                                            switch (void 0 === o.rowMode ? "array" : o.rowMode) {
                                                                case "object":
                                                                    i.cbArg = (e, t) => {
                                                                        t.columnNames || (t.columnNames = e.getColumnNames([]));
                                                                        const s = e.get([]),
                                                                            n = Object.create(null);
                                                                        for (const e in t.columnNames) n[t.columnNames[e]] = s[e];
                                                                        return n;
                                                                    };
                                                                    break;
                                                                case "array":
                                                                    i.cbArg = (e) => e.get([]);
                                                                    break;
                                                                case "stmt":
                                                                    Array.isArray(o.resultRows) && t("exec(): invalid rowMode for a resultRows array: must", "be one of 'array', 'object',", "a result column number, or column name reference."), (i.cbArg = (e) => e);
                                                                    break;
                                                                default:
                                                                    if (r.isInt32(o.rowMode)) {
                                                                        i.cbArg = (e) => e.get(o.rowMode);
                                                                        break;
                                                                    }
                                                                    if ("string" == typeof o.rowMode && o.rowMode.length > 1 && "$" === o.rowMode[0]) {
                                                                        const e = o.rowMode.substr(1);
                                                                        i.cbArg = (n) => {
                                                                            const r = n.get(Object.create(null))[e];
                                                                            return void 0 === r ? t(s.SQLITE_NOTFOUND, "exec(): unknown result column:", e) : r;
                                                                        };
                                                                        break;
                                                                    }
                                                                    t("Invalid rowMode:", o.rowMode);
                                                            }
                                                        return i;
                                                    })(this, arguments);
                                                    if (!e.sql) return t("exec() requires an SQL string.");
                                                    const i = e.opt,
                                                        o = i.callback,
                                                        a = Array.isArray(i.resultRows) ? i.resultRows : void 0;
                                                    let l,
                                                        c = i.bind,
                                                        _ = !!(e.cbArg || i.columnNames || a);
                                                    const u = n.scopedAllocPush(),
                                                        h = Array.isArray(i.saveSql) ? i.saveSql : void 0;
                                                    try {
                                                        const t = r.isSQLableTypedArray(e.sql);
                                                        let u = t ? e.sql.byteLength : n.jstrlen(e.sql);
                                                        const m = n.scopedAlloc(2 * n.ptrSizeof + (u + 1)),
                                                            g = m + n.ptrSizeof;
                                                        let q = g + n.ptrSizeof;
                                                        const b = q + u;
                                                        for (t ? n.heap8().set(e.sql, q) : n.jstrcpy(e.sql, n.heap8(), q, u, !1), n.poke(q + u, 0); q && n.peek(q, "i8"); ) {
                                                            n.pokePtr([m, g], 0), d.checkRc(this, s.sqlite3_prepare_v3(this.pointer, q, u, 0, m, g));
                                                            const t = n.peekPtr(m);
                                                            if (((q = n.peekPtr(g)), (u = b - q), t)) {
                                                                if ((h && h.push(s.sqlite3_sql(t).trim()), (l = new p(this, t, f)), c && l.parameterCount && (l.bind(c), (c = null)), _ && l.columnCount)) {
                                                                    let t = Array.isArray(i.columnNames) ? 0 : 1;
                                                                    if (((_ = !1), e.cbArg || a)) {
                                                                        const s = Object.create(null);
                                                                        for (; l.step(); l._lockedByExec = !1) {
                                                                            0 == t++ && l.getColumnNames((s.columnNames = i.columnNames || [])), (l._lockedByExec = !0);
                                                                            const n = e.cbArg(l, s);
                                                                            if ((a && a.push(n), o && !1 === o.call(i, n, l))) break;
                                                                        }
                                                                        l._lockedByExec = !1;
                                                                    }
                                                                    0 === t && l.getColumnNames(i.columnNames);
                                                                } else l.step();
                                                                l.reset().finalize(), (l = null);
                                                            }
                                                        }
                                                    } finally {
                                                        n.scopedAllocPop(u), l && (delete l._lockedByExec, l.finalize());
                                                    }
                                                    return e.returnVal();
                                                },
                                                createFunction: function (e, n, i) {
                                                    const o = (e) => e instanceof Function;
                                                    switch (arguments.length) {
                                                        case 1:
                                                            (e = (i = e).name), (n = i.xFunc || 0);
                                                            break;
                                                        case 2:
                                                            o(n) || (n = (i = n).xFunc || 0);
                                                    }
                                                    i || (i = {}), "string" != typeof e && t("Invalid arguments: missing function name.");
                                                    let l = i.xStep || 0,
                                                        c = i.xFinal || 0;
                                                    const _ = i.xValue || 0,
                                                        u = i.xInverse || 0;
                                                    let f;
                                                    o(n) ? ((f = !1), (o(l) || o(c)) && t("Ambiguous arguments: scalar or aggregate?"), (l = c = null)) : o(l) ? (o(c) || t("Missing xFinal() callback for aggregate or window UDF."), (n = null)) : o(c) ? t("Missing xStep() callback for aggregate or window UDF.") : t("Missing function-type properties."), !1 === f ? (o(_) || o(u)) && t("xValue and xInverse are not permitted for non-window UDFs.") : o(_) ? (o(u) || t("xInverse must be provided if xValue is."), (f = !0)) : o(u) && t("xValue must be provided if xInverse is.");
                                                    const p = i.pApp;
                                                    null == p || ("number" == typeof p && r.isInt32(p)) || t("Invalid value for pApp property. Must be a legal WASM pointer value.");
                                                    const m = i.xDestroy || 0;
                                                    m && !o(m) && t("xDestroy property must be a function.");
                                                    let h = 0;
                                                    a(i, "deterministic") && (h |= s.SQLITE_DETERMINISTIC), a(i, "directOnly") && (h |= s.SQLITE_DIRECTONLY), a(i, "innocuous") && (h |= s.SQLITE_INNOCUOUS), (e = e.toLowerCase());
                                                    const g = n || l,
                                                        q = a(i, "arity"),
                                                        b = "number" == typeof q ? q : g.length ? g.length - 1 : 0;
                                                    let y;
                                                    return (y = f ? s.sqlite3_create_window_function(this.pointer, e, b, s.SQLITE_UTF8 | h, p || 0, l, c, _, u, m) : s.sqlite3_create_function_v2(this.pointer, e, b, s.SQLITE_UTF8 | h, p || 0, n, l, c, m)), d.checkRc(this, y), this;
                                                },
                                                selectValue: function (e, t, s) {
                                                    return g(this, e, t, 0, s);
                                                },
                                                selectValues: function (e, t, s) {
                                                    const n = this.prepare(e),
                                                        r = [];
                                                    try {
                                                        for (n.bind(t); n.step(); ) r.push(n.get(0, s));
                                                        n.reset();
                                                    } finally {
                                                        n.finalize();
                                                    }
                                                    return r;
                                                },
                                                selectArray: function (e, t) {
                                                    return g(this, e, t, []);
                                                },
                                                selectObject: function (e, t) {
                                                    return g(this, e, t, {});
                                                },
                                                selectArrays: function (e, t) {
                                                    return q(this, e, t, "array");
                                                },
                                                selectObjects: function (e, t) {
                                                    return q(this, e, t, "object");
                                                },
                                                openStatementCount: function () {
                                                    return this.pointer ? Object.keys(o.get(this)).length : 0;
                                                },
                                                transaction: function (e) {
                                                    let n = "BEGIN";
                                                    arguments.length > 1 && (/[^a-zA-Z]/.test(arguments[0]) && t(s.SQLITE_MISUSE, "Invalid argument for BEGIN qualifier."), (n += " " + arguments[0]), (e = arguments[1])), m(this).exec(n);
                                                    try {
                                                        const t = e(this);
                                                        return this.exec("COMMIT"), t;
                                                    } catch (e) {
                                                        throw (this.exec("ROLLBACK"), e);
                                                    }
                                                },
                                                savepoint: function (e) {
                                                    m(this).exec("SAVEPOINT oo1");
                                                    try {
                                                        const t = e(this);
                                                        return this.exec("RELEASE oo1"), t;
                                                    } catch (e) {
                                                        throw (this.exec("ROLLBACK to SAVEPOINT oo1; RELEASE SAVEPOINT oo1"), e);
                                                    }
                                                },
                                                checkRc: function (e) {
                                                    return l(this, e);
                                                },
                                            });
                                        const b = function (e) {
                                                return e.pointer || t("Stmt has been closed."), e;
                                            },
                                            y = function (e) {
                                                return (
                                                    (function (e) {
                                                        let t = f[null == e ? "null" : typeof e];
                                                        switch (t) {
                                                            case f.boolean:
                                                            case f.null:
                                                            case f.number:
                                                            case f.string:
                                                                return t;
                                                            case f.bigint:
                                                                if (n.bigIntEnabled) return t;
                                                            default:
                                                                return r.isBindableTypedArray(e) ? f.blob : void 0;
                                                        }
                                                    })(e) || t("Unsupported bind() argument type:", typeof e)
                                                );
                                            },
                                            w = function (e, s) {
                                                return e._lockedByExec && t("Operation is illegal when statement is locked:", s), e;
                                            },
                                            v = function i(o, a, l, c) {
                                                w(b(o), "bind()"),
                                                    i._ ||
                                                        ((i._tooBigInt = (e) => t("BigInt value is too big to store without precision loss:", e)),
                                                        (i._ = {
                                                            string: function (e, t, r, i) {
                                                                const [o, a] = n.allocCString(r, !0);
                                                                return (i ? s.sqlite3_bind_blob : s.sqlite3_bind_text)(e.pointer, t, o, a, s.SQLITE_WASM_DEALLOC);
                                                            },
                                                        })),
                                                    y(c),
                                                    (a = (function (e, n) {
                                                        const i = "number" == typeof n ? n : s.sqlite3_bind_parameter_index(e.pointer, n);
                                                        return 0 !== i && r.isInt32(i) ? (i < 1 || i > e.parameterCount) && t("Bind index", n, "is out of range.") : t("Invalid bind() parameter name: " + n), i;
                                                    })(o, a));
                                                let _ = 0;
                                                switch (null == c ? f.null : l) {
                                                    case f.null:
                                                        _ = s.sqlite3_bind_null(o.pointer, a);
                                                        break;
                                                    case f.string:
                                                        _ = i._.string(o, a, c, !1);
                                                        break;
                                                    case f.number: {
                                                        let e;
                                                        r.isInt32(c) ? (e = s.sqlite3_bind_int) : "bigint" == typeof c ? (r.bigIntFits64(c) ? (n.bigIntEnabled ? (e = s.sqlite3_bind_int64) : r.bigIntFitsDouble(c) ? ((c = Number(c)), (e = s.sqlite3_bind_double)) : i._tooBigInt(c)) : i._tooBigInt(c)) : ((c = Number(c)), (e = n.bigIntEnabled && Number.isInteger(c) ? s.sqlite3_bind_int64 : s.sqlite3_bind_double)), (_ = e(o.pointer, a, c));
                                                        break;
                                                    }
                                                    case f.boolean:
                                                        _ = s.sqlite3_bind_int(o.pointer, a, c ? 1 : 0);
                                                        break;
                                                    case f.blob: {
                                                        if ("string" == typeof c) {
                                                            _ = i._.string(o, a, c, !0);
                                                            break;
                                                        }
                                                        c instanceof ArrayBuffer ? (c = new Uint8Array(c)) : r.isBindableTypedArray(c) || t("Binding a value as a blob requires", "that it be a string, Uint8Array, Int8Array, or ArrayBuffer.");
                                                        const e = n.alloc(c.byteLength || 1);
                                                        n.heap8().set(c.byteLength ? c : [0], e), (_ = s.sqlite3_bind_blob(o.pointer, a, e, c.byteLength, s.SQLITE_WASM_DEALLOC));
                                                        break;
                                                    }
                                                    default:
                                                        e.config.warn("Unsupported bind() argument type:", c), t("Unsupported bind() argument type: " + typeof c);
                                                }
                                                return _ && d.checkRc(o.db.pointer, _), (o._mayGet = !1), o;
                                            };
                                        p.prototype = {
                                            finalize: function () {
                                                if (this.pointer) {
                                                    w(this, "finalize()");
                                                    const e = s.sqlite3_finalize(this.pointer);
                                                    return delete o.get(this.db)[this.pointer], i.delete(this), delete this._mayGet, delete this.parameterCount, delete this._lockedByExec, delete this.db, e;
                                                }
                                            },
                                            clearBindings: function () {
                                                return w(b(this), "clearBindings()"), s.sqlite3_clear_bindings(this.pointer), (this._mayGet = !1), this;
                                            },
                                            reset: function (e) {
                                                w(this, "reset()"), e && this.clearBindings();
                                                const t = s.sqlite3_reset(b(this).pointer);
                                                return (this._mayGet = !1), l(this.db, t), this;
                                            },
                                            bind: function () {
                                                let e, s;
                                                switch ((b(this), arguments.length)) {
                                                    case 1:
                                                        (e = 1), (s = arguments[0]);
                                                        break;
                                                    case 2:
                                                        (e = arguments[0]), (s = arguments[1]);
                                                        break;
                                                    default:
                                                        t("Invalid bind() arguments.");
                                                }
                                                return void 0 === s ? this : (this.parameterCount || t("This statement has no bindable parameters."), (this._mayGet = !1), null === s ? v(this, e, f.null, s) : Array.isArray(s) ? (1 !== arguments.length && t("When binding an array, an index argument is not permitted."), s.forEach((e, t) => v(this, t + 1, y(e), e)), this) : (s instanceof ArrayBuffer && (s = new Uint8Array(s)), "object" != typeof s || r.isBindableTypedArray(s) ? v(this, e, y(s), s) : (1 !== arguments.length && t("When binding an object, an index argument is not permitted."), Object.keys(s).forEach((e) => v(this, e, y(s[e]), s[e])), this)));
                                            },
                                            bindAsBlob: function (e, s) {
                                                b(this), 1 === arguments.length && ((s = e), (e = 1));
                                                const n = y(s);
                                                return f.string !== n && f.blob !== n && f.null !== n && t("Invalid value type for bindAsBlob()"), v(this, e, f.blob, s);
                                            },
                                            step: function () {
                                                w(this, "step()");
                                                const t = s.sqlite3_step(b(this).pointer);
                                                switch (t) {
                                                    case s.SQLITE_DONE:
                                                        return (this._mayGet = !1);
                                                    case s.SQLITE_ROW:
                                                        return (this._mayGet = !0);
                                                    default:
                                                        (this._mayGet = !1), e.config.warn("sqlite3_step() rc=", t, s.sqlite3_js_rc_str(t), "SQL =", s.sqlite3_sql(this.pointer)), d.checkRc(this.db.pointer, t);
                                                }
                                            },
                                            stepReset: function () {
                                                return this.step(), this.reset();
                                            },
                                            stepFinalize: function () {
                                                try {
                                                    const e = this.step();
                                                    return this.reset(), e;
                                                } finally {
                                                    try {
                                                        this.finalize();
                                                    } catch (e) {}
                                                }
                                            },
                                            get: function (e, i) {
                                                if ((b(this)._mayGet || t("Stmt.step() has not (recently) returned true."), Array.isArray(e))) {
                                                    let t = 0;
                                                    const s = this.columnCount;
                                                    for (; t < s; ) e[t] = this.get(t++);
                                                    return e;
                                                }
                                                if (e && "object" == typeof e) {
                                                    let t = 0;
                                                    const n = this.columnCount;
                                                    for (; t < n; ) e[s.sqlite3_column_name(this.pointer, t)] = this.get(t++);
                                                    return e;
                                                }
                                                switch ((h(this, e), void 0 === i ? s.sqlite3_column_type(this.pointer, e) : i)) {
                                                    case s.SQLITE_NULL:
                                                        return null;
                                                    case s.SQLITE_INTEGER:
                                                        if (n.bigIntEnabled) {
                                                            const t = s.sqlite3_column_int64(this.pointer, e);
                                                            return t >= Number.MIN_SAFE_INTEGER && t <= Number.MAX_SAFE_INTEGER ? Number(t).valueOf() : t;
                                                        }
                                                        {
                                                            const n = s.sqlite3_column_double(this.pointer, e);
                                                            return (n > Number.MAX_SAFE_INTEGER || n < Number.MIN_SAFE_INTEGER) && t("Integer is out of range for JS integer range: " + n), r.isInt32(n) ? 0 | n : n;
                                                        }
                                                    case s.SQLITE_FLOAT:
                                                        return s.sqlite3_column_double(this.pointer, e);
                                                    case s.SQLITE_TEXT:
                                                        return s.sqlite3_column_text(this.pointer, e);
                                                    case s.SQLITE_BLOB: {
                                                        const t = s.sqlite3_column_bytes(this.pointer, e),
                                                            r = s.sqlite3_column_blob(this.pointer, e),
                                                            i = new Uint8Array(t);
                                                        return t && i.set(n.heap8u().slice(r, r + t), 0), t && this.db._blobXfer instanceof Array && this.db._blobXfer.push(i.buffer), i;
                                                    }
                                                    default:
                                                        t("Don't know how to translate", "type of result column #" + e + ".");
                                                }
                                                t("Not reached.");
                                            },
                                            getInt: function (e) {
                                                return this.get(e, s.SQLITE_INTEGER);
                                            },
                                            getFloat: function (e) {
                                                return this.get(e, s.SQLITE_FLOAT);
                                            },
                                            getString: function (e) {
                                                return this.get(e, s.SQLITE_TEXT);
                                            },
                                            getBlob: function (e) {
                                                return this.get(e, s.SQLITE_BLOB);
                                            },
                                            getJSON: function (e) {
                                                const t = this.get(e, s.SQLITE_STRING);
                                                return null === t ? t : JSON.parse(t);
                                            },
                                            getColumnName: function (e) {
                                                return s.sqlite3_column_name(h(b(this), e).pointer, e);
                                            },
                                            getColumnNames: function (e = []) {
                                                h(b(this), 0);
                                                const t = this.columnCount;
                                                for (let n = 0; n < t; ++n) e.push(s.sqlite3_column_name(this.pointer, n));
                                                return e;
                                            },
                                            getParamIndex: function (e) {
                                                return b(this).parameterCount ? s.sqlite3_bind_parameter_index(this.pointer, e) : void 0;
                                            },
                                            getParamName: function (e) {
                                                return b(this).parameterCount ? s.sqlite3_bind_parameter_name(this.pointer, e) : void 0;
                                            },
                                            isBusy: function () {
                                                return 0 !== s.sqlite3_stmt_busy(b(this));
                                            },
                                            isReadOnly: function () {
                                                return 0 !== s.sqlite3_stmt_readonly(b(this));
                                            },
                                        };
                                        {
                                            const e = {
                                                enumerable: !0,
                                                get: function () {
                                                    return i.get(this);
                                                },
                                                set: () => t("The pointer property is read-only."),
                                            };
                                            Object.defineProperty(p.prototype, "pointer", e), Object.defineProperty(d.prototype, "pointer", e);
                                        }
                                        if (
                                            (Object.defineProperty(p.prototype, "columnCount", {
                                                enumerable: !1,
                                                get: function () {
                                                    return s.sqlite3_column_count(this.pointer);
                                                },
                                                set: () => t("The columnCount property is read-only."),
                                            }),
                                            (e.oo1 = { DB: d, Stmt: p }),
                                            r.isUIThread())
                                        ) {
                                            e.oo1.JsStorageDb = function (e = "session") {
                                                const s = u.normalizeArgs(...arguments);
                                                "session" !== (e = s.filename) && "local" !== e && t("JsStorageDb db name must be one of 'session' or 'local'."), (s.vfs = "kvvfs"), u.call(this, s);
                                            };
                                            const n = e.oo1.JsStorageDb;
                                            (n.prototype = Object.create(d.prototype)),
                                                (n.clearStorage = s.sqlite3_js_kvvfs_clear),
                                                (n.prototype.clearStorage = function () {
                                                    return n.clearStorage(m(this).filename);
                                                }),
                                                (n.storageSize = s.sqlite3_js_kvvfs_size),
                                                (n.prototype.storageSize = function () {
                                                    return n.storageSize(m(this).filename);
                                                });
                                        }
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = e.util;
                                        e.initWorker1API = function () {
                                            const e = (...e) => {
                                                throw new Error(e.join(" "));
                                            };
                                            globalThis.WorkerGlobalScope instanceof Function || e("initWorker1API() must be run from a Worker thread.");
                                            const s = this.sqlite3 || e("Missing this.sqlite3 object."),
                                                n = s.oo1.DB,
                                                r = function (e) {
                                                    let t = i.idMap.get(e);
                                                    return t || ((t = "db#" + ++i.idSeq + "@" + e.pointer), i.idMap.set(e, t), t);
                                                },
                                                i = {
                                                    dbList: [],
                                                    idSeq: 0,
                                                    idMap: new WeakMap(),
                                                    xfer: [],
                                                    open: function (e) {
                                                        const t = new n(e);
                                                        return (this.dbs[r(t)] = t), this.dbList.indexOf(t) < 0 && this.dbList.push(t), t;
                                                    },
                                                    close: function (e, s) {
                                                        if (e) {
                                                            delete this.dbs[r(e)];
                                                            const n = e.filename,
                                                                i = t.sqlite3__wasm_db_vfs(e.pointer, 0);
                                                            e.close();
                                                            const o = this.dbList.indexOf(e);
                                                            o >= 0 && this.dbList.splice(o, 1), s && n && i && t.sqlite3__wasm_vfs_unlink(i, n);
                                                        }
                                                    },
                                                    post: function (e, t) {
                                                        t && t.length ? (globalThis.postMessage(e, Array.from(t)), (t.length = 0)) : globalThis.postMessage(e);
                                                    },
                                                    dbs: Object.create(null),
                                                    getDb: function (t, s = !0) {
                                                        return this.dbs[t] || (s ? e("Unknown (or closed) DB ID:", t) : void 0);
                                                    },
                                                },
                                                o = function (t, s = !0) {
                                                    const n = i.getDb(t.dbId, !1) || i.dbList[0];
                                                    return s
                                                        ? (function (t = i.dbList[0]) {
                                                              return t && t.pointer ? t : e("DB is not opened.");
                                                          })(n)
                                                        : n;
                                                },
                                                a = {
                                                    open: function (t) {
                                                        const n = Object.create(null),
                                                            o = t.args || Object.create(null);
                                                        o.simulateError && e("Throwing because of simulateError flag.");
                                                        const a = Object.create(null);
                                                        (n.vfs = o.vfs), (n.filename = o.filename || "");
                                                        const l = i.open(n);
                                                        return (a.filename = l.filename), (a.persistent = !!s.capi.sqlite3_js_db_uses_vfs(l.pointer, "opfs")), (a.dbId = r(l)), (a.vfs = l.dbVfsName()), a;
                                                    },
                                                    close: function (e) {
                                                        const t = o(e, !1),
                                                            s = { filename: t && t.filename };
                                                        if (t) {
                                                            const s = !(!e.args || "object" != typeof e.args || !e.args.unlink);
                                                            i.close(t, s);
                                                        }
                                                        return s;
                                                    },
                                                    exec: function (t) {
                                                        const s = "string" == typeof t.args ? { sql: t.args } : t.args || Object.create(null);
                                                        "stmt" === s.rowMode ? e("Invalid rowMode for 'exec': stmt mode", "does not work in the Worker API.") : s.sql || e("'exec' requires input SQL.");
                                                        const n = o(t);
                                                        (s.callback || Array.isArray(s.resultRows)) && (n._blobXfer = i.xfer);
                                                        const r = s.callback;
                                                        let a = 0;
                                                        const l = !!s.columnNames;
                                                        "string" == typeof r &&
                                                            (l || (s.columnNames = []),
                                                            (s.callback = function (e, t) {
                                                                i.post({ type: r, columnNames: s.columnNames, rowNumber: ++a, row: e }, i.xfer);
                                                            }));
                                                        try {
                                                            const e = s.countChanges ? n.changes(!0, 64 === s.countChanges) : void 0;
                                                            n.exec(s), void 0 !== e && (s.changeCount = n.changes(!0, 64 === s.countChanges) - e), s.callback instanceof Function && ((s.callback = r), i.post({ type: r, columnNames: s.columnNames, rowNumber: null, row: void 0 }));
                                                        } finally {
                                                            delete n._blobXfer, s.callback && (s.callback = r);
                                                        }
                                                        return s;
                                                    },
                                                    "config-get": function () {
                                                        const e = Object.create(null),
                                                            t = s.config;
                                                        return (
                                                            ["bigIntEnabled"].forEach(function (s) {
                                                                Object.getOwnPropertyDescriptor(t, s) && (e[s] = t[s]);
                                                            }),
                                                            (e.version = s.version),
                                                            (e.vfsList = s.capi.sqlite3_js_vfs_list()),
                                                            e
                                                        );
                                                    },
                                                    export: function (e) {
                                                        const t = o(e),
                                                            n = { byteArray: s.capi.sqlite3_js_db_export(t.pointer), filename: t.filename, mimetype: "application/x-sqlite3" };
                                                        return i.xfer.push(n.byteArray.buffer), n;
                                                    },
                                                    toss: function (t) {
                                                        e("Testing worker exception");
                                                    },
                                                };
                                            (globalThis.onmessage = async function (t) {
                                                let s,
                                                    n = (t = t.data).dbId,
                                                    o = t.type;
                                                const l = performance.now();
                                                try {
                                                    a.hasOwnProperty(o) && a[o] instanceof Function ? (s = await a[o](t)) : e("Unknown db worker message type:", t.type);
                                                } catch (e) {
                                                    (o = "error"), (s = { operation: t.type, message: e.message, errorClass: e.name, input: t }), e.stack && (s.stack = "string" == typeof e.stack ? e.stack.split(/\n\s*/) : e.stack);
                                                }
                                                n || (n = s.dbId || (i.dbList[0] && r(i.dbList[0]))), i.post({ type: o, dbId: n, messageId: t.messageId, workerReceivedTime: l, workerRespondTime: performance.now(), departureTime: t.departureTime, result: s }, i.xfer);
                                            }),
                                                globalThis.postMessage({ type: "sqlite3-api", result: "worker1-ready" });
                                        }.bind({ sqlite3: e });
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = e.wasm,
                                            s = e.capi,
                                            n = e.util.toss3,
                                            r = Object.create(null);
                                        (e.vfs = r),
                                            (s.sqlite3_vfs.prototype.registerVfs = function (t = !1) {
                                                this instanceof e.capi.sqlite3_vfs || n("Expecting a sqlite3_vfs-type argument.");
                                                const r = s.sqlite3_vfs_register(this, t ? 1 : 0);
                                                return r && n("sqlite3_vfs_register(", this, ") failed with rc", r), this.pointer !== s.sqlite3_vfs_find(this.$zName) && n("BUG: sqlite3_vfs_find(vfs.$zName) failed for just-installed VFS", this), this;
                                            }),
                                            (r.installVfs = function (e) {
                                                let s = 0;
                                                const r = ["io", "vfs"];
                                                for (const n of r) {
                                                    const r = e[n];
                                                    r && (++s, r.struct.installMethods(r.methods, !!r.applyArgcCheck), "vfs" === n && (r.struct.$zName || "string" != typeof r.name || r.struct.addOnDispose((r.struct.$zName = t.allocCString(r.name))), r.struct.registerVfs(!!r.asDefault)));
                                                }
                                                return s || n("Misuse: installVfs() options object requires at least", "one of:", r), this;
                                            });
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        if (!e.wasm.exports.sqlite3_declare_vtab) return;
                                        const t = e.wasm,
                                            s = e.capi,
                                            n = e.util.toss3,
                                            r = Object.create(null);
                                        e.vtab = r;
                                        const i = s.sqlite3_index_info;
                                        (i.prototype.nthConstraint = function (e, t = !1) {
                                            if (e < 0 || e >= this.$nConstraint) return !1;
                                            const s = this.$aConstraint + i.sqlite3_index_constraint.structInfo.sizeof * e;
                                            return t ? s : new i.sqlite3_index_constraint(s);
                                        }),
                                            (i.prototype.nthConstraintUsage = function (e, t = !1) {
                                                if (e < 0 || e >= this.$nConstraint) return !1;
                                                const s = this.$aConstraintUsage + i.sqlite3_index_constraint_usage.structInfo.sizeof * e;
                                                return t ? s : new i.sqlite3_index_constraint_usage(s);
                                            }),
                                            (i.prototype.nthOrderBy = function (e, t = !1) {
                                                if (e < 0 || e >= this.$nOrderBy) return !1;
                                                const s = this.$aOrderBy + i.sqlite3_index_orderby.structInfo.sizeof * e;
                                                return t ? s : new i.sqlite3_index_orderby(s);
                                            });
                                        const o = function (s, n) {
                                            const r = (function (s, n) {
                                                return function (r, i = !1) {
                                                    if ((0 === arguments.length && (r = new n()), r instanceof n)) return this.set(r.pointer, r), r;
                                                    t.isPtr(r) || e.SQLite3Error.toss("Invalid argument to", s + "()");
                                                    let o = this.get(r);
                                                    return i && this.delete(r), o;
                                                }.bind(new Map());
                                            })(s, n);
                                            return Object.assign(Object.create(null), {
                                                StructType: n,
                                                create: (e) => {
                                                    const s = r();
                                                    return t.pokePtr(e, s.pointer), s;
                                                },
                                                get: (e) => r(e),
                                                unget: (e) => r(e, !0),
                                                dispose: (e) => {
                                                    const t = r(e, !0);
                                                    t && t.dispose();
                                                },
                                            });
                                        };
                                        (r.xVtab = o("xVtab", s.sqlite3_vtab)),
                                            (r.xCursor = o("xCursor", s.sqlite3_vtab_cursor)),
                                            (r.xIndexInfo = (e) => new s.sqlite3_index_info(e)),
                                            (r.xError = function t(n, r, i) {
                                                if (t.errorReporter instanceof Function)
                                                    try {
                                                        t.errorReporter("sqlite3_module::" + n + "(): " + r.message);
                                                    } catch (e) {}
                                                let o;
                                                return r instanceof e.WasmAllocError ? (o = s.SQLITE_NOMEM) : arguments.length > 2 ? (o = i) : r instanceof e.SQLite3Error && (o = r.resultCode), o || s.SQLITE_ERROR;
                                            }),
                                            (r.xError.errorReporter = function () {}.bind()),
                                            (r.xRowid = (e, s) => t.poke(e, s, "i64")),
                                            (r.setupModule = function (i) {
                                                let o = !1;
                                                const a = this instanceof s.sqlite3_module ? this : i.struct || (o = new s.sqlite3_module());
                                                try {
                                                    const s = i.methods || n("Missing 'methods' object.");
                                                    for (const e of Object.entries({ xConnect: "xCreate", xDisconnect: "xDestroy" })) {
                                                        const t = e[0],
                                                            n = e[1];
                                                        !0 === s[t] ? (s[t] = s[n]) : !0 === s[n] && (s[n] = s[t]);
                                                    }
                                                    if (i.catchExceptions) {
                                                        const n = function (s, n) {
                                                                return ["xConnect", "xCreate"].indexOf(s) >= 0
                                                                    ? function (i, o, a, l, c, _) {
                                                                          try {
                                                                              return n(...arguments) || 0;
                                                                          } catch (n) {
                                                                              return n instanceof e.WasmAllocError || (t.dealloc(t.peekPtr(_)), t.pokePtr(_, t.allocCString(n.message))), r.xError(s, n);
                                                                          }
                                                                      }
                                                                    : function (...e) {
                                                                          try {
                                                                              return n(...e) || 0;
                                                                          } catch (e) {
                                                                              return r.xError(s, e);
                                                                          }
                                                                      };
                                                            },
                                                            i = ["xCreate", "xConnect", "xBestIndex", "xDisconnect", "xDestroy", "xOpen", "xClose", "xFilter", "xNext", "xEof", "xColumn", "xRowid", "xUpdate", "xBegin", "xSync", "xCommit", "xRollback", "xFindFunction", "xRename", "xSavepoint", "xRelease", "xRollbackTo", "xShadowName"],
                                                            o = Object.create(null);
                                                        for (const e of i) {
                                                            const t = s[e];
                                                            t instanceof Function && ("xConnect" === e && s.xCreate === t ? (o[e] = s.xCreate) : "xCreate" === e && s.xConnect === t ? (o[e] = s.xConnect) : (o[e] = n(e, t)));
                                                        }
                                                        a.installMethods(o, !1);
                                                    } else a.installMethods(s, !!i.applyArgcCheck);
                                                    if (0 === a.$iVersion) {
                                                        let e;
                                                        (e = "number" == typeof i.iVersion ? i.iVersion : a.$xShadowName ? 3 : a.$xSavePoint || a.$xRelease || a.$xRollbackTo ? 2 : 1), (a.$iVersion = e);
                                                    }
                                                } catch (e) {
                                                    throw (o && o.dispose(), e);
                                                }
                                                return a;
                                            }),
                                            (s.sqlite3_module.prototype.setupModule = function (e) {
                                                return r.setupModule.call(this, e);
                                            });
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = function t(n) {
                                            if (!globalThis.SharedArrayBuffer || !globalThis.Atomics) return Promise.reject(new Error("Cannot install OPFS: Missing SharedArrayBuffer and/or Atomics. The server must emit the COOP/COEP response headers to enable those. See https://sqlite.org/wasm/doc/trunk/persistence.md#coop-coep"));
                                            if ("undefined" == typeof WorkerGlobalScope) return Promise.reject(new Error("The OPFS sqlite3_vfs cannot run in the main thread because it requires Atomics.wait()."));
                                            if (!(globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle && globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle && navigator?.storage?.getDirectory)) return Promise.reject(new Error("Missing required OPFS APIs."));
                                            (n && "object" == typeof n) || (n = Object.create(null));
                                            const r = new URL(globalThis.location.href).searchParams;
                                            if (r.has("opfs-disable")) return Promise.resolve(e);
                                            void 0 === n.verbose && (n.verbose = r.has("opfs-verbose") ? +r.get("opfs-verbose") || 2 : 1), void 0 === n.sanityChecks && (n.sanityChecks = r.has("opfs-sanity-check")), void 0 === n.proxyUri && (n.proxyUri = t.defaultProxyUri), "function" == typeof n.proxyUri && (n.proxyUri = n.proxyUri());
                                            const i = new Promise(function (t, r) {
                                                const i = [e.config.error, e.config.warn, e.config.log],
                                                    o = (e, ...t) => {
                                                        n.verbose > e && i[e]("OPFS syncer:", ...t);
                                                    },
                                                    a = (...e) => o(2, ...e),
                                                    l = (...e) => o(1, ...e),
                                                    c = (...e) => o(0, ...e),
                                                    _ = e.util.toss,
                                                    u = e.capi,
                                                    d = e.util,
                                                    f = e.wasm,
                                                    p = u.sqlite3_vfs,
                                                    m = u.sqlite3_file,
                                                    h = u.sqlite3_io_methods,
                                                    g = Object.create(null);
                                                g.metrics = {
                                                    dump: function () {
                                                        let t,
                                                            s = 0,
                                                            n = 0,
                                                            r = 0;
                                                        for (t in A.opIds) {
                                                            const e = I[t];
                                                            (s += e.count), (n += e.time), (r += e.wait), (e.avgTime = e.count && e.time ? e.time / e.count : 0), (e.avgWait = e.count && e.wait ? e.wait / e.count : 0);
                                                        }
                                                        e.config.log(globalThis.location.href, "metrics for", globalThis.location.href, ":", I, "\nTotal of", s, "op(s) for", n, "ms (incl. " + r + " ms of waiting on the async side)"), e.config.log("Serialization metrics:", I.s11n), E.postMessage({ type: "opfs-async-metrics" });
                                                    },
                                                    reset: function () {
                                                        let e;
                                                        for (e in A.opIds) (t = I[e] = Object.create(null)).count = t.time = t.wait = 0;
                                                        var t;
                                                        let s = (I.s11n = Object.create(null));
                                                        (s = s.serialize = Object.create(null)), (s.count = s.time = 0), (s = I.s11n.deserialize = Object.create(null)), (s.count = s.time = 0);
                                                    },
                                                };
                                                const q = new h(),
                                                    b = new p().addOnDispose(() => q.dispose());
                                                let y;
                                                const w = (e) => ((y = !0), b.dispose(), r(e)),
                                                    v = () => ((y = !1), t(e)),
                                                    E = new Worker(new URL(s.p + s.u("node_modules_sqlite_org_sqlite-wasm_sqlite-wasm_jswasm_sqlite3-opfs-async-proxy_js"), s.b));
                                                setTimeout(() => {
                                                    void 0 === y && w(new Error("Timeout while waiting for OPFS async proxy worker."));
                                                }, 4e3),
                                                    (E._originalOnError = E.onerror),
                                                    (E.onerror = function (e) {
                                                        c("Error initializing OPFS asyncer:", e), w(new Error("Loading OPFS async Worker failed for unknown reasons."));
                                                    });
                                                const S = u.sqlite3_vfs_find(null),
                                                    x = S ? new p(S) : null;
                                                (q.$iVersion = 1), (b.$iVersion = 2), (b.$szOsFile = u.sqlite3_file.structInfo.sizeof), (b.$mxPathname = 1024), (b.$zName = f.allocCString("opfs")), (b.$xDlOpen = b.$xDlError = b.$xDlSym = b.$xDlClose = null), b.addOnDispose("$zName", b.$zName, "cleanup default VFS wrapper", () => (x ? x.dispose() : null));
                                                const A = Object.create(null);
                                                (A.verbose = n.verbose),
                                                    (A.littleEndian = (() => {
                                                        const e = new ArrayBuffer(2);
                                                        return new DataView(e).setInt16(0, 256, !0), 256 === new Int16Array(e)[0];
                                                    })()),
                                                    (A.asyncIdleWaitTime = 150),
                                                    (A.asyncS11nExceptions = 1),
                                                    (A.fileBufferSize = 65536),
                                                    (A.sabS11nOffset = A.fileBufferSize),
                                                    (A.sabS11nSize = 2 * b.$mxPathname),
                                                    (A.sabIO = new SharedArrayBuffer(A.fileBufferSize + A.sabS11nSize)),
                                                    (A.opIds = Object.create(null));
                                                const I = Object.create(null);
                                                {
                                                    let e = 0;
                                                    (A.opIds.whichOp = e++), (A.opIds.rc = e++), (A.opIds.xAccess = e++), (A.opIds.xClose = e++), (A.opIds.xDelete = e++), (A.opIds.xDeleteNoWait = e++), (A.opIds.xFileSize = e++), (A.opIds.xLock = e++), (A.opIds.xOpen = e++), (A.opIds.xRead = e++), (A.opIds.xSleep = e++), (A.opIds.xSync = e++), (A.opIds.xTruncate = e++), (A.opIds.xUnlock = e++), (A.opIds.xWrite = e++), (A.opIds.mkdir = e++), (A.opIds["opfs-async-metrics"] = e++), (A.opIds["opfs-async-shutdown"] = e++), (A.opIds.retry = e++), (A.sabOP = new SharedArrayBuffer(4 * e)), g.metrics.reset();
                                                }
                                                (A.sq3Codes = Object.create(null)),
                                                    ["SQLITE_ACCESS_EXISTS", "SQLITE_ACCESS_READWRITE", "SQLITE_BUSY", "SQLITE_CANTOPEN", "SQLITE_ERROR", "SQLITE_IOERR", "SQLITE_IOERR_ACCESS", "SQLITE_IOERR_CLOSE", "SQLITE_IOERR_DELETE", "SQLITE_IOERR_FSYNC", "SQLITE_IOERR_LOCK", "SQLITE_IOERR_READ", "SQLITE_IOERR_SHORT_READ", "SQLITE_IOERR_TRUNCATE", "SQLITE_IOERR_UNLOCK", "SQLITE_IOERR_WRITE", "SQLITE_LOCK_EXCLUSIVE", "SQLITE_LOCK_NONE", "SQLITE_LOCK_PENDING", "SQLITE_LOCK_RESERVED", "SQLITE_LOCK_SHARED", "SQLITE_LOCKED", "SQLITE_MISUSE", "SQLITE_NOTFOUND", "SQLITE_OPEN_CREATE", "SQLITE_OPEN_DELETEONCLOSE", "SQLITE_OPEN_MAIN_DB", "SQLITE_OPEN_READONLY"].forEach((e) => {
                                                        void 0 === (A.sq3Codes[e] = u[e]) && _("Maintenance required: not found:", e);
                                                    }),
                                                    (A.opfsFlags = Object.assign(Object.create(null), { OPFS_UNLOCK_ASAP: 1, OPFS_UNLINK_BEFORE_OPEN: 2, defaultUnlockAsap: !1 }));
                                                const k = (e, ...t) => {
                                                    const s = A.opIds[e] || _("Invalid op ID:", e);
                                                    A.s11n.serialize(...t), Atomics.store(A.sabOPView, A.opIds.rc, -1), Atomics.store(A.sabOPView, A.opIds.whichOp, s), Atomics.notify(A.sabOPView, A.opIds.whichOp);
                                                    const n = performance.now();
                                                    for (; "not-equal" !== Atomics.wait(A.sabOPView, A.opIds.rc, -1); );
                                                    const r = Atomics.load(A.sabOPView, A.opIds.rc);
                                                    if (((I[e].wait += performance.now() - n), r && A.asyncS11nExceptions)) {
                                                        const t = A.s11n.deserialize();
                                                        t && c(e + "() async error:", ...t);
                                                    }
                                                    return r;
                                                };
                                                g.debug = {
                                                    asyncShutdown: () => {
                                                        l("Shutting down OPFS async listener. The OPFS VFS will no longer work."), k("opfs-async-shutdown");
                                                    },
                                                    asyncRestart: () => {
                                                        l("Attempting to restart OPFS VFS async listener. Might work, might not."), E.postMessage({ type: "opfs-async-restart" });
                                                    },
                                                };
                                                const T = function e(t = 16) {
                                                        e._chars || (e._n = (e._chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789").length);
                                                        const s = [];
                                                        let n = 0;
                                                        for (; n < t; ++n) {
                                                            const t = (Math.random() * (64 * e._n)) % e._n | 0;
                                                            s[n] = e._chars[t];
                                                        }
                                                        return s.join("");
                                                    },
                                                    F = Object.create(null),
                                                    O = Object.create(null);
                                                (O.op = void 0), (O.start = void 0);
                                                const P = (e) => {
                                                        (O.start = performance.now()), (O.op = e), ++I[e].count;
                                                    },
                                                    L = () => (I[O.op].time += performance.now() - O.start),
                                                    C = {
                                                        xCheckReservedLock: function (e, t) {
                                                            return f.poke(t, 0, "i32"), 0;
                                                        },
                                                        xClose: function (e) {
                                                            P("xClose");
                                                            let t = 0;
                                                            const s = F[e];
                                                            return s && (delete F[e], (t = k("xClose", e)), s.sq3File && s.sq3File.dispose()), L(), t;
                                                        },
                                                        xDeviceCharacteristics: function (e) {
                                                            return u.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
                                                        },
                                                        xFileControl: function (e, t, s) {
                                                            return u.SQLITE_NOTFOUND;
                                                        },
                                                        xFileSize: function (e, t) {
                                                            P("xFileSize");
                                                            let s = k("xFileSize", e);
                                                            if (0 == s)
                                                                try {
                                                                    const e = A.s11n.deserialize()[0];
                                                                    f.poke(t, e, "i64");
                                                                } catch (e) {
                                                                    c("Unexpected error reading xFileSize() result:", e), (s = A.sq3Codes.SQLITE_IOERR);
                                                                }
                                                            return L(), s;
                                                        },
                                                        xLock: function (e, t) {
                                                            P("xLock");
                                                            const s = F[e];
                                                            let n = 0;
                                                            return s.lockType ? (s.lockType = t) : ((n = k("xLock", e, t)), 0 === n && (s.lockType = t)), L(), n;
                                                        },
                                                        xRead: function (e, t, s, n) {
                                                            P("xRead");
                                                            const r = F[e];
                                                            let i;
                                                            try {
                                                                (i = k("xRead", e, s, Number(n))), (0 !== i && u.SQLITE_IOERR_SHORT_READ !== i) || f.heap8u().set(r.sabView.subarray(0, s), t);
                                                            } catch (e) {
                                                                c("xRead(", arguments, ") failed:", e, r), (i = u.SQLITE_IOERR_READ);
                                                            }
                                                            return L(), i;
                                                        },
                                                        xSync: function (e, t) {
                                                            P("xSync"), ++I.xSync.count;
                                                            const s = k("xSync", e, t);
                                                            return L(), s;
                                                        },
                                                        xTruncate: function (e, t) {
                                                            P("xTruncate");
                                                            const s = k("xTruncate", e, Number(t));
                                                            return L(), s;
                                                        },
                                                        xUnlock: function (e, t) {
                                                            P("xUnlock");
                                                            const s = F[e];
                                                            let n = 0;
                                                            return u.SQLITE_LOCK_NONE === t && s.lockType && (n = k("xUnlock", e, t)), 0 === n && (s.lockType = t), L(), n;
                                                        },
                                                        xWrite: function (e, t, s, n) {
                                                            P("xWrite");
                                                            const r = F[e];
                                                            let i;
                                                            try {
                                                                r.sabView.set(f.heap8u().subarray(t, t + s)), (i = k("xWrite", e, s, Number(n)));
                                                            } catch (e) {
                                                                c("xWrite(", arguments, ") failed:", e, r), (i = u.SQLITE_IOERR_WRITE);
                                                            }
                                                            return L(), i;
                                                        },
                                                    },
                                                    N = {
                                                        xAccess: function (e, t, s, n) {
                                                            P("xAccess");
                                                            const r = k("xAccess", f.cstrToJs(t));
                                                            return f.poke(n, r ? 0 : 1, "i32"), L(), 0;
                                                        },
                                                        xCurrentTime: function (e, t) {
                                                            return f.poke(t, 2440587.5 + new Date().getTime() / 864e5, "double"), 0;
                                                        },
                                                        xCurrentTimeInt64: function (e, t) {
                                                            return f.poke(t, 21086676e7 + new Date().getTime(), "i64"), 0;
                                                        },
                                                        xDelete: function (e, t, s) {
                                                            P("xDelete");
                                                            const n = k("xDelete", f.cstrToJs(t), s, !1);
                                                            return L(), n;
                                                        },
                                                        xFullPathname: function (e, t, s, n) {
                                                            return f.cstrncpy(n, t, s) < s ? 0 : u.SQLITE_CANTOPEN;
                                                        },
                                                        xGetLastError: function (e, t, s) {
                                                            return l("OPFS xGetLastError() has nothing sensible to return."), 0;
                                                        },
                                                        xOpen: function (t, s, n, r, i) {
                                                            P("xOpen");
                                                            let o = 0;
                                                            0 === s ? (s = T()) : f.isPtr(s) && (u.sqlite3_uri_boolean(s, "opfs-unlock-asap", 0) && (o |= A.opfsFlags.OPFS_UNLOCK_ASAP), u.sqlite3_uri_boolean(s, "delete-before-open", 0) && (o |= A.opfsFlags.OPFS_UNLINK_BEFORE_OPEN), (s = f.cstrToJs(s)));
                                                            const a = Object.create(null);
                                                            (a.fid = n), (a.filename = s), (a.sab = new SharedArrayBuffer(A.fileBufferSize)), (a.flags = r), (a.readOnly = !(e.SQLITE_OPEN_CREATE & r || !(r & u.SQLITE_OPEN_READONLY)));
                                                            const l = k("xOpen", n, s, r, o);
                                                            return l || (a.readOnly && f.poke(i, u.SQLITE_OPEN_READONLY, "i32"), (F[n] = a), (a.sabView = A.sabFileBufView), (a.sq3File = new m(n)), (a.sq3File.$pMethods = q.pointer), (a.lockType = u.SQLITE_LOCK_NONE)), L(), l;
                                                        },
                                                    };
                                                if (
                                                    (x && ((b.$xRandomness = x.$xRandomness), (b.$xSleep = x.$xSleep)),
                                                    b.$xRandomness ||
                                                        (N.xRandomness = function (e, t, s) {
                                                            const n = f.heap8u();
                                                            let r = 0;
                                                            for (; r < t; ++r) n[s + r] = (255e3 * Math.random()) & 255;
                                                            return r;
                                                        }),
                                                    b.$xSleep ||
                                                        (N.xSleep = function (e, t) {
                                                            return Atomics.wait(A.sabOPView, A.opIds.xSleep, 0, t), 0;
                                                        }),
                                                    (g.getResolvedPath = function (e, t) {
                                                        const s = new URL(e, "file://irrelevant").pathname;
                                                        return t ? s.split("/").filter((e) => !!e) : s;
                                                    }),
                                                    (g.getDirForFilename = async function (e, t = !1) {
                                                        const s = g.getResolvedPath(e, !0),
                                                            n = s.pop();
                                                        let r = g.rootDirectory;
                                                        for (const e of s) e && (r = await r.getDirectoryHandle(e, { create: !!t }));
                                                        return [r, n];
                                                    }),
                                                    (g.mkdir = async function (e) {
                                                        try {
                                                            return await g.getDirForFilename(e + "/filepart", !0), !0;
                                                        } catch (e) {
                                                            return !1;
                                                        }
                                                    }),
                                                    (g.entryExists = async function (e) {
                                                        try {
                                                            const [t, s] = await g.getDirForFilename(e);
                                                            return await t.getFileHandle(s), !0;
                                                        } catch (e) {
                                                            return !1;
                                                        }
                                                    }),
                                                    (g.randomFilename = T),
                                                    (g.treeList = async function () {
                                                        const e = Object.create(null);
                                                        return (
                                                            await (async function e(t, s) {
                                                                (s.name = t.name), (s.dirs = []), (s.files = []);
                                                                for await (const n of t.values())
                                                                    if ("directory" === n.kind) {
                                                                        const t = Object.create(null);
                                                                        s.dirs.push(t), await e(n, t);
                                                                    } else s.files.push(n.name);
                                                            })(g.rootDirectory, e),
                                                            e
                                                        );
                                                    }),
                                                    (g.rmfr = async function () {
                                                        const e = g.rootDirectory,
                                                            t = { recurse: !0 };
                                                        for await (const s of e.values()) e.removeEntry(s.name, t);
                                                    }),
                                                    (g.unlink = async function (e, t = !1, s = !1) {
                                                        try {
                                                            const [s, n] = await g.getDirForFilename(e, !1);
                                                            return await s.removeEntry(n, { recursive: t }), !0;
                                                        } catch (e) {
                                                            if (s) throw new Error("unlink(", arguments[0], ") failed: " + e.message, { cause: e });
                                                            return !1;
                                                        }
                                                    }),
                                                    (g.traverse = async function (e) {
                                                        const t = { recursive: !0, directory: g.rootDirectory };
                                                        "function" == typeof e && (e = { callback: e }),
                                                            (async function t(s, n) {
                                                                for await (const r of s.values()) {
                                                                    if (!1 === e.callback(r, s, n)) return !1;
                                                                    if (e.recursive && "directory" === r.kind && !1 === (await t(r, n + 1))) break;
                                                                }
                                                            })((e = Object.assign(t, e || {})).directory, 0);
                                                    }),
                                                    (g.importDb = async function (e, t) {
                                                        if (t instanceof Function)
                                                            return (async function (e, t) {
                                                                const [s, n] = await g.getDirForFilename(e, !0),
                                                                    r = await s.getFileHandle(n, { create: !0 });
                                                                let i,
                                                                    o = await r.createSyncAccessHandle(),
                                                                    a = 0,
                                                                    l = !1;
                                                                try {
                                                                    for (o.truncate(0); void 0 !== (i = await t()); ) i instanceof ArrayBuffer && (i = new Uint8Array(i)), 0 === a && i.byteLength >= 15 && (d.affirmDbHeader(i), (l = !0)), o.write(i, { at: a }), (a += i.byteLength);
                                                                    if (((a < 512 || 0 != a % 512) && _("Input size", a, "is not correct for an SQLite database."), !l)) {
                                                                        const e = new Uint8Array(20);
                                                                        o.read(e, { at: 0 }), d.affirmDbHeader(e);
                                                                    }
                                                                    return o.write(new Uint8Array([1, 1]), { at: 18 }), a;
                                                                } catch (e) {
                                                                    throw (await o.close(), (o = void 0), await s.removeEntry(n).catch(() => {}), e);
                                                                } finally {
                                                                    o && (await o.close());
                                                                }
                                                            })(e, t);
                                                        t instanceof ArrayBuffer && (t = new Uint8Array(t)), d.affirmIsDb(t);
                                                        const s = t.byteLength,
                                                            [n, r] = await g.getDirForFilename(e, !0);
                                                        let i,
                                                            o = 0;
                                                        try {
                                                            const e = await n.getFileHandle(r, { create: !0 });
                                                            return (i = await e.createSyncAccessHandle()), i.truncate(0), (o = i.write(t, { at: 0 })), o != s && _("Expected to write " + s + " bytes but wrote " + o + "."), i.write(new Uint8Array([1, 1]), { at: 18 }), o;
                                                        } catch (e) {
                                                            throw (i && (await i.close(), (i = void 0)), await n.removeEntry(r).catch(() => {}), e);
                                                        } finally {
                                                            i && (await i.close());
                                                        }
                                                    }),
                                                    e.oo1)
                                                ) {
                                                    const t = function (...t) {
                                                        const s = e.oo1.DB.dbCtorHelper.normalizeArgs(...t);
                                                        (s.vfs = b.$zName), e.oo1.DB.dbCtorHelper.call(this, s);
                                                    };
                                                    (t.prototype = Object.create(e.oo1.DB.prototype)),
                                                        (e.oo1.OpfsDb = t),
                                                        (t.importDb = g.importDb),
                                                        e.oo1.DB.dbCtorHelper.setVfsPostOpenCallback(b.pointer, function (e, t) {
                                                            t.capi.sqlite3_busy_timeout(e, 1e4);
                                                        });
                                                }
                                                E.onmessage = function ({ data: t }) {
                                                    switch (t.type) {
                                                        case "opfs-unavailable":
                                                            w(new Error(t.payload.join(" ")));
                                                            break;
                                                        case "opfs-async-loaded":
                                                            E.postMessage({ type: "opfs-async-init", args: A });
                                                            break;
                                                        case "opfs-async-inited":
                                                            if (!0 === y) break;
                                                            try {
                                                                e.vfs.installVfs({ io: { struct: q, methods: C }, vfs: { struct: b, methods: N } }),
                                                                    (A.sabOPView = new Int32Array(A.sabOP)),
                                                                    (A.sabFileBufView = new Uint8Array(A.sabIO, 0, A.fileBufferSize)),
                                                                    (A.sabS11nView = new Uint8Array(A.sabIO, A.sabS11nOffset, A.sabS11nSize)),
                                                                    (() => {
                                                                        if (A.s11n) return A.s11n;
                                                                        const e = new TextDecoder(),
                                                                            t = new TextEncoder("utf-8"),
                                                                            s = new Uint8Array(A.sabIO, A.sabS11nOffset, A.sabS11nSize),
                                                                            n = new DataView(A.sabIO, A.sabS11nOffset, A.sabS11nSize);
                                                                        A.s11n = Object.create(null);
                                                                        const r = Object.create(null);
                                                                        (r.number = { id: 1, size: 8, getter: "getFloat64", setter: "setFloat64" }), (r.bigint = { id: 2, size: 8, getter: "getBigInt64", setter: "setBigInt64" }), (r.boolean = { id: 3, size: 4, getter: "getInt32", setter: "setInt32" }), (r.string = { id: 4 });
                                                                        const i = (e) => r[typeof e] || _("Maintenance required: this value type cannot be serialized.", e),
                                                                            o = (e) => {
                                                                                switch (e) {
                                                                                    case r.number.id:
                                                                                        return r.number;
                                                                                    case r.bigint.id:
                                                                                        return r.bigint;
                                                                                    case r.boolean.id:
                                                                                        return r.boolean;
                                                                                    case r.string.id:
                                                                                        return r.string;
                                                                                    default:
                                                                                        _("Invalid type ID:", e);
                                                                                }
                                                                            };
                                                                        (A.s11n.deserialize = function (t = !1) {
                                                                            ++I.s11n.deserialize.count;
                                                                            const r = performance.now(),
                                                                                i = s[0],
                                                                                a = i ? [] : null;
                                                                            if (i) {
                                                                                const t = [];
                                                                                let r,
                                                                                    l,
                                                                                    c,
                                                                                    _ = 1;
                                                                                for (r = 0; r < i; ++r, ++_) t.push(o(s[_]));
                                                                                for (r = 0; r < i; ++r) {
                                                                                    const i = t[r];
                                                                                    i.getter ? ((c = n[i.getter](_, A.littleEndian)), (_ += i.size)) : ((l = n.getInt32(_, A.littleEndian)), (_ += 4), (c = e.decode(s.slice(_, _ + l))), (_ += l)), a.push(c);
                                                                                }
                                                                            }
                                                                            return t && (s[0] = 0), (I.s11n.deserialize.time += performance.now() - r), a;
                                                                        }),
                                                                            (A.s11n.serialize = function (...e) {
                                                                                const r = performance.now();
                                                                                if ((++I.s11n.serialize.count, e.length)) {
                                                                                    const r = [];
                                                                                    let o = 0,
                                                                                        a = 1;
                                                                                    for (s[0] = 255 & e.length; o < e.length; ++o, ++a) r.push(i(e[o])), (s[a] = r[o].id);
                                                                                    for (o = 0; o < e.length; ++o) {
                                                                                        const i = r[o];
                                                                                        if (i.setter) n[i.setter](a, e[o], A.littleEndian), (a += i.size);
                                                                                        else {
                                                                                            const r = t.encode(e[o]);
                                                                                            n.setInt32(a, r.byteLength, A.littleEndian), (a += 4), s.set(r, a), (a += r.byteLength);
                                                                                        }
                                                                                    }
                                                                                } else s[0] = 0;
                                                                                I.s11n.serialize.time += performance.now() - r;
                                                                            }),
                                                                            A.s11n;
                                                                    })(),
                                                                    n.sanityChecks &&
                                                                        (l("Running sanity checks because of opfs-sanity-check URL arg..."),
                                                                        (function () {
                                                                            const e = f.scopedAllocPush(),
                                                                                t = new m();
                                                                            try {
                                                                                const e = t.pointer,
                                                                                    s = u.SQLITE_OPEN_CREATE | u.SQLITE_OPEN_READWRITE | u.SQLITE_OPEN_MAIN_DB,
                                                                                    n = f.scopedAlloc(8),
                                                                                    r = "/sanity/check/file" + T(8),
                                                                                    i = f.scopedAllocCString(r);
                                                                                let o;
                                                                                if ((A.s11n.serialize("This is ä string."), (o = A.s11n.deserialize()), a("deserialize() says:", o), "This is ä string." !== o[0] && _("String d13n error."), N.xAccess(b.pointer, i, 0, n), (o = f.peek(n, "i32")), a("xAccess(", r, ") exists ?=", o), (o = N.xOpen(b.pointer, i, e, s, n)), a("open rc =", o, "state.sabOPView[xOpen] =", A.sabOPView[A.opIds.xOpen]), 0 !== o)) return void c("open failed with code", o);
                                                                                N.xAccess(b.pointer, i, 0, n), (o = f.peek(n, "i32")), o || _("xAccess() failed to detect file."), (o = C.xSync(t.pointer, 0)), o && _("sync failed w/ rc", o), (o = C.xTruncate(t.pointer, 1024)), o && _("truncate failed w/ rc", o), f.poke(n, 0, "i64"), (o = C.xFileSize(t.pointer, n)), o && _("xFileSize failed w/ rc", o), a("xFileSize says:", f.peek(n, "i64")), (o = C.xWrite(t.pointer, i, 10, 1)), o && _("xWrite() failed!");
                                                                                const d = f.scopedAlloc(16);
                                                                                (o = C.xRead(t.pointer, d, 6, 2)), f.poke(d + 6, 0);
                                                                                let p = f.cstrToJs(d);
                                                                                a("xRead() got:", p), "sanity" !== p && _("Unexpected xRead() value."), N.xSleep && (a("xSleep()ing before close()ing..."), N.xSleep(b.pointer, 2e3), a("waking up from xSleep()")), (o = C.xClose(e)), a("xClose rc =", o, "sabOPView =", A.sabOPView), a("Deleting file:", r), N.xDelete(b.pointer, i, 4660), N.xAccess(b.pointer, i, 0, n), (o = f.peek(n, "i32")), o && _("Expecting 0 from xAccess(", r, ") after xDelete()."), l("End of OPFS sanity checks.");
                                                                            } finally {
                                                                                t.dispose(), f.scopedAllocPop(e);
                                                                            }
                                                                        })()),
                                                                    globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle && globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle && navigator?.storage?.getDirectory
                                                                        ? navigator.storage
                                                                              .getDirectory()
                                                                              .then((t) => {
                                                                                  (E.onerror = E._originalOnError), delete E._originalOnError, (e.opfs = g), (g.rootDirectory = t), a("End of OPFS sqlite3_vfs setup.", b), v();
                                                                              })
                                                                              .catch(w)
                                                                        : v();
                                                            } catch (e) {
                                                                c(e), w(e);
                                                            }
                                                            break;
                                                        default: {
                                                            const e = "Unexpected message from the OPFS async worker: " + JSON.stringify(t);
                                                            c(e), w(new Error(e));
                                                            break;
                                                        }
                                                    }
                                                };
                                            });
                                            return i;
                                        };
                                        (t.defaultProxyUri = "sqlite3-opfs-async-proxy.js"),
                                            globalThis.sqlite3ApiBootstrap.initializersAsync.push(async (e) => {
                                                try {
                                                    let s = t.defaultProxyUri;
                                                    return (
                                                        e.scriptInfo.sqlite3Dir && (t.defaultProxyUri = e.scriptInfo.sqlite3Dir + s),
                                                        t().catch((t) => {
                                                            e.config.warn("Ignoring inability to install OPFS sqlite3_vfs:", t.message);
                                                        })
                                                    );
                                                } catch (t) {
                                                    return e.config.error("installOpfsVfs() exception:", t), Promise.reject(t);
                                                }
                                            });
                                    }),
                                    globalThis.sqlite3ApiBootstrap.initializers.push(function (e) {
                                        const t = e.util.toss,
                                            s = e.util.toss3,
                                            n = Object.create(null),
                                            r = e.capi,
                                            i = e.util,
                                            o = e.wasm,
                                            a = 512,
                                            l = 4096,
                                            c = r.SQLITE_OPEN_MAIN_DB | r.SQLITE_OPEN_MAIN_JOURNAL | r.SQLITE_OPEN_SUPER_JOURNAL | r.SQLITE_OPEN_WAL,
                                            _ = ".opaque",
                                            u = () => Math.random().toString(36).slice(2),
                                            d = new TextDecoder(),
                                            f = new TextEncoder(),
                                            p = Object.assign(Object.create(null), { name: "opfs-sahpool", directory: void 0, initialCapacity: 6, clearOnInit: !1, verbosity: 2, forceReinitIfPreviouslyFailed: !1 }),
                                            m = [e.config.error, e.config.warn, e.config.log],
                                            h = (e.config.log, e.config.warn),
                                            g = (e.config.error, new Map()),
                                            q = (e) => g.get(e),
                                            b = (e, t) => {
                                                t ? g.set(e, t) : g.delete(e);
                                            },
                                            y = new Map(),
                                            w = (e) => y.get(e),
                                            v = (e, t) => {
                                                t ? y.set(e, t) : y.delete(e);
                                            },
                                            E = {
                                                xCheckReservedLock: function (e, t) {
                                                    const s = w(e);
                                                    return s.log("xCheckReservedLock"), s.storeErr(), o.poke32(t, 1), 0;
                                                },
                                                xClose: function (e) {
                                                    const t = w(e);
                                                    t.storeErr();
                                                    const s = t.getOFileForS3File(e);
                                                    if (s)
                                                        try {
                                                            t.log(`xClose ${s.path}`), t.mapS3FileToOFile(e, !1), s.sah.flush(), s.flags & r.SQLITE_OPEN_DELETEONCLOSE && t.deletePath(s.path);
                                                        } catch (e) {
                                                            return t.storeErr(e, r.SQLITE_IOERR);
                                                        }
                                                    return 0;
                                                },
                                                xDeviceCharacteristics: function (e) {
                                                    return r.SQLITE_IOCAP_UNDELETABLE_WHEN_OPEN;
                                                },
                                                xFileControl: function (e, t, s) {
                                                    return r.SQLITE_NOTFOUND;
                                                },
                                                xFileSize: function (e, t) {
                                                    const s = w(e);
                                                    s.log("xFileSize");
                                                    const n = s.getOFileForS3File(e).sah.getSize() - l;
                                                    return o.poke64(t, BigInt(n)), 0;
                                                },
                                                xLock: function (e, t) {
                                                    const s = w(e);
                                                    return s.log(`xLock ${t}`), s.storeErr(), (s.getOFileForS3File(e).lockType = t), 0;
                                                },
                                                xRead: function (e, t, s, n) {
                                                    const i = w(e);
                                                    i.storeErr();
                                                    const a = i.getOFileForS3File(e);
                                                    i.log(`xRead ${a.path} ${s} @ ${n}`);
                                                    try {
                                                        const e = a.sah.read(o.heap8u().subarray(t, t + s), { at: l + Number(n) });
                                                        return e < s ? (o.heap8u().fill(0, t + e, t + s), r.SQLITE_IOERR_SHORT_READ) : 0;
                                                    } catch (e) {
                                                        return i.storeErr(e, r.SQLITE_IOERR);
                                                    }
                                                },
                                                xSectorSize: function (e) {
                                                    return 4096;
                                                },
                                                xSync: function (e, t) {
                                                    const s = w(e);
                                                    s.log(`xSync ${t}`), s.storeErr();
                                                    const n = s.getOFileForS3File(e);
                                                    try {
                                                        return n.sah.flush(), 0;
                                                    } catch (e) {
                                                        return s.storeErr(e, r.SQLITE_IOERR);
                                                    }
                                                },
                                                xTruncate: function (e, t) {
                                                    const s = w(e);
                                                    s.log(`xTruncate ${t}`), s.storeErr();
                                                    const n = s.getOFileForS3File(e);
                                                    try {
                                                        return n.sah.truncate(l + Number(t)), 0;
                                                    } catch (e) {
                                                        return s.storeErr(e, r.SQLITE_IOERR);
                                                    }
                                                },
                                                xUnlock: function (e, t) {
                                                    const s = w(e);
                                                    return s.log("xUnlock"), (s.getOFileForS3File(e).lockType = t), 0;
                                                },
                                                xWrite: function (e, s, n, i) {
                                                    const a = w(e);
                                                    a.storeErr();
                                                    const c = a.getOFileForS3File(e);
                                                    a.log(`xWrite ${c.path} ${n} ${i}`);
                                                    try {
                                                        return n === c.sah.write(o.heap8u().subarray(s, s + n), { at: l + Number(i) }) ? 0 : t("Unknown write() failure.");
                                                    } catch (e) {
                                                        return a.storeErr(e, r.SQLITE_IOERR);
                                                    }
                                                },
                                            },
                                            S = new r.sqlite3_io_methods();
                                        (S.$iVersion = 1), e.vfs.installVfs({ io: { struct: S, methods: E } });
                                        const x = {
                                            xAccess: function (e, t, s, n) {
                                                const r = q(e);
                                                r.storeErr();
                                                try {
                                                    const e = r.getPath(t);
                                                    o.poke32(n, r.hasFilename(e) ? 1 : 0);
                                                } catch (e) {
                                                    o.poke32(n, 0);
                                                }
                                                return 0;
                                            },
                                            xCurrentTime: function (e, t) {
                                                return o.poke(t, 2440587.5 + new Date().getTime() / 864e5, "double"), 0;
                                            },
                                            xCurrentTimeInt64: function (e, t) {
                                                return o.poke(t, 21086676e7 + new Date().getTime(), "i64"), 0;
                                            },
                                            xDelete: function (e, t, s) {
                                                const n = q(e);
                                                n.log(`xDelete ${o.cstrToJs(t)}`), n.storeErr();
                                                try {
                                                    return n.deletePath(n.getPath(t)), 0;
                                                } catch (e) {
                                                    return n.storeErr(e), r.SQLITE_IOERR_DELETE;
                                                }
                                            },
                                            xFullPathname: function (e, t, s, n) {
                                                return o.cstrncpy(n, t, s) < s ? 0 : r.SQLITE_CANTOPEN;
                                            },
                                            xGetLastError: function (e, t, s) {
                                                const n = q(e),
                                                    i = n.popErr();
                                                if ((n.log(`xGetLastError ${t} e =`, i), i)) {
                                                    const e = o.scopedAllocPush();
                                                    try {
                                                        const [e, n] = o.scopedAllocCString(i.message, !0);
                                                        o.cstrncpy(s, e, t), n > t && o.poke8(s + t - 1, 0);
                                                    } catch (i) {
                                                        return r.SQLITE_NOMEM;
                                                    } finally {
                                                        o.scopedAllocPop(e);
                                                    }
                                                }
                                                return i ? i.sqlite3Rc || r.SQLITE_IOERR : 0;
                                            },
                                            xOpen: function (e, s, n, i, a) {
                                                const l = q(e);
                                                try {
                                                    l.log(`xOpen ${o.cstrToJs(s)} ${i}`);
                                                    const e = s && o.peek8(s) ? l.getPath(s) : u();
                                                    let c = l.getSAHForPath(e);
                                                    !c && i & r.SQLITE_OPEN_CREATE && (l.getFileCount() < l.getCapacity() ? ((c = l.nextAvailableSAH()), l.setAssociatedPath(c, e, i)) : t("SAH pool is full. Cannot create file", e)), c || t("file not found:", e);
                                                    const _ = { path: e, flags: i, sah: c };
                                                    l.mapS3FileToOFile(n, _), (_.lockType = r.SQLITE_LOCK_NONE);
                                                    const d = new r.sqlite3_file(n);
                                                    return (d.$pMethods = S.pointer), d.dispose(), o.poke32(a, i), 0;
                                                } catch (e) {
                                                    return l.storeErr(e), r.SQLITE_CANTOPEN;
                                                }
                                            },
                                        };
                                        class A {
                                            vfsDir;
                                            #e;
                                            #t;
                                            #s;
                                            #n = new Map();
                                            #r = new Map();
                                            #i = new Set();
                                            #o = new Map();
                                            #a = new Uint8Array(516);
                                            #l;
                                            #c;
                                            #_;
                                            constructor(t = Object.create(null)) {
                                                (this.#_ = t.verbosity ?? p.verbosity),
                                                    (this.vfsName = t.name || p.name),
                                                    (this.#c = (function (t) {
                                                        e.capi.sqlite3_vfs_find(t) && s("VFS name is already registered:", t);
                                                        const n = new r.sqlite3_vfs(),
                                                            i = r.sqlite3_vfs_find(null),
                                                            l = i ? new r.sqlite3_vfs(i) : null;
                                                        return (
                                                            (n.$iVersion = 2),
                                                            (n.$szOsFile = r.sqlite3_file.structInfo.sizeof),
                                                            (n.$mxPathname = a),
                                                            n.addOnDispose((n.$zName = o.allocCString(t)), () => b(n.pointer, 0)),
                                                            l && ((n.$xRandomness = l.$xRandomness), (n.$xSleep = l.$xSleep), l.dispose()),
                                                            n.$xRandomness ||
                                                                x.xRandomness ||
                                                                (x.xRandomness = function (e, t, s) {
                                                                    const n = o.heap8u();
                                                                    let r = 0;
                                                                    for (; r < t; ++r) n[s + r] = (255e3 * Math.random()) & 255;
                                                                    return r;
                                                                }),
                                                            n.$xSleep || x.xSleep || (x.xSleep = (e, t) => 0),
                                                            e.vfs.installVfs({ vfs: { struct: n, methods: x } }),
                                                            n
                                                        );
                                                    })(this.vfsName)),
                                                    b(this.#c.pointer, this),
                                                    (this.vfsDir = t.directory || "." + this.vfsName),
                                                    (this.#l = new DataView(this.#a.buffer, this.#a.byteOffset)),
                                                    (this.isReady = this.reset(!!(t.clearOnInit ?? p.clearOnInit)).then(() => {
                                                        if (this.$error) throw this.$error;
                                                        return this.getCapacity() ? Promise.resolve(void 0) : this.addCapacity(t.initialCapacity || p.initialCapacity);
                                                    }));
                                            }
                                            #u(e, ...t) {
                                                this.#_ > e && m[e](this.vfsName + ":", ...t);
                                            }
                                            log(...e) {
                                                this.#u(2, ...e);
                                            }
                                            warn(...e) {
                                                this.#u(1, ...e);
                                            }
                                            error(...e) {
                                                this.#u(0, ...e);
                                            }
                                            getVfs() {
                                                return this.#c;
                                            }
                                            getCapacity() {
                                                return this.#n.size;
                                            }
                                            getFileCount() {
                                                return this.#r.size;
                                            }
                                            getFileNames() {
                                                const e = [],
                                                    t = this.#r.keys();
                                                for (const s of t) e.push(s);
                                                return e;
                                            }
                                            async addCapacity(e) {
                                                for (let t = 0; t < e; ++t) {
                                                    const e = u(),
                                                        t = await this.#t.getFileHandle(e, { create: !0 }),
                                                        s = await t.createSyncAccessHandle();
                                                    this.#n.set(s, e), this.setAssociatedPath(s, "", 0);
                                                }
                                                return this.getCapacity();
                                            }
                                            async reduceCapacity(e) {
                                                let t = 0;
                                                for (const s of Array.from(this.#i)) {
                                                    if (t === e || this.getFileCount() === this.getCapacity()) break;
                                                    const n = this.#n.get(s);
                                                    s.close(), await this.#t.removeEntry(n), this.#n.delete(s), this.#i.delete(s), ++t;
                                                }
                                                return t;
                                            }
                                            releaseAccessHandles() {
                                                for (const e of this.#n.keys()) e.close();
                                                this.#n.clear(), this.#r.clear(), this.#i.clear();
                                            }
                                            async acquireAccessHandles(e) {
                                                const t = [];
                                                for await (const [e, s] of this.#t) "file" === s.kind && t.push([e, s]);
                                                return Promise.all(
                                                    t.map(async ([t, s]) => {
                                                        try {
                                                            const n = await s.createSyncAccessHandle();
                                                            if ((this.#n.set(n, t), e)) n.truncate(l), this.setAssociatedPath(n, "", 0);
                                                            else {
                                                                const e = this.getAssociatedPath(n);
                                                                e ? this.#r.set(e, n) : this.#i.add(n);
                                                            }
                                                        } catch (e) {
                                                            throw (this.storeErr(e), this.releaseAccessHandles(), e);
                                                        }
                                                    }),
                                                );
                                            }
                                            getAssociatedPath(e) {
                                                e.read(this.#a, { at: 0 });
                                                const t = this.#l.getUint32(512);
                                                if (this.#a[0] && (t & r.SQLITE_OPEN_DELETEONCLOSE || !(t & c))) return h(`Removing file with unexpected flags ${t.toString(16)}`, this.#a), this.setAssociatedPath(e, "", 0), "";
                                                const s = new Uint32Array(2);
                                                e.read(s, { at: 516 });
                                                const n = this.computeDigest(this.#a);
                                                if (s.every((e, t) => e === n[t])) {
                                                    const t = this.#a.findIndex((e) => 0 === e);
                                                    return 0 === t && e.truncate(l), t ? d.decode(this.#a.subarray(0, t)) : "";
                                                }
                                                return h("Disassociating file with bad digest."), this.setAssociatedPath(e, "", 0), "";
                                            }
                                            setAssociatedPath(e, s, n) {
                                                const r = f.encodeInto(s, this.#a);
                                                a <= r.written + 1 && t("Path too long:", s), this.#a.fill(0, r.written, a), this.#l.setUint32(512, n);
                                                const i = this.computeDigest(this.#a);
                                                e.write(this.#a, { at: 0 }), e.write(i, { at: 516 }), e.flush(), s ? (this.#r.set(s, e), this.#i.delete(e)) : (e.truncate(l), this.#i.add(e));
                                            }
                                            computeDigest(e) {
                                                let t = 3735928559,
                                                    s = 1103547991;
                                                for (const n of e) (t = 31 * t + 307 * n), (s = 31 * s + 307 * n);
                                                return new Uint32Array([t >>> 0, s >>> 0]);
                                            }
                                            async reset(e) {
                                                await this.isReady;
                                                let t,
                                                    s = await navigator.storage.getDirectory();
                                                for (const e of this.vfsDir.split("/")) e && ((t = s), (s = await s.getDirectoryHandle(e, { create: !0 })));
                                                return (this.#e = s), (this.#s = t), (this.#t = await this.#e.getDirectoryHandle(_, { create: !0 })), this.releaseAccessHandles(), this.acquireAccessHandles(e);
                                            }
                                            getPath(e) {
                                                return o.isPtr(e) && (e = o.cstrToJs(e)), (e instanceof URL ? e : new URL(e, "file://localhost/")).pathname;
                                            }
                                            deletePath(e) {
                                                const t = this.#r.get(e);
                                                return t && (this.#r.delete(e), this.setAssociatedPath(t, "", 0)), !!t;
                                            }
                                            storeErr(e, t) {
                                                return e && ((e.sqlite3Rc = t || r.SQLITE_IOERR), this.error(e)), (this.$error = e), t;
                                            }
                                            popErr() {
                                                const e = this.$error;
                                                return (this.$error = void 0), e;
                                            }
                                            nextAvailableSAH() {
                                                const [e] = this.#i.keys();
                                                return e;
                                            }
                                            getOFileForS3File(e) {
                                                return this.#o.get(e);
                                            }
                                            mapS3FileToOFile(e, t) {
                                                t ? (this.#o.set(e, t), v(e, this)) : (this.#o.delete(e), v(e, !1));
                                            }
                                            hasFilename(e) {
                                                return this.#r.has(e);
                                            }
                                            getSAHForPath(e) {
                                                return this.#r.get(e);
                                            }
                                            async removeVfs() {
                                                if (!this.#c.pointer || !this.#t) return !1;
                                                r.sqlite3_vfs_unregister(this.#c.pointer), this.#c.dispose(), delete n[this.vfsName];
                                                try {
                                                    this.releaseAccessHandles(), await this.#e.removeEntry(_, { recursive: !0 }), (this.#t = void 0), await this.#s.removeEntry(this.#e.name, { recursive: !0 }), (this.#e = this.#s = void 0);
                                                } catch (t) {
                                                    e.config.error(this.vfsName, "removeVfs() failed:", t);
                                                }
                                                return !0;
                                            }
                                            exportFile(e) {
                                                const s = this.#r.get(e) || t("File not found:", e),
                                                    n = s.getSize() - l,
                                                    r = new Uint8Array(n > 0 ? n : 0);
                                                if (n > 0) {
                                                    const e = s.read(r, { at: l });
                                                    e != n && t("Expected to read " + n + " bytes but read " + e + ".");
                                                }
                                                return r;
                                            }
                                            async importDbChunked(e, s) {
                                                const n = this.#r.get(e) || this.nextAvailableSAH() || t("No available handles to import to.");
                                                n.truncate(0);
                                                let o,
                                                    a = 0,
                                                    c = !1;
                                                try {
                                                    for (; void 0 !== (o = await s()); ) o instanceof ArrayBuffer && (o = new Uint8Array(o)), 0 === a && o.byteLength >= 15 && (i.affirmDbHeader(o), (c = !0)), n.write(o, { at: l + a }), (a += o.byteLength);
                                                    if (((a < 512 || 0 != a % 512) && t("Input size", a, "is not correct for an SQLite database."), !c)) {
                                                        const e = new Uint8Array(20);
                                                        n.read(e, { at: 0 }), i.affirmDbHeader(e);
                                                    }
                                                    n.write(new Uint8Array([1, 1]), { at: 4114 });
                                                } catch (e) {
                                                    throw (this.setAssociatedPath(n, "", 0), e);
                                                }
                                                return this.setAssociatedPath(n, e, r.SQLITE_OPEN_MAIN_DB), a;
                                            }
                                            importDb(e, s) {
                                                if (s instanceof ArrayBuffer) s = new Uint8Array(s);
                                                else if (s instanceof Function) return this.importDbChunked(e, s);
                                                const n = this.#r.get(e) || this.nextAvailableSAH() || t("No available handles to import to."),
                                                    i = s.byteLength;
                                                (i < 512 || i % 512 != 0) && t("Byte array size is invalid for an SQLite db.");
                                                const o = "SQLite format 3";
                                                for (let e = 0; e < 15; ++e) o.charCodeAt(e) !== s[e] && t("Input does not contain an SQLite database header.");
                                                const a = n.write(s, { at: l });
                                                return a != i ? (this.setAssociatedPath(n, "", 0), t("Expected to write " + i + " bytes but wrote " + a + ".")) : (n.write(new Uint8Array([1, 1]), { at: 4114 }), this.setAssociatedPath(n, e, r.SQLITE_OPEN_MAIN_DB)), a;
                                            }
                                        }
                                        class I {
                                            #d;
                                            constructor(e) {
                                                (this.#d = e), (this.vfsName = e.vfsName);
                                            }
                                            async addCapacity(e) {
                                                return this.#d.addCapacity(e);
                                            }
                                            async reduceCapacity(e) {
                                                return this.#d.reduceCapacity(e);
                                            }
                                            getCapacity() {
                                                return this.#d.getCapacity(this.#d);
                                            }
                                            getFileCount() {
                                                return this.#d.getFileCount();
                                            }
                                            getFileNames() {
                                                return this.#d.getFileNames();
                                            }
                                            async reserveMinimumCapacity(e) {
                                                const t = this.#d.getCapacity();
                                                return t < e ? this.#d.addCapacity(e - t) : t;
                                            }
                                            exportFile(e) {
                                                return this.#d.exportFile(e);
                                            }
                                            importDb(e, t) {
                                                return this.#d.importDb(e, t);
                                            }
                                            async wipeFiles() {
                                                return this.#d.reset(!0);
                                            }
                                            unlink(e) {
                                                return this.#d.deletePath(e);
                                            }
                                            async removeVfs() {
                                                return this.#d.removeVfs();
                                            }
                                        }
                                        e.installOpfsSAHPoolVfs = async function (s = Object.create(null)) {
                                            const r = (s = Object.assign(Object.create(null), p, s || {})).name;
                                            if (s.$testThrowPhase1) throw s.$testThrowPhase1;
                                            if (n[r])
                                                try {
                                                    return await n[r];
                                                } catch (e) {
                                                    if (!s.forceReinitIfPreviouslyFailed) throw e;
                                                    delete n[r];
                                                }
                                            return globalThis.FileSystemHandle && globalThis.FileSystemDirectoryHandle && globalThis.FileSystemFileHandle && globalThis.FileSystemFileHandle.prototype.createSyncAccessHandle && navigator?.storage?.getDirectory
                                                ? (n[r] = (async () => {
                                                      const e = await navigator.storage.getDirectory(),
                                                          s = ".opfs-sahpool-sync-check-" + u(),
                                                          n = await e.getFileHandle(s, { create: !0 }),
                                                          r = (await n.createSyncAccessHandle()).close();
                                                      return await r, await e.removeEntry(s), r?.then && t("The local OPFS API is too old for opfs-sahpool:", "it has an async FileSystemSyncAccessHandle.close() method."), !0;
                                                  })()
                                                      .then(async function () {
                                                          if (s.$testThrowPhase2) throw s.$testThrowPhase2;
                                                          const t = new A(s);
                                                          return t.isReady
                                                              .then(async () => {
                                                                  const s = new I(t);
                                                                  if (e.oo1) {
                                                                      const n = e.oo1,
                                                                          r = t.getVfs(),
                                                                          i = function (...e) {
                                                                              const t = n.DB.dbCtorHelper.normalizeArgs(...e);
                                                                              (t.vfs = r.$zName), n.DB.dbCtorHelper.call(this, t);
                                                                          };
                                                                      (i.prototype = Object.create(n.DB.prototype)), (s.OpfsSAHPoolDb = i);
                                                                  }
                                                                  return t.log("VFS initialized."), s;
                                                              })
                                                              .catch(async (e) => {
                                                                  throw (await t.removeVfs().catch(() => {}), e);
                                                              });
                                                      })
                                                      .catch((e) => (n[r] = Promise.reject(e))))
                                                : (n[r] = Promise.reject(new Error("Missing required OPFS APIs.")));
                                        };
                                    }),
                                    void 0 !== e)
                                ) {
                                    const t = Object.assign(Object.create(null), { exports: void 0 === Ee ? e.asm : Ee, memory: e.wasmMemory }, globalThis.sqlite3ApiConfig || {});
                                    let s;
                                    globalThis.sqlite3ApiConfig = t;
                                    try {
                                        s = globalThis.sqlite3ApiBootstrap();
                                    } catch (e) {
                                        throw e;
                                    } finally {
                                        delete globalThis.sqlite3ApiBootstrap, delete globalThis.sqlite3ApiConfig;
                                    }
                                    e.sqlite3 = s;
                                }
                            }),
                            a
                        );
                    });
            const o = (function () {
                    const e = i;
                    if (!e) throw new Error("Expecting globalThis.sqlite3InitModule to be defined by the Emscripten build.");
                    const t = (globalThis.sqlite3InitModuleState = Object.assign(Object.create(null), { moduleScript: globalThis?.document?.currentScript, isWorker: "undefined" != typeof WorkerGlobalScope, location: globalThis.location, urlParams: globalThis?.location?.href ? new URL(globalThis.location.href).searchParams : new URLSearchParams() }));
                    if (((t.debugModule = t.urlParams.has("sqlite3.debugModule") ? (...e) => {} : () => {}), t.urlParams.has("sqlite3.dir"))) t.sqlite3Dir = t.urlParams.get("sqlite3.dir") + "/";
                    else if (t.moduleScript) {
                        const e = t.moduleScript.src.split("/");
                        e.pop(), (t.sqlite3Dir = e.join("/") + "/");
                    }
                    if (
                        ((globalThis.sqlite3InitModule = function s(...n) {
                            return e(...n)
                                .then((e) => {
                                    const n = e.sqlite3;
                                    (n.scriptInfo = t), s.__isUnderTest && (n.__isUnderTest = !0);
                                    const r = n.asyncPostInit;
                                    return delete n.asyncPostInit, r();
                                })
                                .catch((e) => {
                                    throw e;
                                });
                        }),
                        (globalThis.sqlite3InitModule.ready = e.ready),
                        globalThis.sqlite3InitModuleState.moduleScript)
                    ) {
                        const e = globalThis.sqlite3InitModuleState;
                        let t = e.moduleScript.src.split("/");
                        t.pop(), (e.scriptDir = t.join("/") + "/");
                    }
                    return t.debugModule("sqlite3InitModuleState =", t), globalThis.sqlite3InitModule;
                })(),
                a = (i = o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~~-ab3eb430.667b501a.js.map
