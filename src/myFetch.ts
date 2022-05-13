export const fetchStore = {}

export const cacheResponse = (key, data)=>{
  fetchStore[key] = data;
}

export const hydrateFetchStore = (ssrFetchStore: object)=>{
  Object.assign(fetchStore, ssrFetchStore)
}

export const myFetch = async (endpoint)=>{
  
  // Dont fetch data again which is already in the cache
  if(fetchStore[endpoint]){
    return fetchStore[endpoint]
  } 
  
  const res = await fetch(endpoint);
  const data = await res.json();
  cacheResponse(endpoint, data);
  
  return data
}
