let navY = "1.2rem";
let navX = "4rem";

export default { 
    content: [
        "app.vue", 
        "pages/**/*.vue",
        "components/**/*.vue" ],

    theme: {
        extend: {
            spacing: {navY, navX },
            colors: {
                "brandVibrant": "#774AF8",
                "brandMidDark": "#2E1F59",
                "brandDark": "#100B21" } } } }
    
    