import { defineStore } from 'pinia';

export const useSessionsStore = defineStore("Session", () => { 
    const route = useRoute();
    console.log(route); // alerts
    const page = route.name;
// create unique session ID here 
    const sessions = ref({});

    /*
        Create Session IDs. Store the current Session ID for User Chat. Make a session ID the URL. Provide Current Session ID upon request. Retrieve a different session. Store the anchor ID. Make a anchor ID the URL
        Note: It's implied that every function return a success message
    */

    /* 
        CreateNewSesh()
            GenerateSeshID()
            AddSeshIdURL()
            AddNewSeshTag()
            return SeshID + "New Sesh"

        FetchNewSesh()
            FetchCurrentData()
            PassSeshData()

        FetchSavedSesh()
            FetchDatabaseData()
            FetchCurrentData()
            PassSeshData()

        CheckForEdit() 
            const Event = 
                EventListener.Submit[ChatButton],
                EventListener.Submit[TrendButton],
                EventListener.Misc
            If (Event = True)
                SaveSesh()

        SaveSesh() 
            FetchDatabaseData()
            FetchCurrentData()
            SaveToDatabase()
    */

    /* 
        MISC FUNCTIONS:

        FetchDatabaseData()
            This gets session data from the database
        
        FetchCurrentData()
            This gets session data from the current store
        
        PassSeshData()
            This passes session data from the current session store into all the other stores (Anchor, Trend Data, etc)
        
        GenerateSeshID() 
            return SeshID

        AddSeshIdURL() 
            return UpdatedURL 

        CheckForSeshID()
            Checks the URL for what session ID is in it
            return SeshID || "New Sesh"
    */
    
    function createNewSession(name) {
        let id = randomId(10);
        sessions.value[id] = {
            id:id, name:name, data:[]
        };
	    return id;
    }

    function randomId(len) {
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
        let str = "";
        for (var i = 0; i <= len; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        };
        return str;
    }

    // Use a package called GUID - in npm exports different functions. V4 or V5. 

    createNewSession();

});