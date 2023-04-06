var htmlDivCss = unescape(".jost-font%7B%20font-family%3A%20%27jost%27%20%21important%3B%20%7D");
            var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
            if (htmlDiv) {
                htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
            } else {
                var htmlDiv = document.createElement("div");
                htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
                document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
            }
