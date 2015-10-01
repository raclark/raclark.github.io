(function ( window, document, undefined ) {

  'use strict';

(function() {

  var s = document.createElement('script'),
    githubApiUrl = 'https://api.github.com/repos/',
    owner = 'raclark',
    repo = owner + '.github.io';

  s.type = 'text/javascript';
  s.async = true;
  s.src = githubApiUrl + owner + '/' + repo + '?callback=' + owner + '.getGitHubRepoInfo';

  window[ owner ] = window[ owner ] || {};
  window[ owner ].getGitHubRepoInfo = function( response ) {

    var stargazers = response.data.stargazers_count,
      forks = response.data.forks_count;

    document.getElementById('stargazers').innerText = stargazers;
    document.getElementById('forks').innerText = forks;
    document.getElementById('github-repo-info').style.display = 'block';
  };

  document.getElementsByTagName('HEAD')[ 0 ].appendChild( s );
}());

(function( d, s, id ){
  var js,
      fjs = d.getElementsByTagName( s )[ 0 ],
      p = /^http:/.test( d.location ) ? 'http' : 'https';

  if( !d.getElementById( id ) ) {

    js = d.createElement( s );
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore( js, fjs );
  }
})( document, 'script', 'twitter-wjs' );

window.fbAsyncInit = function() {

  FB.init({
    appId: '1550934121853744',
    xfbml: true,
    version: 'v2.2'
  });
};

(function( d, s, id ) {

  var js,
    fjs = d.getElementsByTagName( s )[ 0 ];

  if ( d.getElementById(id) ) {
    return;
  }

  js = d.createElement( s );
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore( js, fjs );
}( document, 'script', 'facebook-jssdk' ));

(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/platform.js';
  var s = document.getElementsByTagName('script')[ 0 ]; s.parentNode.insertBefore( po, s );
})();

// Disqus count
(function() {

  var disqus_shortname = 'MatthewThoClark',
    s = document.createElement('script');

  s.type = 'text/javascript';
  s.async = true;
  s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';

  ( document.getElementsByTagName('HEAD')[ 0 ] || document.getElementsByTagName('BODY')[ 0 ] ).appendChild( s );
}());

// Disqus recent comments
(function() {

  var s = document.createElement('script'),
    owner = 'raclark',
    disqusApiUrl = 'https://disqus.com/api/3.0/forums/listPosts.jsonp?forum=',
    forum = 'MatthewThoClark',
    apiKey = 'r1Jo5nNACee32bU3xtpCDmwzlr6M9CON8Wx0cKMDPrqGbrLgPgv8TUS6d56xuLlz';

  s.type = 'text/javascript';
  s.async = true;
  s.src = disqusApiUrl + forum + '&related=thread&api_key=' + apiKey + '&callback=' + owner + '.getRecentComments';

  window[ owner ] = window[ owner ] || {};
  window[ owner ].getRecentComments = function( data ) {

    if ( !isThereComment() ) {
      return;
    }

    var ulTag = document.createElement('ul'),
      liTag,
      aTag,
      spanTag,
      i = 0,
      numOfComments = data.response.length,
      recentCommentsToDisplay = '5',
      authorName,
      threadTitle,
      threadLink;

    for ( ; i < numOfComments && i < recentCommentsToDisplay; i++ ) {

      authorName = data.response[ i ].author.name;
      threadTitle = data.response[ i ].thread.title;
      threadLink = data.response[ i ].url;

      aTag = document.createElement('a');
      aTag.setAttribute( 'href', threadLink );
      aTag.innerText = threadTitle;
      spanTag = document.createElement('span');
      spanTag.innerText = authorName + ' on ';
      spanTag.className = 'disqus-author';

      liTag = document.createElement('li');
      liTag.appendChild( spanTag );
      liTag.appendChild( aTag );
      ulTag.appendChild( liTag );
    }

    document.getElementById('recent-comments-section').appendChild( ulTag );
    document.getElementById('recent-comments-section').style.display = 'block';

    //////////

    function isThereComment() {
      return !!data.response.length;
    }
  };

  document.getElementsByTagName('HEAD')[ 0 ].appendChild( s );
}());

})( this, document );

if(!window.console){window.console={}
}if(typeof window.console.log!=="function"){window.console.log=function(){}
}if(typeof window.console.warn!=="function"){window.console.warn=function(){}
}(function(){var S={"bootstrapInit":+new Date()},p=document,m=(/^https?:\/\/.*?linkedin.*?\/in\.js.*?$/),b=(/async=true/),D=(/^https:\/\//),J=(/\/\*((?:.|[\s])*?)\*\//m),F=(/\r/g),j=(/[\s]/g),g=(/^[\s]*(.*?)[\s]*:[\s]*(.*)[\s]*$/),x=(/_([a-z])/gi),A=(/^[\s]+|[\s]+$/g),u=(/^[a-z]{2}(_)[A-Z]{2}$/),C=(/suppress(Warnings|_warnings):true/gi),d=(/^api(Key|_key)$/gi),k="\n",G=",",n="",I="@",o="extensions",Z="on",w="onDOMReady",ac="onOnce",aa="script",L="https://www.linkedin.com/uas/js/userspace?v=0.0.2000-RC8.40280-1420",h="https://platform.linkedin.com/js/secureAnonymousFramework?v=0.0.2000-RC8.40280-1420",H="http://platform.linkedin.com/js/nonSecureAnonymousFramework?v=0.0.2000-RC8.40280-1420",P="http://platform.linkedin.com/js/frameworkV2?v=0.0.2000-RC8.40280-1420",B=p.getElementsByTagName("head")[0],t=p.getElementsByTagName(aa),X=[],a=[],O=["lang"],R={},c=false,ad,l,W,r,K,E,ab;
if(window.IN&&IN.ENV&&IN.ENV.js){if(!IN.ENV.js.suppressWarnings){console.warn("duplicate in.js loaded, any parameters will be ignored")
}return
}window.IN=window.IN||{};
IN.ENV={};
IN.ENV.js={};
IN.ENV.js.extensions={};
statsQueue=IN.ENV.statsQueue=[];
statsQueue.push(S);
ad=IN.ENV.evtQueue=[];
IN.Event={on:function(){ad.push({type:Z,args:arguments})
},onDOMReady:function(){ad.push({type:w,args:arguments})
},onOnce:function(){ad.push({type:ac,args:arguments})
}};
IN.$extensions=function(ag){var aj,i,af,ai,ah=IN.ENV.js.extensions;
aj=ag.split(G);
for(var ae=0,e=aj.length;
ae<e;
ae++){i=V(aj[ae],I,2);
af=i[0].replace(A,n);
ai=i[1];
if(!ah[af]){ah[af]={src:(ai)?ai.replace(A,n):n,loaded:false}
}}};
function V(ag,ae,e){var ah=ag.split(ae);
if(!e){return ah
}if(ah.length<e){return ah
}var af=ah.splice(0,e-1);
var i=ah.join(ae);
af.push(i);
return af
}function v(e,i){if(e===o){IN.$extensions(i);
return null
}if(d.test(e)){i=i.replace(j,n)
}if(i===""){return null
}return i
}function N(af,ag){ag=v(af,ag);
if(ag){af=af.replace(x,function(){return arguments[1].toUpperCase()
});
if(af==="lang"&&!u.test(ag)){try{var ae=ag.replace("-","_").split("_");
ae=[ae[0].substr(0,2).toLowerCase(),ae[1].substr(0,2).toUpperCase()].join("_");
if(!u.test(ae)){throw new Error()
}else{ag=ae
}}catch(ah){if(!(ab||IN.ENV.js.suppressWarnings)&&ag){console.warn("'"+ag+"' is not a supported language, defaulting to 'en_US'")
}ag="en_US"
}}else{if(af==="noAuth"||af==="noApi"){ag=/^(?:true|yes|1)$/i.test(ag)
}}IN.ENV.js[af]=ag;
var ai=[encodeURIComponent(af),encodeURIComponent(ag)].join("=");
for(var i in O){if(O.hasOwnProperty(i)&&O[i]===af){a.push(ai);
return
}}X.push(ai)
}}l="";
for(U=0,q=t.length;
U<q;
U++){var f=t[U];
if(!m.test(f.src)){continue
}if(b.test(f.src)){c=true
}try{l=f.innerHTML.replace(A,n)
}catch(z){try{l=f.text.replace(A,n)
}catch(y){}}}l=l.replace(J,"$1").replace(A,n).replace(F,n);
ab=C.test(l.replace(j,n));
for(var U=0,T=l.split(k),q=T.length;
U<q;
U++){var s=T[U];
if(!s||s.replace(j,n).length<=0){continue
}try{W=s.match(g);
r=W[1].replace(A,n);
K=W[2].replace(A,n)
}catch(Y){if(!ab){console.warn("script tag contents must be key/value pairs separated by a colon. Source: "+Y)
}continue
}N(r,K)
}N("secure",1);
function M(e,i){return e+((/\?/.test(e))?"&":"?")+i.join("&")
}IN.init=function Q(i){var e=IN.ENV.js,ae,af;
i=i||{};
for(ae in i){if(i.hasOwnProperty(ae)){N(ae,i[ae])
}}E=p.createElement(aa);
if(e.v2){af=M(P,X)
}else{if(e.apiKey&&!e.noAuth){af=M(L,X)
}else{af=e.secure?h:H
}}E.src=M(af,a);
B.appendChild(E);
statsQueue.push({"userspaceRequested":+new Date()});
IN.init=function(){}
};
statsQueue.push({"bootstrapLoaded":+new Date()});
if(!c){IN.init()
}})();
