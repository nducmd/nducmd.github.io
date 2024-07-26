function handleHashRedirect() {
    const hash = window.location.hash;
  
    if (hash.startsWith('#/')) {
      const newUrl = `${window.location.origin}/#${hash.substring(1)}`;
      window.location.replace(newUrl);
    }
  }
  
  function handleNoHashRedirect() {
    const path = window.location.pathname;
  
    if (path !== '/' && path.length > 1) {
      window.location.replace(`${window.location.origin}/`);
    }
  }
  
  (function() {
    if (window.location.hash) {
      handleHashRedirect();
    } else {
      handleNoHashRedirect();
    }
  })();
  