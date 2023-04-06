setREVStartSize({
                c: "rev_slider_2_1",
                rl: [1240, 1240, 778, 480],
                el: [860, 860, 700, 500],
                gw: [1280, 1280, 778, 480],
                gh: [860, 860, 700, 500],
                type: "standard",
                justify: "",
                layout: "fullwidth",
                mh: "0",
            });
            var revapi2, tpj;
            function revinit_revslider21() {
                jQuery(function () {
                    tpj = jQuery;
                    revapi2 = tpj("#rev_slider_2_1");
                    if (revapi2 == undefined || revapi2.revolution == undefined) {
                        revslider_showDoubleJqueryError("rev_slider_2_1");
                    } else {
                        revapi2.revolution({
                            sliderLayout: "fullwidth",
                            visibilityLevels: "1240,1240,778,480",
                            gridwidth: "1280,1280,778,480",
                            gridheight: "860,860,700,500",
                            perspective: 600,
                            perspectiveType: "local",
                            editorheight: "860,768,700,500",
                            responsiveLevels: "1240,1240,778,480",
                            progressBar: { disableProgressBar: true },
                            navigation: {
                                wheelCallDelay: 1000,
                                onHoverStop: false,
                                touch: {
                                    touchenabled: true,
                                },
                            },
                            fallbacks: {
                                allowHTML5AutoPlayOnAndroid: true,
                            },
                        });
                    }
                });
            } // End of RevInitScript
            var once_revslider21 = false;
            if (document.readyState === "loading") {
                document.addEventListener("readystatechange", function () {
                    if ((document.readyState === "interactive" || document.readyState === "complete") && !once_revslider21) {
                        once_revslider21 = true;
                        revinit_revslider21();
                    }
                });
            } else {
                once_revslider21 = true;
                revinit_revslider21();
            }
