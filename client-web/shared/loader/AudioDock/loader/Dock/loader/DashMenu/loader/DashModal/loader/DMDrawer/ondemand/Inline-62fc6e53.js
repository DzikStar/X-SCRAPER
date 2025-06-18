(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53", "ondemand.Dropdown"],
    {
        326439: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => d });
            var n,
                s,
                r,
                a,
                o,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (a = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
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
                                                    s,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            r,
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
                                                                    a,
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
            "use strict";
            i.d(t, { Z: () => d });
            var n,
                s,
                r,
                a,
                o,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (n = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (s = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (a = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [a, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            l.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = l;
        },
        882127: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => s });
            var n = {
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
            const s = n;
        },
        797553: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, { default: () => E });
            var n = i(807896),
                s = i(202784),
                r = i(878052),
                a = i(325686),
                o = i(666536),
                l = i(815858),
                d = i(67877),
                u = i(743618),
                c = i(745153),
                h = i(666305),
                m = i(667115),
                p = i(175993),
                g = i(365023),
                f = i(292627),
                _ = i(224162),
                y = i(386802),
                w = i(537392),
                S = i(392237);
            const v = S.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: S.default.absoluteFillObject, mask: { ...S.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...S.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class E extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: i, ctrlKey: n, key: s, metaKey: r } = e;
                            !(i || n || r) && "Escape" === s && t();
                        }),
                        (this._receiveBodyRectHelperRef = (e) => {
                            e && this._bodyRectHelperNode !== e && ((this._bodyRectHelperNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (e) => {
                            e && this._anchorNode !== e && ((this._anchorNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (e) => {
                            e && this._contentNode !== e && ((this._contentNode = e), this._scheduleUpdate(), this._observe(e));
                        }),
                        (this._observe = (e) => {
                            const t = () => {
                                this._scheduleUpdate();
                            };
                            h.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    h.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                i = this._contentNode.scrollWidth,
                                { left: n, top: s, width: r } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: a, width: o } = (0, w.iv)();
                            let l = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (l = { ...l, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (l = this._anchorNode.getBoundingClientRect());
                            const { height: d, left: u, top: c, width: h } = l,
                                m = o - r,
                                p = u - n,
                                g = c - s,
                                f = u + h >= i,
                                _ = c + d >= t,
                                y = o - u >= i,
                                S = a - c >= t,
                                v = o >= u + h / 2 + i / 2 && u >= i / 2 - h / 2,
                                E = this.props.preferredVerticalOrientation,
                                O = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                I = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: i }) => ((t && e) || (!t && !e) ? i : t ? "up" : "down"))({ verticalPreference: E, canOrientUp: _, canOrientDown: S }),
                                T = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: i, horizontalPreference: n }) => ("center" === n && e ? "center" : !t || ("left" !== n && i) ? "right" : "left"))({ horizontalPreference: O, canOrientLeft: f, canOrientRight: y, canOrientCenter: v }),
                                F = this.props.isFixed ? u : p,
                                D = this.props.isFixed ? c : g,
                                b = "up" === I ? D + d - t : D;
                            let k = o - F - h - m;
                            "center" === T && (k = o - F - h / 2 - i / 2 - m), "right" === T && (k = o - F - i - m), this.setState({ top: Math.max(b, 0), right: k, verticalOrientation: I, horizontalOrientation: T });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, d.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, o.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), r.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), r.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: i, contentStyle: r, disableMask: o, isFixed: d, onDismiss: h, preventFocusShift: E, withKeyboardNavigation: O } = this.props,
                        { right: I, top: T, verticalOrientation: F } = this.state,
                        D = void 0 === T,
                        b = O ? u.Z : s.Fragment,
                        k = `calc(100vh - ${T || 0}px)`,
                        R = (u) => {
                            const c = "rtl" === u,
                                m = [v.content, D && v.contentInitialRender, d && [v.contentFixed, { maxHeight: k }], { top: T, end: c ? void 0 : I, start: c ? I : void 0 }, r];
                            return s.createElement(
                                s.Fragment,
                                null,
                                o ? null : s.createElement(a.Z, { onClick: h, style: v.mask }),
                                s.createElement(a.Z, { ref: this._receiveBodyRectHelperRef, style: v.bodyRectHelper }),
                                s.createElement(w.ZP, null, ({ windowWidth: r }) => s.createElement(a.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [r < S.default.theme.breakpoints.medium ? v.rootNarrow : v.rootWide, m] }, D && "slide" === t ? i : s.createElement(l.Z, { animateMount: "up" !== F, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => s.createElement(g.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => s.createElement(a.Z, (0, n.Z)({ ref: e() }, t({})), i))))),
                            );
                        };
                    return s.createElement(
                        _.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            s.createElement(
                                a.Z,
                                { ref: this._receiveAnchorRef, style: v.anchor },
                                s.createElement(
                                    f.Z.Dropdown,
                                    null,
                                    s.createElement(p.Z.Consumer, null, (t) => s.createElement(y.Z.Consumer, null, ({ isModal: i }) => s.createElement(m.Z, { history: t, isModal: i, onDismiss: h }, E ? R(e) : s.createElement(c.Z, null, s.createElement(b, null, R(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            E.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        401339: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            const n = {},
                s = ["touchend", "touchmove", "touchstart"];
            const r = {
                isTouchSupported: () =>
                    s.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== n[e]) return n[e];
                                const i = document.createElement(t || "div"),
                                    s = `on${e}`;
                                let r = s in i;
                                return r || (i.setAttribute(s, "return;"), (r = "function" == typeof i[s])), (n[e] = r), r;
                            })(e),
                    ),
            };
        },
        586035: (e, t, i) => {
            "use strict";
            function n(e) {
                return Boolean(e.voiceInfo?.clipIndex);
            }
            i.d(t, { B: () => n });
        },
        67877: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = (e, t) => {
                let i = null;
                const n = () => {
                    (i = null), e();
                };
                return () => (i || (i = t(n)), i);
            };
        },
        19697: (e, t, i) => {
            "use strict";
            i.d(t, { q8: () => d, $i: () => r });
            i(571372);
            var n = i(790187);
            const s = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), i;
            };
            function r(e, t, i, s, r) {
                return l(t, i).then(
                    (t) => (
                        (function (e, t, i, s, r, a) {
                            const o = a || { top: 0, left: 0, width: t.width, height: t.height };
                            let l = o.left,
                                d = o.top,
                                u = o.width,
                                c = o.height,
                                h = 0,
                                m = 0,
                                p = i,
                                g = s;
                            switch ((e.save(), r)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (l = t.width - o.width - o.left), (h = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (l = t.width - o.width - o.left), (d = t.height - o.height - o.top), (h = -i), (m = -s);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - o.height - o.top), (m = -s);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (l = o.top), (d = o.left), (u = o.height), (c = o.width), (h = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), (l = o.top), (d = t.height - o.width - o.left), (u = o.height), (c = o.width), (h = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (l = t.width - o.height - o.top), (d = t.height - o.width - o.left), (u = o.height), (c = o.width), (h = -s / 2), (m = -i / 2), (p = s), (g = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), (l = t.width - o.height - o.top), (d = o.left), (u = o.height), (c = o.width), (h = -s / 2), (m = -i / 2), (p = s), (g = i);
                            }
                            e.drawImage(t, l, d, u, c, h, m, p, g), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, s, r),
                        t
                    ),
                );
            }
            const a = 3145728,
                o = 5242880;
            function l(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = s(e, t);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > o) {
                                const i = u(o, e, t);
                                return l(i.width, i.height);
                            }
                            if (i > a) {
                                const i = u(a, e, t);
                                return l(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function d(e) {
                return new Promise((t, i) => {
                    const n = e.toDataURL("image/jpeg");
                    n && "data:," !== n ? t(n) : i(new Error("Malformed canvas"));
                });
            }
            function u(e, t, i) {
                const n = Math.sqrt((e * i) / t),
                    s = (t * n) / i;
                return { height: Math.floor(n), width: Math.floor(s) };
            }
        },
        790187: (e, t, i) => {
            "use strict";
            i.d(t, { C: () => r, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                s = (e, t, i = 65536) => {
                    let n = new Uint8Array([]),
                        s = 0;
                    function r(r, a, o) {
                        const l = r - s,
                            d = l + a;
                        if (l >= 0 && d <= n.length) o(n.subarray(l, d), r);
                        else {
                            const l = new FileReader();
                            (l.onload = function () {
                                (n = new Uint8Array(this.result)), (s = r), o(n.subarray(0, a), r);
                            }),
                                (l.onerror = t.bind(null, 0)),
                                null !== e && l.readAsArrayBuffer(e.slice(r, r + Math.max(i, a)));
                        }
                    }
                    function a(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function n(t, n) {
                            let s = 0;
                            for (let r = 0; r < n; r++) s = (s << 8) + e[t + (i ? r : n - 1 - r)];
                            return s;
                        }
                        const s = e.length > 8 && n(4, 4);
                        if (!s || s + 2 > e.length) return void t(0);
                        let r = n(s, 2);
                        if (s + 12 * r + 6 > e.length) return void t(0);
                        let a = s + 2;
                        for (; r > 0; ) {
                            if (((r -= 1), 274 === n(a, 2) && 3 === n(a + 2, 2) && 1 === n(a + 4, 4))) return void t(n(a + 8, 2));
                            a += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? r(0, 10, function e(i, n) {
                              const s = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === s) return void t(0);
                              const o = s < 208 || s > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === s && o > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? r(n + 10, o - 8, a) : r(n + 2 + o, 10, e);
                          })
                        : t(0);
                },
                r = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((r) => {
                        i
                            ? r(n.TOP_LEFT)
                            : s(
                                  e,
                                  (e) => {
                                      r(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        549755: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            i(571372);
            class n extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            "use strict";
            i.d(t, { DS: () => o, ZP: () => l });
            i(543673), i(240753), i(128399);
            var n = i(790187),
                s = i(276259),
                r = i(122123);
            function a(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [s, r] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: s, height: r };
            }
            const o = (e) => {
                const t = e instanceof l,
                    i = e.isImage || e.isGif,
                    n = e.orientation,
                    s = e.width && e.height,
                    r = e.img;
                return !!(t && i && n && s && r);
            };
            class l {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === s.Re), (this.isImage = s.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, r.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: n } = a(e, t);
                                  return (this.img = e), (this.width = n), (this.height = i), (this.orientation = t), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((e) => t(e === n.Z.UNKNOWN ? n.Z.TOP_LEFT : e))
                                  .catch(() => t(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, i) => {
            "use strict";
            i.d(t, { gK: () => s, o2: () => a, po: () => r });
            var n = i(549755);
            const s = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function r(e) {
                return new Promise((t, i) => {
                    const r = (e, t) => {
                            const r = new n.Z(e, t, s.type);
                            i(r);
                        },
                        a = new Image();
                    (a.onload = () => {
                        a.width && a.height ? t(a) : r("Image lacks height or width", s.NO_DIMENSIONS);
                    }),
                        (a.onerror = () => {
                            r("Error loading image", s.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
            function a(e) {
                return new Promise((t, i) => {
                    const r = (e, t) => {
                            const r = new n.Z(e, t, s.type);
                            i(r);
                        },
                        a = new Image();
                    a.setAttribute("crossorigin", "anonymous"),
                        (a.onload = () => {
                            if (a.width && a.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = a.width),
                                    (e.height = a.height),
                                    i.drawImage(a, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else r("Failed to convert image to blob", s.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else r("Image lacks height or width", s.NO_DIMENSIONS);
                        }),
                        (a.onerror = () => {
                            r("Error loading image", s.LOAD_FAILED);
                        }),
                        (a.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            "use strict";
            i.d(t, { Q: () => l, S: () => o });
            var n = i(332775),
                s = i.n(n),
                r = i(276259),
                a = i(549755);
            const o = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                l = (e, t) =>
                    (0, r.qp)(e, t)
                        .catch((e) => {
                            throw new a.Z(`An error occurred while reading the image file: ${e}`, e.message === r.ZF ? o.HASHING_ABORTED : o.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = s()(e);
                            if (t && "string" == typeof t) return t;
                            throw new a.Z("Hash is not a non-empty string", o.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            "use strict";
            i.d(t, { Y7: () => m, ZP: () => v, m2: () => y });
            var n = i(19697),
                s = i(790187),
                r = i(549755),
                a = i(205074),
                o = i(276259);
            function l(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function s(r, a) {
                        return d(e, e.width, e.height, r, a).then((e) => {
                            const l = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", n),
                                u = d.split(";base64,")[1],
                                c = (0, o.ku)(u);
                            if (l || c > t) {
                                let e = 0.8;
                                return l && (e = r > a ? i / r : i / a), s(r * e, a * e);
                            }
                            return d;
                        });
                    }
                    return s(e.width, e.height);
                })(e, i, t, n).then(o.Lw);
            }
            function d(e, t, i, s, r) {
                const a = t / 2,
                    o = i / 2;
                return e instanceof HTMLCanvasElement && t <= s && i <= r ? Promise.resolve(e) : a <= s && o <= r ? (0, n.$i)(e, s, r) : (0, n.$i)(e, a, o).then((e) => d(e, e.width, e.height, s, r));
            }
            const u = 5242880,
                c = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== s.Z.TOP_LEFT && e.orientation !== s.Z.UNKNOWN,
                g = (e, t = u, i = c) => {
                    const { height: n, size: s, width: r } = e;
                    return r > i || n > i || s > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                _ = (e, t) => {
                    const { height: i, left: n, top: s, width: r } = f(e, t);
                    return !(0 === s && 0 === n && r === e.width && i === e.height);
                };
            function y(e, t) {
                const { maxFileSize: i = u, maxDimension: n = c, cropData: s, jpgPixelsPerByteForResize: r } = t || {},
                    a = "image/jpeg" === e.type,
                    o = (e.width * e.height) / e.size;
                return p(e) || g(e, i, n) || _(e, s) || (a && !!r && o < r);
            }
            const w = (e, t) => {
                    const { height: i, width: n } = e;
                    return n <= t && i <= t ? { width: n, height: i } : n > i ? { width: t, height: Math.round(i / (n / t)) } : { width: Math.round(n / (i / t)), height: t };
                },
                S = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function v(e, t) {
                const { maxFileSize: i = u, maxDimension: s = c, targetQuality: o = h, cropData: d } = t || {},
                    p = f(e, d);
                if (!y(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, a.DS)(e)) {
                    const e = new r.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new r.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const g = (e) => l(e, { maxFileSize: i, maxDimension: s, targetQuality: o });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: s }) => (0, n.$i)(e, s, i, t, p);
                        return S(e)
                            .then(() => ((e) => e(w(p, s)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const e = new r.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        459643: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => n });
            const n = (e) => () => e;
        },
        666536: (e, t, i) => {
            "use strict";
            i.d(t, { Z: () => r });
            var n = i(936386),
                s = i.n(n);
            const r = (e, t, i) => s()(e, t, i);
        },
        417144: (e, t, i) => {
            "use strict";
            function n(e, t = 1) {
                let i = t;
                const n = new Map();
                let s = 0,
                    r = 0,
                    a = 0,
                    o = null;
                function l() {
                    n.clear(), (s = 0), (r = 0), (a = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        n.set(e, { time: Date.now(), bytes: t }), r || (r = Date.now());
                    },
                    uploadFinish: function (d, u) {
                        const c = n.get(d);
                        c &&
                            ((s += u - c.bytes),
                            n.delete(d),
                            ++a === i &&
                                (function () {
                                    if (!r) return;
                                    const n = Date.now() - r;
                                    if (n <= 0) return;
                                    if (1 !== t) return;
                                    const a = s / n;
                                    if (a < 5e3 && 1 === i) return;
                                    !o || o.byterate < a ? ((i += 1), e(), (o = { byterate: a, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (o = null));
                                    l();
                                })());
                    },
                    reset: l,
                    getPoolSize: () => i,
                    start: function () {
                        for (let t = 0; t < i; ++t) e();
                    },
                };
            }
            i.d(t, { Z: () => u, d: () => y });
            i(543673), i(240753), i(128399);
            function s(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const n = e[i];
                    n && t.set(i, n);
                }
                return `&${String(t)}`;
            }
            function r(e, t = o, i = a) {
                const n = Math.max(e, t);
                return Math.min(n, i);
            }
            const a = 5242880,
                o = 65536,
                l = 2e3,
                d = 1e4;
            class u {
                constructor(e, t = v) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), r(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== S.SUCCEEDED && this.state !== S.PENDING && ((this.state = S.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? n(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: y.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || v), (this.state = S.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = S.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = v),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return r(((1e3 * e.downlink) / 8 / 2) * l);
                                    if ("wifi" === t) return r(5 * o);
                                }
                                return r(2 * o);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, n = v) {
                    (this.uploadOptions = n), (this.state = S.PENDING), (this.progressMode = "uploading");
                    let r = s({ source_url: e, media_type: t, media_category: i });
                    (r += this.uploadOptions.extraInitParams || ""), (r += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        r,
                        (e) => {
                            (this.mediaId = e.media_id_string), this._getStatus();
                        },
                        (...e) => this._uploadError(...e),
                        h,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const e = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (e.enable_1080p_variant = String(!0));
                        const { mediaItem: t } = this.uploadOptions;
                        if (t?.mediaFile?.duration) {
                            const i = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(i);
                        }
                        let i = s(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                h,
                            );
                    } else this._uploadError({ code: y.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === S.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(c, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: y.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let e = 0;
                    this.inflightSegments.forEach(({ bytes: t }) => (e += t));
                    const t = e + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (i <= 0) return;
                    const n = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        n.append("media", e);
                    }
                    const r = this.segmentIndex;
                    this.segmentIndex += 1;
                    const a = s({ media_id: this.mediaId, segment_index: String(r) }),
                        o = this._sendXhr(
                            "POST",
                            "APPEND",
                            a,
                            () => {
                                if (this.state === S.PENDING) {
                                    const e = this.inflightSegments.get(r);
                                    e && (this.inflightSegments.delete(r), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            n,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(r, { bytes: i, request: o });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = S.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = s(e);
                        (t += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                t,
                                (...e) => this._finalizeOrStatusSuccess(...e),
                                (...e) => this._uploadError(...e),
                                h,
                            );
                    }
                }
                _finalizeOrStatusSuccess(e) {
                    this._setSessionTimeout(e.expires_after_secs);
                    const t = e.processing_info;
                    if (!t) return void this._finalizeSuccess(e);
                    let i = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (i = t.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let i;
                            return (i = e?.code ? w[String(e.code)] : y.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const n = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * n);
                }
                _getStatus() {
                    if (this.state === S.PENDING) {
                        const e = s({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            h,
                        );
                    }
                }
                _finalizeSuccess(e) {
                    this.state === S.PENDING && ((this.state = S.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== S.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: y.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: y.INTERNAL_ERROR, message: e?.error });
                    (this.state = S.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== S.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === S.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === S.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const n = i.requestStartTime || this.initStartTime,
                        s = new Date().getTime() - n.getTime();
                    if (((this.totalUploadDuration += s), this.uploadOptions.stats)) {
                        const n = { mediaType: this.mediaType || "", command: e, status: t, duration: s, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (n.appendByteSize = i.segmentBytes), this.uploadOptions.stats(n);
                    }
                }
                _sendXhr(e, t, i, n, s, a, o, d, u = 0) {
                    const c = `${this.uploadUrl}?command=${t}${i}`;
                    let h = !1;
                    const p = new Date(),
                        g = (r) => {
                            if (a) {
                                const r = [c, a].join("-");
                                this.timeoutIdMap[r] = setTimeout(() => {
                                    this._sendXhr(e, t, i, n, s, a - 1, o, d, u);
                                }, _);
                            } else w(r);
                        },
                        w = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: u }), "function" == typeof s && s(E(S) || { code: y.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        S = new XMLHttpRequest();
                    S.open(e, c, !0),
                        (S.withCredentials = !0),
                        (S.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (S.onload = () => {
                            if (S.status >= 200 && S.status < 400) {
                                const e = E(S);
                                204 === S.status || e ? (this._stats(t, "success", { requestStartTime: p, segmentBytes: u }), n(e || {}), !h && d && d()) : g("parsererror");
                            } else S.status && 503 !== S.status ? w("invalid-response") : g("503");
                        }),
                        (S.onerror = () => g("error")),
                        (S.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let v = !1;
                    S.upload.onprogress = (e) => {
                        v ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(c, e.total) : ((v = !0), this._bitrateMonitor?.uploadStart(c, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > f && !h && ((h = !0), o))) {
                            const e = Math.max(1, new Date().getTime() - p.getTime()),
                                i = this.minSegmentBytes,
                                n = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || l,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return r(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: n, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) S.setRequestHeader(e, this.sruHeaders[e]);
                    return o ? S.send(o) : S.send(), S;
                }
            }
            const c = 2147483647,
                h = 1,
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                f = 0.95,
                _ = 1e3,
                y = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                w = Object.freeze({ 0: y.INTERNAL_ERROR, 1: y.INVALID_MEDIA, 2: y.FILE_TOO_LARGE, 3: y.UNSUPPORTED_MEDIA, 4: y.TIMEOUT }),
                S = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                v = {};
            function E(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        936386: (e) => {
            function t(e, t, i) {
                var n, s, r, a, o;
                function l() {
                    var d = Date.now() - a;
                    d < t && d >= 0 ? (n = setTimeout(l, t - d)) : ((n = null), i || ((o = e.apply(r, s)), (r = s = null)));
                }
                null == t && (t = 100);
                var d = function () {
                    (r = this), (s = arguments), (a = Date.now());
                    var d = i && !n;
                    return n || (n = setTimeout(l, t)), d && ((o = e.apply(r, s)), (r = s = null)), o;
                };
                return (
                    (d.clear = function () {
                        n && (clearTimeout(n), (n = null));
                    }),
                    (d.flush = function () {
                        n && ((o = e.apply(r, s)), (r = s = null), clearTimeout(n), (n = null));
                    }),
                    d
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        987809: (e, t, i) => {
            "use strict";
            i.d(t, { O4: () => l, xu: () => r });
            var n = i(565058);
            const s = Symbol("");
            function r(e, t) {
                let i = null;
                const n = new Map(),
                    s = (r) => {
                        let a;
                        if (void 0 === t) a = n.get(r);
                        else
                            for (const [e, i] of n)
                                if (t(e, r)) {
                                    a = i;
                                    break;
                                }
                        if (void 0 !== a) {
                            if (!(null == i ? void 0 : i(a[1], r))) return a[0];
                            s.remove(r);
                        }
                        const o = e(r);
                        return n.set(r, [o, Date.now()]), o;
                    };
                return (
                    (s.remove = (e) => {
                        if (void 0 === t) n.delete(e);
                        else
                            for (const [i] of n)
                                if (t(i, e)) {
                                    n.delete(i);
                                    break;
                                }
                    }),
                    (s.setShouldRemove = (e) => {
                        if (((i = e), i)) for (const [e, t] of n) i(t[1], e) && n.delete(e);
                    }),
                    s
                );
            }
            const a = (e) => "function" == typeof (null == e ? void 0 : e.then);
            const o = (function (
                e = () => {
                    try {
                        return window.localStorage;
                    } catch (e) {
                        return void 0;
                    }
                },
                t,
            ) {
                let i, n;
                const s = {
                    getItem: (s, r) => {
                        var o, l;
                        const d = (e) => {
                                if (i !== (e = e || "")) {
                                    try {
                                        n = JSON.parse(e, null == t ? void 0 : t.reviver);
                                    } catch {
                                        return r;
                                    }
                                    i = e;
                                }
                                return n;
                            },
                            u = null != (l = null == (o = e()) ? void 0 : o.getItem(s)) ? l : null;
                        return a(u) ? u.then(d) : d(u);
                    },
                    setItem: (i, n) => {
                        var s;
                        return null == (s = e()) ? void 0 : s.setItem(i, JSON.stringify(n, null == t ? void 0 : t.replacer));
                    },
                    removeItem: (t) => {
                        var i;
                        return null == (i = e()) ? void 0 : i.removeItem(t);
                    },
                };
                return (
                    "undefined" != typeof window &&
                        "function" == typeof window.addEventListener &&
                        window.Storage &&
                        (s.subscribe = (t, i, n) => {
                            if (!(e() instanceof window.Storage)) return () => {};
                            const s = (s) => {
                                if (s.storageArea === e() && s.key === t) {
                                    let e;
                                    try {
                                        e = JSON.parse(s.newValue || "");
                                    } catch {
                                        e = n;
                                    }
                                    i(e);
                                }
                            };
                            return (
                                window.addEventListener("storage", s),
                                () => {
                                    window.removeEventListener("storage", s);
                                }
                            );
                        }),
                    s
                );
            })();
            function l(e, t, i = o, r) {
                const a = null == r ? void 0 : r.getOnInit,
                    l = (0, n.cn)(a ? i.getItem(e, t) : t);
                l.onMount = (n) => {
                    let s;
                    return a || n(i.getItem(e, t)), i.subscribe && (s = i.subscribe(e, n, t)), s;
                };
                return (0, n.cn)(
                    (e) => e(l),
                    (n, r, a) => {
                        const o = "function" == typeof a ? a(n(l)) : a;
                        return o === s ? (r(l, t), i.removeItem(e)) : o instanceof Promise ? o.then((t) => (r(l, t), i.setItem(e, t))) : (r(l, o), i.setItem(e, o));
                    },
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53.f46da54a.js.map
