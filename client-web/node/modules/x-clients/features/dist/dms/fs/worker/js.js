(() => {
    const e = "Invalid message",
        t = "Unsupported action",
        i = new Map();
    function r(e) {
        self.postMessage(e);
    }
    async function n(e) {
        const t = await (async function () {
                if (!navigator.storage || !navigator.storage.getDirectory) throw new Error("Storage API not supported in this environment");
                return await navigator.storage.getDirectory();
            })(),
            i = e.trim("/").split("/");
        let r = t;
        for (const e of i) "" !== e && (r = await r.getDirectoryHandle(e, { create: !0 }));
        return r;
    }
    self.onmessage = async (a) => {
        const { data: o } = a,
            { requestId: s, action: c, fileSinkId: l, fileLocation: d, bytes: g } = o || {};
        if (void 0 === c) return new Error("Missing action"), void r({ requestId: s, error: e });
        if (void 0 === d || void 0 === l) return new Error("Missing fileLocation or fileSinkId"), void r({ requestId: s, error: e });
        if ("write" === c && void 0 === g) return new Error("Missing bytes"), void r({ requestId: s, error: e });
        const u = l;
        try {
            switch (c) {
                case "write": {
                    await (async function (e, t) {
                        const r = e;
                        i.has(r) || i.set(r, { handle: null, initialized: !1 });
                        const a = i.get(r),
                            { filename: o, folderLocation: s } = t;
                        if (!a.initialized) {
                            const e = await n(s.relativePath),
                                t = await e.getFileHandle(o, { create: !0 });
                            (a.handle = await t.createSyncAccessHandle()), (a.initialized = !0);
                        }
                    })(l, d);
                    const e = i.get(u),
                        t = await e.handle.getSize();
                    await e.handle?.write(g, { at: t }), r({ requestId: s });
                    break;
                }
                case "flush": {
                    const e = i.get(u);
                    e && (e.handle?.close(), (e.handle = null), (e.initialized = !1)), r({ requestId: s });
                    break;
                }
                case "close": {
                    const e = i.get(u);
                    e && (e.handle?.close(), (e.handle = null), (e.initialized = !1), i.delete(u)), r({ requestId: s });
                    break;
                }
                default:
                    throw new Error(`${t}: ${c}`);
            }
        } catch (e) {
            r({ requestId: s, error: e instanceof Error ? e.message : String(e) });
        }
    };
})();
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/node_modules_x-clients_features_dist_dms_fs_worker_js.68c4073a.js.map
