import{_ as i,o as n,c as r,a as e,d as o,w as a,e as l,r as c,b as s}from"./app.51bf123b.js";const d={},p=l('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you are not using the semi-tethered setting, this is a <strong>tethered</strong> jailbreak, which means the device must be booted using a computer every time, otherwise it won&#39;t boot at all.</p><p>However, this can be easily reverted using <code>irecovery -n</code> (and other tools that can kick the device out of recovery mode) (this will remove your jailbreak, however).</p><p>If you&#39;d like it to be semi-tethered, add the <code>--semi-tethered</code> argument to the end of the jailbreak command. Keep in mind this will use 5-10GB of storage, so this won&#39;t work on 16GB devices.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>You must install Tips from the App Store, as the script replaces it with the loader app called Pogo, written by Amy.</p></div><p>palera1n is a work-in-progress script that patches the kernel so you can use tweaks and other stuff.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>palera1n only supports A11 and earlier devices running iOS 15.0 - 15.7.1</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>On A10(X) and A11 devices, you <strong>must disable your passcode</strong> and will not be able to use your passcode, or other SEP functionality, until you remove palera1n. SEP functionality includes things such as a passcode, Face ID/Touch ID, and Apple Pay.</p><p>On A10(X) devices, this may be able to be resolved in the future via a SEP exploit. On A11 devices, however, there isn&#39;t a SEP exploit, so this has no chance of being resolved at this time.</p></div><hr><p>Please select your operating system:</p>',7),u=e("p",null,"To revert the jailbreak, use the following guide:",-1);function h(m,v){const t=c("router-link");return n(),r("div",null,[p,e("ul",null,[e("li",null,[o(t,{to:"/installing-palera1n/macos/"},{default:a(()=>[s("macOS")]),_:1})]),e("li",null,[o(t,{to:"/installing-palera1n/linux/"},{default:a(()=>[s("Linux")]),_:1})])]),u,e("ul",null,[e("li",null,[o(t,{to:"/removing-palera1n/"},{default:a(()=>[s("Removing palera1n")]),_:1})])])])}var f=i(d,[["render",h],["__file","index.html.vue"]]);export{f as default};
