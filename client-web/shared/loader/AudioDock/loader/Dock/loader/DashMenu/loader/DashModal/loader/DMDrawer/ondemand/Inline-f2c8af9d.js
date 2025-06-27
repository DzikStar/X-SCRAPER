"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d", "loader.directMessagesData-63cb1cc4"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a,
                r,
                s,
                n,
                o,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (a = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (n = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: a,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    r,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            s,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    n,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            l.hash = "47444c8ec7640b723fc59a35b0544d70";
            const d = l;
        },
        498510: (e, t, i) => {
            i.d(t, { Z: () => d });
            var a,
                r,
                s,
                n,
                o,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (a = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (r = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (n = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [a, { alias: "viewer", args: r, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [n, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            l.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = l;
        },
        882127: (e, t, i) => {
            i.d(t, { Z: () => r });
            var a = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "result",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const r = a;
        },
        904940: (e, t, i) => {
            i.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => s });
            var a = i(10622),
                r = i.n(a);
            function s(e, t, i, a) {
                return r()(e, t, i, a ? { networkCacheConfig: { metadata: { isFatalError: a } } } : void 0).toPromise();
            }
        },
        715601: (e, t, i) => {
            i.d(t, { Z: () => m });
            var a = i(807896),
                r = i(202784),
                s = i(325686),
                n = i(666305),
                o = i(912021),
                l = i(443781),
                d = i(794175),
                u = i(427266),
                c = i(224175);
            class m extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._unmounted = !1),
                        (this._handleResize = () => {
                            const { viewport: e } = this.state;
                            e && e instanceof c.Z && e.notifyRectChanged();
                        }),
                        (this._handleViewRef = (e) => {
                            const { onViewportSet: t } = this.props;
                            e &&
                                this._lastRef !== e &&
                                window.requestAnimationFrame(() => {
                                    if (!this._unmounted) {
                                        n.Z.unobserveAll(this._lastRef), (this._lastRef = e), n.Z.observe(e, this._handleResize);
                                        const i = this._getViewport(e);
                                        this.setState({ viewport: i }), t && t(i);
                                    }
                                });
                        }),
                        (this._getDataSet = (0, o.Z)((e = {}) => ({ ...e, viewportview: "true" }))),
                        (this.state = { viewport: void 0 });
                }
                render() {
                    const { children: e, dataSet: t, onViewportSet: i, ...n } = this.props,
                        { viewport: o } = this.state,
                        l = o ? r.createElement(d.ZP, { viewport: o }, e) : null;
                    return r.createElement(s.Z, (0, a.Z)({ ref: this._handleViewRef }, n, { dataSet: this._getDataSet((0, u.dW)(t)) }), l);
                }
                componentWillUnmount() {
                    (this._unmounted = !0), n.Z.unobserveAll(this._lastRef);
                }
                _getViewport(e) {
                    return new c.Z(e);
                }
            }
            m.contextType = l.rC;
        },
        224175: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(136728);
            var a = i(503882),
                r = i(781268),
                s = i(700534);
            class n {
                constructor(e) {
                    (this._offsetTop = 0),
                        (this._handleIntersectionChange = (e, t) => {
                            (0, s.pd)(e, t, this._observedElementsMap);
                        }),
                        (this._domNode = e),
                        (this._programmaticScrollListeners = []),
                        (this._rectChangeListeners = []),
                        (this._suppressListeners = !1),
                        (this._observedElementsMap = new Map());
                }
                notifyRectChanged() {
                    this._rectChangeListeners.forEach((e) => e());
                }
                getRect() {
                    const e = this._domNode.getBoundingClientRect();
                    return new a.Z(e.top + this._offsetTop, e.height);
                }
                getRect2D() {
                    const e = this._domNode.getBoundingClientRect();
                    return new r.Z(e.left, e.top + this._offsetTop, e.width, e.height);
                }
                getWidth() {
                    return this._domNode.getBoundingClientRect().width;
                }
                getViewport() {
                    return this._domNode;
                }
                scrollBy(e, t) {
                    t ? this._domNode.scrollBy({ top: e, behavior: t }) : (this._domNode.scrollTop += e), this._programmaticScrollListeners.forEach((t) => t(e));
                }
                scrollTo(e, t, i) {
                    const a = t - this.scrollY();
                    i ? this._domNode.scrollTo({ top: e, left: t, behavior: i }) : ((this._domNode.scrollLeft = e), (this._domNode.scrollTop = t)), this._programmaticScrollListeners.forEach((e) => e(a));
                }
                scrollToBottom() {
                    this.scrollBy(this._domNode.clientHeight - this.scrollY());
                }
                scrollToTop(e) {
                    this.scrollTo(0, 0, e);
                }
                scrollX() {
                    return this._domNode.scrollLeft;
                }
                scrollY() {
                    return this._domNode.scrollTop;
                }
                setOffsetBottom(e) {}
                setOffsetTop(e) {
                    this._offsetTop = e;
                }
                getOffsetTop() {
                    return this._offsetTop;
                }
                getOffsetBottom() {
                    return 0;
                }
                addProgrammaticScrollListener(e) {
                    return this._programmaticScrollListeners.indexOf(e) < 0 && this._programmaticScrollListeners.push(e), () => this.removeProgrammaticScrollListener(e);
                }
                removeProgrammaticScrollListener(e) {
                    const t = this._programmaticScrollListeners.indexOf(e);
                    t > -1 && this._programmaticScrollListeners.splice(t, 1);
                }
                addRectChangeListener(e) {
                    return this._rectChangeListeners.indexOf(e) < 0 && this._rectChangeListeners.push(e), () => this.removeRectChangeListener(e);
                }
                removeRectChangeListener(e) {
                    const t = this._rectChangeListeners.indexOf(e);
                    t > -1 && this._rectChangeListeners.splice(t, 1);
                }
                addScrollListener(e) {
                    return this._addListener("scroll", () => {
                        this._suppressListeners || e();
                    });
                }
                temporarilySuppressScrollListeners(e) {
                    (this._suppressListeners = !0),
                        window.setTimeout(() => {
                            this._suppressListeners = !1;
                        }, e);
                }
                addIntersectionObserverListener(e, t, i) {
                    if (!this._intersectionObserver) {
                        this._intersectionThreshold = i;
                        const e = this._getIOConfigOptions();
                        this._intersectionObserver = (0, s.wE)(e, this._observedElementsMap, this._handleIntersectionChange);
                    }
                    if (this._intersectionObserver) {
                        return (0, s.D1)(this._intersectionObserver, this._observedElementsMap, t, e);
                    }
                }
                getRootMargin() {
                    const e = getComputedStyle(this._domNode).paddingBottom,
                        t = getComputedStyle(this._domNode).paddingLeft,
                        i = getComputedStyle(this._domNode).paddingRight;
                    return `${getComputedStyle(this._domNode).paddingTop} ${i} ${e} ${t}`;
                }
                _getIOConfigOptions() {
                    return { root: this._domNode, rootMargin: this.getRootMargin(), threshold: this._intersectionThreshold };
                }
                _addListener(e, t) {
                    const i = () => t();
                    this._domNode.addEventListener(e, i);
                    return () => {
                        this._domNode.removeEventListener(e, i);
                    };
                }
            }
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => s });
            const a = (e, t, i) => {
                    const a = new Date();
                    let r = a.getFullYear() - e;
                    const s = a.getMonth() + 1 - t;
                    if (s < 0) r -= 1;
                    else if (0 === s) {
                        a.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? a(e, t, i) < 18 : r),
                s = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => H, ZP: () => q, vK: () => Q });
            var a = i(688715),
                r = i(111677),
                s = i.n(r),
                n = i(653843),
                o = i(122123),
                l = i(417144),
                d = i(884495),
                u = i(716233),
                c = i(540387);
            const m = s().b8098028,
                p = s().b36f4170,
                _ = s().hab3781e,
                g = s().f6c4fb02,
                h = s().g0af3dd2,
                f = s().b8c8b0be,
                y = s().ica6d718,
                v = s().b28d44f7({ limit: 15 }),
                w = s().i1db7d13,
                S = s().baac0ed7,
                b = w({ limit: 512 }),
                T = s().a22385bb,
                L = s().be0440bf,
                I = T({ limit: 140 }),
                O = s().feeba512,
                F = s().db123c02,
                E = s().db6001e7({ limit: 5 }),
                A = s().eb96d952,
                D = s().i859a9d4,
                M = s().b3880588,
                x = s().ca058b68,
                U = s().id24379c,
                k = s().h4d7cbcc,
                P = (0, a.ju)("https://support.x.com/articles/20156423"),
                C = (0, a.ju)("https://help.x.com/using-twitter/twitter-videos"),
                N = (e) => ({ text: e }),
                z = (e) => ({ text: e, action: { label: D, link: P } }),
                R = (e) => ({ text: e, action: { label: D, link: C } }),
                B = { [n.Y7.GIF_IS_TOO_LARGE]: N(v), [n.Y7.CANNOT_BE_PROCESSED]: N(m), [n.Y7.FILE_IS_NOT_AN_IMAGE]: N(_) },
                V = { [l.d.ZERO_FILE_LENGTH]: N(p), [l.d.TIMEOUT]: N(M) },
                Z = { ...V, [l.d.FILE_TOO_LARGE]: N(E), [l.d.UNSUPPORTED_MEDIA]: z(F), [l.d.INVALID_MEDIA]: z(O) },
                K = { ...V, [l.d.FILE_TOO_LARGE]: N(v), [l.d.UNSUPPORTED_MEDIA]: z(h), [l.d.INVALID_MEDIA]: z(g) },
                G = { ...V, [l.d.FILE_TOO_LARGE]: N(b), [l.d.UNSUPPORTED_MEDIA]: R(y), [l.d.INVALID_MEDIA]: R(f) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                $ = 1048576,
                X = 1073741824,
                H = (e) => Object.values(j).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: a } = e;
                    if (t)
                        switch (a) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? N(v) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? N(i >= X ? S({ limit: Math.round(i / X) }) : w({ limit: Math.round(i / $) })) : N(b);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? N(L({ limit: Math.round(i / 60) })) : { text: T({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : N(I);
                            case j.RESIZE:
                                return B[t];
                            case j.UPLOAD:
                                if (e.isImage) return Z[t];
                                if (e.isGif) return K[t];
                                if (e.isVideo) return G[t];
                                break;
                            case j.METADATA:
                                return N(k);
                        }
                },
                Y = (e) => {
                    if (H(e)) return e;
                };
            function q(e, t = U) {
                const i = Y(e);
                if (i) {
                    const a = e.message ? `${t} ${e.message}` : t;
                    return W(i) || N(a);
                }
            }
            function Q(e, t = x) {
                return e.type === o.gK.type && e.code === o.gK.NO_DIMENSIONS ? N(A) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? R(f) : N(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => h, Uk: () => c, Xj: () => m, ZP: () => T });
            var a = i(468811),
                r = i.n(a),
                s = i(595088),
                n = i(161821),
                o = i(184605),
                l = i(716233),
                d = i(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                p = (e) => (e ? _(e) : void 0),
                _ = (e) =>
                    (0, s.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${g(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                g = (e) =>
                    (0, n.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                h = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                f = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                y = { [h.SruUpload]: f.SruUpload, [h.UploadSubmitUntilSruFinish]: f.UploadSubmitUntilSruFinish },
                v = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                w = (e, t) => ((0, o.Z)(e) && (0, o.Z)(t) ? Math.round(t - e) : void 0),
                S = () => (window.performance ? window.performance.now() : Date.now()),
                b = (e, t) => (e === l.xz.DMGif || e === l.xz.TweetGif ? v.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? v.Short : t < 20 ? v.Medium : t < 45 ? v.Long : t < 90 ? v.XLong : t < 140 ? v.L90to140s : t < 300 ? v.L140to300s : t < 600 ? v.L300to600s : t < 1200 ? v.L600to1200s : t < 1800 ? v.L1200to1800s : t < 2700 ? v.L1800to2700s : t < 3600 ? v.L2700to3600s : t < 4500 ? v.L3600to4500s : t < 5400 ? v.L4500to5400s : t < 6300 ? v.L5400to6300s : t < 7200 ? v.L6300to7200s : t < 10800 ? v.L7200to10800s : t < 14400 ? v.L10800to14400s : v.LGT14400s);
            class T {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: a } = e;
                            return `${t ? u.Remote : u.LocalFile}:${i}:${b(i, a)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = w(this._startTimes[e], S());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const a = this._getKey(e, t);
                            this._record(a, i, e === h.Full ? this._metadata : e === h.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = S()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = w(this._startTimes[h.Full], S());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[h.Full] && (e -= this._pausedDuration[h.Full]);
                        const t = this._getKey(h.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = S();
                    else if (!t) {
                        const t = w(this._pauseTimes[e], S());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && y[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const a = { duration_ms: t, impression_id: this._impressionId, metadata: p(i) };
                    d.IM(e, a, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => h, SB: () => b, TO: () => L, Tz: () => y, U$: () => S, ff: () => f, vC: () => w, vn: () => T, xz: () => v, y$: () => _ });
            var a = i(182056),
                r = i(323265),
                s = i(540387);
            const n = 1024,
                o = 1024 * n,
                l = 1,
                d = 4096,
                u = 2048,
                c = 400,
                m = 1500,
                p = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                _ = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                g = 600,
                h = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                f = { VIDEO_IS_TOO_LONG: 1 },
                y = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                v = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                w = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                S = (e) => {
                    const { height: t, left: i, width: a } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + a / 2)},${r},1,1`;
                };
            function b(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function T(e, t, i, h, f) {
                const y = h?.location,
                    v = b({ featureSwitches: e, userClaims: t });
                let S, T;
                if (i.isSubtitles) S = 0;
                else if (i.isGif)
                    switch (y) {
                        case w.Avatar:
                            S = e.getNumberValue("media_async_upload_max_avatar_gif_size", p.Avatar_Gif) * o;
                            break;
                        case w.Dm:
                        case w.Tweet:
                        default:
                            S = e.getNumberValue("media_async_upload_max_gif_size", p.Gif) * o;
                    }
                else {
                    if (!(i instanceof s.ZP))
                        return (function (e, t, i) {
                            let s;
                            switch (t) {
                                case w.Avatar:
                                    s = c;
                                    break;
                                case w.CommunityBanner:
                                case w.ListBanner:
                                case w.ProfileBanner:
                                    s = m;
                                    break;
                                default:
                                    s = r.ZP.isDesktopOS() ? d : u;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", p.Image) * o;
                            return a.Z.getConnectionInfo().then(
                                (a) => {
                                    let o = l;
                                    return "slow-2g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * n) : i || "2g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * n) : "3g" === a.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * n) : "4g" !== a.effectiveType || r.ZP.isDesktopOS() || t !== w.Tweet || (s = d), { maxDimension: s, maxFileSize: Math.min(l, o) };
                                },
                                () => ({ maxDimension: s, maxFileSize: l }),
                            );
                        })(e, y, f);
                    if (1 === v) {
                        if ("dm" === y) T = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", g);
                        else T = e.getNumberValue("media_async_upload_longer_video_max_video_duration", _.Duration[v]) * l;
                        S = e.getNumberValue("media_async_upload_longer_video_max_video_size", _.Size[v]) * o;
                    } else (T = e.getNumberValue("media_async_upload_max_video_duration", _.Duration[v]) * l), (S = e.getNumberValue("media_async_upload_max_video_size", _.Size[v]) * o);
                }
                return Promise.resolve({ maxFileSize: S, maxDuration: T });
            }
            function L(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => a, ZP: () => n, h_: () => r });
            i(543673), i(240753), i(128399);
            const a = [".srt", "text/plain", ""],
                r = (e) => -1 !== a.indexOf(e.type),
                s = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class n {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([s(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        540387: (e, t, i) => {
            i.d(t, { Wv: () => r, ZP: () => n, hb: () => s, jn: () => a });
            i(571372), i(543673), i(240753), i(128399);
            const a = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== a.indexOf(e.type),
                s = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class n {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((i, a) => {
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = s.type), a(i);
                                },
                                n = document.createElement("video");
                            (n.onloadedmetadata = () => {
                                t || (n.videoWidth && n.videoHeight) ? i(n) : r("Video lacks height or width", s.NO_DIMENSIONS);
                            }),
                                (n.onerror = () => {
                                    r("Error loading image", s.LOAD_FAILED);
                                }),
                                (n.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: a } = e;
                        return (this.width = a), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === a)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        537052: (e, t, i) => {
            i.d(t, { Hf: () => n, OA: () => r, mL: () => s });
            i(571372);
            var a = i(837880);
            function r(e, t) {
                const i = (0, a.Z)(t / 100, 0, 1),
                    r = o[e],
                    s = i * (r.max - r.min);
                return d(r.min + s, 3);
            }
            function s(e) {
                const t = (0, a.Z)(e, 0, 1);
                for (let e = 0; e < l.length; e++) {
                    const i = l[e];
                    if ((0 === e && t <= i.min) || (e === l.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = u(t, i.min, i.max);
                        return (e = d(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const n = Object.freeze({ uploading: "uploading", processing: "processing" }),
                o = { [n.uploading]: { name: n.uploading, min: 0, max: 0.5 }, [n.processing]: { name: n.processing, min: 0.5, max: 1 } },
                l = [o.uploading, o.processing];
            function d(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function u(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of l) {
                    if (((t += i.max - i.min), i.max <= i.min)) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (i.min < 0) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (i.max > 1) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && i.min !== e.max) {
                        const t = JSON.stringify({ stage: i, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = i;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, i) => {
            i.d(t, { EM: () => c, K3: () => u, Xp: () => m });
            var a = i(882127),
                r = i(498510),
                s = (i(585488), i(277660)),
                n = i.n(s),
                o = i(708482),
                l = i(944681),
                d = i(535338);
            function u(e) {
                return (function (e) {
                    return (0, o.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !p(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return p((0, d.p)(_, {}));
            }
            function m(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: a } = e;
                            return (0, l.k)(a, i, t, !0);
                        }
                    }
                    return !0;
                })(n()(g, e));
            }
            function p(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: a } = e;
                        return (0, l.k)(a, i, t, !0);
                    }
                }
                return !0;
            }
            const _ = r.Z,
                g = a.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => me, C4: () => W, G$: () => Y, Q6: () => X, TU: () => Q, WU: () => J, _B: () => re, _J: () => ie, _T: () => Z, dD: () => ae, gz: () => B, m3: () => V, o6: () => oe, oZ: () => pe, pJ: () => ue, rA: () => $ });
            i(571372), i(136728);
            var a = i(99107),
                r = i(411916),
                s = i.n(r),
                n = i(10622),
                o = i.n(n),
                l = i(111677),
                d = i.n(l),
                u = i(205074),
                c = i(653843),
                m = i(514354),
                p = i(908478),
                _ = i(417144),
                g = i(904940),
                h = i(918621),
                f = i(829053),
                y = i(716233),
                v = i(166677),
                w = i(221562),
                S = i(755296),
                b = i(946208),
                T = i(540387),
                L = i(653798),
                I = i(499627),
                O = i(917799),
                F = i(390387),
                E = i(38562),
                A = i(601576),
                D = i(111531),
                M = i(537052);
            const x = d().g40ff2b4,
                U = "mediaUpload",
                k = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                P = `rweb/${U}`,
                C = [],
                N = "upload";
            class z extends Error {
                constructor(e, { code: t, isGif: i, isImage: a, isVideo: r, type: s }) {
                    super(e), (this.code = t), (this.type = s), (this.isGif = !!i), (this.isImage = !!a), (this.isVideo = !!r);
                }
            }
            function R(e, t, i) {
                let r = null,
                    s = {},
                    n = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (n = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, S.s)().isLoggedIn)) {
                    const e = (0, h.ej)({ cookieName: a.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        n.sruHeaders = { ...(0, f.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, a.Oj)(!1), [a.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (n.uploadUrl = k),
                    {
                        upload(t) {
                            (r = new _.Z(e, n)), (s = t), r.upload(s);
                        },
                        amendUpload(e) {
                            (s = { ...s, ...e }), r && r.upload(s);
                        },
                        uploadExternalMedia(t, i, a, s) {
                            (r = new _.Z(e, n)), r.uploadExternalMedia(t, i, a, s);
                        },
                        cancel() {
                            r && r.cancel();
                        },
                    }
                );
            }
            const B = (e) => e[U],
                V = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[U].filter((e) => i.some((t) => t === e.id));
                },
                Z = (e, t) => {
                    const i = V(e, t);
                    if (!i.length) return 0;
                    const a = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(a, 1);
                },
                K = "rweb/mediaUpload/ADD_MEDIA",
                G = (e) => ({ payload: e, type: K });
            let j = 1;
            function $(e, t) {
                return (i, a, { featureSwitches: r, relayEnvironment: s }) => {
                    const n = Array.from(e, (e) => {
                            if ((0, T.Wv)(e)) {
                                const i = new T.ZP(e, t.isAmplify);
                                if ((0, y.TO)(e)) {
                                    const e = r.isTrue("responsive_web_hevc_upload_preview_enabled") && r.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, b.h_)(e) ? Promise.resolve(new b.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        l = i((e, t, { relayEnvironment: i }) =>
                            o()(i, L.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, D.K3)(s));
                    return Promise.all(n)
                        .then(
                            (e) => {
                                const a = i(
                                    (function (e, t) {
                                        return (i, a, { featureSwitches: r, userClaims: s }) => {
                                            const { uploadIds: n = [], altTexts: o = [] } = t,
                                                l = (0, E.IX)(a()),
                                                d = (Array.isArray(e) ? e : [e]).map((e, d) => {
                                                    const m = r.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let p;
                                                    t.location && (p = _e(t.location, e, !1, { featureSwitches: r, userClaims: s }));
                                                    const _ = e instanceof T.ZP ? e.duration : void 0,
                                                        g = e instanceof u.ZP ? e.orientation : void 0,
                                                        h = m && p ? new w.ZP({ isExternal: !1, mediaCategory: p, videoDuration: _ }, l) : void 0,
                                                        f = r.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        v = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof T.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: a, width: r } = e;
                                                                        (i.width = r), (i.height = a);
                                                                        i.getContext("2d").drawImage(t, 0, 0, r, a), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        h?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: g }),
                                                        (0, y.vn)(r, s, e, t, l).then(({ maxDimension: l, maxFileSize: m }) => {
                                                            const p = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: m, maxDimension: l, jpgPixelsPerByteForResize: v }),
                                                                _ = (0, y.SB)({ featureSwitches: r, userClaims: s }),
                                                                g = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, F.dY)(a()) },
                                                                w = p ? void 0 : R(e.fileHandle, r, g),
                                                                S = H({ originalMediaFile: e, mediaFile: e, mediaFileHash: f ? void 0 : null, needsProcessing: p, location: t.location, uploadId: n[d] ?? "", reporter: h, uploader: w, mediaMetadata: { altText: o[d] }, abortController: f ? new AbortController() : void 0 });
                                                            return f && he(i, a, S.id, e.fileHandle, S.reporter, S.abortController), S;
                                                        })
                                                    );
                                                });
                                            return Promise.all(d).then((e) => (i(G(e)), e));
                                        };
                                    })(e, t),
                                );
                                return a;
                            },
                            (e) => {
                                const t = (0, v.vK)(e);
                                return t && i((0, A.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            l
                                .then((t) => {
                                    if (t) for (const t of e) i(re(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const X =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: a, previewUrl: r, sourceUrl: s, stillMediaUrl: n, width: o }) =>
                (l, d, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new w.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(w.BX.Full, !0);
                    const m = { actAsUserId: (0, F.dY)(d()) },
                        p = H({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: r || s, previewMediaType: a || i, sourceUrl: s, stillMediaUrl: n, width: o, height: e }, reporter: c, uploader: R(null, u, m) });
                    return l(G(p)), c?.toggleOperationPaused(w.BX.Full, !0), [p];
                };
            function H(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const W =
                    (e) =>
                    (t, i, { featureSwitches: a, userClaims: r }) => {
                        const [s] = V(i(), e);
                        if (!s) return Promise.reject(new Error("media item not found"));
                        const { abortController: n, cropData: o, id: l, location: d, mediaFile: m, needsProcessing: p, originalMediaFile: _ } = s;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const g = a.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            h = (0, E.IX)(i()),
                            f = { location: d };
                        return (0, y.vn)(a, r, _, f, h).then((e) => {
                            const r = { cropData: o, jpgPixelsPerByteForResize: g, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                d = e.maxFileSize || 0,
                                h = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return p
                                    ? (0, c.ZP)(_, r)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (n?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== m && m && m.dispose(), s.uploader && s.uploader.cancel && s.uploader.cancel();
                                              const r = { actAsUserId: (0, F.dY)(i()) },
                                                  n = R(e.fileHandle, a, r),
                                                  o = t(ie({ id: l, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: n }));
                                              return (s.uploadId || s.uploading) && t(me([l])), o;
                                          })
                                    : Promise.resolve(s);
                            if (_.size > d) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? y.BW.GIF_IS_TOO_LARGE : y.BW.VIDEO_IS_TOO_LARGE, d]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof T.ZP && _.duration > h) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", y.ff.VIDEO_IS_TOO_LONG, h]), Promise.reject(e);
                            }
                            return Promise.resolve(s);
                        });
                    },
                Y = (e, t) => (i, a) => {
                    const { onFailure: r } = t,
                        n = [];
                    return new Promise((t, a) => {
                        const o = (e) => {
                            if (!e.length) return t(n);
                            const [a] = e;
                            s()(() => {
                                a.reporter?.reportOperationStart(w.BX.Full, !0),
                                    a.reporter?.reportOperationStart([w.BX.Processing, w.BX.Metadata]),
                                    a.reporter?.reportOperationComplete(w.BX.Metadata, w.Uk.Complete),
                                    i(W(a.id)).then(
                                        (t) => {
                                            n.push(t), t?.reporter?.reportOperationComplete(w.BX.Processing, w.Uk.Success), t?.reporter?.toggleOperationPaused(w.BX.Full, !0), o(e.slice(1));
                                        },
                                        (t) => {
                                            const s = (0, v.ZP)(t, x);
                                            s && i((0, A.fz)(s));
                                            const { code: n, message: l, name: d, type: u } = t;
                                            a.reporter?.setMetadata({ reason: { name: d, message: l, code: n } });
                                            const m = "maxsize" === u || "maxduration" === u || ("resize" === u && (n === c.Y7.FILE_IS_NOT_AN_IMAGE || n === c.Y7.GIF_IS_TOO_LARGE)) ? w.Uk.Invalid : w.Uk.Failure;
                                            a.reporter?.reportOperationComplete([w.BX.Full, w.BX.Processing], m), r && r(a.id), o(e.slice(1));
                                        },
                                    );
                            });
                        };
                        o(e);
                    });
                },
                q = "rweb/mediaUpload/REMOVE_MEDIA",
                Q = (e) => ({ payload: Array.isArray(e) ? e : [e], type: q });
            function J(e) {
                return (t, i) => {
                    V(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: a, reporter: r, uploader: s } = e;
                        t?.abort(), s && s.cancel && s.cancel(), r?.reportOperationComplete(w.BX.Full, w.Uk.Cancel), i && i.dispose(), a && a.dispose();
                    }),
                        t(Q(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ie(e) {
                return (t, i) => {
                    t(te(e));
                    const [a] = V(i(), e.id);
                    return a;
                };
            }
            function ae(e) {
                return (t, i) => {
                    const [a] = V(i(), e);
                    a.uploader?.cancel(), t(me(e));
                };
            }
            function re(e, t) {
                return (i) => i(ie({ id: e, mediaMetadata: t }));
            }
            const se = "SEND_METADATA",
                ne = O.dg(P, se);
            function oe(e) {
                return (t, i, { api: a }) => O._O(t, { params: e, request: a.withEndpoint(g.Z).metadataCreate })({ actionTypes: ne, context: se });
            }
            const le = "ATTACH_SUBTITLES",
                de = O.dg(P, le);
            function ue(e) {
                return (t, i, a) => {
                    const { subtitlesDisplayName: r, subtitlesLang: s, subtitlesMediaUploadId: n, videoMediaUploadId: o } = e,
                        { api: l, featureSwitches: d, userClaims: u } = a,
                        c = ge(e.mediaItem, !1, { featureSwitches: d, userClaims: u }) || "";
                    return O._O(t, { params: { videoMediaUploadId: o, videoMediaCategory: c, subtitlesLang: s, subtitlesMediaUploadId: n, subtitlesDisplayName: r }, request: l.withEndpoint(g.Z).attachSubtitles })({ actionTypes: de, context: le });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const me =
                    (e, t = Object.freeze({})) =>
                    (i, a, { featureSwitches: r, userClaims: s }) => {
                        const n = V(a(), e),
                            o = (e) => i(ie(e));
                        function l(e, i = !1) {
                            const a = r.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: n, id: d, mediaFile: c, mediaFileHash: m, reporter: p, uploader: g } = e,
                                h = a && c && c.isImage && c instanceof u.ZP,
                                f = void 0 === m;
                            return (
                                p?.toggleOperationPaused(w.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(o({ id: d, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (p?.reportOperationStart(w.BX.UploadSubmitUntilSruFinish), p?.reportUploadSubmit(), h && f && n?.abort(), e.uploading && g && g.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : g
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: a, updateMediaItem: r, uploadMediaItem: s, uploadOptions: n, userClaims: o } = e,
                                                      { abortController: l, externalMediaDetails: d, id: u, reporter: c, uploader: m } = a,
                                                      p = new Promise((e, p) => {
                                                          const g = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([w.BX.Full, w.BX.UploadSubmitUntilSruFinish], w.Uk.Success), e(r({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              h = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (r({ id: u, uploadProgress: M.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(w.BX.SruUpload, w.Uk.Success)) : "processing" === t && r({ id: u, uploadProgress: M.OA("processing", e) });
                                                              },
                                                              f = () => {
                                                                  c?.toggleOperationPaused(w.BX.Full, !0);
                                                              },
                                                              v = (t) => {
                                                                  const { code: n, detail_message: o, maxSizeBytes: d, mediaId: g, message: h, name: f } = t;
                                                                  if (a.mediaFile?.isGif && !i && n === y.Tz.INVALID_MEDIA_CODE) m?.amendUpload({ pauseBeforeFinalize: !1 }), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), s(a, !0).then(e).catch(p);
                                                                  else {
                                                                      l?.abort(), r({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: n, message: h, detail_message: o, maxSizeBytes: d }, uploadPromise: void 0 });
                                                                      const e = new z(h ? `${h}` : `Media upload failed [Error code: ${n}]${g ? ` ${g}` : ""}`, { code: n, type: N, isGif: !!a.externalMediaDetails || (a.mediaFile && a.mediaFile.isGif), isImage: a.mediaFile && a.mediaFile.isImage, isVideo: a.mediaFile && a.mediaFile instanceof T.ZP && a.mediaFile.isVideo }),
                                                                          t = n === _.d.CANCELED ? w.Uk.Cancel : w.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: f, message: h, code: n } }), c?.reportOperationComplete([w.BX.Full, w.BX.SruUpload, w.BX.UploadSubmitUntilSruFinish], t), p(e);
                                                                  }
                                                              };
                                                          if (d && a.uploader) a.uploader?.uploadExternalMedia(d.sourceUrl, d.mediaType, d.mediaCategory, { success: g, progress: h, error: v, mediaItem: a });
                                                          else if (a.uploader) {
                                                              const { extraInitParams: e = "", preUpload: r = !1 } = n,
                                                                  { enable_1080p_variant: s, mediaFile: l, mediaFileHash: d } = a,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  m = l && l.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  p = ge(a, i, { featureSwitches: t, userClaims: o }),
                                                                  _ = p ? `&media_category=${p}` : "";
                                                              c?.reportOperationStart(w.BX.SruUpload), a.uploader?.upload({ success: g, progress: h, pause: f, error: v, extraInitParams: e + _, extraFinalizeParams: d ? `&original_md5=${d}` : void 0, trimRanges: ce(a), pauseBeforeFinalize: r, withMultiRequests: m, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", l && l.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || s, mediaItem: a });
                                                          }
                                                      });
                                                  return r({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: p }), p;
                                              })({ mediaItem: e, updateMediaItem: o, uploadMediaItem: l, gifAsStaticImage: i, uploadOptions: t, featureSwitches: r, userClaims: s })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const d = n.map((e) => l(e));
                        return Promise.all(d).catch((e) => {
                            throw (e.type || (e.type = N), e);
                        });
                    },
                pe = (e, t) => {
                    const i = me(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function _e(e, t, i, a) {
                const r = e === y.vC.Tweet || e === y.vC.TwitterArticle,
                    s = e === y.vC.TwitterArticle;
                if (t.isSubtitles) return y.xz.Subtitles;
                if (t.isGif && !i) return r ? y.xz.TweetGif : y.xz.DMGif;
                if (t.isAmplify) return y.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: n } = a,
                        o = (0, y.SB)({ featureSwitches: i, userClaims: n }),
                        l = i.getNumberValue("media_async_upload_amplify_duration_threshold", y.y$.Duration[o]);
                    return "number" == typeof o && 1 === o && e > l ? y.xz.AmplifyVideo : s ? y.xz.TweetVideo : r ? y.xz.AmplifyVideo : y.xz.DMVideo;
                }
                return r ? y.xz.TweetImage : y.xz.DMImage;
            }
            function ge(e, t, i) {
                const { location: a, mediaFile: r } = e;
                if (!a || !r) return null;
                switch (a) {
                    case y.vC.Tweet:
                    case y.vC.Dm:
                    case y.vC.TwitterArticle:
                        return _e(a, r, t, i);
                    case y.vC.CommunityBanner:
                        return y.xz.CommunityBanner;
                    case y.vC.ListBanner:
                        return y.xz.ListBanner;
                    case y.vC.ProfileBanner:
                        return y.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const he = (e, t, i, a, r, s) => {
                r?.reportOperationStart(w.BX.Hash, !0),
                    r?.setMetadata({ hashState: w.Xj.InProgress }),
                    (0, m.Q)(a, s)
                        .then((a) => {
                            const [s] = V(t(), i);
                            if (!s) {
                                throw new z("Media item was removed", { code: m.S.HASHING_ABORTED, type: N, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ie({ id: i, mediaFileHash: a, abortController: void 0 }));
                            const { uploadPromise: n, uploader: o, uploading: l } = s;
                            n && l && o && o.amendUpload({ extraFinalizeParams: a ? `&original_md5=${a}` : void 0 }), r?.setMetadata({ hashState: w.Xj.Complete }), r?.reportOperationComplete(w.BX.Hash, w.Uk.Success);
                        })
                        .catch((a) => {
                            const [s] = V(t(), i);
                            s && e(ie({ id: i, mediaFileHash: null, abortController: void 0 })), a.code === m.S.HASHING_ABORTED ? (r?.setMetadata({ hashState: w.Xj.Canceled }), r?.reportOperationComplete(w.BX.Hash, w.Uk.Cancel)) : (r?.setMetadata({ hashState: w.Xj.Failure }), r?.reportOperationComplete(w.BX.Hash, w.Uk.Failure));
                        });
            };
            I.Z.register({
                [U]: function (e = C, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case K:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, p.Z)(i.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...i };
                                      }
                                      return e;
                                  })
                                : e;
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        653798: (e, t, i) => {
            i.d(t, { S: () => r });
            var a = i(326439);
            i(585488);
            const r = a.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d.e5594f3a.js.map
