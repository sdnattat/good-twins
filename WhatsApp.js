    (function () {
        var options = {
            whatsapp: &quot;+972597689413&quot;, // WhatsApp number
            call_to_action: &quot;للتواصل معي من هنا&quot;, // Call to action
            position: &quot;right&quot;, // Position may be &#39;right&#39; or &#39;left&#39;
        };
        var proto = document.location.protocol, host = &quot;whatshelp.io&quot;, url = proto + &quot;//static.&quot; + host;
        var s = document.createElement(&#39;script&#39;); s.type = &#39;text/javascript&#39;; s.async = true; s.src = url + &#39;/widget-send-button/js/init.js&#39;;
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName(&#39;script&#39;)[0]; x.parentNode.insertBefore(s, x);
    })();
