// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore("store", () => {
  
  /*
    Create Data from inputs and ID calls
    Grab graph and text data by ID calls
    Update Data and Save Back
    Save New Data
    Delete Data 

    If (Request from Alerts Page)
                ... Get Sessions based on last edit made() Use a component for these 
            If (Page == History)
                ...
            If (Page == UserTrends)
                ...
            If (Page == SessionPage) 
                CheckForSeshID()
                If (SeshID == SeshID + "New Sesh")
                    FetchNewSesh()
                Else If (SeshID == SeshID)
                    FetchSavedSesh()
                Else 
                    [ Error Message ]
  */

 

  const graphData = ref({});

  async function getData(slug) {
    
    if (slug = "Demographics_From_2020") {
      graphData.value[slug] = [
        { year: 2010, count: 0 },{ year: 2011, count: 1 },{ year: 2012, count: 50 },{ year: 2013, count: 25 },{ year: 2014, count: 4 },{ year: 2015, count: 30 },{ year: 2016, count: 70 } ];
    }
    
    if (slug = "Demographics_From_2021") {
      graphData.value[slug] = [
        { year: 2010, count: 50 },{ year: 2011, count: 40 },{ year: 2012, count: 40 },{ year: 2013, count: 40 },{ year: 2014, count: 34 },{ year: 2015, count: 34 },{ year: 2016, count: 28 } ];
    } 
    
    if (slug = "Demographics_From_2022") {
      graphData.value[slug] = [
        { year: 2010, count: 10 },{ year: 2011, count: 20 },{ year: 2012, count: 15 },{ year: 2013, count: 25 },{ year: 2014, count: 22 },{ year: 2015, count: 30 },{ year: 2016, count: 28 } ];
    }

  }

  return {getData,graphData}; },
  
  );