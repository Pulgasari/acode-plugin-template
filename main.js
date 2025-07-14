acode.setPluginInit( 'com.example.plugin', (_, $page) => {
  // Say Hello
  window.toast('Example Plugin mounted.');
});

acode.setPluginUnmount( 'com.example.plugin', () => {
  // Say Bye
  window.toast('Example Plugin unmounted.');
});
