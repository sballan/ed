// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("trix")
require("@rails/actiontext")

// Import Fonts here to use webpacker.  We also import styles here in order to process scss in webpacker.  It's gross, but this will be the entrypoint for all of our styles.
import '@fortawesome/fontawesome-free/js/all'
import './styles.scss'