"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a", "icons/IconGrid-js", "icons/IconGrokCompose-js", "icons/IconGrokCreate-js", "icons/IconGrokFun-js", "icons/IconHashStroke-js", "icons/IconHeartPlus-js", "icons/IconHistory-js", "icons/IconIllustrationReceiveCoins-js", "icons/IconIllustrationSafetyBlock-js", "icons/IconIllustrationSafetyMute-js", "icons/IconIllustrationSparkleOn-js", "icons/IconIncomingFill-js", "icons/IconInstitutionStroke-js", "icons/IconLayers-js", "icons/IconLivePill-js", "icons/IconLoadingReasoning-js", "icons/IconMedicalPill-js", "icons/IconMegaphone-js", "icons/IconMessagesArrowLeftStroke-js", "icons/IconMinusCircle-js", "icons/IconNetwork-js", "icons/IconNewColumnStroke-js", "icons/IconNewDeckStroke-js", "icons/IconPasswordCircle-js", "icons/IconPhotoRotate-js", "icons/IconPinStrokeOff-js", "icons/IconPlusCircle-js", "icons/IconProfanity-js", "icons/IconPromotedCircle-js", "icons/IconRatingNoMargin-js", "icons/IconSafetyFill-js", "icons/IconShare-js", "icons/IconShoppingStroke-js", "icons/IconStarStroke-js", "icons/IconStockGraph-js", "icons/IconStop-js", "icons/IconSuperlikes-js", "icons/IconTwitterCoinGray-js", "icons/IconUnlock-js", "icons/IconXHeart-js", "icons/IconYelpRating10NoMargin-js"],
    {
        927974: (e, t, l) => {
            l.d(t, { Z: () => n });
            var i,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (i = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "personalityHooksAllPersonalitiesQuery",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokUserPersonalitiesResponse",
                                kind: "LinkedField",
                                name: "grok_user_personalities",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonalityWithId",
                                        kind: "LinkedField",
                                        name: "personalities",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "GrokPersonality",
                                                kind: "LinkedField",
                                                name: "personality",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "initial_user_prompt", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality_id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "personalityHooksAllPersonalitiesQuery", selections: r },
                    params: { id: "a5moJWybwfm8-u5Tx05vIw", metadata: {}, name: "personalityHooksAllPersonalitiesQuery", operationKind: "query", text: null },
                };
            a.hash = "e71ee736ad72fd1f1dcd522244f21f22";
            const n = a;
        },
        246851: (e, t, l) => {
            l.d(t, { Z: () => r });
            var i = l(202784);
            function r(e) {
                const t = i.useRef();
                return (
                    i.useEffect(() => {
                        t.current = e;
                    }),
                    t.current
                );
            }
        },
        464653: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M8.5 3C9.881 3 11 4.12 11 5.5v3C11 9.88 9.881 11 8.5 11h-3C4.119 11 3 9.88 3 8.5v-3C3 4.12 4.119 3 5.5 3h3zm7 0C14.119 3 13 4.12 13 5.5v3c0 1.38 1.119 2.5 2.5 2.5h3c1.381 0 2.5-1.12 2.5-2.5v-3C21 4.12 19.881 3 18.5 3h-3zM13 18.5c0 1.38 1.119 2.5 2.5 2.5h3c1.381 0 2.5-1.12 2.5-2.5v-3c0-1.38-1.119-2.5-2.5-2.5h-3c-1.381 0-2.5 1.12-2.5 2.5v3zM5.5 13C4.119 13 3 14.12 3 15.5v3C3 19.88 4.119 21 5.5 21h3c1.381 0 2.5-1.12 2.5-2.5v-3c0-1.38-1.119-2.5-2.5-2.5h-3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        52735: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 25", children: i.createElement("g", null, i.createElement("path", { d: "M11 4.5H8.8c-1.68 0-2.52 0-3.162.327-.564.288-1.023.747-1.311 1.311C4 6.78 4 7.62 4 9.3v6.4c0 1.68 0 2.52.327 3.162.288.565.747 1.023 1.311 1.311.642.327 1.482.327 3.162.327h6.4c1.68 0 2.52 0 3.162-.327.565-.288 1.023-.746 1.311-1.311C20 18.22 20 17.38 20 15.7v-2.2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }), i.createElement("path", { d: "M9 15.5v-2.586c0-.265.105-.52.293-.707L17.25 4.25c.828-.828 2.172-.828 3 0 .828.829.828 2.172 0 3l-7.957 7.957c-.188.188-.442.293-.707.293H9z", stroke: "currentColor", strokeLinecap: "square", strokeLinejoin: "round", strokeWidth: "2" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 25 };
            const c = o;
        },
        964719: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 22 22", children: i.createElement("g", null, i.createElement("path", { d: "M1.833 5.905c0-1.265 1.027-2.292 2.292-2.292h5.958v1.834H4.125c-.257 0-.459.201-.459.458v11.917c0 .256.202.458.459.458h13.75c.247 0 .458-.202.458-.458v-5.959h1.833v5.959c0 1.265-1.026 2.291-2.291 2.291H4.125c-1.265 0-2.292-1.026-2.292-2.291V5.905z" }), i.createElement("path", { d: "M16.139 2.467c.147-.148.323-.266.516-.346.193-.08.4-.121.609-.121.209 0 .416.041.609.121.193.08.368.198.516.346l2.149 2.147c.296.299.462.703.462 1.123 0 .421-.166.825-.462 1.124L13.392 14H9V9.606l7.139-7.14zm1.347.899c-.029-.03-.064-.053-.102-.07-.038-.015-.079-.023-.12-.023-.042 0-.083.008-.12.024-.039.016-.074.04-.103.069l-6.77 6.766v2.597h2.6l6.764-6.767c.03-.029.054-.064.07-.102.017-.039.025-.08.025-.123 0-.041-.008-.083-.025-.122-.016-.038-.04-.073-.07-.103l-2.149-2.146z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 22, height: 22 };
            const c = o;
        },
        61020: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M18 2H6C3.79 2 2 3.79 2 6v12c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4zm-6.07 8.25L6.644 17.8h2.515l4.566-6.52v.532h.611v.782h.612v.781h3.671v-.781h.612v-.782h.612v-.781h.612v-.782h.612v-.781h-6.073l2.274-3.248h-2.515l-2.274 3.248H2.934v.781h.612v.782h.612v.781h.612v.782h.612v.781h3.67v-.781h.613v-.782h.611v-.781h.612v-.782h1.043z", fillRule: "evenodd", xmlns: "http://www.w3.org/2000/svg" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        721569: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        517890: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M15.002 19v.097c-.766.537-1.585 1.072-2.497 1.603l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.737 1.488.82 3.351.075 5.356-.139-.969-.964-1.716-1.971-1.716h-2.501c-1.104 0-2 .896-2 2v1h-.998c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h1zM19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        715614: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 4C9.25 4 6.83 5.39 5.38 7.5H8v2H2v-6h2V6c1.82-2.43 4.73-4 8-4 5.52 0 10 4.48 10 10s-4.48 10-10 10c-4.76 0-8.74-3.33-9.75-7.78l1.95-.44C5.01 17.34 8.19 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8zm-1 4h2v3.59l3.21 3.2-1.42 1.42-3.79-3.8V8z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        892541: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 50 50", children: i.createElement("g", null, i.createElement("circle", { cx: "25", cy: "25", fill: "#0f1419", r: "25" }), i.createElement("path", { d: "M29.81 14.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15zm-9.76 8.43l-4.5 4.5 1.41 1.42 4.5-4.5zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5z", fill: "#fff" })) }, { writingDirection: t });
            };
            o.metadata = { width: 50, height: 50 };
            const c = o;
        },
        208097: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 200 200", children: i.createElement("g", null, i.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }), i.createElement("path", { d: "M68.6 108.4V90.542H100v-48.41c-31.958 0-57.867 25.91-57.867 57.868s25.91 57.867 57.867 57.867V108.41H68.6v-.01z", fill: "#005FD1" }), i.createElement("path", { d: "M100 42.133V90.54h31.4v17.86H100v49.458c31.958 0 57.867-25.908 57.867-57.867S131.957 42.134 100 42.134z", fill: "#1DA1F2" }), i.createElement("path", { d: "M100 90.542h31.4V108.4H100z", fill: "#97E3FF" }), i.createElement("path", { d: "M68.6 90.542H100V108.4H68.6z", fill: "#71C9F8" })) }, { writingDirection: t });
            };
            o.metadata = { width: 200, height: 200 };
            const c = o;
        },
        232130: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 200 200", children: i.createElement("g", null, i.createElement("circle", { cx: "100", cy: "100", fill: "#97E3FF", r: "100" }), i.createElement("path", { d: "M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z", fill: "#005FD1" }), i.createElement("path", { d: "M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z", fill: "#1DA1F2" }), i.createElement("ellipse", { cx: "123.283", cy: "100.225", fill: "#97E3FF", rx: "6.567", ry: "45.075" }), i.createElement("path", { d: "M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z", fill: "#71C9F8" }), i.createElement("path", { d: "M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267", fill: "#005FD1" }), i.createElement("path", { d: "M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z", fill: "#1DA1F2" })) }, { writingDirection: t });
            };
            o.metadata = { width: 200, height: 200 };
            const c = o;
        },
        125498: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 36 36", children: i.createElement("g", null, i.createElement("path", { d: "M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z", fill: "#61BCF6" }), i.createElement("path", { d: "M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z", fill: "#F16888" }), i.createElement("path", { d: "M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z", fill: "#FD9E1A" })) }, { writingDirection: t });
            };
            o.metadata = { width: 36, height: 36 };
            const c = o;
        },
        181839: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M21.5 15.003l-.02 3.516c0 1.64-1.346 2.981-3 2.981H5.5c-1.654 0-3-1.346-3-3V15h3v3.5h12.98l.02-3.515 3 .018zm-3.439-3.942L15.94 8.94l-2.439 2.439V3h-3v8.379L8.062 8.94l-2.121 2.121 6.061 6.061 6.061-6.061z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        286555: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { clipRule: "evenodd", d: "M2 9.5h20V5.618L12 1.5 2 5.618zm18-2.543V7.5H4v-.543l8-3.294z", fillRule: "evenodd" }), i.createElement("path", { d: "M4 10.25h2v9H4zm4.667 0h2v9h-2zm6.666 0h-2v9h2zm2.667 0h2v9h-2zM2 20v2h20v-2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        275450: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        173304: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.5 3h-13C4.119 3 3 4.119 3 5.5v13C3 19.881 4.119 21 5.5 21h13c1.381 0 2.5-1.119 2.5-2.5v-13C21 4.119 19.881 3 18.5 3zM8.505 14.397H6.001V9.601H7.3l.002 3.534h1.203v1.262zm2.024 0H9.23V9.601h1.299v4.796zm3.092.003h-1.473l-1.011-4.799h1.3l.447 2.86.449-2.86h1.297L13.621 14.4zM18 10.862l-1.452.002v.569h1.091v1.178h-1.09v.524H18v1.262h-2.75V9.602H18v1.26z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        74605: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("path", { d: "M8.667 1.334v2.667H7.333V1.334h1.334zM7.333 12.001v2.666h1.334v-2.666H7.333zm4.196-9.694L9.906 4.421l1.058.813 1.623-2.113-1.058-.814zm-6.493 8.46l-1.623 2.114 1.058.813 1.623-2.113-1.058-.814zm-.667-4.573l-2.55-.78-.39 1.273 2.55.78.39-1.273zm10.2 3.12l-2.55-.78-.39 1.273 2.552.78.388-1.273zm-.39-3.9l-2.55.78.39 1.273 2.55-.78-.39-1.273zm-10.2 3.12l-2.55.78.39 1.273 2.55-.78-.39-1.273zm2.115-4.113L4.47 2.307l-1.058.807 1.623 2.12 1.058-.813zm6.493 8.46l-1.623-2.114-1.058.814 1.623 2.113 1.058-.813z", fill: "#91969A" })) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const c = o;
        },
        804796: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("ellipse", { cx: "11.5", cy: "9", fill: "none", rx: "9.75", ry: "4.25", stroke: "currentColor", strokeWidth: "1.5" }), i.createElement("path", { d: "M1.75 9v6c0 2.347 4.365 4.25 9.75 4.25s9.75-1.903 9.75-4.25V9M5.5 5.5l13 6.5", fill: "none", stroke: "currentColor", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        840075: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M22 2.63v17.74l-7.05-2.27c-.29 1.65-1.72 2.9-3.45 2.9C9.57 21 8 19.43 8 17.5V7.13l14-4.5zM10 16.51v.99c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.02l-3-.97zM4.5 15.5H6v-8H4.5C3.12 7.5 2 8.62 2 10v3c0 1.38 1.12 2.5 2.5 2.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        256061: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V13h-2v-2.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H11v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19.429 16l-2 2H23v2h-5.571l2 2-1.414 1.414L13.601 19l4.414-4.414L19.429 16z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        732146: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM16 13H8v-2h8v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        101359: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M20 4.5c-1.378 0-2.5 1.121-2.5 2.5 0 .08.016.155.024.233l-2.392 1.548c-.811-.79-1.915-1.281-3.134-1.281-.635 0-1.238.135-1.786.374L8.21 5.144c.179-.344.29-.729.29-1.143 0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5 1.122 2.5 2.5 2.5c.227 0 .443-.04.653-.097L8.61 9.073c-.683.789-1.112 1.805-1.112 2.929 0 .635.135 1.238.374 1.786l-1.686 1.236c-.481-.329-1.062-.522-1.688-.522-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.3-.058-.584-.14-.857L9.07 15.39c.789.683 1.805 1.112 2.929 1.112.615 0 1.201-.125 1.736-.35l1.125 1.575c-.224.374-.361.807-.361 1.274 0 1.379 1.122 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5c-.177 0-.35.02-.517.055l-1.13-1.583c.706-.795 1.148-1.829 1.148-2.972 0-.541-.111-1.054-.287-1.535l2.287-1.48c.419.318.936.514 1.502.514 1.378 0 2.5-1.121 2.5-2.5s-1.122-2.5-2.5-2.5H20z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        119507: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M4 5.5C4 4.12 5.12 3 6.5 3h11C18.88 3 20 4.12 20 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 21 4 19.88 4 18.5v-13zM6.5 5c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-13c0-.28-.22-.5-.5-.5h-11zM0 18V6h2v12H0zm22 0V6h2v12h-2zm-11-7V8h2v3h3v2h-3v3h-2v-3H8v-2h3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        825103: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18 5V2h2v3h3v2h-3v3h-2V7h-3V5h3zM1 6.5C1 5.12 2.12 4 3.5 4H12v2H9v12h4v-8h2v8h3.5c.28 0 .5-.22.5-.5V13h2v4.5c0 1.38-1.12 2.5-2.5 2.5h-15C2.12 20 1 18.88 1 17.5v-11zM7 18V6H3.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        107821: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10 9V7h4v5l-2 1.5 2 1.5v2h-4v-5l2-1.5L10 9zm12.25 3c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        14420: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-2.192 0-4.184.854-5.663 2.25H8v2H3V3h2v1.513C6.831 2.8 9.293 1.75 12 1.75c4.075 0 7.592 2.378 9.244 5.817l-1.803.866C18.11 5.661 15.277 3.75 12 3.75zm-1.768 4.604c.977-.977 2.559-.977 3.536 0l4.878 4.878c.977.977.977 2.559 0 3.536l-4.878 4.878c-.977.977-2.559.977-3.536 0l-4.878-4.878c-.977-.977-.977-2.559 0-3.536l4.878-4.878zm2.122 1.414c-.196-.195-.512-.195-.708 0l-4.878 4.878c-.195.196-.195.512 0 .708l4.878 4.878c.196.195.512.195.708 0l4.878-4.878c.195-.196.195-.512 0-.708l-4.878-4.878z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        963879: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M17.896 11.553L20.12 16H13v5l-1 2-1-2v-3.752L14.248 14h2.636l-.776-1.553 1.789-.895zm3.813-7.843l-17.999 18-.707-.707-.707-.707L6.592 16H3.88L7 9.76V4.5C7 3.121 8.122 2 9.5 2h5C15.878 2 17 3.121 17 4.5v1.092l3.296-3.296.707.707.707.707zm-6.71 3.882V4.5c0-.275-.224-.5-.5-.5h-5c-.276 0-.5.225-.5.5v5.732L7.115 14h1.476l6.408-6.408z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        982866: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 11V8h2v3h3v2h-3v3h-2v-3H8v-2h3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        630374: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        266550: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M11.998 1.75C6.337 1.75 1.748 6.34 1.748 12s4.589 10.25 10.25 10.25 10.25-4.59 10.25-10.25-4.589-10.25-10.25-10.25zM15.996 15h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        142496: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        668324: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-2.15 0-4.27.53-5.82 1.05-1.09.37-2.15.82-3.18 1.33v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2zm-1 12.91l-3.21-3.2 1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        392032: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23.259 10.5L12 .648v5.581C5.269 7.328 1.995 12.498 2 22.001h2c0-1.914.705-3.537 2.095-4.825 1.5-1.391 3.739-2.259 5.905-2.331v5.507L23.259 10.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        277595: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M16 7V6c0-2.21-1.79-4-4-4S8 3.79 8 6v1H3v11.5C3 19.88 4.12 21 5.5 21h13c1.38 0 2.5-1.12 2.5-2.5V7h-5zm-6-1c0-1.1.9-2 2-2s2 .9 2 2v1h-4V6zm9 12.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5V9h3v3h2V9h4v3h2V9h3v9.5z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        106186: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23.426 9.29L15.54 8.15 12.013 1 8.486 8.15.6 9.29l5.707 5.56-1.348 7.86L12.013 19l7.053 3.71-1.347-7.86 5.707-5.56zm-11.413 7.45l-4.397 2.31.84-4.89-3.558-3.47 4.916-.72 2.199-4.45 2.198 4.45 4.917.72-3.558 3.47.84 4.89-4.397-2.31z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        76745: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.25 12.25c1.243 0 2.25-1.007 2.25-2.25s-1.007-2.25-2.25-2.25m0 4.5c-.685 0-1.298-.306-1.711-.789m1.711.789v8m0-12.5C13.007 7.75 12 8.757 12 10c0 .558.203 1.068.539 1.461M14.25 7.75v-4m-1.711 7.711L9 15l-2-2-3 3M14.25 3.75h-9.5c-.552 0-1 .448-1 1v14.5c0 .552.448 1 1 1h9.5m0-16.5h5c.552 0 1 .448 1 1v14.5c0 .552-.448 1-1 1h-5", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        776933: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M3 5.5C3 4.12 4.12 3 5.5 3h13C19.88 3 21 4.12 21 5.5v13c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-13z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        109449: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        729488: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 16 16", children: i.createElement("g", null, i.createElement("g", { fill: "#536471" }, i.createElement("path", { clipRule: "evenodd", d: "M8.003 14.102c3.368 0 6.099-2.73 6.099-6.099 0-3.367-2.73-6.098-6.099-6.098-3.367 0-6.098 2.73-6.098 6.098s2.73 6.099 6.098 6.099zm0 1.236c4.051 0 7.335-3.284 7.335-7.335 0-4.05-3.284-7.334-7.335-7.334C3.953.669.67 3.953.67 8.003c0 4.051 3.284 7.335 7.334 7.335z", fillRule: "evenodd" }), i.createElement("path", { d: "M12.204 5.58c-.302.127-.626.213-.967.251.348-.197.614-.511.74-.885-.325.183-.685.317-1.069.388-.307-.31-.744-.505-1.228-.505-.93 0-1.683.717-1.683 1.6 0 .126.015.248.043.365-1.399-.067-2.639-.704-3.469-1.672-.144.237-.227.512-.227.804 0 .555.297 1.046.748 1.332-.276-.008-.535-.08-.762-.2v.02c0 .776.58 1.423 1.35 1.57-.142.036-.29.056-.443.056-.109 0-.215-.01-.317-.029.214.636.836 1.099 1.572 1.111-.576.43-1.302.686-2.09.686-.136 0-.27-.008-.402-.023.745.455 1.63.72 2.58.72 3.096 0 4.789-2.439 4.789-4.554 0-.068-.002-.138-.005-.206.328-.226.614-.508.839-.828z" }))) }, { writingDirection: t });
            };
            o.metadata = { width: 16, height: 16 };
            const c = o;
        },
        416955: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9 7.75a3 3 0 015.179-2.062l1.452-1.376A5 5 0 007 7.75V8h-.499a2.5 2.5 0 00-2.5 2.5v9a2.5 2.5 0 002.5 2.5h11a2.5 2.5 0 002.5-2.5v-9a2.5 2.5 0 00-2.5-2.5H9zM10.002 14a2 2 0 113 1.732V18h-2v-2.268a2 2 0 01-1-1.732z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        540820: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 50 50", children: i.createElement("g", null, i.createElement("path", { d: "M25.23 12.24l-2.1-2.1c-4.54-4.54-11.9-4.54-16.45 0h0c-4.54 4.54-4.54 11.9 0 16.45l18.55 18.55 16.45-16.45 2.1-2.1c4.54-4.54 4.54-11.9 0-16.45h0c-4.54-4.54-11.9-4.54-16.45 0l-2.1 2.1h0z", fill: "none", stroke: "#fff", strokeMiterlimit: "10" }), i.createElement("path", { d: "M26.86 23.19l6.39-7.29h-1.51l-5.55 6.33-4.43-6.33h-5.11l6.7 9.57-6.7 7.64h1.51l5.86-6.68 4.68 6.68h5.11l-6.95-9.92zm-2.07 2.37l-.68-.95-5.4-7.58h2.33l4.36 6.12.68.95 5.67 7.95h-2.33l-4.62-6.49z", fill: "#fff" })) }, { writingDirection: t });
            };
            o.metadata = { width: 50, height: 50 };
            const c = o;
        },
        2691: (e, t, l) => {
            l.r(t), l.d(t, { default: () => c });
            var i = l(202784),
                r = l(890601),
                a = l(783427),
                n = l(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 55 9", children: i.createElement("g", null, i.createElement("path", { d: "M53 7.393C53 8.28 52.28 9 51.393 9h-5.786C44.72 9 44 8.28 44 7.393V1.607C44 .72 44.72 0 45.607 0h5.786C52.28 0 53 .72 53 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M51.556 3.792l-2.112-.31-.967-2.192v-.003L47.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M42 7.393C42 8.28 41.28 9 40.393 9h-5.786C33.72 9 33 8.28 33 7.393V1.607C33 .72 33.72 0 34.607 0h5.786C41.28 0 42 .72 42 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M40.556 3.792l-2.112-.31-.967-2.192v-.003L36.56 3.48l-2.11.307 1.525 1.494-.36 2.116 1.863-1.227 1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M31 7.393C31 8.28 30.28 9 29.393 9h-5.786C22.72 9 22 8.28 22 7.393V1.607C22 .72 22.72 0 23.607 0h5.786C30.28 0 31 .72 31 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M29.557 3.792l-2.112-.31-.967-2.19-.917 2.188-2.11.307 1.526 1.494-.36 2.116L26.48 6.17l1.93 1.183-.38-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M20 7.393C20 8.28 19.28 9 18.393 9h-5.786C11.72 9 11 8.28 11 7.393V1.607C11 .72 11.72 0 12.607 0h5.786C19.28 0 20 .72 20 1.607v5.786z", fill: "#BCBDBB" }), i.createElement("path", { d: "M18.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307 1.526 1.494-.36 2.116L15.48 6.17l1.927 1.183-.378-2.067", fill: "#F0F0EF" }), i.createElement("path", { d: "M9 7.393C9 8.28 8.28 9 7.393 9H1.607C.72 9 0 8.28 0 7.393V1.607C0 .72.72 0 1.607 0h5.786C8.28 0 9 .72 9 1.607v5.786z", fill: "#C8881F" }), i.createElement("path", { d: "M7.556 3.792l-2.112-.31-.965-2.19-.92 2.188-2.11.307L2.977 5.28l-.36 2.116L4.48 6.17l1.927 1.183-.378-2.067", fill: "#FFF" })) }, { writingDirection: t });
            };
            o.metadata = { width: 55, height: 9 };
            const c = o;
        },
        858440: (e, t, l) => {
            l.d(t, { Z: () => a });
            var i = l(878052),
                r = l(202784);
            function a() {
                var e = (0, r.useState)(() => i.Z.get("window")),
                    t = e[0],
                    l = e[1];
                return (
                    (0, r.useEffect)(() => {
                        function e(e) {
                            var t = e.window;
                            null != t && l(t);
                        }
                        return (
                            i.Z.addEventListener("change", e),
                            l(i.Z.get("window")),
                            () => {
                                i.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    t
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a.b463a45a.js.map
