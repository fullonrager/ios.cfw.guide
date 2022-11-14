import{_ as a,o as s,c as l,a as e,b as o,d as t,w as d,e as c,r as n}from"./app.51bf123b.js";const h={},u=e("h2",{id:"help-page",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#help-page","aria-hidden":"true"},"#"),o(" Help page")],-1),p={href:"https://discord.gg/9apvC4C3CC",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"ibec-error-error-code-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ibec-error-error-code-8","aria-hidden":"true"},"#"),o(" iBEC error (error code -8)")],-1),m=e("p",null,"This is a common error which you may run into while using FutureRestore, especially if you are using a Windows machine. To fix this:",-1),f=e("li",null,[o("Uninstall all Apple devices in Device Manager "),e("ul",null,[e("li",null,'Make sure to check "Uninstall Driver" when uninstalling')])],-1),g=e("li",null,"Uninstall all Apple products including iTunes and Apple Device Support programs in the Control Panel",-1),v=e("li",null,"Unplug and replug your device",-1),b=e("li",null,"Check device manager for any Apple devices and uninstall them and any drivers",-1),y=e("li",null,"Disconnect your device",-1),w=e("code",null,".exe",-1),k={href:"https://support.apple.com/kb/DL1816?locale=en_US",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.howtogeek.com/396530/how-to-put-your-iphone-or-ipad-into-recovery-mode/",target:"_blank",rel:"noopener noreferrer"},T=e("li",null,"Uninstall the iBoot (Recovery) driver and software from Device Manager",-1),R=e("li",null,"Run FutureRestore again",-1),C=e("li",null,"Unplug and replug your device.",-1),B=e("li",null,"Run FutureRestore again. This issue should now be resolved.",-1),D=e("p",null,[e("img",{src:"https://media.discordapp.net/attachments/825122925204078622/839186681202212904/unknown.png",alt:"example"})],-1),E=e("h2",{id:"device-apnonce-doesn-t-match-apticket-nonce",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#device-apnonce-doesn-t-match-apticket-nonce","aria-hidden":"true"},"#"),o(" Device ApNonce doesn't match APTicket nonce")],-1),F=e("code",null,"Setting nonce",-1),N=e("h2",{id:"sep-firmware-is-not-being-signed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sep-firmware-is-not-being-signed","aria-hidden":"true"},"#"),o(" SEP Firmware is not being signed")],-1),S=e("em",null,"target",-1),I=e("em",null,"latest",-1),U=e("code",null,"latest-sep",-1),A=e("code",null,"custom-latest",-1),M=e("code",null,"custom-latest-buildid",-1),P=e("code",null,"custom-latest-beta",-1),L={href:"https://docs.google.com/spreadsheets/d/1Mb1UNm6g3yvdQD67M413GYSaJ4uoNhLgpkc7YKi3LBs/edit#gid=0",target:"_blank",rel:"noopener noreferrer"},V=e("a",{href:"appledb"},"https://appledb.dev",-1),Y=c('<h2 id="could-not-connect-to-device-in-recovery-mode-failed-to-place-device-in-recovery-mode" tabindex="-1"><a class="header-anchor" href="#could-not-connect-to-device-in-recovery-mode-failed-to-place-device-in-recovery-mode" aria-hidden="true">#</a> Could not connect to device in recovery mode / Failed to place device in recovery mode</h2><p><strong>NOTE:</strong> if the error is similarly named, follow these steps too.</p><ul><li>If your device is in recovery mode, run FutureRestore again while your device is in recovery mode.</li><li>If your device is not in recovery mode, enter recovery mode manually, then run FutureRestore again.</li></ul><h2 id="error-unable-to-receive-message-from-fdr" tabindex="-1"><a class="header-anchor" href="#error-unable-to-receive-message-from-fdr" aria-hidden="true">#</a> Error: Unable to receive message from FDR...</h2><p>The fix for this is either waiting (it can take a very long time) or just re-trying the process. This is an error that has been diagnosed but no fix for it is available as of the time of writing this.</p><h2 id="about-to-send-nor-data-no-data-to-read" tabindex="-1"><a class="header-anchor" href="#about-to-send-nor-data-no-data-to-read" aria-hidden="true">#</a> About to send NOR data... No data to read</h2><p>If you get this error message, you may try stopping the futurerestore process and disabling the <code>no-rsep</code> argument. If the restore continues to get stuck here regardless if <code>no-rsep</code> is enabled or disabled, you may be unable to restore as the cause of this error has not been diagnosed at the time of writing.</p>',7);function j(J,O){const r=n("ExternalLinkIcon"),i=n("router-link");return s(),l("div",null,[u,e("ul",null,[e("li",null,[o("This page is intended to provide solutions for errors encountered with FutureRestore. If none work, please join the r/Jailbreak "),e("a",p,[o("Discord Server"),t(r)]),o(" and ask in #futurerestorehelp")])]),_,m,e("ol",null,[f,g,v,b,y,e("li",null,[o("Install the iTunes "),w,o(" file from "),e("a",k,[o("apple.com"),t(r)]),o(" itself")]),e("li",null,[o("Boot your device into "),e("a",x,[o("Recovery Mode"),t(r)]),o(" and plug it into your computer")]),T,R,C,B]),D,E,e("p",null,[o("This error means that you have not set your generator on your device to that of the blob. In order to solve this problem, follow the "),F,o(" part of the "),t(i,{to:"/futurerestore"},{default:d(()=>[o("FutureRestore page")]),_:1})]),N,e("p",null,[o("This problem occurs when the user tries to manually specify SEP from the "),S,o(" version, instead of from the "),I,o(" available version. To fix this problem, either choose the "),U,o(" argument or use the "),A,o(" or "),M,o(" with the "),P,o(" argument with a compatible version provided based on the "),e("a",L,[o("SEP/BB Compatibility Chart"),t(r)]),o(" (you can use "),V,o(" to find the buildid for a version). You do not need to manually provide SEP or BB.")]),Y])}var H=a(h,[["render",j],["__file","index.html.vue"]]);export{H as default};
