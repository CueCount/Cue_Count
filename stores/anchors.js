import { defineStore } from 'pinia';

export const useStore = defineStore("store", () => { 

    /* 
        Grab a session ID 
        Make an initial anchor ID
        With every edit or submit() make a new anchor ID
        Make sub-step anchors within an anchor, for edits that may happen in the same window of something
        Deliver anchor tag + subtag upon query
        talk to the sessions store, trends store, chat store and any others
            receive data per anchor event and provide data
        Query URL for anchor tag
        Change anchor tag in URL

        So it may look something like "/a4"
        Making the URL look like 
            trends.cuecount.com/62983019/a4
    */

});